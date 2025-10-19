import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = ({ cookies }) => {
  const session = cookies.get('session');

  if (!session?.value) {
    return new Response(JSON.stringify({ loggedIn: false }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ loggedIn: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

