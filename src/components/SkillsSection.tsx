import { useState } from 'react';
import { motion } from 'motion/react';
import { SKILL_CATEGORIES, type SkillItem } from '../data/portfolioData';

type ActiveTab = 'uiux' | 'tools' | 'ai';

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('uiux');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(
    SKILL_CATEGORIES[0].items[0]
  );

  const currentCategory =
    SKILL_CATEGORIES.find((cat) => cat.id === activeTab) || SKILL_CATEGORIES[0];

  const handleCategoryChange = (id: ActiveTab) => {
    setActiveTab(id);
    const nextCat = SKILL_CATEGORIES.find((cat) => cat.id === id);
    if (nextCat && nextCat.items.length > 0) {
      setSelectedSkill(nextCat.items[0]);
    }
  };

  return (
    <section
      id="expertise"
      className="py-24 lg:py-32 bg-[#0A0A0D] border-y border-white/[0.06]"
    >
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        {/* Header + Interactive Segmented Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#D4AF37] mb-3">
              Skills &amp; Expertise
            </p>
            <h2 className="font-serif text-[clamp(2.1rem,3.6vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.015em] text-[#F4F2EC]">
              Product craft meets autonomous systems engineering.
            </h2>
          </div>

          {/* Functional Segmented Filter Tabs */}
          <div
            role="tablist"
            aria-label="Skill categories"
            className="inline-flex flex-wrap items-center gap-1 p-1.5 rounded-lg bg-[#131318] border border-white/[0.08]"
          >
            {SKILL_CATEGORIES.map((category) => {
              const isActive = category.id === activeTab;
              return (
                <button
                  key={category.id}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-4 py-2 text-xs sm:text-[13px] font-medium rounded-md transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                    isActive
                      ? 'bg-[#D4AF37] text-[#060607] font-semibold'
                      : 'text-[#A8A59E] hover:text-[#F4F2EC]'
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Overview + Interactive Mastery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Active Category Context & Selected Capability Deep-Dive */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <p className="font-mono text-xs text-[#D4AF37] tabular-nums mb-2">
                {currentCategory.items.length} Core Capabilities
              </p>
              <h3 className="text-xl font-semibold text-[#F4F2EC] mb-3">
                {currentCategory.label}
              </h3>
              <p className="text-sm leading-[1.7] text-[#A4A199]">
                {currentCategory.subtitle}
              </p>
            </div>

            {/* Interactive Focused Capability Preview */}
            <div className="rounded-xl bg-[#121216] border border-white/[0.08] p-6">
              <div className="flex items-baseline justify-between gap-4 mb-3">
                <span className="text-xs text-[#8D8A82]">Applied Practice</span>
                <span className="font-mono text-sm font-medium text-[#EBD07E] tabular-nums">
                  {selectedSkill.proficiency}%
                </span>
              </div>
              <h4 className="text-base font-semibold text-[#F4F2EC] mb-2">
                {selectedSkill.name}
              </h4>
              <p className="text-sm leading-relaxed text-[#B2AFA7]">
                {selectedSkill.application}
              </p>
            </div>

            {/* Full Discipline Index Summary (Quiet Unboxed Metadata) */}
            <div className="pt-6 border-t border-white/[0.08] space-y-2.5 text-xs text-[#8F8C84]">
              <p className="text-[#D4AF37] font-medium">All Three Pillars</p>
              <p>
                UI/UX &amp; Product Design (10) <span className="mx-1.5">·</span> Tools &amp;
                Technologies (8) <span className="mx-1.5">·</span> AI Automation (9)
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Skill Bars List */}
          <div className="lg:col-span-8">
            <motion.div
              key={currentCategory.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 border-t border-white/[0.08]"
            >
              {currentCategory.items.map((skill, idx) => {
                const isSelected = selectedSkill.name === skill.name;
                return (
                  <button
                    key={skill.name}
                    type="button"
                    onMouseEnter={() => setSelectedSkill(skill)}
                    onFocus={() => setSelectedSkill(skill)}
                    onClick={() => setSelectedSkill(skill)}
                    className={`group text-left py-4 px-3 -mx-3 rounded-lg border-b border-white/[0.06] transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                      isSelected ? 'bg-white/[0.035]' : 'hover:bg-white/[0.02]'
                    }`}
                  >
                    <div className="flex items-baseline justify-between gap-4 mb-2">
                      <span
                        className={`text-sm font-medium transition-colors ${
                          isSelected
                            ? 'text-[#EBD07E]'
                            : 'text-[#ECEAE4] group-hover:text-[#F4F2EC]'
                        }`}
                      >
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-[#9C9991] tabular-nums shrink-0">
                        {skill.proficiency}%
                      </span>
                    </div>

                    {/* Architectural Mastery Meter */}
                    <div className="h-[3px] w-full bg-white/[0.07] rounded-full overflow-hidden mb-2">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: skill.proficiency / 100 }}
                        transition={{
                          duration: 0.55,
                          delay: idx * 0.03,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        style={{ transformOrigin: 'left' }}
                        className={`h-full rounded-full ${
                          isSelected
                            ? 'bg-gradient-to-r from-[#D4AF37] to-[#F3DC92]'
                            : 'bg-[#D4AF37]/70 group-hover:bg-[#D4AF37]'
                        }`}
                      />
                    </div>

                    <p className="text-xs text-[#8D8A82] line-clamp-1">
                      {skill.application}
                    </p>
                  </button>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
