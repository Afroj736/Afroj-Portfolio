import { RESUME_PDF } from "../constants/resume.js";

// Placeholder images — swap these for real assets later.
export const IMAGES = {
  logo: "https://picsum.photos/seed/afroj-logo/120/120",
  portrait: "https://picsum.photos/seed/afroj-portrait/720/960",
};

export const PROFILE = {
  name: "AFROJ",
  handle: "afroj@qa-lab:~",
  email: "afroj.aero2020@dscet.ac.in",
  resume: RESUME_PDF,
};

export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Afroj736", display: "github.com/Afroj736" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/afroj-2b694822b", display: "linkedin.com/in/afroj" },
  { label: "Email", href: `mailto:${PROFILE.email}`, display: PROFILE.email },
];

export const NAV = [
  { id: "hero", label: "Intro", mobileLabel: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "experience", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export const HERO = {
  eyebrow: "Hi, I'm",
  lead: "testing products &",
  rotating: ["breaking bugs", "automating QA", "shipping quality"],
  summary:
    "QA Engineer specializing in manual, UI automation, API and database testing across healthcare, ERP and e-commerce products. Catching defects before your users do.",
  terminal: [
    { cmd: "whoami", out: ["Afroj — QA Engineer · Mohali, India"] },
    { cmd: "cat stack.txt", out: ["Selenium · Java · TestNG · REST Assured", "Postman · SQL · Jenkins · JIRA"] },
    { cmd: "mvn test -Dsuite=Regression", out: ["Tests run: 142, Failures: 0, Errors: 0", "BUILD SUCCESS [02:14 min]"] },
  ],
};

export const STATS = [
  { value: 200, suffix: "+", label: "Defects found" },
  { value: 500, suffix: "+", label: "Test cases" },
  { value: 60, suffix: "+", label: "Automated tests" },
  { value: 50, suffix: "+", label: "APIs validated" },
];

export const ABOUT = {
  title: "Breaking software",
  titleMuted: "so users never have to.",
  paragraphs: [
    "I'm a QA Software Tester working on healthcare, ERP and booking platforms — from EMR/EHR and HL7 workflows to billing, invoicing and appointment scheduling.",
    "I build Selenium + TestNG regression suites, REST Assured API checks and backend SQL validations, wired into Jenkins so every nightly build is verified before it ships.",
  ],
  status: "Open to QA / SDET opportunities",
  education: {
    label: "Certification",
    title: "Software Testing — Manual & Automation",
    org: "SSquare IT Solution, Pune",
    period: "2024",
  },
  learning: ["Playwright", "Performance Testing", "AI-assisted QA", "CI/CD Pipelines", "Mobile Testing"],
};

export const SKILL_ROWS = [
  ["Manual Testing", "Selenium WebDriver", "Java", "TestNG", "Maven", "Page Object Model", "Cucumber BDD"],
  ["Postman", "REST Assured", "Swagger", "SQL", "MySQL", "JSON Schema", "JWT / OAuth"],
  ["Jenkins", "Git", "GitHub", "JIRA", "JMeter", "Agile / Scrum", "Claude · ChatGPT · Cursor"],
];

export const FEATURED_PROJECTS = [
  {
    slug: "PLAYBACK-HEALTH-PRO",
    title: "Playback Health Pro",
    description:
      "End-to-end QA for audio-to-text clinical notes — transcription accuracy, note edit flows and pushing notes into EHR/EMR systems via HL7.",
    tags: ["Healthcare", "EMR/EHR", "API"],
    link: "#contact",
  },
  {
    slug: "PLAYBACK-HEALTH",
    title: "Playback Health",
    description:
      "Patient invite and record management QA — email/SMS delivery, onboarding status, permissions and UI-vs-API-vs-SQL data integrity.",
    tags: ["Patient Records", "SQL"],
    link: "#contact",
  },
];

export const PROJECTS = [
  {
    slug: "E-COMMERCE",
    title: "E-Commerce Platforms",
    description:
      "Automated purchase journeys on OpenCart, Sauce Labs and Flipkart-style flows — cart, checkout and payments across browsers.",
    tags: ["Selenium", "TestNG"],
  },
  {
    slug: "ERP",
    title: "ERP Applications",
    description:
      "Invoices, inventory, ledgers and stock reports — validated calculations and stock-vs-ledger balances with UI, API and SQL checks.",
    tags: ["Invoicing", "SQL"],
  },
  {
    slug: "API-SUITE",
    title: "Onboarding API Suite",
    description:
      "REST Assured suite covering 50+ endpoints — status codes, JSON schema, auth tokens and negative scenarios, verified against the DB.",
    tags: ["REST Assured", "Postman"],
  },
];

export const JOURNEY = [
  {
    year: "2024",
    title: "Software Testing Certification",
    text: "Trained at SSquare IT Solution, Pune — SDLC/STLC, test design, defect life cycle, Java, Selenium, TestNG, Postman and SQL.",
  },
  {
    year: "2024",
    title: "QA Tester — Levon Techno",
    text: "Functional and regression testing for e-commerce and IoT apps in Bangalore, with automated suites running through Jenkins.",
  },
  {
    year: "2025",
    title: "QA Tester — Blulabs IT Solutions",
    text: "Joined Blulabs in Mohali to test healthcare, ERP and booking products end to end: EMR/EHR, HL7, billing and scheduling.",
  },
  {
    year: "2025",
    title: "Automated the Regression Pack",
    text: "Built 60+ Selenium/TestNG regression tests on POM and a REST Assured API suite, running nightly in Jenkins CI/CD.",
  },
  {
    year: "2026",
    title: "Leading Bug Triage",
    text: "70+ pre-release defects caught and counting — driving triage and retesting across Agile sprints.",
    current: true,
  },
];
