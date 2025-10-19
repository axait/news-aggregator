// app/api/news/route.ts
import { NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let cache: any = null;
let lastFetch = 0;

export async function GET() {
  const now = Date.now();

  // cache for 10 minutes
  if (cache && now - lastFetch < 24 * 60 * 60 * 1000) {
    return NextResponse.json(cache);
  }

  const url =`https://newsapi.org/v2/everything?q=hacker&sortBy=popularity&apiKey=${process.env.NEWS_API_KEY}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    cache = data;
    lastFetch = now;
    console.log(res)
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
