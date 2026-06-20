import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Message } from "../types";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  RefreshCw,
  Terminal,
  Clock,
  ArrowUpRight,
} from "lucide-react";

interface DigitalDoubleChatProps {
  isOpen: boolean;
  onClose: () => void;
  setActiveTab: (tab: "home" | "about" | "experience" | "projects" | "skills" | "blog" | "contact") => void;
}

export default function DigitalDoubleChat({
  isOpen,
  onClose,
  setActiveTab,
}: DigitalDoubleChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      role: "assistant",
      content: "Hello! I am Dhruv's **Neural Clone**, calibrated with his full career matrix, technological opinions, and research data. \n\nAsk me anything about my systems, stacks, availability, or design philosophies!",
      timestamp: new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }),
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [loading, setLoading] = useState(false);
  
  const bottomRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    { text: "What is your main tech stack?", label: "Tech Stack" },
    { text: "Are you available for opportunities?", label: "Availability" },
    { text: "Tell me about Amorphic AI project.", label: "Featured Project" },
    { text: "How can I book a call with you?", label: "Book Call" },
  ];

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMsg: Message = {
      id: Math.random().toString(36).substr(2, 9),
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Send history up to last 10 messages to keep server latency low
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      const botMsg: Message = {
        id: Math.random().toString(36).substr(2, 9),
        role: "assistant",
        content: data.content,
        timestamp: new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err: any) {
      const errorMsg: Message = {
        id: Math.random().toString(36).substr(2, 9),
        role: "assistant",
        content: `**Neural Warning:** I was unable to compile a secure response pathway. \n\nError: ${
          err.message || "Synaptic timeout"
        }. Please check the server secrets configuration.`,
        timestamp: new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: "init",
        role: "assistant",
        content: "Hello! I am Dhruv's **Neural Clone**, calibrated with his full career matrix, technological opinions, and research data. \n\nAsk me anything about my systems, stacks, availability, or design philosophies!",
        timestamp: new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }),
      },
    ]);
  };

  // Safe client-side mini markdown parsed decorator so we don't have broken JSX issues
  const renderMessageContent = (text: string) => {
    // Process markdown lists, bolding, line breaks
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      let decorated = line;
      // Bold syntax standard **some bold**
      const boldRegex = /\*\*(.*?)\*\*/g;
      const parts = [];
      let lastIdx = 0;
      let match;

      while ((match = boldRegex.exec(decorated)) !== null) {
        if (match.index > lastIdx) {
          parts.push(decorated.substring(lastIdx, match.index));
        }
        parts.push(
          <strong key={match.index} className="font-bold text-neutral-900 dark:text-neutral-50">
            {match[1]}
          </strong>
        );
        lastIdx = boldRegex.lastIndex;
      }
      if (lastIdx < decorated.length) {
        parts.push(decorated.substring(lastIdx));
      }

      const isListItem = line.trim().startsWith("- ") || line.trim().startsWith("* ");
      if (isListItem) {
        return (
          <li key={idx} className="ml-4 list-disc text-xs text-[#222222] dark:text-[#E2E2E2] leading-relaxed mt-1">
            {parts.length > 0 ? parts : line.replace(/^[-*]\s+/, "")}
          </li>
        );
      }

      return (
        <p key={idx} className="text-xs text-[#222222] dark:text-[#E2E2E2] leading-relaxed mt-1.5 min-h-[1em]">
          {parts.length > 0 ? parts : line}
        </p>
      );
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 32, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="glass fixed bottom-6 right-6 z-50 flex h-[500px] w-full max-w-sm flex-col overflow-hidden rounded-[24px] shadow-2xl border border-neutral-200/80 dark:border-neutral-800"
        >
          {/* Header Bar */}
          <div className="flex h-14 items-center justify-between border-b border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/20 px-4 shrink-0">
            <div className="flex items-center gap-2">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white dark:bg-white dark:text-black">
                <Sparkles className="h-4.5 w-4.5 text-accent animate-pulse" />
              </div>
              <div>
                <span className="font-sans text-xs font-bold text-neutral-900 dark:text-neutral-100">
                  <span>Dhruv's Neural Double</span>
                </span>
                <div className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-success animate-ping" />
                  <span className="font-mono text-[9px] uppercase tracking-wider text-normal">
                    Synced & Live
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleClearChat}
                title="Reset Synapses"
                className="rounded-full p-1.5 text-neutral-400 hover:text-neutral-900 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                <RefreshCw className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={onClose}
                className="rounded-full p-1.5 text-neutral-400 hover:text-neutral-900 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Conversation Core */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => {
              const isAssistant = msg.role === "assistant";
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isAssistant ? "items-start" : "items-end"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-[18px] p-3 shadow-sm ${
                      isAssistant
                        ? "bg-[#FFFFFF] text-black border border-neutral-150 dark:bg-neutral-900 dark:text-white dark:border-neutral-800"
                        : "bg-black text-white dark:bg-white dark:text-black"
                    }`}
                  >
                    {isAssistant ? (
                      renderMessageContent(msg.content)
                    ) : (
                      <p className="text-xs leading-relaxed">{msg.content}</p>
                    )}
                  </div>
                  <span className="mt-1 font-mono text-[8px] text-[#999999]">
                    {msg.timestamp}
                  </span>
                </div>
              );
            })}
            {loading && (
              <div className="flex items-start">
                <div className="rounded-[18px] bg-neutral-100/60 p-3 dark:bg-neutral-900/60 border border-neutral-100 dark:border-neutral-800 shrink-0">
                  <div className="flex gap-1 h-2 items-center">
                    <span className="w-1 bg-accent h-1 rounded-full animate-bounce" />
                    <span className="w-1 bg-accent h-1 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1 bg-accent h-1 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Fast-Click Quick Triggers */}
          {messages.length === 1 && (
            <div className="px-4 shrink-0 overflow-x-auto py-1 flex items-center gap-1 bg-neutral-50/40 dark:bg-neutral-950/10">
              {quickPrompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => sendMessage(p.text)}
                  className="shrink-0 text-[10px] font-sans font-medium px-2.5 py-1.5 rounded-full border border-neutral-200 hover:border-accent hover:text-accent dark:border-neutral-800 dark:text-[#999999] dark:hover:text-white dark:hover:border-neutral-700 transition-all shrink-0 bg-white dark:bg-neutral-900 select-none"
                >
                  {p.label}
                </button>
              ))}
            </div>
          )}

          {/* Input Box Footer form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(inputVal);
            }}
            className="border-t border-neutral-150 dark:border-neutral-800 p-3 flex gap-2 bg-neutral-50/50 dark:bg-neutral-950/20 shrink-0"
          >
            <input
              type="text"
              placeholder="Ask about systems, files, scheduler..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="flex-1 rounded-xl border border-neutral-200 bg-white px-3 py-2 text-xs font-medium text-neutral-800 placeholder-neutral-400 focus:border-accent focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100"
            />
            <button
              type="submit"
              disabled={!inputVal.trim() || loading}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-white hover:opacity-90 disabled:opacity-50 transition-opacity"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
