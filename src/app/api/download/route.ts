import { NextRequest, NextResponse } from "next/server";
import { getGameById, getGamePackage } from "@/data/games";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id") || "";
  const version = searchParams.get("version") || "";

  const game = getGameById(id);
  if (!game) {
    return new NextResponse("Game file not found", { status: 404 });
  }

  // 1. If self-hosted or custom downloadUrl is set, redirect to it
  if (game.downloadUrl) {
    return NextResponse.redirect(game.downloadUrl, 307);
  }

  // 2. Extract package name
  const pkg = getGamePackage(game);

  if (pkg) {
    // Redirect to direct APK file download stream
    const realApkStreamUrl = `https://d.apkpure.com/b/APK/${pkg}?version=latest`;
    return NextResponse.redirect(realApkStreamUrl, 307);
  }

  // 3. Fallback to Google Play Store if no package match
  const fallbackUrl = game.playStoreUrl || `https://www.apkmirror.com/?s=${encodeURIComponent(game.name)}`;
  return NextResponse.redirect(fallbackUrl, 307);
}
