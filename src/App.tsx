/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { AboutSection } from './components/AboutSection';
import { AiAutomationSection } from './components/AiAutomationSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { ResumeModal } from './components/ResumeModal';
import { SkillsSection } from './components/SkillsSection';
import { UIUX_CASE_STUDIES, type CaseStudy } from './data/portfolioData';

const SECTION_IDS = [
  'home',
  'about',
  'expertise',
  'portfolio',
  'ai-automation',
  'process',
  'contact',
];

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  // Track active navigation section while scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Update dynamic canonical link for SEO in SPA runtime
  useEffect(() => {
    const canonicalHref = window.location.origin + window.location.pathname;
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonicalHref;
  }, []);

  const handleNavigateCaseStudy = useCallback(
    (direction: 'prev' | 'next') => {
      if (!selectedStudy) return;
      const currentIdx = UIUX_CASE_STUDIES.findIndex(
        (study) => study.id === selectedStudy.id
      );
      if (currentIdx === -1) return;
      const nextIdx =
        direction === 'next'
          ? (currentIdx + 1) % UIUX_CASE_STUDIES.length
          : (currentIdx - 1 + UIUX_CASE_STUDIES.length) % UIUX_CASE_STUDIES.length;
      setSelectedStudy(UIUX_CASE_STUDIES[nextIdx]);
    },
    [selectedStudy]
  );

  return (
    <div className="min-h-screen bg-[#060607] text-[#F4F2EC] relative">
      {/* Subtle 2px gold reading progress hairline */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: smoothProgress, transformOrigin: '0% 50%' }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#9E8232] via-[#D4AF37] to-[#EBD07E] z-50 pointer-events-none"
      />

      <Navbar
        activeSection={activeSection}
        onOpenResume={() => setResumeOpen(true)}
      />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection onSelectCaseStudy={setSelectedStudy} />
        <AiAutomationSection />
        <ProcessSection />
        <ContactSection />
      </main>

      <Footer />

      <CaseStudyModal
        study={selectedStudy}
        onClose={() => setSelectedStudy(null)}
        onNavigate={handleNavigateCaseStudy}
      />

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
