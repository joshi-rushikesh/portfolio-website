import { notFound } from "next/navigation";
import Section from "@/components/Section";
import ProofGallery from "@/components/ProofGallery";
import { events, getEvent } from "@/data/events";
import Image from "next/image";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const e = getEvent(slug);
  if (!e) return {};
  return {
    title: `${e.title} – Event`,
    description: e.summary,
  };
}


export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}
export const dynamicParams = false;

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const e = getEvent(slug);
  if (!e) return notFound();

  return (
    <>
      <Section id="event-hero" className="pt-10">
        <div className="glass overflow-hidden">
          {e.cover && (
            <div className="relative h-60 w-full">
              <Image src={e.cover} alt="" fill className="object-cover" />
            </div>
          )}
          <div className="p-5">
            <h1 className="text-3xl font-semibold">{e.title}</h1>
            <p className="mt-1 text-sm text-zinc-400">
              {e.date} • {e.location}
            </p>
            <p className="mt-4 text-zinc-300">{e.summary}</p>
          </div>
        </div>
      </Section>

      <Section id="event-proof" title="Photos">
        <ProofGallery images={e.gallery} />
      </Section>
    </>
  );
}
