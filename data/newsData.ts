export type NewsCategory =
  | "Announcement"
  | "Governance"
  | "Newsletter"
  | "Notice"
  | "Opportunity";

export type NewsSection = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type NewsArticle = {
  slug: string;
  category: NewsCategory;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  imageAlt: string;
  homeImage?: string;
  tags: string[];
  sections: NewsSection[];
  featuredOnHome?: boolean;
  actionLabel?: string;
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "power-of-x2-internship-programme",
    category: "Announcement",
    title: "The Power of X² Internship Programme",
    excerpt:
      "Connecting graduates to meaningful workplace experience and career development opportunities.",
    date: "2026-08-12",
    image: "/newsroom/home-internship.png",
    homeImage: "/newsroom/home-internship.png",
    imageAlt: "Power of X squared internship programme announcement artwork",
    tags: ["Internships", "Learner Stories", "Youth Empowerment"],
    featuredOnHome: true,
    actionLabel: "Read more",
    sections: [
      {
        paragraphs: [
          "The Power of X² Internship Programme connects graduates to meaningful workplace experience and career development opportunities.",
          "The supplied design provides only the programme summary. Add the approved eligibility criteria, programme duration, placement information and application instructions here before the notice is published.",
        ],
      },
    ],
  },
  {
    slug: "invitation-audit-and-risk-committee",
    category: "Governance",
    title: "Invitation to serve on the Audit and Risk Committee",
    excerpt:
      "Read the invitation, eligibility requirements and application information.",
    date: "2026-08-10",
    image: "/newsroom/home-audit-risk.png",
    homeImage: "/newsroom/home-audit-risk.png",
    imageAlt: "Audit and risk committee governance illustration",
    tags: ["Governance", "Audit", "Risk Management"],
    featuredOnHome: true,
    actionLabel: "Read more",
    sections: [
      {
        paragraphs: [
          "Services SETA invites interested candidates to review the opportunity to serve on the Audit and Risk Committee.",
          "The supplied design confirms that the full notice includes eligibility requirements and application information. Insert the approved committee requirements and submission details here before publication.",
        ],
      },
    ],
  },
  {
    slug: "services-seta-pulse-july-2026",
    category: "Newsletter",
    title: "Services SETA Pulse — July 2026 Edition",
    excerpt:
      "Read the latest Services SETA news, programme updates and sector developments.",
    date: "2026-07-31",
    image: "/newsroom/home-newsletter-july.png",
    homeImage: "/newsroom/home-newsletter-july.png",
    imageAlt: "Services SETA Pulse July 2026 newsletter",
    tags: ["Newsletter", "Skills Development", "Sector Insights"],
    featuredOnHome: true,
    actionLabel: "Read & download",
    sections: [
      {
        paragraphs: [
          "The July 2026 edition of the Services SETA Pulse is available for stakeholders to read.",
          "The edition brings together Services SETA news, programme updates and sector developments in one publication.",
        ],
      },
    ],
  },
  {
    slug: "services-seta-pulse-june-2026",
    category: "Newsletter",
    title: "June edition of Services SETA Pulse is now available",
    excerpt:
      "The June 2026 edition of the Services SETA Pulse Newsletter is now available to read and download.",
    date: "2026-06-30",
    image: "/newsroom/newsletter-june.png",
    imageAlt: "Services SETA Pulse Newsletter June 2026 cover and stationery",
    tags: ["Newsletter", "Skills Development", "Youth Empowerment"],
    actionLabel: "Read & download",
    sections: [
      {
        paragraphs: [
          "The June 2026 edition of the Services SETA Pulse Newsletter is now available to read and download.",
          "This Youth Month edition highlights the Services SETA’s work in advancing skills development, occupational qualifications, workplace exposure, youth empowerment and sector partnerships.",
          "The edition includes updates on the transition from selected pre-2009 qualifications to occupational qualifications, Youth Day engagements, youth participation in the real estate sector, facilities management skills development, emerging entrepreneur stories and Services SETA-supported learner impact.",
          "Read and download the June 2026 edition and submit story leads, questions or feedback to help shape future editions of Services SETA Pulse.",
        ],
      },
    ],
  },
  {
    slug: "operational-update-30-june-2026",
    category: "Notice",
    title: "Services SETA Operational Update: Tuesday, 30 June 2026",
    excerpt:
      "Services SETA wishes to inform stakeholders that employees will work remotely on Tuesday, 30 June 2026, where operationally possible.",
    date: "2026-06-30",
    image: "/newsroom/operational-update.png",
    imageAlt: "Important operational notice with a megaphone",
    tags: ["Announcement", "Operational Update", "Stakeholders"],
    actionLabel: "Read notice",
    sections: [
      {
        paragraphs: [
          "Services SETA wishes to inform stakeholders that employees will work remotely on Tuesday, 30 June 2026, where operationally possible.",
          "Services will continue as normal, and teams will remain available during business hours through the approved communication channels.",
        ],
      },
    ],
  },
  {
    slug: "withdrawal-eoi-impact-evaluation-research",
    category: "Notice",
    title:
      "Withdrawal of EOI-25/26-05 and Re-advertisement: Impact Evaluation Research EOI",
    excerpt:
      "Services SETA withdraws the previously advertised Expression of Interest and invites suitably experienced applicants to review the re-advertisement.",
    date: "2026-06-30",
    image: "/newsroom/newsletter-june.png",
    imageAlt: "Services SETA publication artwork",
    tags: ["EOI", "Research", "Impact Evaluation"],
    actionLabel: "Read notice",
    sections: [
      {
        paragraphs: [
          "The Services Sector Education and Training Authority withdraws the previously advertised Expression of Interest relating to the DG Grant Impact Evaluation.",
          "The source design indicates that a re-advertisement follows. Insert the approved reference number, scope, eligibility requirements and submission details from the formal notice before publication.",
        ],
      },
    ],
  },
];

export const homepageNews = newsArticles.filter(
  (article) => article.featuredOnHome,
);

export const newsroomCategories: Array<{
  label: string;
  value: "All" | NewsCategory;
}> = [
  { label: "All news", value: "All" },
  { label: "Announcements", value: "Announcement" },
  { label: "Governance", value: "Governance" },
  { label: "Newsletters", value: "Newsletter" },
  { label: "Notices & updates", value: "Notice" },
  { label: "Opportunities", value: "Opportunity" },
];

export const newsroomArchives = [
  { label: "August 2026", value: "2026-08" },
  { label: "July 2026", value: "2026-07" },
  { label: "June 2026", value: "2026-06" },
  { label: "May 2026", value: "2026-05" },
  { label: "April 2026", value: "2026-04" },
  { label: "March 2026", value: "2026-03" },
  { label: "February 2026", value: "2026-02" },
  { label: "January 2026", value: "2026-01" },
  { label: "December 2025", value: "2025-12" },
];

export const newsroomPopularTags = [
  "Skills Development",
  "Newsletter",
  "Internships",
  "Governance",
  "Youth Empowerment",
  "Sector Insights",
  "Risk Management",
  "Research",
  "Operational Update",
];

export function getNewsArticle(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}

export function getPreviousNewsArticle(slug: string) {
  const index = newsArticles.findIndex((article) => article.slug === slug);

  if (index <= 0) {
    return undefined;
  }

  return newsArticles[index - 1];
}

export function formatNewsDate(value: string) {
  return new Intl.DateTimeFormat("en-ZA", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(`${value}T12:00:00`));
}
