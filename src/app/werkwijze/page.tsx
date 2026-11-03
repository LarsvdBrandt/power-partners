import Image from "next/image";
import type { Metadata } from "next";
import { CtaBanner, PageHero, TestimonialCard } from "@/components/sections";
import { ButtonLink } from "@/components/ui";
import { moreTestimonials, workSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Werkwijze",
  description:
    "Van persoonlijke kennismaking tot volledige ontzorging: zo begeleidt PowerPartners u stap voor stap naar de beste energieoplossing.",
  alternates: { canonical: "/werkwijze" },
};

const stepLinks = [
  { href: "/onze-diensten", label: "Ontdek onze diensten" },
  { href: "/contact", label: "Neem contact op" },
  { href: "/over-ons", label: "Meer over PowerPartners" },
];

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Werkwijze"
        title="Stap voor stap naar de juiste energieoplossing"
        intro="Wij geloven in een persoonlijke aanpak. Zo begeleiden we u van het eerste contact tot een oplossing die perfect past, en ontzorgen we u volledig."
        image="/images/zonnepanelen-inspectie.jpg"
      />

      <section className="container-page py-24 sm:py-32">
        <ol className="space-y-24 sm:space-y-32">
          {workSteps.map((step, i) => (
            <li
              key={step.title}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20"
            >
              <div className={`relative ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-brand">
                  <Image
                    src={step.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <span
                  className={`absolute -top-6 inline-flex size-20 items-center justify-center rounded-brand bg-petrol text-3xl font-semibold text-white shadow-xl shadow-petrol/30 ${
                    i % 2 === 1 ? "right-4 sm:-right-6" : "left-4 sm:-left-6"
                  }`}
                >
                  {i + 1}
                </span>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-petrol-600 uppercase">
                  Stap {i + 1}
                </p>
                <h2 className="mt-3 text-3xl leading-tight font-semibold sm:text-4xl">
                  {step.title}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-slate-ink">
                  {step.description}
                </p>
                <div className="mt-8">
                  <ButtonLink href={stepLinks[i].href} variant="outline" arrow>
                    {stepLinks[i].label}
                  </ButtonLink>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-sky-50 py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <TestimonialCard testimonial={moreTestimonials[1]} featured />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
