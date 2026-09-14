import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // 1. Handle /game or /game.html (?id=xxx)
  if (pathname === "/game" || pathname === "/game.html") {
    const id = searchParams.get("id");
    if (id) {
      const target = new URL(`/game/${encodeURIComponent(id)}`, request.url);
      target.search = ""; // clear query params for clean canonical URL
      return NextResponse.redirect(target, 301);
    }
    return NextResponse.redirect(new URL("/", request.url), 301);
  }

  // 2. Handle /download or /download.html (?id=xxx, optional &version=xxx)
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

  // 3. Handle /category or /category.html (?id=xxx or ?name=xxx or ?category=xxx)
  if (pathname === "/category" || pathname === "/category.html") {
    const categoryParam = searchParams.get("id") || searchParams.get("name") || searchParams.get("category");
    if (categoryParam) {
      const target = new URL(`/category/${encodeURIComponent(categoryParam.toLowerCase())}`, request.url);
      target.search = "";
      return NextResponse.redirect(target, 301);
    }
    return NextResponse.redirect(new URL("/", request.url), 301);
  }

  // 4. Handle legacy /blog-post or /blog-post.html (?id=xxx or ?slug=xxx)
  if (pathname === "/blog-post" || pathname === "/blog-post.html") {
    const id = searchParams.get("id") || searchParams.get("slug");
    if (id) {
      const target = new URL(`/blog/${encodeURIComponent(id)}`, request.url);
      target.search = "";
      return NextResponse.redirect(target, 301);
    }
    return NextResponse.redirect(new URL("/blog", request.url), 301);
  }

  // 5. Handle legacy static HTML pages
  if (pathname === "/index.html") {
    return NextResponse.redirect(new URL("/", request.url), 301);
  }
  if (pathname === "/blog.html") {
    return NextResponse.redirect(new URL("/blog", request.url), 301);
  }
  if (pathname === "/about.html") {
    return NextResponse.redirect(new URL("/about", request.url), 301);
  }
  if (pathname === "/contact.html") {
    return NextResponse.redirect(new URL("/contact", request.url), 301);
  }
  if (pathname === "/dmca.html") {
    return NextResponse.redirect(new URL("/dmca", request.url), 301);
  }
  if (pathname === "/privacy.html") {
    return NextResponse.redirect(new URL("/privacy", request.url), 301);
  }
  if (pathname === "/terms.html") {
    return NextResponse.redirect(new URL("/terms", request.url), 301);
  }
  if (pathname === "/search.html") {
    const q = searchParams.get("q");
    const target = new URL("/search", request.url);
    if (q) {
      target.searchParams.set("q", q);
    } else {
      target.search = "";
    }
    return NextResponse.redirect(target, 301);
  }

  // 6. Generic catch-all for any other legacy .html URL
  if (pathname.endsWith(".html")) {
    const cleanPath = pathname.slice(0, -5);
    const target = new URL(cleanPath || "/", request.url);
    return NextResponse.redirect(target, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/game",
    "/game.html",
    "/download",
    "/download.html",
    "/category",
    "/category.html",
    "/blog-post",
    "/blog-post.html",
    "/index.html",
    "/blog.html",
    "/about.html",
    "/contact.html",
    "/dmca.html",
    "/privacy.html",
    "/terms.html",
    "/search.html",
    "/((?!api|_next/static|_next/image|images|favicon.ico|sitemap.xml|robots.txt).*.html)",
  ],
};
