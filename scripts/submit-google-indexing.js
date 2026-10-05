console.log("====================================================");
console.log("    GOOGLE INDEXING API INSTANT SUBMISSION TOOL     ");
console.log("====================================================");
console.warn("🛑 EXECUTION BLOCKED FOR DOMAIN SAFETY:");
console.warn("Google Indexing API is strictly restricted to JobPosting and BroadcastEvent pages.");
console.warn("Submitting general game/APK pages violates Google Webmaster Guidelines and triggers");
console.warn("algorithmic domain penalties (0 impressions / sandbox freeze).");
console.warn("Please use Google Search Console XML Sitemap submissions instead.");
process.exit(0);

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const keyData = JSON.parse(fs.readFileSync(keyFile, 'utf8'));
console.log(`👤 Service Account Email: ${keyData.client_email}`);

const gamesTsContent = fs.readFileSync(path.join(rootDir, 'src/data/games.ts'), 'utf8');
const idMatches = [...gamesTsContent.matchAll(/"id":\s*"([a-z0-9-]+)"/g)];
const gameIds = [...new Set(idMatches.map(m => m[1]))];

console.log(`📦 Found ${gameIds.length} Total Games & Apps to Index!`);

const DOMAIN = "https://gamevaultinfo.com";
const urlList = [
  DOMAIN,
  `${DOMAIN}/about`,
  `${DOMAIN}/contact`,
  `${DOMAIN}/dmca`,
  `${DOMAIN}/privacy`,
  `${DOMAIN}/terms`,
  `${DOMAIN}/blog`,
  ...gameIds.map(id => `${DOMAIN}/game/${id}`),
];

console.log(`🌐 Total URLs to submit: ${urlList.length}`);

const jwtClient = new google.auth.JWT({
  email: keyData.client_email,
  key: keyData.private_key,
  scopes: ['https://www.googleapis.com/auth/indexing'],
});

async function submitUrls() {
  try {
    console.log("🔒 Authenticating with Google Cloud OAuth2...");
    await jwtClient.authorize();
    console.log("✅ Authenticated successfully!");

    let successCount = 0;
    let failCount = 0;

    const batch = urlList.slice(0, 200);

    console.log(`🚀 Submitting first ${batch.length} URLs to Google Indexing API...\n`);

    for (const targetUrl of batch) {
      try {
        const res = await google.indexing('v3').urlNotifications.publish({
          auth: jwtClient,
          requestBody: {
            url: targetUrl,
            type: 'URL_UPDATED',
          },
        });
        console.log(`[OK ${res.status}] Submitted: ${targetUrl}`);
        successCount++;
      } catch (err) {
        console.error(`[FAIL] ${targetUrl} -> ${err.message}`);
        failCount++;
      }
      // Wait 1 second to avoid rate-limit throttling
      await new Promise(r => setTimeout(r, 1000));
    }

    console.log("\n====================================================");
    console.log(`🎉 SUBMISSION COMPLETED!`);
    console.log(`✅ Success: ${successCount} URLs`);
    console.log(`❌ Failed: ${failCount} URLs`);
    console.log("====================================================");
    console.log("💡 Googlebot will crawl and index these URLs in 30 mins to 2 hours!");

  } catch (error) {
    console.error("❌ Authentication error:", error.message);
  }
}

submitUrls();
