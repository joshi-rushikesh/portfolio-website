import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      {/* HERO */}
      <Section id="home" className="pt-10">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-widest text-zinc-400">
              Portfolio
            </p>
            <h1 className="mt-2 text-4xl font-bold leading-tight md:text-5xl">
              Rushikesh Joshi
              <br />
              <span className="text-gradient">Product & Software</span>
            </h1>
            <p className="mt-4 max-w-xl text-zinc-300">
              I build and ship useful things—web apps, growth campaigns, and data-driven features.
              This site is a quick tour of my events, experience, proofs, and ways to get in touch.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="#experience" className="glass px-4 py-2 hover:bg-white/10">
                Explore my work
              </Link>
              <Link href="#contact" className="glass px-4 py-2 hover:bg-white/10">
                Book a meeting
              </Link>
              <a href="/Rushikesh_Joshi_Resume.pdf" className="glass px-4 py-2 hover:bg-white/10">
                Download resume
              </a> 
            </div>
          </div>

          <div className="glass p-4">
            <Image
              src="/next.svg"
              alt=""
              width={640}
              height={360}
              className="w-full rounded-lg object-contain"
            />
          </div>
        </div>
      </Section>

      {/* EVENTS */}
      <Section id="events" title="Events">
        <p className="mb-6 text-zinc-300">
          Conferences, hackathons, meetups, and community work. Each card will link to a detail page with
          photos, emails, and metrics.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["Chicago Creator Tech Week", "SparkHacks", "1 Million Cups"].map((t, i) => (
            <article key={i} className="glass p-4">
              <div className="relative h-40 w-full overflow-hidden rounded-lg bg-white/5">
                <Image src="/vercel.svg" alt="" fill className="object-contain p-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-zinc-400">Chicago, IL • 2025</p>
              <a href="#" className="mt-3 inline-block text-sm text-violet-300 hover:underline">
                View details →
              </a>
            </article>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title="Experience">
        <ol className="relative ml-3 border-l border-white/10">
          {[
            {
              company: "ChaChing Social",
              role: "Product Management Intern",
              period: "May 2025 – Present",
              bullets: [
                "Launched Creator Tech Week growth campaign; responsive emails + GA4 plan.",
                "Active users +242% MoM; events +232%; conversions +25%.",
              ],
            },
            {
              company: "Joshi Goods",
              role: "Founder & Biz Ops Lead",
              period: "Mar 2021 – Jul 2024",
              bullets: [
                "300+ products, 2,700+ orders, $1M+ lifetime revenue across marketplaces.",
                "SQL dashboards for customer analytics and trend detection.",
              ],
            },
          ].map((job, idx) => (
            <li key={idx} className="mb-10 ml-4">
              <span className="absolute -left-2 mt-2 h-3 w-3 rounded-full bg-violet-300" />
              <div className="glass p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold">
                    {job.role} • <span className="text-zinc-300">{job.company}</span>
                  </h3>
                  <span className="text-sm text-zinc-400">{job.period}</span>
                </div>
                <ul className="mt-2 list-disc pl-5 text-zinc-300">
                  {job.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <a href="#" className="mt-3 inline-block text-sm text-violet-300 hover:underline">
                  View proofs (screens, emails, analytics) →
                </a>
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
              Senior CS (Finance minor) at UIC. Product-minded builder; I like shipping fast,
              measuring impact, and iterating. Into data, growth, and clean UX.
            </p>
          </div>
          <div className="glass p-5">
            <h3 className="font-semibold">Tech</h3>
            <p className="mt-2 text-zinc-300">
              TypeScript, Next.js, Tailwind, Supabase, SQL, Python, GA4, PostHog, AWS EC2.
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
              Embed your Calendly/Cal.com link here.
            </p>
            {/* Example placeholder */}
            <div className="mt-4 h-60 rounded-lg bg-white/5 p-4 text-sm text-zinc-400">
              Calendly embed goes here
            </div>
          </div>
          <div className="glass p-5">
            <h3 className="font-semibold">Get in touch</h3>
            <ul className="mt-2 space-y-2 text-zinc-300">
              <li>Email: <a className="text-violet-300 hover:underline" href="mailto:rushikeshjoshicv@gmail.com">rushikeshjoshicv@gmail.com</a></li>
              <li>LinkedIn: <a className="text-violet-300 hover:underline" href="https://www.linkedin.com/in/joshi-rushikesh">/in/joshi-rushikesh</a></li>
              <li>Linktree: <a className="text-violet-300 hover:underline" href="https://linktr.ee/rushikeshjoshi">linktr.ee/rushikeshjoshi</a></li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
