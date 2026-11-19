import { motion } from 'motion/react';
import { PORTFOLIO_ASSETS } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

const PRACTICE_PILLARS = [
  {
    index: '01',
    title: 'Design Philosophy',
    body: 'Clarity is the highest form of sophistication. Every interface should reduce cognitive friction while giving people unmistakable control—especially when AI operates behind the scenes.',
  },
  {
    index: '02',
    title: 'Core Strengths',
    body: 'Bridging executive product strategy with meticulous execution: from stakeholder discovery, UX architecture, and tokenized Figma systems to live n8n workflows and Voice AI agents.',
  },
  {
    index: '03',
    title: 'Problem-Solving Approach',
    body: 'I dissect complex business constraints first, validate assumptions with real users, prototype rapidly in high fidelity, and engineer scalable design or automation systems that compound ROI.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#060607]">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-16">
          <p className="text-sm font-medium text-[#D4AF37] mb-3">About Me</p>
          <h2 className="font-serif text-[clamp(2.1rem,3.8vw,3.35rem)] font-semibold leading-[1.08] tracking-[-0.015em] text-[#F4F2EC]">
            Five years shaping intuitive digital products—now amplified by intelligent AI automation.
          </h2>
        </div>

        {/* Asymmetric Editorial Monograph Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-stretch">
          {/* Left Visual Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#111114] aspect-[4/3] lg:flex-1">
              <ResilientImage
                src={PORTFOLIO_ASSETS.aboutWorkspace}
                alt="Minimalist dark product designer desk with wireframe laptop, architectural sketchbook, and brass pen"
                className="w-full h-full object-cover object-[12%_center]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#060607]/85 via-transparent to-transparent"
              />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs text-[#D4AF37] mb-0.5">Hybrid Discipline</p>
                  <p className="text-sm font-medium text-[#F4F2EC]">
                    Human-Centered UX × Agentic Systems
                  </p>
                </div>
                <span className="font-mono text-xs text-[#C6C3BB] tabular-nums">
                  5 YRS EXP
                </span>
              </div>
            </div>

            {/* Quiet Editorial Statement */}
            <div className="pt-5 border-t border-white/[0.08] grid grid-cols-2 gap-6">
              <div>
                <p className="text-xs text-[#8F8C84] mb-1">Primary Focus</p>
                <p className="text-sm font-medium text-[#F4F2EC]">
                  SaaS, Enterprise &amp; Mobile UX
                </p>
              </div>
              <div>
                <p className="text-xs text-[#8F8C84] mb-1">Automation Stack</p>
                <p className="text-sm font-medium text-[#F4F2EC]">
                  Voice AI, LLMs &amp; n8n Systems
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div className="space-y-5 text-[15px] sm:text-base leading-[1.75] text-[#B8B5AD] max-w-[66ch] mb-10">
              <p>
                I am <strong className="font-semibold text-[#F4F2EC]">Muni Prasad</strong>, a
                Senior UI/UX Designer with 5 years of hands-on experience designing end-to-end
                digital products across enterprise SaaS, healthcare telemetry, civic platforms, and
                high-retention mobile applications.
              </p>
              <p>
                My craft is rooted in user-centered design methodologies—transforming ambiguous
                business requirements and dense operational workflows into clear, accessible
                experiences backed by scalable design systems.
              </p>
              <p>
                Beyond visual interfaces, I specialize in designing and building{' '}
                <strong className="font-semibold text-[#F4F2EC]">
                  AI-powered products and autonomous workflow automations
                </strong>
                . By combining product thinking with Voice AI agents, LLM orchestration, and n8n
                integrations, I help forward-thinking teams automate repetitive work and unlock
                measurable operational leverage.
              </p>
            </div>

            {/* Whitespace & Hairline Separated Philosophy / Strengths / Approach */}
            <div className="border-t border-white/[0.08] divide-y divide-white/[0.08]">
              {PRACTICE_PILLARS.map((pillar) => (
                <div
                  key={pillar.index}
                  className="py-6 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-baseline"
                >
                  <div className="sm:col-span-4 flex items-baseline gap-3">
                    <span className="font-mono text-xs text-[#D4AF37] tabular-nums">
                      {pillar.index}.
                    </span>
                    <h3 className="text-base font-semibold text-[#F4F2EC]">{pillar.title}</h3>
                  </div>
                  <p className="sm:col-span-8 text-sm leading-[1.68] text-[#A29F97]">
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
