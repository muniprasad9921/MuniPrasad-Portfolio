import { useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import {
  UIUX_CASE_STUDIES,
  type CaseStudy,
  type PortfolioCategory,
} from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface PortfolioSectionProps {
  onSelectCaseStudy: (study: CaseStudy) => void;
}

const CATEGORIES: PortfolioCategory[] = [
  'All',
  'Enterprise & SaaS',
  'Mobile Apps',
  'Healthcare & Civic',
];

export function PortfolioSection({ onSelectCaseStudy }: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('All');

  const filteredStudies = useMemo(() => {
    if (activeCategory === 'All') return UIUX_CASE_STUDIES;
    return UIUX_CASE_STUDIES.filter((study) => study.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-[#060607]">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        {/* Header + Category Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#D4AF37] mb-3">
              Selected Case Studies
            </p>
            <h2 className="font-serif text-[clamp(2.1rem,3.6vw,3.35rem)] font-semibold leading-[1.08] tracking-[-0.015em] text-[#F4F2EC]">
              UI/UX Product Design Portfolio
            </h2>
            <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-[#A4A199] max-w-xl">
              Explore seven end-to-end case studies across enterprise SaaS, mobile applications,
              healthcare telemetry, and civic operations. Click any project to inspect research,
              personas, IA, flows, wireframes, design systems, and measured outcomes.
            </p>
          </div>

          {/* Interactive Category Filter Segmented Control */}
          <div
            role="tablist"
            aria-label="Filter UI/UX portfolio projects"
            className="inline-flex flex-wrap items-center gap-1 p-1.5 rounded-lg bg-[#111115] border border-white/[0.08]"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-xs sm:text-[13px] font-medium rounded-md transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                    isActive
                      ? 'bg-[#D4AF37] text-[#060607] font-semibold'
                      : 'text-[#A6A39B] hover:text-[#F4F2EC]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Editorial Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-7">
          {filteredStudies.map((study, index) => {
            const isHeroTile = activeCategory === 'All' && index === 0;
            const colSpanClass = isHeroTile
              ? 'md:col-span-2 lg:col-span-12'
              : 'md:col-span-1 lg:col-span-6';

            return (
              <motion.article
                key={study.id}
                layout
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: (index % 3) * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`${colSpanClass} group`}
              >
                <button
                  type="button"
                  onClick={() => onSelectCaseStudy(study)}
                  className={`w-full h-full text-left rounded-2xl overflow-hidden bg-[#101014] border border-white/[0.08] hover:border-[#D4AF37]/45 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                    isHeroTile
                      ? 'grid grid-cols-1 lg:grid-cols-12 items-stretch'
                      : 'flex flex-col'
                  }`}
                >
                  {/* Visual Mockup Frame */}
                  <div
                    className={`relative overflow-hidden bg-[#0A0A0D] ${
                      isHeroTile
                        ? 'lg:col-span-7 aspect-[16/10] lg:aspect-auto lg:min-h-[380px]'
                        : 'aspect-[16/10]'
                    }`}
                  >
                    <ResilientImage
                      src={study.image}
                      alt={study.imageAlt}
                      fallbackTitle={study.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[#060607]/60 via-transparent to-transparent"
                    />
                  </div>

                  {/* Clean Unboxed Editorial Details */}
                  <div
                    className={`p-6 sm:p-8 flex flex-col justify-between gap-6 ${
                      isHeroTile ? 'lg:col-span-5 lg:p-10' : 'flex-1'
                    }`}
                  >
                    <div>
                      {/* Quiet Unboxed Metadata (Zero Pills) */}
                      <div className="flex flex-wrap items-center gap-2 text-xs text-[#9C9991] mb-3">
                        <span className="text-[#D4AF37] font-medium">{study.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{study.platform}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono tabular-nums">{study.year}</span>
                      </div>

                      <h3
                        className={`font-serif font-semibold text-[#F4F2EC] group-hover:text-[#EBD07E] transition-colors leading-tight mb-3 ${
                          isHeroTile ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-[26px]'
                        }`}
                      >
                        {study.title}
                      </h3>

                      <p className="text-sm leading-[1.68] text-[#A8A59E] mb-4">
                        {study.summary}
                      </p>
                    </div>

                    {/* Bottom Outcome Metric & Case Study Trigger */}
                    <div className="pt-5 border-t border-white/[0.07] flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[11px] text-[#848179] mb-0.5">Measured Impact</p>
                        <p className="font-mono text-xs sm:text-[13px] font-medium text-[#EBD07E] tabular-nums">
                          {study.keyMetric}
                        </p>
                      </div>

                      <span className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-[#F4F2EC] group-hover:text-[#EBD07E] transition-colors whitespace-nowrap shrink-0">
                        <span>Read Case Study</span>
                        <ArrowUpRight
                          className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </div>
                </button>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
