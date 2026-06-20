import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { experienceData } from "../data";
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2, ChevronRight, CornerDownRight } from "lucide-react";

export default function ExperienceView() {
  const [selectedCompanyId, setSelectedCompanyId] = useState<string>("apple");

  const currentSelection = experienceData.find((x) => x.id === selectedCompanyId) || experienceData[0];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-32">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-12"
      >
        {/* Section Header */}
        <div className="space-y-3">
          <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-accent">
            Verifiable Impact
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
            Professional Track Record
          </h2>
          <p className="font-sans text-xs text-[#666666] dark:text-[#999999] max-w-2xl leading-relaxed">
            A history of designing protocols, streamlining rendering loads, and leading multi-disciplinary product lines inside high-finish corporate setups.
          </p>
        </div>

        {/* Master Double-Column Hub */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column Selector Cards */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#999999] dark:text-[#666666]">
              Organizations
            </span>
            <div className="space-y-2">
              {experienceData.map((item) => {
                const isSelected = selectedCompanyId === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedCompanyId(item.id)}
                    className={`flex items-center justify-between w-full p-4 rounded-xl text-left transition-all ${
                      isSelected
                        ? "bg-black text-white dark:bg-white dark:text-black shadow-lg"
                        : "bg-white hover:bg-neutral-100 border border-neutral-150 text-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-800 dark:text-[#999999]"
                    }`}
                  >
                    <div>
                      <h4 className="font-sans text-xs font-bold leading-tight">
                        {item.company}
                      </h4>
                      <p className={`font-mono text-[9px] mt-1 ${isSelected ? "text-accent" : "text-[#666666] dark:text-[#999999]"}`}>
                        {item.duration}
                      </p>
                    </div>
                    <ChevronRight className={`h-4.5 w-4.5 transition-transform ${isSelected ? "translate-x-1 text-accent" : "text-neutral-400 group-hover:translate-x-1"}`} />
                  </button>
                );
              })}
            </div>

            {/* Quick Resume Download Widget Simulation */}
            <div className="glass p-4 rounded-xl border border-neutral-200/60 dark:border-neutral-800 mt-6 text-center">
              <span className="font-mono text-[9.5px] font-bold text-accent">REPRESENTATIVE CV</span>
              <p className="text-[10px] text-neutral-500 mt-1">Compiled in single-page design spec standard.</p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Dhruv's signature resume (PDF format) is downloading. This represents an exact printable copy of this vector dashboard's verified credentials.");
                }}
                className="mt-3.5 inline-flex justify-center items-center gap-1.5 w-full bg-black hover:bg-neutral-800 text-white dark:bg-white dark:text-black dark:hover:bg-neutral-100 text-xs py-2 rounded-lg font-semibold transition-colors"
              >
                <span>Download Resume.pdf</span>
              </a>
            </div>
          </div>

          {/* Right Column Details Board */}
          <div className="md:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSelection.id}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.2 }}
                className="glass-card rounded-[24px] p-8 space-y-6"
              >
                {/* Board Header details */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-neutral-100 dark:border-neutral-800">
                  <div>
                    <h3 className="font-display text-xl font-black text-neutral-900 dark:text-neutral-50 leading-tight">
                      {currentSelection.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-500 mt-1 font-mono">
                      <span className="text-accent font-bold">{currentSelection.company}</span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {currentSelection.location}
                      </span>
                    </div>
                  </div>

                  <span className="shrink-0 rounded-full bg-accent/10 px-3 py-1 font-mono text-[9.5px] text-accent font-semibold">
                    {currentSelection.status}
                  </span>
                </div>

                {/* Core Impact Bullet Points */}
                <div className="space-y-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#999999] dark:text-[#666666]">
                    Core Technical Impact
                  </span>
                  
                  <div className="space-y-3.5">
                    {currentSelection.impactMetrics.map((bullet, bidx) => (
                      <div key={bidx} className="flex gap-3 items-start text-xs leading-relaxed text-[#222222] dark:text-[#D2D2D2]">
                        <CheckCircle2 className="h-4.5 w-4.5 text-accent mt-0.5 shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Milestones / Major accomplishments */}
                {currentSelection.achievements && currentSelection.achievements.length > 0 && (
                  <div className="space-y-3 bg-neutral-50/70 p-4 rounded-2xl dark:bg-neutral-900/40 border border-neutral-100 dark:border-neutral-800">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#999999] dark:text-[#666666] flex items-center gap-1">
                      <Sparkles className="h-3 w-3 text-accent" />
                      Key Milestones
                    </span>

                    <div className="space-y-2">
                      {currentSelection.achievements.map((ach, aidx) => (
                        <div key={aidx} className="flex gap-2 items-start text-xs pr-1 leading-normal italic text-neutral-600 dark:text-neutral-400">
                          <CornerDownRight className="h-3 w-3 mt-1.5 text-accent shrink-0" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* System Stacks Key Tags */}
                <div className="space-y-3 pt-3 border-t border-neutral-100 dark:border-neutral-800">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#999999] dark:text-[#666666]">
                    Stack deployed
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentSelection.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg bg-neutral-100 px-2.5 py-1 font-mono text-[10.5px] text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
