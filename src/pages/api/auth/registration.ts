import type { APIRoute } from 'astro';

export const prerender = false;

const KEYCLOAK_BASE_URL =
  'https://auth.codebridge.ai.kr/realms/main/protocol/openid-connect';

const stripTrailingSlash = (value: string) =>
  value.endsWith('/') ? value.slice(0, -1) : value;

const resolveRedirectRoot = (request: Request) => {
  const envRoot = import.meta.env.KEYCLOAK_REDIRECT_URI_ROOT;
  if (envRoot) {
    return stripTrailingSlash(envRoot);
  }

  const url = new URL(request.url);
  return `${url.protocol}//${url.host}`;
};

export const GET: APIRoute = async ({ request, redirect }) => {
  const clientId = import.meta.env.KEYCLOAK_CLIENT_ID;
  if (!clientId) {
    return new Response(
      JSON.stringify({ error: 'Missing Keycloak environment configuration.' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  const redirectRoot = resolveRedirectRoot(request);
  const redirectUri = `${redirectRoot}/api/auth/callback`;

  const registrationUrl = `${KEYCLOAK_BASE_URL}/registrations?client_id=${encodeURIComponent(
    clientId
  )}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code`;

  return redirect(registrationUrl);
};
