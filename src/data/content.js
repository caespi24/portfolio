export const siteMeta = {
  name: "Christian A. Espiridion",
  role: "Web Developer & Automation Specialist",
  location: "Cabuyao City, Laguna, Philippines",
  email: "cespiridion.corpwork@gmail.com",
  phone: "+639206954789",
  phonePretty: "+63 920 695 4789",
  linkedin: "https://www.linkedin.com/in/espiridion-christian-a-0a2a63254",
  portrait: "/main-pic.png",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const heroStats = [
  { value: 8, suffix: "+", label: "Projects shipped" },
  { value: 1, suffix: "+", label: "Years experience" },
  { value: 3, suffix: "", label: "Core platforms" },
];

/*
 * Featured projects. To swap in a real screenshot, set `image` to the
 * imported/`public` path (e.g. image: "/projects/lah-lah.webp") — the card
 * lazy-loads it automatically and drops the gradient placeholder.
 */
export const projects = [
  {
    id: "lah-lah",
    title: "Lah-Lah",
    category: "Shopify",
    description:
      "Development and customization of the Lah-Lah Shopify store — product listings, collections, navigation structure, theme customization, and mobile responsiveness improvements.",
    role: "Shopify Developer",
    tags: ["Shopify", "Liquid", "Theme Customization", "Responsive Design"],
    gradient: "from-rose-500 via-orange-400 to-amber-300",
    mark: "Lah",
    image: "/projects/lahlah.png",
  },
  {
    id: "chiro-ads",
    title: "Chiro Ads Landing Page",
    category: "GoHighLevel",
    description:
      "High-converting Google Ads landing page for Pukekohe Chiropractic — built in GHL, later migrated to WordPress for flexibility and performance. Conversion-focused design with optimized CTAs and fast-loading sections.",
    role: "Web / GHL Developer",
    tags: ["GoHighLevel", "WordPress", "Google Ads", "CRO"],
    gradient: "from-sky-500 via-blue-500 to-indigo-400",
    mark: "Chiro",
    image: "/projects/chiro-ads.png",
  },
  {
    id: "sleep-workshop",
    title: "The Ultimate Sleep Workshop",
    category: "GoHighLevel",
    description:
      "High-converting funnel page for a wellness campaign — persuasive design elements, testimonials, responsive layouts, and booking/registration flows integrated with GHL automation.",
    role: "Funnel Builder & Automation Specialist",
    tags: ["GoHighLevel", "CRM Automation", "Landing Page Design", "Automated Workflows"],
    gradient: "from-indigo-600 via-violet-500 to-purple-400",
    mark: "Sleep",
    image: "/projects/sleep-workshop.png",
  },
  {
    id: "nourishu",
    title: "NourishU",
    category: "App Dev",
    description:
      "Responsive web app that helps users monitor daily nutrient intake — personalized dietary features, real-time macro/micronutrient logging, and color-coded interactive charts for health monitoring.",
    role: "Lead Developer",
    tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
    gradient: "from-emerald-500 via-teal-400 to-lime-300",
    mark: "NU",
    image: "/projects/nourishu.jpg",
  },
];

export const moreProjects = [
  { title: "OMS Soccer Systems", type: "WordPress Website", tags: ["WordPress", "Elementor Pro"] },
  { title: "Global Elite Institute of Technology", type: "WordPress Website", tags: ["WordPress", "Responsive Design"] },
  { title: "AI for Executives", type: "Landing Page", tags: ["Landing Page", "CRO"] },
  { title: "Van Dacy Perfume Shop", type: "E-Commerce Store", tags: ["E-Commerce", "Theme Customization"] },
  { title: "Sunday", type: "Python Voice Assistant", tags: ["Python", "Speech Recognition"] },
];

export const services = [
  {
    icon: "layout",
    title: "WordPress Development",
    description: "Custom Elementor Pro builds, responsive design, and performance optimization that keeps sites fast and easy to manage.",
  },
  {
    icon: "bag",
    title: "Shopify Store Development",
    description: "Storefront builds, theme customization, and UX improvements that make browsing and buying feel effortless.",
  },
  {
    icon: "funnel",
    title: "GoHighLevel Funnels",
    description: "Full funnel builds with CRM automation, booking flows, and pipeline integration — from first click to closed deal.",
  },
  {
    icon: "target",
    title: "Landing Page Design",
    description: "Conversion-focused pages for ad campaigns, engineered around one goal: turning paid traffic into leads.",
  },
  {
    icon: "zap",
    title: "Workflow & Email Automation",
    description: "Follow-up sequences, lead nurturing, and CRM pipelines that keep working long after business hours.",
  },
  {
    icon: "sparkles",
    title: "AI & Prompt Engineering",
    description: "Practical AI workflow automation — using the right prompts and tools to remove repetitive work from your day.",
  },
];

export const skillGroups = [
  { label: "Languages", items: ["Python", "Java", "C++", "SQL"] },
  { label: "Web Development", items: ["HTML", "CSS", "JavaScript", "WordPress", "Elementor Pro", "Shopify"] },
  { label: "AI / Automation", items: ["AI Fundamentals", "Prompt Engineering", "CRM Automation", "Workflow Automation"] },
  { label: "Tools & Platforms", items: ["Git", "Android Studio", "GoHighLevel", "GoDaddy"] },
  { label: "Core Competencies", items: ["Problem Solving", "UI/UX Optimization", "Team Collaboration"] },
];

export const experience = [
  {
    period: "June 2025 — Present",
    role: "Web Developer",
    org: "Freelancer",
    blurb:
      "Building and maintaining client websites, landing pages, and funnels across WordPress, Shopify, and GoHighLevel — from design and development through launch and automation.",
  },
  {
    period: "Jan 2024 — July 2025",
    role: "Technology Education Trainer",
    org: "Global Elite Institute of Technology",
    blurb:
      "Delivered technology training covering programming, web development, and AI fundamentals, guiding students through hands-on projects.",
  },
];

export const education = [
  {
    credential: "BS Computer Engineering",
    school: "Pamantasan ng Cabuyao",
    year: "2023",
    note: null,
  },
  {
    credential: "Senior High School — STEM",
    school: "Pamantasan ng Cabuyao",
    year: "2019",
    note: "With Honors",
  },
  {
    credential: "Junior High School",
    school: "Cabuyao National High School",
    year: "2017",
    note: "With Honors",
  },
];

export const certifications = [
  "Object Oriented Programming in Java Specialization — Coursera",
  "IBM Artificial Intelligence Fundamentals",
  "IBM Data Fundamentals",
  "TESDA Creative Web Design",
  "TESDA Trainer's Methodology I (TM1)",
  "Practical AI Masterclass: Mastering Prompt Engineering",
];

export const marqueeItems = [
  "WordPress",
  "Shopify",
  "GoHighLevel",
  "Elementor Pro",
  "Landing Pages",
  "CRM Automation",
  "JavaScript",
  "Python",
  "AI Workflows",
  "UI/UX",
];
