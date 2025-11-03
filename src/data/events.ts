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
    date: "August 2025",
    location: "Chicago, IL",
    cover: "/events/ctw25/cover.jpeg",
    summary:
      "Board/Committee member @ www.creatortechweek.com. Week-long program bridging creator technologists with leaders in the creator economy. I led the growth campaign (microsite/RSVP, GA4 plan, responsive emails) for ChaChing.",
    gallery: [
      "/events/ctw25/1.jpeg",
      "/events/ctw25/2.jpeg",
      "/events/ctw25/3.jpeg",
    ],
    links: { site: "https://www.creatortechweek.com/" },
    type: "conference",
  },
  {
    slug: "sparkhacks-2025",
    title: "SparkHacks (Hackathon)",
    date: "February 2025",
    location: "Chicago, IL",
    cover: "/events/sparkhacks/cover.jpeg",
    summary: "🧑‍💻 𝐎𝐮𝐫 𝐏𝐫𝐨𝐣𝐞𝐜𝐭: 𝐀𝐠𝐫𝐢𝐂𝐮𝐥𝐭𝐮𝐫𝐞 🚜🌾Our team tackled Track 1: Sustainable Innovation & Environment, sponsored by John Deere. Our goal? Empower a collaborative community of farmers through AI-driven technology. 𝐊𝐞𝐲 𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐬:🌦️ Real-time Weather Insights – Location-based weather data for smarter farm planning and personalized farming advice.🤖 AI-Powered Farming Assistant – Offering tailored recommendations on crop management, sustainability, and best practices.🎥 Farmer-to-Farmer Video Chat – A Platform for real-time discussions, knowledge sharing, and collaborative problem-solving.",
    gallery: [
      "/events/sparkhacks/1.jpeg",
      "/events/sparkhacks/2.jpeg",
      "/events/sparkhacks/3.jpeg",
    ],
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
