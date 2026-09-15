import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { experienceData } from "../data";
import { Play, Pause, Linkedin } from "lucide-react";
import lucknowMap from "../../assets/lucknow_map.png";
import profilePic from "../../assets/670971899_18177056833391528_6212655494246129999_n.jpg";
import linkedinImg from "../../assets/1769889969555.jpg";
import githubImg from "../../image.png";

export default function HomeDashboard() {
  const [activeProfileTab, setActiveProfileTab] = useState<"about" | "education" | "skills">("about");
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isDark, setIsDark] = useState(() => document.body.classList.contains("dark"));

  // Sync with body.dark toggled by Navbar
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains("dark"));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`w-full flex flex-col gap-16 pt-10 transition-colors duration-300 ${isDark ? 'text-neutral-100' : ''}`}>
      {/* HERO SECTION */}
      <section className="flex flex-col gap-6">
        <div>
          <h1 className={`text-5xl md:text-[64px] font-bold tracking-tight leading-[1.1] ${isDark ? 'text-white' : 'text-[#111]'}`}>
            Hi, I'm{" "}
            <span className="inline-flex items-center justify-center translate-y-2">
              <div className="relative h-16 w-16 md:h-[72px] md:w-[72px] rounded-[24px] overflow-hidden shadow-lg border-[3px] border-white z-10">
                <img
                  src={profilePic}
                  alt="Dhruv Pahwa"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute h-16 w-16 md:h-[72px] md:w-[72px] rounded-[24px] bg-black/10 blur-xl"></div>
            </span>{" "}
            Dhruv Pahwa!

          </h1>
          <h2 className={`text-5xl md:text-[64px] font-bold tracking-tight leading-[1.1] mt-2 flex flex-wrap items-center gap-x-4 ${isDark ? 'text-neutral-600' : 'text-[#c8c8c8]'}`}>
            I'm a <span className={isDark ? 'text-white' : 'text-[#111]'}>Data & AI Scientist</span>
            <div className="flex items-center flex-wrap gap-4 mt-2 w-full md:w-auto md:mt-0">
              <span className="text-[#ff6b00]">& Product Manager.</span>
              <div className={`flex items-center gap-2 rounded-full border px-4 py-1.5 shadow-sm h-[40px] ${isDark ? 'border-neutral-700 bg-[#1a1a1a]' : 'border-neutral-200 bg-white'}`}>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34c759] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#34c759]"></span>
                </span>
                <span className={`text-sm font-medium ${isDark ? 'text-neutral-200' : 'text-neutral-800'}`}>
                  Open to work
                </span>
              </div>
            </div>
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-4">
          <a
            href="/Dhruv_Pahwa_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full px-8 py-4 text-sm font-semibold transition-transform hover:scale-105 inline-block text-center ${isDark ? 'bg-white text-[#111]' : 'bg-[#111] text-white'}`}
          >
            View Resume
          </a>
          <p className={`font-medium text-lg leading-snug ${isDark ? 'text-neutral-400' : 'text-[#666]'}`}>
            Feel free to explore my portfolio and reach out — I'd love to connect!
          </p>
        </div>
      </section>

      {/* BENTO GRID */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-5">

        {/* My Experience (Span 4) */}
        <div className={`rounded-[32px] p-6 shadow-sm border md:col-span-4 h-[340px] flex flex-col transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-md ${isDark ? 'bg-[#141414] border-neutral-800 hover:border-neutral-600' : 'bg-white border-neutral-100 hover:border-neutral-200'}`}>
          <span className={`text-xs font-semibold mb-6 ${isDark ? 'text-neutral-400' : 'text-[#666]'}`}>My Experience</span>
          <div className="flex-1 space-y-4 relative overflow-hidden">

            {/* Active/Current item */}
            <div className="relative flex items-start gap-4">
              <div className={`absolute left-1.5 top-5 bottom-[-24px] w-[2px] ${isDark ? 'bg-neutral-700' : 'bg-neutral-200'}`}></div>
              <div className={`relative z-10 h-3 w-3 rounded-full mt-1 ${isDark ? 'bg-white' : 'bg-[#111]'}`}></div>
              <div>
                <h4 className={`font-bold leading-tight ${isDark ? 'text-white' : 'text-[#111]'}`}>Research Intern</h4>
                <p className={`text-xs mt-0.5 ${isDark ? 'text-neutral-500' : 'text-[#999]'}`}>IIT, Roorkee &bull; Jan 2026 - Apr 2026</p>
              </div>
            </div>

            <div className="relative flex items-start gap-4">
              <div className={`absolute left-1.5 top-5 bottom-[-24px] w-[2px] ${isDark ? 'bg-neutral-700' : 'bg-neutral-200'}`}></div>
              <div className={`relative z-10 h-3 w-3 rounded-full mt-1 ${isDark ? 'bg-white' : 'bg-[#111]'}`}></div>
              <div>
                <h4 className={`font-bold leading-tight ${isDark ? 'text-white' : 'text-[#111]'}`}>Blockchain Developer Intern</h4>
                <p className={`text-xs mt-0.5 ${isDark ? 'text-neutral-500' : 'text-[#999]'}`}>DRDO, Government of India &bull; May 2025 - Jul 2025</p>
              </div>
            </div>

            <div className="relative flex items-start gap-4">
              <div className={`absolute left-1.5 top-5 bottom-[-24px] w-[2px] ${isDark ? 'bg-neutral-700' : 'bg-neutral-200'}`}></div>
              <div className={`relative z-10 h-3 w-3 rounded-full mt-1 ${isDark ? 'bg-white' : 'bg-[#111]'}`}></div>
              <div>
                <h4 className={`font-bold leading-tight ${isDark ? 'text-white' : 'text-[#111]'}`}>Artificial Intelligence Intern</h4>
                <p className={`text-xs mt-0.5 ${isDark ? 'text-neutral-500' : 'text-[#999]'}`}>Infosys &bull; Oct 2024 - Jan 2025</p>
              </div>
            </div>

            <div className="relative flex items-start gap-4">
              <div className={`relative z-10 h-3 w-3 rounded-full mt-1 ${isDark ? 'bg-white' : 'bg-[#111]'}`}></div>
              <div>
                <h4 className={`font-bold leading-tight ${isDark ? 'text-white' : 'text-[#111]'}`}>Equity Research Intern</h4>
                <p className={`text-xs mt-0.5 ${isDark ? 'text-neutral-500' : 'text-[#999]'}`}>Millennium Money Finance &bull; Dec 2023 - Jan 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* My Projects (Span 4) */}
        <a
          href="https://github.com/Dhruv-Pahwa"
          target="_blank"
          rel="noopener noreferrer"
          className={`rounded-[32px] p-6 shadow-sm border md:col-span-4 h-[340px] flex flex-col items-center relative overflow-hidden group transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-md cursor-pointer ${isDark ? 'bg-[#141414] border-neutral-800 hover:border-neutral-600' : 'bg-white border-neutral-100 hover:border-neutral-200'}`}
        >
          <div className="w-full text-left z-10">
            <span className={`text-xs font-semibold ${isDark ? 'text-neutral-400' : 'text-[#666]'}`}>My Projects</span>
          </div>

          <div className="flex-1 w-full flex flex-col items-center justify-center mt-4 z-10">
            <div className="relative w-full aspect-[16/10] max-w-[260px] rounded-3xl overflow-hidden shadow-xl transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-300">
              <img
                src={githubImg}
                alt="GitHub Projects Thumbnail"
                className="w-full h-full object-cover bg-neutral-100"
              />
            </div>

            <h3 className={`font-bold text-lg mt-5 group-hover:text-accent transition-colors ${isDark ? 'text-white' : 'text-[#111]'}`}>GitHub Repositories</h3>
            <span className="flex items-center gap-1.5 text-[#ff6b00] text-xs font-semibold mt-1 group-hover:underline">
              View on GitHub
            </span>
          </div>

          {/* Subtle gradient background */}
          <div className={`absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t ${isDark ? 'from-[#141414]' : 'from-neutral-50'} to-transparent`}></div>
        </a>

        {/* LinkedIn (Span 4) */}
        <a
          href="https://www.linkedin.com/in/dhruvpahwa/"
          target="_blank"
          rel="noopener noreferrer"
          className={`rounded-[32px] p-6 shadow-sm border md:col-span-4 h-[340px] flex flex-col items-center relative overflow-hidden group transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-md cursor-pointer ${isDark ? 'bg-[#141414] border-neutral-800 hover:border-neutral-600' : 'bg-white border-neutral-100 hover:border-neutral-200'}`}
        >
          <div className="w-full text-left z-10 flex justify-between items-start">
            <span className={`text-xs font-semibold ${isDark ? 'text-neutral-400' : 'text-[#666]'}`}>LinkedIn</span>
            <Linkedin className="h-4 w-4 text-[#0077b5]" />
          </div>

          <div className="flex-1 w-full flex flex-col items-center justify-center mt-4 z-10">
            <div className="relative w-full aspect-[16/10] max-w-[260px] rounded-3xl overflow-hidden shadow-xl transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-300">
              <img
                src={linkedinImg}
                alt="LinkedIn Profile Thumbnail"
                className="w-full h-full object-cover bg-neutral-100"
              />
            </div>

            <h3 className={`font-bold text-lg mt-5 group-hover:text-[#0077b5] transition-colors ${isDark ? 'text-white' : 'text-[#111]'}`}>Connect on LinkedIn</h3>
            <span className="flex items-center gap-1.5 text-[#0077b5] text-xs font-semibold mt-1 group-hover:underline">
              View Profile
            </span>
          </div>

          {/* Subtle gradient background */}
          <div className={`absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t ${isDark ? 'from-[#141414]' : 'from-neutral-50'} to-transparent`}></div>
        </a>

        {/* Map (Span 4) */}
        <div className={`rounded-[32px] p-6 shadow-sm border md:col-span-4 h-[300px] flex flex-col relative overflow-hidden p-0 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-md ${isDark ? 'bg-[#141414] border-neutral-800 hover:border-neutral-600' : 'bg-white border-neutral-100 hover:border-neutral-200'}`}>
          <div className={`absolute top-4 left-4 z-10 backdrop-blur-sm px-3 py-1.5 rounded-full border shadow-sm ${isDark ? 'bg-black/60 border-white/10' : 'bg-white/80 border-white/50'}`}>
            <span className={`text-[10px] font-semibold ${isDark ? 'text-white' : 'text-[#111]'}`}>Map</span>
          </div>

          {/* Map Image Placeholder */}
          <div className="absolute inset-0 w-full h-full">
            <img src={lucknowMap} className="w-full h-full object-cover grayscale opacity-70" alt="Lucknow Map" />
            <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-[#141414] via-[#141414]/80' : 'from-white via-white/80'} to-transparent`}></div>
          </div>

          <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center z-10">
            <h3 className={`text-2xl font-bold tracking-[0.2em] ${isDark ? 'text-white' : 'text-[#111]'}`}>LUCKNOW</h3>
            <p className={`text-[10px] tracking-widest mt-1 ${isDark ? 'text-neutral-400' : 'text-[#666]'}`}>INDIA</p>
            <p className={`text-[8px] mt-1 font-mono ${isDark ? 'text-neutral-500' : 'text-[#999]'}`}>26.8467° N, 80.9462° E</p>
          </div>
        </div>

        {/* About, Education, Skills Card (Span 8) */}
        <div className={`rounded-[32px] p-6 shadow-sm border md:col-span-8 h-[300px] flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-md ${isDark ? 'bg-[#141414] border-neutral-800 hover:border-neutral-600' : 'bg-white border-neutral-100 hover:border-neutral-200'}`}>
          <div>
            <span className={`text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-neutral-400' : 'text-[#666]'}`}>Professional Matrix</span>

            <div className="mt-5 max-w-2xl">
              {activeProfileTab === "about" && (
                <div className="space-y-2">
                  <h3 className={`font-bold text-xl ${isDark ? 'text-white' : 'text-[#111]'}`}>Data & AI Scientist & Product Manager</h3>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-neutral-400' : 'text-[#666]'}`}>
                    Passionate about building predictive pipelines, developing intelligent systems, and turning large-scale data into actionable product insights. Bridging machine learning, analytics, and product strategy to create scalable solutions with measurable user impact and lasting value.
                  </p>
                </div>
              )}
              {activeProfileTab === "education" && (
                <div className="space-y-2.5 max-h-[170px] overflow-y-auto pr-1">
                  <div className="flex flex-col gap-0.5">
                    <div className="flex justify-between items-start">
                      <h4 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-neutral-900'}`}>Christ University, Bangalore</h4>
                      <span className={`text-[10px] font-semibold ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>2023 – 2026</span>
                    </div>
                    <p className="text-xs font-medium text-accent">B.Sc. Data Science & Artificial Intelligence</p>
                    <p className={`text-[10.5px] leading-normal ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>
                      Grade: GPA 3.94 (Distinction) &bull; UN Millennium Fellow &bull; AI Guild Core Member &bull; Christ Consulting
                    </p>
                  </div>

                  <div className={`border-t my-1.5 ${isDark ? 'border-neutral-700' : 'border-neutral-100'}`}></div>

                  <div className="flex flex-col gap-0.5">
                    <div className="flex justify-between items-start">
                      <h4 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-neutral-900'}`}>Central Board of Secondary Education</h4>
                      <span className="text-[10px] font-semibold text-neutral-500">2021 – 2023</span>
                    </div>
                    <p className="text-xs font-medium text-accent">Class 12th (90.8%) &bull; Class 10th (94.4%)</p>
                    <p className="text-[10.5px] text-neutral-500 leading-normal">
                      Student Council &bull; Atal Tinkering Lab &bull; Solar Ambassador (IIT Bombay) &bull; Debate & Student Council
                    </p>
                  </div>
                </div>
              )}
              {activeProfileTab === "skills" && (
                <div className="space-y-3 max-h-[170px] overflow-y-auto pr-1">
                  <h3 className={`font-bold text-xl ${isDark ? 'text-white' : 'text-[#111]'}`}>Core Competencies</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {["Python", "SQL", "Power BI", "Tableau", "Data Analytics", "Machine Learning", "Data Modeling", "Business Intelligence", "AWS", "Generative AI", "Digital Transformation", "Technology Advisory", "Stakeholder Management", "Client Engagement", "Agile Methodology"].map((skill) => (
                      <span key={skill} className={`px-2.5 py-1 rounded-xl text-[10.5px] font-medium border ${isDark ? 'bg-neutral-800 border-neutral-700 text-neutral-300' : 'bg-neutral-50 border-neutral-200/60 text-neutral-700'}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className={`flex gap-2 p-1.5 rounded-full w-fit ${isDark ? 'bg-[#1a1a1a]' : 'bg-[#f8f8f8]'}`}>
            {[
              { id: "about", label: "About" },
              { id: "education", label: "Education" },
              { id: "skills", label: "Skills" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveProfileTab(tab.id as any)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${activeProfileTab === tab.id
                  ? isDark ? "bg-white text-[#111] shadow-md" : "bg-[#111] text-white shadow-md"
                  : isDark ? "text-neutral-500 hover:text-white" : "text-[#666] hover:text-[#111]"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
