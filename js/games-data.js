/* ============================================
   GAMEVAULT APK — Game Data
   10 Priority Games + Blog Data + Categories
   ============================================ */

const SITE_NAME = "GameVault APK";
const SITE_TAGLINE = "Download Your Favorite Android Games";
const SITE_URL = "https://gamevaultinfo.com"; // Update with real domain

// ---------- CATEGORIES ----------

// Global Helpers for Batch Data Files
window.INSTALL_STEPS = [
  { title: "Download APK", desc: "Click the download button above to get the latest APK file for this game." },
  { title: "Enable Unknown Sources", desc: "Go to Settings → Security → Enable 'Install from Unknown Sources' or allow your browser to install apps." },
  { title: "Locate & Install", desc: "Open your file manager, find the APK in Downloads folder, tap it and press 'Install'." },
  { title: "Open the Game", desc: "Once installed, tap 'Open' to launch the game." },
  { title: "Enjoy Playing!", desc: "Complete the tutorial if any, and start enjoying the game!" }
];
var INSTALL_STEPS = window.INSTALL_STEPS;

window.mkVersions = function(v1,d1,s1,v2,d2,s2,v3,d3,s3){
  return [{version:v1,date:d1,size:s1},{version:v2,date:d2,size:s2},{version:v3,date:d3,size:s3}];
};
var mkVersions = window.mkVersions;

const CATEGORIES = [
  { id: "action", name: "Action", icon: "⚔️", description: "High-octane action games with intense gameplay and combat", count: 35 },
  { id: "racing", name: "Racing", icon: "🏎️", description: "Speed through tracks in the best racing games for Android", count: 20 },
  { id: "puzzle", name: "Puzzle", icon: "🧩", description: "Brain-teasing puzzle games to challenge your mind", count: 25 },
  { id: "strategy", name: "Strategy", icon: "🏰", description: "Build, plan, and conquer with strategy games", count: 18 },
  { id: "sports", name: "Sports", icon: "⚽", description: "Cricket, football, and more sports games", count: 15 },
  { id: "casual", name: "Casual", icon: "🎯", description: "Easy to play, hard to put down casual games", count: 30 },
  { id: "arcade", name: "Arcade", icon: "👾", description: "Classic arcade-style games with endless fun", count: 22 },
  { id: "rpg", name: "RPG", icon: "🗡️", description: "Epic role-playing games with deep storylines", count: 12 },
  { id: "simulation", name: "Simulation", icon: "🌍", description: "Simulate real-world experiences on your phone", count: 10 },
  { id: "adventure", name: "Adventure", icon: "🗺️", description: "Explore vast worlds in adventure games", count: 15 }
];

