import type { Metadata } from "next";
import { faEnvelope, faPhone, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@/components/icons";
import { PageHero } from "@/components/sections";
import { ButtonLink } from "@/components/ui";
import { faqs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Veelgestelde vragen",
  description:
    "Antwoorden op veelgestelde vragen over het gratis energieadvies van PowerPartners, onze onafhankelijkheid, subsidies en terugverdientijden.",
  alternates: { canonical: "/veelgestelde-vragen" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Veelgestelde vragen"
        title="Heldere antwoorden op uw vragen"
        intro="Wij geloven in transparantie en heldere communicatie. Hieronder vindt u de vragen die klanten ons het vaakst stellen over onze werkwijze, de kosten en wat u van ons kunt verwachten."
        image="/images/laptop-vergelijken.jpg"
      />

      <section className="container-page grid gap-14 py-24 sm:py-32 lg:grid-cols-12">
        <div className="space-y-3 lg:col-span-8">
          {faqs.map((faq, i) => (
            <details
              key={faq.question}
              name="faq"
              open={i === 0}
              className="group rounded-brand border border-ink/8 bg-white transition-colors open:border-petrol/20 open:bg-sky-50"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 p-6 sm:p-7 [&::-webkit-details-marker]:hidden">
                <h2 className="text-lg leading-snug font-semibold sm:text-xl">
                  {faq.question}
                </h2>
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-brand bg-mist text-petrol transition-all duration-300 group-open:rotate-45 group-open:bg-petrol group-open:text-white">
                  <Icon icon={faPlus} />
                </span>
              </summary>
              <p className="-mt-2 px-6 pb-7 leading-relaxed text-slate-ink sm:px-7">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-28 rounded-brand bg-ink p-8 text-white">
            <h2 className="text-2xl font-semibold">Staat uw vraag er niet tussen?</h2>
            <p className="mt-3 leading-relaxed text-white/70">
              Neem gerust contact op voor persoonlijk advies. We denken graag
              met u mee.
            </p>
            <div className="mt-8 space-y-3">
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 rounded-brand bg-white/5 p-4 transition-colors hover:bg-white/10"
              >
                <Icon icon={faPhone} className="w-4 text-sky" />
                {site.phone}
              </a>
              <a
                href={site.emailHref}
                className="flex items-center gap-3 rounded-brand bg-white/5 p-4 break-all transition-colors hover:bg-white/10"
              >
                <Icon icon={faEnvelope} className="w-4 text-sky" />
                {site.email}
              </a>
            </div>
            <ButtonLink href="/contact" variant="light" arrow className="mt-6 w-full">
              Neem contact op
            </ButtonLink>
          </div>
        </aside>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
