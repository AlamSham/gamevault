import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Handle /game?id=xxx or /game.html?id=xxx
  if (pathname === "/game" || pathname === "/game.html") {
    const id = searchParams.get("id");
    if (id) {
      const target = new URL(`/game/${encodeURIComponent(id)}`, request.url);
      target.search = ""; // clear query params for clean canonical URL
      return NextResponse.redirect(target, 301);
    }
    return NextResponse.redirect(new URL("/", request.url), 301);
  }

  // Handle /download?id=xxx or /download.html?id=xxx
  if (pathname === "/download" || pathname === "/download.html") {
    const id = searchParams.get("id");
    const version = searchParams.get("version");
    if (id) {
      const target = new URL(`/download/${encodeURIComponent(id)}`, request.url);
      if (version) {
        target.searchParams.set("version", version);
      } else {
        target.search = "";
      }
      return NextResponse.redirect(target, 301);
    }
    return NextResponse.redirect(new URL("/", request.url), 301);
  }

  // Handle /category.html?name=xxx
  if (pathname === "/category.html") {
    const name = searchParams.get("name") || searchParams.get("category");
    if (name) {
      const target = new URL(`/category/${encodeURIComponent(name.toLowerCase())}`, request.url);
      target.search = "";
      return NextResponse.redirect(target, 301);
    }
    return NextResponse.redirect(new URL("/", request.url), 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/game",
    "/game.html",
    "/download",
    "/download.html",
    "/category.html",
  ],
};
