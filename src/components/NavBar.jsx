import { useState, useEffect } from "react";
import { navLinks } from "../constants";
import { audioFX } from "../utils/audioFX";

const NavBar = ({ onResumeClick, onOpenCLI, theme = "dark", onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner relative">
        <a href="#hero" className="logo flex items-center gap-2.5 group" onClick={() => setMobileMenuOpen(false)}>
          <div className="size-8 md:size-9 rounded-full overflow-hidden border border-[#00f0ff]/50 shadow-[0_0_12px_rgba(0,240,255,0.3)] shrink-0 transition-transform duration-300 group-hover:scale-110">
            <img 
              src="/images/mpsl.png" 
              alt="Preet Karwal" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-semibold text-lg md:text-xl tracking-tight">Mr_Elegant</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Action Buttons & Mobile Hamburger */}
        <div className="flex items-center gap-2.5 md:gap-3">
          
          {/* Global Theme Toggle Button */}
          {onToggleTheme && (
            <button
              onClick={() => {
                audioFX.playClick();
                onToggleTheme();
              }}
              className="flex items-center justify-center p-2 rounded-lg bg-black-200/80 hover:bg-white/10 text-white-50 hover:text-white border border-white-50/15 text-xs font-mono transition-all cursor-pointer shadow-md"
              title={theme === "light" ? "Switch to Dark Theme" : "Switch to Light Theme"}
              aria-label="Toggle Color Theme"
            >
              <span>{theme === "light" ? "🌙" : "☀️"}</span>
            </button>
          )}

          {/* HUD Command Terminal Trigger Button */}
          <button
            onClick={onOpenCLI}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-black-200/80 hover:bg-[#00f0ff]/15 text-[#00f0ff] border border-[#00f0ff]/30 text-xs font-mono transition-all cursor-pointer shadow-[0_0_12px_rgba(0,240,255,0.12)]"
            title="Open HUD Command Terminal (Ctrl + K)"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping inline-block" />
            <span className="font-bold">CLI</span>
            <kbd className="hidden sm:inline-block bg-white/10 px-1 py-0.2 rounded text-[9px] text-white-50">Ctrl K</kbd>
          </button>

          <button
            onClick={onResumeClick}
            className="hidden sm:inline-block text-white-50 hover:text-white font-medium transition-colors cursor-pointer text-sm md:text-base border-b border-transparent hover:border-[#4cc9f0] pb-0.5 print:hidden"
          >
            Resume
          </button>

          <a href="#contact" className="hidden sm:flex contact-btn group">
            <div className="inner">
              <span>Contact me</span>
            </div>
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden p-2 rounded-lg bg-black-200 border border-white-50/10 text-white-50 hover:text-white hover:border-[#4cc9f0] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 p-5 bg-black-100/95 backdrop-blur-xl border border-white-50/15 rounded-2xl shadow-2xl flex flex-col gap-4 animate-[fadeIn_0.2s_ease-out]">
          <ul className="flex flex-col gap-3">
            {navLinks.map(({ link, name }) => (
              <li key={name}>
                <a
                  href={link}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-lg text-white-50 hover:text-white hover:bg-white/10 text-base font-medium transition-all"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>

          <div className="border-t border-white-50/10 pt-4 flex flex-col gap-3">
            {onToggleTheme && (
              <button
                onClick={() => {
                  onToggleTheme();
                }}
                className="w-full py-2.5 px-4 text-center rounded-lg bg-black-200 text-white font-mono text-sm transition-colors cursor-pointer border border-white-50/10 flex items-center justify-center gap-2"
              >
                <span>{theme === "light" ? "🌙 Switch to Dark Mode" : "☀️ Switch to Light Mode"}</span>
              </button>
            )}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCLI();
              }}
              className="w-full py-2.5 px-4 text-center rounded-lg bg-[#00f0ff]/10 hover:bg-[#00f0ff]/20 text-[#00f0ff] font-mono text-sm transition-colors cursor-pointer border border-[#00f0ff]/30"
            >
              ⌨ Open HUD Command Palette (CLI)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onResumeClick();
              }}
              className="w-full py-2.5 px-4 text-center rounded-lg bg-white/10 hover:bg-white/20 text-[#4cc9f0] font-semibold text-sm transition-colors cursor-pointer border border-[#4cc9f0]/30"
            >
              📄 View Curriculum Vitae
            </button>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 text-center rounded-lg bg-gradient-to-r from-[#4cc9f0] to-[#7209b7] text-white font-semibold text-sm shadow-lg transition-transform active:scale-95"
            >
              💬 Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
