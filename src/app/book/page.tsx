import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Meeting – Rushikesh Joshi",
  description: "Use my Google Calendar appointment schedule to book a time.",
};

export default function BookPage() {
  const url = process.env.NEXT_PUBLIC_BOOKING_URL;

  return (
    <div className="mx-auto max-w-4xl px-4 py-24">
      <div className="glass p-6">
        <h1 className="text-3xl font-semibold">Book a Meeting</h1>
        <p className="mt-3 text-zinc-300">
          Pick a time that works for you via my Google Calendar booking page.
        </p>

        {url ? (
          <div className="mt-6 h-[70vh] w-full">
            <iframe
              src={url}
              className="h-full w-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        ) : (
          <p className="mt-6 text-sm text-zinc-400">
            Booking link not set. Email me at{" "}
            <a className="underline" href="mailto:rushikeshjoshicv@gmail.com">rushikeshjoshicv@gmail.com</a>.
          </p>
        )}
      </div>
    </div>
  );
}
