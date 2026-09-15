import { Project, ExperienceItem, SkillNode, BlogPost, Testimonial } from "./types";

export const projectsData: Project[] = [
  {
    id: "dhruvprep",
    name: "dhruvprep (PyPI Package)",
    shortDescription: "A published Python machine learning data preprocessing library with 6+ modular utilities.",
    longDescription: "Architected and published an open-source Python preprocessing package featuring modular utilities for automated data quality checks, feature scaling, categorical encoding, and multicollinearity detection. Streamlined ML pipelines across 5K+ record datasets.",
    techStack: ["Python", "PyPI", "Scikit-learn", "Pandas", "NumPy"],
    problemSolved: "Manual feature scaling, encoding, and multicollinearity checks introduce repetitive code and data leakage. Built reusable pipelines that streamlined data preparation by 60–70%.",
    keyMetrics: [
      { label: "Efficiency Gain", value: "60-70%" },
      { label: "Modular Utilities", value: "6+" },
      { label: "Dataset Scale", value: "5K+ Records" }
    ],
    liveLink: "https://pypi.org/project/dhruvprep/",
    codeLink: "https://github.com/Dhruv-Pahwa/dhruvprep",
    image: "https://picsum.photos/seed/dhruvprep/800/600",
    status: "live",
    category: "Data Science",
    featured: true
  },
  {
    id: "generative-transformer-15m",
    name: "15M-Param Decoder Transformer",
    shortDescription: "Decoder-only Generative Transformer language model built from scratch in PyTorch.",
    longDescription: "Architected and trained a 15M-parameter decoder-only Transformer model from scratch using PyTorch. Implemented multi-head self-attention mechanisms, custom tokenization, training pipeline, and automated evaluation checkpoints.",
    techStack: ["PyTorch", "Python", "Transformers", "Hugging Face", "Generative AI"],
    problemSolved: "Off-the-shelf fine-tuning hides core attention mechanics. Built custom validation checkpoints and achieved a final training loss of 1.24 (40% reduction over 10 epochs).",
    keyMetrics: [
      { label: "Model Parameters", value: "15M" },
      { label: "Loss Reduction", value: "40%" },
      { label: "Final Loss", value: "1.24" }
    ],
    liveLink: "https://github.com/Dhruv-Pahwa",
    codeLink: "https://github.com/Dhruv-Pahwa",
    image: "https://picsum.photos/seed/transformer15m/800/600",
    status: "live",
    category: "AI & ML",
    featured: true
  },
  {
    id: "secure-file-transfer",
    name: "Secure File Transfer Workflows",
    shortDescription: "End-to-end secure file transfer platform with automated recovery workflows built during IIT Roorkee research internship.",
    longDescription: "Designed and validated end-to-end workflows for a secure file transfer platform across distributed systems. Tested automated recovery processes through negative and edge-case scenarios with 100% traceable audit logging.",
    techStack: ["Python", "Distributed Systems", "System Architecture", "Fault Tolerance", "Logging"],
    problemSolved: "Distributed file recovery failures and untracked audit logs create data compliance risks. Enabled 80% faster file recovery with 100% traceable audit logs.",
    keyMetrics: [
      { label: "Recovery Speed", value: "+80%" },
      { label: "Audit Traceability", value: "100%" },
      { label: "System Reliability", value: "High" }
    ],
    liveLink: "#",
    codeLink: "https://github.com/Dhruv-Pahwa",
    image: "https://picsum.photos/seed/iitroorkee/800/600",
    status: "internal",
    category: "Systems",
    featured: false
  },
  {
    id: "decentralized-identity-etl",
    name: "Decentralized Identity ETL Pipeline",
    shortDescription: "Smart contract deployment & identity ETL pipelines engineered during DRDO internship.",
    longDescription: "Evaluated smart-contract deployment using Hardhat and OpenZeppelin across 3+ security pipelines. Built decentralized-identity ETL pipelines to support data engineering initiatives across multi-geography engagements.",
    techStack: ["Hardhat", "OpenZeppelin", "Solidity", "ETL", "Python", "Data Engineering"],
    problemSolved: "High access-control overhead and fragmented security pipelines. Reduced access-control overhead by 35% and defined operational KPIs for cross-functional teams.",
    keyMetrics: [
      { label: "Overhead Reduced", value: "35%" },
      { label: "Security Pipelines", value: "3+" },
      { label: "Teams Managed", value: "4" }
    ],
    liveLink: "#",
    codeLink: "https://github.com/Dhruv-Pahwa",
    image: "https://picsum.photos/seed/drdopipeline/800/600",
    status: "internal",
    category: "Systems",
    featured: false
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "apple",
    company: "Apple Design",
    role: "Product Lead & Digital Architect",
    duration: "2024 - Present",
    location: "Cupertino, CA / Remote",
    status: "Active",
    impactMetrics: [
      "Leading the design-to-production compiler framework for responsive web layouts and spatial computing canvases.",
      "Pioneered AI-driven prototyping compilers, cutting internal concept-to-prototype cycles from 3 weeks to 9 minutes.",
      "Mentoring a multi-disciplinary team of 12 design-engineers across hardware, graphics, and system platforms."
    ],
    achievements: [
      "Conceived micro-interaction specifications adopted in macOS 16 UI standards.",
      "Secured 3 patents on context-aware ambient frame layout adjustment algorithms."
    ],
    techStack: ["TypeScript", "Swift", "WebGPU", "PyTorch", "Canvas API", "Siri Services"]
  },
  {
    id: "linear",
    company: "Linear",
    role: "Lead AI Architect",
    duration: "2022 - 2024",
    location: "San Francisco, CA / Remote",
    status: "Completed",
    impactMetrics: [
      "Built the intelligent keyboard command interface, processing 2.4B keyboard shortcuts per week with zero client latency.",
      "Engineered a lightweight client-side project categorization engine using vectorized offline embeddings.",
      "Led the core SQLite state synchronization systems, enhancing data transaction durability under patchy, offline mobile signals."
    ],
    achievements: [
      "Reduced collaborative synchronization lag on desktop devices globally down to 12ms.",
      "Introduced AI-assisted auto-routing triage systems that solved 46% of support tickets autonomously."
    ],
    techStack: ["Go", "Rust", "SQLite", "WASM", "React", "KubeFlow"]
  },
  {
    id: "vercel",
    company: "Vercel",
    role: "Systems Engineer",
    duration: "2020 - 2022",
    location: "San Francisco, CA",
    status: "Completed",
    impactMetrics: [
      "Optimized Edge Function runtime warmups and client-side code splitting loaders for high-scale sites.",
      "Re-architected Server-Side Rendering (SSR) cache pipelines at the proxy level on Cloudflare/AWS layers.",
      "Authored open-source React streaming bundles facilitating early-HTML shell chunk pushes."
    ],
    achievements: [
      "Decreased international cold-start overhead inside serverless processes by an average of 42%.",
      "Pioneered critical CSS extraction features now standard in top-tier deployment builds."
    ],
    techStack: ["Node.js", "C++", "Docker", "AWS", "Shell Scripting", "React Server Components"]
  }
];

