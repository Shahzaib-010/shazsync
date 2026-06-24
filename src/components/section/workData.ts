export type WorkSection = {
  number: string;
  heading: string;
  body: string;
};

export type WorkItem = {
  slug: string;
  title: string;
  tags: string[];
  primaryImage: string;
  hoverImage: string;
  year: string;
  client: string;
  brief: string;
  sections: WorkSection[];
};

export const workItems: WorkItem[] = [
  {
    slug: "bloom",
    title: "Bloom",
    tags: ["Design", "Development"],
    primaryImage: "/images/card1.jpg",
    hoverImage: "/images/card2.jpg",
    year: "2024",
    client: "Bloom Wellness",
    brief:
      "A premium wellness brand that needed a digital presence as considered as the products they make.",
    sections: [
      {
        number: "01",
        heading: "Problem",
        body: "The existing site was a template job — no personality, high bounce rates, and a checkout flow that leaked conversions at every step. The brand's offline experience was exceptional. Online, it simply didn't exist.",
      },
      {
        number: "02",
        heading: "Solution",
        body: "We started with a full design audit and user flow mapping, then rebuilt from scratch around one guiding principle: make it feel like the product. Custom CMS, refined typography, and motion that guides rather than distracts.",
      },
      {
        number: "03",
        heading: "The Outcome",
        body: "Session duration up 84% in month one. Lead form submissions tripled. The client reported their highest ever revenue month within six weeks of the new site going live.",
      },
    ],
  },
  {
    slug: "emberly",
    title: "Emberly",
    tags: ["Design", "Marketing"],
    primaryImage: "/images/card2.jpg",
    hoverImage: "/images/card3.jpg",
    year: "2024",
    client: "Emberly Studio",
    brief:
      "A sustainable fashion label ready to launch their first e-commerce presence — with a story worth telling.",
    sections: [
      {
        number: "01",
        heading: "Problem",
        body: "Strong offline brand, zero digital presence. The founder had a clear aesthetic but no system, no content strategy, and a launch date six weeks away. Something had to move fast without cutting corners.",
      },
      {
        number: "02",
        heading: "Solution",
        body: "We defined a digital-first brand language — colour, tone, layout — then built a content-led launch strategy across social and email. Paid came later, built on what organic data had already proven.",
      },
      {
        number: "03",
        heading: "The Outcome",
        body: "First collection sold out within 48 hours of launch. 12,000 new followers in month one. Featured in two independent fashion publications the week of launch — with zero PR spend.",
      },
    ],
  },
  {
    slug: "hive",
    title: "Hive",
    tags: ["Development"],
    primaryImage: "/images/card3.jpg",
    hoverImage: "/images/card4.jpg",
    year: "2023",
    client: "Hive PropTech",
    brief:
      "A property management platform that had outgrown its legacy tech stack — and was starting to feel it.",
    sections: [
      {
        number: "01",
        heading: "Problem",
        body: "The system was slow, expensive to maintain, and couldn't scale past 500 concurrent users. Engineering time was split between firefighting and feature work — and neither was winning.",
      },
      {
        number: "02",
        heading: "Solution",
        body: "Full rebuild in Next.js with a headless CMS, real-time data handling, and a clean API layer the team could actually own. We ran in parallel with the old system until launch day, then cut over with no downtime.",
      },
      {
        number: "03",
        heading: "The Outcome",
        body: "Load times cut by 67%. Engineering onboarding time halved. Zero downtime since launch — and the team shipped five major features in the quarter that followed.",
      },
    ],
  },
  {
    slug: "signal",
    title: "Signal",
    tags: ["Marketing", "SEO"],
    primaryImage: "/images/card4.jpg",
    hoverImage: "/images/card1.jpg",
    year: "2024",
    client: "Signal SaaS",
    brief:
      "A B2B SaaS company with a great product and almost no organic visibility to show for it.",
    sections: [
      {
        number: "01",
        heading: "Problem",
        body: "Three years in, ranking on page four for their core keywords. Competitors with inferior products were capturing the traffic that should have been Signal's — and converting it.",
      },
      {
        number: "02",
        heading: "Solution",
        body: "Technical SEO audit first: crawlability, site speed, schema. Then a content strategy rebuild around high-intent keywords, a six-month editorial calendar, and clear ownership across the team.",
      },
      {
        number: "03",
        heading: "The Outcome",
        body: "Page one ranking for 14 target keywords within 90 days. Organic traffic up 220% in six months. Cost per acquisition via organic dropped below their paid channels for the first time.",
      },
    ],
  },
];
