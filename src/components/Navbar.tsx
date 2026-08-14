"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Search, Menu, X, Gamepad2 } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setMobileOpen(false);
    }
  };

  return (
    <header className="navbar">
      <div className="container">
        <Link href="/" className="nav-logo" onClick={() => setMobileOpen(false)}>
          <img src="/images/logo.png" alt="GameVault Logo" className="site-logo-img" />
          <span>GameVault</span>
        </Link>

        <form onSubmit={handleSearchSubmit} className="nav-search">
          <span className="search-icon"><Search size={16} /></span>
          <input
            type="text"
            placeholder="Search 200+ Android games..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>

        <nav>
          <ul className={`nav-links ${mobileOpen ? "active" : ""}`}>
            <li>
              <Link href="/" className={pathname === "/" ? "active" : ""} onClick={() => setMobileOpen(false)}>
                🏠 Home
              </Link>
            </li>
            <li>
              <Link href="/category/action" className={pathname.startsWith("/category") ? "active" : ""} onClick={() => setMobileOpen(false)}>
                🎮 Games
              </Link>
            </li>
            <li>
              <Link href="/blog" className={pathname.startsWith("/blog") ? "active" : ""} onClick={() => setMobileOpen(false)}>
                📝 Blog
              </Link>
            </li>
            <li>
              <Link href="/about" className={pathname === "/about" ? "active" : ""} onClick={() => setMobileOpen(false)}>
                ℹ️ About
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className="nav-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
