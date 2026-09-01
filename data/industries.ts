export type IndustryContentBlock = {
  heading?: string;
  paragraphs?: string[];
  items?: string[];
};

export type IndustryInfoSection = {
  title: string;
  items?: string[];
  text?: string;
};

export type IndustrySubsector = {
  id: string;
  title: string;
  image: string;
  introBlocks: IndustryContentBlock[];
  detailBlocks?: IndustryContentBlock[];
  note?: string;
  sections: IndustryInfoSection[];
};

export type IndustrySector = {
  slug: string;
  title: string;
  cardTitle: string;
  description: string;
  intro: string;
  image: string;
  heroImage: string;
  accent: string;
  layout?: "accordion" | "static";
  downloadLabel?: string;
  downloadHref?: string;
  subsectors: IndustrySubsector[];
  comingSoon?: boolean;
};

const collectiveServicesIntro: IndustryContentBlock[] = [
  {
    paragraphs: [
      "Collective Services is a broad term encompassing services offered by an industry based collective, with or for the benefit of, other industry stakeholders. The following industries are represented under this subsector:",
    ],
  },
  {
    heading: "Bargaining Councils",
    paragraphs: [
      "These organisations facilitate the negotiation process between unified employees (typically trade unions) and employers. A bargaining council must be registered with the Department of Labour and should comprise one or more registered trade unions and one or more registered employer organisations. Their responsibility is to:",
    ],
    items: [
      "Make and enforce collective agreements.",
      "Prevent and resolve labour disputes.",
      "Establish and manage a dispute resolution fund.",
      "Promote and establish training and education schemes.",
      "Establish and manage schemes or funds to benefit its parties or members.",
      "Make and submit proposals on policies and laws that affect a sector or area.",
    ],
  },
];

const collectiveServicesDetail: IndustryContentBlock[] = [
  {
    paragraphs: [
      "Typically, bargaining councils are mandated to ensure compliance with conditions of employment and dispute resolution within the industries they operate in. As such, practitioners in the industry need to possess comprehensive knowledge and experience with regards to Collective Agreements, Labour Relations Act, Employment Act, and other related legislations. At the same time, they should also be able to provide high levels of customer service and sales aptitude. It is a highly legal environment that requires potential employees to possess diverse skills to make bargaining councils more dynamic. Candidates need to have a post-matric qualification, a passion for working with people and a thorough knowledge of the legal environment.",
    ],
  },
  {
    heading: "Associations, Federations, Umbrella Bodies and Professional Bodies",
    paragraphs: [
      "These bodies consist of a group of associated persons who meet from time to time to advance common interests, objectives or profession. There could also be organisations representing interests of special groups or promoting ideas to the general public. These organisations typically have a constituency of members, but their activities may involve and benefit non-members as well.",
    ],
  },
  {
    heading: "Collective Services also includes:",
    items: [
      "Activities of organisations whose members’ interests centre on the development and prosperity of enterprises in a particular line of business or trade, or on the economic growth and climate of a particular geographical area or political subdivision without regard for the line of business.",
      "Dissemination of information, representation before government agencies, public relations and labour negotiations of business and employer organisations.",
      "Activities of associations of specialists engaged in cultural activities, such as associations of writers, painters, performers of various kinds, or journalists, among others.",
      "Professional Bodies Non-profit organisation aiming to further a particular profession, the interests of individuals engaged in that profession as well as the public interest.",
      "Activities of professional organisations.",
      "Setting an assessment of professional examinations.",
      "Providing support for Continuing Professional Development through learning opportunities and tools for recording and planning.",
      "Publishing of professional journals or magazines.",
      "Providing networking opportunities for professionals to meet and discuss industry and professional matters.",
      "Issuing a Code of Conduct to guide professional behaviour.",
      "Providing professional conduct oversight, monitoring and sanction.",
    ],
  },
];

const collectiveServicesSections: IndustryInfoSection[] = [
  {
    title: "Registered Qualifications",
    items: [
      "National Diploma: Labour Relations Practice (NQF Level 5)",
      "National Certificate: Labour Relations Practice (NQF Level 6)",
    ],
  },
  {
    title: "Recommended Subjects",
    items: ["English", "Computer Literacy"],
  },
  {
    title: "Employment Opportunities",
    items: [
      "Secretary Bargaining Council",
      "Trade Union Representative",
      "Workplace/industrial Relations Advisor",
      "Labour Relations Case Administrator",
    ],
  },
];

