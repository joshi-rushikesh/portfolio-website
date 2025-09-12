"use client";

import { useEffect, useState } from "react";

export default function BookingButton({ label = "Book a meeting" }: { label?: string }) {
  const url = process.env.NEXT_PUBLIC_BOOKING_URL;
  const [open, setOpen] = useState(false);

  function openModal() {
    if (!url) {
      window.location.href = "mailto:rushikeshjoshicv@gmail.com";
      return;
    }
    setOpen(true);
  }

  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  return (
    <>
      <button onClick={openModal} className="glass px-4 py-2 hover:bg-white/10">
        {label}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-4xl overflow-hidden rounded-xl bg-black/40 ring-1 ring-white/15"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3">
              <h3 className="text-sm text-zinc-300">Schedule on Google Calendar</h3>
              <button
                onClick={() => setOpen(false)}
                className="rounded-md bg-white/10 px-3 py-1 text-xs hover:bg-white/20"
              >
                Close
              </button>
            </div>
            <div className="h-[70vh]">
              <iframe
                src={url!}
                className="h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
