
export type QuickTask = {
  icon: string;
  title: string;
  href: string;
};

export type NewsItem = {
  image: string;
  imageAlt: string;
  date: string;
  day: string;
  month: string;
  category: string;
  title: string;
  summary: string;
  href: string;
};

export type Opportunity = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

export type NoticeTone = "orange" | "amber" | "green";

export type Notice = {
  type: string;
  tone: NoticeTone;
  title: string;
  close: string;
  href: string;
};

export type ImportantDate = {
  day: string;
  month: string;
  title: string;
  description: string;
};
export type Pathway = {
  icon: string;
  title: string;
  text: string;
  href: string;
  image: string;
};

export const popularSearches = [
  "WSP/ATR",
  "Learnerships",
  "Funding opportunities",
  "Internships",
  "SIC codes",
];

export const opportunities: Opportunity[] = [
  {
    icon: "▰",
    title: "Open funding opportunities",
    description: "View current funding calls",
    href: "#notices",
  },
  {
    icon: "▧",
    title: "Current tenders",
    description: "View procurement opportunities",
    href: "#notices",
  },
  {
    icon: "♙",
    title: "Learnerships & internships",
    description: "View learner opportunities",
    href: "#notices",
  },
];

export const pathways: Pathway[] = [
  {
    icon: "◎",
    title: "Learner",
    text: "Explore careers, find programmes and get support throughout your journey.",
    href: "/stakeholders/learners",
    image: "/pathways/learner.jpg",
  },
  {
    icon: "▣",
    title: "Employer / SDF",
    text: "Meet your obligations, access funding and develop your workforce.",
    href: "/stakeholders/employers-sdfs",
    image: "/pathways/employer-sdf.jpg",
  },
  {
    icon: "▥",
    title: "Skills Development Provider",
    text: "Accreditation, programme delivery, reporting and support.",
    href: "/stakeholders/skills-development-providers",
    image: "/pathways/provider.jpg",
  },
  {
    icon: "◇",
    title: "Government / Public Entity",
    text: "Partnerships, projects and sector development.",
    href: "/stakeholders/government-public-entities",
    image: "/pathways/government.jpg",
  },
];
export const quickTasks: QuickTask[] = [
  {
    icon: "⌖",
    title: "Find my sector / SIC code",
    href: "/industries/sic-code-finder",
  },
  {
    icon: "▤",
    title: "Submit WSP/ATR",
    href: "/funding/mandatory-grants",
  },
  { icon: "▰", title: "Find funding", href: "/funding" },
  {
    icon: "◫",
    title: "Find a learning programme",
    href: "/learning-programmes",
  },
  {
    icon: "⌕",
    title: "Find a qualification",
    href: "/qualifications",
  },
  {
    icon: "♙",
    title: "Find an accredited provider",
    href: "/accreditation",
  },
  { icon: "▣", title: "Access a system", href: "/systems" },
  {
    icon: "▧",
    title: "Find a form or guideline",
    href: "/resources",
  },
  {
    icon: "◉",
    title: "Get help with a programme",
    href: "/support",
  },
  { icon: "○", title: "Lodge an enquiry", href: "/contact" },
];

export const notices: Notice[] = [
  {
    type: "Funding notice",
    tone: "orange",
    title: "Discretionary Grants Funding Window 2026/27",
    close: "Closes 30 September 2026",
    href: "#",
  },
  {
    type: "Tender",
    tone: "amber",
    title: "Appointment of a digital learning service provider",
    close: "Closes 18 September 2026",
    href: "#",
  },
  {
    type: "Vacancy",
    tone: "green",
    title: "Learning Programme Coordinator",
    close: "Closes 25 September 2026",
    href: "#",
  },
];

export const importantDates: ImportantDate[] = [
  {
    day: "30",
    month: "SEP",
    title: "Funding window closes",
    description: "View details and requirements",
  },
  {
    day: "07",
    month: "OCT",
    title: "WSP/ATR submission clinic",
    description: "View details and requirements",
  },
  {
    day: "28",
    month: "OCT",
    title: "Mandatory Grant claims deadline",
    description: "View details and requirements",
  },
];

export const journeySteps = [
  "Find",
  "Understand",
  "Act",
  "Participate",
  "Get support",
  "Complete",
  "Next step",
];


export const newsItems: NewsItem[] = [
  {
    image: "/news/power-of-x2.png",
    imageAlt: "The Power of X squared internship programme",
    date: "2026-08-12",
    day: "12",
    month: "Aug",
    category: "Announcement",
    title: "The Power of X² Internship Programme",
    summary:
      "Connecting graduates to meaningful workplace experience and career development opportunities.",
    href: "/stakeholder-notices",
  },
  {
    image: "/news/audit-risk.png",
    imageAlt: "Services SETA Audit and Risk Committee invitation",
    date: "2026-08-10",
    day: "10",
    month: "Aug",
    category: "Governance",
    title: "Invitation to serve on the Audit and Risk Committee",
    summary:
      "Read the invitation, eligibility requirements and application information.",
    href: "/stakeholder-notices",
  },
  {
    image: "/news/pulse-july-2026.png",
    imageAlt: "Services SETA Pulse newsletter July 2026",
    date: "2026-07-31",
    day: "31",
    month: "Jul",
    category: "Newsletter",
    title: "Services SETA Pulse — July 2026 Edition",
    summary:
      "Read the latest Services SETA news, programme updates and sector developments.",
    href: "/stakeholder-notices",
  },
];