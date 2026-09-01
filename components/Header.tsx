/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigationItems } from "../data/navigation";

type HeaderProps = {
  supportHref?: string;
};

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.7-3.7" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      width="17"
      height="17"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 7.5 5 5 5-5" />
    </svg>
  );
}

export default function Header({
  supportHref = "/support",
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <header
        className={`main-header ${
          isHomePage
            ? "main-header--home"
            : "main-header--inner"
        }`}
        data-support-href={supportHref}
      >
        <div className="header-shell">
          <Link
            className="brand"
            href="/"
            aria-label="Services SETA home"
          >
            <img
              className="brand-logo"
              src="/logo.png"
              alt="Services SETA"
              width="72"
              height="72"
            />
          </Link>

          <button
            className="menu-button"
            type="button"
            aria-controls="header-navigation-panel"
            aria-expanded={menuOpen}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            onClick={() =>
              setMenuOpen((current) => !current)
            }
          >
            <span>{menuOpen ? "Close" : "Menu"}</span>
            <span aria-hidden="true">
              {menuOpen ? "×" : "☰"}
            </span>
          </button>

          <div
            id="header-navigation-panel"
            className={
              menuOpen
                ? "header-nav-panel open"
                : "header-nav-panel"
            }
          >
            <nav
              className="primary-nav"
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

            <form
              className="header-search"
              action="/search"
              method="get"
              role="search"
            >
              <label
                className="sr-only"
                htmlFor="header-search-input"
              >
                Search the Services SETA website
              </label>

              <SearchIcon />

              <input
                id="header-search-input"
                name="q"
                type="search"
                placeholder="Search..."
                autoComplete="off"
              />
            </form>

            <Link
              className="want-button"
              href="/i-want-to"
              onClick={() => setMenuOpen(false)}
            >
              <span>I want to...</span>
              <ChevronDownIcon />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}