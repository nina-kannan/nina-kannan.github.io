// ─────────────────────────────────────────────────────────────────────────────
// NINA KANNAN — PORTFOLIO CONTENT
// Edit this file to update anything on the site.
// ─────────────────────────────────────────────────────────────────────────────

export const meta = {
  name: "Nina Kannan",
  title: "Electrical & Computer Engineering @ UT Austin",
  tagline:
    "Passionate about innovative solutions to global challenges — committed to ethical tech and inspiring the next generation of engineers.",
  email: "nina.l.kannan@gmail.com",
  phone: "+1 (609) 955-8612",
  linkedin: "https://linkedin.com/in/nina-kannan",
  github: "https://github.com/nina-kannan",
  gpa: "3.97 / 4.00",
  gradYear: "May 2028",
};

export const about = `I'm a sophomore studying Electrical and Computer Engineering at The University of Texas at Austin (GPA: 3.98). I love working at the intersection of hardware and software — from writing bare-metal embedded systems to building full-stack web apps. I care about using technology to solve real problems and about lifting others up through education and mentorship.`;

export type Experience = {
  role: string;
  org: string;
  location: string;
  period: string;
  bullets: string[];
  tags: string[];
};

export const experiences: Experience[] = [
  {
    role: "AI Software Engineer Intern",
    org: "Zones",
    location: "Austin, TX (Remote)",
    period: "Feb 2026 – Present",
    bullets: [
      "Contribute to enterprise-scale automation initiatives across AI-enabled workflow automation streams.",
      "Support development of AI models through dataset training, output validation, and root-cause analysis of order failures.",
      "Help define and validate deterministic business rules to auto-resolve known order failure scenarios.",
      "Document workflows, identify process inefficiencies, and help design and test automated workflows, UI enhancements, dashboards, and alerts.",
    ],
    tags: ["AI/ML", "Automation", "Python"],
  },
  {
    role: "ECE Lab Checkout Assistant",
    org: "UT Austin — Texas ECE",
    location: "Austin, TX",
    period: "Aug 2025 – Feb 2026",
    bullets: [
      "Support over 100 ECE students weekly by managing checkout and return of electronics lab equipment.",
      "Ensure 100% inventory accuracy for soldering kits, multimeters, and other specialized equipment.",
      "Provide guidance on required lab materials and their applications in solving experimental problems.",
    ],
    tags: ["Electronics", "Lab Management"],
  },
  {
    role: "Software Engineer Intern",
    org: "Predictive IRM",
    location: "Austin, TX (Remote)",
    period: "Jul 2022 – Aug 2023",
    bullets: [
      "Developed Salesforce Lightning Pages to assist with managing compliance with state requirements, complaint management, and issue management.",
      "Used JavaScript and Apex to create PDF generation for a Salesforce platform.",
      "Created risk management solutions to help companies maintain records and compliance with federal and state regulations.",
    ],
    tags: ["JavaScript", "Salesforce", "Apex"],
  },
];

export const earlierBackground = [
  { label: "Inspire Curiosity", detail: "National Student Educator & Head of TX Chapter — STEM education nonprofit (2022–2024)" },
  { label: "Mathnasium", detail: "Mathematics Instructor (2023–2024)" },
  { label: "Girl Scouts Gold Award", detail: "Highest Girl Scout achievement (2023)" },
  { label: "FACES Multicultural Club", detail: "Coordinator, St. Stephen's Episcopal School (2021–2024)" },
  { label: "Code Ninjas", detail: "Sensei — taught kids ages 7–14 JavaScript, Scratch & game creation (2018–2021)" },
];

export type Project = {
  title: string;
  period: string;
  tags: string[];
  summary: string;
  bullets: string[];
  category: "Software" | "Hardware" | "Electrical";
};

export const projects: Project[] = [
  {
    title: "Longhorn Networking App",
    period: "Nov 2025 – Dec 2025",
    tags: ["Java", "React.js", "Algorithms", "Multithreading"],
    category: "Software",
    summary:
      "A university social networking app using advanced graph algorithms to match roommates and surface career referral paths.",
    bullets: [
      "Implemented Gale-Shapley algorithm to match ideal roommate pairs based on student profiles.",
      "Used Dijkstra's algorithm to find the shortest referral path between students based on internship experience and relationships.",
      "Built multithreaded friend request and live chat functionality in Java.",
      "Designed an intuitive React.js frontend with clear, user-friendly functionality.",
    ],
  },
  {
    title: "Embedded Systems Video Game",
    period: "Apr 2025 – May 2025",
    tags: ["C++", "ARM Assembly", "TI-MSPM0", "Embedded Systems"],
    category: "Hardware",
    summary:
      "A choose-your-own-adventure game running on a TI-MSPM0 microcontroller, integrating analog input, sound output, and SPI-driven LCD graphics.",
    bullets: [
      "Designed and implemented the game on a TI-MSPM0 microcontroller using ARM assembly and C++.",
      "Integrated ADC-sampled slide potentiometer input, edge-triggered button interrupts, DAC-generated sound output, and SPI-controlled LCD graphics.",
      "Developed modular software architecture with separate driver modules for each peripheral.",
      "Implemented custom low-level drivers for switch debouncing, LED control, analog sampling, and multi-sprite animation.",
      "Engineered real-time ISRs for periodic ADC sampling and fixed-frequency DAC audio playback.",
    ],
  },
  {
    title: "Solar Powered Smoothie Cart",
    period: "Aug 2024 – Present",
    tags: ["Electrical Systems", "Solar", "Hardware", "Team Lead"],
    category: "Electrical",
    summary:
      "Electrical Lead on a student engineering team building a solar-powered cart with a latte art printer and renewable energy infrastructure.",
    bullets: [
      "Leading a team building and programming a latte art printer to print customer-chosen images onto drinks.",
      "Working with UT Austin faculty to calculate yield and assess feasibility of installing solar panels on campus.",
      "Replaced battery and solar charge controller in the cart's electrical system to improve efficiency and effectiveness.",
      "Assessing and optimizing the existing solar power system alongside a cross-functional team of engineers.",
    ],
  },
];

export type Skill = {
  category: string;
  items: string[];
};

export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["Java", "C", "C++", "Python", "JavaScript", "TypeScript", "ARM Assembly", "R", "Salesforce Apex"],
  },
  {
    category: "Web & Frameworks",
    items: ["React.js", "Next.js", "HTML/CSS", "Node.js"],
  },
  {
    category: "Hardware & Embedded",
    items: ["TI-MSPM0", "ARM Architecture", "SPI / I2C / UART", "ADC / DAC", "Soldering", "Multimeters"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git / GitHub", "Salesforce Lightning", "Salesforce Apex", "Linux", "VS Code"],
  },
];

export const honors = [
  { award: "ECLAIR Robotics Make-a-thon Design Award", issuer: "UT Austin", year: "Spring 2025" },
  { award: "National Merit Scholarship Finalist", issuer: "National Merit Scholarship Organization", year: "2024" },
];

export const courses = [
  "Software Design & Implementation I & II",
  "Computer Architecture",
  "Introduction to Embedded Systems",
  "Introduction to Electrical Engineering",
  "Introduction to Computing",
  "Discrete Mathematics",
  "Matrices & Matrix Calculations",
];
