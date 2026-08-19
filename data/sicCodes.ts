export type SicCodeEntry = {
  code: string;
  descriptor: string;
};

export type SicSubSector = {
  name: string;
  codes: SicCodeEntry[];
};

export type SicChamber = {
  id: string;
  shortName: string;
  name: string;
  subSectors: SicSubSector[];
};

export const sicChambers: SicChamber[] = [
  {
    id: "cleaning-and-hiring",
    shortName: "Cleaning & hiring",
    name: "Cleaning and Hiring Services Chamber",
    subSectors: [
      {
        name: "Hiring Services",
        codes: [
          {
            code: "86025",
            descriptor: "Office Machinery, Equipment and Rental Leasing",
          },
          {
            code: "50500",
            descriptor:
              "Renting of Construction or Demolition Equipment with Operators",
          },
          {
            code: "85000",
            descriptor:
              "Renting of Machinery and Equipment, Without Operator and Of Personal and Household",
          },
          {
            code: "85200",
            descriptor: "Renting of Other Machinery and Equipment",
          },
          {
            code: "85300",
            descriptor: "Renting of Personal and Household Goods N.E.C",
          },
          {
            code: "99029",
            descriptor: "Function and Catering Equipment Hire",
          },
          { code: "99035", descriptor: "Miscellaneous Item Hire" },
          { code: "99036", descriptor: "Truck Hire" },
          { code: "99037", descriptor: "Video Hire" },
          { code: "99052", descriptor: "Truck and Plant Hire" },
        ],
      },
      {
        name: "Household Services",
        codes: [
          { code: "99025", descriptor: "Dry Cleaning and Laundering" },
          { code: "99026", descriptor: "Garden Maintenance Services" },
        ],
      },
      {
        name: "Domestic Services",
        codes: [{ code: "99027", descriptor: "Domestic Services" }],
      },
      {
        name: "Cleaning Services",
        codes: [
          { code: "99002", descriptor: "General Cleaning" },
          { code: "99018", descriptor: "Cleaning of Carpet and Upholstery" },
          { code: "99047", descriptor: "Pet Care" },
          {
            code: "99019",
            descriptor: "Cleaning Equipment and Consumable Supply",
          },
        ],
      },
    ],
  },
  {
    id: "communication-and-marketing",
    shortName: "Communication & marketing",
    name: "Communication and Marketing Services Chamber",
    subSectors: [
      {
        name: "Marketing Services",
        codes: [
          { code: "9001", descriptor: "Marketing Services" },
          {
            code: "9002",
            descriptor: "Marketing Communications (Inc. Public Relations)",
          },
          { code: "9008", descriptor: "Direct Marketing" },
          {
            code: "88130",
            descriptor: "Market Research and Public Opinion Polling",
          },
          { code: "99038", descriptor: "Brand Marketers" },
        ],
      },
      {
        name: "Contact Centres",
        codes: [
          { code: "99055", descriptor: "Call Centre Management of People" },
        ],
      },
      {
        name: "Postal Services",
        codes: [
          { code: "75110", descriptor: "National Postal Activities" },
          { code: "75111", descriptor: "Banking Via Post Office" },
          { code: "75121", descriptor: "Mail Handling" },
        ],
      },
    ],
  },
  {
    id: "labour-and-collective",
    shortName: "Labour & collective",
    name: "Labour and Collective Services Chamber",
    subSectors: [
      {
        name: "Labour Recruitment Services",
        codes: [
          { code: "88918", descriptor: "Permanent Employment Agencies" },
          {
            code: "88910",
            descriptor: "Labour Recruitment and Provision of Staff",
          },
          {
            code: "88916",
            descriptor:
              "Private Employment Agencies and Temporary Employment Services",
          },
          { code: "99045", descriptor: "Personnel Services Agencies" },
          { code: "88917", descriptor: "Temporary Employment Services" },
        ],
      },
      {
        name: "Collective Services",
        codes: [
          {
            code: "95120",
            descriptor: "Activities of Professional Organisations",
          },
          { code: "95155", descriptor: "Professional Bodies N.E.C." },
          {
            code: "95991",
            descriptor: "Bargaining Councils and Dispute Resolution",
          },
          {
            code: "95992",
            descriptor: "Associations, Federations and Umbrella Bodies",
          },
        ],
      },
    ],
  },
  {
    id: "management-and-business",
    shortName: "Management & business",
    name: "Management and Business Services Chamber",
    subSectors: [
      {
        name: "Business Services",
        codes: [
          { code: "61421", descriptor: "Import And Export of Various Metals" },
          { code: "88000", descriptor: "Other Business Activities" },
          { code: "88141", descriptor: "General Consulting Services" },
          { code: "88900", descriptor: "Business Activities N.E.C." },
          { code: "96490", descriptor: "Other Recreational Activities" },
          { code: "99000", descriptor: "Other Service Activities" },
          {
            code: "99014",
            descriptor: "Quality Management and Related Services",
          },
          { code: "99016", descriptor: "Ngo Management and Services" },
          {
            code: "99015",
            descriptor:
              "Non-Financial Business Management and Management Consulting",
          },
          { code: "99090", descriptor: "Other Service Activities N.E.C" },
        ],
      },
      {
        name: "Project Management",
        codes: [
          { code: "99039", descriptor: "Generic Project Management" },
          {
            code: "99056",
            descriptor:
              "Event And Conference Management Excluding the Operation of Convention Centres",
          },
        ],
      },
    ],
  },
  {
    id: "personal-care",
    shortName: "Personal care",
    name: "Personal Care Services Chamber",
    subSectors: [
      {
        name: "Hair Care",
        codes: [
          { code: "99022", descriptor: "Ladies Hair Dressing" },
          { code: "99023", descriptor: "Men's and Ladies Hairdressing" },
          { code: "99024", descriptor: "Beauty Treatment" },
        ],
      },
      {
        name: "Beauty Treatment",
        codes: [
          {
            code: "99041",
            descriptor:
              "Nail Technology Including Nail Technologist, Nail Technicians and Distributors and Agencies of Nail Products",
          },
          {
            code: "99042",
            descriptor:
              "Non-Allied Registered Perfumery Including Aromatic Oils and Related Products, Perfumery Consultants, Sales People and Agencies of Nail Products",
          },
          {
            code: "99043",
            descriptor:
              "Health And Skin Care Incl. Health and Skin Care Therapists, Stress Therapists and Cosmetologists, Slimming Salons and Distributors of Slimming Products Including Slimming Machines",
          },
          { code: "99044", descriptor: "Make-Up Artistry" },
          {
            code: "99050",
            descriptor:
              "Distributors of Slimming Products Including Slimming Machines",
          },
          {
            code: "99051",
            descriptor: "Distributors of Makeup Products and Related Merchandise",
          },
          {
            code: "34260",
            descriptor: "Cutting, Shaping and Finishing of Stone",
          },
        ],
      },
      {
        name: "Funeral Services",
        codes: [
          { code: "99030", descriptor: "Funeral and Related Activities" },
          { code: "99033", descriptor: "Coffin Making by Funeral Enterprises" },
          {
            code: "99034",
            descriptor: "Manufacture of Funeral and Tombstone",
          },
        ],
      },
      {
        name: "Fashion",
        codes: [
          { code: "99046", descriptor: "Modelling Agencies" },
          { code: "99054", descriptor: "Fashion Design Not Related to Clothing" },
        ],
      },
    ],
  },
  {
    id: "real-estate-and-related",
    shortName: "Real estate",
    name: "Real Estate and Related Services Chamber",
    subSectors: [
      {
        name: "Real Estate Services",
        codes: [
          {
            code: "50411",
            descriptor: "Decorators/Interior Designers and Decorators",
          },
          { code: "84000", descriptor: "Real Estate Activities" },
          {
            code: "84100",
            descriptor: "Real Estate Activities with own or Leased Properties",
          },
          {
            code: "84200",
            descriptor: "Real Estate Duties on a Fee or Contract Basis",
          },
          { code: "84201", descriptor: "Real Estate Valuation Services" },
          { code: "84202", descriptor: "Property Management Services" },
          { code: "84203", descriptor: "Estate Agencies" },
          { code: "99053", descriptor: "Valuers, Including Auctioneers" },
        ],
      },
    ],
  },
];

export const sicCodeSummary = {
  chamberCount: sicChambers.length,
  subSectorCount: sicChambers.reduce(
    (total, chamber) => total + chamber.subSectors.length,
    0,
  ),
  codeCount: sicChambers.reduce(
    (total, chamber) =>
      total +
      chamber.subSectors.reduce(
        (subTotal, subSector) => subTotal + subSector.codes.length,
        0,
      ),
    0,
  ),
};
