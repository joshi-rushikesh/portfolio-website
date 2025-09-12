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
    company: "ChaChing Social",
    role: "Product Management Intern",
    period: "May 2025 – Present",
    summary:
      "Shipped Creator Tech Week growth campaign (microsite + RSVP), responsive HTML emails, and GA4/UTM plan. Structured QA uncovered issues and improved onboarding + conversion.",
    bullets: [
      "Active users +242% MoM (511 → 1,759); page views +244% (1.8K → 6.2K); events +232% (4.5K → 15K); engaged sessions/user +23% (0.61 → 0.75).",
      "Authored structured QA reports; uncovered 20+ bugs/UX issues and drove fixes.",
      "Growth/user research and funnel analysis led to NPS-informed improvements and +25% conversions.",
      "Coordinated releases for Google Play, App Store, and Solana dApp.",
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
    role: "Founder & Business Operations Lead",
    period: "Mar 2021 – Jul 2024",
    summary:
      "Operated multi-channel e-commerce & local marketplace portfolio; analytics-driven sourcing, automation and dashboards for ops.",
    bullets: [
      "300+ products, 2,700+ orders, $1M+ lifetime revenue (Amazon/eBay/Shopify).",
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
      "Delivered custom web automations with BrowserAutomationStudio; helped launch Glowie.app and shipped scripts for 150+ customers.",
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
