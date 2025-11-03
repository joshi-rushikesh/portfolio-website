import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";
import BookingButton from "@/components/BookingButton";
import { events } from "@/data/events";
import { LinkedInIcon, GitHubIcon, LinkIcon } from "@/components/Icons";
import { experience as experienceData } from "@/data/experience";


const LINKS = {
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/joshi-rushikesh",
  github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/joshi-rushikesh",
  linktree: process.env.NEXT_PUBLIC_LINKTREE_URL || "https://linktr.ee/rushikeshjoshi",
};

export default function Page() {
  return (
    <>
      {/* HERO */}
      <Section id="home" className="pt-10">
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Left: intro + CTAs */}
          <div>
            <p className="text-sm uppercase tracking-widest text-zinc-400">Portfolio</p>
            <h1 className="mt-2 text-4xl font-bold leading-tight md:text-5xl">
              Rushikesh Joshi
              <br />
              <span className="text-gradient">Customer-First Builder</span>
            </h1>
            <p className="mt-4 max-w-xl text-zinc-300">
              I build and ship useful things: reliable systems, data pipelines, user-friendly products, and growth campaigns.
              I focus on customer impact and measurable outcomes. This site is a quick tour of my events, experience, results,
              and ways to get in touch.
            </p>

            {/* Social CTAs*/}
            <div className="mt-6 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass inline-flex w-full items-center justify-center gap-2 px-4 py-3 hover:bg-white/10"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={18} /> LinkedIn
              </a>

              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass inline-flex w-full items-center justify-center gap-2 px-4 py-3 hover:bg-white/10"
                aria-label="GitHub"
              >
                <GitHubIcon size={18} /> GitHub
              </a>

              <a
                href={LINKS.linktree}
                target="_blank"
                rel="noopener noreferrer"
                className="glass inline-flex w-full items-center justify-center gap-2 px-4 py-3 hover:bg-white/10"
                aria-label="Linktree"
              >
                <LinkIcon size={18} /> Linktree
              </a>

              <a
                href="/Rushikesh_Joshi_Resume.pdf"
                className="glass col-span-1 w-full text-center px-4 py-3 hover:bg-white/10 sm:col-span-3"
              >
                Download resume
              </a>
            </div>
          </div>

          {/* Right: my photo */}
          <div className="glass overflow-hidden p-0">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/picture_of_me.png"
                alt="Rushikesh Joshi in Chicago"
                fill
                className="object-cover"
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </Section>


      {/* EVENTS */}
      <Section id="events" title="Events">
        <p className="mb-6 text-zinc-300">
          Conferences, hackathons, meetups, and community work. Each card links to a detail page with
          photos and more information.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <article key={e.slug} className="glass p-4">
              <div className="relative h-40 w-full overflow-hidden rounded-lg bg-white/5">
                <Image
                  src={e.cover ?? "/next.svg"}
                  alt={e.title}
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 33vw, 100vw"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{e.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">
                {e.location} • {e.date}
              </p>
              <Link
                href={`/events/${e.slug}`}
                className="mt-3 inline-block text-sm text-violet-300 hover:underline"
              >
                View details →
              </Link>
            </article>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title="Experience">
        <ol className="relative ml-3 border-l border-white/10">
          {experienceData.map((job, idx) => (
            <li key={job.slug} className="mb-10 ml-4">
              <span className="absolute -left-2 mt-2 h-3 w-3 rounded-full bg-violet-300" />
              <div className="glass p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold">
                    {job.role} • <span className="text-zinc-300">{job.company}</span>
                  </h3>
                  <span className="text-sm text-zinc-400">{job.period}</span>
                </div>
                <p className="mt-2 text-zinc-300">{job.summary}</p>
                {job.bullets?.length > 0 && (
                  <ul className="mt-2 list-disc pl-5 text-zinc-300">
                    {job.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
                <Link
                  href={`/experience/${job.slug}`}
                  className="mt-3 inline-block text-sm text-violet-300 hover:underline"
                >
                  View details (screens, emails, analytics) →
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </Section>


      {/* ABOUT */}
      <Section id="about" title="About">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="glass p-5 md:col-span-2">
            <h3 className="font-semibold">Who I am</h3>
            <p className="mt-2 text-zinc-300">
              CS + Finance Alum @ University of Illinois Chicago. Product-minded builder; I like shipping fast,
              measuring impact, and iterating. Into data, growth, and reliability.
            </p>
          </div>
          <div className="glass p-5">
            <h3 className="font-semibold">Tech</h3>
            <p className="mt-2 text-zinc-300">
              Networking, TypeScript, Next.js, Tailwind, Supabase, SQL, Python, GA4, PostHog, AWS EC2.
            </p>
          </div>
        </div>
      </Section>

      {/* CRYPTO */}
      <Section id="crypto" title="Crypto">
        <div className="glass p-5">
          <p className="text-zinc-300">
            Learning & experiments (no financial advice): bots/automation, wallet UX, and data dashboards.
          </p>
        </div>
      </Section>

      {/* CONTACT / BOOKING */}
      <Section id="contact" title="Contact / Booking">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="glass p-5">
            <h3 className="font-semibold">Book a meeting</h3>
            <p className="mt-2 text-zinc-300">
              Use my Google Calendar appointment page. Open it in a modal or a new tab.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <BookingButton />
              <a
                href={process.env.NEXT_PUBLIC_BOOKING_URL || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="glass px-4 py-2 hover:bg-white/10"
              >
                Open booking page ↗
              </a>
            </div>
          </div>
          <div className="glass p-5">
            <h3 className="font-semibold">Get in touch</h3>
            <ul className="mt-2 space-y-2 text-zinc-300">
              <li>
                Email:{" "}
                <a className="text-violet-300 hover:underline" href="mailto:rushikeshjoshicv@gmail.com">
                  rushikeshjoshicv@gmail.com
                </a>
              </li>
              <li>
                LinkedIn:{" "}
                <a className="text-violet-300 hover:underline" href="https://www.linkedin.com/in/joshi-rushikesh">
                  linkedin.com/in/joshi-rushikesh
                </a>
              </li>
              <li>
                Linktree:{" "}
                <a className="text-violet-300 hover:underline" href="https://linktr.ee/rushikeshjoshi">
                  linktr.ee/rushikeshjoshi
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
      