import { useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import type { CaseStudy } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
}

const CHAPTERS = [
  { id: 'cs-overview', label: '01. Overview' },
  { id: 'cs-problem', label: '02. Problem & Objectives' },
  { id: 'cs-research', label: '03. Research & Personas' },
  { id: 'cs-ia', label: '04. IA & User Flows' },
  { id: 'cs-wireframes', label: '05. Wireframes & UI' },
  { id: 'cs-system', label: '06. Design System' },
  { id: 'cs-impact', label: '07. Solution & Impact' },
];

export function CaseStudyModal({
  study,
  onClose,
  onNavigate,
}: CaseStudyModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!study) return;
    document.body.style.overflow = 'hidden';
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate('next');
      if (e.key === 'ArrowLeft') onNavigate('prev');
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [study, onClose, onNavigate]);

  const scrollToChapter = (id: string) => {
    const container = scrollRef.current;
    const target = document.getElementById(id);
    if (container && target) {
      const top = target.offsetTop - 96;
      container.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {study && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-[#040405]/92 backdrop-blur-md flex items-center justify-center p-0 sm:p-5 lg:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.985 }}
            transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[1220px] h-full sm:max-h-[92vh] bg-[#0B0B0E] sm:rounded-2xl border border-white/10 flex flex-col overflow-hidden"
          >
            {/* Sticky Top Reader Bar */}
            <div className="shrink-0 h-16 px-5 sm:px-8 border-b border-white/[0.08] bg-[#0B0B0E]/95 backdrop-blur-md flex items-center justify-between gap-4">
              <div className="min-w-0 flex items-center gap-3 text-xs text-[#9C9991]">
                <span className="text-[#D4AF37] font-medium whitespace-nowrap shrink-0">
                  Case Study
                </span>
                <span aria-hidden="true">/</span>
                <span className="text-[#F4F2EC] font-medium truncate">
                  {study.title}
                </span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  aria-label="Previous case study"
                  onClick={() => onNavigate('prev')}
                  className="w-9 h-9 rounded-md border border-white/10 text-[#C6C3BB] hover:text-[#F4F2EC] hover:border-[#D4AF37]/50 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next case study"
                  onClick={() => onNavigate('next')}
                  className="w-9 h-9 rounded-md border border-white/10 text-[#C6C3BB] hover:text-[#F4F2EC] hover:border-[#D4AF37]/50 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  aria-label="Close case study"
                  onClick={onClose}
                  className="ml-2 inline-flex items-center gap-1.5 h-9 px-3.5 rounded-md bg-white/[0.06] hover:bg-[#D4AF37] text-[#F4F2EC] hover:text-[#060607] text-xs font-semibold transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                  <span className="hidden sm:inline">Close</span>
                </button>
              </div>
            </div>

            {/* Scrollable Monograph Content */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto">
              <div className="max-w-[1040px] mx-auto px-5 sm:px-10 py-10 sm:py-14 space-y-16">
                {/* Hero Header */}
                <header>
                  <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#9E9B93] mb-4">
                    <span className="text-[#D4AF37] font-medium">{study.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{study.platform}</span>
                    <span aria-hidden="true">·</span>
                    <span>{study.role}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">{study.duration}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">{study.year}</span>
                  </div>

                  <h2
                    id="case-study-title"
                    className="font-serif text-3xl sm:text-5xl font-semibold text-[#F4F2EC] leading-[1.08] mb-4"
                  >
                    {study.title}
                  </h2>
                  <p className="text-base sm:text-lg text-[#B5B2AA] max-w-3xl leading-relaxed mb-8">
                    {study.subtitle}
                  </p>

                  {/* Quick Chapter Jump Links */}
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 py-4 border-y border-white/[0.08] mb-8">
                    {CHAPTERS.map((chap) => (
                      <button
                        key={chap.id}
                        type="button"
                        onClick={() => scrollToChapter(chap.id)}
                        className="text-xs font-medium text-[#A6A39B] hover:text-[#EBD07E] transition-colors whitespace-nowrap cursor-pointer"
                      >
                        {chap.label}
                      </button>
                    ))}
                  </div>

                  {/* High-Resolution Project Visual */}
                  <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-[#121216] aspect-[16/9]">
                    <ResilientImage
                      src={study.image}
                      alt={study.imageAlt}
                      fallbackTitle={study.title}
                      loading="eager"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </header>

                {/* 01. Project Overview */}
                <section id="cs-overview" className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  <div className="md:col-span-4">
                    <p className="font-mono text-xs text-[#D4AF37] mb-1">01</p>
                    <h3 className="text-xl font-semibold text-[#F4F2EC]">Project Overview</h3>
                  </div>
                  <div className="md:col-span-8 space-y-4 text-[15px] leading-[1.75] text-[#BEBBAE]">
                    <p>{study.overview}</p>
                    <div className="pt-4 border-t border-white/[0.08] grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-xs text-[#8C8982] mb-1">Role</p>
                        <p className="text-sm font-medium text-[#F4F2EC]">{study.role}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#8C8982] mb-1">Timeline</p>
                        <p className="text-sm font-medium text-[#F4F2EC]">{study.duration}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#8C8982] mb-1">Headline Outcome</p>
                        <p className="text-sm font-medium text-[#EBD07E]">{study.keyMetric}</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 02. Problem Statement & Project Objectives */}
                <section
                  id="cs-problem"
                  className="pt-12 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-12 gap-8"
                >
                  <div className="md:col-span-4">
                    <p className="font-mono text-xs text-[#D4AF37] mb-1">02</p>
                    <h3 className="text-xl font-semibold text-[#F4F2EC]">
                      Problem Statement &amp; Objectives
                    </h3>
                  </div>
                  <div className="md:col-span-8 space-y-8">
                    <div className="rounded-xl bg-[#131318] border border-white/[0.08] p-6">
                      <p className="text-xs font-medium text-[#D4AF37] mb-2">
                        Core Problem Statement
                      </p>
                      <p className="text-base leading-relaxed text-[#F4F2EC]">
                        {study.problemStatement}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-[#F4F2EC] mb-4">
                        Project Objectives
                      </h4>
                      <ul className="space-y-3">
                        {study.objectives.map((objective, idx) => (
                          <li
                            key={idx}
                            className="flex items-baseline gap-3.5 text-sm leading-relaxed text-[#BEBBAE]"
                          >
                            <span className="font-mono text-xs text-[#D4AF37] tabular-nums shrink-0">
                              0{idx + 1}
                            </span>
                            <span>{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                {/* 03. User Research & User Personas */}
                <section
                  id="cs-research"
                  className="pt-12 border-t border-white/[0.08] space-y-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-4">
                      <p className="font-mono text-xs text-[#D4AF37] mb-1">03</p>
                      <h3 className="text-xl font-semibold text-[#F4F2EC]">
                        User Research &amp; Personas
                      </h3>
                    </div>
                    <div className="md:col-span-8 space-y-6">
                      <div>
                        <h4 className="text-sm font-semibold text-[#F4F2EC] mb-2.5">
                          Research Methods
                        </h4>
                        <p className="text-sm leading-relaxed text-[#A8A59E]">
                          {study.userResearch.methods.join(' · ')}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#F4F2EC] mb-3">
                          Validated Insights
                        </h4>
                        <ul className="space-y-2.5">
                          {study.userResearch.keyInsights.map((insight, idx) => (
                            <li
                              key={idx}
                              className="text-sm leading-relaxed text-[#C4C1B8] pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-[1px] before:bg-[#D4AF37]"
                            >
                              {insight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* User Personas Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {study.personas.map((persona) => (
                      <div
                        key={persona.name}
                        className="rounded-xl bg-[#121216] border border-white/[0.08] p-6 space-y-4"
                      >
                        <div className="flex items-baseline justify-between gap-4 pb-3 border-b border-white/[0.06]">
                          <div>
                            <h4 className="text-base font-semibold text-[#F4F2EC]">
                              {persona.name}
                            </h4>
                            <p className="text-xs text-[#D4AF37]">{persona.role}</p>
                          </div>
                          <span className="font-mono text-xs text-[#9C9991] tabular-nums">
                            Age {persona.age}
                          </span>
                        </div>
                        <div className="space-y-3 text-sm">
                          <div>
                            <p className="text-xs text-[#8D8A82] mb-1">Primary Goals</p>
                            <p className="text-[#C8C5BC] leading-relaxed">{persona.goals}</p>
                          </div>
                          <div>
                            <p className="text-xs text-[#8D8A82] mb-1">Key Pain Points</p>
                            <p className="text-[#A4A199] leading-relaxed">
                              {persona.painPoints}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 04. Information Architecture & User Flows */}
                <section
                  id="cs-ia"
                  className="pt-12 border-t border-white/[0.08] space-y-10"
                >
                  <div>
                    <p className="font-mono text-xs text-[#D4AF37] mb-1">04</p>
                    <h3 className="text-xl font-semibold text-[#F4F2EC] mb-6">
                      Information Architecture &amp; User Flows
                    </h3>

                    {/* IA Module Tree */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                      {study.informationArchitecture.map((branch, idx) => (
                        <div
                          key={branch.module}
                          className="rounded-xl bg-[#111115] border border-white/[0.08] p-5"
                        >
                          <p className="font-mono text-[11px] text-[#D4AF37] mb-1 tabular-nums">
                            L1 · 0{idx + 1}
                          </p>
                          <h4 className="text-sm font-semibold text-[#F4F2EC] pb-3 mb-3 border-b border-white/[0.06]">
                            {branch.module}
                          </h4>
                          <ul className="space-y-2 text-xs text-[#A8A59E]">
                            {branch.children.map((child) => (
                              <li key={child} className="leading-relaxed">
                                {child}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Core User Flows */}
                    <h4 className="text-sm font-semibold text-[#F4F2EC] mb-4">
                      Primary User Flow Sequence
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {study.userFlows.map((step) => (
                        <div
                          key={step.stage}
                          className="rounded-xl bg-[#121216] border border-white/[0.08] p-5 space-y-3"
                        >
                          <p className="font-mono text-xs text-[#D4AF37]">{step.stage}</p>
                          <div>
                            <p className="text-[11px] text-[#8A8780] mb-0.5">User Action</p>
                            <p className="text-sm text-[#F4F2EC] leading-relaxed">
                              {step.action}
                            </p>
                          </div>
                          <div className="pt-2.5 border-t border-white/[0.06]">
                            <p className="text-[11px] text-[#8A8780] mb-0.5">
                              System Response
                            </p>
                            <p className="text-xs text-[#B5B2AA] leading-relaxed">
                              {step.systemResponse}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* 05. Wireframes & UI Design */}
                <section
                  id="cs-wireframes"
                  className="pt-12 border-t border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-8"
                >
                  <div className="lg:col-span-6 space-y-5">
                    <div>
                      <p className="font-mono text-xs text-[#D4AF37] mb-1">05</p>
                      <h3 className="text-xl font-semibold text-[#F4F2EC] mb-2">
                        Wireframes &amp; Structural Layout
                      </h3>
                      <p className="text-sm text-[#B5B2AA] leading-relaxed">
                        {study.wireframes.focus}
                      </p>
                    </div>

                    {/* Architectural Wireframe Schematic */}
                    <div className="rounded-xl bg-[#0F0F13] border border-white/[0.08] p-5">
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#8F8C84] mb-3">
                        <span>Structural Wireframe Blueprint</span>
                        <span>{study.platform}</span>
                      </div>
                      <svg
                        viewBox="0 0 420 180"
                        className="w-full h-auto"
                        aria-label="Wireframe structural layout schematic"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="416"
                          height="176"
                          rx="8"
                          fill="#09090B"
                          stroke="rgba(255,255,255,0.12)"
                        />
                        <rect
                          x="14"
                          y="14"
                          width="64"
                          height="152"
                          rx="4"
                          fill="#131318"
                          stroke="rgba(212,175,55,0.28)"
                        />
                        <rect x="24" y="28" width="44" height="8" rx="2" fill="#D4AF37" fillOpacity="0.65" />
                        <rect x="24" y="48" width="38" height="6" rx="2" fill="rgba(255,255,255,0.16)" />
                        <rect x="24" y="64" width="42" height="6" rx="2" fill="rgba(255,255,255,0.12)" />
                        <rect x="24" y="80" width="34" height="6" rx="2" fill="rgba(255,255,255,0.12)" />

                        <rect
                          x="90"
                          y="14"
                          width="316"
                          height="24"
                          rx="4"
                          fill="#131318"
                          stroke="rgba(255,255,255,0.08)"
                        />
                        <rect
                          x="90"
                          y="48"
                          width="98"
                          height="46"
                          rx="4"
                          fill="#14141A"
                          stroke="rgba(212,175,55,0.25)"
                        />
                        <rect
                          x="199"
                          y="48"
                          width="98"
                          height="46"
                          rx="4"
                          fill="#14141A"
                          stroke="rgba(255,255,255,0.08)"
                        />
                        <rect
                          x="308"
                          y="48"
                          width="98"
                          height="46"
                          rx="4"
                          fill="#14141A"
                          stroke="rgba(255,255,255,0.08)"
                        />
                        <rect
                          x="90"
                          y="104"
                          width="207"
                          height="62"
                          rx="4"
                          fill="#131318"
                          stroke="rgba(255,255,255,0.1)"
                        />
                        <path
                          d="M 104 148 Q 145 120 185 134 T 282 118"
                          fill="none"
                          stroke="#D4AF37"
                          strokeWidth="1.6"
                        />
                        <rect
                          x="308"
                          y="104"
                          width="98"
                          height="62"
                          rx="4"
                          fill="#131318"
                          stroke="rgba(255,255,255,0.08)"
                        />
                      </svg>
                      <p className="mt-3 text-xs text-[#9C9991]">{study.wireframes.layoutGrid}</p>
                    </div>

                    <ul className="space-y-2 text-sm text-[#BEBBAE]">
                      {study.wireframes.decisions.map((decision, idx) => (
                        <li key={idx} className="leading-relaxed">
                          <span className="text-[#D4AF37] mr-2">—</span>
                          {decision}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-6 space-y-5">
                    <div>
                      <p className="font-mono text-xs text-[#D4AF37] mb-1">Visual Execution</p>
                      <h3 className="text-xl font-semibold text-[#F4F2EC] mb-2">
                        UI Design Direction
                      </h3>
                      <p className="text-sm text-[#B5B2AA] leading-relaxed">
                        {study.uiDesign.direction}
                      </p>
                    </div>

                    <div className="rounded-xl overflow-hidden border border-white/[0.08] aspect-[16/10] bg-[#121216]">
                      <ResilientImage
                        src={study.image}
                        alt={`${study.title} final UI craft view`}
                        fallbackTitle={study.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <ul className="space-y-2 text-sm text-[#BEBBAE]">
                      {study.uiDesign.highlights.map((item, idx) => (
                        <li key={idx} className="leading-relaxed">
                          <span className="text-[#D4AF37] mr-2">—</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                {/* 06. Design System */}
                <section
                  id="cs-system"
                  className="pt-12 border-t border-white/[0.08] space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="md:col-span-4">
                      <p className="font-mono text-xs text-[#D4AF37] mb-1">06</p>
                      <h3 className="text-xl font-semibold text-[#F4F2EC]">
                        Design System &amp; Tokens
                      </h3>
                    </div>
                    <div className="md:col-span-8 space-y-4 text-sm text-[#B5B2AA]">
                      <p>
                        <strong className="text-[#F4F2EC] font-medium">Typography: </strong>
                        {study.designSystem.typography}
                      </p>
                      <p>
                        <strong className="text-[#F4F2EC] font-medium">Spatial Spec: </strong>
                        {study.designSystem.gridSpec}
                      </p>
                      <p>
                        <strong className="text-[#F4F2EC] font-medium">Core Components: </strong>
                        {study.designSystem.components.join(' · ')}
                      </p>
                    </div>
                  </div>

                  {/* Color Token Swatches */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {study.designSystem.swatches.map((swatch) => (
                      <div
                        key={swatch.name}
                        className="rounded-xl bg-[#111115] border border-white/[0.08] overflow-hidden"
                      >
                        <div
                          className="h-16 w-full border-b border-white/[0.08]"
                          style={{ backgroundColor: swatch.hex }}
                        />
                        <div className="p-3.5">
                          <div className="flex items-baseline justify-between gap-2">
                            <span className="text-xs font-semibold text-[#F4F2EC]">
                              {swatch.name}
                            </span>
                            <span className="font-mono text-[11px] text-[#9C9991]">
                              {swatch.hex}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#8E8B83] mt-1">{swatch.usage}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 07. Final Solution & Measured Results */}
                <section
                  id="cs-impact"
                  className="pt-12 border-t border-white/[0.08] space-y-8 pb-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="md:col-span-4">
                      <p className="font-mono text-xs text-[#D4AF37] mb-1">07</p>
                      <h3 className="text-xl font-semibold text-[#F4F2EC]">
                        Final Solution &amp; Impact
                      </h3>
                    </div>
                    <div className="md:col-span-8">
                      <p className="text-[15px] leading-[1.75] text-[#D0CDC4]">
                        {study.finalSolution}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {study.resultsAndImpact.map((res) => (
                      <div
                        key={res.label}
                        className="rounded-xl bg-[#131318] border border-[#D4AF37]/25 p-6"
                      >
                        <div className="font-mono text-3xl font-semibold text-[#EBD07E] tabular-nums mb-1.5">
                          {res.metric}
                        </div>
                        <div className="text-sm font-semibold text-[#F4F2EC] mb-1">
                          {res.label}
                        </div>
                        <p className="text-xs text-[#9C9991] leading-relaxed">{res.context}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
