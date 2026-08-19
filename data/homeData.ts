export type Pathway = {
  icon: string;
  title: string;
  text: string;
  href: string;
};

export type QuickTask = {
  icon: string;
  title: string;
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

export type ImportantDateStatus = "urgent" | "critical" | "upcoming";

export type ImportantDate = {
  day: string;
  month: string;
  title: string;
  description: string;
  status: string;
  tone: ImportantDateStatus;
  href: string;
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
  },
  {
    icon: "▣",
    title: "Employer / SDF",
    text: "Meet your obligations, access funding and develop your workforce.",
    href: "/stakeholders/employers-sdfs",
  },
  {
    icon: "▥",
    title: "Skills Development Provider",
    text: "Accreditation, programme delivery, reporting and support.",
    href: "/stakeholders/skills-development-providers",
  },
  {
    icon: "◇",
    title: "Government / Public Entity",
    text: "Partnerships, projects and sector development.",
    href: "/stakeholders/government-public-entities",
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
    title: "Discretionary Grants Funding Window closes",
    description:
      "Submit all required application information before the published closing time.",
    status: "Closing soon",
    tone: "urgent",
    href: "/funding",
  },
  {
    day: "07",
    month: "OCT",
    title: "WSP/ATR submission clinic",
    description:
      "Online guidance session for employers and Skills Development Facilitators.",
    status: "Upcoming",
    tone: "upcoming",
    href: "/funding/mandatory-grants",
  },
  {
    day: "28",
    month: "OCT",
    title: "Mandatory Grant claims deadline",
    description:
      "Final date for qualifying employers to complete the current claims process.",
    status: "Critical",
    tone: "critical",
    href: "/funding/mandatory-grants",
  },
  {
    day: "15",
    month: "NOV",
    title: "Provider accreditation information session",
    description:
      "Information session covering requirements, applications and compliance.",
    status: "Upcoming",
    tone: "upcoming",
    href: "/accreditation",
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
