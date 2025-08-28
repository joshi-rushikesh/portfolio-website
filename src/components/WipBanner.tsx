"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "wipBannerDismissed";

export default function WipBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const isWip = process.env.NEXT_PUBLIC_WIP === "1";
    if (!isWip) return;
    const dismissed = typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY) === "1";
    setShow(!dismissed);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pb-6">
        <div className="glass border-yellow-400/30 bg-yellow-400/10 text-yellow-100 flex flex-wrap items-center gap-3 rounded-xl p-4">
          <span className="text-xl">⚠️</span>
          <p className="text-sm">
            This site is <strong>under active construction</strong>. Some sections are placeholders while I finish the build.
            In the meantime, view my <a href="/Resume.pdf" className="underline hover:no-underline">resume</a> or{" "}
            <Link href="#contact" className="underline hover:no-underline">contact me</Link>.
          </p>
          <button
            onClick={() => { localStorage.setItem(STORAGE_KEY, "1"); setShow(false); }}
            className="ml-auto rounded-md bg-white/10 px-3 py-1 text-xs hover:bg-white/20"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
