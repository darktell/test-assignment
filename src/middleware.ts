import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const PROTECTED_ROUTES = ["/thank-you"];

export function middleware(request: NextRequest) {
  // protected route just with cookie check
  const cookie = request.cookies.get("USER_INFO")?.value;

  if (
    !cookie &&
    PROTECTED_ROUTES.some((path) => request.nextUrl.pathname.startsWith(path))
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/thank-you",
};
