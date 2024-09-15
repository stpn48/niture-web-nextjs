import { NextRequest, NextResponse } from 'next/server';
import { RateLimiterMemory } from 'rate-limiter-flexible';

const rateLimiter = new RateLimiterMemory({
  points: 50, // Number of points
  duration: 60, // Per minute
});

export async function middleware(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for') || 'unknown';

  try {
    await rateLimiter.consume(ip);
    return NextResponse.next();
  } catch (rejRes) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }
}

export const config = {
  matcher: ['/api/:path*'], // Apply middleware to API routes
};
