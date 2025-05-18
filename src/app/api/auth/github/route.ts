
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { code } = await request.json();

  const client_id = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
  const client_secret = process.env.GITHUB_CLIENT_SECRET;

  const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ client_id, client_secret, code }),
  });

  const data = await tokenResponse.json();

  if (data.error) {
    return NextResponse.json({ error: data.error_description }, { status: 400 });
  }

  return NextResponse.json(data, { status: 200 });
}

export async function GET() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}
