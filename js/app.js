/* ============================================
   GAMEVAULT APK — Main App Logic
   Routing, Search, Rendering, Interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initSearch();
  initBackToTop();
  initScrollAnimations();
  initFAQAccordion();
  initPageSpecific();
});

// ---------- MOBILE NAV ----------
function initMobileNav() {
  const toggle = document.querySelector('.nav-mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = toggle.querySelector('span');
      if (icon) {
        icon.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
      }
    });

    // Close nav on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = toggle.querySelector('span');
        if (icon) icon.textContent = '☰';
      });
    });
  }
}

// ---------- SEARCH ----------
function initSearch() {
  // Hero search
  const heroSearch = document.getElementById('hero-search-input');
  const heroSearchBtn = document.getElementById('hero-search-btn');
  if (heroSearch) {
    heroSearch.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') performSearch(heroSearch.value);
    });
    if (heroSearchBtn) {
      heroSearchBtn.addEventListener('click', () => performSearch(heroSearch.value));
    }
  }

  // Nav search
  const navSearch = document.getElementById('nav-search-input');
  if (navSearch) {
    navSearch.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') performSearch(navSearch.value);
    });
  }

  // Mobile search
  const mobileSearch = document.getElementById('mobile-search-input');
  if (mobileSearch) {
    mobileSearch.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') performSearch(mobileSearch.value);
    });
  }
}

function performSearch(query) {
  if (query.trim()) {
    window.location.href = `search.html?q=${encodeURIComponent(query.trim())}`;
  }
}

function searchGames(query) {
  if (!query) return [];
  const q = query.toLowerCase().trim();
  return GAMES.filter(game =>
    game.name.toLowerCase().includes(q) ||
    game.category.toLowerCase().includes(q) ||
    (game.developer && game.developer.toLowerCase().includes(q))
  );
}

// ---------- BACK TO TOP ----------
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ---------- SCROLL ANIMATIONS ----------
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}

// ---------- FAQ ACCORDION ----------
function initFAQAccordion() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isActive = item.classList.contains('active');

      // Close all
      document.querySelectorAll('.faq-item.active').forEach(activeItem => {
        activeItem.classList.remove('active');
      });

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// ---------- PAGE SPECIFIC ----------
function initPageSpecific() {
  const page = document.body.dataset.page;

  switch (page) {
    case 'home':
      renderHomepage();
      break;
    case 'game':
      renderGamePage();
      break;
    case 'download':
      renderDownloadPage();
      break;
    case 'category':
      renderCategoryPage();
      break;
    case 'search':
      renderSearchPage();
      break;
    case 'blog':
      renderBlogPage();
      break;
    case 'blog-post':
      renderBlogPostPage();
      break;
  }
}

// ---------- RENDER HOMEPAGE ----------
function renderHomepage() {
  // Render trending games
  const trendingContainer = document.getElementById('trending-games');
  if (trendingContainer) {
    const trending = GAMES.slice(0, 6);
    trendingContainer.innerHTML = trending.map((game, i) => `
      <a href="game.html?id=${game.id}" class="trending-card">
        <div class="trending-card-image">
          <div class="game-icon-placeholder" style="font-size:4rem; background: linear-gradient(135deg, ${game.iconColor}22, ${game.iconColor}11);">${game.icon}</div>
          <div class="trending-card-rank">#${i + 1}</div>
        </div>
        <div class="trending-card-body">
          <h3>${game.name}</h3>
          <div class="meta">
            <span>⭐ ${game.rating}</span>
            <span>•</span>
            <span>${game.size}</span>
            <span>•</span>
            <span>${game.category}</span>
          </div>
        </div>
      </a>
    `).join('');
  }

  // Render categories
  const catContainer = document.getElementById('categories-grid');
  if (catContainer) {
    catContainer.innerHTML = CATEGORIES.map(cat => `
      <a href="category.html?id=${cat.id}" class="category-card">
        <div class="cat-icon">${cat.icon}</div>
        <div class="cat-name">${cat.name}</div>
        <div class="cat-count">${cat.count} Games</div>
      </a>
    `).join('');
  }

  // Render latest games
  const latestContainer = document.getElementById('latest-games');
  if (latestContainer) {
    latestContainer.innerHTML = GAMES.map(game => createGameCard(game)).join('');
  }

  // Render blog preview
  const blogContainer = document.getElementById('blog-preview');
  if (blogContainer) {
    blogContainer.innerHTML = BLOG_POSTS.map(post => `
      <a href="blog-post.html?id=${post.id}" class="blog-card">
        <div class="blog-card-image">${post.icon}</div>
        <div class="blog-card-body">
          <span class="blog-card-tag">${post.category}</span>
          <h3>${post.title}</h3>
          <p>${post.excerpt}</p>
          <div class="blog-card-footer">
            <span>${post.date}</span>
            <span>${post.readTime}</span>
          </div>
        </div>
      </a>
    `).join('');
  }

  // Animate stats counter
  animateCounters();
}

// ---------- RENDER GAME PAGE ----------
function renderGamePage() {
  const params = new URLSearchParams(window.location.search);
  const gameId = params.get('id');

  if (!gameId) {
    window.location.href = 'index.html';
    return;
  }

  const game = GAMES.find(g => g.id === gameId);
  if (!game) {
    document.getElementById('game-content').innerHTML = `
      <div class="no-results">
        <div class="no-results-icon">😕</div>
        <h2>Game Not Found</h2>
        <p>The game you're looking for doesn't exist or has been removed.</p>
        <a href="index.html" class="btn btn-primary">Back to Home</a>
      </div>
    `;
    return;
  }

  // Update dynamic SEO & High-Impression Click Magnet Meta Tags
  const gamePageTitle = `${game.name} APK Download v${game.version} (Latest 2026 Free) | ${SITE_NAME}`;
  const gamePageDesc = `Download ${game.name} APK v${game.version} latest official version for Android. Fast direct download (${game.size}), 100% verified safe & malware-free from ${SITE_NAME}.`;
  const gameKeywords = `${game.name} APK, download ${game.name} APK, ${game.name} v${game.version} APK, ${game.name} free download Android, ${game.name} latest version 2026, ${game.name} APK download ${game.size}`;
  const gamePageUrl = `${SITE_URL}/game.html?id=${game.id}`;
  updateMetaTags({ title: gamePageTitle, description: gamePageDesc, keywords: gameKeywords, canonicalUrl: gamePageUrl, ogType: 'article' });

  // Render breadcrumb
  const breadcrumb = document.getElementById('game-breadcrumb');
  if (breadcrumb) {
    const cat = CATEGORIES.find(c => c.id === game.category);
    breadcrumb.innerHTML = `
      <a href="index.html">Home</a>
      <span class="separator">›</span>
      <a href="category.html?id=${game.category}">${cat ? cat.name : game.category}</a>
      <span class="separator">›</span>
      <span class="current">${game.name}</span>
    `;
  }

  // Render game content
  const content = document.getElementById('game-content');
  if (content) {
    content.innerHTML = `
      <!-- Game Header -->
      <div class="game-header">
        <div class="game-icon-large" style="background: linear-gradient(135deg, ${game.iconColor}22, ${game.iconColor}11);">
          ${game.icon}
        </div>
        <div class="game-header-info">
          <h1>${game.name} APK Download v${game.version}</h1>
          <div class="game-developer">by ${game.developer}</div>
          <div class="game-rating-large">
            <span class="stars">${getStars(game.rating)}</span>
            <span class="rating-text">${game.rating}/5</span>
            <span style="color:var(--text-tertiary); font-size:0.85rem;">(${game.downloads} downloads)</span>
          </div>
          <div class="safety-badge">✅ Verified Safe — No Malware</div>
        </div>
      </div>

      <!-- Meta Grid -->
      <div class="game-meta-grid">
        <div class="meta-item">
          <div class="meta-label">Version</div>
          <div class="meta-value">${game.version}</div>
        </div>
        <div class="meta-item">
          <div class="meta-label">Size</div>
          <div class="meta-value">${game.size}</div>
        </div>
        <div class="meta-item">
          <div class="meta-label">Android</div>
          <div class="meta-value">${game.androidReq}</div>
        </div>
        <div class="meta-item">
          <div class="meta-label">Updated</div>
          <div class="meta-value">${game.lastUpdated}</div>
        </div>
        <div class="meta-item">
          <div class="meta-label">Category</div>
          <div class="meta-value" style="text-transform:capitalize;">${game.category}</div>
        </div>
        <div class="meta-item">
          <div class="meta-label">Downloads</div>
          <div class="meta-value">${game.downloads}</div>
        </div>
      </div>

      <!-- Download Button -->
      <div style="text-align:center; margin: var(--spacing-2xl) 0;">
        <a href="download.html?id=${game.id}" class="download-btn-large" id="download-btn">
          ⬇ Download APK v${game.version} (${game.size})
        </a>
        <p style="margin-top:var(--spacing-md); font-size:0.8rem; color:var(--text-tertiary);">
          Safe & Verified • ${game.size} • Android ${game.androidReq}
        </p>
      </div>

      <!-- Ad Zone -->
      <div class="ad-zone ad-zone-banner">AdSense Banner 728×90 — Place your ad code here</div>

      <!-- Screenshots -->
      <div class="content-block screenshots-section">
        <h2>📸 Screenshots</h2>
        <div class="screenshots-scroll">
          ${game.screenshots.map((s, i) => `
            <div class="screenshot-item" style="background: linear-gradient(135deg, ${game.iconColor}15, ${game.iconColor}08); display:flex; align-items:center; justify-content:center; font-size:2.5rem;">
              ${s}
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Description -->
      <div class="content-block">
        <h2>📝 About ${game.name}</h2>
        <p>${game.description}</p>
      </div>

      <!-- Features -->
      <div class="content-block">
        <h2>✨ Features</h2>
        <ul>
          ${game.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
      </div>

      <!-- Ad Zone -->
      <div class="ad-zone ad-zone-rectangle">AdSense In-Article 336×280 — Place your ad code here</div>

      <!-- Review -->
      <div class="content-block">
        <h2>🎮 Our Review</h2>
        <p>${game.review}</p>
      </div>

      <!-- What's New -->
      <div class="content-block">
        <h2>🆕 What's New in v${game.version}</h2>
        <p>${game.whatsNew}</p>
      </div>

      <!-- Pros & Cons -->
      <div class="pros-cons">
        <div class="pros-list content-block">
          <h3>✅ Pros</h3>
          <ul>
            ${game.pros.map(p => `<li>${p}</li>`).join('')}
          </ul>
        </div>
        <div class="cons-list content-block">
          <h3>❌ Cons</h3>
          <ul>
            ${game.cons.map(c => `<li>${c}</li>`).join('')}
          </ul>
        </div>
      </div>

      <!-- How to Install -->
      <div class="content-block">
        <h2>📋 How to Install APK</h2>
        <div class="install-steps">
          ${game.installSteps.map((step, i) => `
            <div class="install-step">
              <div class="step-number">${i + 1}</div>
              <div class="step-content">
                <h4>${step.title}</h4>
                <p>${step.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Older Versions -->
      <div class="content-block">
        <h2>📦 Older Versions</h2>
        <table class="versions-table">
          <thead>
            <tr>
              <th>Version</th>
              <th>Date</th>
              <th>Size</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${game.olderVersions.map(v => `
              <tr>
                <td>${v.version}</td>
                <td>${v.date}</td>
                <td>${v.size}</td>
                <td><a href="${game.playStoreUrl}" target="_blank" class="btn btn-outline" style="padding:4px 12px; font-size:0.75rem;">Download</a></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <!-- Ad Zone -->
      <div class="ad-zone ad-zone-banner">AdSense Banner 336×280 — Place your ad code here</div>

      <!-- FAQ -->
      <div class="content-block">
        <h2>❓ Frequently Asked Questions</h2>
        ${game.faq.map(f => `
          <div class="faq-item">
            <button class="faq-question">
              <span>${f.q}</span>
              <span class="faq-toggle">+</span>
            </button>
            <div class="faq-answer">
              <p>${f.a}</p>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Related Games -->
      <div class="content-block">
        <h2>🎮 Similar Games</h2>
        <div class="related-games-grid">
          ${game.relatedGames.map(relId => {
            const rel = GAMES.find(g => g.id === relId);
            return rel ? createGameCard(rel) : '';
          }).join('')}
        </div>
      </div>
    `;

    // Re-init FAQ after dynamic render
    initFAQAccordion();

    // Add Schema markup
    addGameSchema(game);
  }
}

// ---------- RENDER CATEGORY PAGE ----------
function renderCategoryPage() {
  const params = new URLSearchParams(window.location.search);
  const catId = params.get('id');

  if (!catId) {
    window.location.href = 'index.html';
    return;
  }

  const category = CATEGORIES.find(c => c.id === catId);
  if (!category) {
    window.location.href = 'index.html';
    return;
  }

  // Update title
  const catTitle = `Top Best ${category.name} Games APK Download (2026 Free) | ${SITE_NAME}`;
  const catDesc = `Browse and download the best ${category.name} games APK for Android. Verified safe, fast download speeds & latest 2026 updates.`;
  const catKeywords = `${category.name} games APK, best ${category.name} Android games, download ${category.name} games free, top ${category.name} APK 2026`;
  const catUrl = `${SITE_URL}/category.html?id=${catId}`;
  updateMetaTags({ title: catTitle, description: catDesc, keywords: catKeywords, canonicalUrl: catUrl });

  // Update header
  const header = document.getElementById('category-header');
  if (header) {
    header.innerHTML = `
      <div class="breadcrumb">
        <a href="index.html">Home</a>
        <span class="separator">›</span>
        <span class="current">${category.name} Games</span>
      </div>
      <div style="display:flex; align-items:center; gap:var(--spacing-md); margin-bottom:var(--spacing-md);">
        <span style="font-size:2.5rem;">${category.icon}</span>
        <div>
          <h1>${category.name} Games</h1>
          <p>${category.description}</p>
        </div>
      </div>
    `;
  }

  // Get games in this category
  const categoryGames = GAMES.filter(g => g.category === catId);

  // Render games
  const grid = document.getElementById('category-games');
  if (grid) {
    if (categoryGames.length === 0) {
      grid.innerHTML = `
        <div class="no-results">
          <div class="no-results-icon">🎮</div>
          <h2>No Games Yet</h2>
          <p>We're adding ${category.name} games soon. Check back later!</p>
          <a href="index.html" class="btn btn-primary">Back to Home</a>
        </div>
      `;
    } else {
      grid.innerHTML = categoryGames.map(game => createGameCard(game)).join('');
    }
  }

  // Render filter for other categories
  const filterBar = document.getElementById('category-filter');
  if (filterBar) {
    filterBar.innerHTML = CATEGORIES.map(cat => `
      <a href="category.html?id=${cat.id}" class="filter-btn ${cat.id === catId ? 'active' : ''}">${cat.icon} ${cat.name}</a>
    `).join('');
  }
}

// ---------- RENDER SEARCH PAGE ----------
function renderSearchPage() {
  const params = new URLSearchParams(window.location.search);
  const query = params.get('q') || '';

  // Update search input
  const searchInput = document.getElementById('search-page-input');
  if (searchInput) searchInput.value = query;

  // Search
  const results = query ? searchGames(query) : [];

  // Update header
  const header = document.getElementById('search-header');
  if (header) {
    header.innerHTML = `
      <h1>Search Results for "<span>${escapeHtml(query)}</span>"</h1>
      <p class="search-results-count">${results.length} game${results.length !== 1 ? 's' : ''} found</p>
    `;
  }

  // Render results
  const grid = document.getElementById('search-results');
  if (grid) {
    if (results.length === 0) {
      grid.innerHTML = `
        <div class="no-results">
          <div class="no-results-icon">🔍</div>
          <h2>No Games Found</h2>
          <p>Try a different search term or browse our categories.</p>
          <a href="index.html" class="btn btn-primary" style="margin-top:var(--spacing-lg);">Browse All Games</a>
        </div>
      `;
    } else {
      grid.className = 'games-grid';
      grid.innerHTML = results.map(game => createGameCard(game)).join('');
    }
  }

  // Search on this page
  if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        performSearch(searchInput.value);
      }
    });
  }

  // Update title
  document.title = `Search: ${query} | ${SITE_NAME}`;
}

// ---------- RENDER BLOG PAGE ----------
function renderBlogPage() {
  const grid = document.getElementById('blog-grid');
  if (grid) {
    grid.innerHTML = BLOG_POSTS.map(post => `
      <a href="blog-post.html?id=${post.id}" class="blog-card">
        <div class="blog-card-image">${post.icon}</div>
        <div class="blog-card-body">
          <span class="blog-card-tag">${post.category}</span>
          <h3>${post.title}</h3>
          <p>${post.excerpt}</p>
          <div class="blog-card-footer">
            <span>${post.date}</span>
            <span>${post.readTime}</span>
          </div>
        </div>
      </a>
    `).join('');
  }
}

// ---------- RENDER BLOG POST PAGE ----------
function renderBlogPostPage() {
  const params = new URLSearchParams(window.location.search);
  const postId = params.get('id');

  if (!postId) {
    window.location.href = 'blog.html';
    return;
  }

  const post = BLOG_POSTS.find(p => p.id === postId);
  if (!post) {
    window.location.href = 'blog.html';
    return;
  }

  // Update title
  const postTitle = `${post.title} — GameVault Guide (2026)`;
  const postDesc = `${post.excerpt} Learn pro tips, tricks, and complete installation guide on GameVault APK.`;
  const postKeywords = `${post.title}, gaming guide 2026, Android gaming tips, ${post.category}`;
  const postUrl = `${SITE_URL}/blog-post.html?id=${postId}`;
  updateMetaTags({ title: postTitle, description: postDesc, keywords: postKeywords, canonicalUrl: postUrl, ogType: 'article' });

  const container = document.getElementById('blog-post-content');
  if (container) {
    container.innerHTML = `
      <div class="blog-post-header">
        <span class="post-tag">${post.category}</span>
        <h1>${post.title}</h1>
        <div class="blog-post-meta">
          <span>📅 ${post.date}</span>
          <span>⏱ ${post.readTime}</span>
          <span>✍️ GameVault Team</span>
        </div>
      </div>
      <div class="ad-zone ad-zone-banner">AdSense Banner 728×90</div>
      <div class="blog-post-body">
        ${post.content}
      </div>
      <div class="ad-zone ad-zone-rectangle">AdSense In-Article Ad</div>
      <div class="content-block" style="margin-top:var(--spacing-2xl);">
        <h2>📖 More Articles</h2>
        <div class="blog-grid">
          ${BLOG_POSTS.filter(p => p.id !== postId).map(p => `
            <a href="blog-post.html?id=${p.id}" class="blog-card">
              <div class="blog-card-image">${p.icon}</div>
              <div class="blog-card-body">
                <span class="blog-card-tag">${p.category}</span>
                <h3>${p.title}</h3>
                <div class="blog-card-footer">
                  <span>${p.date}</span>
                  <span>${p.readTime}</span>
                </div>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    `;
  }
}

// ---------- HELPER FUNCTIONS ----------
function createGameCard(game) {
  const isDetailed = GAMES.find(g => g.id === game.id);
  const href = isDetailed ? `game.html?id=${game.id}` : '#';

  return `
    <div class="game-card" onclick="window.location.href='${href}'" role="button" tabindex="0">
      <div class="game-card-image">
        <div class="game-icon-placeholder" style="background: linear-gradient(135deg, ${game.iconColor || '#333'}22, ${game.iconColor || '#333'}11);">
          ${game.icon}
        </div>
        <span class="game-card-category">${game.category}</span>
      </div>
      <div class="game-card-body">
        <div class="game-card-title">${game.name}</div>
        <div class="game-card-meta">
          <div class="game-card-rating">
            ⭐ <span>${game.rating}</span>
          </div>
          <span class="game-card-size">${game.size}</span>
        </div>
        <a href="${href}" class="game-card-download" onclick="event.stopPropagation();">
          ⬇ Download
        </a>
      </div>
    </div>
  `;
}

function getStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let stars = '';
  for (let i = 0; i < full; i++) stars += '★';
  if (half) stars += '★';
  for (let i = stars.length; i < 5; i++) stars += '☆';
  return stars;
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ---------- COUNTER ANIMATION ----------
function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.count);
    const suffix = counter.dataset.suffix || '';
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const current = Math.round(target * eased);
      counter.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          requestAnimationFrame(update);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(counter);
  });
}

// ---------- SCHEMA MARKUP ----------
function addGameSchema(game) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": game.name,
    "operatingSystem": "Android",
    "applicationCategory": "GameApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": game.rating.toString(),
      "ratingCount": "10000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "softwareVersion": game.version,
    "fileSize": game.size,
    "author": {
      "@type": "Organization",
      "name": game.developer
    }
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_URL + "/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": game.category,
        "item": `${SITE_URL}/category.html?id=${game.category}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": game.name,
        "item": `${SITE_URL}/game.html?id=${game.id}`
      }
    ]
  };

  const breadScript = document.createElement('script');
  breadScript.type = 'application/ld+json';
  breadScript.textContent = JSON.stringify(breadcrumbSchema);
  document.head.appendChild(breadScript);

  // FAQ Schema
  if (game.faq && game.faq.length) {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": game.faq.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
    };

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);
  }
}

// ---------- RENDER DOWNLOAD PAGE ----------
function renderDownloadPage() {
  const params = new URLSearchParams(window.location.search);
  const gameId = params.get('id');

  if (!gameId) {
    window.location.href = 'index.html';
    return;
  }

  const game = GAMES.find(g => g.id === gameId);
  if (!game) {
    window.location.href = 'index.html';
    return;
  }

  // Update title
  document.title = `Downloading ${game.name} APK v${game.version} (${game.size}) | ${SITE_NAME}`;

  // Update breadcrumb
  const breadcrumb = document.getElementById('download-breadcrumb');
  if (breadcrumb) {
    breadcrumb.innerHTML = `
      <a href="index.html">Home</a>
      <span class="separator">›</span>
      <a href="game.html?id=${game.id}">${game.name}</a>
      <span class="separator">›</span>
      <span class="current">Download APK</span>
    `;
  }

  // Render download content
  const container = document.getElementById('download-content');
  if (container) {
    container.innerHTML = `
      <div class="download-card">
        <div class="verified-shield">🛡️ 100% Virus Free & Verified Safe</div>
        
        <div style="display:flex; align-items:center; justify-content:center; gap:1.5rem; margin:1rem 0; flex-wrap:wrap;">
          <div style="font-size:3.5rem; background: linear-gradient(135deg, ${game.iconColor || '#333'}22, ${game.iconColor || '#333'}11); width:80px; height:80px; display:flex; align-items:center; justify-content:center; border-radius:18px;">
            ${game.icon}
          </div>
          <div style="text-align:left;">
            <h1 style="font-size:1.6rem; margin-bottom:0.3rem;">${game.name} APK</h1>
            <div style="color:var(--text-tertiary); font-size:0.9rem;">
              <span>Version: <strong>v${game.version}</strong></span> • 
              <span>Size: <strong>${game.size}</strong></span> • 
              <span>Android: <strong>${game.androidReq}</strong></span>
            </div>
          </div>
        </div>

        <div id="countdown-wrapper">
          <p id="countdown-status" style="color:var(--text-secondary); font-weight:500; margin-top:1.5rem;">
            Generating your secure high-speed download link...
          </p>

          <div class="timer-circle" id="timer-display">10</div>

          <div class="progress-bar-container">
            <div class="progress-bar-fill" id="progress-fill"></div>
          </div>
        </div>

        <!-- In-Article Ad Slot -->
        <div class="ad-zone ad-zone-rectangle" style="margin:2rem auto; max-width:336px;">
          AdSense In-Article 336×280 — Download Sponsor Ad
        </div>

        <div id="download-action-area" style="display:none; margin-top:1.5rem;">
          <a href="${game.playStoreUrl}" target="_blank" rel="noopener noreferrer" class="download-ready-btn" id="final-download-btn">
            🚀 Click Here to Download APK (${game.size})
          </a>
          <p style="margin-top:1rem; font-size:0.85rem; color:var(--text-tertiary);">
            ✅ Direct download started. If it doesn't start automatically, click the button above.
          </p>
        </div>
      </div>

      <!-- Quick Install Steps -->
      <div class="content-block" style="margin-top:2rem;">
        <h3>📋 Quick Install Instructions</h3>
        <ol style="margin-left:1.2rem; color:var(--text-secondary); line-height:1.8;">
          <li>Once the <strong>.APK</strong> file downloads, open your device's <strong>Downloads</strong> folder.</li>
          <li>Tap on <code>${game.name}.apk</code> and select <strong>Install</strong>.</li>
          <li>If prompted, enable <em>"Install from Unknown Sources"</em> in your browser/settings.</li>
          <li>Launch the game and enjoy!</li>
        </ol>
      </div>

      <!-- Related Games -->
      <div class="content-block" style="margin-top:2rem;">
        <h3>🎮 You Might Also Like</h3>
        <div class="related-games-grid">
          ${(game.relatedGames || []).slice(0, 4).map(relId => {
            const rel = GAMES.find(g => g.id === relId);
            return rel ? createGameCard(rel) : '';
          }).join('')}
        </div>
      </div>
    `;

    // Start 10-second countdown
    let secondsLeft = 10;
    const timerDisplay = document.getElementById('timer-display');
    const progressFill = document.getElementById('progress-fill');
    const countdownStatus = document.getElementById('countdown-status');
    const actionArea = document.getElementById('download-action-area');
    const countdownWrapper = document.getElementById('countdown-wrapper');

    const interval = setInterval(() => {
      secondsLeft--;
      if (timerDisplay) timerDisplay.textContent = secondsLeft;
      if (progressFill) progressFill.style.width = `${((10 - secondsLeft) / 10) * 100}%`;

      if (secondsLeft <= 0) {
        clearInterval(interval);
        if (countdownWrapper) countdownWrapper.style.display = 'none';
        if (actionArea) actionArea.style.display = 'block';
      }
    }, 1000);
  }
}


// ---------- DYNAMIC SEO HELPER ----------
function updateMetaTags({ title, description, keywords, canonicalUrl, ogType = 'website' }) {
  if (title) {
    document.title = title;
    setMeta('property', 'og:title', title);
    setMeta('name', 'twitter:title', title);
  }
  if (description) {
    setMeta('name', 'description', description);
    setMeta('property', 'og:description', description);
    setMeta('name', 'twitter:description', description);
  }
  if (keywords) {
    setMeta('name', 'keywords', keywords);
  }
  if (canonicalUrl) {
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonicalUrl;
    setMeta('property', 'og:url', canonicalUrl);
  }
  setMeta('property', 'og:type', ogType);
}

function setMeta(attr, name, content) {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}
