export type ServiceOffering = {
  title: string;
  description: string;
};

export type ServiceProcess = {
  number: string;
  title: string;
  description: string;
};

export type ServiceItem = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  color: string;
  offerings: ServiceOffering[];
  process: ServiceProcess[];
};

export const serviceItems: ServiceItem[] = [
  {
    slug: "design",
    title: "Design",
    tagline: "Thoughtful design that earns attention.",
    description:
      "From brand identity to digital interfaces, we craft visual systems that communicate clearly and leave a lasting impression. Every decision is intentional — built to reflect your brand and move your audience.",
    color: "#efc7ff",
    offerings: [
      {
        title: "Brand Identity",
        description:
          "Logo, typography, colour systems and brand guidelines that define who you are and how you're perceived across every touchpoint.",
      },
      {
        title: "UI/UX Design",
        description:
          "Interfaces that are intuitive, accessible and beautifully considered — from wireframes and user flows to final, production-ready screens.",
      },
      {
        title: "Motion & Animation",
        description:
          "Movement that guides, not distracts. Subtle micro-interactions and transitions that make your product feel considered and alive.",
      },
      {
        title: "Design Systems",
        description:
          "Scalable component libraries and documentation that keep your product visually consistent as it grows across platforms and teams.",
      },
      {
        title: "Print & Collateral",
        description:
          "Business cards, pitch decks, packaging and printed materials that carry your brand identity confidently into the physical world.",
      },
      {
        title: "Art Direction",
        description:
          "Visual strategy and creative leadership for campaigns, photoshoots and brand moments where the stakes are highest.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Discover",
        description:
          "Deep dive into your brand, audience and goals. We ask the questions that most skip — because the answers shape everything that follows.",
      },
      {
        number: "02",
        title: "Concept",
        description:
          "Multiple creative directions explored and presented, each with clear rationale. You choose what resonates, we refine from there.",
      },
      {
        number: "03",
        title: "Refine",
        description:
          "Collaborative iteration until the work is right — not just finished. Feedback loops are short and revisions are purposeful.",
      },
      {
        number: "04",
        title: "Deliver",
        description:
          "Production-ready files, handoff documentation and an onboarding call so nothing gets lost between design and implementation.",
      },
    ],
  },
  {
    slug: "development",
    title: "Development",
    tagline: "Code that performs as well as it looks.",
    description:
      "We build fast, scalable digital products — websites, web applications and platforms — engineered for performance, accessibility and growth. Clean architecture from day one.",
    color: "#ffb271",
    offerings: [
      {
        title: "Web Development",
        description:
          "Custom websites built with modern frameworks, fully optimised for speed, SEO and conversion from the ground up.",
      },
      {
        title: "Web Applications",
        description:
          "Scalable apps engineered for real users — clean architecture, well-documented APIs and a codebase your team can confidently own.",
      },
      {
        title: "E-commerce",
        description:
          "Full-stack stores on Shopify, WooCommerce or custom platforms, designed around the customer journey and built to convert.",
      },
      {
        title: "CMS Integration",
        description:
          "Headless and traditional CMS setups that let your team publish, update and manage content without ever touching code.",
      },
      {
        title: "API Development",
        description:
          "Backend services, third-party integrations and data pipelines built to scale — documented, tested and production-ready.",
      },
      {
        title: "Performance Optimisation",
        description:
          "Audits and targeted rewrites that cut load times, improve Core Web Vitals scores and reduce bounce rates measurably.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Architect",
        description:
          "Define the stack, structure and data model before a single line is written. The right foundation prevents expensive decisions later.",
      },
      {
        number: "02",
        title: "Build",
        description:
          "Iterative sprints with regular check-ins, staging environments and version-controlled deployments throughout.",
      },
      {
        number: "03",
        title: "Test",
        description:
          "Cross-browser and device testing, performance benchmarking and accessibility audits. No surprises on launch day.",
      },
      {
        number: "04",
        title: "Launch",
        description:
          "Deployment, uptime monitoring and a dedicated post-launch support window included as standard with every project.",
      },
    ],
  },
  {
    slug: "marketing",
    title: "Marketing",
    tagline: "Strategy that moves people to act.",
    description:
      "Data-informed, creatively led marketing that builds brand presence and drives measurable results across every channel. We connect your business with the people who matter.",
    color: "#b6d3ee",
    offerings: [
      {
        title: "Brand Strategy",
        description:
          "Positioning, messaging frameworks and tone of voice that give your marketing a clear, consistent direction to build from.",
      },
      {
        title: "Content Marketing",
        description:
          "Editorial strategy, long-form articles and content calendars built around what your audience is actually searching for.",
      },
      {
        title: "Social Media",
        description:
          "Platform-native content, community management and campaign execution across the channels your audience lives on.",
      },
      {
        title: "Email Marketing",
        description:
          "Automated sequences, newsletters and lifecycle campaigns that convert subscribers into customers — and customers into advocates.",
      },
      {
        title: "Paid Advertising",
        description:
          "Google Ads, Meta and LinkedIn campaigns managed for ROI. We optimise for the metric that matters: profitable growth.",
      },
      {
        title: "Campaign Management",
        description:
          "End-to-end management of multi-channel campaigns with clear reporting, accountability and regular strategic check-ins.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Research",
        description:
          "Audience analysis, competitive landscape mapping and channel audit — before any budget is committed or content is created.",
      },
      {
        number: "02",
        title: "Strategy",
        description:
          "A clear written marketing plan with channel priorities, KPIs and a 90-day roadmap your team can actually follow.",
      },
      {
        number: "03",
        title: "Execute",
        description:
          "Creative production, campaign launches and ongoing management across every active channel — in sync.",
      },
      {
        number: "04",
        title: "Measure",
        description:
          "Regular reporting, attribution analysis and continuous optimisation based on what the data is actually showing.",
      },
    ],
  },
  {
    slug: "seo",
    title: "SEO",
    tagline: "Visibility built to last.",
    description:
      "Technical foundations, strategic content and sustainable link-building that gets you found — and keeps you there. We build organic growth into everything we do.",
    color: "#fff0d8",
    offerings: [
      {
        title: "Technical SEO",
        description:
          "Site crawls, indexation fixes, Core Web Vitals optimisation and structured data markup that give search engines exactly what they need.",
      },
      {
        title: "Keyword Research",
        description:
          "Intent-led keyword mapping across the full funnel — not just high-volume head terms, but the searches that actually convert.",
      },
      {
        title: "On-Page Optimisation",
        description:
          "Title tags, meta descriptions, heading structure and internal linking audited, fixed and improved across your entire site.",
      },
      {
        title: "Content Strategy",
        description:
          "A content plan built around genuine search demand — articles, landing pages and guides that rank and drive qualified traffic.",
      },
      {
        title: "Link Building",
        description:
          "High-quality, relevant backlinks acquired through outreach, digital PR and editorial partnerships — no shortcuts.",
      },
      {
        title: "Analytics & Reporting",
        description:
          "Monthly reports with keyword movement, traffic trends, conversion data and plain-English analysis of what's working.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Audit",
        description:
          "Comprehensive technical and content audit. We identify what's broken, what's missing and what's actively holding your rankings back.",
      },
      {
        number: "02",
        title: "Strategy",
        description:
          "A prioritised action plan with clear milestones, expected timelines and measurable outcomes tied to your business goals.",
      },
      {
        number: "03",
        title: "Implement",
        description:
          "On-page fixes, content production and link-building executed to spec — documented and delivered on schedule.",
      },
      {
        number: "04",
        title: "Report",
        description:
          "Monthly reporting with keyword movement, organic traffic data and honest analysis. No vanity metrics, no jargon.",
      },
    ],
  },
];
