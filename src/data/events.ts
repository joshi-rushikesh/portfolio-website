export type EventItem = {
  slug: string;
  title: string;
  date: string;
  location: string;
  cover?: string;
  summary: string;
  gallery: string[];
  links?: { site?: string; rsvp?: string };
  type?: "conference" | "hackathon" | "meetup" | "talk";
};

export const events: EventItem[] = [
  {
    slug: "creator-tech-week-2025",
    title: "Chicago Creator Tech Week",
    date: "Aug 11–15, 2025",
    location: "Chicago, IL",
    cover: "/events/ctw25/cover.jpg",
    summary:
      "Week-long program bridging creator technologists with leaders in the creator economy. I led the growth campaign (microsite/RSVP, GA4 plan, responsive emails) for ChaChing.",
    gallery: [
      "/events/ctw25/1.jpg",
      "/events/ctw25/2.jpg",
      "/events/ctw25/3.jpg",
    ],
    links: { site: "https://www.creatortechweek.com/" },
    type: "conference",
  },
  {
    slug: "sparkhacks-2025",
    title: "SparkHacks",
    date: "2025",
    location: "Chicago, IL",
    cover: "/events/sparkhacks/cover.jpg",
    summary: "University hackathon participation & community—prototype-first builds.",
    gallery: ["/events/sparkhacks/1.jpg"],
    type: "hackathon",
  },
  {
    slug: "1-million-cups",
    title: "1 Million Cups",
    date: "2025",
    location: "Chicago, IL",
    cover: "/events/1mc/cover.jpg",
    summary: "Startup community meetups—product feedback & pitch practice.",
    gallery: ["/events/1mc/1.jpg"],
    type: "meetup",
  },
];

export function getEvent(slug: string) {
  return events.find((e) => e.slug === slug);
}
