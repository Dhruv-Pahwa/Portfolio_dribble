import { useState, useRef, useEffect } from "react";
import { Menu, X, Github, Linkedin, FileText, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.body.classList.contains("dark");
    }
    return false;
  });
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleDarkMode = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <header className="py-8 flex justify-between items-center relative">
      {/* Left: Logo and Email */}
      <div className="flex items-center gap-3">
        {/* Logo */}
        <div className="relative flex h-8 w-8 items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 22 22 2 22" />
          </svg>
        </div>
        
        {/* Orange Dot */}
        <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
        
        {/* Email */}
        <a href="mailto:dhruvpahwa02@gmail.com" className={`font-semibold text-sm hover:underline ${isDark ? 'text-neutral-200' : ''}`}>
          dhruvpahwa02@gmail.com
        </a>
      </div>

      {/* Right: Dark Mode Toggle + Hamburger Menu */}
      <div className="flex items-center gap-2">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className={`h-10 w-10 flex items-center justify-center rounded-full shadow-sm transition-all duration-300 border ${
            isDark
              ? "bg-[#1a1a1a] border-neutral-700 hover:bg-[#252525] text-amber-400"
              : "bg-white border-neutral-100 hover:bg-neutral-50 text-neutral-700"
          }`}
          aria-label="Toggle dark mode"
        >
          {isDark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
        </button>

        {/* Hamburger Menu */}
        <div ref={menuRef} className="relative z-50">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`h-10 w-10 flex items-center justify-center rounded-full shadow-sm transition-colors border ${
              isDark
                ? "bg-[#1a1a1a] border-neutral-700 hover:bg-[#252525]"
                : "bg-white border-neutral-100 hover:bg-neutral-50"
            }`}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Dropdown Menu Option Deck */}
          {isOpen && (
            <div className={`absolute right-0 mt-2.5 w-48 rounded-[24px] shadow-xl p-2 z-50 flex flex-col gap-1 transition-all ${
              isDark
                ? "bg-[#1a1a1a] border border-neutral-700/80"
                : "bg-white border border-neutral-100/80"
            }`}>
              <a 
                href="https://github.com/Dhruv-Pahwa" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center gap-2.5 px-4 py-3 text-xs font-semibold rounded-xl transition-all ${
                  isDark
                    ? "text-neutral-200 hover:text-white hover:bg-neutral-800"
                    : "text-neutral-800 hover:text-black hover:bg-neutral-50"
                }`}
              >
                <Github className="h-4 w-4 text-[#ff6b00]" />
                <span>GitHub Profile</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/dhruvpahwa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center gap-2.5 px-4 py-3 text-xs font-semibold rounded-xl transition-all ${
                  isDark
                    ? "text-neutral-200 hover:text-[#0077b5] hover:bg-[#0077b5]/10"
                    : "text-neutral-800 hover:text-[#0077b5] hover:bg-[#0077b5]/5"
                }`}
              >
                <Linkedin className="h-4 w-4 text-[#0077b5]" />
                <span>LinkedIn Network</span>
              </a>
              <a 
                href="/Dhruv_Pahwa_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center gap-2.5 px-4 py-3 text-xs font-semibold rounded-xl transition-all ${
                  isDark
                    ? "text-neutral-200 hover:text-emerald-success hover:bg-emerald-success/10"
                    : "text-neutral-800 hover:text-emerald-success hover:bg-emerald-success/5"
                }`}
              >
                <FileText className="h-4 w-4 text-emerald-success" />
                <span>Dhruv's Resume</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
