import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { CONTACT_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onOpenResume: () => void;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'ai-automation', label: 'AI Automation' },
  { id: 'process', label: 'Design Process' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar({ activeSection, onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 h-16 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#060607]/88 backdrop-blur-md border-b border-white/[0.08]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1360px] mx-auto h-full px-6 lg:px-10 flex items-center justify-between gap-6">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="font-serif text-2xl font-semibold tracking-tight text-[#F4F2EC] hover:text-[#EBD07E] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-sm"
        >
          Muni Prasad
        </a>

        {/* Zone 2: Clean single-line typography navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden xl:flex items-center gap-6"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`relative py-1 text-[13px] font-medium tracking-[0.01em] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-sm ${
                  isActive
                    ? 'text-[#EBD07E]'
                    : 'text-[#B5B2AA] hover:text-[#F4F2EC]'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 right-0 -bottom-0.5 h-[1px] bg-[#D4AF37] transition-transform duration-200 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Resume View/Download + Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-[13px] font-medium text-[#EBD07E] bg-transparent border border-[#D4AF37]/40 hover:border-[#EBD07E] hover:bg-[#D4AF37]/10 active:scale-[0.98] rounded-md transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <Download className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Resume</span>
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-[13px] font-semibold text-[#060607] bg-[#D4AF37] hover:bg-[#EBD07E] active:scale-[0.98] rounded-md transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EBD07E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#060607]"
          >
            Let&apos;s Talk
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="xl:hidden inline-flex items-center justify-center w-11 h-11 rounded-md border border-white/10 text-[#F4F2EC] hover:border-[#D4AF37]/50 hover:text-[#EBD07E] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="xl:hidden bg-[#0B0B0E]/98 backdrop-blur-xl border-b border-white/10 px-6 pt-4 pb-6"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    className={`min-h-[44px] flex items-center justify-between px-3 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-[#EBD07E] bg-white/[0.04]'
                        : 'text-[#C6C3BB] hover:text-[#F4F2EC] hover:bg-white/[0.03]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="text-xs font-mono text-[#D4AF37]">Active</span>
                    )}
                  </a>
                );
              })}

              <div className="mt-3 pt-3 border-t border-white/[0.08] grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenResume();
                  }}
                  className="min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#EBD07E] border border-[#D4AF37]/40 hover:bg-[#D4AF37]/10 rounded-md transition-colors cursor-pointer"
                >
                  <span>View Resume</span>
                </button>
                <a
                  href={CONTACT_INFO.resumeUrl}
                  download={CONTACT_INFO.resumeFileName}
                  onClick={() => setMobileOpen(false)}
                  className="min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#F4F2EC] border border-white/15 hover:border-[#D4AF37]/50 rounded-md transition-colors"
                >
                  <Download className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
                  <span>Download PDF</span>
                </a>
              </div>

              <button
                type="button"
                onClick={() => handleNavClick('contact')}
                className="mt-2.5 w-full min-h-[44px] flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-[#060607] bg-[#D4AF37] hover:bg-[#EBD07E] rounded-md transition-colors cursor-pointer"
              >
                Let&apos;s Talk
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
