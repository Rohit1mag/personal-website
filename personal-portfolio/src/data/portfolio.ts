export const profile = {
  name: "Rohit Kota",
  title: "Software Engineer",
  tagline: "Building full-stack systems, ML pipelines & software that actually ships",
  email: "rohitkota4@gmail.com",
  phone: "408-646-7291",
  linkedin: "https://linkedin.com/in/rohit-kota4/",
  github: "https://github.com/Rohit1mag",
  location: "San Luis Obispo, CA",
  citizenship: "US Citizen",
};

export const education = {
  school: "California Polytechnic State University - San Luis Obispo",
  degree: "Bachelor of Science in Computer Science",
  graduation: "December 2026",
};

export const skills = {
  languages: ["Java", "Python", "C++", "SQL", "JavaScript", "TypeScript", "HTML/CSS"],
  frameworks: ["React", "Next.js", "Node.js", "Express", "React Native", "FastAPI"],
  tools: ["Git", "Docker", "AWS", "GCP", "Firebase", "Supabase", "Typesense", "Tailwind CSS"],
  ml: ["Scikit-learn", "Pandas", "NLTK", "SciPy", "Seaborn"],
};

export const experience = [
  {
    company: "Livin",
    role: "Software Engineer",
    period: "Apr. 2025 – Jan. 2026",
    highlights: [
      "Architected real-time property and roommate search engine using Typesense with debouncing, cutting API calls and costs by 80% while serving 1,000+ users",
      "Built roommate compatibility matching algorithm evaluating 8+ criteria (lifestyle habits, budget, location, cleanliness) to surface personalized top matches per user",
      "Integrated Google Maps Places API to surface nearby amenities per listing, reducing tenant apartment search time",
      "Overhauled Firestore schema from nested to flat structure, reducing query latency by 30% (450ms → 315ms) across all user searches",
    ],
  },
  {
    company: "AWS/CSU AI Summer Camp",
    role: "Software Engineer",
    period: "Jul. 2025 – Aug. 2025",
    highlights: [
      "Engineered college transcript parser using Amazon Bedrock with chain-of-thought reasoning to extract CS course data across 15+ varied PDF formats with 94% accuracy",
      "Developed Streamlit web application that automatically maps transfer equivalencies between community colleges and CSU campuses, processing 3,000+ course records",
      "Deployed serverless backend with AWS Lambda and DynamoDB, achieving 150ms average query latency with auto-scaling infrastructure",
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

export const leadership = [
  {
    org: "Apple Next-Gen Innovators Program",
    role: "Mentee",
    period: "Sept. 2025 – Apr. 2026",
    description:
      "Selected for Apple's Next-Gen Innovators mentorship program, receiving 1:1 guidance from a software engineer on career development, technical growth, and navigating the industry",
  },
  {
    org: "CodeBox (Club)",
    role: "Technical Lead",
    period: "Nov. 2025 – Present",
    description:
      "Lead team of 10 developers building an app for incoming Cal Poly freshmen, overseeing architecture decisions, conducting code reviews, and mentoring members in modern development workflows",
  },
  {
    org: "Hack4Impact (Nonprofit)",
    role: "Technical Product Manager",
    period: "Oct. 2024 – Jun. 2025",
    description:
      "Led cross-functional team of 14 to deliver a web solution for a nonprofit client, conducting 20+ customer interviews and driving alignment between designers, engineers, and stakeholders",
  },
];

// Featured projects from resume + GitHub pinned
export const projects = [
  {
    name: "ReviewSense",
    description:
      "Full-stack AI review analysis platform using Next.js, FastAPI, and Llama 4 Maverick that processes YouTube comments and Google Maps reviews to generate sentiment clusters and actionable recommendations. Integrated YouTube Data API and Google Places API with Clerk authentication and usage tracking; deployed on Vercel and Render.",
    tech: ["Next.js", "FastAPI", "Llama 4", "YouTube API", "Google Places API", "Clerk", "Vercel", "Render"],
    link: "https://github.com/Rohit1mag/comment-insights",
    featured: true,
  },
  {
    name: "Vestline",
    description:
      "Equity vesting management tool for startup founders to track cap tables with configurable vesting schedules, cliff periods, and real-time progress visualizations. Clerk authentication with Supabase row-level security for multi-tenant isolation; deployed on Vercel.",
    tech: ["React", "TypeScript", "Supabase", "Clerk", "Recharts"],
    link: "https://github.com/Rohit1mag/vestline",
    featured: true,
  },
  {
    name: "Comment Insights",
    description: "Get high-quality feedback for your channel in one click! AI-powered YouTube comment analysis.",
    tech: ["Python"],
    link: "https://github.com/Rohit1mag/comment-insights",
    featured: false,
  },
  {
    name: "Indie Games EDA",
    description: "Exploratory Data Analysis on Indie Games dataset from Steam.",
    tech: ["Python", "Pandas", "Seaborn"],
    link: "https://github.com/Rohit1mag/indie-games-eda",
    featured: false,
  },
  {
    name: "MTG Cards Cluster Modeling",
    description: "Supervised and Unsupervised learning techniques on Magic: The Gathering card data.",
    tech: ["Python", "Jupyter", "Scikit-learn"],
    link: "https://github.com/Rohit1mag/mtg-cards-cluster-modeling",
    featured: false,
  },
  {
    name: "IMDB Parser",
    description: "Parses articles on the IMDB site and creates a sorted table of movies by rating.",
    tech: ["Python"],
    link: "https://github.com/Rohit1mag/imdb-parser",
    featured: false,
  },
  {
    name: "AuraFarm",
    description: "Campus app for freshmen built with CodeBox team.",
    tech: ["React", "Firebase"],
    link: "https://github.com/codebox-calpoly/AuraFarm",
    featured: false,
  },
];
