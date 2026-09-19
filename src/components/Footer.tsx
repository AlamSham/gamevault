import Link from "next/link";
import Image from "next/image";
import { GAMES } from "@/data/games";

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
              <li><Link prefetch={false} href="/category/action">Action Games</Link></li>
              <li><Link prefetch={false} href="/category/racing">Racing Games</Link></li>
              <li><Link prefetch={false} href="/category/puzzle">Puzzle Games</Link></li>
              <li><Link prefetch={false} href="/category/strategy">Strategy Games</Link></li>
              <li><Link prefetch={false} href="/category/sports">Sports Games</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Popular Games</h4>
            <ul>
              <li><Link prefetch={false} href="/game/subway-surfers">Subway Surfers</Link></li>
              <li><Link prefetch={false} href="/game/free-fire-max">Free Fire MAX</Link></li>
              <li><Link prefetch={false} href="/game/minecraft">Minecraft</Link></li>
              <li><Link prefetch={false} href="/game/capcut">CapCut Video Editor</Link></li>
              <li><Link prefetch={false} href="/game/block-blast">Block Blast!</Link></li>
              <li><Link prefetch={false} href="/all-games" style={{ color: "var(--accent-green)", fontWeight: 700 }}>Browse All {GAMES.length}+ Games →</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Legal &amp; Information</h4>
            <ul>
              <li><Link prefetch={false} href="/about">About Us</Link></li>
              <li><Link prefetch={false} href="/contact">Contact</Link></li>
              <li><Link prefetch={false} href="/privacy">Privacy Policy</Link></li>
              <li><Link prefetch={false} href="/terms">Terms of Service</Link></li>
              <li><Link prefetch={false} href="/dmca">DMCA Policy</Link></li>
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
