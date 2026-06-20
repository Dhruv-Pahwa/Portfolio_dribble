import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BlogPost } from "../types";
import { blogPostsData } from "../data";
import { Search, BookOpen, Clock, Calendar, ArrowLeft, ArrowUpRight, Share2, Sparkles } from "lucide-react";

export default function BlogView() {
  const [searchVal, setSearchVal] = useState("");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  
  // Reading scroll progress track
  const [scrollPercent, setScrollPercent] = useState(0);
  const articleContainerRef = useRef<HTMLDivElement>(null);

  // Manage body overflow during modal read states
  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedPost]);

  // Track article scroll status
  const handleArticleScroll = () => {
    const el = articleContainerRef.current;
    if (!el) return;
    const totalHeight = el.scrollHeight - el.clientHeight;
    if (totalHeight <= 0) return;
    const pct = (el.scrollTop / totalHeight) * 100;
    setScrollPercent(pct);
  };

  const filteredPosts = blogPostsData.filter(
    (post) =>
      post.title.toLowerCase().includes(searchVal.toLowerCase()) ||
      post.preview.toLowerCase().includes(searchVal.toLowerCase()) ||
      post.category.toLowerCase().includes(searchVal.toLowerCase())
  );

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
              Architectural Logbook
            </span>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
              Technical Insights
            </h2>
            <p className="font-sans text-xs text-[#666666] dark:text-[#999999] max-w-lg leading-relaxed">
              Synthesized thoughts covering state machines, edge latency optimization, compiler metrics, and creative AI development.
            </p>
          </div>

          {/* Integrated search block */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search post content..."
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              className="w-full rounded-xl border border-neutral-200 bg-white pl-9.5 pr-4 py-2 text-xs font-semibold text-neutral-800 placeholder-neutral-400 focus:border-accent focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100"
            />
          </div>
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => {
                setSelectedPost(post);
                setScrollPercent(0);
              }}
              className="glass-card flex flex-col justify-between rounded-3xl p-6 h-[260px] cursor-pointer hover:border-accent/40 active:scale-98 text-left border border-neutral-150 dark:border-neutral-850"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-accent font-bold px-2 py-0.5 bg-accent/5 rounded-md">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-[9px] text-neutral-500">
                    <Clock className="h-3 w-3" />
                    <span>{post.readingTime}</span>
                  </div>
                </div>

                <h3 className="font-display text-base font-bold text-neutral-900 dark:text-neutral-50 line-clamp-2 leading-tight">
                  {post.title}
                </h3>

                <p className="font-sans text-xs text-[#666666] dark:text-[#999999] line-clamp-3 leading-relaxed">
                  {post.preview}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-neutral-100 dark:border-neutral-800 pt-3">
                <span className="font-mono text-[9px] text-[#999999]">{post.date}</span>
                <span className="inline-flex items-center gap-1 font-sans text-xs font-bold text-accent">
                  Read article <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          ))}

          {filteredPosts.length === 0 && (
            <div className="col-span-full text-center py-16 bg-white dark:bg-neutral-900 rounded-[28px] border border-neutral-100 dark:border-neutral-800">
              <p className="font-mono text-xs text-neutral-400">No telemetry log logbooks matching search filters.</p>
              <button
                onClick={() => setSearchVal("")}
                className="mt-3 text-xs text-accent font-bold hover:underline"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>
      </motion.div>

      {/* Full typeset Article Modal Overlay */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">
            {/* Top Reading Progress Indicator bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-neutral-100 dark:bg-neutral-900 z-50">
              <div
                style={{ width: `${scrollPercent}%` }}
                className="h-full bg-accent progress-bar-glow transition-all"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              ref={articleContainerRef}
              onScroll={handleArticleScroll}
              className="glass w-full max-w-3xl h-screen md:h-[85vh] md:rounded-3xl overflow-y-auto shadow-2xl relative p-6 md:p-12 text-left"
            >
              {/* Back controls */}
              <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-8">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="flex items-center gap-1.5 font-sans text-xs font-bold text-neutral-600 hover:text-black dark:text-[#999999] dark:hover:text-white"
                >
                  <ArrowLeft className="h-4.5 w-4.5" />
                  <span>Exit Reader</span>
                </button>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert("Article vector address copied to system clipboard!");
                    }}
                    title="Share Article Link"
                    className="rounded-full p-2 hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-neutral-400 hover:text-black dark:hover:text-white"
                  >
                    <Share2 className="h-4 w-4" />
                  </button>
                  <span className="font-mono text-[9px] text-[#999999] uppercase">Reading Panel</span>
                </div>
              </div>

              {/* Header details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 font-mono text-[10px]">
                  <span className="text-accent font-bold uppercase">{selectedPost.category}</span>
                  <span className="text-neutral-300 dark:text-neutral-800">&bull;</span>
                  <span className="text-neutral-500">{selectedPost.date}</span>
                  <span className="text-neutral-300 dark:text-neutral-800">&bull;</span>
                  <span className="text-neutral-500">{selectedPost.readingTime}</span>
                </div>

                <h1 className="font-display text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 md:text-4xl">
                  {selectedPost.title}
                </h1>

                <p className="font-sans text-sm italic text-neutral-500 border-l-2 border-accent pl-4">
                  {selectedPost.preview}
                </p>
              </div>

              {/* Core prose text Markdown-like layout rendering */}
              <article className="prose prose-neutral dark:prose-invert max-w-none text-neutral-800 dark:text-[#D2D2D2] leading-relaxed text-xs space-y-6">
                {selectedPost.content.split("\n\n").map((para, pIdx) => {
                  const trimmed = para.trim();
                  if (!trimmed) return null;

                  // Heading matching: e.g. "### Heading Title"
                  if (trimmed.startsWith("### ")) {
                    return (
                      <h4 key={pIdx} className="font-display text-md font-bold text-neutral-900 dark:text-neutral-50 pt-3">
                        {trimmed.substring(4)}
                      </h4>
                    );
                  }
                  if (trimmed.startsWith("#### ")) {
                    return (
                      <h5 key={pIdx} className="font-display text-xs font-bold text-neutral-900 dark:text-neutral-50 pt-2 uppercase tracking-wide">
                        {trimmed.substring(5)}
                      </h5>
                    );
                  }

                  // Code block matching: starts and ends with ```
                  if (trimmed.startsWith("```") && trimmed.endsWith("```")) {
                    const blockText = trimmed.split("\n").slice(1, -1).join("\n");
                    return (
                      <pre key={pIdx} className="bg-neutral-100 p-4 rounded-xl font-mono text-[10px] text-neutral-800 dark:bg-neutral-950 dark:text-neutral-300 overflow-x-auto border border-neutral-150 dark:border-neutral-900 leading-normal">
                        <code>{blockText}</code>
                      </pre>
                    );
                  }

                  // List Bullet block matching
                  if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
                    return (
                      <ul key={pIdx} className="list-disc pl-5 py-1 space-y-1">
                        {trimmed.split("\n").map((li, lIdx) => (
                          <li key={lIdx} className="text-xs">{li.replace(/^[-*]\s+/, "")}</li>
                        ))}
                      </ul>
                    );
                  }

                  return (
                    <p key={pIdx} className="leading-relaxed">
                      {trimmed}
                    </p>
                  );
                })}
              </article>

              {/* Neural Disclaimer */}
              <div className="mt-12 pt-6 border-t border-neutral-150 dark:border-neutral-800 rounded-xl bg-accent-light/5 border border-accent/10 p-4 flex gap-3 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                <Sparkles className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-mono text-[10px] text-accent font-semibold uppercase">Neural Node sync verified</p>
                  <p className="text-[11px] mt-0.5">Author permission logs registered under SHA-256 signature code: digital_architect_milestone.ts. All logs reflect verified implementation benchmarks.</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
