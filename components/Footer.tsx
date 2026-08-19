/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

type FooterProps = {
  homePage?: boolean;
};

const socialLinks = [
  {
    label: "Instagram",
    shortLabel: "IG",
    href: "#",
  },
  {
    label: "YouTube",
    shortLabel: "▶",
    href: "#",
  },
  {
    label: "LinkedIn",
    shortLabel: "in",
    href: "#",
  },
  {
    label: "X",
    shortLabel: "X",
    href: "#",
  },
  {
    label: "Facebook",
    shortLabel: "f",
    href: "#",
  },
];

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export default function Footer({ homePage = false }: FooterProps) {
  const logoHref = homePage ? "#content" : "/";

  return (
    <footer className="site-footer">
      <div className="site-footer-top">
        <div className="container site-footer-brand-row">
          <Link
            className="site-footer-logo"
            href={logoHref}
            aria-label="Services SETA home"
          >
            <img src="/logo.png" alt="Services SETA" />

            <span>SERVICES SETA</span>
          </Link>
        </div>

        <svg
          className="site-footer-wave"
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="
              M0 112
              C210 126 370 100 560 53
              C775 0 965 -10 1145 30
              C1270 58 1360 95 1440 118
              L1440 150
              L0 150
              Z
            "
          />
        </svg>
      </div>

      <div className="site-footer-main">
        <div className="container site-footer-grid">
          <section className="site-footer-column">
            <h2>About Services SETA</h2>

            <nav aria-label="About Services SETA">
              <Link href="/about/who-we-are">Who We Are</Link>
              <Link href="/about/mandate">Our Mandate</Link>
              <Link href="/about/governance-leadership">Governance</Link>
              <Link href="/about/governance-leadership">Leadership</Link>
              <Link href="/about/strategy-performance">
                Strategy &amp; Performance
              </Link>
              <Link href="/resources">Corporate Plans &amp; Reports</Link>
            </nav>
          </section>

          <section className="site-footer-column">
            <h2>Explore</h2>

            <nav aria-label="Explore Services SETA">
              <Link href="/industries">Industries We Serve</Link>
              <Link href="/learning-programmes">Learning Programmes</Link>
              <Link href="/funding">Funding</Link>
              <Link href="/accreditation">Accreditation</Link>
              <Link href="/qualifications">Qualifications</Link>
              <Link href="/career-guidance">Career Guidance</Link>
            </nav>
          </section>

          <section className="site-footer-column">
            <h2>Resources</h2>

            <nav aria-label="Resources">
              <Link href="/resources">Policies</Link>
              <Link href="/resources">Guidelines</Link>
              <Link href="/resources">Forms &amp; Templates</Link>
              <Link href="/resources">Publications</Link>
              <Link href="/resources">Research</Link>
              <Link href="/resources">Annual Reports</Link>
            </nav>
          </section>

          <section className="site-footer-column site-footer-connect">
            <h2>Connect With Us</h2>

            <a
              className="site-footer-contact"
              href="tel:0800111901"
            >
              <span className="site-footer-contact-icon">
                <PhoneIcon />
              </span>

              <span>0800 111 901</span>
            </a>

            <a
              className="site-footer-contact"
              href="mailto:customercare@serviceseta.org.za"
            >
              <span className="site-footer-contact-icon">
                <MailIcon />
              </span>

              <span>customercare@serviceseta.org.za</span>
            </a>

            <Link className="site-footer-contact" href="/contact">
              <span className="site-footer-contact-icon">
                <LocationIcon />
              </span>

              <span>
                15 Sherborne Road
                <br />
                Parktown, Gauteng
              </span>
            </Link>

            <div
              className="site-footer-socials"
              aria-label="Services SETA social media"
            >
              {socialLinks.map((socialLink) => (
                <a
                  href={socialLink.href}
                  key={socialLink.label}
                  aria-label={socialLink.label}
                  title={socialLink.label}
                >
                  {socialLink.shortLabel}
                </a>
              ))}
            </div>
          </section>

          <section className="site-footer-column site-footer-newsletter">
            <h2>Stay Updated</h2>

            <p>
              Subscribe for updates on opportunities, programmes and
              important notices.
            </p>

            <form
              className="site-footer-subscribe"
              action="/contact"
              method="get"
            >
              <label className="sr-only" htmlFor="footer-email">
                Enter your email address
              </label>

              <input
                id="footer-email"
                name="email"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                required
              />

              <button type="submit">Subscribe</button>
            </form>
          </section>
        </div>

        <div className="container site-footer-bottom">
          <span>© 2026 Services SETA. All rights reserved.</span>

          <nav aria-label="Legal and accessibility links">
            <Link href="/resources">POPIA</Link>
            <Link href="/resources">Privacy Notice</Link>
            <Link href="/resources">PAIA</Link>
            <Link href="/resources">Terms &amp; Conditions</Link>
            <Link href="/support">Accessibility</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}