import { useState, useEffect, useRef, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TabId, Project, BlogPost } from "../types";
import { projectsData, blogPostsData } from "../data";
import {
  Search,
  BookOpen,
  ArrowRight,
  Terminal,
  Moon,
  Sparkles,
  PhoneCall,
  User,
  Briefcase,
  Layers,
  X,
  CornerDownLeft,
  BookMarked,
} from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  setActiveTab: (tab: TabId) => void;
  toggleTheme: () => void;
  openDoubleChat: () => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  setActiveTab,
  toggleTheme,
  openDoubleChat,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [aiReply, setAiReply] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Keyboard hooks for closing & toggling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      inputRef.current?.focus();
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Filter project database
  const filteredProjects = projectsData.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.techStack.some((t) => t.toLowerCase().includes(query.toLowerCase())) ||
      p.shortDescription.toLowerCase().includes(query.toLowerCase())
  );

  // Filter blogs database
  const filteredBlogs = blogPostsData.filter(
    (b) =>
      b.title.toLowerCase().includes(query.toLowerCase()) ||
      b.preview.toLowerCase().includes(query.toLowerCase())
  );

  // Check if user is typing an AI agent trigger block
  const isAiQuery = query.trim().startsWith("/ai ") || query.trim().startsWith("/ask ");
  const aiPromptText = isAiQuery
    ? query.trim().substring(query.trim().startsWith("/ai ") ? 4 : 5)
    : "";

  const handleAiQuerySubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!aiPromptText.trim()) return;

    setAiLoading(true);
    setAiReply(null);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: aiPromptText }]
        }),
      });

      const data = await response.json();
      if (data.error) {
        setAiReply(`System Warning: ${data.error}`);
      } else {
        setAiReply(data.content);
      }
    } catch (err: any) {
      setAiReply(`Network error talking to clone system: ${err.message || err}`);
    } finally {
      setAiLoading(false);
    }
  };

  const executeCommand = (action: () => void) => {
    action();
    onClose();
    setQuery("");
    setAiReply(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 pt-[15vh] px-4 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: -8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: -8 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        ref={containerRef}
        className="glass w-full max-w-xl overflow-hidden rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800"
      >
        {/* Search Input Bar form */}
        <form onSubmit={isAiQuery ? handleAiQuerySubmit : (e) => e.preventDefault() ?? onClose()}>
          <div className="flex h-12 w-full items-center border-b border-neutral-100 dark:border-neutral-800 px-4">
            <Search className="h-4.5 w-4.5 text-neutral-400 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search anything, try '/ai what's your experience?' or type custom query..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setAiReply(null);
              }}
              className="ml-2.5 h-full flex-1 bg-transparent font-sans text-xs font-medium text-neutral-900 placeholder-neutral-400 focus:outline-none dark:text-neutral-100 dark:placeholder-neutral-500"
            />
            {query && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setAiReply(null);
                }}
                className="rounded-md hover:bg-black/5 dark:hover:bg-white/5 p-1 transition-colors text-neutral-400"
              >
                <X className="h-3 w-3" />
              </button>
            )}
            <kbd className="ml-2 hidden rounded-md bg-neutral-100 px-1.5 py-0.5 font-mono text-[9px] text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400 sm:inline">
              ESC
            </kbd>
          </div>
        </form>

        {/* Results Deck Area */}
        <div className="max-h-[350px] overflow-y-auto p-2">
          {/* AI Output Terminal Block */}
          {isAiQuery && (
            <div className="mb-2 p-3 bg-neutral-100/50 dark:bg-neutral-900/50 rounded-xl border border-accent/20">
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-accent font-bold mb-2">
                <Sparkles className="h-3.5 w-3.5 animate-spin" />
                <span>DHRUV'S DIGITAL NEURAL CLONE</span>
              </div>
              
              {aiLoading ? (
                <div className="flex items-center gap-2 font-mono text-[11px] text-neutral-500 py-1">
                  <span className="animate-pulse">Retrieving synaptic mappings...</span>
                </div>
              ) : aiReply ? (
                <div className="font-sans text-xs text-neutral-800 dark:text-neutral-200 mt-1 leading-relaxed whitespace-pre-wrap">
                  {aiReply}
                </div>
              ) : (
                <div className="font-mono text-[10px] text-neutral-400">
                  Press <kbd className="rounded bg-black/10 px-1 py-0.5 text-[8px] dark:bg-white/10 font-bold">ENTER</kbd> to ask Dhruv's Digital Double: <span className="text-neutral-800 dark:text-neutral-200 font-semibold italic">"{aiPromptText || "..."}"</span>
                </div>
              )}
            </div>
          )}

          {/* Quick Tab Destinations */}
          {!query && (
            <div className="py-2.5">
              <p className="px-2 font-mono text-[10px] uppercase tracking-widest text-[#999999] dark:text-[#666666] mb-1">
                Navigation Destinations
              </p>
              <div className="grid grid-cols-2 gap-1">
                <button
                  onClick={() => executeCommand(() => setActiveTab("about"))}
                  className="flex items-center gap-2 rounded-lg p-2 text-left hover:bg-black/5 dark:hover:bg-white/5 text-xs text-neutral-700 dark:text-neutral-300 transition-colors"
                >
                  <User className="h-3.5 w-3.5 text-accent" />
                  <span>About Bio</span>
                </button>
                <button
                  onClick={() => executeCommand(() => setActiveTab("projects"))}
                  className="flex items-center gap-2 rounded-lg p-2 text-left hover:bg-black/5 dark:hover:bg-white/5 text-xs text-neutral-700 dark:text-neutral-300 transition-colors"
                >
                  <Layers className="h-3.5 w-3.5 text-accent" />
                  <span>Projects Showcase</span>
                </button>
                <button
                  onClick={() => executeCommand(() => setActiveTab("experience"))}
                  className="flex items-center gap-2 rounded-lg p-2 text-left hover:bg-black/5 dark:hover:bg-white/5 text-xs text-neutral-700 dark:text-neutral-300 transition-colors"
                >
                  <Briefcase className="h-3.5 w-3.5 text-accent" />
                  <span>Career Timeline</span>
                </button>
                <button
                  onClick={() => executeCommand(() => setActiveTab("contact"))}
                  className="flex items-center gap-2 rounded-lg p-2 text-left hover:bg-black/5 dark:hover:bg-white/5 text-xs text-neutral-700 dark:text-neutral-300 transition-colors"
                >
                  <PhoneCall className="h-3.5 w-3.5 text-accent" />
                  <span>Cal Booking & Form</span>
                </button>
              </div>
            </div>
          )}

          {/* Filtered Projects Results */}
          {query && filteredProjects.length > 0 && (
            <div className="py-1">
              <p className="px-2 font-mono text-[9px] uppercase tracking-widest text-neutral-400 mb-1">
                Matching Projects ({filteredProjects.length})
              </p>
              {filteredProjects.map((proj) => (
                <button
                  key={proj.id}
                  onClick={() => executeCommand(() => setActiveTab("projects"))}
                  className="flex items-center justify-between w-full rounded-xl p-2.5 text-left hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-black/5 dark:bg-white/5 text-neutral-600 dark:text-neutral-200">
                      <Terminal className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <span className="font-sans text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                        {proj.name}
                      </span>
                      <p className="font-sans text-[10px] text-neutral-500 line-clamp-1">
                        {proj.shortDescription}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="h-3 w-3 text-neutral-400" />
                </button>
              ))}
            </div>
          )}

          {/* Filtered Blog posts Results */}
          {query && filteredBlogs.length > 0 && (
            <div className="py-1 mt-1 border-t border-neutral-100 dark:border-neutral-800">
              <p className="px-2 font-mono text-[9px] uppercase tracking-widest text-neutral-400 mb-1">
                Articles & Technical Notes
              </p>
              {filteredBlogs.map((blog) => (
                <button
                  key={blog.id}
                  onClick={() => executeCommand(() => setActiveTab("blog"))}
                  className="flex items-center justify-between w-full rounded-xl p-2.5 text-left hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-black/5 dark:bg-white/5 text-neutral-600 dark:text-neutral-200">
                      <BookOpen className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <span className="font-sans text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                        {blog.title}
                      </span>
                      <p className="font-sans text-[10px] text-neutral-500 line-clamp-1">
                        {blog.date} &bull; {blog.readingTime}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="h-3 w-3 text-neutral-400" />
                </button>
              ))}
            </div>
          )}

          {/* Quick Utility Actions */}
          <div className="py-1 border-t border-neutral-100 dark:border-neutral-800 mt-2">
            <p className="px-2 font-mono text-[9px] uppercase tracking-widest text-neutral-400 mb-1">
              System Operations
            </p>
            <button
              onClick={() => executeCommand(toggleTheme)}
              className="flex items-center justify-between w-full rounded-xl p-2 text-left hover:bg-black/5 dark:hover:bg-white/5 text-xs text-neutral-700 dark:text-neutral-300 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Moon className="h-3.5 w-3.5" />
                <span>Toggle Day & Night Theme</span>
              </div>
              <span className="font-mono text-[9px] text-[#999999]">Cmd+T</span>
            </button>
            <button
              onClick={() => executeCommand(openDoubleChat)}
              className="flex items-center justify-between w-full rounded-xl p-2 text-left hover:bg-black/5 dark:hover:bg-white/5 text-xs text-neutral-700 dark:text-neutral-300 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                <span>Deploy Neural Double Double Tray</span>
              </div>
              <span className="font-mono text-[9px] text-accent font-semibold">Active AI</span>
            </button>
          </div>
        </div>

        {/* Console status footer */}
        <div className="flex h-8 items-center justify-between border-t border-neutral-100 dark:border-neutral-800 px-4 bg-neutral-50 dark:bg-neutral-900/50 font-mono text-[9px] text-neutral-500">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
            </span>
            <span>Digital Architect Command Prompt</span>
          </div>
          <div className="flex items-center gap-3">
            <span>Query: {query ? `"${query}"` : "Idle"}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
