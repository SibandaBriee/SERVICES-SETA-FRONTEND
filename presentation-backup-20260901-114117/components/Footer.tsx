// /* eslint-disable @next/next/no-img-element */

// import Link from "next/link";

// type FooterProps = {
//   homePage?: boolean;
// };

// const socialLinks = [
//   {
//     label: "Instagram",
//     shortLabel: "IG",
//     href: "#",
//   },
//   {
//     label: "YouTube",
//     shortLabel: "▶",
//     href: "#",
//   },
//   {
//     label: "LinkedIn",
//     shortLabel: "in",
//     href: "#",
//   },
//   {
//     label: "X",
//     shortLabel: "X",
//     href: "#",
//   },
//   {
//     label: "Facebook",
//     shortLabel: "f",
//     href: "#",
//   },
// ];

// function PhoneIcon() {
//   return (
//     <svg
//       aria-hidden="true"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
//     </svg>
//   );
// }

// function MailIcon() {
//   return (
//     <svg
//       aria-hidden="true"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect x="3" y="5" width="18" height="14" rx="2" />
//       <path d="m3 7 9 6 9-6" />
//     </svg>
//   );
// }

// function LocationIcon() {
//   return (
//     <svg
//       aria-hidden="true"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
//       <circle cx="12" cy="10" r="2.5" />
//     </svg>
//   );
// }

// export default function Footer({ homePage = false }: FooterProps) {
//   const logoHref = homePage ? "#content" : "/";

//   return (
//     <footer className="site-footer">
//       <div className="site-footer-top">
//         <div className="container site-footer-brand-row">
//           <Link
//             className="site-footer-logo"
//             href={logoHref}
//             aria-label="Services SETA home"
//           >
//             <img src="/logo.png" alt="Services SETA" />

//             <span>SERVICES SETA</span>
//           </Link>
//         </div>

//         <svg
//           className="site-footer-wave"
//           viewBox="0 0 1440 150"
//           preserveAspectRatio="none"
//           aria-hidden="true"
//         >
//           <path
//             d="
//               M0 112
//               C210 126 370 100 560 53
//               C775 0 965 -10 1145 30
//               C1270 58 1360 95 1440 118
//               L1440 150
//               L0 150
//               Z
//             "
//           />
//         </svg>
//       </div>

//       <div className="site-footer-main">
//         <div className="container site-footer-grid">
//           <section className="site-footer-column">
//             <h2>About Services SETA</h2>

//             <nav aria-label="About Services SETA">
//               <Link href="/about/who-we-are">Who We Are</Link>
//               <Link href="/about/mandate">Our Mandate</Link>
//               <Link href="/about/governance-leadership">Governance</Link>
//               <Link href="/about/governance-leadership">Leadership</Link>
//               <Link href="/about/strategy-performance">
//                 Strategy &amp; Performance
//               </Link>
//               <Link href="/resources">Corporate Plans &amp; Reports</Link>
//             </nav>
//           </section>

//           <section className="site-footer-column">
//             <h2>Explore</h2>

//             <nav aria-label="Explore Services SETA">
//               <Link href="/industries">Industries We Serve</Link>
//               <Link href="/learning-programmes">Learning Programmes</Link>
//               <Link href="/funding">Funding</Link>
//               <Link href="/accreditation">Accreditation</Link>
//               <Link href="/qualifications">Qualifications</Link>
//               <Link href="/career-guidance">Career Guidance</Link>
//             </nav>
//           </section>

//           <section className="site-footer-column">
//             <h2>Resources</h2>

//             <nav aria-label="Resources">
//               <Link href="/resources">Policies</Link>
//               <Link href="/resources">Guidelines</Link>
//               <Link href="/resources">Forms &amp; Templates</Link>
//               <Link href="/resources">Publications</Link>
//               <Link href="/resources">Research</Link>
//               <Link href="/resources">Annual Reports</Link>
//             </nav>
//           </section>

