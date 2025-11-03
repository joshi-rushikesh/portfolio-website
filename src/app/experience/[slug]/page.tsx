import { notFound } from "next/navigation";
import Section from "@/components/Section";
import ProofGallery from "@/components/ProofGallery";
import { experience, getExperience } from "@/data/experience";
import type { Metadata } from "next";


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const ex = getExperience(slug);
  if (!ex) return {};
  return {
    title: `${ex.role} • ${ex.company}`,
    description: ex.summary,
  };
}

export function generateStaticParams() {
  return experience.map((x) => ({ slug: x.slug }));
}
export const dynamicParams = false;

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ex = getExperience(slug);
  if (!ex) return notFound();

  return (
    <>
      <Section id="exp-head" className="pt-10">
        <div className="glass p-5">
          <h1 className="text-3xl font-semibold">
            {ex.role} • {ex.company}
          </h1>
          <p className="mt-1 text-sm text-zinc-400">{ex.period}</p>
          <p className="mt-4 text-zinc-300">{ex.summary}</p>
          <ul className="mt-4 list-disc pl-5 text-zinc-300">
            {ex.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="exp-proof" title="Artifacts">
        <ProofGallery images={ex.gallery} />
      </Section>
    </>
  );
}