export const skillsData: SkillNode[] = [
  // Deep Learning & GenAI
  { name: "PyTorch", proficiency: 96, category: "AI & ML", experienceYears: 3, details: "Building custom neural networks, Transformer architectures, training loops, and loss optimization." },
  { name: "Transformers & Hugging Face", proficiency: 95, category: "AI & ML", experienceYears: 2, details: "Architecting decoder-only models, attention mechanisms, fine-tuning, and model evaluation." },
  { name: "Generative AI & LLMs", proficiency: 94, category: "AI & ML", experienceYears: 2, details: "Developing prompt pipelines, RAG implementations, LangChain, and Agentic AI systems." },
  { name: "Scikit-learn", proficiency: 95, category: "AI & ML", experienceYears: 3, details: "Regression, classification, ensemble methods, dimensionality reduction, clustering, and cross-validation." },

  // Data Science & Analytics
  { name: "Python", proficiency: 98, category: "Data Science", experienceYears: 4, details: "Primary language for data science, ML engineering, PyPI packages, and algorithm design." },
  { name: "SQL & Data Modeling", proficiency: 95, category: "Data Science", experienceYears: 3, details: "Writing complex analytical queries, schema optimization, dimensional modeling, and ETL pipelines." },
  { name: "Pandas & NumPy", proficiency: 97, category: "Data Science", experienceYears: 4, details: "High-performance vector operations, data manipulation, cleaning, and preprocessing." },
  { name: "Feature Engineering", proficiency: 94, category: "Data Science", experienceYears: 3, details: "Multicollinearity detection, categorical encoding, scaling, and feature selection." },
  { name: "Statistical Analysis", proficiency: 92, category: "Data Science", experienceYears: 3, details: "Exploratory data analysis, hypothesis testing, probability distributions, and evaluation metrics." },

  // Systems & Data Engineering
  { name: "ETL & Spark", proficiency: 90, category: "Systems", experienceYears: 2, details: "Building decentralized ETL pipelines, data streaming, and Apache Spark transformations." },
  { name: "AWS & Docker", proficiency: 88, category: "Systems", experienceYears: 2, details: "AWS Cloud Essentials, server deployment, containerization, MLflow, and cloud workflows." },
  { name: "Vector Databases", proficiency: 90, category: "Systems", experienceYears: 2, details: "Indexing and querying high-dimensional embeddings for vector search and RAG." },
  { name: "Streamlit & Flask", proficiency: 92, category: "Systems", experienceYears: 2, details: "Building interactive ML dashboards, web endpoints, and REST APIs for model deployment." },

  // Visualization & Leadership (Consulting)
  { name: "Power BI & Tableau", proficiency: 94, category: "Tools", experienceYears: 3, details: "Interactive executive dashboards, automated reporting, DAX queries, and KPI tracking." },
  { name: "Stakeholder Management", proficiency: 95, category: "Tools", experienceYears: 3, details: "Co-leading Corporate Club (11 members), organizing 5+ client sessions for 200+ students." },
  { name: "Agile & Product Delivery", proficiency: 93, category: "Tools", experienceYears: 3, details: "Translating business requirements into technical specs, managing sprint workflows and project roadmaps." }
];

