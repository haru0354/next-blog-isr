import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse, NextFetchEvent } from "next/server";

const adminMiddleware = withAuth({
  callbacks: {
    authorized: ({ token }) => token?.role === "admin",
  },
});

export default async function middleware(
  req: NextRequest,
  event: NextFetchEvent
) {
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    return adminMiddleware(req as NextRequestWithAuth, event);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
  ],
};
