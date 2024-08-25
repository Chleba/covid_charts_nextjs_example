import { sql } from '@vercel/postgres';

export async function GET() {
  const { rows } = await sql`SELECT date, value FROM covid_deaths`;

  return Response.json({ data: rows });
}
