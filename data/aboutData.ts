export type AboutValue = {
  title: string;
  description: string;
  icon:
    | "accountability"
    | "innovation"
    | "integrity"
    | "inclusivity"
    | "professionalism";
};

export type ExecutiveMember = {
  name: string;
  role: string;
  image?: string;
};

export const aboutValues: AboutValue[] = [
  {
    title: "Accountability",
    description:
      "We act responsibly, use public resources carefully and remain answerable for our decisions and performance.",
    icon: "accountability",
  },
  {
    title: "Innovation",
    description:
      "We seek practical, forward-looking ways to improve skills development and stakeholder service.",
    icon: "innovation",
  },
  {
    title: "Integrity",
    description:
      "We conduct our work honestly, fairly and consistently, guided by strong ethical standards.",
    icon: "integrity",
  },
  {
    title: "Inclusivity",
    description:
      "We create opportunities that recognise South Africa's diversity and widen access to skills development.",
    icon: "inclusivity",
  },
  {
    title: "Professionalism",
    description:
      "We serve stakeholders with competence, respect, consistency and a commitment to quality.",
    icon: "professionalism",
  },
];

export const nationalSkillsOutcomes: string[] = [
  "Identifying and increasing the production of occupations in high demand.",
  "Linking education and the workplace.",
  "Improving the level of skills in the South African workforce.",
  "Increasing access to occupationally directed programmes.",
  "Supporting the growth of the public college system.",
  "Supporting entrepreneurship and co-operative development through skills development.",
  "Encouraging and supporting worker-initiated training.",
  "Supporting career development services.",
];

export const administrator: ExecutiveMember = {
  name: "Lehlogonolo Masoga",
  role: "Administrator",
  image: "/board/lehlogonolo.png",
};

export const executiveManagement: ExecutiveMember[] = [
  {
    name: "Sibusiso Dhladhla",
    role: "Acting Chief Executive Officer",
    image: "/board/sibusiso.png",
  },
  {
    name: "Tshehla Matsebe",
    role: "Executive Manager: PM Support",
    image: "/board/matsebe.png",
  },
  {
    name: "Ms Liesel Kostlich",
    role: "Executive Manager: Core Operations",
    image: "/board/liesel.png",
  },
  {
    name: "Ms Mamabele Motla",
    role: "Executive Manager: Strategy and Insight",
    image: "/board/mamabele.png",
  },
  {
    name: "Makhaya Blaai",
    role: "Acting Executive Manager: Office of the CEO",
    image: "/board/makhaya.png",
  },
  {
    name: "Ms Tshamunwe Nesamari",
    role: "Acting Chief Financial Officer",
    image: "/board/nesamari.png",
  },
  {
    name: "Duduzile Mvelase",
    role: "Acting Chief Executive Manager: Corporate Services",
    image: "/board/duduzile.png",
  },
];