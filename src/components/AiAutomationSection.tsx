import { useEffect, useState } from 'react';
import { ArrowRight, Play, RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';
import { AI_AUTOMATION_PROJECTS, type AutomationProject } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

export function AiAutomationSection() {
  const [selectedId, setSelectedId] = useState<string>(AI_AUTOMATION_PROJECTS[0].id);
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(true);

  const selectedProject: AutomationProject =
    AI_AUTOMATION_PROJECTS.find((p) => p.id === selectedId) || AI_AUTOMATION_PROJECTS[0];

  useEffect(() => {
    if (!isSimulating) return;
    const timer = window.setInterval(() => {
      setActiveStepIdx((prev) => (prev + 1) % selectedProject.workflowSteps.length);
    }, 2200);
    return () => window.clearInterval(timer);
  }, [isSimulating, selectedProject.id, selectedProject.workflowSteps.length]);

  const handleSelectProject = (id: string) => {
    setSelectedId(id);
    setActiveStepIdx(0);
    setIsSimulating(true);
  };

  return (
    <section
      id="ai-automation"
      className="py-24 lg:py-32 bg-[#0A0A0D] border-y border-white/[0.06]"
    >
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7">
            <p className="text-sm font-medium text-[#D4AF37] mb-3">
              AI Automation Solutions
            </p>
            <h2 className="font-serif text-[clamp(2.1rem,3.6vw,3.35rem)] font-semibold leading-[1.08] tracking-[-0.015em] text-[#F4F2EC]">
              Autonomous agents and workflow architectures built for business ROI.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-[15px] leading-relaxed text-[#A4A199]">
              Select any of the seven production automation systems below to explore the business
              problem, interactive workflow diagram, AI orchestration architecture, tools, and
              expected impact.
            </p>
          </div>
        </div>

        {/* Interactive Master-Detail Studio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: All 7 AI Automation Systems Selector */}
          <div
            role="tablist"
            aria-label="AI automation projects"
            className="lg:col-span-4 border-t border-white/[0.08] divide-y divide-white/[0.08]"
          >
            {AI_AUTOMATION_PROJECTS.map((project) => {
              const isSelected = project.id === selectedProject.id;
              return (
                <button
                  key={project.id}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  onClick={() => handleSelectProject(project.id)}
                  className={`w-full text-left py-4 px-4 -mx-0 transition-colors duration-150 flex items-start justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                    isSelected
                      ? 'bg-[#141419] text-[#F4F2EC]'
                      : 'bg-transparent text-[#A8A59E] hover:bg-white/[0.025] hover:text-[#F4F2EC]'
                  }`}
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2.5 mb-1">
                      <span
                        className={`font-mono text-xs tabular-nums ${
                          isSelected ? 'text-[#EBD07E]' : 'text-[#848179]'
                        }`}
                      >
                        {project.index}
                      </span>
                      <span className="text-[11px] text-[#8E8B83] truncate">
                        {project.domain}
                      </span>
                    </div>
                    <h3
                      className={`text-sm sm:text-[15px] font-semibold leading-snug ${
                        isSelected ? 'text-[#EBD07E]' : 'text-[#ECEAE4]'
                      }`}
                    >
                      {project.title}
                    </h3>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 mt-1 shrink-0 transition-transform duration-150 ${
                      isSelected
                        ? 'text-[#D4AF37] translate-x-0.5'
                        : 'text-white/20'
                    }`}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Interactive Automation Blueprint & Live Pipeline Visualizer */}
          <motion.div
            key={selectedProject.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 rounded-2xl bg-[#101014] border border-white/[0.08] overflow-hidden"
          >
            {/* Visual Orchestration Mockup Header */}
            <div className="relative h-56 sm:h-64 overflow-hidden bg-[#070709] border-b border-white/[0.08]">
              <ResilientImage
                src={selectedProject.image}
                alt={selectedProject.imageAlt}
                fallbackTitle={selectedProject.title}
                className="w-full h-full object-cover opacity-75"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#101014] via-[#101014]/55 to-transparent"
              />
              <div className="absolute bottom-5 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <p className="text-xs text-[#D4AF37] font-medium mb-1">
                    {selectedProject.index} · {selectedProject.domain}
                  </p>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F4F2EC]">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    if (isSimulating) {
                      setIsSimulating(false);
                    } else {
                      setActiveStepIdx(0);
                      setIsSimulating(true);
                    }
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#0B0B0E]/85 border border-[#D4AF37]/45 text-xs font-medium text-[#EBD07E] hover:bg-[#D4AF37] hover:text-[#060607] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {isSimulating ? (
                    <>
                      <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Pause Flow</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Simulate Flow</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-8">
              {/* Interactive Animated Workflow Pipeline Diagram */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <p className="text-xs font-medium text-[#D4AF37]">
                    Interactive Automation Workflow Diagram
                  </p>
                  <p className="font-mono text-[11px] text-[#949189] tabular-nums">
                    Step 0{activeStepIdx + 1} / 0{selectedProject.workflowSteps.length} · Click any node
                  </p>
                </div>

                {/* 4-Node Connected Pipeline */}
                <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {selectedProject.workflowSteps.map((step, idx) => {
                    const isActive = idx === activeStepIdx;
                    const isCompleted = idx < activeStepIdx;
                    return (
                      <button
                        key={step.id}
                        type="button"
                        onClick={() => {
                          setActiveStepIdx(idx);
                          setIsSimulating(false);
                        }}
                        className={`relative text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                          isActive
                            ? 'bg-[#191712] border-[#D4AF37]/70'
                            : isCompleted
                              ? 'bg-[#131318] border-[#D4AF37]/25'
                              : 'bg-[#121216] border-white/[0.07] hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="font-mono text-[11px] text-[#D4AF37] tabular-nums">
                            0{idx + 1}
                          </span>
                          <span className="font-mono text-[10px] text-[#9E9B93] truncate">
                            {step.tool}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#8E8B83] mb-0.5">{step.stage}</p>
                        <h4
                          className={`text-sm font-semibold leading-snug mb-1.5 ${
                            isActive ? 'text-[#EBD07E]' : 'text-[#F4F2EC]'
                          }`}
                        >
                          {step.title}
                        </h4>
                        <p className="text-xs leading-relaxed text-[#A4A199]">
                          {step.detail}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Business Problem & AI Solution Architecture */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/[0.08]">
                <div>
                  <h4 className="text-xs font-medium text-[#D4AF37] mb-2">
                    Business Problem
                  </h4>
                  <p className="text-sm leading-[1.7] text-[#B8B5AD]">
                    {selectedProject.businessProblem}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-medium text-[#D4AF37] mb-2">
                    AI Solution Architecture
                  </h4>
                  <p className="text-sm leading-[1.7] text-[#D8D5CD]">
                    {selectedProject.aiSolution}
                  </p>
                </div>
              </div>

              {/* Tools & Technologies (Clean Unboxed Typographic List) */}
              <div className="pt-6 border-t border-white/[0.08]">
                <h4 className="text-xs font-medium text-[#8F8C84] mb-2">
                  Tools &amp; Technologies
                </h4>
                <p className="text-sm text-[#ECE9E1] leading-relaxed">
                  {selectedProject.tools.map((tool, i) => (
                    <span key={tool}>
                      {tool}
                      {i < selectedProject.tools.length - 1 && (
                        <span className="mx-2.5 text-[#D4AF37]/60">·</span>
                      )}
                    </span>
                  ))}
                </p>
              </div>

              {/* Expected Business Benefits */}
              <div className="pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-6">
                {selectedProject.benefits.map((benefit) => (
                  <div key={benefit.label}>
                    <div className="font-mono text-2xl sm:text-[26px] font-semibold text-[#EBD07E] tabular-nums mb-1">
                      {benefit.value}
                    </div>
                    <p className="text-xs sm:text-[13px] text-[#B5B2AA]">
                      {benefit.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
