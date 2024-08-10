import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
import { NextRequest, NextResponse } from "next/server"

export function middleware(req: NextRequest) {
  const res = NextResponse.next()

  const cookie = req.cookies.get("sessionId")

  if (!cookie) {
    res.cookies.set("sessionId", crypto.randomUUID())
  }

  return res
}


