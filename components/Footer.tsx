import Link from "next/link";

type FooterProps = {
  homePage?: boolean;
};

export default function Footer({ homePage = false }: FooterProps) {
  const exploreHref = homePage ? "#explore" : "/stakeholders";
  const tasksHref = homePage ? "#tasks" : "/i-want-to";
  const noticesHref = homePage ? "#notices" : "/stakeholder-notices";
  const supportHref = homePage ? "#support" : "/support";
  const contactHref = homePage ? "#support" : "/contact";

  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">SERVICES SETA</div>
          <p>
            A trusted digital gateway to skills development information,
            programmes, services and opportunities.
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <Link href={exploreHref}>Stakeholder pathways</Link>
          <Link href={tasksHref}>Popular tasks</Link>
          <Link href={noticesHref}>Current notices</Link>
        </div>

        <div>
          <h3>Support</h3>
          <Link href={supportHref}>Customer care</Link>
          <Link href={contactHref}>Lodge an enquiry</Link>
          <Link href={contactHref}>Provincial offices</Link>
        </div>

        <div>
          <h3>Contact</h3>
          <p>
            15 Sherborne Road
            <br />
            Parktown, Gauteng
          </p>
          <a href="mailto:customercare@serviceseta.org.za">
            customercare@serviceseta.org.za
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Services SETA</span>
        <span>Accessibility · Privacy · PAIA · Terms</span>
      </div>
    </footer>
  );
}
