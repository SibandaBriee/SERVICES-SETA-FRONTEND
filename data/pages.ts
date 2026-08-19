export type PageAction = {
  label: string;
  href: string;
};

export type PageCard = {
  title: string;
  text: string;
  meta?: string;
  href?: string;
};

export type PageData = {
  eyebrow: string;
  title: string;
  intro: string;
  actions?: PageAction[];
  cards: PageCard[];
  help?: string;
};

export const pages: Record<string, PageData> = {
  "stakeholders": {
    "eyebrow": "Choose your pathway",
    "title": "How can we support you?",
    "intro": "Start with your role and follow a curated pathway to the information, actions and support you need.",
    "cards": [
      {
        "title": "Learners",
        "text": "Careers, qualifications, programmes, opportunities and participant support.",
        "href": "/stakeholders/learners"
      },
      {
        "title": "Employers and SDFs",
        "text": "Sector guidance, WSP/ATR, grants, funding and implementation.",
        "href": "/stakeholders/employers-sdfs"
      },
      {
        "title": "Skills Development Providers",
        "text": "Accreditation, programme delivery, reporting and completion.",
        "href": "/stakeholders/skills-development-providers"
      },
      {
        "title": "Government and public entities",
        "text": "Partnerships, projects, reporting and sector development.",
        "href": "/stakeholders/government-public-entities"
      }
    ]
  },
  "stakeholders/learners": {
    "eyebrow": "For learners",
    "title": "Build your skills. Shape your future.",
    "intro": "Explore careers, understand learning programmes, find opportunities and get support throughout your programme journey.",
    "actions": [
      {
        "label": "Explore careers",
        "href": "/career-guidance"
      },
      {
        "label": "Find a programme",
        "href": "/learning-programmes"
      },
      {
        "label": "View opportunities",
        "href": "/stakeholder-notices"
      }
    ],
    "cards": [
      {
        "title": "Explore",
        "text": "Discover service-sector careers and the pathways that lead to them."
      },
      {
        "title": "Understand",
        "text": "Compare programmes, requirements, duration and responsibilities."
      },
      {
        "title": "Participate",
        "text": "Guidance on attendance, stipends, workplace learning and assessments."
      },
      {
        "title": "Complete and progress",
        "text": "Understand certification, completion and possible next steps."
      }
    ],
    "help": "Already in a programme? Get guidance on stipends, attendance, placement or completion."
  },
  "stakeholders/employers-sdfs": {
    "eyebrow": "For employers and SDFs",
    "title": "Develop skills and meet your obligations",
    "intro": "Find your sector, understand WSP/ATR requirements, explore funding and manage active programmes.",
    "actions": [
      {
        "label": "Find my SIC code",
        "href": "/industries/sic-code-finder"
      },
      {
        "label": "Submit WSP/ATR",
        "href": "/funding/mandatory-grants"
      },
      {
        "label": "Find funding",
        "href": "/funding"
      }
    ],
    "cards": [
      {
        "title": "Identify",
        "text": "Confirm whether your organisation falls within the Services SETA scope."
      },
      {
        "title": "Comply",
        "text": "Understand levies, WSP/ATR and Mandatory Grant requirements."
      },
      {
        "title": "Apply",
        "text": "Find open funding windows, eligibility and application guidance."
      },
      {
        "title": "Implement and report",
        "text": "Access guidance for learner administration, evidence, claims and close-out."
      }
    ],
    "help": "Have an active funded project? Access implementation and reporting support."
  },
  "stakeholders/skills-development-providers": {
    "eyebrow": "For skills development providers",
    "title": "Deliver quality programmes with confidence",
    "intro": "Understand accreditation, find opportunities, manage learners and complete your reporting responsibilities.",
    "actions": [
      {
        "label": "Accreditation guidance",
        "href": "/accreditation"
      },
      {
        "label": "Find qualifications",
        "href": "/qualifications"
      },
      {
        "label": "Provider support",
        "href": "/support"
      }
    ],
    "cards": [
      {
        "title": "Become accredited",
        "text": "Requirements, process, resources and ongoing compliance."
      },
      {
        "title": "Find opportunities",
        "text": "Current funding, partnership and delivery opportunities."
      },
      {
        "title": "Deliver programmes",
        "text": "Learner administration, training, assessment and workplace interfaces."
      },
      {
        "title": "Report and complete",
        "text": "Evidence, monitoring, certification and close-out guidance."
      }
    ],
    "help": "Already delivering a programme? Get administration, reporting and completion support."
  },
  "stakeholders/government-public-entities": {
    "eyebrow": "For government and public entities",
    "title": "Partner for sector impact",
    "intro": "Explore Services SETA programmes, partnerships, funding opportunities and implementation support.",
    "cards": [
      {
        "title": "Understand our mandate",
        "text": "Services SETA’s role, priorities and services-sector scope."
      },
      {
        "title": "Explore partnerships",
        "text": "Collaboration, special projects and sector-development opportunities."
      },
      {
        "title": "Implement",
        "text": "Project requirements, reporting, governance and evidence."
      },
      {
        "title": "Get support",
        "text": "Find the right programme, partnership or project support channel."
      }
    ]
  },
  "stakeholder-notices": {
    "eyebrow": "Stay informed",
    "title": "Stakeholder notices",
    "intro": "Find current and historical funding notices, tenders, vacancies, announcements and events.",
    "cards": [
      {
        "title": "Discretionary Grants Funding Window 2026/27",
        "text": "Applications for qualifying employers and providers.",
        "meta": "OPEN · Closes 30 September 2026"
      },
      {
        "title": "Digital learning services tender",
        "text": "Appointment of a service provider for digital learning delivery.",
        "meta": "CLOSING SOON · 18 September 2026"
      },
      {
        "title": "Learning Programme Coordinator",
        "text": "Employment opportunity within programme delivery.",
        "meta": "OPEN · Closes 25 September 2026"
      },
      {
        "title": "Stakeholder information session",
        "text": "Online briefing on upcoming programme opportunities.",
        "meta": "UPCOMING · 7 October 2026"
      }
    ]
  },
  "industries": {
    "eyebrow": "Industries we serve",
    "title": "Find where your organisation fits",
    "intro": "Explore the services sector and connect industries with SIC codes, qualifications, careers and learning programmes.",
    "actions": [
      {
        "label": "Find my sector / SIC code",
        "href": "/industries/sic-code-finder"
      }
    ],
    "cards": [
      {
        "title": "Business services",
        "text": "Professional, administrative and support service activities."
      },
      {
        "title": "Real estate and property",
        "text": "Property services, valuation, management and related activities."
      },
      {
        "title": "Personal and household services",
        "text": "Community, personal care and consumer-focused services."
      },
      {
        "title": "Labour and collective services",
        "text": "Representative, organisational and employment-related services."
      }
    ]
  },
  "industries/sic-code-finder": {
    "eyebrow": "Self-service tool",
    "title": "Find your sector and SIC code",
    "intro": "Search sample industry data to understand where your organisation may fit. Final classification must be confirmed through the official process.",
    "cards": [
      {
        "title": "Business consultancy activities",
        "text": "Management consultancy and related business advisory services.",
        "meta": "Sample SIC 88140"
      },
      {
        "title": "Employment placement services",
        "text": "Recruitment, placement and personnel services.",
        "meta": "Sample SIC 88910"
      },
      {
        "title": "Hairdressing and beauty services",
        "text": "Personal care, hair and beauty service activities.",
        "meta": "Sample SIC 99020"
      }
    ]
  },
  "learning-programmes": {
    "eyebrow": "Learning programmes",
    "title": "Find the right learning pathway",
    "intro": "Understand programme types, who they are for, how they work and what to do next.",
    "cards": [
      {
        "title": "Learnerships",
        "text": "Structured learning combining theory with practical workplace experience."
      },
      {
        "title": "Internships",
        "text": "Workplace experience that supports graduates and young people entering work."
      },
      {
        "title": "Workplace-based learning",
        "text": "Learning and experience delivered within an approved workplace."
      },
      {
        "title": "Skills programmes",
        "text": "Focused occupational learning that develops specific competencies."
      },
      {
        "title": "Bursaries",
        "text": "Financial support for approved education and training routes."
      },
      {
        "title": "Artisan development",
        "text": "Occupational pathways supporting recognised trades and artisan competence."
      }
    ]
  },
  "funding": {
    "eyebrow": "Funding",
    "title": "Understand funding and find opportunities",
    "intro": "Learn how Services SETA funding works, check eligibility and find current funding windows.",
    "actions": [
      {
        "label": "View open funding notices",
        "href": "/stakeholder-notices"
      },
      {
        "label": "Mandatory Grants",
        "href": "/funding/mandatory-grants"
      }
    ],
    "cards": [
      {
        "title": "Mandatory Grants",
        "text": "WSP/ATR requirements, eligibility, key dates and submission guidance."
      },
      {
        "title": "Discretionary Grants",
        "text": "Funding priorities, eligibility, application steps and open windows."
      },
      {
        "title": "Special projects",
        "text": "Strategic initiatives and partnership-based funding opportunities."
      },
      {
        "title": "Active project support",
        "text": "Implementation, reporting, evidence, claims and close-out guidance."
      }
    ]
  },
  "funding/mandatory-grants": {
    "eyebrow": "Mandatory Grants",
    "title": "Prepare and submit your WSP/ATR",
    "intro": "Understand the process, requirements, documents and key dates before accessing the submission system.",
    "cards": [
      {
        "title": "1. Confirm eligibility",
        "text": "Check registration, levy and Services SETA scope requirements."
      },
      {
        "title": "2. Prepare information",
        "text": "Gather workforce, training and authorisation information."
      },
      {
        "title": "3. Review requirements",
        "text": "Validate the submission against current rules and deadlines."
      },
      {
        "title": "4. Access the system",
        "text": "The official external system link will be connected when approved."
      }
    ]
  },
  "accreditation": {
    "eyebrow": "Accreditation",
    "title": "Become and remain accredited",
    "intro": "Find clear requirements, application guidance, compliance information and provider support.",
    "cards": [
      {
        "title": "Understand accreditation",
        "text": "What accreditation means and when it applies."
      },
      {
        "title": "Check requirements",
        "text": "Organisation, programme, staff, facility and quality requirements."
      },
      {
        "title": "Application process",
        "text": "A guided preparation and application journey."
      },
      {
        "title": "Compliance and monitoring",
        "text": "Maintain standards, records and ongoing compliance."
      },
      {
        "title": "Find an accredited provider",
        "text": "Search the sample provider directory."
      },
      {
        "title": "Resources",
        "text": "Forms, policies, guidelines and supporting information."
      }
    ]
  },
  "qualifications": {
    "eyebrow": "Qualifications",
    "title": "Explore qualifications and learning pathways",
    "intro": "Search qualifications by keyword, industry, level or programme relationship.",
    "cards": [
      {
        "title": "Occupational qualifications",
        "text": "Current occupational qualifications connected to services-sector careers."
      },
      {
        "title": "Registered and legacy qualifications",
        "text": "Relevant qualifications and transition information."
      },
      {
        "title": "Qualifications by industry",
        "text": "Browse qualifications through a Services SETA industry pathway."
      },
      {
        "title": "Qualification search",
        "text": "Use filters to find qualification details and related programmes."
      }
    ]
  },
  "career-guidance": {
    "eyebrow": "Career guidance",
    "title": "Explore careers in the services sector",
    "intro": "Discover occupations, understand career pathways and connect them to qualifications, programmes and opportunities.",
    "cards": [
      {
        "title": "Business analyst",
        "text": "Research, analyse and improve organisational processes."
      },
      {
        "title": "Property practitioner",
        "text": "Support property transactions, clients and regulatory processes."
      },
      {
        "title": "Management consultant",
        "text": "Help organisations solve problems and improve performance."
      },
      {
        "title": "Beauty therapist",
        "text": "Provide professional beauty and personal-care services."
      }
    ]
  },
  "resources": {
    "eyebrow": "Resource library",
    "title": "Find a form, policy or guideline",
    "intro": "Search and filter Services SETA resources without needing to browse organisational structures.",
    "cards": [
      {
        "title": "WSP/ATR submission guideline",
        "text": "Step-by-step employer submission guidance.",
        "meta": "GUIDELINE · PDF"
      },
      {
        "title": "Discretionary Grant application checklist",
        "text": "Documents and information required before applying.",
        "meta": "CHECKLIST · PDF"
      },
      {
        "title": "Accreditation application form",
        "text": "Sample provider application resource.",
        "meta": "FORM · DOCX"
      },
      {
        "title": "Annual Report 2025/26",
        "text": "Performance and governance report.",
        "meta": "ANNUAL REPORT · PDF"
      }
    ]
  },
  "systems": {
    "eyebrow": "Services SETA systems",
    "title": "Access the right online system",
    "intro": "Choose a system based on what you need to do. Approved external links will be connected before launch.",
    "cards": [
      {
        "title": "WSP/ATR system",
        "text": "Prepare and submit workplace skills information."
      },
      {
        "title": "Funding application system",
        "text": "Access approved grant application processes."
      },
      {
        "title": "Accreditation system",
        "text": "Apply for or manage provider accreditation."
      },
      {
        "title": "Customer Engagement",
        "text": "Lodge and track an enquiry or service request."
      }
    ]
  },
  "support": {
    "eyebrow": "Help and support",
    "title": "Tell us what you need help with",
    "intro": "Choose a topic to get guidance, frequently asked questions and the right escalation route.",
    "cards": [
      {
        "title": "Programme or learner issue",
        "text": "Attendance, stipend, placement, workplace or programme concerns."
      },
      {
        "title": "Funding or project issue",
        "text": "Applications, contracting, reporting, evidence, claims and project changes."
      },
      {
        "title": "Accreditation issue",
        "text": "Requirements, applications, compliance and provider support."
      },
      {
        "title": "System or technical issue",
        "text": "Login, access, submission and technical assistance."
      }
    ]
  },
  "contact": {
    "eyebrow": "Contact Services SETA",
    "title": "Get in touch",
    "intro": "Find contact details, provincial offices or lodge an enquiry through the appropriate support channel.",
    "cards": [
      {
        "title": "Customer care",
        "text": "General guidance and assistance during business hours."
      },
      {
        "title": "Lodge an enquiry",
        "text": "The frontend form is prepared; submission will be connected during backend integration."
      },
      {
        "title": "Provincial offices",
        "text": "Find regional contact and office information."
      }
    ]
  },
  "i-want-to": {
    "eyebrow": "Quick access",
    "title": "What do you want to do?",
    "intro": "Go directly to a high-demand task or service.",
    "cards": [
      {
        "title": "Find my sector / SIC code",
        "text": "Identify the Services SETA sector classification.",
        "href": "/industries/sic-code-finder"
      },
      {
        "title": "Submit WSP/ATR",
        "text": "Understand requirements and prepare your submission.",
        "href": "/funding/mandatory-grants"
      },
      {
        "title": "Find funding",
        "text": "Explore grants and current opportunities.",
        "href": "/funding"
      },
      {
        "title": "Find a learning programme",
        "text": "Compare available programme types.",
        "href": "/learning-programmes"
      },
      {
        "title": "Find a qualification",
        "text": "Explore qualifications and pathways.",
        "href": "/qualifications"
      },
      {
        "title": "Find an accredited provider",
        "text": "Access accreditation guidance and provider search.",
        "href": "/accreditation"
      },
      {
        "title": "Access a system",
        "text": "Choose the correct Services SETA system.",
        "href": "/systems"
      },
      {
        "title": "Find a form or guideline",
        "text": "Search the resource library.",
        "href": "/resources"
      },
      {
        "title": "Get programme help",
        "text": "Find programme and learner support.",
        "href": "/support"
      },
      {
        "title": "Lodge an enquiry",
        "text": "Contact Customer Engagement.",
        "href": "/contact"
      }
    ]
  },
  "about": {
    "eyebrow": "About Services SETA",
    "title": "Supporting skills development in the services sector",
    "intro": "Learn about our role, mandate, governance, leadership, strategy and performance.",
    "cards": [
      {
        "title": "Who we are",
        "text": "Our role within South Africa’s skills development landscape and the stakeholders we serve.",
        "href": "/about/who-we-are"
      },
      {
        "title": "Our mandate",
        "text": "The legislative and strategic basis for our work in the services sector.",
        "href": "/about/mandate"
      },
      {
        "title": "Governance and leadership",
        "text": "Oversight, accountability, organisational leadership and responsible decision-making.",
        "href": "/about/governance-leadership"
      },
      {
        "title": "Strategy and performance",
        "text": "Plans, priorities, performance information and corporate reports.",
        "href": "/about/strategy-performance"
      }
    ]
  },
  "about/who-we-are": {
    "eyebrow": "About Services SETA",
    "title": "Who we are",
    "intro": "Services SETA supports skills development across the services sector by connecting stakeholders with learning, funding, accreditation, qualifications and support.",
    "actions": [
      {
        "label": "Explore stakeholder pathways",
        "href": "/stakeholders"
      },
      {
        "label": "Industries we serve",
        "href": "/industries"
      }
    ],
    "cards": [
      {
        "title": "Our role",
        "text": "We help coordinate skills development information, programmes and opportunities across the services sector."
      },
      {
        "title": "Who we support",
        "text": "Learners, employers, skills development providers, government and public entities."
      },
      {
        "title": "What we connect",
        "text": "Career guidance, learning programmes, qualifications, funding, accreditation and stakeholder support."
      },
      {
        "title": "How to engage",
        "text": "Use the stakeholder pathways or support channels to reach the right information and service."
      }
    ],
    "help": "Need help finding the right Services SETA information or support channel?"
  },
  "about/mandate": {
    "eyebrow": "About Services SETA",
    "title": "Our mandate",
    "intro": "Our mandate guides how we support skills planning, learning delivery, sector participation and workforce development across the services sector.",
    "actions": [
      {
        "label": "View industries",
        "href": "/industries"
      },
      {
        "label": "Explore learning programmes",
        "href": "/learning-programmes"
      }
    ],
    "cards": [
      {
        "title": "Sector skills planning",
        "text": "Use sector information and stakeholder participation to identify priority skills needs."
      },
      {
        "title": "Learning and development",
        "text": "Support access to workplace-based learning, qualifications and career development pathways."
      },
      {
        "title": "Funding and implementation",
        "text": "Enable qualifying organisations and projects to participate in approved funding opportunities."
      },
      {
        "title": "Quality and accountability",
        "text": "Promote responsible delivery, evidence, reporting and continuous improvement."
      }
    ]
  },
  "about/governance-leadership": {
    "eyebrow": "About Services SETA",
    "title": "Governance and leadership",
    "intro": "Governance and leadership provide oversight, accountability and strategic direction for the organisation and its work.",
    "actions": [
      {
        "label": "View governance resources",
        "href": "/resources"
      },
      {
        "label": "Contact Services SETA",
        "href": "/contact"
      }
    ],
    "cards": [
      {
        "title": "Accounting authority",
        "text": "Provides strategic oversight and supports responsible organisational governance."
      },
      {
        "title": "Executive leadership",
        "text": "Leads implementation, operations, stakeholder service and organisational performance."
      },
      {
        "title": "Governance structures",
        "text": "Committees and control structures support oversight, risk management and accountability."
      },
      {
        "title": "Ethics and transparency",
        "text": "Responsible conduct, clear reporting and transparent processes support stakeholder trust."
      }
    ]
  },
  "about/strategy-performance": {
    "eyebrow": "About Services SETA",
    "title": "Strategy and performance",
    "intro": "Explore how strategic priorities are translated into programmes, services, targets and performance reporting.",
    "actions": [
      {
        "label": "Find corporate reports",
        "href": "/resources"
      },
      {
        "label": "View current notices",
        "href": "/stakeholder-notices"
      }
    ],
    "cards": [
      {
        "title": "Strategic priorities",
        "text": "Long-term priorities guide sector development, stakeholder support and programme investment."
      },
      {
        "title": "Annual planning",
        "text": "Annual plans translate strategic priorities into measurable activities and targets."
      },
      {
        "title": "Performance reporting",
        "text": "Progress, results and organisational performance are communicated through approved reports."
      },
      {
        "title": "Corporate publications",
        "text": "Access plans, annual reports, policies and other organisational publications in the resource library."
      }
    ]
  }
};
