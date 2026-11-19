import { ArrowUp } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060607] border-t border-white/[0.08] py-12">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-white/[0.06]">
          <div>
            <p className="font-serif text-2xl font-semibold text-[#F4F2EC]">Muni Prasad</p>
            <p className="text-xs text-[#949189] mt-1">
              Senior UI/UX Designer <span className="mx-1.5 text-[#D4AF37]/60">·</span> AI
              Automation Specialist
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-[#A8A59E]">
            <a href="#about" className="hover:text-[#EBD07E] transition-colors">
              About
            </a>
            <a href="#expertise" className="hover:text-[#EBD07E] transition-colors">
              Expertise
            </a>
            <a href="#portfolio" className="hover:text-[#EBD07E] transition-colors">
              Portfolio
            </a>
            <a href="#ai-automation" className="hover:text-[#EBD07E] transition-colors">
              AI Automation
            </a>
            <a href="#process" className="hover:text-[#EBD07E] transition-colors">
              Process
            </a>
            <a href="#contact" className="hover:text-[#EBD07E] transition-colors">
              Contact
            </a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#C6C3BB] hover:text-[#EBD07E] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#7D7A72]">
          <p>© {new Date().getFullYear()} Muni Prasad. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#EBD07E] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={CONTACT_INFO.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#EBD07E] transition-colors"
            >
              Behance
            </a>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#EBD07E] transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="hover:text-[#EBD07E] transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
