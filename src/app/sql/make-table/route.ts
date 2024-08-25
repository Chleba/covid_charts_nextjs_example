
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const res = await sql`CREATE TABLE covid_deaths ( id SERIAL PRIMARY KEY, date DATE, value INT );`;
    return NextResponse.json({ res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

