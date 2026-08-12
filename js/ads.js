/* ============================================
   GAMEVAULT APK — Ad Zones Manager
   Monetag + AdSense Placeholder System
   ============================================ */

/*
  HOW TO USE:
  
  1. MONETAG SETUP:
     - Sign up at monetag.com as Publisher
     - Get your Popunder, Push, In-Page Push, and Interstitial codes
     - Replace the placeholder codes below with your actual Monetag codes
  
  2. ADSENSE SETUP:
     - Apply for AdSense once you have 30+ pages
     - Get your ad unit codes
     - Replace the placeholder divs in HTML with actual AdSense ad units
  
  3. AD ZONES IN HTML:
     - <div class="ad-zone ad-zone-banner"> → 728x90 Banner
     - <div class="ad-zone ad-zone-rectangle"> → 336x280 Rectangle
     - These are styled placeholders — replace innerHTML with real ad code
*/

// ---- MONETAG CONFIG (Replace with your actual codes) ----
const MONETAG_CONFIG = {
  enabled: false, // Set to true when you have Monetag codes
  popunder: {
    enabled: false,
    code: 'YOUR_POPUNDER_CODE_HERE'
  },
  push: {
    enabled: false,
    swPath: '/sw.js' // Upload sw.js to root
  },
  inPagePush: {
    enabled: false,
    code: 'YOUR_INPAGE_PUSH_CODE_HERE'
  },
  interstitial: {
    enabled: false,
    code: 'YOUR_INTERSTITIAL_CODE_HERE'
  }
};

// ---- ADSENSE CONFIG ----
const ADSENSE_CONFIG = {
  enabled: false, // Set to true when AdSense is approved
  publisherId: 'ca-pub-XXXXXXXXXXXXXXXX', // Your AdSense publisher ID
  slots: {
    banner: 'XXXXXXXXXX',      // 728x90 banner slot
    rectangle: 'XXXXXXXXXX',   // 336x280 rectangle slot
    inArticle: 'XXXXXXXXXX'    // In-article slot
  }
};

// ---- Initialize Ads ----
function initAds() {
  if (MONETAG_CONFIG.enabled) {
    initMonetag();
  }

  if (ADSENSE_CONFIG.enabled) {
    initAdSense();
  }
}

// ---- Monetag Setup ----
function initMonetag() {
  // Popunder
  if (MONETAG_CONFIG.popunder.enabled) {
    const script = document.createElement('script');
    script.src = `https://monetag.com/tag/${MONETAG_CONFIG.popunder.code}`;
    script.async = true;
    document.head.appendChild(script);
  }

  // Push Notifications
  if (MONETAG_CONFIG.push.enabled) {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register(MONETAG_CONFIG.push.swPath);
    }
  }

  // In-Page Push
  if (MONETAG_CONFIG.inPagePush.enabled) {
    const script = document.createElement('script');
    script.src = `https://monetag.com/tag/${MONETAG_CONFIG.inPagePush.code}`;
    script.async = true;
    document.head.appendChild(script);
  }
}

// ---- AdSense Setup ----
function initAdSense() {
  // Load AdSense script
  const script = document.createElement('script');
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CONFIG.publisherId}`;
  script.crossOrigin = 'anonymous';
  script.async = true;
  document.head.appendChild(script);
}

// ---- Show Interstitial Before Download ----
function showInterstitialAd(callback) {
  if (MONETAG_CONFIG.enabled && MONETAG_CONFIG.interstitial.enabled) {
    // Monetag interstitial logic here
    // After ad closes, call callback
    if (typeof callback === 'function') {
      setTimeout(callback, 1000);
    }
  } else {
    // No interstitial — proceed directly
    if (typeof callback === 'function') {
      callback();
    }
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initAds);
