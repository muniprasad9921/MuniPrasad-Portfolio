import { useState } from 'react';
import { motion } from 'motion/react';
import {
  AI_PROCESS_STAGES,
  DESIGN_PROCESS_STAGES,
  type ProcessStage,
} from '../data/portfolioData';

type TrackMode = 'design' | 'ai';

export function ProcessSection() {
  const [activeTrack, setActiveTrack] = useState<TrackMode>('design');
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const stages: ProcessStage[] =
    activeTrack === 'design' ? DESIGN_PROCESS_STAGES : AI_PROCESS_STAGES;
  const activeStage = stages[selectedIndex] || stages[0];

  const handleTrackSwitch = (track: TrackMode) => {
    setActiveTrack(track);
    setSelectedIndex(0);
  };

  return (
    <section id="process" className="py-24 lg:py-32 bg-[#060607]">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        {/* Header + Process Track Switch */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#D4AF37] mb-3">
              End-to-End Methodology
            </p>
            <h2 className="font-serif text-[clamp(2.1rem,3.6vw,3.35rem)] font-semibold leading-[1.08] tracking-[-0.015em] text-[#F4F2EC]">
              Structured rigor from initial discovery to autonomous deployment.
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Methodology lifecycle tracks"
            className="inline-flex items-center gap-1 p-1.5 rounded-lg bg-[#111115] border border-white/[0.08]"
          >
            <button
              role="tab"
              type="button"
              aria-selected={activeTrack === 'design'}
              onClick={() => handleTrackSwitch('design')}
              className={`px-4 py-2 text-xs sm:text-[13px] font-medium rounded-md transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                activeTrack === 'design'
                  ? 'bg-[#D4AF37] text-[#060607] font-semibold'
                  : 'text-[#A6A39B] hover:text-[#F4F2EC]'
              }`}
            >
              UI/UX Design Process (9 Stages)
            </button>
            <button
              role="tab"
              type="button"
              aria-selected={activeTrack === 'ai'}
              onClick={() => handleTrackSwitch('ai')}
              className={`px-4 py-2 text-xs sm:text-[13px] font-medium rounded-md transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                activeTrack === 'ai'
                  ? 'bg-[#D4AF37] text-[#060607] font-semibold'
                  : 'text-[#A6A39B] hover:text-[#F4F2EC]'
              }`}
            >
              AI Automation Process (8 Stages)
            </button>
          </div>
        </div>

        {/* Interactive Stage Inspector Banner */}
        <motion.div
          key={`${activeTrack}-${activeStage.number}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl bg-[#111115] border border-[#D4AF37]/25 p-6 sm:p-8 lg:p-10 mb-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          <div className="lg:col-span-5">
            <p className="font-mono text-xs text-[#D4AF37] tabular-nums mb-2">
              {activeTrack === 'design' ? 'Design Lifecycle' : 'AI Automation Lifecycle'} · Stage{' '}
              {activeStage.number} of 0{stages.length}
            </p>
            <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-[#F4F2EC] mb-3">
              {activeStage.number}. {activeStage.title}
            </h3>
            <p className="text-sm sm:text-[15px] leading-[1.7] text-[#B8B5AD]">
              {activeStage.summary}
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:pl-8 lg:border-l lg:border-white/[0.08]">
            <div>
              <p className="text-xs font-medium text-[#D4AF37] mb-3">Key Deliverables</p>
              <ul className="space-y-2.5 text-sm text-[#DEDBD3]">
                {activeStage.deliverables.map((item) => (
                  <li key={item} className="leading-snug">
                    <span className="text-[#D4AF37] mr-2">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium text-[#D4AF37] mb-3">Stage Outcome</p>
              <p className="text-sm leading-[1.7] text-[#B5B2AA]">{activeStage.outcome}</p>
            </div>
          </div>
        </motion.div>

        {/* Complete Step-by-Step Interactive Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 ${
            activeTrack === 'design' ? 'lg:grid-cols-3' : 'lg:grid-cols-4'
          } gap-4`}
        >
          {stages.map((stage, idx) => {
            const isSelected = idx === selectedIndex;
            return (
              <button
                key={`${activeTrack}-${stage.number}`}
                type="button"
                onClick={() => setSelectedIndex(idx)}
                className={`text-left p-5 rounded-xl border transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                  isSelected
                    ? 'bg-[#171612] border-[#D4AF37]/60'
                    : 'bg-[#0D0D10] border-white/[0.07] hover:border-white/20 hover:bg-[#121216]'
                }`}
              >
                <div className="flex items-baseline justify-between gap-2 mb-2.5">
                  <span
                    className={`font-mono text-xs tabular-nums ${
                      isSelected ? 'text-[#EBD07E]' : 'text-[#D4AF37]/80'
                    }`}
                  >
                    {stage.number}
                  </span>
                  <span className="text-[11px] text-[#7D7A72]">
                    {stage.deliverables.length} deliverables
                  </span>
                </div>
                <h4
                  className={`text-base font-semibold mb-1.5 ${
                    isSelected ? 'text-[#EBD07E]' : 'text-[#F4F2EC]'
                  }`}
                >
                  {stage.title}
                </h4>
                <p className="text-xs leading-relaxed text-[#9C9991] line-clamp-2">
                  {stage.summary}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
