"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navigationItems } from "../data/navigation";
import styles from "./Header.module.css";

type HeaderProps = {
  supportHref?: string;
};

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.2 4.2" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7 9.5 5 5 5-5" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12a8 8 0 0 1-8 8H7l-4 2 1.4-4.1A8 8 0 1 1 21 12Z" />
    </svg>
  );
}

export default function Header({ supportHref = "/support" }: HeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isHomePage = pathname === "/";

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <a className={styles.skipLink} href="#content">
        Skip to content
      </a>

      <header
        className={`${styles.header} ${
          isHomePage ? styles.homeHeader : styles.innerHeader
        }`}
      >
        <div className={styles.shell}>
          <Link
            className={styles.brand}
            href="/"
            aria-label="Services SETA home"
            onClick={closeMenu}
          >
            <Image
              className={styles.logo}
              src="/logo.png"
              alt="Services SETA"
              width={62}
              height={62}
              priority
            />
          </Link>

          <button
            className={styles.menuButton}
            type="button"
            aria-controls="primary-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span>{menuOpen ? "Close" : "Menu"}</span>
            <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
          </button>

          <div
            className={`${styles.navigationPanel} ${
              menuOpen ? styles.navigationPanelOpen : ""
            }`}
          >
            <nav
              id="primary-navigation"
              className={styles.primaryNavigation}
              aria-label="Primary navigation"
            >
              {navigationItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(`${item.href}/`));

                return (
                  <Link
                    className={isActive ? styles.activeLink : undefined}
                    href={item.href}
                    key={item.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className={styles.actions}>
              <form
                className={styles.search}
                action="/search"
                method="get"
                role="search"
              >
                <label className={styles.srOnly} htmlFor="header-search-input">
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
                className={styles.wantButton}
                href="/i-want-to"
                onClick={closeMenu}
              >
                <span>I want to...</span>
                <ChevronDownIcon />
              </Link>

              <Link
                className={styles.mobileHelpLink}
                href={supportHref}
                onClick={closeMenu}
              >
                Get help
              </Link>
            </div>
          </div>
        </div>
      </header>

      <button
        id="open-chatbot"
        className={styles.chatbotTrigger}
        type="button"
        aria-label="Open the Services SETA chatbot"
        aria-haspopup="dialog"
        data-chatbot-trigger
        data-support-href={supportHref}
      >
        <ChatIcon />
        <span>Need help?</span>
      </button>
    </>
  );
}
