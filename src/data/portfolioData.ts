export type PortfolioCategory =
  | 'All'
  | 'Enterprise & SaaS'
  | 'Mobile Apps'
  | 'Healthcare & Civic';

export interface Persona {
  name: string;
  role: string;
  age: string;
  goals: string;
  painPoints: string;
}

export interface DesignTokenSwatch {
  name: string;
  hex: string;
  usage: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: Exclude<PortfolioCategory, 'All'>;
  year: string;
  platform: string;
  role: string;
  duration: string;
  featured?: boolean;
  image: string;
  imageAlt: string;
  summary: string;
  keyMetric: string;
  overview: string;
  problemStatement: string;
  objectives: string[];
  userResearch: {
    methods: string[];
    keyInsights: string[];
  };
  personas: Persona[];
  informationArchitecture: {
    module: string;
    children: string[];
  }[];
  userFlows: {
    stage: string;
    action: string;
    systemResponse: string;
  }[];
  wireframes: {
    focus: string;
    decisions: string[];
    layoutGrid: string;
  };
  uiDesign: {
    direction: string;
    highlights: string[];
  };
  designSystem: {
    typography: string;
    gridSpec: string;
    swatches: DesignTokenSwatch[];
    components: string[];
  };
  finalSolution: string;
  resultsAndImpact: {
    metric: string;
    label: string;
    context: string;
  }[];
}

export interface AutomationWorkflowStep {
  id: string;
  stage: string;
  title: string;
  detail: string;
  tool: string;
}

export interface AutomationProject {
  id: string;
  index: string;
  title: string;
  domain: string;
  summary: string;
  businessProblem: string;
  aiSolution: string;
  tools: string[];
  workflowSteps: AutomationWorkflowStep[];
  benefits: {
    value: string;
    label: string;
  }[];
  image: string;
  imageAlt: string;
}

export interface SkillItem {
  name: string;
  proficiency: number;
  application: string;
}

export interface SkillCategory {
  id: 'uiux' | 'tools' | 'ai';
  label: string;
  subtitle: string;
  items: SkillItem[];
}

export interface ProcessStage {
  number: string;
  title: string;
  summary: string;
  deliverables: string[];
  outcome: string;
}

export const PORTFOLIO_ASSETS = {
  heroSculpture: '/src/assets/images/hero_design_ai_sculpture_1795069914174.jpg',
  enterpriseCrm: '/src/assets/images/project_enterprise_crm_1795069913930.jpg',
  aiMobileApp: '/src/assets/images/project_ai_mobile_app_1795069913204.jpg',
  healthcareDashboard: '/src/assets/images/project_healthcare_dashboard_1795069916163.jpg',
  policeCaseMgmt: '/src/assets/images/project_police_case_mgmt_1795069926946.jpg',
  mobileAppsSuite: '/src/assets/images/project_mobile_apps_suite_1795069913747.jpg',
  aiOrchestration: '/src/assets/images/ai_automation_orchestration_1795069914172.jpg',
  aboutWorkspace: '/src/assets/images/about_designer_workspace_1795069913374.jpg',
};

export const CONTACT_INFO = {
  name: 'Muni Prasad',
  email: 'muniprasad9921@gmail.com',
  linkedin: 'https://www.linkedin.com/in/muniprasadt1',
  behance: 'https://www.behance.net/muniprasad1',
  whatsappNumber: '919553477689',
  whatsappUrl:
    'https://wa.me/919553477689?text=Hello%20Muni%20Prasad%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20UI%2FUX%20or%20AI%20automation%20project.',
  resumeUrl: '/assets/aistudio/Muni_Prasad_Resume_SeniorUXUI_66802bd4.pdf',
  resumeFileName: 'Muni_Prasad_Resume_SeniorUXUI.pdf',
};

