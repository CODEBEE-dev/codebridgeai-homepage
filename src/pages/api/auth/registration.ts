import type { APIRoute } from 'astro';

export const prerender = false;

const KEYCLOAK_BASE_URL =
  'https://auth.codebridge.ai.kr/realms/main/protocol/openid-connect';

const getEnv = () => {
  const clientId = import.meta.env.KEYCLOAK_CLIENT_ID;
  const redirectRoot = import.meta.env.KEYCLOAK_REDIRECT_URI_ROOT;

  if (!clientId || !redirectRoot) {
    return { clientId: undefined, redirectRoot: undefined };
  }

  return { clientId, redirectRoot };
};

export const GET: APIRoute = async ({ redirect }) => {
  const { clientId, redirectRoot } = getEnv();

  if (!clientId || !redirectRoot) {
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

  const redirectUri = `${redirectRoot}/api/auth/callback`;

  const registrationUrl = `${KEYCLOAK_BASE_URL}/registrations?client_id=${encodeURIComponent(
    clientId
  )}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code`;

  return redirect(registrationUrl);
};

