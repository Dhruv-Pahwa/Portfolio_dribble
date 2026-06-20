import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { skillsData } from "../data";
import { SkillNode } from "../types";
import { Sparkles, Brain, Code, Cpu, Database, ChevronRight, Activity, Cpu as ChipIcon } from "lucide-react";

export default function SkillsView() {
  const [selectedSkill, setSelectedSkill] = useState<SkillNode | null>(skillsData[0]);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const categories = [
    { id: "AI & ML", label: "AI & ML", icon: <Brain className="h-4.5 w-4.5 text-accent" />, color: "border-accent/40" },
    { id: "Data Science", label: "Data Science", icon: <Activity className="h-4.5 w-4.5 text-accent" />, color: "border-amber-500/40" },
    { id: "Systems", label: "Systems & Backend", icon: <Cpu className="h-4.5 w-4.5 text-accent" />, color: "border-blue-500/40" },
    { id: "Consulting", label: "Consulting & Advisory", icon: <Code className="h-4.5 w-4.5 text-accent" />, color: "border-emerald-success/40" }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.99 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="space-y-12"
      >
        {/* Sections header details */}
        <div className="space-y-3">
          <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-accent">
            Ecological Mapping
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
            Skills Ecosystem
          </h2>
          <p className="font-sans text-xs text-[#666666] dark:text-[#999999] max-w-xl leading-relaxed">
            Hover over categories to spotlight related node constellations, or click specific nodes below to inspect exact proficiency diagnostics.
          </p>
        </div>

        {/* Categories spotlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onMouseEnter={() => setHoveredCategory(cat.id)}
              onMouseLeave={() => setHoveredCategory(null)}
              className={`p-4 rounded-2xl bg-white border border-neutral-150 transition-all cursor-crosshair dark:bg-neutral-900 dark:border-neutral-800 ${
                hoveredCategory === cat.id ? "ring-2 ring-accent" : ""
              }`}
            >
              <div className="flex items-center gap-2">
                {cat.icon}
                <span className="font-sans text-xs font-bold text-neutral-900 dark:text-neutral-100">
                  {cat.label}
                </span>
              </div>
              <p className="font-mono text-[9px] mt-1 text-[#999999] tracking-wider">
                {skillsData.filter((s) => s.category === cat.id).length} Active Nodes
              </p>
            </div>
          ))}
        </div>

        {/* Dynamic Nodes Grid & Details deck */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Constellation mapping block (Left Column) */}
          <div className="md:col-span-7 glass p-7 rounded-[28px] border border-neutral-150 dark:border-neutral-800/80 space-y-6">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#999999] dark:text-[#666666] block">
              Node Constellation Map
            </span>

            {/* Custom vector connector simulation area */}
            <div className="relative flex flex-wrap gap-2.5">
              {skillsData.map((node) => {
                const isSelected = selectedSkill?.name === node.name;
                const isSpotlighted = hoveredCategory === null || node.category === hoveredCategory;
                
                return (
                  <motion.button
                    key={node.name}
                    onClick={() => setSelectedSkill(node)}
                    className={`relative px-3.5 py-2 rounded-xl font-mono text-xs font-semibold transition-all ${
                      isSelected
                        ? "bg-accent text-white"
                        : "bg-white hover:bg-neutral-100 dark:bg-neutral-900 border border-neutral-150 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-800"
                    } ${isSpotlighted ? "opacity-100" : "opacity-25"}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{node.name}</span>
                    {/* Tiny notification dots of proficiency levels */}
                    {node.proficiency >= 94 && (
                      <span className="absolute top-1 right-1 h-1 w-1 rounded-full bg-accent-light" />
                    )}
                  </motion.button>
                );
              })}
            </div>

            <div className="border-t border-neutral-100 dark:border-neutral-800/80 pt-4 flex justify-between items-center text-[10px] font-mono text-neutral-500">
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Selected Node Anchor
              </span>
              <span>Total Nodes Plotted: {skillsData.length}</span>
            </div>
          </div>

          {/* Diagnostics Panel (Right Column) */}
          <div className="md:col-span-5 h-full">
            <AnimatePresence mode="wait">
              {selectedSkill ? (
                <motion.div
                  key={selectedSkill?.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="glass-card rounded-[28px] p-6 space-y-6"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-800">
                    <div>
                      <h4 className="font-display text-base font-black text-neutral-900 dark:text-neutral-50 leading-tight">
                        {selectedSkill.name}
                      </h4>
                      <span className="font-mono text-[9px] text-accent font-semibold block mt-1">
                        Category: {selectedSkill.category}
                      </span>
                    </div>

                    <span className="rounded-lg bg-black/5 px-2.5 py-1 font-mono text-[10px] font-bold text-neutral-600 dark:bg-white/10 dark:text-neutral-300">
                      {selectedSkill.experienceYears} Years Exp
                    </span>
                  </div>

                  {/* Proficiency Meter with glowing feedback */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-[11px] font-mono">
                      <span className="text-neutral-500">Node Proficiency Index</span>
                      <span className="text-accent font-bold">{selectedSkill.proficiency}%</span>
                    </div>
                    <div className="h-2 w-full bg-neutral-100 rounded-full dark:bg-neutral-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${selectedSkill.proficiency}%` }}
                        transition={{ duration: 0.4 }}
                        className="h-full bg-gradient-to-r from-accent to-amber-500 rounded-full"
                      />
                    </div>
                  </div>

                  {/* Usage explanation details */}
                  <div className="space-y-2">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#999999] dark:text-[#666666] block">
                      Production Experience Details
                    </span>
                    <p className="font-sans text-xs text-[#666666] dark:text-[#999999] leading-relaxed">
                      {selectedSkill.details}
                    </p>
                  </div>

                  {/* Micro-interaction benchmark tag */}
                  <div className="rounded-xl bg-accent-light/5 border border-accent/10 p-4 shrink-0 text-[10px] font-mono text-[#666666] dark:text-[#999999] leading-normal flex items-start gap-2.5">
                    <ChipIcon className="h-4.5 w-4.5 text-accent mt-0.5 shrink-0" />
                    <span>Selected skill node acts as core compiler foundation in projects: <strong>Amorphic AI</strong> & <strong>Linear State protocol loops</strong>.</span>
                  </div>
                </motion.div>
              ) : (
                <div className="glass-card rounded-[28px] p-8 text-center text-neutral-400 font-mono text-xs">
                  Select a skill constellation node to display diagnostic logs.
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