export const HERO_METRICS = [
  {
    value: '5+ Years',
    label: 'Product Design Experience',
    context: 'End-to-end UX strategy & enterprise systems',
  },
  {
    value: '35+ Products',
    label: 'Web & Mobile Shipped',
    context: 'SaaS, healthcare, civic, and consumer apps',
  },
  {
    value: '18+ Systems',
    label: 'AI Workflows Deployed',
    context: 'Voice agents, n8n pipelines & CRM sync',
  },
  {
    value: '42% Faster',
    label: 'Task Completion Gain',
    context: 'Average efficiency lift across redesigned flows',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'uiux',
    label: 'UI/UX & Product Design',
    subtitle:
      'Human-centered research, systems thinking, and precision interface architecture for complex enterprise and consumer software.',
    items: [
      {
        name: 'User Research & Analysis',
        proficiency: 95,
        application: 'Contextual inquiry, stakeholder interviews, and behavioral synthesis.',
      },
      {
        name: 'User Personas & Empathy Mapping',
        proficiency: 92,
        application: 'Evidence-backed behavioral archetypes aligning product and engineering.',
      },
      {
        name: 'Information Architecture',
        proficiency: 96,
        application: 'Taxonomies, navigation hierarchies, and multi-role enterprise sitemaps.',
      },
      {
        name: 'User Journey Mapping',
        proficiency: 94,
        application: 'End-to-end service blueprints uncovering high-friction drop-off points.',
      },
      {
        name: 'Wireframing & Prototyping',
        proficiency: 98,
        application: 'Low-to-high fidelity interactive flows for rapid stakeholder alignment.',
      },
      {
        name: 'Interaction Design',
        proficiency: 95,
        application: 'Micro-interactions, state transitions, and tactile feedback choreography.',
      },
      {
        name: 'Responsive Web & Mobile Design',
        proficiency: 97,
        application: 'Fluid multi-breakpoint systems across iOS, Android, and desktop web.',
      },
      {
        name: 'Usability Testing',
        proficiency: 92,
        application: 'Moderated validation sessions, task success scoring, and iterative refinement.',
      },
      {
        name: 'Accessibility & WCAG',
        proficiency: 94,
        application: 'WCAG 2.1 AA/AAA contrast, keyboard navigation, and screen-reader semantics.',
      },
      {
        name: 'Design Systems & Design Tokens',
        proficiency: 97,
        application: 'Scalable token architectures, Figma variables, and developer-ready specs.',
      },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Technologies',
    subtitle:
      'Modern visual craft software paired with next-generation AI-native design and engineering environments.',
    items: [
      {
        name: 'Figma',
        proficiency: 99,
        application: 'Auto-layout systems, multi-brand variables, interactive component libraries.',
      },
      {
        name: 'Adobe Photoshop',
        proficiency: 90,
        application: 'Editorial retouching, bespoke visual art direction, and mockup compositing.',
      },
      {
        name: 'Adobe Illustrator',
        proficiency: 92,
        application: 'Precision iconography, vector systems, and geometric brand identity marks.',
      },
      {
        name: 'FigJam',
        proficiency: 96,
        application: 'Collaborative discovery workshops, user flow mapping, and IA sprints.',
      },
      {
        name: 'Google AI Studio',
        proficiency: 95,
        application: 'Multimodal prompt architecture, structured JSON schemas, and AI prototyping.',
      },
      {
        name: 'Claude AI',
        proficiency: 94,
        application: 'Agentic reasoning workflows, UX copy refinement, and complex system specs.',
      },
      {
        name: 'Cursor',
        proficiency: 92,
        application: 'Rapid interactive front-end prototyping and design-to-code implementation.',
      },
      {
        name: 'AI-Powered Design & Dev Tools',
        proficiency: 96,
        application: 'Integrating generative media, code acceleration, and automated QA pipelines.',
      },
    ],
  },
  {
    id: 'ai',
    label: 'AI Automation',
    subtitle:
      'Autonomous agents, conversational voice pipelines, and resilient API orchestrations that eliminate operational bottlenecks.',
    items: [
      {
        name: 'AI Agents & Agentic Workflows',
        proficiency: 95,
        application: 'Multi-step reasoning agents with tool calling, guardrails, and memory.',
      },
      {
        name: 'Voice AI Agents',
        proficiency: 93,
        application: 'Low-latency conversational phone agents for booking, intake, and triage.',
      },
      {
        name: 'AI Chatbots',
        proficiency: 96,
        application: 'Context-aware RAG assistants embedded across web, WhatsApp, and Telegram.',
      },
      {
        name: 'n8n Workflow Automation',
        proficiency: 97,
        application: 'Self-hosted event-driven workflows connecting webhooks, LLMs, and ERPs.',
      },
      {
        name: 'CRM Automation',
        proficiency: 94,
        application: 'Automated enrichment, pipeline stage updates, and intelligent follow-ups.',
      },
      {
        name: 'Lead Generation & Qualification',
        proficiency: 95,
        application: '24/7 inbound scoring, intent detection, and calendar routing workflows.',
      },
      {
        name: 'LLM Integration',
        proficiency: 94,
        application: 'Structured outputs, function calling, evaluation rubrics, and fallback routing.',
      },
      {
        name: 'Business Process Automation',
        proficiency: 93,
        application: 'End-to-end document extraction, invoice triage, and reporting automation.',
      },
      {
        name: 'AI-Powered Customer Support',
        proficiency: 95,
        application: 'Tier-1 autonomous ticket resolution with seamless human escalation context.',
      },
    ],
  },
];

export const UIUX_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'enterprise-crm-dashboard',
    title: 'Enterprise CRM Dashboard',
    subtitle: 'Unified revenue intelligence and deal pipeline command center for B2B sales teams',
    category: 'Enterprise & SaaS',
    year: '2025',
    platform: 'Web SaaS · Desktop',
    role: 'Lead Product Designer',
    duration: '14 Weeks',
    featured: true,
    image: PORTFOLIO_ASSETS.enterpriseCrm,
    imageAlt: 'Dark-mode Enterprise CRM dashboard displaying revenue analytics and account pipelines',
    summary:
      'Redesigned a fragmented multi-region CRM into an executive-ready revenue workspace with predictive forecasting and single-click pipeline workflows.',
    keyMetric: '+38% Pipeline Velocity in 90 Days',
    overview:
      'A high-growth B2B software organization struggled with disconnected spreadsheets, slow account lookup, and inconsistent deal forecasting across 180 account executives. I led the end-to-end UX overhaul to unify pipeline visibility, real-time account health, and automated activity capture inside a crisp modular workspace.',
    problemStatement:
      'Sales representatives spent 4.2 hours per week manually updating opportunity fields across six nested tabs, resulting in stale executive forecasts and missed renewal windows.',
    objectives: [
      'Reduce deal update friction from 7 clicks to 2 inline interactions.',
      'Surface real-time revenue risk and stage velocity without overwhelming daily workflows.',
      'Establish a scalable dark-and-light tokenized design system for 12 enterprise modules.',
      'Achieve WCAG 2.1 AA compliance across dense tabular data grids.',
    ],
    userResearch: {
      methods: [
        '18 contextual shadowing sessions with Account Executives & Sales Ops',
        'Quantitative funnel audit across 42,000 logged CRM sessions',
        'Competitive benchmark of 5 enterprise revenue platforms',
      ],
      keyInsights: [
        '74% of reps only needed 6 core fields during live prospect calls, yet forms displayed 28 fields by default.',
        'VP Sales leaders exported charts to decks every Monday because dashboard KPIs lacked quarter-over-quarter attribution.',
        'Keyboard-first command lookup cut account switching time in half for power users.',
      ],
    },
    personas: [
      {
        name: 'Arjun Mehta',
        role: 'Senior Enterprise Account Executive',
        age: '32',
        goals: 'Log call notes rapidly, track multi-stakeholder deals, and spot stalled opportunities early.',
        painPoints: 'Slow page loads, buried renewal histories, and repetitive manual stage logging.',
      },
      {
        name: 'Claire Bennett',
        role: 'VP of Revenue Operations',
        age: '41',
        goals: 'Trust quarterly forecast rollups and inspect regional conversion bottlenecks in seconds.',
        painPoints: 'Inconsistent data hygiene and static reports that require manual CSV cleanup.',
      },
    ],
    informationArchitecture: [
      {
        module: 'Executive Overview',
        children: ['Revenue Trajectory', 'Quarterly Goal Pacing', 'Lead Source Attribution'],
      },
      {
        module: 'Pipeline Workspace',
        children: ['Kanban & Table Toggle', 'Inline Stage Editor', 'Deal Health Signals'],
      },
      {
        module: 'Account Intelligence',
        children: ['Contact Graph', 'Timeline Activity Log', 'Automated Email/Call Sync'],
      },
      {
        module: 'Forecasting & Reports',
        children: ['Weighted Projections', 'Cohort Conversion', 'Scheduled Board Exports'],
      },
    ],
    userFlows: [
      {
        stage: '01. Trigger',
        action: 'Rep opens Command Palette (⌘K) and selects target enterprise account.',
        systemResponse: 'Loads split-pane summary with recent touches and AI-extracted next steps.',
      },
      {
        stage: '02. Inline Edit',
        action: 'Rep updates deal stage and close date directly from the table row.',
        systemResponse: 'Recalculates weighted quarterly forecast in real time without page reload.',
      },
      {
        stage: '03. Executive Sync',
        action: 'VP filters by Enterprise EMEA and inspects slipping deals.',
        systemResponse: 'Highlights accounts exceeding 14-day stage threshold with one-click owner ping.',
      },
    ],
    wireframes: {
      focus: 'Progressive disclosure across dense financial tables and modular KPI strips.',
      layoutGrid: '12-column fluid desktop grid (24px gutter) with collapsible 64px navigation rail.',
      decisions: [
        'Pinned top 3 primary KPI sparklines above the fold while moving secondary cohort breakdowns to tabbed drawers.',
        'Replaced modal-heavy editing with inline table popovers to preserve pipeline context.',
        'Standardized tabular numeric alignment for rapid vertical scanning of deal values.',
      ],
    },
    uiDesign: {
      direction:
        'Charcoal editorial surfaces paired with champagne-gold trajectory highlights keep visual hierarchy calm during 8-hour workdays.',
      highlights: [
        'Strict single-elevation card containers separated by crisp 1px hairline borders.',
        'Color-blind safe status indicators pairing semantic tone with concise text labels.',
        'Adaptive density switch (Compact vs. Comfortable) tailored to analyst monitors.',
      ],
    },
    designSystem: {
      typography: 'Plus Jakarta Sans for interface controls + JetBrains Mono (tabular-nums) for revenue figures.',
      gridSpec: '8px spatial base unit · 12-column responsive layout · 12px outer radius / 8px nested radius.',
      swatches: [
        { name: 'Canvas Obsidian', hex: '#0B0B0E', usage: 'Primary application shell' },
        { name: 'Surface Slate', hex: '#141419', usage: 'Modular analytics containers' },
        { name: 'Champagne Gold', hex: '#D4AF37', usage: 'Primary CTA & revenue trendlines' },
        { name: 'Ivory Primary', hex: '#F4F2EC', usage: 'High-contrast headings & figures' },
      ],
      components: [
        'Virtual Data Table',
        'Inline Stage Selectors',
        'KPI Sparkline Cards',
        'Command Search Overlay',
        'Slide-Over Deal Drawer',
      ],
    },
    finalSolution:
      'Delivered a modular Enterprise CRM suite featuring real-time quarterly pacing, frictionless inline deal management, automated activity timelines, and an executive forecasting layer powered by a unified 68-component Figma token library.',
    resultsAndImpact: [
      { metric: '+38%', label: 'Pipeline Velocity', context: 'Measured across 180 reps over 90 days post-launch' },
      { metric: '-54%', label: 'Data Entry Time', context: 'Average weekly admin hours reduced from 4.2h to 1.9h' },
      { metric: '94%', label: 'Weekly Active Adoption', context: 'Up from 67% on the legacy CRM portal' },
    ],
  },
  {
    id: 'ai-powered-mobile-app',
    title: 'AI-Powered Mobile Application',
    subtitle: 'Multimodal voice and contextual assistant designed for executive productivity on the move',
    category: 'Mobile Apps',
    year: '2025',
    platform: 'iOS & Android',
    role: 'Senior Product Designer',
    duration: '10 Weeks',
    image: PORTFOLIO_ASSETS.aiMobileApp,
    imageAlt: 'Matte-black smartphone displaying a luxury dark-mode AI voice assistant application',
    summary:
      'Crafted an intuitive voice-first mobile AI companion that transforms spoken intent into structured summaries, calendar actions, and daily briefings.',
    keyMetric: '4.9★ Rating · 71% Day-30 Retention',
    overview:
      'Most AI mobile apps rely on repetitive chat bubbles that feel cumbersome while commuting or walking between meetings. I designed Aura AI around ambient voice interaction, scannable executive cards, and transparent AI action confirmation.',
    problemStatement:
      'Busy founders and operators abandoned text-heavy AI chat apps on mobile because typing multi-sentence prompts took longer than completing tasks manually.',
    objectives: [
      'Make voice-to-action completion effortless in under 10 seconds with one-thumb ergonomics.',
      'Build user trust in autonomous AI actions through clear preview-and-confirm cards.',
      'Design a calm, low-glare dark interface optimized for OLED displays and morning/evening use.',
    ],
    userResearch: {
      methods: [
        '14 diary studies with startup executives and consultants',
        'Usability benchmarks on voice latency perception and interruption handling',
        'Card-sorting sessions for daily briefing card prioritization',
      ],
      keyInsights: [
        'Users felt anxious when AI executed external actions (emails, invites) silently without an undoable preview.',
        'Visual acoustic feedback during speech recognition drastically lowered perceived response latency.',
        'One-tap contextual follow-up actions outperformed open-ended prompt bars by 3.1x.',
      ],
    },
    personas: [
      {
        name: 'Neha Kapoor',
        role: 'Product Strategy Director',
        age: '34',
        goals: 'Capture meeting action items by voice while commuting and review a 60-second morning brief.',
        painPoints: 'Fumbling with tiny keyboards and digging through three apps to confirm schedule conflicts.',
      },
      {
        name: 'Marcus Vance',
        role: 'Independent Venture Advisor',
        age: '45',
        goals: 'Synthesize long research threads into concise audio and text briefs.',
        painPoints: 'Generic chatbot layouts that bury important decisions in endless scrolling transcripts.',
      },
    ],
    informationArchitecture: [
      {
        module: 'Ambient Voice Home',
        children: ['Live Acoustic Visualizer', 'Instant Intent Capture', 'Recent Action Deck'],
      },
      {
        module: 'Daily Intelligence',
        children: ['Morning Executive Brief', 'Calendar Conflict Alerts', 'Priority Threads'],
      },
      {
        module: 'Action Memory',
        children: ['Pending Confirmations', 'Completed Automations', 'Connected Apps'],
      },
    ],
    userFlows: [
      {
        stage: '01. Speak',
        action: 'User holds thumb trigger or speaks wake command to summarize unread client emails.',
        systemResponse: 'Gold acoustic ring responds dynamically to cadence while streaming live transcript.',
      },
      {
        stage: '02. Synthesize',
        action: 'Assistant distills 12 emails into 3 priority decisions with proposed calendar slots.',
        systemResponse: 'Displays structured dark summary card with single-tap "Approve & Send" action.',
      },
      {
        stage: '03. Confirm',
        action: 'User taps Approve or says "Move to Thursday afternoon."',
        systemResponse: 'Executes API action and logs verifiable confirmation in Action Memory.',
      },
    ],
    wireframes: {
      focus: 'Thumb-zone reachability and zero-clutter voice focus canvas.',
      layoutGrid: '4-column mobile layout (16px margins) with persistent bottom gesture dock.',
      decisions: [
        'Anchored primary microphone and quick-action triggers in the lower 35% of the screen.',
        'Limited each AI card to a single primary decision to prevent cognitive fatigue.',
        'Designed progressive skeleton transitions while LLMs stream structured JSON.',
      ],
    },
    uiDesign: {
      direction:
        'Deep basalt black OLED canvas with luminous warm-gold soundwave geometry that communicates intelligence without gimmicky neon glows.',
      highlights: [
        'Custom spring-physics acoustic wave reacting smoothly to speech amplitude.',
        'High-legibility typography calibrated for quick glances in variable lighting.',
        'Subtle glassmorphic action sheets preserving live backdrop context.',
      ],
    },
    designSystem: {
      typography: 'Plus Jakarta Sans (Medium/SemiBold) with generous 1.55 line height for mobile readability.',
      gridSpec: '4px micro-grid · 44px minimum touch targets · 20px outer card corners.',
      swatches: [
        { name: 'OLED Black', hex: '#050506', usage: 'True black OLED primary canvas' },
        { name: 'Basalt Card', hex: '#141418', usage: 'Action & briefing surfaces' },
        { name: 'Acoustic Gold', hex: '#E0BE63', usage: 'Active voice ring & primary button' },
        { name: 'Warm Mist', hex: '#B8B5AD', usage: 'Secondary transcript & metadata' },
      ],
      components: [
        'Acoustic Voice Ring',
        'Action Confirmation Card',
        'Morning Brief Carousel',
        'Gesture Bottom Sheet',
        'Streaming Transcript Block',
      ],
    },
    finalSolution:
      'Shipped a cohesive iOS and Android experience combining conversational voice fluency with tactile executive action cards, turning passive AI chat into an active mobile command center.',
    resultsAndImpact: [
      { metric: '71%', label: 'Day-30 Retention', context: '2.2x higher than benchmark mobile AI utility apps' },
      { metric: '8.4 sec', label: 'Avg. Task Capture', context: 'Down from 34 seconds using manual typing flows' },
      { metric: '4.9 / 5', label: 'App Store Rating', context: 'Across 4,200+ verified beta and launch reviews' },
    ],
  },
  {
    id: 'healthcare-dashboard',
    title: 'Healthcare Dashboard',
    subtitle: 'Clinical patient telemetry, triage prioritization, and appointment orchestration for care teams',
    category: 'Healthcare & Civic',
    year: '2024',
    platform: 'Tablet & Web Clinical Suite',
    role: 'Senior UI/UX Designer',
    duration: '12 Weeks',
    image: PORTFOLIO_ASSETS.healthcareDashboard,
    imageAlt: 'Dark-mode healthcare patient analytics dashboard on a tablet showing biometric trends',
    summary:
      'Designed an alert-intelligent clinical dashboard enabling physicians to review longitudinal vitals, lab anomalies, and daily schedules at a glance.',
    keyMetric: '-41% Chart Review Time per Patient',
    overview:
      'Hospital specialists frequently switch between legacy EHR screens during 15-minute consultations, eroding eye contact and increasing diagnostic fatigue. I architected a clinical tablet-and-desktop companion that synthesizes patient vitals, medication timelines, and appointment queues in one calm workspace.',
    problemStatement:
      'Clinicians suffered from severe alert fatigue and scattered biometric records, spending nearly 6 minutes per consultation hunting for historical heart rate, blood pressure, and oxygen trends.',
    objectives: [
      'Surface critical biometric deviations clearly without triggering false-alarm fatigue.',
      'Optimize layout for both bedside tablet rounds and widescreen nursing station monitors.',
      'Ensure strict WCAG AAA legibility in dimly lit hospital wards.',
    ],
    userResearch: {
      methods: [
        'On-site clinical shadowing with 11 cardiologists and triage nurses',
        'Heuristic evaluation of legacy EHR alert workflows',
        'Time-on-task simulation testing with realistic multi-patient caseloads',
      ],
      keyInsights: [
        'Clinicians rely on trend trajectories (24h/7d slope) far more than isolated instantaneous numbers.',
        'Color-alone warning flags failed under clinical lighting and for color-vision-deficient staff.',
        'Quick access to "Today’s Schedule" alongside active patient vitals eliminated 60% of navigation backtracking.',
      ],
    },
    personas: [
      {
        name: 'Dr. Evelyn Reed',
        role: 'Attending Internal Medicine Physician',
        age: '39',
        goals: 'Absorb a patient’s 7-day biometric trajectory within 30 seconds before entering the exam room.',
        painPoints: 'Dense legacy grids, intrusive modal popups, and blinding white screens during night shifts.',
      },
      {
        name: 'Daniel Morales, RN',
        role: 'Lead Telemetry Charge Nurse',
        age: '31',
        goals: 'Monitor ward-wide patient anomalies and coordinate follow-up rounds accurately.',
        painPoints: 'Unranked alert lists that bury genuinely deteriorating patients under routine reminders.',
      },
    ],
    informationArchitecture: [
      {
        module: 'Patient Vitals Canvas',
        children: ['Heart Rate Continuous Curve', 'Blood Pressure Range', 'Oxygen Saturation History'],
      },
      {
        module: 'Clinical Schedule',
        children: ['Today’s Consult Queue', 'Follow-Up Flags', 'Lab Pending Status'],
      },
      {
        module: 'Patient Record Summary',
        children: ['Active Medications', 'Allergy & Risk Profile', 'Diagnostic Notes'],
      },
    ],
    userFlows: [
      {
        stage: '01. Triage Queue',
        action: 'Physician taps the next scheduled patient from the right-hand clinical schedule.',
        systemResponse: 'Transitions smoothly into unified vital waveforms and priority clinical summary.',
      },
      {
        stage: '02. Trend Inspection',
        action: 'Doctor scrubs across a 72-hour blood pressure spike on tablet touch screen.',
        systemResponse: 'Overlays administered medication timestamps directly onto the biometric curve.',
      },
      {
        stage: '03. Care Update',
        action: 'Clinician logs follow-up order and flags lab check.',
        systemResponse: 'Syncs instantly with nursing queue and updates appointment prep status.',
      },
    ],
    wireframes: {
      focus: 'Two-column clinical workspace balancing wide telemetry charts with compact schedule context.',
      layoutGrid: '8:4 split tablet landscape layout collapsing cleanly to stacked priority cards in portrait.',
      decisions: [
        'Aligned X-axis timestamps across all three biometric graphs for instant cross-vital correlation.',
        'Paired every threshold alert with explicit textual severity ("Elevated", "Stable") plus subtle directional icons.',
        'Enlarged touch targets to 48px for gloved or hurried bedside tablet interaction.',
      ],
    },
    uiDesign: {
      direction:
        'Low-glare charcoal dark surfaces reduce eye strain during 12-hour shifts while fine golden-amber waveform lines make clinical trends effortless to trace.',
      highlights: [
        'Synchronized cross-hair scrubbers across Heart Rate, BP, and SpO2 charts.',
        'Strict tabular numeric readouts for instant clinical accuracy.',
        'Zero decorative clutter—every pixel serves patient comprehension.',
      ],
    },
    designSystem: {
      typography: 'Plus Jakarta Sans + JetBrains Mono (tabular figures) calibrated to WCAG AAA contrast.',
      gridSpec: '8px spacing scale · 48px clinical touch targets · High-legibility data stroke hierarchy.',
      swatches: [
        { name: 'Ward Charcoal', hex: '#0C0D0F', usage: 'Night-shift friendly dark canvas' },
        { name: 'Clinical Panel', hex: '#15161A', usage: 'Biometric & schedule containers' },
        { name: 'Vital Gold', hex: '#D9B65B', usage: 'Primary telemetry trend curves' },
        { name: 'Alert Terracotta', hex: '#D96B52', usage: 'Verified threshold deviation' },
      ],
      components: [
        'Synchronized Biometric Charts',
        'Clinical Queue List',
        'Patient Profile Header',
        'Severity Indicator Matrix',
        'Medication Timeline Overlay',
      ],
    },
    finalSolution:
      'Delivered an integrated clinical intelligence interface bridging tablet rounds and desktop EHR workflows, transforming fragmented telemetry into calm, actionable medical clarity.',
    resultsAndImpact: [
      { metric: '-41%', label: 'Chart Review Time', context: 'Reduced pre-consult prep from 5.8m to 3.4m' },
      { metric: '-62%', label: 'Alert Fatigue Dismissals', context: 'Through tiered severity grouping and trend slopes' },
      { metric: '97%', label: 'Clinician SUS Score', context: 'Validated across 28 physicians & nurses in pilot wards' },
    ],
  },
  {
    id: 'police-case-management',
    title: 'Police Case Management Dashboard',
    subtitle: 'Mission-critical incident dispatch, spatial mapping, and digital evidence timeline platform',
    category: 'Healthcare & Civic',
    year: '2024',
    platform: 'Web Command Center',
    role: 'Lead UI/UX Designer',
    duration: '16 Weeks',
    image: PORTFOLIO_ASSETS.policeCaseMgmt,
    imageAlt: 'Dark-mode civic case management command center dashboard showing incident map and evidence timeline',
    summary:
      'Architected a high-trust investigative and dispatch platform connecting live geospatial incidents, chain-of-custody evidence grids, and multi-agency timelines.',
    keyMetric: '2.4x Faster Evidence Retrieval',
    overview:
      'Municipal investigators and dispatch coordinators operated across siloed evidence lockers, paper incident logs, and disconnected CAD mapping tools. I designed a unified CivicCase command interface that brings geospatial awareness, chronological timelines, and auditable evidence management into a single authoritative workspace.',
    problemStatement:
      'Detectives lost critical hours reconciling CCTV clips, field reports, and unit dispatch timestamps across incompatible legacy databases, delaying case progression and court packet assembly.',
    objectives: [
      'Unify live geospatial incident maps with chronological response timelines.',
      'Guarantee unbroken chain-of-custody audit visibility on every evidence asset.',
      'Support high-stress, rapid scanning in dark 24/7 operations centers.',
    ],
    userResearch: {
      methods: [
        'Structured interviews with 12 detectives, sergeants, and dispatch leads',
        'Workflow audit of evidence intake and courtroom packet preparation',
        'Stress-scenario usability simulations under timed incident updates',
      ],
      keyInsights: [
        'Chronological sequence clarity (Incident Reported → Dispatched → Scene Secured) was the #1 mental model detectives used to brief supervisors.',
        'Investigators needed instant visual thumbnails for bodycam/CCTV media paired with verifiable file hashes.',
        'Role-based permission clarity prevented accidental cross-precinct disclosure.',
      ],
    },
    personas: [
      {
        name: 'Detective Maya Lin',
        role: 'Major Crimes Investigator',
        age: '36',
        goals: 'Correlate witness timelines with CCTV clips and export court-ready case briefs rapidly.',
        painPoints: 'Disjointed folder trees and broken metadata when transferring media between units.',
      },
      {
        name: 'Sgt. Robert Hayes',
        role: 'Operations Command Supervisor',
        age: '48',
        goals: 'Maintain real-time situational awareness of active district incidents and resource allocation.',
        painPoints: 'Cluttered legacy maps that obscure priority units during peak hours.',
      },
    ],
    informationArchitecture: [
      {
        module: 'Command Overview',
        children: ['Active Incident Map', 'Unit Allocation', 'Priority Queue'],
      },
      {
        module: 'Evidence Vault',
        children: ['Media Grid (CCTV / Audio / Docs)', 'Chain-of-Custody Audit', 'Tag & Hash Verification'],
      },
      {
        module: 'Chronological Timeline',
        children: ['Dispatch Milestones', 'Field Officer Notes', 'Cross-Incident Links'],
      },
      {
        module: 'Case Reports',
        children: ['Structured Intake Forms', 'Supervisor Sign-Off', 'Court Packet Export'],
      },
    ],
    userFlows: [
      {
        stage: '01. Select Incident',
        action: 'Supervisor clicks active map marker in Metro Sector 4.',
        systemResponse: 'Synchronizes Evidence Grid and Incident Timeline to that specific case file.',
      },
      {
        stage: '02. Inspect Evidence',
        action: 'Detective opens CCTV asset and links timestamp to field report.',
        systemResponse: 'Appends verified audit entry with badge ID and cryptographic timestamp.',
      },
      {
        stage: '03. Export Brief',
        action: 'Investigator selects verified timeline nodes and compiles prosecutor package.',
        systemResponse: 'Generates indexed PDF dossier with embedded chain-of-custody log.',
      },
    ],
    wireframes: {
      focus: 'Spatial-temporal synchronization between map, evidence grid, and linear timeline.',
      layoutGrid: 'Fixed command sidebar + modular 2x2 synchronized operational quadrants.',
      decisions: [
        'Placed Incident Map top-left and Evidence Grid top-right to mirror natural left-to-right scanning from location to proof.',
        'Built horizontal linear timeline below the map so officers trace escalation events without scrolling away from geography.',
        'Designed persistent filter drawers with clear active state counts.',
      ],
    },
    uiDesign: {
      direction:
        'Disciplined tactical charcoal and slate surfaces with calibrated amber-gold incident beacons ensure maximum clarity in low-light command rooms.',
      highlights: [
        'High-contrast geospatial vector styling suppressing irrelevant map noise.',
        'Crisp media inspection thumbnails with structured file metadata below.',
        'Audit-first typography ensuring badge numbers, case IDs, and timestamps are unmistakable.',
      ],
    },
    designSystem: {
      typography: 'Plus Jakarta Sans + JetBrains Mono for Case IDs, coordinates, and evidence timestamps.',
      gridSpec: '8px precision grid · Modular quadrant panels · Zero decorative animations in high-stress mode.',
      swatches: [
        { name: 'Command Obsidian', hex: '#090A0D', usage: 'Operations center dark canvas' },
        { name: 'Tactical Slate', hex: '#14171D', usage: 'Map & evidence modules' },
        { name: 'Beacon Amber', hex: '#E0A83B', usage: 'Priority incident indicators' },
        { name: 'Steel Neutral', hex: '#8E97A4', usage: 'Secondary coordinate labels' },
      ],
      components: [
        'Geospatial Incident Map',
        'Chronological Milestone Track',
        'Chain-of-Custody Evidence Card',
        'Multi-Facet Filter Panel',
        'Activity Audit Feed',
      ],
    },
    finalSolution:
      'Created an authoritative case management and command suite that unifies spatial dispatch intelligence with tamper-evident digital evidence workflows.',
    resultsAndImpact: [
      { metric: '2.4x', label: 'Faster Evidence Lookup', context: 'Average media retrieval cut from 11m to 4.5m' },
      { metric: '-48%', label: 'Case Brief Assembly Time', context: 'Streamlined multi-source courtroom packet export' },
      { metric: '100%', label: 'Audit Trail Compliance', context: 'Zero undocumented evidence handoffs in pilot precinct' },
    ],
  },
  {
    id: 'document-scanner-mobile-app',
    title: 'Document Scanner Mobile Application',
    subtitle: 'Precision edge-detection capture, OCR extraction, and encrypted PDF workflow for mobile professionals',
    category: 'Mobile Apps',
    year: '2024',
    platform: 'iOS & Android',
    role: 'Product Designer',
    duration: '8 Weeks',
    image: PORTFOLIO_ASSETS.mobileAppsSuite,
    imageAlt: 'Minimalist smartphone displaying a precision mobile document scanner interface with gold corner crop guides',
    summary:
      'Reimagined mobile document capture with effortless auto-edge alignment, batch scanning, and instant searchable PDF organization.',
    keyMetric: '96% First-Attempt Capture Accuracy',
    overview:
      'Freelancers, legal clerks, and logistics teams routinely scan multi-page contracts and receipts in poor lighting. Legacy scanner apps cluttered the camera viewfinder with ads and confusing filter sliders. I designed a refined, precision-focused scanning utility where capture-to-share takes under 15 seconds.',
    problemStatement:
      'Users struggled with skewed crops, accidental shutter taps, and slow multi-page reordering, resulting in 38% re-scan rates during field documentation.',
    objectives: [
      'Deliver instant visual confidence during auto-edge detection with high-contrast crop guides.',
      'Streamline Scan → Adjust → Save/Share into a predictable 3-stage bottom workflow.',
      'Integrate clean OCR text extraction and e-signature placement without desktop software.',
    ],
    userResearch: {
      methods: [
        'Field usability testing across 16 logistics drivers, accountants, and consultants',
        'Lighting stress tests in low-contrast office and vehicle environments',
        'Onboarding drop-off funnel analysis',
      ],
      keyInsights: [
        'High-contrast gold corner brackets remained clearly visible on both white paper and dark desk backgrounds.',
        'Users overwhelmingly preferred automatic perspective straightening with optional manual corner fine-tuning.',
        'One-tap PDF compression presets ("Email Ready", "Print Sharp") eliminated file-size rejections.',
      ],
    },
    personas: [
      {
        name: 'Rohan Desai',
        role: 'Independent Tax Consultant',
        age: '29',
        goals: 'Digitize multi-page client receipts rapidly and extract line-item text cleanly.',
        painPoints: 'Blurry shadows, clunky folder renaming, and paywall interruptions mid-scan.',
      },
      {
        name: 'Elena Costa',
        role: 'Operations Coordinator',
        age: '35',
        goals: 'Capture signed delivery manifests on-site and share encrypted PDFs immediately.',
        painPoints: 'Multi-step export dialogs that delay warehouse sign-offs.',
      },
    ],
    informationArchitecture: [
      {
        module: 'Precision Capture',
        children: ['Auto-Edge Viewfinder', 'Batch Multi-Page Mode', 'ID / Receipt Presets'],
      },
      {
        module: 'Enhance & OCR',
        children: ['Perspective Crop', 'Shadow Removal Filters', 'Copyable OCR Text'],
      },
      {
        module: 'Smart Vault',
        children: ['Auto-Named Folders', 'Encrypted PDF Export', 'Direct Cloud & WhatsApp Share'],
      },
    ],
    userFlows: [
      {
        stage: '01. Frame',
        action: 'User hovers phone above contract on desk.',
        systemResponse: 'Gold corner brackets lock onto document edges and trigger steady auto-capture.',
      },
      {
        stage: '02. Refine',
        action: 'User verifies crisp perspective correction and taps Enhance.',
        systemResponse: 'Removes ambient shadows and indexes full-text OCR automatically.',
      },
      {
        stage: '03. Share',
        action: 'User selects Smart Filename suggestion and exports PDF.',
        systemResponse: 'Compresses file cleanly and triggers native share sheet in one tap.',
      },
    ],
    wireframes: {
      focus: 'Distraction-free camera canvas with ergonomic 3-step segmented action bar.',
      layoutGrid: 'Full-bleed viewfinder with anchored 140px bottom precision dock.',
      decisions: [
        'Separated Scan, Adjust, and Save into a crisp segmented progress strip.',
        'Positioned Rotate, Crop, and Share controls for effortless thumb reach.',
        'Introduced loupe magnifier feedback when dragging crop corners manually.',
      ],
    },
    uiDesign: {
      direction:
        'Precision camera-instrument aesthetics—matte obsidian chrome framing crisp paper previews with architectural gold corner guides.',
      highlights: [
        'Tactile gold corner handles with magnetic edge-snapping visual cues.',
        'Clean typographic action bar avoiding crowded icon soup.',
        'Instant before/after shadow cleanup comparison slider.',
      ],
    },
    designSystem: {
      typography: 'Plus Jakarta Sans for crisp capture controls and document list hierarchy.',
      gridSpec: '4px mobile grid · Full-bleed viewfinder safe zones · 44px minimum button hitboxes.',
      swatches: [
        { name: 'Camera Obsidian', hex: '#08080A', usage: 'Viewfinder framing chrome' },
        { name: 'Dock Charcoal', hex: '#141418', usage: 'Bottom tool controls' },
        { name: 'Bracket Gold', hex: '#D8B454', usage: 'Auto-edge frame & shutter CTA' },
        { name: 'Paper Pure', hex: '#FAF9F5', usage: 'Scanned document preview contrast' },
      ],
      components: [
        'Edge-Detection Frame Overlay',
        '3-Stage Bottom Dock',
        'Magnifier Corner Loupe',
        'Batch Page Reorder Strip',
        'Smart Export Sheet',
      ],
    },
    finalSolution:
      'Delivered a fast, dignified document scanning app that replaces noisy utility clutter with camera-grade precision and instant searchable PDF workflows.',
    resultsAndImpact: [
      { metric: '96%', label: 'First-Try Accuracy', context: 'Auto-edge lock reduced manual re-scans by 61%' },
      { metric: '12 sec', label: 'Capture-to-Share', context: 'End-to-end single-page PDF export time' },
      { metric: '+49%', label: 'Pro Conversion Lift', context: 'Driven by frictionless OCR & batch PDF export' },
    ],
  },
  {
    id: 'home-services-booking-app',
    title: 'Home Services Booking Application',
    subtitle: 'Transparent on-demand home maintenance, verified specialist matching, and live booking tracker',
    category: 'Mobile Apps',
    year: '2024',
    platform: 'iOS & Android',
    role: 'Lead UI/UX Designer',
    duration: '11 Weeks',
    image: PORTFOLIO_ASSETS.mobileAppsSuite,
    imageAlt: 'Dark-mode Home Services booking mobile application showcasing service categories and active bookings',
    summary:
      'Designed an elevated consumer marketplace connecting homeowners with vetted cleaning, plumbing, electrical, and HVAC specialists in under 60 seconds.',
    keyMetric: '+34% Checkout Completion Rate',
    overview:
      'Booking reliable home services often feels chaotic—hidden pricing, unclear arrival windows, and overwhelming service catalogs cause high cart abandonment. I designed HomeHero with transparent upfront tiers, curated quick-categories, and reassuring live technician tracking.',
    problemStatement:
      '58% of first-time homeowners dropped off during service selection and slot scheduling due to opaque pricing estimates and uncertainty around provider verification.',
    objectives: [
      'Compress discovery-to-booked confirmation into 4 transparent mobile steps.',
      'Build trust immediately via verified specialist credentials and itemized upfront pricing.',
      'Simplify repeat bookings and active order management from the home screen.',
    ],
    userResearch: {
      methods: [
        '20 interviews with urban homeowners and working professionals',
        'Checkout funnel usability testing across 3 competing service apps',
        'Pricing transparency A/B prototype validation',
      ],
      keyInsights: [
        'Users chose categories visually first (Cleaning, Plumbing, Electrical, HVAC) before using text search.',
        'Seeing an itemized breakdown ("Base Visit + Included Checklist") increased booking trust by 46%.',
        'Homeowners wanted their active booking status visible right on the home screen without digging into profile tabs.',
      ],
    },
    personas: [
      {
        name: 'Sarah Jenkins',
        role: 'Working Architect & Homeowner',
        age: '33',
        goals: 'Book vetted deep-cleaning or AC servicing on weekends without endless phone calls.',
        painPoints: 'Unreliable arrival windows and surprise add-on fees at the doorstep.',
      },
      {
        name: 'Vikram Nair',
        role: 'Property Manager',
        age: '40',
        goals: 'Schedule recurring maintenance across 4 rental units and track invoices cleanly.',
        painPoints: 'Re-entering addresses and tracking separate technicians via scattered text threads.',
      },
    ],
    informationArchitecture: [
      {
        module: 'Home Concierge',
        children: ['Core Service Grid', 'Featured Seasonal Packages', 'Active Booking Card'],
      },
      {
        module: 'Service Configurator',
        children: ['Transparent Checklist', 'Add-On Scope Selector', 'Time-Slot Picker'],
      },
      {
        module: 'Live Booking Tracker',
        children: ['Verified Pro Profile', 'Real-Time ETA', 'Direct In-App Chat & Reschedule'],
      },
    ],
    userFlows: [
      {
        stage: '01. Select Service',
        action: 'User taps Cleaning category and selects Deep Apartment Refresh.',
        systemResponse: 'Displays upfront fixed price, duration estimate, and included tasks.',
      },
      {
        stage: '02. Pick Slot',
        action: 'User chooses Saturday 10:00 AM window and confirmed home address.',
        systemResponse: 'Matches top-rated verified specialist with real-time availability lock.',
      },
      {
        stage: '03. Track Live',
        action: 'User opens app on service morning.',
        systemResponse: 'Surfaces Current Booking card directly on Home with live arrival timeline.',
      },
    ],
    wireframes: {
      focus: 'Effortless category scanning paired with persistent active-booking visibility.',
      layoutGrid: '4-column mobile grid with horizontal category rail and sticky checkout summary bar.',
      decisions: [
        'Elevated "Current Bookings" directly above "Recent Orders" for returning users.',
        'Replaced lengthy dropdowns with visual room-count steppers and clear time-slot chips.',
        'Kept final total price visible throughout every configuration step.',
      ],
    },
    uiDesign: {
      direction:
        'Refined dark concierge aesthetic with warm gold service iconography and clean editorial cards that elevate everyday home maintenance into a hospitality experience.',
      highlights: [
        'Bespoke line-art service icons framed in subtle gold-bordered tiles.',
        'Scannable active-booking progress drawer with verified technician badge.',
        'Clean bottom navigation limited to 4 essential destinations (Home, Book, Active, Profile).',
      ],
    },
    designSystem: {
      typography: 'Plus Jakarta Sans with balanced hierarchy for pricing, time slots, and checklists.',
      gridSpec: '4px/8px mobile scale · 16px card padding · Consistent 14px corner geometry.',
      swatches: [
        { name: 'Concierge Black', hex: '#0B0B0D', usage: 'Primary mobile backdrop' },
        { name: 'Elevated Charcoal', hex: '#16161B', usage: 'Service & booking cards' },
        { name: 'Hospitality Gold', hex: '#D8B354', usage: 'Active icons & book CTA' },
        { name: 'Soft Stone', hex: '#A5A39B', usage: 'Service durations & metadata' },
      ],
      components: [
        'Category Icon Rail',
        'Featured Service Banner',
        'Time-Slot Matrix',
        'Active Booking Tracker',
        'Sticky Checkout Bar',
      ],
    },
    finalSolution:
      'Created a trusted, hospitality-grade mobile booking experience that streamlines home maintenance discovery, pricing clarity, and live technician coordination.',
    resultsAndImpact: [
      { metric: '+34%', label: 'Checkout Completion', context: 'Measured across 15,000 monthly booking funnels' },
      { metric: '52 sec', label: 'Median Booking Time', context: 'From app launch to confirmed service slot' },
      { metric: '+41%', label: 'Repeat Booking Rate', context: 'Driven by one-tap reorder & active status cards' },
    ],
  },
  {
    id: 'saas-dashboard-analytics',
    title: 'SaaS Dashboard & Analytics',
    subtitle: 'Executive telemetry, cohort retention, and multi-tenant usage intelligence for B2B platforms',
    category: 'Enterprise & SaaS',
    year: '2025',
    platform: 'Web SaaS Platform',
    role: 'Senior UI/UX Designer',
    duration: '12 Weeks',
    image: PORTFOLIO_ASSETS.enterpriseCrm,
    imageAlt: 'SaaS analytics dashboard displaying cohort retention metrics and revenue trends',
    summary:
      'Built an executive product-and-revenue analytics workspace translating millions of multi-tenant SaaS events into clear board-level decisions.',
    keyMetric: '3.1x Faster Executive Reporting',
    overview:
      'SaaS leadership teams frequently toggle between billing software, product analytics, and customer success platforms to diagnose churn. I designed a unified intelligence dashboard that connects ARR expansion, active workspace usage, and cohort health inside one serene analytical framework.',
    problemStatement:
      'Product managers and CFOs lacked a single source of truth linking feature adoption to net revenue retention, spending hours assembling conflicting weekly metrics.',
    objectives: [
      'Present high-density SaaS KPIs (ARR, NRR, DAU/MAU, Churn) with effortless scannability.',
      'Enable non-technical leaders to slice cohorts and date ranges without writing SQL.',
      'Build reusable chart and table primitives scalable across 40+ customer accounts.',
    ],
    userResearch: {
      methods: [
        'Stakeholder interviews with 10 SaaS Founders, Heads of Product, and RevOps leads',
        'Dashboard audit of existing BI workbooks and weekly board decks',
        'Interactive prototype comprehension testing for cohort heatmaps',
      ],
      keyInsights: [
        'Executives always asked "Compared to what?"—metrics without prior-period delta and goal pacing felt meaningless.',
        'Too many competing chart colors obscured the single metric requiring immediate action.',
        'Drill-down drawers from high-level KPIs into underlying customer accounts saved hours of tool switching.',
      ],
    },
    personas: [
      {
        name: 'Siddharth Rao',
        role: 'VP of Product',
        age: '37',
        goals: 'Identify which enterprise onboarding milestones correlate with 12-month retention.',
        painPoints: 'Waiting days for data analysts to pull ad-hoc cohort comparisons.',
      },
      {
        name: 'Hannah Lindqvist',
        role: 'Chief Financial Officer',
        age: '44',
        goals: 'Verify net dollar retention, expansion revenue, and runway impact in real time.',
        painPoints: 'Discrepancies between billing exports and product dashboard figures.',
      },
    ],
    informationArchitecture: [
      {
        module: 'Executive Pulse',
        children: ['ARR & Net Retention', 'Active Workspaces', 'Goal Attainment Bar'],
      },
      {
        module: 'Cohort & Usage Lab',
        children: ['Retention Curves', 'Feature Adoption Matrix', 'Segment Comparisons'],
      },
      {
        module: 'Account Drill-Down',
        children: ['Expansion Signals', 'At-Risk Workspaces', 'Exportable Board Briefs'],
      },
    ],
    userFlows: [
      {
        stage: '01. Scan Pulse',
        action: 'Executive opens Monday morning view with Q3 vs. Q2 comparison active.',
        systemResponse: 'Highlights revenue growth, active users, and goal attainment in clean tabular cards.',
      },
      {
        stage: '02. Slice Cohort',
        action: 'PM filters by Enterprise Tier and inspects 90-day retention dip.',
        systemResponse: 'Updates visual curves and ranks the top 5 accounts driving usage variance.',
      },
      {
        stage: '03. Share Insight',
        action: 'User saves custom view and dispatches board snapshot.',
        systemResponse: 'Generates clean visual summary with locked filter parameters.',
      },
    ],
    wireframes: {
      focus: 'Strict visual hierarchy—headline KPIs first, trend diagnostics second, account tables third.',
      layoutGrid: '12-column responsive CSS grid with disciplined 24px spacing and consistent aspect ratios.',
      decisions: [
        'Enforced maximum 3 KPI cards in the top hero strip to preserve visual breathing room.',
        'Used subtle hairline grids and tabular figures across every comparative table.',
        'Consolidated global date-range and segment filters into a single calm toolbar.',
      ],
    },
    uiDesign: {
      direction:
        'Editorial financial-grade dark interface where warm gold highlights signal primary growth vectors while restrained monochrome grays hold structural context.',
      highlights: [
        'Harmonized sparklines, bar comparisons, and donut distributions using one disciplined palette.',
        'Zero visual noise—gridlines softened to 6% opacity so data lines remain the focal anchor.',
        'Keyboard-accessible interactive chart tooltips with exact delta percentages.',
      ],
    },
    designSystem: {
      typography: 'Plus Jakarta Sans (UI labels) + JetBrains Mono (tabular-nums across all KPIs and axes).',
      gridSpec: '8px spacing unit · 12px outer panel radius · Strict 1px hairline card delineation.',
      swatches: [
        { name: 'Deep Canvas', hex: '#09090B', usage: 'Primary analytics background' },
        { name: 'Panel Charcoal', hex: '#131317', usage: 'Chart & table cards' },
        { name: 'Signal Gold', hex: '#D4AF37', usage: 'Primary growth series' },
        { name: 'Muted Amber', hex: '#9E7D34', usage: 'Secondary comparative series' },
      ],
      components: [
        'Executive KPI Strip',
        'Comparative Bar & Area Charts',
        'Cohort Retention Table',
        'Global Filter Bar',
        'Board Snapshot Exporter',
      ],
    },
    finalSolution:
      'Shipped a high-clarity SaaS intelligence dashboard uniting product telemetry and financial health into an intuitive self-serve executive platform.',
    resultsAndImpact: [
      { metric: '3.1x', label: 'Faster Reporting', context: 'Cut weekly executive deck preparation from 5h to 1.6h' },
      { metric: '+29%', label: 'Expansion Identification', context: 'Surfaced high-usage accounts ready for tier upgrades' },
      { metric: '92%', label: 'Self-Serve Adoption', context: 'Among product, finance, and customer success leaders' },
    ],
  },
];

