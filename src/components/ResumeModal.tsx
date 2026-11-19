import { useEffect } from 'react';
import { Download, FileText, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { CONTACT_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

export function ResumeModal({ open, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-[#040405]/92 backdrop-blur-md flex items-center justify-center p-0 sm:p-5 lg:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.985 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[1060px] h-full sm:h-[90vh] bg-[#0B0B0E] sm:rounded-2xl border border-white/10 flex flex-col overflow-hidden"
          >
            {/* Top Viewer Bar */}
            <div className="shrink-0 h-16 px-5 sm:px-7 border-b border-white/[0.08] bg-[#0B0B0E]/95 flex items-center justify-between gap-4">
              <div className="min-w-0 flex items-center gap-3">
                <FileText className="w-4 h-4 text-[#D4AF37] shrink-0" aria-hidden="true" />
                <div className="min-w-0">
                  <h2
                    id="resume-modal-title"
                    className="text-sm font-semibold text-[#F4F2EC] truncate"
                  >
                    Tanjavuru Muni Prasad — Resume
                  </h2>
                  <p className="text-[11px] text-[#9C9991] truncate">
                    Senior UX/UI Designer · Design Systems &amp; AI-Enabled Practice
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                <a
                  href={CONTACT_INFO.resumeUrl}
                  download={CONTACT_INFO.resumeFileName}
                  className="inline-flex items-center gap-2 h-9 px-4 rounded-md bg-[#D4AF37] hover:bg-[#EBD07E] text-[#060607] text-xs font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EBD07E]"
                >
                  <Download className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Download PDF</span>
                </a>

                <button
                  type="button"
                  aria-label="Close resume preview"
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-md bg-white/[0.06] hover:bg-white/[0.12] text-[#F4F2EC] text-xs font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                  <span className="hidden sm:inline">Close</span>
                </button>
              </div>
            </div>

            {/* Embedded PDF Document Viewport */}
            <div className="flex-1 bg-[#141418] relative overflow-hidden">
              <object
                data={`${CONTACT_INFO.resumeUrl}#view=FitH`}
                type="application/pdf"
                aria-label="Muni Prasad Senior UX/UI Designer Resume PDF"
                className="w-full h-full"
              >
                <iframe
                  src={`${CONTACT_INFO.resumeUrl}#view=FitH`}
                  title="Muni Prasad Resume PDF Preview"
                  className="w-full h-full border-0"
                />
                {/* Graceful fallback if embedded PDF viewer is unavailable */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-[#0D0D10]">
                  <div className="w-12 h-12 rounded-xl border border-[#D4AF37]/35 flex items-center justify-center text-[#D4AF37] mb-4">
                    <FileText className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[#F4F2EC] mb-2">
                    Muni Prasad — Senior UX/UI Designer Resume
                  </h3>
                  <p className="text-sm text-[#A6A39B] max-w-md mb-6">
                    Your browser preview is restricted for embedded PDFs. Download the full
                    2-page resume PDF directly below.
                  </p>
                  <a
                    href={CONTACT_INFO.resumeUrl}
                    download={CONTACT_INFO.resumeFileName}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#D4AF37] hover:bg-[#EBD07E] text-[#060607] text-sm font-semibold transition-colors"
                  >
                    <Download className="w-4 h-4" aria-hidden="true" />
                    <span>Download Resume PDF</span>
                  </a>
                </div>
              </object>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