//           <section className="site-footer-column site-footer-connect">
//             <h2>Connect With Us</h2>

//             <a
//               className="site-footer-contact"
//               href="tel:0800111901"
//             >
//               <span className="site-footer-contact-icon">
//                 <PhoneIcon />
//               </span>

//               <span>0800 111 901</span>
//             </a>

//             <a
//               className="site-footer-contact"
//               href="mailto:customercare@serviceseta.org.za"
//             >
//               <span className="site-footer-contact-icon">
//                 <MailIcon />
//               </span>

//               <span>customercare@serviceseta.org.za</span>
//             </a>

//             <Link className="site-footer-contact" href="/contact">
//               <span className="site-footer-contact-icon">
//                 <LocationIcon />
//               </span>

//               <span>
//                 15 Sherborne Road
//                 <br />
//                 Parktown, Gauteng
//               </span>
//             </Link>

//             <div
//               className="site-footer-socials"
//               aria-label="Services SETA social media"
//             >
//               {socialLinks.map((socialLink) => (
//                 <a
//                   href={socialLink.href}
//                   key={socialLink.label}
//                   aria-label={socialLink.label}
//                   title={socialLink.label}
//                 >
//                   {socialLink.shortLabel}
//                 </a>
//               ))}
//             </div>
//           </section>

//           <section className="site-footer-column site-footer-newsletter">
//             <h2>Stay Updated</h2>

//             <p>
//               Subscribe for updates on opportunities, programmes and
//               important notices.
//             </p>

//             <form
//               className="site-footer-subscribe"
//               action="/contact"
//               method="get"
//             >
//               <label className="sr-only" htmlFor="footer-email">
//                 Enter your email address
//               </label>

//               <input
//                 id="footer-email"
//                 name="email"
//                 type="email"
//                 placeholder="Enter your email"
//                 autoComplete="email"
//                 required
//               />

//               <button type="submit">Subscribe</button>
//             </form>
//           </section>
//         </div>

//         <div className="container site-footer-bottom">
//           <span>© 2026 Services SETA. All rights reserved.</span>

//           <nav aria-label="Legal and accessibility links">
//             <Link href="/resources">POPIA</Link>
//             <Link href="/resources">Privacy Notice</Link>
//             <Link href="/resources">PAIA</Link>
//             <Link href="/resources">Terms &amp; Conditions</Link>
//             <Link href="/support">Accessibility</Link>
//           </nav>
//         </div>
//       </div>
//     </footer>
//   );
// }






import Image from "next/image";
import Link from "next/link";

type FooterProps = {
  homePage?: boolean;
};

type SocialPlatform =
  | "instagram"
  | "youtube"
  | "linkedin"
  | "x"
  | "facebook";

type SocialLink = {
  label: string;
  platform: SocialPlatform;
  href: string;
};

const socialLinks: readonly SocialLink[] = [
  {
    label: "Instagram",
    platform: "instagram",
    href: "https://www.instagram.com/servicesseta_/",
  },
  {
    label: "YouTube",
    platform: "youtube",
    href: "https://www.youtube.com/channel/UCIQ6dfIcFXBNtUUqiKdM85g",
  },
  {
    label: "LinkedIn",
    platform: "linkedin",
    href: "https://za.linkedin.com/company/services-seta",
  },
  {
    label: "X",
    platform: "x",
    href: "https://x.com/serviceseta?lang=en",
  },
  {
    label: "Facebook",
    platform: "facebook",
    href: "https://www.facebook.com/ServicesSETA?mibextid=LQQJ4d",
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

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10h12" />
      <path d="m11.5 5.5 4.5 4.5-4.5 4.5" />
    </svg>
  );
}