export const AI_AUTOMATION_PROJECTS: AutomationProject[] = [
  {
    id: 'voice-ai-restaurants',
    index: '01',
    title: 'AI Voice Agents for Restaurants',
    domain: 'Hospitality · Conversational Voice AI',
    summary:
      '24/7 natural-sounding Voice AI concierge answering peak-hour phone calls, booking tables, modifying reservations, and handling dietary inquiries automatically.',
    businessProblem:
      'High-volume restaurants miss 30–45% of incoming phone calls during dinner rush, resulting in lost table bookings, frustrated guests, and overwhelmed host stands.',
    aiSolution:
      'Architected a sub-second latency Voice AI phone agent trained on menu knowledge, seating rules, and peak-hour pacing—integrated directly with POS/reservation calendars and SMS confirmation triggers.',
    tools: ['Voice AI (Vapi / Retell)', 'n8n', 'LLM Tool Calling', 'OpenTable / POS API', 'Twilio SMS'],
    workflowSteps: [
      {
        id: 'trigger',
        stage: 'Inbound Call',
        title: 'Guest Calls Restaurant',
        detail: 'Zero hold time—Voice AI answers in under 800ms with warm hospitality tone.',
        tool: 'Twilio SIP',
      },
      {
        id: 'intent',
        stage: 'AI Reasoning',
        title: 'Intent & Party Extraction',
        detail: 'Captures date, party size, seating preference, and allergy notes naturally.',
        tool: 'LLM Agent',
      },
      {
        id: 'check',
        stage: 'Live API Sync',
        title: 'Real-Time Table Lookup',
        detail: 'Queries live floor availability and offers closest slots if peak time is full.',
        tool: 'n8n + POS API',
      },
      {
        id: 'confirm',
        stage: 'Action & Follow-Up',
        title: 'Booking Locked & SMS Sent',
        detail: 'Writes reservation to host stand dashboard and texts guest confirmation link.',
        tool: 'CRM + SMS',
      },
    ],
    benefits: [
      { value: '100%', label: 'Peak-Hour Call Answer Rate' },
      { value: '+28%', label: 'Recovered Reservation Revenue' },
      { value: '18 hrs/wk', label: 'Host Desk Time Saved' },
    ],
    image: PORTFOLIO_ASSETS.aiOrchestration,
    imageAlt: 'AI Voice Agent workflow orchestration dashboard with waveform analysis and reservation sync',
  },
  {
    id: 'real-estate-lead-qualification',
    index: '02',
    title: 'Real Estate AI Lead Qualification System',
    domain: 'PropTech · Inbound Qualification',
    summary:
      'Autonomous multi-channel AI agent that responds to portal inquiries in under 30 seconds, qualifies budget/timeline/location, and books site visits on agent calendars.',
    businessProblem:
      'Real estate brokerages lose high-intent buyers when agents take hours to reply to portal leads, while wasting 60% of call time on unqualified or window-shopping inquiries.',
    aiSolution:
      'Designed an event-driven n8n and LLM qualification engine that engages leads across WhatsApp, SMS, and web chat—scoring buyer readiness, matching property inventory, and routing hot prospects directly to agent calendars.',
    tools: ['n8n Workflow', 'Claude / Gemini LLM', 'HubSpot / GoHighLevel', 'WhatsApp API', 'Cal.com'],
    workflowSteps: [
      {
        id: 'capture',
        stage: 'Lead Capture',
        title: 'Portal / Ad Form Trigger',
        detail: 'Webhook ingests inquiry from Meta Ads, Zillow, or website instantaneously.',
        tool: 'Webhook',
      },
      {
        id: 'engage',
        stage: 'Instant Outreach',
        title: 'AI Discovery Conversation',
        detail: 'Engages prospect within 15 seconds on WhatsApp/SMS with natural questions.',
        tool: 'LLM + WhatsApp',
      },
      {
        id: 'score',
        stage: 'Qualification',
        title: 'Intent & Budget Scoring',
        detail: 'Evaluates pre-approval status, budget band, timeline, and preferred zones.',
        tool: 'Structured JSON',
      },
      {
        id: 'route',
        stage: 'Calendar Routing',
        title: 'Site Visit Booked in CRM',
        detail: 'Assigns qualified buyer to area specialist and books confirmed walkthrough.',
        tool: 'CRM + Calendar',
      },
    ],
    benefits: [
      { value: '<20 sec', label: 'Speed-to-Lead Response' },
      { value: '3.4x', label: 'Qualified Site Visits Booked' },
      { value: '-65%', label: 'Unqualified Agent Call Time' },
    ],
    image: PORTFOLIO_ASSETS.aiOrchestration,
    imageAlt: 'Real estate AI lead qualification workflow pipeline syncing leads with CRM',
  },
  {
    id: 'ai-customer-support-chatbots',
    index: '03',
    title: 'AI-Powered Customer Support Chatbots',
    domain: 'CX Automation · RAG Knowledge Agents',
    summary:
      'Context-aware AI support agent grounded in product documentation and live order APIs—resolving Tier-1 tickets autonomously and escalating complex cases with clean summaries.',
    businessProblem:
      'Growing SaaS and e-commerce support teams drown in repetitive status checks, billing questions, and onboarding queries, pushing response SLAs past 12 hours.',
    aiSolution:
      'Built a retrieval-augmented AI support assistant connected to help-center vectors, Stripe/order webhooks, and Zendesk/Intercom so customers get verified real-time answers rather than generic scripts.',
    tools: ['RAG Vector Store', 'LLM Function Calling', 'n8n', 'Zendesk / Intercom API', 'Slack Escalation'],
    workflowSteps: [
      {
        id: 'query',
        stage: 'Customer Query',
        title: 'Web / In-App Message',
        detail: 'Detects customer account context, language, and emotional sentiment.',
        tool: 'Widget SDK',
      },
      {
        id: 'retrieve',
        stage: 'Knowledge Lookup',
        title: 'RAG Docs + Live Order API',
        detail: 'Retrieves exact policy chunks and verifies live subscription or shipment state.',
        tool: 'Vector DB + API',
      },
      {
        id: 'resolve',
        stage: 'Autonomous Action',
        title: 'Verified Resolution',
        detail: 'Answers accurately or executes permitted action (refund status, plan guide).',
        tool: 'LLM Guardrails',
      },
      {
        id: 'escalate',
        stage: 'Smart Handoff',
        title: 'Human Context Summary',
        detail: 'If confidence is below threshold, opens prioritized ticket with concise brief.',
        tool: 'Helpdesk API',
      },
    ],
    benefits: [
      { value: '74%', label: 'Autonomous Tier-1 Resolution' },
      { value: '-82%', label: 'First Response Wait Time' },
      { value: '+24 pts', label: 'CSAT Improvement' },
    ],
    image: PORTFOLIO_ASSETS.aiOrchestration,
    imageAlt: 'Customer support AI chatbot orchestration dashboard and ticket escalation flow',
  },
  {
    id: 'whatsapp-telegram-automation',
    index: '04',
    title: 'WhatsApp & Telegram Automation',
    domain: 'Conversational Commerce · Messaging Ops',
    summary:
      'End-to-end conversational agents operating inside WhatsApp Business and Telegram for instant catalog queries, order status, voice-note transcription, and automated broadcast follow-ups.',
    businessProblem:
      'Service businesses and clinics receive hundreds of daily WhatsApp messages and voice notes that staff struggle to read, transcribe, and log into internal tracking sheets.',
    aiSolution:
      'Created a unified messaging orchestration pipeline that transcribes incoming voice notes, parses customer intent via LLM, triggers automated database lookups, and replies in the customer’s native language.',
    tools: ['WhatsApp Cloud API', 'Telegram Bot API', 'n8n', 'Whisper Speech-to-Text', 'Airtable / Postgres'],
    workflowSteps: [
      {
        id: 'msg',
        stage: 'Messaging Event',
        title: 'Text, Image, or Voice Note',
        detail: 'Webhook captures inbound WhatsApp or Telegram media securely.',
        tool: 'Cloud Webhook',
      },
      {
        id: 'parse',
        stage: 'Multimodal Parse',
        title: 'Audio/Image Understanding',
        detail: 'Transcribes voice notes and extracts receipt/order numbers from photos.',
        tool: 'Multimodal LLM',
      },
      {
        id: 'sync',
        stage: 'System Lookup',
        title: 'Database & Order Sync',
        detail: 'Fetches live status or logs new service request automatically.',
        tool: 'n8n + REST API',
      },
      {
        id: 'reply',
        stage: 'Interactive Reply',
        title: 'Structured Button Response',
        detail: 'Sends localized reply with quick-action buttons and reminder scheduling.',
        tool: 'Messaging API',
      },
    ],
    benefits: [
      { value: '24/7', label: 'Instant Multilingual Coverage' },
      { value: '91%', label: 'Voice-Note Intake Automated' },
      { value: '4.2x', label: 'Higher Reply Engagement vs Email' },
    ],
    image: PORTFOLIO_ASSETS.aiOrchestration,
    imageAlt: 'WhatsApp and Telegram AI automation workflow architecture',
  },
  {
    id: 'crm-lead-management-automation',
    index: '05',
    title: 'CRM & Lead Management Automation',
    domain: 'RevOps · Intelligent Pipeline Sync',
    summary:
      'Self-maintaining CRM automation that enriches inbound prospects, drafts personalized outreach, summarizes sales calls, and updates deal stages automatically.',
    businessProblem:
      'Sales teams suffer from dirty CRM records, forgotten follow-ups, and hours spent manually researching companies and pasting meeting notes into deal fields.',
    aiSolution:
      'Engineered an n8n-orchestrated RevOps pipeline that enriches every new lead with company context, scores ICP fit, transcribes discovery calls into structured MEDDIC fields, and triggers tailored follow-up drafts.',
    tools: ['n8n', 'HubSpot / Salesforce', 'Apollo / Clearbit API', 'LLM Call Summarizer', 'Gmail / Slack'],
    workflowSteps: [
      {
        id: 'ingest',
        stage: 'Lead Ingestion',
        title: 'New Contact Created',
        detail: 'Detects inbound demo request or form fill across web channels.',
        tool: 'CRM Webhook',
      },
      {
        id: 'enrich',
        stage: 'Data Enrichment',
        title: 'Company & Role Intelligence',
        detail: 'Fetches firmographics, tech stack, and LinkedIn summary automatically.',
        tool: 'Enrichment API',
      },
      {
        id: 'draft',
        stage: 'AI Personalization',
        title: 'ICP Score & Tailored Brief',
        detail: 'Calculates fit score and prepares personalized intro draft for rep review.',
        tool: 'LLM Engine',
      },
      {
        id: 'sync',
        stage: 'Pipeline Hygiene',
        title: 'Auto-Updated Deal Stages',
        detail: 'Syncs call takeaways, next steps, and Slack alerts to revenue channel.',
        tool: 'CRM + Slack',
      },
    ],
    benefits: [
      { value: '9 hrs/wk', label: 'Admin Saved per Sales Rep' },
      { value: '+44%', label: 'Follow-Up Consistency' },
      { value: '99%', label: 'CRM Field Hygiene Score' },
    ],
    image: PORTFOLIO_ASSETS.aiOrchestration,
    imageAlt: 'CRM and lead management automation workflow syncing HubSpot and AI enrichment',
  },
  {
    id: 'ai-business-process-automation',
    index: '06',
    title: 'AI Business Process Automation',
    domain: 'Enterprise Ops · Document & Back-Office AI',
    summary:
      'Intelligent document processing and cross-system back-office automation handling invoices, vendor onboarding, compliance checks, and executive reporting.',
    businessProblem:
      'Operations and finance teams manually copy data from PDF invoices, client onboarding forms, and email attachments into ERP and accounting spreadsheets—introducing costly human errors.',
    aiSolution:
      'Implemented a structured multimodal AI extraction workflow that reads unstructured PDFs and emails, validates line items against business rules, flags anomalies for human approval, and posts verified entries into ERP systems.',
    tools: ['Multimodal LLM OCR', 'n8n Enterprise', 'Google Workspace API', 'ERP / QuickBooks API', 'Slack Approvals'],
    workflowSteps: [
      {
        id: 'intake',
        stage: 'Document Intake',
        title: 'Email / Drive Attachment',
        detail: 'Monitors dedicated finance/ops inbox and cloud folders continuously.',
        tool: 'Email Trigger',
      },
      {
        id: 'extract',
        stage: 'Structured OCR',
        title: 'Schema-Validated Extraction',
        detail: 'Extracts vendor, line items, tax totals, and PO numbers with confidence scores.',
        tool: 'Vision LLM',
      },
      {
        id: 'verify',
        stage: 'Rule Validation',
        title: '3-Way Match & Anomaly Check',
        detail: 'Cross-checks totals against PO records; routes discrepancies to Slack approval.',
        tool: 'n8n Logic',
      },
      {
        id: 'post',
        stage: 'ERP Posting',
        title: 'Ledger Sync & Audit Log',
        detail: 'Creates verified entry in accounting software and archives indexed PDF.',
        tool: 'Accounting API',
      },
    ],
    benefits: [
      { value: '-78%', label: 'Manual Processing Hours' },
      { value: '99.4%', label: 'Extraction Field Accuracy' },
      { value: '5x', label: 'Faster Month-End Reconciliation' },
    ],
    image: PORTFOLIO_ASSETS.aiOrchestration,
    imageAlt: 'AI business process automation dashboard processing documents and approvals',
  },
  {
    id: 'automated-appointment-booking',
    index: '07',
    title: 'Automated Appointment Booking Systems',
    domain: 'Service Scheduling · Zero-Friction Calendar AI',
    summary:
      'Intelligent scheduling engine combining conversational AI intake, timezone-aware routing, automated reminders, and smart no-show recovery workflows.',
    businessProblem:
      'Clinics, consultancies, and agencies experience 22–30% no-show rates and lose hours in back-and-forth rescheduling messages across phone, email, and WhatsApp.',
    aiSolution:
      'Built an end-to-end AI scheduling workflow that qualifies appointment type, matches specialist availability, collects pre-visit intake forms, sends timed WhatsApp/SMS reminders, and autonomously backfills cancellations.',
    tools: ['Cal.com / Google Calendar', 'n8n', 'Voice & Chat AI', 'WhatsApp / SMS Reminders', 'Stripe Deposits'],
    workflowSteps: [
      {
        id: 'request',
        stage: 'Intake Request',
        title: 'Multi-Channel Booking Intent',
        detail: 'Captures scheduling request via web assistant, WhatsApp, or phone voice AI.',
        tool: 'AI Intake Agent',
      },
      {
        id: 'match',
        stage: 'Smart Routing',
        title: 'Specialist & Slot Matching',
        detail: 'Checks staff skills, buffer rules, and timezone preferences dynamically.',
        tool: 'Calendar API',
      },
      {
        id: 'confirm',
        stage: 'Confirmation',
        title: 'Booking & Pre-Visit Prep',
        detail: 'Locks slot, collects optional deposit, and delivers calendar invite.',
        tool: 'n8n + Stripe',
      },
      {
        id: 'recover',
        stage: 'Retention Loop',
        title: 'Reminders & Waitlist Fill',
        detail: 'Dispatches 24h/2h reminders and auto-offers cancelled slots to waitlisted clients.',
        tool: 'SMS + Waitlist',
      },
    ],
    benefits: [
      { value: '-61%', label: 'Appointment No-Show Rate' },
      { value: '88%', label: 'Cancelled Slots Auto-Refilled' },
      { value: 'Zero', label: 'Manual Scheduling Back-and-Forth' },
    ],
    image: PORTFOLIO_ASSETS.aiOrchestration,
    imageAlt: 'Automated appointment booking orchestration dashboard and calendar sync',
  },
];

