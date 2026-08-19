export type ResourceCategory =
  | "Guidelines"
  | "Forms and Templates"
  | "Policies"
  | "Reports";

export type ResourceFileType = "PDF" | "DOCX" | "XLSX";

export type Resource = {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  audience: string;
  fileType: ResourceFileType;
  fileSize?: string;
  publishedDate: string;
  downloadUrl?: string;
  available: boolean;
};

export const resources: Resource[] = [
  {
    id: "wsp-atr-submission-guideline",
    title: "WSP/ATR Submission Guideline",
    description:
      "Guidance for employers and Skills Development Facilitators preparing WSP/ATR submissions.",
    category: "Guidelines",
    audience: "Employers and SDFs",
    fileType: "PDF",
    fileSize: "47 KB",
    publishedDate: "18 August 2026",
    downloadUrl: "/resources/wsp-atr-submission-guideline.pdf",
    available: true,
  },
  {
    id: "mandatory-grant-application-form",
    title: "Mandatory Grant Application Form",
    description:
      "An application template for employers submitting mandatory grant information.",
    category: "Forms and Templates",
    audience: "Employers and SDFs",
    fileType: "PDF",
    publishedDate: "Coming soon",
    available: false,
  },
  {
    id: "discretionary-grant-policy",
    title: "Discretionary Grant Policy",
    description:
      "Policy information relating to discretionary grant applications and funding requirements.",
    category: "Policies",
    audience: "Employers and Training Providers",
    fileType: "PDF",
    publishedDate: "Coming soon",
    available: false,
  },
  {
    id: "learner-registration-template",
    title: "Learner Registration Template",
    description:
      "A template for capturing learner registration and programme information.",
    category: "Forms and Templates",
    audience: "Skills Development Providers",
    fileType: "XLSX",
    publishedDate: "Coming soon",
    available: false,
  },
  {
    id: "annual-performance-report",
    title: "Annual Performance Report",
    description:
      "A summary of organisational performance, programme delivery and strategic outcomes.",
    category: "Reports",
    audience: "Public and Stakeholders",
    fileType: "PDF",
    publishedDate: "Coming soon",
    available: false,
  },
  {
    id: "accreditation-application-guide",
    title: "Accreditation Application Guide",
    description:
      "Guidance for Skills Development Providers applying for accreditation.",
    category: "Guidelines",
    audience: "Skills Development Providers",
    fileType: "PDF",
    publishedDate: "Coming soon",
    available: false,
  },
];