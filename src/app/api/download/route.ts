import { NextRequest, NextResponse } from "next/server";
import { getGameById } from "@/data/games";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id") || "";
  const version = searchParams.get("version") || "";

  const game = getGameById(id);
  if (!game) {
    return new NextResponse("Game file not found", { status: 404 });
  }

  const activeVersion = version || game.version;
  const fileName = `${game.id}-v${activeVersion}.apk`;

  // Dummy APK binary buffer header for instant browser file download test
  const apkBuffer = Buffer.from(
    `GameVault APK Verified File: ${game.name} (Version: ${activeVersion})\nDeveloper: ${game.developer}\nPackage: com.${game.id.replace(/-/g, "")}.apk`
  );

  return new NextResponse(apkBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/vnd.android.package-archive",
      "Content-Disposition": `attachment; filename="${fileName}"`,
      "Content-Length": apkBuffer.length.toString(),
      "Cache-Control": "no-cache",
    },
  });
}
