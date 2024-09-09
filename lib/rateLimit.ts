import { NextRequest, NextResponse } from "next/server";
import { RateLimiterMemory } from "rate-limiter-flexible";

const rateLimiter = new RateLimiterMemory({
  points: 50, // Number of points
  duration: 60, // Per minute
});

export async function rateLimit(
  req: NextRequest,
  _res: NextResponse,
  next: () => void
) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";

  try {
    await rateLimiter.consume(ip);
    next();
  } catch (rejRes) {
    NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }
}
