import { Project, ExperienceItem, SkillNode, BlogPost, Testimonial } from "./types";

export const projectsData: Project[] = [
  {
    id: "amorphic-ai",
    name: "Amorphic AI",
    shortDescription: "A next-generation neural engine performing real-time video compositing and spatial styling at the edge.",
    longDescription: "An experimental media synthesizer that runs deep neural stylization networks in-browser. Built to study human-computer creative partnerships, it bridges standard media pipelines with WebGPU tensor operations to render cinematic-grade, zero-latency visual effects.",
    techStack: ["PyTorch", "Rust", "WebGPU", "TypeScript", "WASM"],
    problemSolved: "Traditional neural style transfer flows require costly servers and introduce massive latency. Amorphic AI leverages local GPU shader compilation to lower runtime operational expenses to exactly $0.00 while guaranteeing <6ms per frame render timelines.",
    keyMetrics: [
      { label: "Daily Active Users", value: "14,200+" },
      { label: "Rendering Speed", value: "62 FPS" },
      { label: "Server Cost Cut", value: "100%" }
    ],
    liveLink: "#",
    codeLink: "#",
    image: "https://picsum.photos/seed/amorphic/800/600",
    status: "live",
    category: "AI & ML",
    featured: true
  },
  {
    id: "linear-sync",
    name: "Linear Sync",
    shortDescription: "An ultra-low latency serverless state synchronization protocol mapping collaborative multi-tenant operations.",
    longDescription: "A modern state synchronization engine built to coordinate conflicts across geographically separated distributed databases. Merges conflict-free replicated data types (CRDTs) with high-efficiency binary transport serialization schemas.",
    techStack: ["Go", "Rust", "gRPC", "Redis", "PostgreSQL", "Docker"],
    problemSolved: "Collaborative canvas tools suffer from high edit colliding ratios on cellular networks. Integrated a custom vector clock and backpressure control line, compressing package overhead by 73% and eliminating 99.8% of manual sync branch merges.",
    keyMetrics: [
      { label: "Average Latency", value: "12ms" },
      { label: "Bandwidth Saved", value: "73%" },
      { label: "System Uptime", value: "99.999%" }
    ],
    liveLink: "#",
    codeLink: "#",
    image: "https://picsum.photos/seed/linearsync/800/600",
    status: "beta",
    category: "Systems",
    featured: true
  },
  {
    id: "arcane-browser-core",
    name: "Arcane Browser Core",
    shortDescription: "Memory-safe sandboxed rendering tab scheduler extension for privacy-oriented WebKit instances.",
    longDescription: "An experimental sandboxing environment that orchestrates visual frames, network access triggers, and memory heaps across nested web frame trees, preventing sidebar script injections and memory footprint leakages.",
    techStack: ["Rust", "WASM", "WebKit", "C++", "TypeScript"],
    problemSolved: "Heavy dynamic web app loading schedules trigger garbage collection spikes and CPU throttling. Arcane uses a modern pre-emptive task scheduler to isolate background frame scripts, cutting browser container memory usage by half.",
    keyMetrics: [
      { label: "Memory Reduced", value: "52%" },
      { label: "Frame Stutter", value: "-91%" },
      { label: "Third-party Blocked", value: "100%" }
    ],
    liveLink: "#",
    codeLink: "#",
    image: "https://picsum.photos/seed/arcane/800/600",
    status: "live",
    category: "Frontend",
    featured: false
  },
  {
    id: "atlas-maps",
    name: "Atlas Maps",
    shortDescription: "A high-fidelity client-side interactive geographic vector engine utilizing modern canvas mesh subdivision.",
    longDescription: "An interactive geographical mapping library written to render dense demographic layers inside simple canvas elements. Builds on top of raw WebGL frameworks to slice, map, and morph rich geographical tiles seamlessly.",
    techStack: ["React", "TypeScript", "D3.js", "WebGL", "HTML5 Canvas"],
    problemSolved: "Parsing multi-gigabyte coordinate sets crashed client devices on mobile viewports. Developed a quad-tree division schema to lazily stream and decode coordinates on a secondary web worker, preventing UI thread freeze cycles.",
    keyMetrics: [
      { label: "Rendering Latency", value: "<16ms" },
      { label: "Max Node Streams", value: "5.4M" },
      { label: "FPS on Mobile", value: "58 FPS" }
    ],
    liveLink: "#",
    codeLink: "#",
    image: "https://picsum.photos/seed/atlasmap/800/600",
    status: "live",
    category: "Data Science",
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
  // AI & ML
  { name: "Generative AI", proficiency: 95, category: "AI & ML", experienceYears: 2, details: "Building LLM agents, prompt engineering, RAG, and custom fine-tuning pipelines." },
  { name: "Machine Learning", proficiency: 93, category: "AI & ML", experienceYears: 3, details: "Developing predictive models, supervised/unsupervised classification, clustering, and regressions." },

  // Data Science
  { name: "Python", proficiency: 96, category: "Data Science", experienceYears: 4, details: "Core language for data manipulation, algorithmic pipelines, and machine learning models." },
  { name: "SQL", proficiency: 94, category: "Data Science", experienceYears: 4, details: "Writing complex analytical queries, schema optimization, and database architecture." },
  { name: "Data Analytics", proficiency: 92, category: "Data Science", experienceYears: 3, details: "Deriving actionable insights, trend analysis, and descriptive analytics across large databases." },
  { name: "Data Modeling", proficiency: 90, category: "Data Science", experienceYears: 3, details: "Designing entity-relationship diagrams, dimensional modeling, and data warehouse structures." },

  // Systems
  { name: "AWS", proficiency: 88, category: "Systems", experienceYears: 2, details: "Deploying cloud servers, storing data in S3, and leveraging serverless Lambdas and RDS databases." },
  { name: "Power BI", proficiency: 92, category: "Systems", experienceYears: 3, details: "Designing automated reporting dashboards, DAX queries, and robust data connections." },
  { name: "Tableau", proficiency: 90, category: "Systems", experienceYears: 3, details: "Creating interactive visual analytics, calculated fields, and executive summaries." },
  { name: "Business Intelligence", proficiency: 93, category: "Systems", experienceYears: 3, details: "Formulating KPI metrics, ETL processing pipelines, and data warehouse design." },

  // Consulting (representing Consulting & Advisory category in view)
  { name: "Digital Transformation", proficiency: 90, category: "Consulting", experienceYears: 2, details: "Advising on tech stack adoption, cloud migration, and automated operations." },
  { name: "Technology Advisory", proficiency: 91, category: "Consulting", experienceYears: 2, details: "Evaluating tech blueprints, performance gaps, and scalability pathways." },
  { name: "Stakeholder Management", proficiency: 93, category: "Consulting", experienceYears: 3, details: "Aligning technical timelines with business metrics and presenting outcomes." },
  { name: "Client Engagement", proficiency: 92, category: "Consulting", experienceYears: 3, details: "Managing feedback loops, requirements elicitation, and high-trust communications." },
  { name: "Agile Methodology", proficiency: 95, category: "Consulting", experienceYears: 3, details: "Leading sprint planning, standups, retrospectives, and managing backlog refinement." }
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
