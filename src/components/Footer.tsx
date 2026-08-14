import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/images/logo.png" alt="GameVault Logo" className="site-logo-img" style={{ height: 32 }} />
              <span>GameVault APK</span>
            </div>
            <p>Your trusted source for 100% safe, verified Android game APK downloads.</p>
          </div>

          <div className="footer-column">
            <h4>Categories</h4>
            <ul>
              <li><Link href="/category/action">Action Games</Link></li>
              <li><Link href="/category/racing">Racing Games</Link></li>
              <li><Link href="/category/puzzle">Puzzle Games</Link></li>
              <li><Link href="/category/strategy">Strategy Games</Link></li>
              <li><Link href="/category/sports">Sports Games</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Popular Games</h4>
            <ul>
              <li><Link href="/game/subway-surfers">Subway Surfers</Link></li>
              <li><Link href="/game/free-fire-max">Free Fire MAX</Link></li>
              <li><Link href="/game/minecraft">Minecraft</Link></li>
              <li><Link href="/game/pubg-mobile">PUBG Mobile</Link></li>
              <li><Link href="/game/clash-of-clans">Clash of Clans</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Legal & Information</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/dmca">DMCA Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} GameVault APK. All rights reserved.</span>
          <span>Made with ❤️ for Android Gamers — 100% SEO Optimized</span>
        </div>
      </div>
    </footer>
  );
}