export const DESIGN_PROCESS_STAGES: ProcessStage[] = [
  {
    number: '01',
    title: 'Discover',
    summary: 'Align on business objectives, technical constraints, and stakeholder expectations before sketching a single screen.',
    deliverables: ['Stakeholder Interview Synthesis', 'Product Vision Brief', 'Success KPI Matrix'],
    outcome: 'Shared clarity on what measurable business problem we are solving.',
  },
  {
    number: '02',
    title: 'Research',
    summary: 'Uncover real user behaviors, workflows, and competitive blind spots through qualitative and quantitative evidence.',
    deliverables: ['User Interviews & Shadowing', 'Competitive Teardown', 'Behavioral Insights Deck'],
    outcome: 'Decisions grounded in validated user needs rather than internal assumptions.',
  },
  {
    number: '03',
    title: 'Define',
    summary: 'Distill research findings into razor-sharp problem statements, user personas, and end-to-end journey maps.',
    deliverables: ['Problem Statements', 'Evidence-Backed Personas', 'Current & Future Journey Maps'],
    outcome: 'Focused product scope prioritizing highest-leverage user pain points.',
  },
  {
    number: '04',
    title: 'Ideate',
    summary: 'Structure complex product ecosystems into clean information architecture, logical user flows, and solution concepts.',
    deliverables: ['Information Architecture Tree', 'Core User Flows', 'Rapid Solution Sketches'],
    outcome: 'Coherent navigation and zero dead-end interaction pathways.',
  },
  {
    number: '05',
    title: 'Design',
    summary: 'Translate flows into high-precision wireframes, visual systems, responsive layouts, and tokenized Figma libraries.',
    deliverables: ['Low & High-Fidelity Wireframes', 'Visual UI System', 'Design Tokens & Components'],
    outcome: 'A refined, accessible, and unmistakable visual product language.',
  },
  {
    number: '06',
    title: 'Prototype',
    summary: 'Bring static screens to life with realistic interactive prototypes, micro-interactions, and responsive state logic.',
    deliverables: ['Interactive Clickable Prototypes', 'Motion & Transition Specs', 'Edge-Case States'],
    outcome: 'Tangible product experience stakeholders and users can test before engineering begins.',
  },
  {
    number: '07',
    title: 'Validate',
    summary: 'Put prototypes in front of real users to measure task completion, uncover friction, and refine usability.',
    deliverables: ['Moderated Usability Sessions', 'Friction Priority Matrix', 'Validated Design Iterations'],
    outcome: 'De-risked engineering investment with verified user comprehension.',
  },
  {
    number: '08',
    title: 'Deliver',
    summary: 'Partner seamlessly with engineers through structured specs, token documentation, and responsive QA walkthroughs.',
    deliverables: ['Developer Handoff Specs', 'Component Usage Docs', 'Design-to-Code QA'],
    outcome: 'Pixel-accurate production builds shipped smoothly without ambiguity.',
  },
  {
    number: '09',
    title: 'Optimize',
    summary: 'Track post-launch adoption analytics, session feedback, and conversion metrics to guide continuous refinement.',
    deliverables: ['Post-Launch UX Audit', 'Funnel & Retention Analysis', 'Iterative Enhancement Roadmap'],
    outcome: 'Compounding product performance and sustained user delight.',
  },
];

