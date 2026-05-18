export const profile = {
  name: "Rohit Kota",
  title: "Co-Founder & CTO · Software Engineer",
  tagline:
    "Technical architecture for shipping products—React Native & Supabase ride-sharing at Scoop, search & matching at Livin, and AWS Bedrock–powered tooling.",
  email: "rohitkota4@gmail.com",
  phone: "408-646-7291",
  linkedin: "https://linkedin.com/in/rohit-kota4/",
  github: "https://github.com/Rohit1mag",
  location: "San Luis Obispo, CA",
  citizenship: "US Citizen",
};

export const education = {
  school: "California Polytechnic State University – San Luis Obispo",
  degree: "Bachelor of Science in Computer Science",
  graduation: "December 2026",
};

/** Mirrors resume “Technical Skills” (Languages / Tools & Libraries). */
export const skills = {
  languages: [
    "Python",
    "JavaScript / TypeScript",
    "React",
    "Next.js",
    "Express",
    "React Native",
    "C++",
    "SQL",
  ],
  toolsAndLibraries: [
    "FastAPI",
    "Supabase",
    "AWS (Bedrock, Lambda, DynamoDB)",
    "Firebase",
    "Docker",
    "Scikit-learn",
    "Pandas",
  ],
};

export const experience = [
  {
    company: "Scoop Technologies LLC",
    role: "Co-Founder & CTO",
    period: "Apr. 2026 – Present",
    highlights: [
      "Leading all technical architecture for an on-demand group ride-sharing platform built on React Native, Supabase, and Stripe",
      "Recruiting and managing software engineering interns; overseeing backend infrastructure, payments, and real-time trip tracking systems from zero to App Store approval",
    ],
  },
  {
    company: "Livin",
    role: "Founding Engineer",
    period: "Apr. 2025 – Jan. 2026",
    highlights: [
      "Architected real-time property and roommate search engine using Typesense with debouncing, cutting API calls and costs by 80% while serving 1,000+ users",
      "Built roommate compatibility matching algorithm evaluating 8+ criteria (lifestyle habits, budget, location, cleanliness) to surface personalized top matches per user",
      "Integrated Google Maps API to surface nearby amenities per listing, reducing apartment search time by 40%",
      "Overhauled Firestore schema from nested to flat structure, reducing query latency by 30% (450ms → 315ms) across all user searches",
    ],
  },
  {
    company: "AWS AI Summer Program",
    role: "Software Engineer",
    period: "Jul. 2025 – Aug. 2025",
    highlights: [
      "Engineered college transcript parser using Amazon Bedrock with chain-of-thought reasoning to extract CS course data across 15+ varied PDF formats with 94% accuracy",
      "Developed Streamlit web application that automatically maps transfer equivalencies between community colleges and CSU campuses, processing 3,000+ course records",
      "Deployed serverless backend on AWS Lambda and DynamoDB, achieving 150ms average query latency",
    ],
  },
  {
    company: "Cal Poly SLO",
    role: "Machine Learning Researcher",
    period: "Jun. 2025 – Aug. 2025",
    highlights: [
      "Built Python ETL pipeline processing 1,090-response survey dataset on sustainability literacy, implementing data cleaning, transformation, and statistical analysis with pandas, scikit-learn, and NLTK",
      "Applied LDA topic modeling to cluster 500+ free-text responses and generated insight visualizations with seaborn",
      "Automated statistical testing workflows (chi-square, regression, R2) with reusable Python scripts, reducing manual computation time by 75%",
    ],
  },
];

export type LeadershipEntry = {
  org: string;
  role: string;
  period: string;
  description?: string;
  bullets?: string[];
};

export const leadership: LeadershipEntry[] = [
  {
    org: "CodeBox",
    role: "Technical Lead",
    period: "Nov. 2025 – Present",
    bullets: [
      "Led team of 10 developers building Aura Farm, a location-based social challenge app for Cal Poly students built with React Native, Expo, and Supabase; on the Apple App Store",
      "Oversaw architecture decisions across auth, real-time leaderboard, image upload pipeline, and GPS-verified challenge submission; conducted code reviews and mentored members in modern mobile development workflows",
    ],
  },
  {
    org: "Apple Next-Gen Innovators Program",
    role: "Mentee",
    period: "Sep. 2025 – Present",
    description:
      "Selected for Apple's competitive Next-Gen Innovators mentorship program, receiving 1:1 guidance from a senior software engineer on career development, technical growth, and navigating the industry",
  },
  {
    org: "Hack4Impact",
    role: "Technical Product Manager",
    period: "Oct. 2024 – Jun. 2025",
    bullets: [
      "Led cross-functional team of 14 to deliver a web solution for a nonprofit client, conducting 30+ customer interviews and driving alignment between designers, engineers, and stakeholders",
    ],
  },
];

export type ProjectEntry = {
  name: string;
  description: string;
  tech: string[];
  period?: string;
  link: string;
  featured: boolean;
};

/** Resume Projects section + GitHub links where applicable */
export const projects: ProjectEntry[] = [
  {
    name: "ReviewSense",
    period: "Nov. 2025 – Jan. 2026",
    description:
      "Built full-stack AI review analysis platform using Next.js, FastAPI, and Kimi K2.5 that processes YouTube comments and Google Maps reviews to generate sentiment clusters and actionable recommendations. Integrated YouTube Data API and Google Places API with Clerk authentication; deployed production SaaS app on Vercel and Render.",
    tech: ["Next.js", "FastAPI", "Kimi K2.5", "YouTube API", "Google Places API", "Clerk", "Vercel", "Render"],
    link: "https://github.com/Rohit1mag/comment-insights",
    featured: true,
  },
  {
    name: "Vestline",
    period: "Jan. 2026 – Apr. 2026",
    description:
      "Developed equity vesting management tool for startup founders to track cap tables with configurable vesting schedules, cliff periods, and real-time progress visualizations. Implemented Clerk authentication with Supabase row-level security and a Gemma 4 (31B params) chatbot for natural language queries with sub-200ms response times.",
    tech: ["React", "TypeScript", "Supabase", "Clerk", "Recharts", "Gemma 4"],
    link: "https://github.com/Rohit1mag/vestline",
    featured: true,
  },
];
