import { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { HERO_METRICS, PORTFOLIO_ASSETS } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface ArchitectureNode {
  id: string;
  index: string;
  discipline: string;
  title: string;
  description: string;
  deliverable: string;
}

const ARCHITECTURE_NODES: ArchitectureNode[] = [
  {
    id: 'ux-strategy',
    index: '01',
    discipline: 'Product Strategy',
    title: 'UX Strategy & Architecture',
    description:
      'Translating intricate enterprise workflows into intuitive journeys grounded in behavioral research.',
    deliverable: 'Research · IA · Journeys',
  },
  {
    id: 'design-systems',
    index: '02',
    discipline: 'Visual Craft',
    title: 'Design Systems & Tokens',
    description:
      'Scalable Figma variable systems and WCAG-compliant component libraries built for engineering velocity.',
    deliverable: 'Figma · Tokens · WCAG AA',
  },
  {
    id: 'ai-ux',
    index: '03',
    discipline: 'Intelligent Interfaces',
    title: 'AI-Native Product UX',
    description:
      'Human-in-the-loop multimodal interfaces, voice companions, and transparent agent confirmation patterns.',
    deliverable: 'Voice UX · Streaming UI',
  },
  {
    id: 'ai-automation',
    index: '04',
    discipline: 'Operational Scale',
    title: 'Agentic AI Automation',
    description:
      'Autonomous Voice AI, n8n pipelines, and CRM integrations that eliminate manual business friction.',
    deliverable: 'n8n · Voice AI · CRM Sync',
  },
];

const MARQUEE_DISCIPLINES = [
  'UX Strategy',
  'Product Design',
  'Design Systems',
  'AI-Native Interfaces',
  'Voice AI Agents',
  'n8n Workflow Automation',
  'Enterprise Dashboards',
  'CRM Intelligence',
];

export function HeroSection() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>(ARCHITECTURE_NODES[0].id);

  const selectedNode =
    ARCHITECTURE_NODES.find((node) => node.id === selectedNodeId) || ARCHITECTURE_NODES[0];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-0 overflow-hidden bg-[#060607]"
    >
      {/* Subtle architectural top radial illumination */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[960px] h-[420px] rounded-full bg-[#D4AF37]/[0.05] blur-[120px]"
      />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        {/* Split-Screen Editorial Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch pb-16 lg:pb-20">
          {/* Left Column: Brand & Typographic Authority */}
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm font-medium text-[#D4AF37] tracking-[0.02em] mb-5"
              >
                Senior UI/UX Designer <span className="mx-2 text-white/25">|</span> AI Automation Specialist
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-[clamp(3rem,5.8vw,5.25rem)] font-semibold leading-[0.98] tracking-[-0.02em] text-[#F4F2EC] mb-6"
              >
                Muni Prasad
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl sm:text-2xl font-medium leading-[1.35] text-[#ECE8DE] max-w-xl mb-6"
              >
                Designing Digital Experiences.{' '}
                <span className="font-serif italic font-medium text-[#EBD07E]">
                  Building Intelligent Solutions.
                </span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="text-[15px] sm:text-base leading-[1.7] text-[#A6A39B] max-w-[56ch] mb-9"
              >
                With 5 years of end-to-end product design experience, I craft high-clarity SaaS
                platforms, mobile applications, and tokenized design systems—paired with
                production AI agents and workflow automations that turn complex operations into
                effortless systems.
              </motion.p>

              {/* Action Controls */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center gap-4 mb-10"
              >
                <button
                  type="button"
                  onClick={() => scrollToSection('portfolio')}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-[#060607] bg-[#D4AF37] hover:bg-[#EBD07E] active:scale-[0.98] rounded-md transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EBD07E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#060607]"
                >
                  <span>View My Work</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-medium text-[#F4F2EC] bg-transparent border border-white/15 hover:border-[#D4AF37]/60 hover:text-[#EBD07E] active:scale-[0.98] rounded-md transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                >
                  <span>Let&apos;s Connect</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </motion.div>
            </div>

            {/* Clean Unboxed Core Pillars Footer Strip inside Hero Left */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-6 border-t border-white/[0.08]"
            >
              <p className="text-xs text-[#88857E] mb-2">Core Practice Areas</p>
              <p className="text-sm text-[#D7D4CC] leading-relaxed">
                UX Strategy <span className="mx-2 text-[#D4AF37]/70">·</span> Product Design{' '}
                <span className="mx-2 text-[#D4AF37]/70">·</span> Design Systems{' '}
                <span className="mx-2 text-[#D4AF37]/70">·</span> AI UX{' '}
                <span className="mx-2 text-[#D4AF37]/70">·</span> AI Automation
              </p>
            </motion.div>
          </div>

          {/* Right Column: Interactive Design x AI Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="relative flex-1 min-h-[440px] lg:min-h-[520px] rounded-2xl overflow-hidden border border-white/[0.09] bg-[#0D0D10] flex flex-col justify-between">
              {/* High-Fidelity Obsidian & Gold Architectural Artwork */}
              <div className="absolute inset-0">
                <ResilientImage
                  src={PORTFOLIO_ASSETS.heroSculpture}
                  alt="Abstract dark glass UI architecture planes intersecting warm gold neural pathways"
                  loading="eager"
                  className="w-full h-full object-cover opacity-80"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#060607] via-[#060607]/45 to-[#060607]/25"
                />
              </div>

              {/* Subtle Animated SVG Golden Bridge Overlay */}
              <svg
                aria-hidden="true"
                viewBox="0 0 600 220"
                className="relative z-10 w-full h-44 sm:h-52 pointer-events-none opacity-90"
              >
                <defs>
                  <linearGradient id="goldPulse" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#F3DC92" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                {/* Architectural Hairline Grid Curves */}
                <path
                  d="M 48 150 C 160 150, 175 68, 295 68 C 415 68, 435 135, 552 135"
                  fill="none"
                  stroke="rgba(212, 175, 55, 0.28)"
                  strokeWidth="1.25"
                />
                <path
                  d="M 48 92 C 185 92, 220 156, 330 156 C 430 156, 460 74, 552 74"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.14)"
                  strokeWidth="1"
                  strokeDasharray="4 5"
                />
                {/* Animated Luminous Signal Traveling Between Design & AI */}
                <motion.path
                  d="M 48 150 C 160 150, 175 68, 295 68 C 415 68, 435 135, 552 135"
                  fill="none"
                  stroke="url(#goldPulse)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0.22, pathOffset: 0 }}
                  animate={{ pathOffset: [0, 1] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
                />
                {/* Precision Anchor Points */}
                {[
                  { cx: 48, cy: 150 },
                  { cx: 295, cy: 68 },
                  { cx: 552, cy: 135 },
                ].map((pt, idx) => (
                  <g key={idx}>
                    <circle
                      cx={pt.cx}
                      cy={pt.cy}
                      r="5"
                      fill="#060607"
                      stroke="#D4AF37"
                      strokeWidth="1.5"
                    />
                    <circle cx={pt.cx} cy={pt.cy} r="2" fill="#EBD07E" />
                  </g>
                ))}
              </svg>

              {/* Interactive Discipline Bridge Panel at Bottom of Hero Canvas */}
              <div className="relative z-10 p-6 sm:p-7">
                <div className="surface-glass rounded-xl border border-white/10 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/[0.08]">
                    <span className="text-xs font-medium text-[#D4AF37]">
                      Dual-Discipline Architecture
                    </span>
                    <span className="text-xs font-mono text-[#A6A39B]">
                      {selectedNode.deliverable}
                    </span>
                  </div>

                  {/* Interactive Node Tabs */}
                  <div
                    role="tablist"
                    aria-label="Design and AI architecture pillars"
                    className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-4"
                  >
                    {ARCHITECTURE_NODES.map((node) => {
                      const active = node.id === selectedNode.id;
                      return (
                        <button
                          key={node.id}
                          role="tab"
                          type="button"
                          aria-selected={active}
                          onClick={() => setSelectedNodeId(node.id)}
                          className={`text-left px-3 py-2.5 rounded-lg transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                            active
                              ? 'bg-[#D4AF37]/15 border border-[#D4AF37]/50 text-[#F4F2EC]'
                              : 'bg-white/[0.03] border border-white/[0.06] text-[#9E9B93] hover:text-[#F4F2EC] hover:border-white/15'
                          }`}
                        >
                          <div className="font-mono text-[11px] text-[#D4AF37] mb-0.5 tabular-nums">
                            {node.index}
                          </div>
                          <div className="text-xs font-medium truncate">
                            {node.discipline}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Selected Discipline Summary */}
                  <motion.div
                    key={selectedNode.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h2 className="text-base font-semibold text-[#F4F2EC] mb-1">
                      {selectedNode.title}
                    </h2>
                    <p className="text-[13px] leading-relaxed text-[#B5B2AA]">
                      {selectedNode.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Quantitative Proof Strip Below Hero Split */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-8 border-y border-white/[0.08]">
          {HERO_METRICS.map((item) => (
            <div key={item.label} className="space-y-1.5">
              <div className="font-mono text-2xl sm:text-3xl font-medium text-[#F4F2EC] tabular-nums tracking-tight">
                {item.value}
              </div>
              <div className="text-sm font-medium text-[#EBD07E]">{item.label}</div>
              <p className="text-xs text-[#949189] leading-relaxed">{item.context}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Editorial Marquee Divider */}
      <div
        aria-hidden="true"
        className="w-full overflow-hidden border-b border-white/[0.06] bg-[#09090C] py-3.5"
      >
        <div className="animate-editorial-marquee flex items-center gap-8 text-xs tracking-[0.06em] text-[#8A8780]">
          {[...MARQUEE_DISCIPLINES, ...MARQUEE_DISCIPLINES].map((term, index) => (
            <span key={`${term}-${index}`} className="flex items-center gap-8 whitespace-nowrap">
              <span>{term}</span>
              <span className="text-[#D4AF37]/50">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
