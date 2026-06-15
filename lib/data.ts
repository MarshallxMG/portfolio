export const profile = {
  name: "Manas Goel",
  role: "Junior Data Engineer",
  tagline: "Big Data & Machine Learning Enthusiast",
  company: "M&G Global Services Private Limited",
  location: "Pune, Maharashtra, India",
  email: "manasgoel2003@gmail.com",
  phone: "+91 7456024482",
  links: {
    linkedin: "https://www.linkedin.com/in/manas-goel-34845a236/",
    github: "https://github.com/MarshallxMG",
    leetcode: "https://leetcode.com/u/IamManasGoel/",
    hackerrank: "https://www.hackerrank.com/profile/manasgoel2003",
  },
  about:
    "I am a Junior Data Engineer at M&G Global Services Private Limited, Pune. I design scalable data systems, build ETL/ELT workflows, develop machine learning solutions, and optimize analytical pipelines across the big-data stack.",
  focus: [
    "Data Engineering",
    "Big Data Analytics",
    "Machine Learning",
    "ETL Pipelines",
    "Distributed Computing",
    "Cloud Data Processing",
    "Data Visualization",
  ],
};

export const experience = [
  {
    company: "M&G Global Services Private Limited",
    role: "Junior Data Engineer",
    period: "April 2026 — Present",
    place: "Pune, Maharashtra",
    points: [
      "Building scalable ETL and ELT pipelines.",
      "Developing data ingestion and transformation workflows.",
      "Working with enterprise-scale datasets.",
      "Optimizing SQL queries and analytical processes.",
      "Supporting data warehousing and reporting solutions.",
      "Implementing data quality and validation checks.",
      "Collaborating with business and analytics teams.",
      "Automating data engineering processes.",
    ],
  },
  {
    company: "Freelance Backend & Data Tool Developer",
    role: "Backend / Data Engineer",
    period: "2023 — 2025",
    place: "Remote",
    points: [
      "Engineered custom SQL execution systems.",
      "Reduced query latency by 40%.",
      "Built multi-threaded processing systems.",
      "Developed data validation pipelines.",
      "Designed scalable backend architectures.",
    ],
  },
];

export const education = [
  {
    school: "Centre for Development of Advanced Computing (CDAC), Noida",
    degree: "PG Diploma in Big Data Analytics",
    period: "August 2025 — February 2026",
    detail: "Hadoop · Spark · NoSQL · Data Engineering · Grade A (83.38%)",
  },
  {
    school: "DIT University, Dehradun",
    degree: "B.Tech, Computer Science & Engineering",
    period: "September 2021 — March 2025",
    detail: "CGPA 7.11",
  },
];

export const skillGroups = [
  {
    title: "Data Engineering",
    items: ["Apache Spark", "PySpark", "Hadoop", "HDFS", "Hive", "YARN", "MapReduce", "ETL / ELT", "Data Warehousing"],
  },
  { title: "Programming", items: ["Python", "SQL"] },
  { title: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "TiDB"] },
  {
    title: "Machine Learning",
    items: ["Supervised Learning", "Unsupervised Learning", "Feature Engineering", "Model Evaluation"],
  },
  { title: "Tools", items: ["Git", "GitHub", "Power BI", "Render", "Vercel"] },
];

// Proficiency bars (self-rated focus areas)
export const proficiencies = [
  { name: "Python", value: 92 },
  { name: "SQL", value: 95 },
  { name: "PySpark / Spark", value: 88 },
  { name: "Hadoop Ecosystem", value: 82 },
  { name: "Machine Learning", value: 84 },
  { name: "Data Warehousing", value: 80 },
];

// Tech orbit — names rendered around a rotating ring
export const orbitTech = [
  "Spark", "Python", "SQL", "Hadoop", "Hive", "Kafka",
  "MongoDB", "PostgreSQL", "Power BI", "FastAPI", "Git", "Vercel",
];

export const project = {
  title: "Healthcare Fraud Detection System",
  slug: "healthcare-fraud-detection",
  blurb:
    "An end-to-end machine learning system that flags fraudulent healthcare claims in real time, served through production-grade prediction APIs.",
  tech: ["Python", "Scikit-Learn", "Gradient Boosting", "FastAPI"],
  metrics: [
    { label: "Claims Processed", value: 558000, suffix: "+", display: "558K+" },
    { label: "Model Accuracy", value: 94.82, suffix: "%" },
    { label: "Recall", value: 95.8, suffix: "%" },
    { label: "Inference", value: 100, prefix: "<", suffix: "ms" },
  ],
  achievements: [
    "Processed 558K+ healthcare claims through the pipeline.",
    "Achieved 94.82% classification accuracy on held-out data.",
    "Achieved 95.8% recall, prioritizing caught fraud over false alarms.",
    "Developed real-time fraud-prediction APIs with FastAPI.",
    "Built a scalable ML inference architecture for production traffic.",
  ],
  pipeline: ["Ingest Claims", "Clean & Validate", "Feature Engineering", "Gradient Boosting", "Fraud Score API"],
};

export const certifications = [
  { name: "SQL (Advanced)", issuer: "HackerRank", url: "https://www.hackerrank.com/certificates/iframe/2f1d2248eda8" },
  { name: "Software Engineer", issuer: "HackerRank", url: "https://www.hackerrank.com/certificates/iframe/392ce975f3ca" },
  { name: "Problem Solving (Intermediate)", issuer: "HackerRank", url: "https://www.hackerrank.com/certificates/iframe/3e0e6bf53eca" },
];

export const achievements = [
  { value: 558, suffix: "K+", label: "Claims processed in production ML pipeline" },
  { value: 94.82, suffix: "%", label: "Fraud-detection model accuracy" },
  { value: 40, suffix: "%", label: "Query latency reduction (freelance systems)" },
  { value: 4, suffix: "+", label: "Years building backend & data tools" },
];

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
