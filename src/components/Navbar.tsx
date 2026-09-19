"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Search, Menu, X } from "lucide-react";

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
        <Link prefetch={false} href="/" className="nav-logo" onClick={() => setMobileOpen(false)}>
          <Image src="/images/logo.png" alt="GameVault APK — Safe Android Game Downloads" width={36} height={36} className="site-logo-img" priority />
          <span>GameVault</span>
        </Link>

        <form onSubmit={handleSearchSubmit} className="nav-search">
          <span className="search-icon"><Search size={16} /></span>
          <input
            type="text"
            name="q"
            placeholder="Search games..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>

        <nav>
          <ul className={`nav-links ${mobileOpen ? "active" : ""}`}>
            <li>
              <Link prefetch={false} href="/" className={pathname === "/" ? "active" : ""} onClick={() => setMobileOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link prefetch={false} href="/all-games" className={pathname === "/all-games" ? "active" : ""} onClick={() => setMobileOpen(false)}>
                All Games A-Z
              </Link>
            </li>
            <li>
              <Link prefetch={false} href="/category/action" className={pathname.startsWith("/category") ? "active" : ""} onClick={() => setMobileOpen(false)}>
                Categories
              </Link>
            </li>
            <li>
              <Link prefetch={false} href="/blog" className={pathname.startsWith("/blog") ? "active" : ""} onClick={() => setMobileOpen(false)}>
                Guides &amp; News
              </Link>
            </li>
            <li>
              <Link prefetch={false} href="/about" className={pathname === "/about" ? "active" : ""} onClick={() => setMobileOpen(false)}>
                About &amp; Trust
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
