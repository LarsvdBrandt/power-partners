import Image from "next/image";
import type { Metadata } from "next";
import {
  faHandshake,
  faPeopleGroup,
  faPhone,
  faScaleBalanced,
} from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@/components/icons";
import { CtaBanner, PageHero, TestimonialCard } from "@/components/sections";
import { ButtonLink, SectionHeading } from "@/components/ui";
import { moreTestimonials, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Maak kennis met Toni Janssen en PowerPartners: onafhankelijk energieadvies, collectieve inkoop en een persoonlijke aanpak zonder wachtrijen.",
  alternates: { canonical: "/over-ons" },
};

const values = [
  {
    icon: faPeopleGroup,
    title: "Collectieve inkoop",
    text: "Samen inkopen betekent lagere prijzen, wat u direct merkt in uw portemonnee.",
  },
  {
    icon: faScaleBalanced,
    title: "Onafhankelijke analyse",
    text: "Vaste en dynamische contracten, vergeleken op wat voor uw bedrijf het voordeligst is.",
  },
  {
    icon: faHandshake,
    title: "Betrouwbare leveranciers",
    text: "We werken uitsluitend samen met de meest betrouwbare energieleveranciers.",
  },
  {
    icon: faPhone,
    title: "Direct contact",
    text: "Geen wachttijden of doorverbinden: u spreekt direct met degene die u helpt.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Over ons"
        title="Bij PowerPartners draait alles om u"
        intro="Passie voor energie, persoonlijke service en onafhankelijk advies. Wij zijn er om samen met u de beste energieoplossing te vinden."
        image="/images/vergadering.jpg"
      />

      <section className="container-page grid items-center gap-16 py-24 sm:py-32 lg:grid-cols-12">
        <div className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-brand">
            <Image
              src="/images/toni.jpg"
              alt="Toni Janssen, oprichter van PowerPartners"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 rounded-brand bg-ink px-6 py-4 text-white shadow-xl">
            <p className="font-semibold">{site.owner}</p>
            <p className="text-sm text-sky">Oprichter & energieadviseur</p>
          </div>
        </div>
        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="Onze motivatie"
            title="Jarenlange ervaring, één persoonlijk aanspreekpunt"
          />
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-ink">
            <p>
              Na jarenlang ervaring te hebben opgedaan als energieadviseur en
              een waardevol netwerk te hebben opgebouwd, heb ik PowerPartners
              opgericht. Wij werken uitsluitend samen met de meest betrouwbare
              energieleveranciers. Door collectieve inkoop kunnen wij bovendien
              lagere prijzen bieden, wat u direct merkt in uw portemonnee.
            </p>
            <p>
              Wat ons echt onderscheidt, is de persoonlijke benadering. Ik kom
              altijd zelf bij u langs en ben ook de vaste contactpersoon aan de
              telefoon. Ik ontzorg u volledig, zodat u zelf niet in de wachtrij
              hoeft te staan bij energieleveranciers.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/werkwijze" arrow>
              Ontdek onze werkwijze
            </ButtonLink>
            <ButtonLink href="/onze-diensten" variant="outline">
              Bekijk onze diensten
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-mist py-24 sm:py-32">
        <div className="container-page grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Diensten en onafhankelijk advies"
              title="Altijd de beste prijs voor uw bedrijf"
              intro="We bieden een breed scala aan energiecontracten, waaronder vaste en dynamische opties. Samen analyseren we de behoeften van uw bedrijf om de meest geschikte en voordelige oplossing te vinden."
            />
            <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-brand">
              <Image
                src="/images/analyse.jpg"
                alt="Analyse van energieverbruik en tarieven"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid content-center gap-5 sm:grid-cols-2 lg:col-span-7">
            {values.map((v) => (
              <div key={v.title} className="rounded-brand bg-white p-8 shadow-sm">
                <span className="inline-flex size-12 items-center justify-center rounded-brand bg-petrol text-lg text-white">
                  <Icon icon={v.icon} />
                </span>
                <h3 className="mt-6 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-ink">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-24 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <TestimonialCard testimonial={moreTestimonials[0]} featured />
        </div>
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/klantverhalen" variant="outline" arrow>
            Lees meer klantverhalen
          </ButtonLink>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
