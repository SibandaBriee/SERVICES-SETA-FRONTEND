export type ChatbotOption = {
  label: string;
  keywords: string[];
  response: string;
  href: string;
  linkLabel: string;
};

export const chatbotOptions: ChatbotOption[] = [
  {
    label: "Find funding",
    keywords: ["funding", "grant", "grants", "money", "application"],
    response:
      "I can guide you through Mandatory Grants, Discretionary Grants, eligibility requirements and current funding opportunities.",
    href: "/funding",
    linkLabel: "Explore funding",
  },
  {
    label: "Find a programme",
    keywords: [
      "programme",
      "programmes",
      "learnership",
      "internship",
      "bursary",
      "training",
    ],
    response:
      "Explore learnerships, internships, bursaries, skills programmes and workplace-based learning opportunities.",
    href: "/learning-programmes",
    linkLabel: "View learning programmes",
  },
  {
    label: "Accreditation help",
    keywords: [
      "accreditation",
      "accredited",
      "provider",
      "training provider",
    ],
    response:
      "Find accreditation requirements, application guidance, compliance information and provider-support resources.",
    href: "/accreditation",
    linkLabel: "View accreditation guidance",
  },
  {
    label: "Find a qualification",
    keywords: [
      "qualification",
      "qualifications",
      "career",
      "occupation",
    ],
    response:
      "Search qualifications and understand how they connect to industries, careers and learning programmes.",
    href: "/qualifications",
    linkLabel: "Explore qualifications",
  },
  {
    label: "Submit WSP/ATR",
    keywords: ["wsp", "atr", "mandatory grant", "submission", "sdf"],
    response:
      "Before submitting WSP/ATR information, review eligibility, required information, deadlines and the submission process.",
    href: "/funding/mandatory-grants",
    linkLabel: "View WSP/ATR guidance",
  },
  {
    label: "Get programme support",
    keywords: [
      "help",
      "support",
      "stipend",
      "attendance",
      "placement",
      "problem",
      "complaint",
    ],
    response:
      "Get help with stipends, attendance, workplace placement, programme changes, assessment or completion.",
    href: "/support",
    linkLabel: "Get guided support",
  },
];