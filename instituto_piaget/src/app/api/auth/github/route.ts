// Importa NextResponse para manejar las respuestas de API en Next.js App Router
import { NextResponse } from 'next/server';

// Función para manejar POST requests (intercambio de code por access_token de GitHub)
export async function POST(request: Request) {
  // Extrae el 'code' del cuerpo de la petición (lo manda Decap CMS después de autenticarse en GitHub)
  const { code } = await request.json();

  // Lee las credenciales de GitHub de las variables de entorno
  const client_id = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
  const client_secret = process.env.GITHUB_CLIENT_SECRET;

  // Hace un request a GitHub para intercambiar el 'code' por un 'access_token'
  const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id,
      client_secret,
      code,
    }),
  });

  // Convierte la respuesta en JSON
  const data = await tokenResponse.json();

  // Si GitHub regresa un error, responde con error
  if (data.error) {
    return NextResponse.json({ error: data.error_description }, { status: 400 });
  }

  // Si todo sale bien, responde con los datos (access_token) a Decap CMS
  return NextResponse.json(data, { status: 200 });
}

// (Opcional) Si alguien intenta usar GET en vez de POST, regresa error de método no permitido
export async function GET() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}