function SocialIcon({ platform }: { platform: SocialPlatform }) {
  if (platform === "instagram") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
        <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
        <circle cx="12" cy="12" r="4.1" />
        <circle cx="17.5" cy="6.7" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (platform === "youtube") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
        <path d="M21 8.1a3 3 0 0 0-2.1-2.2C17 5.4 12 5.4 12 5.4s-5 0-6.9.5A3 3 0 0 0 3 8.1 31 31 0 0 0 2.6 12 31 31 0 0 0 3 15.9a3 3 0 0 0 2.1 2.2c1.9.5 6.9.5 6.9.5s5 0 6.9-.5a3 3 0 0 0 2.1-2.2 31 31 0 0 0 .4-3.9 31 31 0 0 0-.4-3.9Z" />
        <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (platform === "linkedin") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
        <circle cx="6.2" cy="6.3" r="1.5" fill="currentColor" stroke="none" />
        <path d="M4.8 9.5v9.7M10 19.2V9.5m0 4.1c.9-2.3 5.9-3.3 5.9 1.7v3.9m0-3.9v-1.6" />
      </svg>
    );
  }

  if (platform === "x") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
        <path d="M5 4.5 19 19.5M19 4.5 5 19.5" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M13.8 20v-7h2.5l.4-3h-2.9V8.1c0-.9.3-1.5 1.6-1.5H17V4a22 22 0 0 0-2.4-.1c-2.4 0-4.1 1.5-4.1 4.2V10H8v3h2.5v7h3.3Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer({ homePage = false }: FooterProps) {
  const logoHref = homePage ? "#content" : "/";

  return (
    <footer className="site-footer">
      <div className="site-footer-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 92" preserveAspectRatio="none">
          <path d="M0 56C210 76 404 55 610 24C848-12 1122 0 1440 59V92H0V56Z" />
        </svg>
      </div>

      <div className="site-footer-body">
        <div className="container site-footer-grid">
          <section className="site-footer-intro">
            <Link
              className="site-footer-logo"
              href={logoHref}
              aria-label="Services SETA home"
            >
              <span className="site-footer-logo-mark">
                <Image
                  src="/logo.png"
                  alt=""
                  width={74}
                  height={74}
                  aria-hidden="true"
                />
              </span>
              <span>SERVICES SETA</span>
            </Link>

            <p className="site-footer-summary">
              Connecting learners, employers and skills development providers
              with trusted information, programmes and opportunities.
            </p>

            <Link className="site-footer-about-link" href="/about">
              About Services SETA
              <ArrowIcon />
            </Link>
          </section>

          <section className="site-footer-column site-footer-navigation">
            <h2>Explore</h2>

            <div className="site-footer-link-groups">
              <nav aria-label="Explore Services SETA">
                <Link href="/industries">Industries We Serve</Link>
                <Link href="/learning-programmes">Learning Programmes</Link>
                <Link href="/funding">Funding</Link>
                <Link href="/accreditation">Accreditation</Link>
                <Link href="/qualifications">Qualifications</Link>
              </nav>

              <nav aria-label="Services SETA resources and support">
                <Link href="/career-guidance">Career Guidance</Link>
                <Link href="/stakeholder-notices">Newsroom</Link>
                <Link href="/resources">Resources</Link>
                <Link href="/industries/sic-code-finder">SIC Code Finder</Link>
                <Link href="/support">Get Help</Link>
              </nav>
            </div>
          </section>

          <section className="site-footer-column site-footer-connect">
            <h2>Contact &amp; Connect</h2>

            <a className="site-footer-contact" href="tel:0800111901">
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
                  aria-label={`Services SETA on ${socialLink.label}`}
                  title={socialLink.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon platform={socialLink.platform} />
                </a>
              ))}
            </div>
          </section>
        </div>

        <div className="container site-footer-update-row">
          <div>
            <h2>Stay Updated</h2>
            <p>
              Receive updates on opportunities, programmes and important
              notices.
            </p>
          </div>

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
              placeholder="Enter your email address"
              autoComplete="email"
              required
            />

            <button type="submit">Subscribe</button>
          </form>
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
