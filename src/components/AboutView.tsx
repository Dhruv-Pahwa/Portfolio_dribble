import { motion } from "motion/react";
import { Sparkles, Code, Cpu, Eye, Scale, Heart } from "lucide-react";

export default function AboutView() {
  const principles = [
    {
      icon: <Scale className="h-5 w-5 text-accent" />,
      title: "Precision over Speed",
      description: "Code should fit together like physical watch gears, with explicit interfaces and predictable constraints.",
    },
    {
      icon: <Eye className="h-5 w-5 text-accent" />,
      title: "Essentialism ( Dieter Rams style )",
      description: "Any feature that does not directly assist a user's task or system vital observation acts as drag. Delete it.",
    },
    {
      icon: <Cpu className="h-5 w-5 text-accent" />,
      title: "Architectural Honesty",
      description: "Avoid artificial visual complexities or mock graphs that mask low logic densities. Software is a factual craft.",
    },
  ];

  const milestones = [
    { year: "2026", event: "Research Intern at IIT Roorkee", detail: "Investigating advanced AI systems and edge computing models." },
    { year: "2025", event: "DRDO & UN Millennium Fellow", detail: "Pioneered secure blockchain nodes and worked on sustainable development initiatives." },
    { year: "2024", event: "AI Intern at Infosys", detail: "Devised fine-tuning flows for attention transformers and NLP configurations." },
    { year: "2023", event: "Equity Research at MMF", detail: "Conducted quantitative market projections and algorithmic data modeling." },
  ];

  const funTrivia = [
    { label: "Hardware setup", value: "HHKB Professional Hybrid & Apple Studio Display" },
    { label: "Coffee choice", value: "Single-origin Ethiopian Yirgacheffe, V60 pour over" },
    { label: "Books read yearly", value: "35+ volumes (Architecture, cybernetics, fiction)" },
    { label: "Code typeface", value: "JetBrains Mono (Strictly 12.5px size)" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-32">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-16"
      >
        {/* Story Intro Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-accent">
            Digital Catalyst
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 md:text-5xl">
            Designing systems that bridge human creativity with strict machine precision.
          </h2>
          <p className="font-sans text-base text-[#666666] dark:text-[#999999] leading-relaxed">
            I am a multi-disciplinary Data & AI Scientist, Analyst, and Researcher based in India. 
            I synthesize ideas from mathematical models, quantitative research, machine learning pipelines, 
            and deep neural networks to engineer data-driven solutions.
          </p>
        </div>

        {/* Narrative / Mission Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="glass-card p-8 rounded-[24px] space-y-6">
            <h3 className="font-display text-xl font-bold text-neutral-900 dark:text-neutral-50 border-b border-neutral-100 dark:border-neutral-800 pb-3">
              The Mission
            </h3>
            <p className="font-sans text-xs text-[#666666] dark:text-[#999999] leading-relaxed">
              Software shouldn&apos;t just be operational—it should be delightful, clean, and invisible. Too much of today&apos;s product environment is cluttered with noisy popups, flashing pixels, and heavy bundle footprints.
            </p>
            <p className="font-sans text-xs text-[#666666] dark:text-[#999999] leading-relaxed">
              My philosophy centers on <strong>technical reductionism</strong>. I aim to write highly modular, low-bit compiler environments, reactive web views, and vectorized retrieval pipelines that decrease computational overhead while accelerating user agency.
            </p>
          </div>

          <div className="glass-card p-8 rounded-[24px] space-y-6">
            <h3 className="font-display text-xl font-bold text-neutral-900 dark:text-neutral-50 border-b border-neutral-100 dark:border-neutral-800 pb-3">
              Core Ambitions
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-lg bg-black/5 dark:bg-white/5 p-1 text-black dark:text-white">
                  <Code className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                    Sovereign Client Systems
                  </h4>
                  <p className="font-sans text-[11px] text-neutral-500 mt-0.5">
                    Empowering browsers with local databases, heavy canvas grids, and on-device machine translation layers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-lg bg-black/5 dark:bg-white/5 p-1 text-black dark:text-white">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                    Creative AI partnerships
                  </h4>
                  <p className="font-sans text-[11px] text-neutral-500 mt-0.5">
                    Orchestrated models that generate structures, schemas, and design layers interactively, bypassing static templates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Principles */}
        <div className="space-y-6">
          <h3 className="font-mono text-[10px] uppercase tracking-widest text-[#999999] dark:text-[#666666] text-center md:text-left">
            Core Beliefs & Principles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((pr, idx) => (
              <div key={idx} className="glass p-6 rounded-[20px] space-y-3 hover:border-accent/30 transition-colors">
                <div className="rounded-xl bg-accent/10 p-2.5 w-fit">
                  {pr.icon}
                </div>
                <h4 className="font-display text-sm font-bold text-neutral-900 dark:text-neutral-50">
                  {pr.title}
                </h4>
                <p className="font-sans text-xs text-[#666666] dark:text-[#999999] leading-relaxed">
                  {pr.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones timeline & Trivia */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Milestones */}
          <div className="space-y-6">
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-[#999999] dark:text-[#666666]">
              Career Landmarks
            </h3>
            <div className="glass-card rounded-[24px] p-6 space-y-4">
              {milestones.map((ms, idx) => (
                <div key={idx} className="flex gap-4 items-start pb-4 border-b border-neutral-100 dark:border-neutral-800 last:border-b-0 last:pb-0">
                  <span className="font-mono text-xs font-bold text-accent shrink-0 w-10">
                    {ms.year}
                  </span>
                  <div>
                    <h4 className="font-sans text-xs font-bold text-neutral-900 dark:text-neutral-50">
                      {ms.event}
                    </h4>
                    <p className="font-sans text-[11px] text-neutral-500 mt-0.5">
                      {ms.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trivia facts */}
          <div className="space-y-6">
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-[#999999] dark:text-[#666666]">
              Rituals & Configurations
            </h3>
            <div className="glass-card rounded-[24px] p-6 space-y-4">
              {funTrivia.map((tr, idx) => (
                <div key={idx} className="flex justify-between items-center gap-4 text-xs">
                  <span className="font-sans font-medium text-neutral-500">
                    {tr.label}
                  </span>
                  <span className="font-mono text-[11px] font-semibold text-neutral-900 dark:text-neutral-100 text-right">
                    {tr.value}
                  </span>
                </div>
              ))}
              <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800">
                <p className="font-mono text-[10px] text-[#999999] italic leading-relaxed text-center">
                  "Perfect machinery simplifies the mental frame."
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
