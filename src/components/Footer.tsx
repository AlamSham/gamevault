import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <Image src="/images/logo.png" alt="GameVault APK Logo" width={32} height={32} className="site-logo-img" />
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
            <h4>Legal &amp; Information</h4>
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
          <span>Made with ❤️ for Android Gamers</span>
        </div>
      </div>
    </footer>
  );
}