// ---------- GAMES DATA ----------
const GAMES = [
  {
    id: "subway-surfers",
    name: "Subway Surfers",
    developer: "SYBO Games",
    category: "arcade",
    version: "3.35.0",
    size: "175 MB",
    androidReq: "5.0+",
    rating: 4.5,
    downloads: "1B+",
    lastUpdated: "August 2026",
    icon: "🏃",
    iconColor: "#FFD700",
    description: "Subway Surfers is one of the most downloaded mobile games of all time. Dash through the subway as Jake, Tricky, and Fresh, dodging oncoming trains and collecting coins along the way. With vibrant graphics, smooth controls, and weekly world tours, this endless runner keeps millions of players coming back every day. The game features colorful environments from cities around the world, power-ups like jetpacks and super sneakers, and an ever-growing collection of characters and hoverboards.",
    features: [
      "Colorful HD graphics with smooth animations",
      "Weekly World Tour updates with new cities",
      "Collect coins, keys, and power-ups",
      "Unlock new characters and hoverboards",
      "Jetpack, Super Sneakers, Coin Magnet power-ups",
      "Compete with friends on leaderboards",
      "Simple swipe controls — easy to learn",
      "No internet required to play"
    ],
    review: "Subway Surfers remains one of the most addictive endless runners in 2026. The weekly World Tour updates keep the game fresh with new themes and environments. The controls are incredibly responsive — just swipe to turn, jump, and roll. Graphics are colorful and run smoothly even on budget phones. The game is perfect for quick sessions during commute or breaks. The only downside is the occasional ad between runs, but that's expected for a free game. Overall, it's a must-have for any Android gamer.",
    whatsNew: "World Tour 2026 — Visit new cities with exclusive characters! New hoverboards with special abilities. Performance improvements and bug fixes. Updated weekly challenges with better rewards.",
    pros: [
      "Free to play with no pay-to-win mechanics",
      "Works great on budget Android phones",
      "Regular weekly updates keep it fresh",
      "Plays smoothly offline — no internet needed",
      "Simple controls anyone can learn in seconds"
    ],
    cons: [
      "Ads between runs can be annoying",
      "Gameplay can feel repetitive after long sessions",
      "Some characters require in-app purchases",
      "Battery drain during extended play"
    ],
    installSteps: [
      { title: "Download the APK", desc: "Click the download button above to get the latest Subway Surfers APK file." },
      { title: "Enable Unknown Sources", desc: "Go to Settings → Security → Enable 'Install from Unknown Sources' or allow your browser to install apps." },
      { title: "Locate the File", desc: "Open your file manager and navigate to the Downloads folder to find the APK file." },
      { title: "Install the APK", desc: "Tap on the APK file and press 'Install'. Wait for the installation to complete." },
      { title: "Open & Play", desc: "Once installed, tap 'Open' to launch Subway Surfers and start running!" }
    ],
    olderVersions: [
      { version: "3.34.0", date: "July 2026", size: "172 MB" },
      { version: "3.33.0", date: "June 2026", size: "170 MB" },
      { version: "3.32.0", date: "May 2026", size: "168 MB" }
    ],
    faq: [
      { q: "Is Subway Surfers APK safe to download?", a: "Yes, we provide the original, unmodified APK file verified for safety. It's the same version available on the Google Play Store." },
      { q: "Can I play Subway Surfers offline?", a: "Yes! Subway Surfers works perfectly without an internet connection. You just need internet for leaderboards and weekly updates." },
      { q: "What Android version do I need?", a: "Subway Surfers requires Android 5.0 (Lollipop) or higher. It runs well on most devices with at least 2GB RAM." },
      { q: "How do I update Subway Surfers APK?", a: "Simply download the latest version from our site and install it over the existing version. Your progress will be saved." }
    ],
    relatedGames: ["temple-run-2", "stumble-guys", "free-fire-max", "candy-crush"],
    screenshots: ["🏃‍♂️🚇", "🌆🛹", "🏄‍♂️💰", "🎮🏆"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf"
  },
  {
    id: "free-fire-max",
    name: "Free Fire MAX",
    developer: "Garena International",
    category: "action",
    version: "2.105.1",
    size: "1.1 GB",
    androidReq: "4.4+",
    rating: 4.3,
    downloads: "500M+",
    lastUpdated: "August 2026",
    icon: "🔥",
    iconColor: "#FF4500",
    description: "Free Fire MAX is the enhanced version of Garena Free Fire with ultra HD graphics and immersive gameplay. Drop into a battle royale where 50 players fight on an island to be the last one standing. With realistic visuals, 360° lobby views, and firelink technology, Free Fire MAX delivers the ultimate survival shooter experience on mobile. Enjoy improved textures, dynamic effects, and smoother animations compared to the standard version.",
    features: [
      "Ultra HD graphics with enhanced visual effects",
      "50-player battle royale matches in 10 minutes",
      "Firelink technology — play with Free Fire players",
      "Craftland — create custom maps and modes",
      "Diverse characters with unique abilities",
      "Squad mode — team up with 4 players",
      "Ranked matches with seasonal rewards",
      "Regular events and limited-time modes"
    ],
    review: "Free Fire MAX is India's #1 battle royale game, and for good reason. The enhanced graphics over standard Free Fire are immediately noticeable — textures are sharper, effects are more dynamic, and the lobby experience is immersive. Each match lasts about 10 minutes, making it perfect for mobile gaming. The character ability system adds strategic depth, and Craftland lets you create custom maps. The game runs surprisingly well on mid-range phones, though 3GB+ RAM is recommended for the best experience.",
    whatsNew: "New character 'Phoenix' with revival ability! Updated Bermuda Remastered map. New weapon: Desert Eagle. Improved anti-cheat system. Season 42 with exclusive rewards.",
    pros: [
      "Best graphics among mobile battle royale games",
      "Short 10-minute matches — perfect for mobile",
      "Works on mid-range phones (3GB RAM)",
      "Firelink: play with standard Free Fire users",
      "Regular updates with new content and events"
    ],
    cons: [
      "Large file size (1.1 GB+ with resources)",
      "Requires stable internet connection",
      "Some characters feel pay-to-win",
      "Can cause phone heating on budget devices"
    ],
    installSteps: [
      { title: "Download the APK", desc: "Click the download button to get Free Fire MAX APK (main file ~600MB)." },
      { title: "Download OBB Data", desc: "The additional data files (~500MB) will download automatically when you first open the game." },
      { title: "Enable Unknown Sources", desc: "Go to Settings → Security → Enable 'Install from Unknown Sources'." },
      { title: "Install the APK", desc: "Tap the downloaded APK file and press 'Install'." },
      { title: "Open & Download Resources", desc: "Launch the game and wait for additional resources to download (~500MB). Ensure a stable WiFi connection." }
    ],
    olderVersions: [
      { version: "2.104.0", date: "July 2026", size: "1.0 GB" },
      { version: "2.103.0", date: "June 2026", size: "1.0 GB" },
      { version: "2.102.0", date: "May 2026", size: "980 MB" }
    ],
    faq: [
      { q: "What's the difference between Free Fire and Free Fire MAX?", a: "Free Fire MAX has enhanced HD graphics, better visual effects, 360° lobby, and Craftland map editor. Gameplay and content are the same, and you can play with Free Fire users." },
      { q: "Can I play Free Fire MAX offline?", a: "No, Free Fire MAX requires a stable internet connection to play as it's a multiplayer online game." },
      { q: "How much storage do I need for Free Fire MAX?", a: "You need at least 2.5 GB of free storage. The APK is about 600MB and additional data is around 1.5GB." },
      { q: "Is Free Fire MAX banned in India?", a: "Free Fire MAX was briefly restricted but is currently available for download and play in India as of 2026." }
    ],
    relatedGames: ["pubg-mobile", "call-of-duty-mobile", "stumble-guys", "subway-surfers"],
    screenshots: ["🔫🏝️", "💥🎯", "🪂🌴", "🏆👥"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.dts.freefiremax"
  },
  {
    id: "minecraft",
    name: "Minecraft",
    developer: "Mojang Studios",
    category: "adventure",
    version: "1.21.50",
    size: "250 MB",
    androidReq: "5.0+",
    rating: 4.7,
    downloads: "100M+",
    lastUpdated: "August 2026",
    icon: "⛏️",
    iconColor: "#4CAF50",
    description: "Minecraft is the world's best-selling game where your imagination is the limit. Build anything you can dream of with blocks, explore infinite procedurally generated worlds, survive against creatures in survival mode, or unleash your creativity in creative mode. With multiplayer support, cross-platform play, and an endless modding community, Minecraft on Android offers the complete experience in your pocket. From simple shelters to massive castles, from redstone computers to pixel art — the possibilities are truly limitless.",
    features: [
      "Infinite procedurally generated open worlds",
      "Creative Mode — unlimited resources, fly anywhere",
      "Survival Mode — gather resources, craft tools, fight mobs",
      "Cross-platform multiplayer with PC, Xbox, PS, Switch",
      "Marketplace with community-made skins, maps, and texture packs",
      "Redstone engineering for complex machines",
      "The Nether and End dimensions to explore",
      "Regular updates with new biomes, mobs, and blocks"
    ],
    review: "Minecraft on Android is the full Minecraft experience, no compromises. The Bedrock Edition runs incredibly smoothly on modern phones, and touch controls have been refined over years to feel natural. Whether you're a builder, explorer, redstoner, or PvP fighter, there's something for everyone. The game's latest updates have added exciting new biomes and mobs. Multiplayer works seamlessly with cross-play support. The only caveat is that it's a paid game on the Play Store, which is why many search for the APK. Graphics are charming in their blocky style, and the game can run for hours without significant battery drain.",
    whatsNew: "Tricky Trials update — new Trial Chambers, Breeze mob, and decorative blocks! New Copper and Tuff block variants. Wind Charges for combat. Updated villager trading system.",
    pros: [
      "Infinite replayability — no two worlds are the same",
      "Cross-platform play with friends on any device",
      "Regular free updates with massive new content",
      "Runs smoothly on most Android devices",
      "Endless creativity with no limits"
    ],
    cons: [
      "Paid game — not free on Play Store",
      "Controls can be tricky for new mobile players",
      "Large world saves can take significant storage",
      "Multiplayer requires Xbox Live account"
    ],
    installSteps: [
      { title: "Download Minecraft APK", desc: "Click the download button to get the latest Minecraft APK file." },
      { title: "Enable Unknown Sources", desc: "Go to Settings → Security → Enable installation from unknown sources." },
      { title: "Install the APK", desc: "Locate the downloaded file and tap to install. Grant any required permissions." },
      { title: "Sign In (Optional)", desc: "Sign in with your Xbox/Microsoft account for multiplayer and marketplace access." },
      { title: "Create a World & Play", desc: "Create a new world, choose your game mode, and start building!" }
    ],
    olderVersions: [
      { version: "1.21.40", date: "July 2026", size: "245 MB" },
      { version: "1.21.30", date: "June 2026", size: "240 MB" },
      { version: "1.21.20", date: "May 2026", size: "238 MB" }
    ],
    faq: [
      { q: "Is Minecraft APK free to download?", a: "Minecraft is a paid game. We provide the APK for users who have already purchased it or want to try before buying. We encourage supporting the developers by purchasing from the Play Store." },
      { q: "Can I play Minecraft offline?", a: "Yes! Single-player mode works perfectly offline. You only need internet for multiplayer and the Marketplace." },
      { q: "Will my worlds transfer from PC to mobile?", a: "Yes, Bedrock Edition worlds can be transferred between platforms using Realms or file sharing." },
      { q: "What are the minimum requirements?", a: "Android 5.0+, at least 1GB RAM (2GB recommended), and ~500MB free storage." }
    ],
    relatedGames: ["gta-san-andreas", "roblox", "stumble-guys", "clash-of-clans"],
    screenshots: ["🏗️🌄", "⚔️🧟", "🌋🏰", "🎨🌈"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.mojang.minecraftpe"
  },
  {
    id: "gta-san-andreas",
    name: "GTA San Andreas",
    developer: "Rockstar Games",
    category: "action",
    version: "2.11.264",
    size: "2.6 GB",
    androidReq: "7.0+",
    rating: 4.6,
    downloads: "50M+",
    lastUpdated: "July 2026",
    icon: "🚗",
    iconColor: "#FF6B35",
    description: "Grand Theft Auto: San Andreas is the legendary open-world action game now on Android. Follow Carl 'CJ' Johnson as he returns to Los Santos after his mother's murder, navigating gang warfare, corrupt cops, and a journey across the entire state of San Andreas. With three massive cities, vast countryside, and countless missions, GTA San Andreas offers one of the deepest gaming experiences available on mobile. Enhanced for mobile with remastered graphics, updated controls, and cloud save support.",
    features: [
      "Massive open world — 3 cities + countryside + desert",
      "70+ hours of main story missions",
      "Remastered graphics with enhanced lighting",
      "Dual analog stick controls optimized for mobile",
      "Cloud save support via Rockstar Social Club",
      "Customizable controls and visual settings",
      "Vehicle variety — cars, bikes, planes, boats",
      "Gang territory control system"
    ],
    review: "GTA San Andreas on Android is an incredible achievement. The entire PS2 classic has been faithfully ported with enhanced graphics and controls tailored for touchscreen. The story is as gripping as ever — CJ's journey across San Andreas is one of gaming's greatest narratives. The mobile controls work surprisingly well, with customizable buttons and optional gamepad support. The world is massive and still holds up, with hours of side activities beyond the main story. At 2.6GB, it's a large download, but worth every megabyte.",
    whatsNew: "Definitive Edition updates — improved character models, better draw distance, enhanced lighting, controller mapping improvements, and stability fixes for newer Android devices.",
    pros: [
      "Full console game experience on mobile",
      "One of the greatest stories in gaming history",
      "Massive open world with endless exploration",
      "Cloud saves to continue on another device",
      "Works offline — perfect for travel"
    ],
    cons: [
      "Very large file size (2.6 GB)",
      "Touch controls have a learning curve",
      "Requires high-end device for best graphics",
      "Paid game — not free"
    ],
    installSteps: [
      { title: "Download APK + OBB", desc: "Download the GTA San Andreas APK file and the OBB data file separately." },
      { title: "Install the APK", desc: "Enable Unknown Sources and install the APK file." },
      { title: "Extract OBB Data", desc: "Copy the OBB folder to Android/obb/com.rockstargames.gtasa/ on your device." },
      { title: "Verify Files", desc: "Ensure the OBB file is in the correct directory before launching the game." },
      { title: "Launch & Play", desc: "Open GTA San Andreas, adjust settings for your device, and start your journey!" }
    ],
    olderVersions: [
      { version: "2.11.250", date: "May 2026", size: "2.5 GB" },
      { version: "2.10.0", date: "March 2026", size: "2.5 GB" },
      { version: "2.09.0", date: "January 2026", size: "2.4 GB" }
    ],
    faq: [
      { q: "Can I play GTA San Andreas offline?", a: "Yes! The game works completely offline. You only need internet for the initial cloud save setup." },
      { q: "Does it support controllers?", a: "Yes, GTA San Andreas supports Bluetooth controllers and USB gamepads for a console-like experience." },
      { q: "Why is the file so large?", a: "The game includes the entire PS2 game with remastered textures and audio, which requires about 2.6GB of storage." },
      { q: "What devices can run this game well?", a: "Any device with Android 7.0+, 3GB RAM, and a decent GPU (Adreno 506 or better) will run it smoothly." }
    ],
    relatedGames: ["minecraft", "call-of-duty-mobile", "pubg-mobile", "asphalt-9"],
    screenshots: ["🚗🌆", "🔫💰", "🏍️🌅", "✈️🏜️"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.rockstargames.gtasa"
  },
  {
    id: "stumble-guys",
    name: "Stumble Guys",
    developer: "Kitka Games",
    category: "casual",
    version: "0.75",
    size: "230 MB",
    androidReq: "5.0+",
    rating: 4.2,
    downloads: "500M+",
    lastUpdated: "August 2026",
    icon: "🤸",
    iconColor: "#FF69B4",
    description: "Stumble Guys is a massive multiplayer party knockout game where 32 players compete through increasingly chaotic obstacle courses until only one remains. Inspired by the battle royale genre but with a hilarious twist, players must dodge obstacles, navigate tricky platforms, and outlast opponents in rounds of pure fun. With colorful characters, wacky costumes, and physics-based chaos, every match is unpredictable and entertaining. New maps and game modes are added regularly.",
    features: [
      "32-player online multiplayer matches",
      "Crazy obstacle courses with physics-based gameplay",
      "Dozens of unique maps and challenges",
      "Customizable characters with fun skins and emotes",
      "Team rounds and solo rounds",
      "Regular new maps and seasonal events",
      "Cross-play with other platforms",
      "Quick matches — perfect for short gaming sessions"
    ],
    review: "Stumble Guys is pure chaos and pure fun. It's essentially Fall Guys for mobile, and it does the formula justice. The physics-based movement creates hilarious moments, and the variety of obstacle courses keeps things fresh. Matches are quick (3-5 minutes), making it ideal for mobile. The game has a thriving community and regular updates. Customization options are plentiful, though some premium skins require purchases. Performance is solid on most devices.",
    whatsNew: "New obstacle map 'Lava Legends'! Workshop — create custom courses! New character skins and emotes. Improved matchmaking for fairer games. Bug fixes and performance improvements.",
    pros: [
      "Incredibly fun and easy to pick up",
      "Quick 3-5 minute matches",
      "Hilarious physics-based moments",
      "Regular content updates and new maps",
      "Free to play with fair monetization"
    ],
    cons: [
      "Requires internet connection at all times",
      "Can feel unfair due to physics randomness",
      "Some premium skins are expensive",
      "Occasional server lag during peak hours"
    ],
    installSteps: [
      { title: "Download APK", desc: "Click the download button to get the latest Stumble Guys APK." },
      { title: "Enable Unknown Sources", desc: "Allow installation from unknown sources in your device settings." },
      { title: "Install", desc: "Tap the downloaded APK and install it." },
      { title: "Open & Connect", desc: "Launch the game and ensure you have an internet connection." },
      { title: "Play!", desc: "Jump into a match and stumble your way to victory!" }
    ],
    olderVersions: [
      { version: "0.74", date: "July 2026", size: "225 MB" },
      { version: "0.73", date: "June 2026", size: "220 MB" },
      { version: "0.72", date: "May 2026", size: "218 MB" }
    ],
    faq: [
      { q: "Can I play Stumble Guys offline?", a: "No, Stumble Guys is an online multiplayer game and requires an internet connection to play." },
      { q: "Is Stumble Guys free?", a: "Yes, it's free to play with optional in-app purchases for cosmetic items." },
      { q: "How many players in each match?", a: "Each match starts with 32 players, and players are eliminated through rounds until one winner remains." },
      { q: "Can I play with friends?", a: "Yes! You can create a party and invite friends to play together." }
    ],
    relatedGames: ["subway-surfers", "candy-crush", "ludo-king", "8-ball-pool"],
    screenshots: ["🤸🏅", "🎢😂", "👥🏆", "🎮🎉"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.kitkagames.fallbuddies"
  },
  {
    id: "pubg-mobile",
    name: "PUBG Mobile",
    developer: "Level Infinite",
    category: "action",
    version: "3.5.0",
    size: "1.5 GB",
    androidReq: "5.1+",
    rating: 4.1,
    downloads: "1B+",
    lastUpdated: "August 2026",
    icon: "🪖",
    iconColor: "#FFA500",
    description: "PUBG Mobile is the original mobile battle royale, delivering intense 100-player matches on a massive island. Drop from a plane, loot weapons and equipment, and fight to be the last one standing. With realistic graphics powered by Unreal Engine 4, diverse maps, and a massive global player base, PUBG Mobile remains one of the most competitive mobile games. Features include classic battle royale, team deathmatch, payload mode, and the new Metro Royale extraction mode.",
    features: [
      "100-player classic battle royale matches",
      "Realistic Unreal Engine 4 graphics",
      "Multiple maps: Erangel, Miramar, Sanhok, Livik, Karakin",
      "Various game modes: Classic, TDM, Payload, Metro Royale",
      "Voice chat and squad communication",
      "Customizable controls and sensitivity",
      "Anti-cheat system for fair gameplay",
      "Seasonal Royale Pass with exclusive rewards"
    ],
    review: "PUBG Mobile set the standard for mobile battle royale games and continues to hold its ground. The realistic graphics and gunplay mechanics are unmatched, and the strategic depth keeps hardcore gamers engaged. The variety of maps and modes prevents staleness. However, the game has a steep learning curve and requires a decent device for optimal performance. New players might find it challenging against experienced players, but the training mode helps. The game rewards skill and strategy over luck.",
    whatsNew: "New map 'Nusa 2.0' — revamped island with new landmarks! Updated Royale Pass Season 42. New weapon: ACE32. Improved graphics pipeline for smoother performance. Anti-cheat system upgrade.",
    pros: [
      "Most realistic mobile battle royale experience",
      "Massive player base — quick matchmaking",
      "Multiple diverse maps and game modes",
      "Highly customizable controls",
      "Competitive ranked system"
    ],
    cons: [
      "Very large download and update sizes",
      "Requires high-end device for best graphics",
      "Steep learning curve for new players",
      "Some server issues during peak hours"
    ],
    installSteps: [
      { title: "Download PUBG Mobile APK", desc: "Download the APK file from the button above." },
      { title: "Enable Unknown Sources", desc: "Allow installation from unknown sources in Settings." },
      { title: "Install APK", desc: "Tap the APK file and install." },
      { title: "Download Resources", desc: "Open the game and download resource packs (~1GB). Choose Low, Medium, or HD based on your device." },
      { title: "Create Account & Play", desc: "Sign in with Google, Facebook, or as Guest. Complete the tutorial and jump into a match!" }
    ],
    olderVersions: [
      { version: "3.4.0", date: "July 2026", size: "1.4 GB" },
      { version: "3.3.0", date: "May 2026", size: "1.4 GB" },
      { version: "3.2.0", date: "March 2026", size: "1.3 GB" }
    ],
    faq: [
      { q: "Is PUBG Mobile banned in India?", a: "PUBG Mobile India version (BGMI) was relaunched and is currently available. The global version can also be downloaded via APK." },
      { q: "How much data does PUBG Mobile use per match?", a: "Each match uses approximately 20-30MB of mobile data. WiFi is recommended for the best experience." },
      { q: "Can I play PUBG Mobile on a low-end phone?", a: "You need at least 3GB RAM and a decent processor. The game offers low graphics settings for budget devices." },
      { q: "How do I reduce lag in PUBG Mobile?", a: "Lower graphics settings, close background apps, use WiFi instead of mobile data, and enable frame rate priority in settings." }
    ],
    relatedGames: ["free-fire-max", "call-of-duty-mobile", "gta-san-andreas", "stumble-guys"],
    screenshots: ["🪂🏝️", "🔫🎯", "🚙💥", "🏆🥇"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.tencent.ig"
  },
  {
    id: "clash-of-clans",
    name: "Clash of Clans",
    developer: "Supercell",
    category: "strategy",
    version: "16.0.25",
    size: "280 MB",
    androidReq: "5.0+",
    rating: 4.5,
    downloads: "500M+",
    lastUpdated: "August 2026",
    icon: "🏰",
    iconColor: "#FFD700",
    description: "Clash of Clans is the iconic strategy game where you build your village, train troops, and battle millions of players worldwide. Join a Clan with other players, participate in epic Clan Wars, and lead your army of Barbarians, Archers, Wizards, Dragons, and many more powerful troops to victory. With constantly evolving content including new troops, spells, and heroes, Clash of Clans remains the king of mobile strategy games after over a decade.",
    features: [
      "Build and upgrade your village with defenses",
      "Train troops and spells for strategic attacks",
      "Join Clans and fight in epic Clan Wars",
      "Clan War Leagues — competitive ranked clan battles",
      "Raid Weekends — attack rival clan capitals",
      "Multiple heroes with unique abilities",
      "Builder Base — secondary village with VS battles",
      "Regular updates with new content every month"
    ],
    review: "Clash of Clans is a masterclass in mobile strategy. The game loop of building, upgrading, attacking, and defending is addictive and rewarding. Clan Wars add a social element that keeps players engaged for years. The game is generous with free progression — you never feel forced to spend money. Supercell continues to add meaningful content that keeps the meta fresh. The community is massive and welcoming. It's a game that's easy to play for 15 minutes a day but can easily consume hours when war season arrives.",
    whatsNew: "New troop: Electro Titan! Town Hall 16 with Merged Defense mechanic. New hero equipment system. Clan War League improvements. Balance changes to existing troops.",
    pros: [
      "Incredibly deep strategic gameplay",
      "Amazing community and clan system",
      "Generous free-to-play model",
      "Regular updates with meaningful content",
      "Can be played in short daily sessions"
    ],
    cons: [
      "Upgrade times can be very long at higher levels",
      "Rushing your base leads to poor matchmaking",
      "Competitive scene requires time commitment",
      "Cloud saves require Supercell ID setup"
    ],
    installSteps: [
      { title: "Download APK", desc: "Click the download button to get the latest Clash of Clans APK." },
      { title: "Enable Unknown Sources", desc: "Allow installation from unknown sources in your device settings." },
      { title: "Install", desc: "Tap the APK file and install it on your device." },
      { title: "Open & Sign In", desc: "Launch Clash of Clans and sign in with Supercell ID to save progress." },
      { title: "Build Your Village", desc: "Follow the tutorial to build your first village and start clashing!" }
    ],
    olderVersions: [
      { version: "16.0.20", date: "July 2026", size: "275 MB" },
      { version: "16.0.15", date: "June 2026", size: "270 MB" },
      { version: "16.0.10", date: "May 2026", size: "268 MB" }
    ],
    faq: [
      { q: "Can I transfer my Clash of Clans base to a new device?", a: "Yes! Use Supercell ID to save and transfer your progress to any device." },
      { q: "Is Clash of Clans pay to win?", a: "No, while you can spend money to speed up upgrades, skilled free players can compete with paid players in wars." },
      { q: "Can I play Clash of Clans offline?", a: "No, Clash of Clans requires an internet connection as it's a multiplayer online game." },
      { q: "What happens if I don't play for a while?", a: "Your village remains safe with a shield. Resources may be looted by attackers, but you won't lose your base." }
    ],
    relatedGames: ["candy-crush", "subway-surfers", "minecraft", "pubg-mobile"],
    screenshots: ["🏰⚔️", "🐉🔥", "👥🏆", "🏗️🛡️"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.supercell.clashofclans"
  },
  {
    id: "candy-crush",
    name: "Candy Crush Saga",
    developer: "King",
    category: "puzzle",
    version: "1.275.0.3",
    size: "95 MB",
    androidReq: "5.0+",
    rating: 4.4,
    downloads: "1B+",
    lastUpdated: "August 2026",
    icon: "🍬",
    iconColor: "#E91E63",
    description: "Candy Crush Saga is the sweetest puzzle game loved by millions worldwide. Match three or more candies to pop them, clear jelly, collect ingredients, and reach the target score. With thousands of levels, weekly events, and new challenges added regularly, there's always something sweet waiting for you. The game features colorful graphics, satisfying animations, and a progression system that keeps you hooked. Play alone or compete with friends to see who can reach the highest level.",
    features: [
      "15,000+ puzzle levels and counting",
      "Sweet graphics with satisfying candy-popping effects",
      "Special candies — Striped, Wrapped, Color Bomb",
      "Weekly events and time-limited challenges",
      "Boosters and power-ups to help with tough levels",
      "Compete with friends on the leaderboard",
      "Play offline — no internet required",
      "Free lives regenerate every 30 minutes"
    ],
    review: "Candy Crush Saga is THE puzzle game. After all these years, it remains incredibly addictive. The level design is masterful — each level feels achievable but challenging. The satisfaction of creating special candy combos is unmatched. The game is perfect for casual gaming sessions, and the offline support means you can play anywhere. The lives system can be frustrating, but it also prevents you from playing too much. New levels are added weekly, so you'll never run out of content.",
    whatsNew: "New levels added — 15,500+ total! New special event: Candy Carnival! Improved daily rewards. New booster combinations. Performance improvements.",
    pros: [
      "Incredibly addictive match-3 gameplay",
      "Thousands of levels — never runs out",
      "Works perfectly offline",
      "Small file size — runs on any phone",
      "Regular new content and events"
    ],
    cons: [
      "Lives system limits play sessions",
      "Later levels can feel impossibly hard without boosters",
      "Ads for in-app purchases",
      "Can become repetitive for some players"
    ],
    installSteps: [
      { title: "Download APK", desc: "Click download to get Candy Crush Saga APK." },
      { title: "Enable Unknown Sources", desc: "Allow unknown app installation in Settings." },
      { title: "Install", desc: "Tap the APK file and install." },
      { title: "Open & Connect", desc: "Launch the game and optionally connect with Facebook for friend challenges." },
      { title: "Start Matching!", desc: "Complete the tutorial and start your sweet journey!" }
    ],
    olderVersions: [
      { version: "1.274.0", date: "July 2026", size: "93 MB" },
      { version: "1.273.0", date: "June 2026", size: "92 MB" },
      { version: "1.272.0", date: "May 2026", size: "90 MB" }
    ],
    faq: [
      { q: "Can I play Candy Crush without internet?", a: "Yes! Candy Crush Saga works perfectly offline. You only need internet for social features and leaderboards." },
      { q: "How do I get free lives?", a: "Lives regenerate every 30 minutes. You can also ask friends for lives or watch ads to get extra lives." },
      { q: "Is Candy Crush free?", a: "Yes, it's free to play. In-app purchases are optional and include boosters, extra lives, and gold." },
      { q: "How do I save my progress?", a: "Connect with Facebook or King account to save your progress and play across multiple devices." }
    ],
    relatedGames: ["subway-surfers", "stumble-guys", "clash-of-clans", "ludo-king"],
    screenshots: ["🍬🎯", "🍭💎", "🎉🏆", "🍫✨"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.king.candycrushsaga"
  },
  {
    id: "asphalt-9",
    name: "Asphalt 9: Legends",
    developer: "Gameloft",
    category: "racing",
    version: "4.5.0",
    size: "3.2 GB",
    androidReq: "5.0+",
    rating: 4.4,
    downloads: "100M+",
    lastUpdated: "August 2026",
    icon: "🏎️",
    iconColor: "#2196F3",
    description: "Asphalt 9: Legends is the most visually stunning racing game on mobile. Race with the world's most prestigious cars — Ferrari, Porsche, Lamborghini, and W Motors — in exotic locations worldwide. With console-quality graphics, nitro-fueled speed, and online multiplayer, Asphalt 9 delivers an unmatched racing experience. Master the art of drifting, perform barrel rolls, and use nitro boosts to leave opponents in the dust. Features a career mode with hundreds of events and a competitive multiplayer mode.",
    features: [
      "Console-quality graphics with HDR rendering",
      "300+ licensed supercars from top manufacturers",
      "Career mode with 3000+ events",
      "Online multiplayer racing with global players",
      "Club system — join racing teams",
      "TouchDrive — innovative auto-steering control",
      "Realistic physics and drifting mechanics",
      "Weekly limited-time events and challenges"
    ],
    review: "Asphalt 9 is simply the best-looking racing game on mobile, period. The graphics are jaw-dropping — cars look photorealistic, tracks are beautifully detailed, and the particle effects during nitro boosts are spectacular. The TouchDrive control system is innovative, letting you focus on strategy rather than steering. For purists, manual controls offer full customization. The car collection aspect adds a satisfying progression layer. The only downside is the energy system that limits how much you can play in one session.",
    whatsNew: "New season: 'Electric Dreams' — Rimac Nevera and Tesla Roadster added! New track: Tokyo Expressway. Updated graphics engine for smoother performance. Club improvements.",
    pros: [
      "Best graphics of any mobile racing game",
      "Huge roster of real licensed supercars",
      "TouchDrive makes mobile racing accessible",
      "Active online multiplayer community",
      "Stunning environments and visual effects"
    ],
    cons: [
      "Very large file size (3+ GB)",
      "Energy/fuel system limits sessions",
      "Car unlocking can be grindy",
      "Requires high-end device for max graphics"
    ],
    installSteps: [
      { title: "Download APK", desc: "Download the Asphalt 9 APK from the button above." },
      { title: "Install APK", desc: "Enable unknown sources and install the APK file." },
      { title: "Download Game Data", desc: "Launch the game and download additional data (~2.5GB). Use WiFi recommended." },
      { title: "Choose Control Mode", desc: "Select TouchDrive (assisted) or Manual (full control) during setup." },
      { title: "Start Racing!", desc: "Begin your career and collect supercars!" }
    ],
    olderVersions: [
      { version: "4.4.0", date: "June 2026", size: "3.1 GB" },
      { version: "4.3.0", date: "April 2026", size: "3.0 GB" },
      { version: "4.2.0", date: "February 2026", size: "2.9 GB" }
    ],
    faq: [
      { q: "Can I play Asphalt 9 offline?", a: "Career mode can be played offline after downloading all data. Multiplayer and events require internet." },
      { q: "What devices can run Asphalt 9 at max settings?", a: "Devices with Snapdragon 870+ or equivalent, 6GB+ RAM, and a modern GPU can run max settings smoothly." },
      { q: "Is Asphalt 9 free?", a: "Yes, it's free to play with optional in-app purchases for cars and upgrades." },
      { q: "How do I get cars faster?", a: "Complete career events, participate in multiplayer, join a club, and complete daily tasks for car blueprints." }
    ],
    relatedGames: ["gta-san-andreas", "subway-surfers", "pubg-mobile", "real-cricket-24"],
    screenshots: ["🏎️💨", "🌆🌉", "🏁🏆", "🚗✨"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.gameloft.android.ANMP.GlsoftAsphalt9"
  },
  {
    id: "real-cricket-24",
    name: "Real Cricket 24",
    developer: "Nautilus Mobile",
    category: "sports",
    version: "7.5",
    size: "850 MB",
    androidReq: "5.1+",
    rating: 4.3,
    downloads: "100M+",
    lastUpdated: "August 2026",
    icon: "🏏",
    iconColor: "#4CAF50",
    description: "Real Cricket 24 is India's #1 cricket game with the most authentic cricket experience on mobile. Play all formats — Test, ODI, T20, T10, and IPL-style franchise cricket. With realistic graphics, motion-captured animations, and detailed commentary in Hindi and English, it feels like watching a real match. Create your player in career mode, lead your team to World Cup glory, or compete with friends in multiplayer. Features licensed stadiums, accurate player stats, and the most realistic ball physics on mobile.",
    features: [
      "All cricket formats: Test, ODI, T20, T10, Auction-based league",
      "Realistic 3D graphics and motion-captured animations",
      "Hindi + English commentary by real commentators",
      "Career Mode — create and grow your cricketer",
      "Multiplayer — play against friends online",
      "Premier League (IPL-style) with auction system",
      "40+ international teams with real stats",
      "Dynamic weather and pitch conditions"
    ],
    review: "Real Cricket 24 is the definitive cricket game for Android. The batting controls are intuitive — timing-based shots feel rewarding. Bowling has multiple options from pace to spin with manual swing control. The Premier League mode with auctions is incredibly engaging and captures the excitement of IPL. Commentary in Hindi adds a desi touch that Indian gamers love. Graphics have improved significantly, with stadiums looking realistic. Career mode gives a sense of progression as you build your player from domestic cricket to international stardom.",
    whatsNew: "New Premier League season with updated teams! Enhanced fielding animations. New stadiums: Wankhede and Eden Gardens. Improved online multiplayer stability. Women's cricket mode added.",
    pros: [
      "Most realistic cricket game on mobile",
      "Hindi commentary — perfect for Indian audience",
      "Premier League with full auction system",
      "Career mode with deep progression",
      "Regular roster and season updates"
    ],
    cons: [
      "Large file size (850 MB)",
      "Occasional AI fielding glitches",
      "Ads between overs can be intrusive",
      "Multiplayer can have connectivity issues"
    ],
    installSteps: [
      { title: "Download APK", desc: "Download Real Cricket 24 APK from the link above." },
      { title: "Enable Unknown Sources", desc: "Allow installation from unknown sources." },
      { title: "Install APK", desc: "Tap the downloaded file and install." },
      { title: "Download Additional Data", desc: "Open the game and download required game data (~400MB)." },
      { title: "Choose Your Team", desc: "Select your favorite team and start playing!" }
    ],
    olderVersions: [
      { version: "7.4", date: "June 2026", size: "830 MB" },
      { version: "7.3", date: "April 2026", size: "810 MB" },
      { version: "7.2", date: "February 2026", size: "800 MB" }
    ],
    faq: [
      { q: "Can I play Real Cricket 24 offline?", a: "Yes! Single-player modes work offline. Multiplayer and some features require internet." },
      { q: "Does it have IPL teams?", a: "It has a Premier League mode with IPL-style teams and auction system, though team names are unofficial." },
      { q: "What controls are available?", a: "Both classic button controls and gesture-based controls for batting and bowling." },
      { q: "Is multiplayer free?", a: "Yes, online multiplayer is free. You just need a stable internet connection." }
    ],
    relatedGames: ["asphalt-9", "clash-of-clans", "pubg-mobile", "subway-surfers"],
    screenshots: ["🏏🏟️", "⚾🎯", "🏆🇮🇳", "🎮🏏"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.nautilusmobile.realcricket"
  }
];

// Additional games are loaded from games-data-2.js, games-data-3.js, games-data-4.js
// ALL_GAMES references GAMES (which is populated by all data files)
// This allows games to be pushed from additional files

// ---------- BLOG POSTS DATA ----------
const BLOG_POSTS = [
  {
    id: "top-10-racing-games-2026",
    title: "Top 10 Best Racing Games for Android in 2026",
    excerpt: "From Asphalt 9 to Real Racing, here are the best racing games you can play on your Android phone right now.",
    category: "Top 10",
    icon: "🏎️",
    date: "August 10, 2026",
    readTime: "8 min read",
    content: `<h2>Best Racing Games for Android in 2026</h2>
<p>If you love speed, adrenaline, and beautiful cars, these are the racing games you need on your Android phone. We've tested dozens of racing games and narrowed it down to the absolute best 10.</p>
<h3>1. Asphalt 9: Legends</h3>
<p>The undisputed king of mobile racing. With console-quality graphics, 300+ licensed cars, and smooth gameplay, Asphalt 9 is a must-download for any racing fan.</p>
<h3>2. Real Racing 3</h3>
<p>For sim racing enthusiasts, Real Racing 3 offers the most realistic experience on mobile with real tracks and cars.</p>
<h3>3. Hill Climb Racing 2</h3>
<p>Physics-based racing at its best. Simple but incredibly addictive with countless vehicle upgrades.</p>
<h3>4. Need for Speed: No Limits</h3>
<p>EA's mobile NFS delivers street racing thrills with extensive car customization.</p>
<h3>5. Mario Kart Tour</h3>
<p>Nintendo's beloved kart racer brings the fun to mobile with classic characters and tracks.</p>
<h3>6. CSR Racing 2</h3>
<p>Drag racing perfection with stunning car models and a deep garage system.</p>
<h3>7. Rush Rally 3</h3>
<p>The best rally racing game on mobile with genuine racing feel and challenging tracks.</p>
<h3>8. Rebel Racing</h3>
<p>A newer entry that combines beautiful graphics with accessible racing mechanics.</p>
<h3>9. CarX Drift Racing 2</h3>
<p>The ultimate drifting game with realistic physics and online multiplayer.</p>
<h3>10. Traffic Rider</h3>
<p>First-person motorcycle racing through traffic. Simple, satisfying, and runs on any phone.</p>`
  },
  {
    id: "subway-surfers-review-2026",
    title: "Subway Surfers 2026 Review — Still Worth Playing?",
    excerpt: "After billions of downloads, we review whether Subway Surfers is still fun and worth your time in 2026.",
    category: "Review",
    icon: "🏃",
    date: "August 8, 2026",
    readTime: "6 min read",
    content: `<h2>Is Subway Surfers Still Worth Playing in 2026?</h2>
<p>Subway Surfers is one of the most downloaded games in history, with over 3 billion downloads worldwide. But with so many new games launching every month, is it still worth your time? Let's find out.</p>
<h3>What Makes Subway Surfers Special?</h3>
<p>The game's formula is simple but perfect: run, jump, dodge, and collect. The weekly World Tour updates keep things fresh by changing the theme and adding new characters.</p>
<h3>What's New in 2026?</h3>
<p>The developers at SYBO have added new power-ups, an improved hoverboard system, and seasonal events with exclusive rewards.</p>
<h3>Our Verdict</h3>
<p>Absolutely yes — Subway Surfers is still one of the best casual games on Android. It's free, works offline, and provides endless entertainment.</p>`
  },
  {
    id: "how-to-install-apk",
    title: "How to Install APK Files on Android — Complete Guide 2026",
    excerpt: "Step-by-step guide to safely install APK files on your Android phone. Works on all Android versions.",
    category: "How-To",
    icon: "📱",
    date: "August 5, 2026",
    readTime: "5 min read",
    content: `<h2>How to Install APK Files on Android</h2>
<p>APK (Android Package Kit) files are the installation files for Android apps. If you've downloaded an APK file and want to install it, follow this complete guide.</p>
<h3>Step 1: Enable Unknown Sources</h3>
<p>Before installing any APK, allow your phone to install apps from unknown sources in Settings → Security.</p>
<h3>Step 2: Download the APK File</h3>
<p>Download the APK from a trusted source like GameVault APK.</p>
<h3>Step 3: Install and Play</h3>
<p>Open your File Manager, tap the downloaded file, press Install, and start playing!</p>`
  },
  {
    id: "top-10-offline-games-under-100mb-2026",
    title: "Top 10 Best Offline Android Games Under 100MB (2026 Edition)",
    excerpt: "Looking for high graphics games under 100MB that don't need internet? Check our top 10 offline picks!",
    category: "Top 10",
    icon: "⚡",
    date: "August 11, 2026",
    readTime: "7 min read",
    content: `<h2>Best Offline Android Games Under 100MB in 2026</h2>
<p>Not everyone has access to high-speed 5G or unlimited mobile data all the time. If you want to enjoy gaming without burning your mobile data or when you're traveling offline, high-quality low-MB games are a lifesaver.</p>
<h3>1. Traffic Rider (85 MB)</h3>
<p>A high-speed first-person motorcycle racer with detailed 3D graphics, real engine sounds, and a smooth career mode. Works 100% offline.</p>
<h3>2. Candy Crush Saga (95 MB)</h3>
<p>The iconic puzzle game with thousands of levels. Perfect for long offline commutes and battery-saving gameplay.</p>
<h3>3. Cover Fire: Offline Shooting (90 MB)</h3>
<p>One of the best offline cover shooters on Android. Offers incredible console-like graphics, sniper missions, and story mode under 100MB.</p>
<h3>4. Shadow Fight 2 (88 MB)</h3>
<p>A masterpiece of martial arts combat. Classic silhouette graphics, fluid fighting animations, and deep RPG weapon customization.</p>
<h3>5. Vector (90 MB)</h3>
<p>An exhilarating parkour runner where you escape a totalitarian world. High-tempo gameplay with realistic parkour moves.</p>
<h3>6. Slither.io (45 MB)</h3>
<p>Classic snake game reinvented! Play offline against AI bots when no Wi-Fi is available.</p>
<h3>7. Hill Climb Racing (70 MB)</h3>
<p>Physics-based driving game that never gets old. Upgrade your vehicle and drive across moon, desert, and mountain tracks.</p>
<h3>8. Fruit Ninja (92 MB)</h3>
<p>Slice fruits, dodge bombs, and test your reflexes in this classic arcade hit.</p>
<h3>9. Archero (89 MB)</h3>
<p>Action-packed rogue-like archer game. Dodge enemy projectiles and upgrade your hero with unique skill combinations.</p>
<h3>10. 2048 (15 MB)</h3>
<p>Ultra lightweight brain puzzle. Combine numbers to reach the 2048 tile and challenge your high score offline.</p>`
  },
  {
    id: "free-fire-max-lag-fix-fps-boost-guide-2026",
    title: "How to Fix Lag & Boost FPS in Free Fire MAX on Low-End Phones",
    excerpt: "Experience smooth 60 FPS gameplay in Free Fire MAX even on 2GB or 3GB RAM budget Android phones with these proven settings.",
    category: "Guides",
    icon: "🔥",
    date: "August 11, 2026",
    readTime: "9 min read",
    content: `<h2>How to Fix Lag & Get 60 FPS in Free Fire MAX</h2>
<p>Free Fire MAX offers incredible HD graphics and 360-degree lobbies, but it can cause lag, frame drops, and battery heating on budget Android phones (2GB/3GB RAM). Follow this guide to optimize your phone for zero lag!</p>
<h3>1. In-Game Graphics Settings</h3>
<p>Open Free Fire MAX → Settings → Display:</p>
<ul>
<li><strong>Graphics:</strong> Set to Smooth or Standard</li>
<li><strong>High FPS:</strong> Set to High (Crucial for 60 FPS performance!)</li>
<li><strong>Shadows:</strong> Turn OFF</li>
<li><strong>Auto-Scale:</strong> Turn OFF</li>
</ul>
<h3>2. Developer Options Optimization</h3>
<p>Go to Android Settings → System → Developer Options:</p>
<ul>
<li>Set <strong>Window Animation Scale</strong> to 0.5x</li>
<li>Set <strong>Transition Animation Scale</strong> to 0.5x</li>
<li>Set <strong>Animator Duration Scale</strong> to 0.5x</li>
<li>Enable <strong>Force 4x MSAA</strong> (If your GPU supports it for smoother edges)</li>
</ul>
<h3>3. Clear Cache & Background RAM</h3>
<p>Before launching the game, close all background apps like Instagram, Chrome, and WhatsApp. Clear Free Fire MAX cache from Settings → Apps → Free Fire MAX → Storage → Clear Cache (Do NOT clear data).</p>
<h3>4. Game Booster & Temperature Control</h3>
<p>Avoid playing while your phone is charging. Overheating causes CPU thermal throttling, which is the #1 reason for sudden FPS drops during gunfights.</p>`
  },
  {
    id: "top-7-paid-android-games-worth-downloading-2026",
    title: "Top 7 Best Paid Android Games Worth Playing in 2026",
    excerpt: "Looking for console-quality games without annoying ads? Here are 7 premium paid Android games that are worth every penny.",
    category: "Top 7",
    icon: "💎",
    date: "August 9, 2026",
    readTime: "8 min read",
    content: `<h2>Top 7 Premium Paid Games on Android</h2>
<p>While free-to-play games dominate the mobile market, they are often filled with ads and pay-to-win microtransactions. If you want a pure, ad-free gaming experience with deep storylines and console mechanics, check out these top paid titles:</p>
<h3>1. Minecraft ($6.99)</h3>
<p>The ultimate open-world sandbox game. Build anything, explore endless procedurally generated worlds, and survive against nocturnal mobs.</p>
<h3>2. GTA: San Andreas ($6.99)</h3>
<p>Rockstar Games brought the entire PS2 classic CJ storyline to mobile with remastered textures and controller support.</p>
<h3>3. Stardew Valley ($4.99)</h3>
<p>An award-winning farming and life simulation RPG. Plant crops, raise animals, go fishing, and build your dream farm offline.</p>
<h3>4. Terraria ($4.99)</h3>
<p>2D action-adventure sandbox filled with boss fights, magic weapons, crafting, and underground exploration.</p>
<h3>5. LIMBO ($4.99)</h3>
<p>A creepy, atmospheric puzzle-platformer with dark silhouette visuals and haunting sound design.</p>
<h3>6. Monument Valley 2 ($4.99)</h3>
<p>A surreal architectural puzzle game with mind-bending optical illusions and breathtaking artwork.</p>
<h3>7. Dead Cells ($8.99)</h3>
<p>Rogue-lite action platformer with fast-paced hack-and-slash combat, tough bosses, and controller compatibility.</p>`
  },
  {
    id: "subway-surfers-high-score-tips-tricks-2026",
    title: "Subway Surfers Secret Tips: How to Reach 10 Million+ High Score",
    excerpt: "Want to dominate the leaderboard in Subway Surfers? Learn the multiplier secrets, hoverboard combos, and pro movement techniques.",
    category: "Tips",
    icon: "🏃",
    date: "August 7, 2026",
    readTime: "6 min read",
    content: `<h2>How to Get a 10M+ High Score in Subway Surfers</h2>
<p>Getting a massive score in Subway Surfers isn't just about quick reflexes — it requires smart preparation, maxing out score multipliers, and utilizing the right hoverboard powers.</p>
<h3>1. Max Out Your Score Multiplier First</h3>
<p>Never attempt a high score run with a low multiplier! Complete all 30 Mission Sets to reach the permanent 30x Multiplier. Combine this with a Score Booster power-up before starting your run to hit 35x or 37x immediately.</p>
<h3>2. Use the Right Hoverboards</h3>
<p>Not all hoverboards are created equal. Use hoverboards with special abilities like Double Jump or Smooth Drift to escape tight situations.</p>
<h3>3. Hoverboard Shield Spamming</h3>
<p>Whenever you reach high speeds, double-tap to activate your hoverboard continuously. If you hit an obstacle, your hoverboard absorbs the crash and saves your run!</p>
<h3>4. Stay High on Top of Trains</h3>
<p>Running on the ground exposes you to barriers and sudden trains. Always stay on top of trains whenever possible for maximum vision.</p>`
  },
  {
    id: "gta-san-andreas-mobile-cheats-cleo-guide-2026",
    title: "GTA San Andreas Mobile Cheat Codes List & CLEO Mod Setup Guide",
    excerpt: "Full list of working GTA San Andreas Android cheat codes for health, weapons, money, and spawning cars without a keyboard.",
    category: "Cheats",
    icon: "🚗",
    date: "August 6, 2026",
    readTime: "10 min read",
    content: `<h2>GTA San Andreas Mobile Cheat Codes & Guide</h2>
<p>GTA San Andreas on mobile is legendary. Spawned tanks, infinite health, and all weapon sets make Los Santos 100x more fun! Here is how to enter cheats easily on Android.</p>
<h3>Method 1: Using Hacker's Keyboard (No Root)</h3>
<ol>
<li>Download 'Hacker's Keyboard' from Play Store.</li>
<li>Enable input method in Android Settings.</li>
<li>Launch GTA San Andreas and open the keyboard overlay to type cheats directly.</li>
</ol>
<h3>Popular GTA San Andreas Cheat Codes:</h3>
<ul>
<li><strong>GONCINZ (Full Health + Armor + $250,000):</strong> Instant cash and survival.</li>
<li><strong>LXGIWYL (Weapons Set 1 - Thug Tools):</strong> Brass knuckles, shotgun, AK-47, rocket launcher.</li>
<li><strong>PROFESSIONALSKIT (Weapons Set 2 - Professional):</strong> Katana, M4, sniper rifle, flamethrower.</li>
<li><strong>AIWPRTON (Spawn Rhino Tank):</strong> Spawns a military tank right in front of CJ.</li>
<li><strong>JUMPINGJACK (Super Jump):</strong> CJ can leap over tall buildings.</li>
<li><strong>SPEEDFREAK (All Cars Have Nitro):</strong> Max speed for all vehicles.</li>
</ul>`
  },
  {
    id: "top-5-open-world-games-like-gta-mobile-2026",
    title: "Top 5 Open World Offline Games Like GTA for Android (2026)",
    excerpt: "Love GTA San Andreas? Check out these top 5 open world crime and action games you can play offline on your phone.",
    category: "Top 5",
    icon: "🌆",
    date: "August 4, 2026",
    readTime: "7 min read",
    content: `<h2>Best Open World Offline Games Like GTA on Mobile</h2>
<p>If you love open-world sandbox games where you can drive cars, explore huge cities, complete action missions, and cause chaos, here are the 5 best alternatives to GTA available on Android.</p>
<h3>1. Gangstar Vegas: World of Crime</h3>
<p>Gameloft's flagship open-world game set in Las Vegas. Fight mafia bosses, drive supercars, steal helicopters, and explore an enormous map with 80+ action-packed story missions.</p>
<h3>2. Dude Theft Wars: Offline Open World Sandbox</h3>
<p>A hilarious blocky sandbox game inspired by GTA and Minecraft. Drive vehicles, launch ragdoll physics, and play offline with friends.</p>
<h3>3. MadOut2 BigCityOnline</h3>
<p>Features an enormous Russian open world with realistic car physics, over 50 different vehicles, and open territory sandbox gameplay.</p>
<h3>4. Payback 2: The Battle Sandbox</h3>
<p>Includes tank battles, helicopter races, street brawls, and gang wars across 7 cities with endless campaign modes.</p>
<h3>5. Rope Hero: Vice Town</h3>
<p>Combine superhero powers with open-world crime city gameplay! Swing across skyscrapers, drive sports cars, and fight street gangs.</p>`
  },
  {
    id: "real-cricket-24-batting-bowling-masterclass-2026",
    title: "Real Cricket 24 Masterclass: Perfect Batting Timing & Spin Bowling Guide",
    excerpt: "Master lofted shots, perfect green timing, and leg-spin variations in Real Cricket 24 to win every Premier League match.",
    category: "Guides",
    icon: "🏏",
    date: "August 3, 2026",
    readTime: "8 min read",
    content: `<h2>Real Cricket 24 Batting & Bowling Masterclass</h2>
<p>Real Cricket 24 is India's most realistic mobile cricket game. To beat expert AI and win online multiplayer matches, you need precise shot selection and ball placement.</p>
<h3>1. Batting Shot Selection & Timing</h3>
<ul>
<li><strong>Green Timing Bar:</strong> Watch the bowler's release point. Release your shot button right when the ball lands on the pitch indicator to get Perfect (Green) timing.</li>
<li><strong>Spinners:</strong> Use 'Backfoot Loft' against leg spinners turning away to hit easy sixes over extra cover.</li>
<li><strong>Pace Bowlers:</strong> Use 'Frontfoot Push' for quick singles or wait for short balls to play the Pull Shot over fine leg.</li>
</ul>
<h3>2. Bowling Mastery</h3>
<ul>
<li><strong>Leg Spin & Top Spin:</strong> Pitch the ball on good length on off-stump line with maximum turn. AI batsmen will edge it to slip or get bowled.</li>
<li><strong>Reverse Swing:</strong> In Test matches, use old ball reverse swing by placing the seam indicator towards the shiny side.</li>
</ul>`
  },
  {
    id: "top-multiplayer-party-games-android-2026",
    title: "Top 5 Fun Multiplayer Party Games to Play With Friends on Mobile",
    excerpt: "Looking for fun games to play with your friends online or on local Wi-Fi? Check out these 5 awesome party games for Android.",
    category: "Top 5",
    icon: "🎉",
    date: "August 2, 2026",
    readTime: "6 min read",
    content: `<h2>Best Multiplayer Party Games for Android</h2>
<p>Mobile gaming is best enjoyed with friends! Whether you're hanging out together in the same room or playing online from home, these top party games guarantee laughs and fun competitions.</p>
<h3>1. Stumble Guys</h3>
<p>32-player chaotic obstacle course runner. Outrun, dodge obstacles, and outlast your friends through hilarious elimination rounds.</p>
<h3>2. Among Us</h3>
<p>The ultimate social deduction game. Work together to repair your spaceship, but beware — 1 or 2 players are alien Impostors trying to eliminate the crew!</p>
<h3>3. Ludo King</h3>
<p>India's favorite board game brought to mobile. Play 4-player online matches or local pass-and-play with friends and family.</p>
<h3>4. BombSquad</h3>
<p>Hilarious 8-player local Wi-Fi party game! Punch, throw bombs, and fight in capture-the-flag mini-games with cute ragdoll physics.</p>
<h3>5. 8 Ball Pool</h3>
<p>Miniclip's classic pool game. Challenge your friends to 1v1 matches, show off your trick shots, and win custom pool cues.</p>`
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SITE_NAME, SITE_TAGLINE, SITE_URL, CATEGORIES, GAMES, BLOG_POSTS };
}
