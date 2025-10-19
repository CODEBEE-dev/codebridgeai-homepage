import type { APIRoute } from 'astro';

export const prerender = false;

const KEYCLOAK_TOKEN_URL =
  'https://auth.codebridge.ai.kr/realms/main/protocol/openid-connect/token';

const getEnv = () => {
  const clientId = import.meta.env.KEYCLOAK_CLIENT_ID;
  const redirectRoot = import.meta.env.KEYCLOAK_REDIRECT_URI_ROOT;

  if (!clientId || !redirectRoot) {
    return { clientId: undefined, redirectRoot: undefined };
  }

  return { clientId, redirectRoot };
};

const secureCookie = import.meta.env.NODE_ENV === 'production';

export const GET: APIRoute = async ({ request, redirect, cookies }) => {
  const { clientId, redirectRoot } = getEnv();
  const fallbackRedirect = redirectRoot ?? '/';

  if (!clientId || !redirectRoot) {
    return new Response(
      JSON.stringify({ error: 'Missing Keycloak environment configuration.' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  const url = new URL(request.url);
  const code = url.searchParams.get('code');

  if (!code) {
    return redirect(`${redirectRoot}/`);
  }

  const params = new URLSearchParams();
  params.append('grant_type', 'authorization_code');
  params.append('code', code);
  params.append(
    'redirect_uri',
    `${redirectRoot}/api/auth/callback`
  );
  params.append('client_id', clientId);

  const tokenResponse = await fetch(KEYCLOAK_TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  });

  if (!tokenResponse.ok) {
    const errorBody = await tokenResponse.text();
    return new Response(
      JSON.stringify({ error: 'Failed to fetch token', details: errorBody }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  const tokenData = await tokenResponse.json();

  if (!tokenData.access_token || !tokenData.refresh_token) {
    return new Response(
      JSON.stringify({ error: 'Token response missing expected fields.' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  cookies.set('session', tokenData.access_token, {
    httpOnly: true,
    secure: secureCookie,
    sameSite: 'lax',
    maxAge: 60 * 30,
    path: '/',
  });

  cookies.set('refresh_token', tokenData.refresh_token, {
    httpOnly: true,
    secure: secureCookie,
    sameSite: 'lax',
    maxAge: 60 * 60,
    path: '/',
  });

  return redirect(fallbackRedirect);
};

