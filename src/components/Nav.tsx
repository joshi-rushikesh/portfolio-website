"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#events", label: "Events" },
  { href: "/#experience", label: "Experience" },
  { href: "/#about", label: "About" },
  // { href: "/#crypto", label: "Crypto" },
  { href: "/#contact", label: "Contact" },
  // { href: "/book", label: "Book" },
  // { href: "/certificates", label: "Certificates" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "backdrop-blur bg-black/30 border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold tracking-wide">
          Rushikesh <span className="text-violet-300">Joshi</span>
        </Link>

        <ul className="flex items-center gap-5 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-zinc-300 hover:text-white transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
          <li className="ml-2">
            {process.env.NEXT_PUBLIC_WIP === "1" && (
              <span className="rounded-full bg-yellow-400/10 px-2 py-1 text-[11px] text-yellow-200 border border-yellow-400/30">
                Under construction
              </span>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
