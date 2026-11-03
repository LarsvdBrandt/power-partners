import type { Metadata } from "next";
import { CtaBanner, PageHero, TestimonialCard } from "@/components/sections";
import { ButtonLink } from "@/components/ui";
import { featuredTestimonials, moreTestimonials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Klantverhalen",
  description:
    "Lees hoe ondernemers met PowerPartners besparen op hun energiekosten dankzij collectieve inkoop, persoonlijk contact en korte lijntjes.",
  alternates: { canonical: "/klantverhalen" },
};

const testimonials = [...featuredTestimonials, ...moreTestimonials];

export default function StoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Klantverhalen"
        title="Succesverhalen van onze klanten"
        intro="We zijn trots op de resultaten die we voor onze klanten behalen. Lees hoe we andere ondernemers hebben geholpen hun energiedoelen te bereiken."
        image="/images/bedrijfspand.jpg"
      />

      <section className="bg-mist py-24 sm:py-32">
        <div className="container-page">
          <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
            {testimonials.map((t, i) => (
              <div key={`${t.name}-${i}`} className="mb-6 break-inside-avoid">
                <TestimonialCard testimonial={t} featured={i % 4 === 0} />
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-brand bg-white p-10 text-center shadow-sm sm:p-14">
            <p className="mx-auto max-w-3xl text-2xl leading-snug font-semibold sm:text-4xl">
              “Persoonlijk, korte lijntjes en alles op orde:{" "}
              <span className="text-petrol">dat is PowerPartners!</span>”
            </p>
            <p className="mt-4 text-slate-ink">De woorden van onze tevreden klanten</p>
            <div className="mt-8 flex justify-center">
              <ButtonLink href="/onze-diensten" arrow>
                Ontdek onze diensten
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
