import type { APIRoute } from 'astro';

export const prerender = false;

const KEYCLOAK_LOGOUT_URL =
  'https://auth.codebridge.ai.kr/realms/main/protocol/openid-connect/logout';

const getEnv = () => {
  const clientId = import.meta.env.KEYCLOAK_CLIENT_ID;
  const redirectRoot = import.meta.env.KEYCLOAK_REDIRECT_URI_ROOT;

  if (!clientId || !redirectRoot) {
    return { clientId: undefined, redirectRoot: undefined };
  }

  return { clientId, redirectRoot };
};

const secureCookie = import.meta.env.NODE_ENV === 'production';

export const GET: APIRoute = async ({ cookies, redirect }) => {
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

  const refreshToken = cookies.get('refresh_token');

  if (refreshToken?.value) {
    const params = new URLSearchParams();
    params.append('client_id', clientId);
    params.append('refresh_token', refreshToken.value);

    await fetch(KEYCLOAK_LOGOUT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });
  }

  cookies.set('session', '', {
    httpOnly: true,
    secure: secureCookie,
    sameSite: 'lax',
    maxAge: 0,
    path: '/',
  });

  cookies.set('refresh_token', '', {
    httpOnly: true,
    secure: secureCookie,
    sameSite: 'lax',
    maxAge: 0,
    path: '/',
  });

  return redirect(fallbackRedirect);
};