export const industrySectors: IndustrySector[] = [
  {
    slug: "personal-care",
    title: "Personal Care",
    cardTitle: "Personal Care",
    description:
      "Explore beauty treatment, fashion, funeral services, hair care and image consulting.",
    intro:
      "Explore opportunities in the Personal Care sector and its sub-sectors.",
    image: "/industries/source/personal-care-hero.png",
    heroImage: "/industries/source/personal-care-hero.png",
    accent: "#eb5a0a",
    layout: "accordion",
    subsectors: [
      {
        id: "beauty-treatment",
        title: "Beauty Treatment Subsector",
        image: "/industries/source/beauty-treatment.png",
        introBlocks: [
          {
            paragraphs: [
              "A beauty therapist is a specialist in beauty treatments for the face and body. Their beauty regimen is meant to go beyond skin deep. Driven by the belief that if you look good, you feel good, their regimen serves to boost clients’ overall self-confidence, relieve stress, and improve general wellbeing.",
              "The beauty industry is dynamic and constantly evolving with lots of ongoing research taking place. New products are constantly being introduced and it is the responsibility of a beauty therapist to keep tabs on the latest developments in the industry. Extensive knowledge of the body is required, specifically the anatomy and physiology of the skin, along with the products used. A beauty therapist understands the different types of body massages and facials. A nail technician knows how to do different applications on a person’s nails such as acrylic gel, nail painting, etc. Given the breadth of work in the industry and the number of salons and spas available and new ones springing up, it is clear that the beauty industry presents incredible job and career opportunities.",
            ],
          },
        ],
        note:
          "The Services SETA offers assistance in the training and courses in pursuit of a career in the beauty treatment sector.",
        sections: [
          {
            title: "Registered Qualifications",
            items: [
              "Further Education and Training Certificate: Beauty and Nail Technology (NQF Level 4)",
              "Certificate: Beauty Salon Manager (NQF Level 4)",
              "Certificate: Beauty Care and Modelling (NQF Level 4)",
              "Further Education and Training Certificate: Beauty Consultancy (NQF Level 4)",
              "Certificate: Body Treatments (NQF Level 5)",
              "Further Education and Training Certificate: Nail Technology (NQF Level 4)",
              "Certificate: Beauty Therapy (NQF Level 5)",
              "Further Education and Training Certificate: Beauty Therapy (NQF Level 5)",
              "National Diploma: Health and Skincare (NQF Level 5)",
            ],
          },
          {
            title: "Recommended Subjects",
            items: ["English Literacy", "Mathematics", "Life sciences"],
          },
          {
            title: "Employment Opportunities",
            items: [
              "Body therapist",
              "Make-up artist",
              "Massage therapist",
              "Nail technician",
              "Skin care therapist",
            ],
          },
        ],
      },
      {
        id: "fashion",
        title: "Fashion Subsector",
        image: "/industries/source/fashion.png",
        introBlocks: [
          {
            paragraphs: [
              "In the context of the Services SETA, fashion and modelling covers modelling agencies and fashion design. A modelling agency is a company that represents fashion models to work in the fashion industry. Agencies earn their income from a commission earned though model placements with client companies. Modelling agencies train models, arrange test shoots, layout portfolios, and put together composition photo cards and other printed materials needed to market a model. They find work for models by presenting them to designers, photographers, and advertising agencies. Modelling agencies are also responsible for booking the jobs, billing for the jobs, and then paying the models for their time.",
              "The modelling industry is very competitive and fast-paced. Modelling agencies generally work around the clock, constantly having to deal with emergencies such as cancellations or urgent jobs.",
              "Fashion designer careers begin as apprentices to professional designers with extensive experience. In the early days they work as pattern makers or sketching assistants. Having acquired more experience in the field, the apprentices eventually become supervisors and even chief designers for big fashion houses.",
            ],
          },
        ],
        sections: [
          {
            title: "Registered Qualifications",
            text:
              "The Services SETA has not yet developed qualifications for modelling agencies and fashion design not related to the clothing subsector. However, private and public institutions of higher learning normally require newcomers to have at least a matric as a prerequisite for entering the field.",
          },
          {
            title: "Recommended Subjects",
            items: ["English", "Mathematics"],
          },
          {
            title: "Employment Opportunities",
            items: ["Fashion Design", "Fashion Model"],
          },
        ],
      },
      {
        id: "funeral-services",
        title: "Funeral Services Subsector",
        image: "/industries/source/funeral-services.png",
        introBlocks: [
          {
            paragraphs: [
              "Funeral practices and rites vary immensely across cultural and religious lines. Although the South African population is diverse, funeral practices tend to share some common elements: transferring the deceased to a mortuary, preparing the body of the deceased for burial, performing a ceremony in honour of the deceased and addressing the spiritual needs of the family. Then lastly, carrying out the final interment.",
              "Funeral practitioners arrange and direct these activities for grieving families. The actual interment is carried out in various ways or methods depending on the cultural beliefs and values of the family of the deceased. These include natural burial, a process of returning a body to earth so it could decompose naturally, over time, underground. Then there is cremation, which is the use of high-temperature burning, vaporisation and oxidation to reduce the dead human body to basic chemical compounds such as gases and mineral fragments. There is still embalming or mummification, which entails the inclusion of personal items such as jewellery and positioning the body of the deceased in a manner demonstrating respect and adherence to the deceased’s religious beliefs. All this work is done by morticians, and present a viable career for many young South Africans.",
            ],
          },
        ],
        note:
          "The Services SETA offers assistance in the training and courses in pursuit of a career in the funeral services sector.",
        sections: [
          {
            title: "Registered Qualifications",
            items: [
              "National Certificate: Funeral Services Practice NQF Level 3",
              "National Certificate: Funeral Services Practice NQF Level 4",
              "National Diploma: Funeral Services Practice NQF Level 5",
              "Occupational Certificate: Mortician (NQF Level 03)",
            ],
          },
          {
            title: "Recommended Subjects",
            items: ["English Literacy", "Biblical Studies"],
          },
          {
            title: "Employment Opportunities",
            items: [
              "Crematorium Operator",
              "Chapel or Memorial Attendant",
              "Embalmer",
              "Funeral Director",
              "Mortician",
              "Mortuary Technician",
            ],
          },
        ],
      },
      {
        id: "hair-care",
        title: "Hair Care Subsector",
        image: "/industries/source/hair-care.png",
        introBlocks: [
          {
            paragraphs: [
              "Hairdressing is a trade. Like most trades, once a learner has undergone theoretical and practical training, he or she needs to obtain workplace experience for a specified period of time before he or she may be eligible to write a trade test.",
              "Having garnered enough workplace experience, the learner can then apply for a trade test which, if successful, gets them registered as a qualified artisan under the Department of Higher Education and Training (DHET).",
              "The Services SETA offers assistance in the training and courses in pursuit of a career in the hair care sector.",
            ],
          },
        ],
        sections: [
          {
            title: "Registered Qualifications",
            items: [
              "National Certificate: Hairdressing at NQF Level 2",
              "National Certificate: Hairdressing at NQF Level 3",
              "Further Education and Training Certificate: Hairdressing at NQF Level 4",
              "Occupational Certificate: Hairdresser at NQF Level 4",
            ],
          },
          {
            title: "Recommended Subjects",
            items: ["English", "Mathematics"],
          },
          {
            title: "Employment Opportunities",
            items: [
              "Hairdresser",
              "Hair or Beauty Salon Assistant",
              "Salon Manager",
            ],
          },
        ],
      },
      {
        id: "image-consulting",
        title: "Image Consulting Subsector",
        image: "/industries/source/image-consulting.png",
        introBlocks: [
          {
            paragraphs: [
              "Image consultants are professionals sought out by both individuals and companies to assist them assess, improve, enhance, and upgrade their appearance in a manner that is in line with their professional roles and goals.",
              "An image consultant assists people develop a professional or contemporary appearance. The areas of specialisation include personal stylist, personal shopper, identity coach, fashion stylist, corporate stylist, retail image, shopping consultant, social etiquette, and public speaking. Most practitioners are self-employed and spend a great deal of time marketing themselves and finding new clients. Opportunities for starting your own business and be independent are very high. Internationally, people in this position typically have relevant formal training and certifications offered by accredited skills development providers and some image consulting associations.",
            ],
          },
        ],
        sections: [
          {
            title: "Registered Qualifications",
            text:
              "The Services SETA has not yet developed qualifications for image consulting. However, we are in the process of registering an occupation on the Organising Framework of Occupations (OFO), which will, in turn, be utilised to develop an occupational qualification. No registered standard education requirements exist for image consultants, but various unaccredited, non-credit bearing training programmes are available in the field offered by private institutions and related associations.",
          },
          {
            title: "Recommended Subjects",
            items: ["English", "Mathematics"],
          },
          {
            title: "Employment Opportunities",
            items: [
              "Self-employed image consultant.",
              "Working in an Image consulting firm, consulting with individuals or companies on behalf of the firm.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "real-estate-related",
    title: "Real Estate",
    cardTitle: "Real Estate & Related",
    description:
      "Property practice, facilities management, valuation and auctioneering pathways.",
    intro:
      "Explore opportunities in the Personal Care sector and its sub-sectors.",
    image: "/industries/source/real-estate-hero.png",
    heroImage: "/industries/source/real-estate-hero.png",
    accent: "#eb5a0a",
    layout: "static",
    downloadLabel: "Read & Download",
    downloadHref: "/resources",
    subsectors: [
      {
        id: "real-estate",
        title: "Real Estate",
        image: "/industries/source/real-estate.png",
        introBlocks: [
          {
            paragraphs: [
              "Real Estate refers to immovable property in a form of land, buildings, and practically anything affixed to the land. Property practitioners and brokers use their skills to match sellers of property with prospective buyers of new homes, apartments, commercial property or land parcels. Property practitioners can choose to specialise in one of the mentioned property types or they can limit their business to a specific location. The Services SETA offers assistance in the training and courses in pursuit of a careers as a real estate agent.",
            ],
          },
        ],
        sections: [
          {
            title: "Registered Qualifications",
            items: [
              "Further Education and Training Certificate in Real Estate NQF Level 4",
              "Further Education and Training Certificate in Real Estate NQF Level 5",
              "Further Education and Training Certificate: Auctioneering Support Services NQF Level 4",
              "National Certificate: Auctioneering Practices NQF Level 5",
              "Further Education and Training Certificate: Commercial Property and Facilities Management NQF Level 4",
              "Occupational Certificate: Facilities Manager NQF Level 6",
              "Occupational Certificate: Valuer (Municipal Property Assessor) NQF Level 5",
            ],
          },
          {
            title: "Required Subjects",
            items: [
              "English Literacy",
              "Mathematics / Math Literacy",
              "Life Orientation",
            ],
          },
          {
            title: "Statutory Requirements",
            text:
              "As part of the Estate Agency Affairs Board (EAAB) statutory mandate and legislation, it is the requirement of all estate agents wishing to operate within the real estate industry to be in possession of a valid Fidelity Fund Certificate (FFC). A Fidelity Fund Certificate is valid between 1 January and 31 December of any given year. Estate agents are, therefore, required to renew by no later than 31 October of each year to obtain a Fidelity Fund Certificate for the following year.",
          },
          {
            title: "Employment Opportunities",
            items: [
              "Real Estate Agent",
              "Real Estate Agency Principal",
              "Property Manager",
              "Facility Manager",
              "Auctioneer",
              "Valuers",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "management-business",
    title: "Management & Business",
    cardTitle: "Management & Business",
    description:
      "Project management, administration, consultancy and business support services.",
    intro:
      "Explore opportunities in the Management & Business and its sub-sectors.",
    image: "/industries/source/management-business-hero.png",
    heroImage: "/industries/source/management-business-hero.png",
    accent: "#eb5a0a",
    layout: "accordion",
    subsectors: [
      {
        id: "project-management",
        title: "Project Management",
        image: "/industries/source/project-management.png",
        introBlocks: [
          {
            paragraphs: [
              "Generic Project Management sets the standards upon which projects are to be conducted in order to meet set timelines and budgets. Projects tend to differ in size and complexity, and therefore require different approaches based on complexity levels. Large, complex projects, for example, require a more rigorous management approach compared to smaller projects.",
            ],
          },
          {
            heading:
              "Event and Conference Management excluding the operation of convention centres",
            paragraphs: [
              "Event management involves first understanding the brand, the brand personality and event purpose or objectives. From there, it’s about identifying the right target audience and devising an event concept, followed by the planning, the logistics and coordination of the technical aspects before launching the actual event. Post the event, a post-event analysis is usually undertaken to assess the event and its overall performance. It is imperative that an event is able to meet its stated goals and objectives.",
            ],
          },
        ],
        note:
          "The Services SETA offers assistance in the training and courses in pursuit of a career in Project and Events Management.",
        sections: [
          {
            title: "Registered Qualifications",
            items: [
              "National Certificate: Project Support Services NQF L3",
              "Further Education and Training Certificate: Project Management NQF L4",
              "Further Education and Training Certificate: Project Support Services NQF L4",
              "National Certificate: Project Management NQF L5",
              "National Diploma: Project Management NQF L5",
              "Further Education and Training Certificate: Event Support NQF L3",
            ],
          },
          {
            title: "Recommended Subjects",
            items: ["English", "Mathematical Literacy", "Computer Literacy"],
          },
          {
            title: "Employment Opportunities",
            items: [
              "Project administrator",
              "Project coordinator",
              "Events manager",
            ],
          },
        ],
      },
      {
        id: "business-services",
        title: "Business Services",
        image: "/industries/source/business-services.png",
        introBlocks: [
          {
            paragraphs: [
              "This subsector covers a number of industries responsible for a vast range of business and personal support services which among others include; brokerage services, quality control services, NGO management, and general consulting. Below is a list of all industries represented:",
            ],
          },
          {
            heading: "Imports and Export of Various Metals",
            paragraphs: [
              "This sector facilitates the importation and exporting of coal, fuel and other raw materials. Products include steel plates, hot-rolled steel sheets, square steel, round steel, wire, cable and ferrosilicon. Some materials include copper, aluminium, brass, stainless steel, computers and metals.",
            ],
          },
          {
            heading: "Other Recreational Services",
            paragraphs: [
              "This is the sector that facilitates activities geared at mind and body enhancement. The activities can be communal or solitary, active or passive, and can be done indoors or outdoors. They include activities such as listening to music, gardening, hunting, swimming, hiking and travelling.",
            ],
          },
        ],
        sections: [
          {
            title: "Registered Qualifications",
            items: [
              "National Certificate: New Venture Creation (NQF Level 4)",
              "National Certificate: New Venture Creation (SMME) NQF Level 2",
              "Further Education and Training Certificate: Business Administration Services NQF Level 4",
              "National Certificate: Business Administration Services NQF Level 3",
              "National Certificate: Business Administration Services NQF Level 2",
              "National Certificate: Business Administration Service NQF Level 4",
              "National Certificate: Business Advising (Information Support) NQF Level 4",
              "National Certificate: Business Consulting Practice (Enterprise Resource Planning) NQF Level 5",
              "National Certificate: Generic Management: Customer Management NQF Level 5",
              "National Certificate: Generic Management: Strategic Management NQF Level 5",
              "National Certificate: Organisational Transformation and Change Management NQF Level 5",
              "Further Education and Training Certificate (FETC): Trade Exhibitions NQF Level 4",
              "Further Education and Training Certificate (FETC): Trade Exhibitions NQF Level 4",
              "Further Education and Training Certificate: End User (ERP) NQF Level 4",
              "General Education and Training Certificate: Business Practice NQF Level 1",
              "National Certificate: Project Management NQF Level 5",
              "National Diploma: Project Management NQF Level 5",
              "National Certificate: Project Support Service NQF Level 3",
              "Further Education and Training Certificate: Project Support Service NQF Level 4",
              "National Certificate: Business Advising NQF Level 6",
              "National Certificate: Advising Business NQF Level 5",
              "National Diploma: Business Consulting Practice NQF Level 5",
              "National Certificate: Governance and Administration NQF Level 5",
              "National Certificate: Trade Exhibition Support NQF Level 3",
              "National Diploma: Organisational Transformation and Change Management NQF Level 5",
              "Further Education and Training Certificate: Administration Management Generic Management: Occupational Business Manager NQF Level 4",
              "Further Education and Training Certificate: Generic Management: Occupational Office Manager NQF Level 4",
              "National Certificate: Generic Management General Management NQF Level 5",
              "National Certificate: Quality Management Systems NQF Level 5",
              "Further Education and Training Certificate: Payroll Administration Service NQF Level 4",
              "National Diploma: Payroll Administration Services NQF Level 5",
              "Further Education and Training Certificate: Payroll Administration Services NQF Level 4",
            ],
          },
          {
            title: "Recommended Subjects",
            items: [
              "Communication at NQF Level 3.",
              "Mathematical Literacy at NQF Level 3.",
              "Computer Literacy at NQF Level 3.",
              "Communication in a Second South African Language at NQF Level 2.",
            ],
          },
          {
            title: "Employment Opportunities",
            items: [
              "Business Administrator",
              "Receptionist",
              "Personal Assistance",
              "Office Manager",
              "Secretary",
              "Payroll Clerk",
              "Payroll Manager",
              "Customer Service Manager",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "labour-collective",
    title: "Labour & Collective Services",
    cardTitle: "Labour & Collective",
    description:
      "Recruitment, labour relations, bargaining councils and collective services.",
    intro:
      "Explore opportunities in the Labour & Collective Services and its sub-sectors.",
    image: "/industries/source/labour-collective-hero.png",
    heroImage: "/industries/source/labour-collective-hero.png",
    accent: "#eb5a0a",
    layout: "accordion",
    subsectors: [
      {
        id: "labour-recruitment-service",
        title: "Labour Recruitment Service Subsector",
        image: "/industries/source/labour-recruitment.png",
        introBlocks: [
          {
            paragraphs: [
              "Recruitment is the process of searching for, attracting, screening and finally selecting a suitable person for a job. The South African commercial industry and public sector drives a thriving recruitment industry which provides a wide range of services to a large pool of new entrants, re-entrants, job leavers and other job seekers. Below are industries represented under this subsector:",
            ],
          },
          {
            heading: "Permanent Employment Agencies",
            paragraphs: [
              "These are employment agencies that match employers to employees to fill permanent positions or vacancies.",
            ],
          },
        ],
        detailBlocks: [
          {
            heading: "Labour Recruitment and Provision of Staff",
            paragraphs: [
              "This category includes personnel search, selection referral and placement in connection with employment supplied to the potential employer or to the prospective employee. The recruiter is also responsible for formulation of job descriptions, screening and testing of applicants, and investigation of references, among other things. This industry also boasts executive search and placement activities (head-hunters).",
            ],
          },
          {
            heading: "Personnel Services Agencies",
            paragraphs: [
              "These often include the provision of a suite of personnel related services comprising, recruitment, screening and sometimes training of new employees. Such agencies provide personnel services to organisations that may not have the time nor the resources to fulfil their own staffing requirements.",
              "The firms providing personnel services are also referred to as employment agencies or head-hunters, and range from global franchises to smaller, independent agencies. Some agencies specialise in recruiting temporary personnel for organisations that only require an employee on an interim basis.",
            ],
          },
          {
            heading: "Temporary Employment Services",
            paragraphs: [
              "Temporary agencies are employment agencies that find employees to fill short-term duration jobs. Most of the workers employed by Temporary Employment Services fall into the range of sales and service workers, and usually under the youth category.",
              "The Temporary Employment Sector absorbs young people at a far greater rate in the overall labour market than other sectors. Most of the young people employed by Temporary Employment Services are absorbed either in medium or low-skilled occupations.",
            ],
          },
        ],
        note:
          "The Services SETA offers assistance in the training and courses in pursuit of a career in the recruitment services subsector.",
        sections: [
          {
            title: "Registered Qualifications",
            items: [
              "National Certificate: Labour Recruitment Consultancy (NQF Level 4)",
              "Further Education and Training Certificate: Labour Recruitment Services (NQF Level 4)",
            ],
          },
          {
            title: "Recommended Subjects",
            items: ["English", "Computer Literacy"],
          },
          {
            title: "Employment Opportunities",
            items: [
              "Labour Recruitment Manager",
              "Labour Recruitment Consultant",
              "Recruitment Manager",
            ],
          },
        ],
      },
      {
        id: "collective-services",
        title: "Collective Services",
        image: "/industries/source/collective-services.png",
        introBlocks: collectiveServicesIntro,
        detailBlocks: collectiveServicesDetail,
        note:
          "The Services SETA offers assistance in the training and courses in pursuit of a career in the collective services sector.",
        sections: collectiveServicesSections,
      },
    ],
  },
  {
    slug: "communication-marketing",
    title: "Communication and Marketing",
    cardTitle: "Communication & Marketing",
    description:
      "Contact centre, marketing, public relations and communication pathways.",
    intro:
      "Explore opportunities in the Communication and Marketing sector and its sub-sectors.",
    image: "/industries/source/communication-marketing-hero.png",
    heroImage: "/industries/source/communication-marketing-hero.png",
    accent: "#eb5a0a",
    layout: "accordion",
    subsectors: [
      {
        id: "contact-centre",
        title: "Contact Centre Subsector",
        image: "/industries/source/contact-centre.png",
        introBlocks: [
          {
            paragraphs: [
              "Marketing is a series of activities aimed at communicating the value of a product or service to customers with the purpose of selling that product or service. Market research and advertising form part of its key components.",
              "For any organisation, marketing is a critical component. Its role is to manage and organise a set of processes for creating, delivering and communicating value to customers and managing customer relationships in ways that benefit the organisation and its shareholders.",
              "Critically, marketing is the science of defining target markets through market analysis and market segmentation, as well as understanding consumer buying behavior, and translating that into superior value proposition for customers. To ensure a broad organisational alignment with marketing objectives, organisations have embraced holistic marketing.",
            ],
          },
        ],
        detailBlocks: [
          {
            heading: "The Four Components of Holistic Marketing are:",
            items: [
              "Relationship marketing.",
              "Internal marketing.",
              "Integrated marketing.",
              "Socially responsive marketing.",
            ],
          },
          {
            paragraphs: [
              "The set of engagements necessary for successful marketing management includes capturing marketing insights, connecting with customers, building strong brands, shaping market offerings, delivering and communicating value, creating long-term growth, and developing marketing. The Services SETA offers assistance in the training and courses in pursuit of a career in the marketing subsector.",
            ],
          },
        ],
        sections: [
          {
            title: "Registered Qualifications",
            items: [
              "National Certificate: Contact Centre (NQF Level 2)",
              "Further Education and Training Certificate: Contact Centre Operations (NQF Level 4)",
              "National Diploma: Contact Centre Management (NQF Level 5)",
              "National Certificate: Contact Centre and Business Process Outsourcing Support (NQF Level 3)",
            ],
          },
          {
            title: "Recommended Subjects",
            items: ["English Literacy"],
          },
          {
            title: "Employment Opportunities",
            items: [
              "Call or Contact Centre Agent",
              "Call Or Contact Centre Manager",
            ],
          },
        ],
      },
      {
        id: "marketing",
        title: "Marketing Subsector",
        image: "/industries/source/marketing.png",
        introBlocks: [
          {
            paragraphs: [
              "A Contact Centre is a centralised office used for handling and managing external high volume communication, be it incoming or outgoing. In a modern contact centre, such communication could be undertaken either telephonically, via electronic mail, instant chat, or a combination of the three. An inbound call centre is operated for the purpose of handling incoming product support requests or inquiries by a customer or stakeholder. Outbound call centres are operated for telemarketing, solicitation of charitable or political donations, debt collection and market research.",
              "A contact centre, also known as customer interaction centre, is a central point of any organisation from which all customer contacts are managed. Through contact centres, valuable information about the company are routed to appropriate people, contacts to be tracked and data to be gathered. It is generally a part of a company’s customer relationship management (CRM).",
            ],
          },
        ],
        detailBlocks: [
          {
            paragraphs: [
              "Working in a call centre requires discipline to follow a flexible schedule, good communication skills and the ability to multitask. You will have to help customers while following your company’s policies and you will need to build up character to deal with irate and difficult customers. You need to be comfortable with most desktop environments and have the skill to type fast and accurately on a computer.",
              "The Services SETA offers assistance in the training and courses in pursuit of a career in a contact centre.",
            ],
          },
        ],
        sections: [
          {
            title: "Registered Qualifications",
            items: [
              "Further Education and Training Certificate: Marketing (NQF Level 4)",
              "National Diploma in Marketing Research (NQF Level 5)",
              "National Diploma in Marketing Research (NQF Level 7)",
              "National Diploma in Marketing Communication (NQF Level 5)",
              "National Diploma in Marketing Communication (NQF Level 7)",
              "Further Education and Training Certificate: Public Relations (NQF Level 4)",
              "National Diploma in Public Relations Practice (NQF Level 5)",
              "National Diploma in Public Relations Practice (NQF Level 5)",
              "National Certificate in Customer Management (NQF Level 5)",
              "National Diploma in Customer Management (NQF Level 7)",
              "National Diploma in Marketing Management (NQF Level 5)",
              "Further Education and Training Certificate (FETC): Trade and Exhibitions (NQF Level 4)",
              "National Certificate: Trade Exhibition Support (NQF Level 3)",
              "National Diploma in Marketing Management (NQF Level 7)",
              "Further Education and Training Certificate: Fundraising (NQF Level 4)",
              "Further Education and Training Certificate: Interior Design (NQF Level 4)",
            ],
          },
          {
            title: "Recommended Subjects",
            items: ["English Literacy"],
          },
          {
            title: "Employment Opportunities",
            items: [
              "Marketing Coordinator",
              "Marketing Practitioner",
              "Market Research Analyst",
              "Sales And Marketing Manager",
              "Advertising And Public Relations Manager",
            ],
          },
        ],
      },
      {
        id: "collective-services",
        title: "Collective Services",
        image: "/industries/source/communication-collective-services.png",
        introBlocks: collectiveServicesIntro,
        detailBlocks: collectiveServicesDetail,
        note:
          "The Services SETA offers assistance in the training and courses in pursuit of a career in the collective services sector.",
        sections: collectiveServicesSections,
      },
    ],
  },
  {
    slug: "cleaning-hiring-services",
    title: "Cleaning and hiring services",
    cardTitle: "Cleaning & Hiring Services",
    description:
      "Cleaning, equipment hiring, household and domestic service pathways.",
    intro:
      "Explore opportunities in the Cleaning and hiring services sector and its sub-sectors.",
    image: "/industries/source/cleaning-hiring-hero.png",
    heroImage: "/industries/source/cleaning-hiring-hero.png",
    accent: "#eb5a0a",
    layout: "accordion",
    subsectors: [
      {
        id: "cleaning-services",
        title: "Cleaning Services",
        image: "/industries/source/cleaning-services.png",
        introBlocks: [
          {
            paragraphs: [
              "The cleaning services sub-sector spans the provision of cleaning services for individuals, households and commercial entities (contract cleaning). The kind of services provided in this sub-sector are wide-ranging from basic cleaning services to specialist cleaning.",
              "The sub-sector also covers companies that mainly specialise in the provision of cleaning equipment and supplies. The provision of cleaning services is pivotal in the assistance of maintaining good hygiene and sanitary standards to promote the general health and well-being of communities.",
              "The cleaning sub-sector provides services for other sectors such as the Health, Agriculture, Chemical Industries, Property, Tourism and Hospitality.",
            ],
          },
        ],
        detailBlocks: [
          {
            heading: "Types of Services in the Cleaning Industry:",
            items: [
              "General Cleaning Services",
              "Cleaning of Carpets and Upholstery",
              "Industrial Cleaning",
              "Pet Care Cleaning",
              "Health Care Cleaning",
              "Vehicle Cleaning",
              "Aircraft Cleaning",
              "Trauma/crime Scene Cleaning",
              "Cleaning at height (for example, cleaning of windows for high-rise buildings)",
              "Cleaning Equipment and Consumable Supply (cleaning products)",
              "Dry Cleaning and Laundering",
              "Garden Maintenance",
              "Domestic Services",
            ],
          },
        ],
        note:
          "The Services SETA offers training and courses for various cleaning services.",
        sections: [
          {
            title: "Registered Qualifications",
            items: [
              "National Certificate: Hygiene and Cleaning Supervision (NQF Level 3)",
              "GETC: Hygiene and Cleaning (NQF Level 1)",
              "National Certificate: Specialist Hygiene and Cleaning Services (NQF Level 2)",
            ],
          },
          {
            title: "Recommended Subjects",
            items: ["English and Home Language", "Life Orientation"],
          },
          {
            title: "Employment Opportunities",
            items: [
              "Cleaning Services Manager",
              "Commercial Cleaning",
              "Domestic Cleaner",
              "Dry Cleaner",
              "Healthcare Cleaner",
            ],
          },
        ],
      },
      {
        id: "hiring-services",
        title: "Hiring Services",
        image: "/industries/source/hiring-services.png",
        introBlocks: [
          {
            paragraphs: [
              "The equipment hiring sector is one of the largest commercial sectors in the economy which drives the resource allocations of many business enterprises and private individuals. Companies operating in the sector rent out a wide range of equipment and machinery to businesses and individuals.",
              "The hiring sub-sector is a critical partner in the mining (plant and operator hiring), construction (plant and operator hiring), tourism (equipment and miscellaneous hire) and the general business sectors (function and catering hire).",
            ],
          },
        ],
        detailBlocks: [
          {
            heading: "Types of Services in the Hiring Industry:",
            items: [
              "Construction, demolition or any other machinery and equipment (includes excavating and grading machines)",
              "Personal and household goods (includes items such as furniture, electrical appliances, pleasure boats, bicycles, costumes, jewellery, hand tools)",
              "Office Machinery (includes items such as computers, copiers or facsimile machines)",
              "Function and Catering Hire (catering equipment hire for events such as weddings, conferences, private parties)",
              "Truck Hire (includes truck, tractors and semi-trailers)",
              "Video Hire (includes pre-recorded video tapes and discs for home electronic equipment)",
              "Plant Hire (includes earthmoving equipment, Articulated Dump Trucks (ADTs), excavators and dozers)",
              "Miscellaneous Item Hire (includes items such as jukeboxes, photographic equipment, sports and recreation equipment, portable toilets)",
            ],
          },
        ],
        note:
          "The Services SETA offers assistance in the training and courses in pursuit of a career in the hiring services sector.",
        sections: [
          {
            title: "Registered Qualifications",
            items: [
              "National Certificate: Hiring Services and Support (NQF Level 3)",
              "Further Education and Training Certificate: Hiring Operations (NQF Level 4)",
              "National Diploma: Hiring Operations Management (NQF Level 5)",
            ],
          },
          {
            title: "Recommended Subjects",
            items: [
              "English Language",
              "Maths Literacy",
              "Accounting and",
              "Computer Literacy",
            ],
          },
          {
            title: "Employment Opportunities",
            items: [
              "Backhoe operator",
              "Bulldozer operator",
              "Dump truck operator",
              "Earth moving plant operator",
            ],
          },
        ],
      },
      {
        id: "household-services",
        title: "Household Services",
        image: "/industries/source/household-services.png",
        introBlocks: [
          {
            paragraphs: [
              "Household Services, one of the sub-sectors represented in the services sector, covers garden maintenance. A garden maintenance service provides general care of a garden to keep it in overall good health or condition and well presented. Functions performed in the service include among others; lawn mowing, lawn repair and renovation, pruning, spraying pesticides, fertilising or soil care, replacing old or sick plants, maintaining indoor plants, tree lopping or tree surgery.",
              "Needless to say, the scope of work opportunities available for garden services workers is quite vast and varied, and includes large private gardens and grounds, small domestic gardens, estate and letting agents contracts, housing and residents associations, flats with shared gardens, property management companies, care homes, commercial grounds, private roads, schools and local councils for public spaces, to name some.",
            ],
          },
        ],
        note:
          "The Services SETA offers assistance in the training and courses in pursuit of a career in the household and garden services sector.",
        sections: [
          {
            title: "Registered Qualifications",
            text: "The qualification for this subsector in under development.",
          },
          {
            title: "Recommended Subjects",
            items: ["English and Home Language", "Life Orientation"],
          },
          {
            title: "Employment Opportunities",
            items: ["Garden Worker"],
          },
        ],
      },
      {
        id: "domestic-service",
        title: "Domestic Service",
        image: "/industries/source/domestic-services.png",
        introBlocks: [
          {
            paragraphs: [
              "Domestic services involves the provision of general worker services within a domestic environment which does not involve major gardening and similar work. These services are offered by hired workers employed by private households for the performance of tasks such as house-cleaning, child-care, cooking, light-gardening and personal services. Domestic services could cover much bigger responsibilities which involve the performance of similar tasks within public institutions and businesses including hotels and boarding houses.",
              "Domestic housekeepers should be very reliable and diligent, and have strong communication skills for interacting with homeowners and their children. Other critical skills include, strong time management skills, being organised and being self-directed.",
            ],
          },
        ],
        note:
          "The Services SETA offers assistance in the training and courses in pursuit of a career in the domestic services sector.",
        sections: [
          {
            title: "Registered Qualifications",
            items: [
              "GETC: Domestic Services (NQF Level 1)",
              "National Certificate: Home Care Practices (NQF Level 2)",
            ],
          },
          {
            title: "Recommended Subjects",
            items: ["English and Home Language", "Life Orientation"],
          },
          {
            title: "Employment Opportunities",
            items: ["Domestic Housekeeper", "Nanny"],
          },
        ],
      },
    ],
  },
];

export function getIndustryBySlug(slug: string) {
  return industrySectors.find((industry) => industry.slug === slug);
}