export const AI_PROCESS_STAGES: ProcessStage[] = [
  {
    number: '01',
    title: 'Business Discovery',
    summary: 'Identify high-ROI operational bottlenecks, revenue leakage points, and repetitive human tasks ripe for AI automation.',
    deliverables: ['Operational Opportunity Audit', 'ROI & Time-Saved Model', 'Automation Scope Charter'],
    outcome: 'Clear prioritization of automations that deliver immediate business value.',
  },
  {
    number: '02',
    title: 'Process Analysis',
    summary: 'Map existing manual SOPs, data sources, decision trees, and exception edge cases across teams and tools.',
    deliverables: ['Current-State Process Map', 'Data Input/Output Inventory', 'Edge-Case Matrix'],
    outcome: 'Complete blueprint of every trigger, branch, and human approval checkpoint.',
  },
  {
    number: '03',
    title: 'Automation Strategy',
    summary: 'Select optimal LLM models, voice engines, orchestration platforms (n8n/webhooks), and governance guardrails.',
    deliverables: ['Architecture Decision Record', 'Model & Cost Benchmark', 'Security & Fallback Plan'],
    outcome: 'Resilient, cost-predictable technical stack tailored to business scale.',
  },
  {
    number: '04',
    title: 'AI Agent Architecture',
    summary: 'Design system prompts, structured JSON schemas, tool-calling functions, RAG memory, and hallucination safeguards.',
    deliverables: ['Agent Persona & Prompt Spec', 'Tool & Function Schemas', 'Knowledge Retrieval Pipeline'],
    outcome: 'Deterministic, brand-aligned AI reasoning that acts reliably in production.',
  },
  {
    number: '05',
    title: 'Workflow Development',
    summary: 'Build modular, error-tolerant automation pipelines in n8n and custom middleware with clean retry and logging logic.',
    deliverables: ['Modular n8n Workflows', 'Error Handling & Retry Branches', 'Webhook Endpoints'],
    outcome: 'Maintainable automation flows built for real-world operational traffic.',
  },
  {
    number: '06',
    title: 'API & CRM Integration',
    summary: 'Connect AI agents securely with CRMs, calendars, WhatsApp/Telegram, voice trunks, ERPs, and internal databases.',
    deliverables: ['Bi-Directional CRM Sync', 'Voice & Messaging Webhooks', 'Auth & Rate-Limit Controls'],
    outcome: 'Seamless data flow eliminating copy-paste work across the entire business stack.',
  },
  {
    number: '07',
    title: 'Testing & Optimization',
    summary: 'Run adversarial edge-case evaluations, latency tuning, prompt refinements, and end-to-end dry runs with real scenarios.',
    deliverables: ['Evaluation Test Suite', 'Latency & Accuracy Report', 'Human-in-the-Loop Tuning'],
    outcome: 'High-confidence reliability before exposing workflows to customers.',
  },
  {
    number: '08',
    title: 'Deployment & Monitoring',
    summary: 'Launch to production with real-time execution alerts, cost tracking, team handover training, and ongoing optimization.',
    deliverables: ['Production Cutover', 'Failure Alerting & Metrics', 'Operations Runbook'],
    outcome: 'Autonomous, observable AI infrastructure that scales effortlessly.',
  },
];
