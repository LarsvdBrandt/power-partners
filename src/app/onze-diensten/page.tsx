import Image from "next/image";
import type { Metadata } from "next";
import {
  faComments,
  faFileSignature,
  faHeadset,
  faLocationDot,
  faScaleBalanced,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@/components/icons";
import { CtaBanner, PageHero, ServiceCard } from "@/components/sections";
import { ButtonLink, SectionHeading } from "@/components/ui";
import { processSteps, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Onze diensten",
  description:
    "Energiecontracten via collectieve inkoop, advies op maat, subsidies, batterijen, warmtepompen en isolatie. Ontdek de diensten van PowerPartners.",
  alternates: { canonical: "/onze-diensten" },
};

const reasons = [
  { icon: faUserTie, title: "Persoonlijk contact", text: "Eén vaste adviseur die u kent." },
  { icon: faScaleBalanced, title: "Onafhankelijk", text: "Niet gebonden aan leveranciers." },
  { icon: faLocationDot, title: "Op locatie", text: "We komen altijd bij u langs." },
  { icon: faHeadset, title: "Volledig ontzorgd", text: "Geen wachtrijen bij leveranciers." },
];

const stepIcons = [faHeadset, faLocationDot, faComments, faFileSignature];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Onze diensten"
        title="De beste energieoplossingen voor uw bedrijf"
        intro="Elk bedrijf is uniek. Daarom zoeken wij de beste energiecontracten en duurzame oplossingen op maat, afgestemd op uw zakelijke behoeften."
        image="/images/zonnepark.jpg"
      >
        <ButtonLink href="/contact" variant="light" arrow>
          Neem contact op
        </ButtonLink>
      </PageHero>

      <section className="container-page py-24 sm:py-32">
        <SectionHeading
          eyebrow="Duurzame oplossingen en energieadvies"
          title="Van energiecontract tot verduurzaming"
          intro="Wij adviseren u over een breed scala aan opties die bijdragen aan een lagere energierekening en een kleinere ecologische voetafdruk. Van zonnepanelen tot isolatie: de expertise is in huis."
        />
        <div className="mt-20 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <ButtonLink href="/contact" arrow>
            Vraag een vrijblijvend adviesgesprek aan
          </ButtonLink>
        </div>
      </section>

      <section className="bg-mist py-24 sm:py-32">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-brand sm:aspect-[4/3] lg:aspect-[4/5]">
            <Image
              src="/images/handdruk.jpg"
              alt="Handdruk na een adviesgesprek"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Waarom PowerPartners"
              title="Een partner die echt met u meedenkt"
              intro="Bij PowerPartners geloven we in de kracht van persoonlijk contact. Daarom komen we altijd bij u op locatie voor een vrijblijvend gesprek. Als onafhankelijke energieadviseur zoeken we de oplossing die past bij uw bedrijf. U staat centraal en de beslissing ligt altijd bij u."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {reasons.map((r) => (
                <div key={r.title} className="flex gap-4 rounded-brand bg-white p-5 shadow-sm">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-brand bg-sky-100 text-petrol">
                    <Icon icon={r.icon} />
                  </span>
                  <div>
                    <h3 className="font-semibold">{r.title}</h3>
                    <p className="mt-1 text-sm text-slate-ink">{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-24 sm:py-32">
        <SectionHeading
          align="center"
          eyebrow="Zo werken we"
          title="Stap voor stap naar de beste oplossing"
          intro="Heeft u interesse in onze diensten? Dit is hoe het proces eruitziet."
        />
        <ol className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div
            className="absolute top-8 right-[12%] left-[12%] hidden h-px bg-linear-to-r from-sky via-petrol-500 to-sky lg:block"
            aria-hidden="true"
          />
          {processSteps.map((step, i) => (
            <li key={step.title} className="relative text-center">
              <span className="relative mx-auto inline-flex size-16 items-center justify-center rounded-brand bg-petrol text-xl text-white shadow-lg shadow-petrol/30 ring-8 ring-white">
                <Icon icon={stepIcons[i]} />
              </span>
              <p className="mt-6 text-xs font-semibold tracking-[0.18em] text-petrol-600 uppercase">
                Stap {i + 1}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-ink">{step.description}</p>
            </li>
          ))}
        </ol>
        <p className="mx-auto mt-16 max-w-2xl rounded-brand bg-sky-50 px-6 py-5 text-center text-ink/80">
          Onze primaire focus ligt op het vinden van de meest voordelige
          energiecontracten, met verduurzaming als waardevolle bijzaak.
        </p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/werkwijze" variant="outline" arrow>
            Meer over onze werkwijze
          </ButtonLink>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
