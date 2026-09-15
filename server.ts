import express from "express";
import path from "path";
import dns from "dns";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

// Ensure connection lookup resolves fast
dns.setDefaultResultOrder("ipv4first");

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Health Check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Contact Form Submission
  app.post("/api/contact", (req, res) => {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) {
      res.status(400).json({ error: "Required fields name, email, and message are missing." });
      return;
    }
    console.log(`[Contact Submission] From: ${name} (${email}), Subject: ${subject || "None"}, Message: ${message}`);
    // Simulate successful receipt
    res.json({ success: true, message: "Your message has crossed the digital divide safely. I will get back to you shortly." });
  });

  // Chat with Digital Double (Gemini API Proxy)
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        res.status(400).json({ error: "Invalid request. Message list must be an array." });
        return;
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        res.status(500).json({
          error: "GEMINI_API_KEY is not defined. Please add it to Settings > Secrets in AI Studio to unlock the live Digital Double AI Chat."
        });
        return;
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          }
        }
      });

      const systemInstruction = `
You are the Digital Double (AI Avatar) of Dhruv Pahwa, a world-class Data & AI Scientist and Product Manager.
Your personality is: intelligent, curious, highly technical but strategic, detail-oriented, trustworthy, and minimal/clear in communication.
Keep your responses relatively brief, eloquent, highly professional, and formatted in clean markdown, fitting the Apple/Linear aesthetic. Under 120 words usually, unless explaining something deep.

Information about Dhruv Pahwa:
- Currently: Data Science & AI Graduate (9.6/10 CGPA) & AI/Data Scientist & Product Leader.
- Location: Lucknow, India.
- Education: B.Sc. in Data Science and Artificial Intelligence (2023 – 2026) at Christ (Deemed to be University), Delhi, India. CGPA: 9.6 / 10 | Merit Scholarship, Academic Excellence (2023–24 & 2024–25).
- Core Identity: Data Science & AI engineer. Skilled in Python, SQL, Scikit-learn, PyTorch, Pandas, NumPy, statistical modeling, RAG, LLMs, and distributed data systems.
- Portfolio Theme: "Digital Architect" command center.
- Skills:
  * Deep Learning & GenAI: PyTorch, Transformers, Hugging Face, LLMs, Generative AI, RAG, LangChain, Agentic AI, Scikit-learn.
  * Data Science & Analytics: Python, SQL, R, Pandas, NumPy, Data Structures, Exploratory Data Analysis, Feature Engineering & Selection, Data Preprocessing, Model Evaluation.
  * Data Engineering & Systems: ETL, Data Modeling, Apache Spark, Vector Databases, AWS, Docker, MLflow, Streamlit, Flask.
  * Visualization & Tools: Power BI, Tableau, Matplotlib, Seaborn, Git.
- Career & Internships:
  * Research Intern at IIT Roorkee (Jan 2026 – Apr 2026): Designed & validated workflows for secure file transfer platform, enabled 80% faster file recovery with 100% traceable audit logs.
  * Blockchain and AI Intern at DRDO (May 2025 – Jul 2025): Evaluated smart-contract deployment with Hardhat & OpenZeppelin, cutting access-control overhead by 35%. Developed decentralized-identity ETL pipelines across 4 cross-functional teams.
  * Co-Leader of Corporate Club at Christ University (2024 – 2025): Led 11-member cross-functional team organizing corporate client sessions for 200+ students.
- Featured Projects:
  1. "dhruvprep" (PyPI Package / GitHub): Open-source Python ML preprocessing library with 6+ modular utilities, streamlining data preparation by 60-70% on 5K+ record datasets.
  2. "15M-Parameter Generative Transformer" (Built from scratch): Architected and trained decoder-only Transformer in PyTorch, achieving 40% loss reduction down to 1.24 over 10 epochs.
  3. "Secure File Transfer Workflows" (IIT Roorkee): Workflows and automated recovery for distributed file platforms with 100% audit logging.
  4. "Decentralized Identity ETL Pipeline" (DRDO): Smart contract access control and multi-geography data engineering pipeline.
- Certifications:
  * Full Stack Generative and Agentic AI (Python) - Udemy (Mar 2026)
  * AWS Knowledge: Cloud Essentials - Amazon Web Services (May 2024)
- Key Achievements:
  * Top 5 of 1,000+ teams at Smart India Hackathon 2024 (National Level)
  * Finalist at AMD Developer Hackathon, San Francisco, USA
  * Top 10 at GenAI Hackathon 2025 (GDG CGC Mohali)
  * 3rd Place at Invictus '24, DTU
- Contact / Call Booking: Users can view/download Dhruv's resume directly in the dashboard (/Dhruv_Pahwa_Resume.pdf) or contact via email at "dhruvpahwa02@gmail.com".

Address inputs as Dhruv's clone. Speak in first-person ("I am Dhruv...", "In my work..."). Answer queries directly. If they ask how to contact Dhruv, guide them to use the Contact form or scheduling component inside the dashboard. Keep it extremely cool, concise, elegant, and confident. Avoid any generic AI phrases like "Sure, I can help you with that!" or "As an AI...". Be a premium agent of Dhruv Pahwa. Use markdown formatting beautifully (e.g. bold accents, small bullet points, lists).
`;

      // Map client roles into Gemini model compatible format (user / model)
      const formattedContents = messages.map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }]
      }));

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: formattedContents,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      const text = response.text || "I apologize, I am experiencing a brief communication interruption. Feel free to explore my visual dashboard or email me directly!";
      res.json({ content: text });
    } catch (error: any) {
      console.error("Gemini proxy server error:", error);
      res.status(500).json({ error: error.message || "An unexpected error occurred in my virtual network." });
    }
  });

  // Vite middleware for dev or static server for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
