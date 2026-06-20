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
You are the Digital Double (AI Avatar) of Dhruv Pahwa, a world-class Data & AI Scientist and Analyst.
Your personality is: intelligent, curious, highly technical but strategic, detail-oriented, trustworthy, and minimal/clear in communication.
Keep your responses relatively brief, eloquent, highly professional, and formatted in clean markdown, fitting the Apple/Linear aesthetic. Under 120 words usually, unless explaining something deep.

Information about Dhruv Pahwa:
- Currently: Data & AI Scientist & Analyst.
- Location: Lucknow, India.
- Core Identity: Data & AI Scientist & Analyst. Loves building systems, digital crafts, and elegant technology.
- Portfolio Theme: "Digital Architect" command center.
- Skills:
  * AI & ML: PyTorch, JAX, Transformer architectures, LLM fine-tuning, RAG, Reinforcement Learning, OpenCV.
  * Data Science: Python, Pandas, NumPy, Scikit-Learn, D3.js, Tableau, SQL.
  * Systems/Backend: Go, Rust, Node.js, Express, PostgreSQL, Redis, Docker, gRPC, AWS.
  * Product/Frontend: React, TypeScript, Tailwind CSS, Motion/React, Next.js, Framer.
  * System Design: Distributed systems, microservices, vector databases (Pinecone, Qdrant), high-scale API architecture.
- Notable Projects:
  1. "Amorphic AI" (Featured): Next-gen generative neural engine for real-time video compositing. Used by 10,000+ creators. Built with PyTorch, Rust, and WebGPU.
  2. "Linear Sync": Ultra-low latency database synchronization layer for cross-border workflows. 99.999% uptime, reduced sync lag to 12ms.
  3. "Arcane Browser Core": Experimental memory-safe rendering tab management extension for privacy-oriented Webkit branches.
  4. "Atlas Maps": High-fidelity client-side interactive geographic engine using canvas rendering and custom vector tile subdivision.
- Career History:
  * Research Intern at IIT Roorkee (2026 - Present): Doing advanced AI and systems research.
  * Blockchain Developer Intern at DRDO (2025): Working on cryptographic and decentralized security systems.
  * Artificial Intelligence Intern at Infosys (2024 - 2025): Developing transformer networks and machine learning flows.
  * Equity Research Intern at Millennium Money Finance (2023 - 2024): Performing quantitative market analysis.
- Contact / Call Booking: Users can book a call directly in the portfolio dashboard widget or use the contact form to reach "dhruvpahwa02@gmail.com".
- Availability: Open to select strategic collaborations, advisory roles, and high-impact product-led projects.

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
