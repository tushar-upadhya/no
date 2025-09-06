import rateLimitModule from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import dotenv from "dotenv";
dotenv.config();

// Destructure the correct values from the CommonJS default export
const { Ratelimit } = rateLimitModule;

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "20 s"), // 60 requests per minute
});

export default ratelimit;
