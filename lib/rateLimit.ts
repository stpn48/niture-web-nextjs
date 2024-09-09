// lib/rateLimit.ts
import { NextApiRequest, NextApiResponse } from "next";
import { RateLimiterMemory } from "rate-limiter-flexible";

const rateLimiter = new RateLimiterMemory({
  points: 50, // Number of points
  duration: 60, // Per minute
});

export async function rateLimit(
  req: NextApiRequest,
  res: NextApiResponse,
  next: () => void
) {
  const ip = (req.headers["x-forwarded-for"] as string) || "unknown";

  try {
    await rateLimiter.consume(ip);
    next();
  } catch (rejRes) {
    res.status(429).json({ message: "Too Many Requests" });
  }
}
