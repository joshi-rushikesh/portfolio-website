import type { Metadata } from "next";
import "./globals.css";
import { Figtree } from "next/font/google";
import Nav from "@/components/Nav";
import WipBanner from "@/components/WipBanner";

const figtree = Figtree({ subsets: ["latin"] });
const IS_WIP = process.env.NEXT_PUBLIC_WIP === "1";

export const metadata: Metadata = {
  title: "Rushikesh Joshi - Portfolio",
  description: "Product-focused developer & PM. Projects, experience, events, and more.",
  robots: { index: !IS_WIP, follow: !IS_WIP }, // hide from SEO while WIP
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${figtree.className} starfield min-h-dvh antialiased`}>
        <Nav />
        <main className="pt-20">{children}</main>
        <footer className="mx-auto max-w-6xl px-4 py-12 text-sm text-zinc-400">
          © {new Date().getFullYear()} Rushikesh Joshi
        </footer>
        <WipBanner />
      </body>
    </html>
  );
}
