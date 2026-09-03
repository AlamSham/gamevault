import { NextRequest, NextResponse } from "next/server";
import { GAMES } from "@/data/games";
import { CATEGORIES } from "@/data/categories";
import { BLOG_POSTS } from "@/data/blogs";

const INDEXNOW_KEY = "gamevault8f9e7d6c5b4a3f2e1d0c9b8a7f6e5d4c";
const DOMAIN = "https://gamevaultinfo.com";

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  if (secret !== "gamevault2026index") {
    return NextResponse.json({ error: "Unauthorized. Pass ?secret=gamevault2026index" }, { status: 401 });
  }

  const urlList: string[] = [
    DOMAIN,
    `${DOMAIN}/about`,
    `${DOMAIN}/contact`,
    `${DOMAIN}/dmca`,
    `${DOMAIN}/privacy`,
    `${DOMAIN}/terms`,
    `${DOMAIN}/blog`,
  ];

  GAMES.forEach(g => {
    urlList.push(`${DOMAIN}/game/${g.id}`);
  });

  CATEGORIES.forEach(c => {
    urlList.push(`${DOMAIN}/category/${c.id}`);
  });

  BLOG_POSTS.forEach(b => {
    urlList.push(`${DOMAIN}/blog/${b.id}`);
  });

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        host: "gamevaultinfo.com",
        key: INDEXNOW_KEY,
        keyLocation: `${DOMAIN}/${INDEXNOW_KEY}.txt`,
        urlList: urlList,
      }),
    });

    return NextResponse.json({
      success: true,
      message: `Successfully submitted ${urlList.length} URLs to IndexNow Instant Indexing Protocol!`,
      httpStatus: res.status,
      totalUrlsSubmitted: urlList.length,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
