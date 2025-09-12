"use client";
import { useState } from "react";
import Image from "next/image";

export default function ProofGallery({ images }: { images: string[] }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(src)}
            className="group relative aspect-video overflow-hidden rounded-lg bg-white/5"
          >
            <Image src={src} alt="" fill className="object-cover transition group-hover:scale-105" />
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4"
          onClick={() => setActive(null)}
        >
          <div className="relative w-full max-w-5xl">
            <Image src={active} alt="" width={1920} height={1080} className="w-full rounded-lg" />
            <button
              onClick={() => setActive(null)}
              className="absolute right-3 top-3 rounded bg-white/10 px-3 py-1 text-sm hover:bg-white/20"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
