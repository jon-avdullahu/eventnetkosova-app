import NextAuth from "next-auth";
import { authConfig } from "@/auth";

// Create a handler that works with App Router
const handler = NextAuth(authConfig);

// Use more explicit handler exports
export async function GET(request: Request) {
  try {
    return await handler.auth(request);
  } catch (error) {
    console.error('NextAuth GET error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}

export async function POST(request: Request) {
  try {
    return await handler.auth(request);
  } catch (error) {
    console.error('NextAuth POST error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}

// Force NodeJS runtime
export const runtime = "nodejs"; 