export type Certificate = {
  slug: string;
  title: string;
  issuer: string;
  year: string;
  image: string;   // /public path
  link?: string;   // external verify link if any
};

export const certificates: Certificate[] = [
  {
    slug: "uic-expo-2024",
    title: "BotaniCare — UIC Engineering Design Expo",
    issuer: "UIC College of Engineering",
    year: "2024",
    image: "/certs/uic-expo-2024.jpg",
  },
  // add more...
];
