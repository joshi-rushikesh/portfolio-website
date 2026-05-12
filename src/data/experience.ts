export type ExperienceItem = {
  slug: string;
  company: string;
  role: string;
  period: string;
  summary: string;
  bullets: string[];
  cover?: string;
  gallery: string[];  // /public paths
  links?: { site?: string; repo?: string };
};

export const experience: ExperienceItem[] = [
  {
    slug: "chaching-social",
    company: "Duh Social (formerly ChaChing Social)",
    role: "Product & Software Engineer",
    period: "May 2025 – Present",
    summary:
      "",
    bullets: [
      "Delivered full-stack features across ChaChing’s web (Next.js/React), backend (Go/Firestore), and mobile apps (React Native/Expo), supporting onboarding, user flows, and feature delivery.",
      "Launched the Creator Tech Week growth campaign by shipping the microsite and RSVP flow, responsive HTMLemails, and a UTM/GA4 tracking plan, helping drive +242% MoM active user growth (511 to 1,759).",
      "Conducted user research, market analysis, and funnel analysis to identify onboarding blockers, informing feature improvements that increased conversion by 25%.",
      "Built KPI reports and dashboards using GA4 and PostHog data to track performance for product decisions.",
    ],
    cover: "/proof/chaching/cover.png",
    gallery: [
      "/proof/chaching/ga4.png",
      "/proof/chaching/email.png",
      "/proof/chaching/site.png",
    ],
    links: { site: "https://www.chaching.social/" },
  },
  {
    slug: "joshi-goods",
    company: "Joshi Goods",
    role: "Technical Operations Lead (Founder)",
    period: "Mar 2021 – Jul 2024",
    summary:
      "Operated multi-channel e-commerce & local marketplace portfolio; analytics-driven sourcing, automation and dashboards for ops.",
    bullets: [
      "120+ products, 2,400+ orders, $500,000+ lifetime revenue (Amazon/eBay/Shopify).",
      "Custom SQL databases for orders/sales analytics boosted productivity by 50%+.",
      "Python requests/BeautifulSoup/Selenium for pricing & demand intel; reduced manual work.",
      "AWS EC2 Windows RDP to run real-time scraping & sourcing operations.",
    ],
    cover: "/proof/joshi-goods/cover.png",
    gallery: [
      "/proof/joshi-goods/amazon.png",
      "/proof/joshi-goods/ebay.png",
      "/proof/joshi-goods/sql.png",
    ],
    links: {
      site: "https://www.ebay.com/usr/joshi-goods",
    },
  },
  {
    slug: "glowie",
    company: "Glowie",
    role: "Automation Engineer (Contract)",
    period: "Apr 2022 – Aug 2023",
    summary:
      "Delivered custom web automations with BrowserAutomationStudio; helped launch Glowie.app and shipped scripts for 100+ customers.",
    bullets: [
      "100+ automation scripts (e.g., IMAP bots, review-request bots).",
      "Provided launch advantage for NFT/crypto token campaigns.",
    ],
    cover: "/proof/glowie/cover.png",
    gallery: [
      "/proof/glowie/flow1.png",
      "/proof/glowie/flow2.png",
      "/proof/glowie/imap.png",
    ],
    links: { site: "https://glowie.app/" },
  },
];

export function getExperience(slug: string) {
  return experience.find((x) => x.slug === slug);
}
