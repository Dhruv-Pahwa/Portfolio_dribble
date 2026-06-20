import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../types";
import { projectsData } from "../data";
import { Search, ExternalLink, Github, Terminal, ArrowUpRight, Code, ShieldCheck, Cpu } from "lucide-react";

export default function ProjectsView() {
  const [activeCategory, setActiveCategory] = useState<"All" | "AI & ML" | "Systems" | "Frontend" | "Data Science">("All");
  const [searchVal, setSearchVal] = useState("");
  const [expandedProjId, setExpandedProjId] = useState<string | null>(null);

  // Filter lists based on category selection & manual search input
  const categories = ["All", "AI & ML", "Systems", "Frontend", "Data Science"] as const;

  const filteredProjects = projectsData.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesQuery =
      p.name.toLowerCase().includes(searchVal.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchVal.toLowerCase()) ||
      p.techStack.some((tech) => tech.toLowerCase().includes(searchVal.toLowerCase()));
    
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-32">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-12"
      >
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-accent">
              Operational Showcase
            </span>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
              Product Repository
            </h2>
            <p className="font-sans text-xs text-[#666666] dark:text-[#999999] max-w-lg leading-relaxed">
              Synthesized micro-products built to study browser scaling, distributed conflict resolutions, and active vector neural layers.
            </p>
          </div>

          {/* Integrated search panel input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search stack or description..."
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              className="w-full rounded-xl border border-neutral-200 bg-white pl-9.5 pr-4 py-2 text-xs font-semibold text-neutral-800 placeholder-neutral-400 focus:border-accent focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100"
            />
          </div>
        </div>

        {/* Dynamic Navigation Category Filter Bar */}
        <div className="flex flex-wrap items-center gap-1.5 border-b border-neutral-100 dark:border-neutral-800 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setExpandedProjId(null);
              }}
              className={`px-3.5 py-1.5 rounded-full font-mono text-[10.5px] font-bold transition-all focus:outline-none ${
                activeCategory === cat
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-neutral-100 hover:bg-neutral-200/60 text-[#666666] dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-[#999999]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Display Grid of Projects */}
        <div className="grid grid-cols-1 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const isExpanded = expandedProjId === project.id;
              return (
                <motion.div
                  key={project.id}
                  layoutId={`project-container-${project.id}`}
                  className="glass-card rounded-[28px] overflow-hidden flex flex-col lg:flex-row shadow-sm hover:shadow-lg transition-shadow border border-neutral-200/60 dark:border-neutral-850"
                  transition={{ duration: 0.3 }}
                >
                  {/* Left block thumbnail */}
                  <div className="lg:w-2/5 relative min-h-[220px] bg-neutral-100 dark:bg-neutral-950 shrink-0">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 transition-all duration-500 hover:grayscale-0 hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    {project.featured && (
                      <span className="absolute top-4 left-4 bg-accent text-white font-mono text-[9px] uppercase tracking-wider font-semibold py-1 px-2 rounded-md">
                        FEATURED DEPLOYMENT
                      </span>
                    )}
                    <span className="absolute bottom-4 right-4 bg-black/75 backdrop-blur-sm text-white font-mono text-[9px] uppercase tracking-wider font-semibold py-1 px-2.5 rounded-full">
                      {project.status}
                    </span>
                  </div>

                  {/* Right block contents */}
                  <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-bold">
                          {project.category}
                        </span>
                        <span className="font-mono text-[9px] text-[#999999]">
                          ID: {project.id}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl font-black text-neutral-900 dark:text-neutral-50 leading-tight">
                        {project.name}
                      </h3>

                      <p className="font-sans text-xs text-[#666666] dark:text-[#999999] leading-relaxed">
                        {project.shortDescription}
                      </p>

                      {/* Tech stack inline */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="bg-neutral-100/80 px-2 py-0.5 rounded-md font-mono text-[10px] text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Interactive unfolded details */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pt-4 border-t border-neutral-100 dark:border-neutral-850 space-y-4 overflow-hidden text-xs"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                              <span className="font-mono text-[8.5px] uppercase text-[#999999] tracking-wider block">problem solved</span>
                              <p className="text-[#666666] dark:text-[#999999] leading-relaxed">{project.problemSolved}</p>
                            </div>
                            <div className="space-y-1.5">
                              <span className="font-mono text-[8.5px] uppercase text-[#999999] tracking-wider block">computational setup</span>
                              <p className="text-[#666666] dark:text-[#999999] leading-relaxed">{project.longDescription}</p>
                            </div>
                          </div>

                          {/* Quantifiable core benchmarks */}
                          <div className="space-y-2">
                            <span className="font-mono text-[8.5px] uppercase text-[#999999] tracking-wider block">Verifiable Metrics</span>
                            <div className="grid grid-cols-3 gap-2 bg-neutral-50 p-3 rounded-xl dark:bg-neutral-950/40 border border-neutral-100 dark:border-neutral-900">
                              {project.keyMetrics.map((met, mIdx) => (
                                <div key={mIdx} className="text-center">
                                  <span className="font-display text-sm font-bold text-accent">{met.value}</span>
                                  <span className="block font-mono text-[8s] text-neutral-500 uppercase tracking-tight mt-0.5">{met.label}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Footer Interactions */}
                    <div className="flex items-center justify-between border-t border-neutral-100 dark:border-neutral-800/80 pt-4">
                      <button
                        onClick={() => setExpandedProjId(isExpanded ? null : project.id)}
                        className="text-[11px] font-sans font-bold text-accent hover:underline focus:outline-none"
                      >
                        {isExpanded ? "Close diagnostic specifications" : "Analyze architectural specs"}
                      </button>

                      <div className="flex items-center gap-2">
                        <a
                          href={project.codeLink}
                          onClick={(e) => {
                            e.preventDefault();
                            alert(`Bypassing external Git redirection. Git commit signature: verify_repo_branch@${project.id}.ts`);
                          }}
                          className="flex items-center gap-1 rounded-lg hover:bg-black/5 p-1 px-2.5 font-sans text-[11px] font-bold transition-all text-neutral-500 hover:text-black dark:hover:bg-white/5 dark:hover:text-white"
                        >
                          <Code className="h-3.5 w-3.5" />
                          <span>Code</span>
                        </a>
                        <a
                          href={project.liveLink}
                          onClick={(e) => {
                            e.preventDefault();
                            alert(`Opening deployment shell sandbox container route for project: ${project.name}.`);
                          }}
                          className="flex items-center gap-1 rounded-lg bg-black px-3 py-1.5 text-[11px] font-bold text-white hover:bg-neutral-800 transition-all dark:bg-white dark:text-black dark:hover:bg-neutral-100"
                        >
                          <span>Live</span>
                          <ArrowUpRight className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 bg-white dark:bg-neutral-900 rounded-[24px] border border-neutral-100 dark:border-neutral-800">
              <p className="font-mono text-xs text-[#999999]">No architectural projects found matching criteria.</p>
              <button
                onClick={() => {
                  setSearchVal("");
                  setActiveCategory("All");
                }}
                className="mt-3 text-xs text-accent font-bold hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
