export const profile = {
  name: "Rohit Kota",
  title: "Software Engineer",
  tagline: "Building full-stack systems, ML pipelines & real-time search",
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
  languages: ["Java", "Python", "C/C++", "MySQL", "JavaScript", "TypeScript", "HTML/CSS"],
  frameworks: ["React", "Next.js", "Node.js", "Express", "React Native", "FastAPI"],
  tools: ["Git", "Docker", "AWS", "GCP", "Firebase", "Postman", "Typesense"],
  ml: ["Scikit-learn", "Seaborn", "Pandas", "SciPy", "NLTK"],
};

export const experience = [
  {
    company: "Livin",
    role: "Software Engineer",
    period: "Apr. 2025 – Jan. 2026",
    highlights: [
      "Architected real-time property and roommate search engine using Typesense with debouncing, reducing API calls and costs by 80% while serving 1,000+ users",
      "Created roommate compatibility matching algorithm evaluating 8+ criteria (lifestyle habits, budget range, location preferences, cleanliness) to surface top matches per user",
      "Integrated Google Maps Places API to display nearby amenities for each property listing, reducing apartment search time",
      "Overhauled Firestore database schema from nested to flat structure, reducing query latency by 30% (450ms → 315ms)",
    ],
  },
  {
    company: "AWS/CSU AI Summer Camp",
    role: "Software Engineer",
    period: "Jul. 2025 – Aug. 2025",
    highlights: [
      "Engineered college transcript parser using Amazon Bedrock with chain-of-thought reasoning to extract CS course data across 15+ varied PDF formats with 94% accuracy",
      "Developed web application with Streamlit that automatically maps transfer equivalencies between community colleges and CSU campuses, processing 3,000+ course records",
      "Deployed serverless backend with AWS Lambda and DynamoDB, achieving 150ms average query latency with auto-scaling infrastructure",
    ],
  },
  {
    company: "Cal Poly SLO",
    role: "Machine Learning Researcher",
    period: "Jun. 2025 – Aug. 2025",
    highlights: [
      "Built Python ETL pipeline processing 1,090-response survey dataset on sustainability literacy with pandas, scikit-learn, and NLTK",
      "Implemented LDA topic modeling to cluster 500+ free-text responses, generating visualizations with seaborn and matplotlib",
      "Automated statistical testing workflows (chi-square, regression, R²) with reusable Python scripts, reducing manual computation time by 75%",
    ],
  },
  {
    company: "Spread Goodness LLC",
    role: "Software Engineer Intern",
    period: "Jan. 2025 – Jun. 2025",
    highlights: [
      "Designed and maintained responsive React.js web application with Firebase integration, implementing secure authentication and real-time database operations",
      "Collaborated in Agile workflows, participating in weekly code reviews and sprint planning to deliver 10+ key features on schedule",
    ],
  },
];

export const leadership = [
  {
    org: "CodeBox (Club)",
    role: "Technical Lead",
    period: "Nov. 2025 – Present",
    description: "Led team of 10 developers in building app targeted towards campus freshmen, overseeing technical architecture, code reviews, and mentoring in modern development workflows",
  },
  {
    org: "Hack4Impact (Nonprofit)",
    role: "Technical Product Manager",
    period: "Oct. 2024 – Jun. 2025",
    description: "Led cross-functional team of 14 in delivering web solution for nonprofit, conducting 20+ customer interviews, iterating with designers and establishing technical direction",
  },
];

// Featured projects from resume + GitHub pinned
export const projects = [
  {
    name: "ReviewSense",
    description: "Full-stack AI-powered review analysis platform using Next.js, FastAPI, and Llama 4 that processes YouTube comments and Google Maps reviews to generate actionable recommendations and sentiment clusters.",
    tech: ["Next.js", "FastAPI", "Llama 4", "YouTube API", "Google Places API", "Clerk", "Vercel", "Render"],
    link: "https://github.com/Rohit1mag/comment-insights",
    featured: true,
  },
  {
    name: "GhostHire",
    description: "Job listing platform that sources only from non-mainstream sources so you can gain an edge in the job search.",
    tech: ["Python"],
    link: "https://github.com/Rohit1mag/ghosthire",
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