export const blogPostsData: BlogPost[] = [
  {
    id: "latency-state-sync",
    title: "Designing Latency Out of State Sync Systems",
    readingTime: "4 min read",
    date: "June 12, 2026",
    category: "Technical",
    preview: "How we compressed our real-time synchronization packets down to 12ms utilizing custom-clocked CRDTs and binary delta serialization.",
    content: `
### The Latency Challenge in Modern Collaboration

When multiple users coordinate on a virtual workspace, every keystroke translates to network transactions. Under high user concurrency, standard RESTful schemas fail, resulting in write collisions, state conflicts, and broken cursor alignments.

To design a truly lag-free experience, we must challenge the conventional client-server state model. Our goal: reduce global synchronization delays to under **12ms**.

#### Step 1: The Death of JSON over HTTP
JSON is readable but incredibly verbose. Serializing simple object schemas (e.g. coordinates or mouse actions) creates massive overhead.

\`\`\`json
// Verbose, bulky, and slow
{ "action": "cursor-move", "userId": "usr_998234", "x": 1024, "y": 768, "timestamp": 1782394231 }
\`\`\`

By migrating core websocket pipelines to **Protocol Buffers (protobuf)**, we serialized the payload into compact binary byte buffers, stripping structural string keys completely.

#### Step 2: Adaptive Local CRDTs
Conflict-free Replicated Data Types (CRDTs) allow edits to be processed *locally* first, with zero handshake requirements. The system merges changes asynchronously. Below is the primary synchronization flow:
1. **User Action:** State is modified on local device in real-time.
2. **Binary Serializer:** Action is packed on a secondary Web Worker thread.
3. **Queue & Broadcast:** Delta is streamed via active WebSocket.
4. **Vector Merge:** Remote client decodes delta and applies vector clock order resolution.

#### Key Metrics Achieved
- **Synchronization Lag:** Decreased from an average of **118ms** down to **12ms** under standard cellular connections.
- **Overhead:** Reduced from 124 bytes per frame down to just **16 bytes**.
- **CPU Idle Margin:** Improved by 35% on mobile devices by avoiding manual main-thread parsing loops.

*Crafting distributed infrastructure requires extreme discipline, but the reward is software that feels like an extension of thought.*
`
  },
  {
    id: "neural-portfolio-clone",
    title: "How I Engineered My Virtual Neural Clone",
    readingTime: "5 min read",
    date: "May 28, 2026",
    category: "AI & Systems",
    preview: "An inside look at building the server-side LLM agent proxy that powers this website's Command Center interactive chatbot experience.",
    content: `
### Bringing the Web to Life with AI Agents

Most personal portfolio websites are static display cards. They feel like museum exhibits—neat to look at, but completely passive. To create a memorable, premium impression, I wanted to build a digital sandbox.

Welcome to my **Neural Digital Double**—an interactive Gemini-powered clone integrated right into this portfolio's command deck.

#### The Architectural Blueprint
To keep the digital double secure and fast, we enforce a strict separation of concerns:

1. **The Core LLM:** Powered server-side by the \`gemini-3.5-flash\` model for high intelligence and immediate execution limits.
2. **The Context Injector:** A precise system prompt encoding my exact technical history, values, and experience structure.
3. **The API Proxy:** A safe server-side endpoint in Express, shielding the user's browser from seeing any development keys.

#### Injecting Context Safely
By using a robust system instruction framework, we dictate the agent's persona:

\`\`\`typescript
const systemInstruction = "You are the Digital Double of Dhruv Pahwa...";
\`\`\`

The model learns to speak in first-person, maintaining a minimal, precise "Apple/Linear" design voice. It knows my favorite libraries, my recent patents, and my precise Lucknow map coordinate settings.

#### Results & User Experience
By serving the AI model completely server-side via the secure \`@google/genai\` SDK, we create an ultra-safe, high-speed, and deeply interactive agent that can answer technical queries, draft emails, or tell funny developer humors.

It's not just a bio—it's a living sandbox that demonstrates exact mastery of AI and modern engineering.
`
  },
  {
    id: "minimalist-ui-luxury",
    title: "The Silent Luxury of Minimal User Interfaces",
    readingTime: "3 min read",
    date: "April 15, 2026",
    category: "Product Design",
    preview: "Why the quietest dashboards showcase the loudest competence. A manifesto on restraint in product engineering.",
    content: `
### The Power of Restraint in Design

We live in an era of design over-stimulation. Websites yell for your attention with glowing borders, pop-up notifications, aggressive banners, and unrequested AI summaries.

But if you look at companies like **Apple**, **Stripe**, and **Linear**, you discover a different philosophy: **Silent Luxury**.

#### 1. Density over Noise
A minimal design is not empty. In fact, a truly elegant layout is incredibly dense with details—but they are silent.
- **Typography:** Choosing a perfect typeface pairing (like *Inter* for legible data grids and *Satoshi* or *Space Grotesk* for bold showcase numbers).
- **Whitespace:** Giving elements enough room to breathe. When components have healthy margins, they command authority.
- **Micro-interactions:** A button should have a spring-guided hover reaction, rather than a jarring color flip. It should feel mechanical, fluid, and satisfying.

#### 2. The OS Dashboard Layout
Instead of an endless scrolling website where every block is a marketing callout, our "Digital Architect" theme uses a **dashboard interface**.
Everything fits on a unified screen grid. You enter, explore, and direct your actions like a pilot in a command center. Content is not scrolled; it is operated.

#### Summary Rule
*If an element does not directly help the user understand, filter, or process information—delete it. True luxury is having exactly what you need, with supreme fit and finish.*
`
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "collins",
    name: "Marcus Collins",
    role: "VP of Product",
    company: "Linear",
    review: "Dhruv understands systems at a depth we rarely see in design-engineers. He rebuilt our entire real-time keyboard map protocol, combining extreme responsiveness with gorgeous micro-interactions.",
    image: "https://picsum.photos/seed/marcus/100/100"
  },
  {
    id: "elena",
    name: "Elena Rostova",
    role: "Director of Interactive",
    company: "Apple",
    review: "The prototyping compiler Dhruv built revolutionized how we pitch native microscale animation behaviors to executives. He writes production and research-level code with equal skill.",
    image: "https://picsum.photos/seed/elena/100/100"
  },
  {
    id: "sarah",
    name: "Sarah Jenkins",
    role: "Lead Engineer",
    company: "Vercel",
    review: "Dhruv has a relentless eye for performance. He dissected our edge function asset bundlers, trimming critical hydration stages and saving millions on compute resources.",
    image: "https://picsum.photos/seed/sarah/100/100"
  }
];
