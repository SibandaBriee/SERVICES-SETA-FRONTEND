"use client";

import Link from "next/link";
import { useState } from "react";
import { navigationItems } from "../data/navigation";

type HeaderProps = {
  supportHref?: string;
};

export default function Header({ supportHref = "/support" }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <div className="utility-bar">
        <div className="container utility-inner">
          <div className="accessibility">
            <span>Accessibility</span>
            <button type="button">A−</button>
            <button type="button">A</button>
            <button type="button">A+</button>
            <button type="button">◐ High contrast</button>
          </div>

          <div className="utility-links">
            <Link href={supportHref}>Customer care: 0800 111 901</Link>
            <Link href={supportHref}>Get help</Link>
            <button type="button">English⌄</button>
          </div>
        </div>
      </div>

      <header className="main-header">
        <div className="container header-inner">
          <Link className="brand" href="/" aria-label="Services SETA home">
            <span className="brand-mark">
              <span>SERVICES</span>
              <span>SETA</span>
            </span>
            <span className="brand-name">
              SERVICES
              <br />
              SETA
            </span>
          </Link>

          <button
            className="menu-button"
            type="button"
            aria-controls="primary-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            Menu {menuOpen ? "×" : "☰"}
          </button>

          <nav
            id="primary-navigation"
            className={menuOpen ? "primary-nav open" : "primary-nav"}
            aria-label="Primary navigation"
          >
            {navigationItems.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link className="want-button" href="/i-want-to">
            I want to… <span>⌄</span>
          </Link>

          <Link
            className="search-icon"
            href="/search"
            aria-label="Open search"
          >
            ⌕
          </Link>
        </div>
      </header>
    </>
  );
}
