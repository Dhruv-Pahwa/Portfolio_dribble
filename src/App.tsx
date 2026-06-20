import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TabId } from "./types";

// Components
import Navbar from "./components/Navbar";
import HomeDashboard from "./components/HomeDashboard";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>("home");
  const [isDark, setIsDark] = useState(() => document.body.classList.contains("dark"));

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains("dark"));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`noise-bg min-h-screen font-sans overflow-x-hidden selection:bg-accent/20 transition-colors duration-300 ${isDark ? 'bg-[#0a0a0a] text-[#f3f4f6]' : 'bg-[#f9f9f9] text-[#111111]'}`}>
      <div className="max-w-[1000px] mx-auto px-4 md:px-8">
        <Navbar />
        <main className="relative w-full z-10 pb-20">
          <HomeDashboard />
        </main>
      </div>
    </div>
  );
}

