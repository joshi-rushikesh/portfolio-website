import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import { certificates } from "@/data/certificates";

export const metadata: Metadata = {
  title: "Certificates – Rushikesh Joshi",
  description: "Selected certificates, awards, and recognitions.",
};

export default function CertificatesPage() {
  return (
    <>
      <Section id="cert-hero" className="pt-10">
        <div className="glass p-6">
          <h1 className="text-3xl font-semibold">Certificates & Awards</h1>
          <p className="mt-3 text-zinc-300">
            A few highlights from events, courses, and recognitions.
          </p>
        </div>
      </Section>

      <Section id="cert-grid">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c) => (
            <article key={c.slug} className="glass overflow-hidden">
              <div className="relative h-48">
                <Image src={c.image} alt={c.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{c.title}</h3>
                <p className="text-sm text-zinc-400">
                  {c.issuer} • {c.year}
                </p>
                {c.link && (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm text-violet-300 hover:underline"
                  >
                    View credential ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
