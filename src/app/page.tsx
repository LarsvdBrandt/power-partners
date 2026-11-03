import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  faArrowRight,
  faEnvelope,
  faEye,
  faHandshake,
  faLocationDot,
  faPhone,
  faPiggyBank,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { ContactForm } from "@/components/contact-form";
import { Icon } from "@/components/icons";
import {
  IconBadge,
  TestimonialCard,
  TrustList,
} from "@/components/sections";
import { ButtonLink, Eyebrow, SectionHeading } from "@/components/ui";
import {
  featuredTestimonials,
  highlights,
  processSteps,
  site,
} from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const clients = [
  "Nederland Slaapcentrum",
  "Ebike Gallery",
  "Vruchtboomkwekerij van Montfort",
  "Kinderdagverblijf Dikkie & Dik",
];

const promises = [
  {
    icon: faEye,
    title: "Transparant",
    text: "Geen verborgen kosten of opdringerige verkoop. U krijgt eerlijk inzicht in alle opties.",
  },
  {
    icon: faPiggyBank,
    title: "Scherpe tarieven",
    text: "Dankzij collectieve inkoop profiteert u van prijzen die u zelf niet krijgt.",
  },
  {
    icon: faHandshake,
    title: "U beslist",
    text: "Ons advies is altijd vrijblijvend. De uiteindelijke keuze ligt bij u.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="bg-grid absolute inset-0" aria-hidden="true" />
        <div
          className="absolute top-0 -left-40 size-[600px] rounded-full bg-petrol/50 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -right-20 bottom-0 size-[420px] rounded-full bg-teal/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="container-page relative grid items-center gap-14 pt-36 pb-20 sm:pt-44 lg:grid-cols-12 lg:pb-28">
          <div className="animate-fade-up lg:col-span-6">
            <Eyebrow tone="light">Energieadvies uit Valkenswaard</Eyebrow>
            <h1 className="mt-6 text-[2.6rem] leading-[1.08] font-semibold sm:text-6xl lg:text-[4.2rem]">
              Onafhankelijk advies voor{" "}
              <span className="text-gradient">uw energie</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75">
              Welkom bij PowerPartners. Wij staan voor persoonlijk contact en
              zoeken altijd vrijblijvend naar de beste energieoplossing voor uw
              bedrijf.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/contact" variant="light" arrow>
                Plan een adviesgesprek
              </ButtonLink>
              <ButtonLink href="/onze-diensten" variant="ghost-light">
                Bekijk onze diensten
              </ButtonLink>
            </div>
            <div className="mt-10">
              <TrustList tone="light" />
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative ml-auto aspect-[5/4] w-full max-w-xl overflow-hidden rounded-brand shadow-2xl shadow-black/40 ring-1 ring-white/10">
              <Image
                src="/images/adviesgesprek.jpg"
                alt="Een adviseur bespreekt energiecontracten met een ondernemer"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-linear-to-t from-ink/40 to-transparent"
                aria-hidden="true"
              />
            </div>

            <div className="absolute -bottom-8 left-0 flex animate-float items-center gap-4 rounded-brand bg-white p-3 pr-6 text-ink shadow-2xl shadow-black/30 sm:-left-6">
              <Image
                src="/images/toni.jpg"
                alt="Toni Janssen"
                width={56}
                height={56}
                className="size-14 rounded-brand object-cover"
              />
              <div>
                <p className="text-sm font-semibold">{site.owner}</p>
                <p className="text-xs text-slate-ink">
                  Uw vaste energieadviseur
                </p>
              </div>
            </div>

            <div className="absolute top-6 right-4 hidden items-center gap-3 rounded-brand border border-white/15 bg-ink/70 px-4 py-3 backdrop-blur-md sm:flex lg:-right-4">
              <span className="inline-flex size-10 items-center justify-center rounded-brand bg-teal/20 text-teal">
                <Icon icon={faPiggyBank} />
              </span>
              <div>
                <p className="text-sm font-semibold">Collectieve inkoop</p>
                <p className="text-xs text-white/60">Scherpere tarieven</p>
              </div>
            </div>
          </div>
        </div>

        {/* Client strip */}
        <div className="relative border-t border-white/10">
          <div className="container-page flex flex-col gap-4 py-7 lg:flex-row lg:items-center lg:gap-10">
            <p className="shrink-0 text-xs font-semibold tracking-[0.18em] text-white/45 uppercase">
              Ondernemers gingen u voor
            </p>
            <ul className="flex flex-wrap gap-x-8 gap-y-2">
              {clients.map((client) => (
                <li key={client} className="font-medium text-white/70">
                  {client}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="container-page grid items-center gap-14 py-24 sm:py-32 lg:grid-cols-2">
        <div className="relative">
          <div className="relative aspect-square max-w-md overflow-hidden rounded-brand">
            <Image
              src="/images/toni.jpg"
              alt="Toni Janssen, oprichter van PowerPartners"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute right-0 -bottom-8 max-w-[260px] rounded-brand bg-petrol p-6 text-white shadow-xl shadow-petrol/30 sm:right-6 lg:right-0">
            <p className="text-4xl font-semibold">1</p>
            <p className="mt-1 text-sm text-white/80">
              vast aanspreekpunt. Geen wachtrijen, geen doorverbinden.
            </p>
          </div>
        </div>
        <div>
          <SectionHeading
            eyebrow="Over PowerPartners"
            title="Uw partner in energieoplossingen"
            intro="Als onafhankelijk energieadviseur geloof ik dat de beste beslissing door u zelf wordt genomen. Met persoonlijk contact en deskundig advies help ik u de juiste keuzes te maken, volledig vrijblijvend."
          />
          <blockquote className="mt-8 border-l-4 border-sky pl-5 text-ink/80 italic">
            “Ik kom altijd zelf bij u langs en ben ook de vaste contactpersoon
            aan de telefoon.”
            <footer className="mt-2 text-sm font-semibold text-ink not-italic">
              {site.owner}, oprichter
            </footer>
          </blockquote>
          <div className="mt-10">
            <ButtonLink href="/over-ons" variant="outline" arrow>
              Meer over PowerPartners
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-mist py-24 sm:py-32">
        <div className="container-page">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Onze diensten"
              title="Besparen en verduurzamen, met eerlijk advies op maat"
              intro="Ontdek hoe wij u helpen om energiekosten te verlagen en uw bedrijf toekomstbestendig te maken."
            />
            <ButtonLink href="/onze-diensten" variant="primary" arrow className="shrink-0">
              Alle diensten
            </ButtonLink>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((service) => (
              <Link
                key={service.title}
                href="/onze-diensten"
                className="group relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-brand p-6 text-white"
              >
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-linear-to-t from-ink via-ink/70 to-ink/10 transition-colors duration-500 group-hover:via-petrol-900/80"
                  aria-hidden="true"
                />
                <div className="relative">
                  <IconBadge name={service.icon} className="size-12 text-lg" />
                  <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    {service.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky">
                    Lees meer
                    <Icon
                      icon={faArrowRight}
                      className="text-xs transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
        <Image
          src="/images/windmolens.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div
          className="absolute inset-0 bg-linear-to-b from-ink via-ink/80 to-ink"
          aria-hidden="true"
        />
        <div className="container-page relative">
          <SectionHeading
            tone="light"
            align="center"
            eyebrow="Onze belofte"
            title="Transparant en altijd vrijblijvend"
            intro="Geen verborgen kosten of opdringerige verkoop. U krijgt eerlijk inzicht in de opties en beslist altijd zelf wat het beste bij u past."
          />
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {promises.map((p) => (
              <div
                key={p.title}
                className="rounded-brand border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:border-sky/40 hover:bg-white/10"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-brand bg-sky text-lg text-ink">
                  <Icon icon={p.icon} />
                </span>
                <h3 className="mt-6 text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-white/70">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-page py-24 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Werkwijze"
              title="In vier stappen naar een beter contract"
              intro="Onze primaire focus ligt op het vinden van de meest voordelige energiecontracten, met verduurzaming als waardevolle bijzaak."
            />
            <div className="mt-10">
              <ButtonLink href="/werkwijze" variant="outline" arrow>
                Bekijk onze werkwijze
              </ButtonLink>
            </div>
          </div>
          <ol className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
            {processSteps.map((step, i) => (
              <li
                key={step.title}
                className="group relative overflow-hidden rounded-brand border border-ink/5 bg-mist p-8 transition-colors hover:bg-sky-50"
              >
                <span className="text-5xl font-semibold text-petrol/15 transition-colors group-hover:text-petrol/30">
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-ink">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-sky-50 py-24 sm:py-32">
        <div className="container-page">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Klantverhalen"
              title="Wat ondernemers over ons zeggen"
            />
            <ButtonLink href="/klantverhalen" variant="outline" arrow className="shrink-0">
              Alle klantverhalen
            </ButtonLink>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {featuredTestimonials.map((t, i) => (
              <TestimonialCard key={t.name} testimonial={t} featured={i === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container-page py-24 sm:py-32">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Contact"
              title="Klaar om te besparen op uw energierekening?"
              intro="Neem vandaag nog contact op voor een gratis en vrijblijvend adviesgesprek bij u op de zaak."
            />
            <ul className="mt-10 space-y-3">
              {[
                { icon: faPhone, label: site.phone, href: site.phoneHref },
                { icon: faEnvelope, label: site.email, href: site.emailHref },
                { icon: faWhatsapp, label: "Stuur een WhatsApp", href: site.whatsappHref },
                {
                  icon: faLocationDot,
                  label: `${site.address.street}, ${site.address.city}`,
                  href: site.mapsHref,
                },
              ].map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex items-center gap-4 rounded-brand border border-ink/5 p-4 transition-colors hover:border-petrol/30 hover:bg-mist"
                  >
                    <span className="inline-flex size-11 items-center justify-center rounded-brand bg-sky-100 text-petrol transition-colors group-hover:bg-petrol group-hover:text-white">
                      <Icon icon={c.icon} />
                    </span>
                    <span className="font-medium">{c.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-brand border border-ink/5 bg-white p-6 shadow-2xl shadow-ink/5 sm:p-10 lg:col-span-7">
            <div className="mb-8 flex items-center gap-3">
              <span className="inline-flex size-11 items-center justify-center rounded-brand bg-petrol text-white">
                <Icon icon={faUserTie} />
              </span>
              <div>
                <h3 className="text-lg font-semibold">Vraag een adviesgesprek aan</h3>
                <p className="text-sm text-slate-ink">
                  {site.owner} neemt persoonlijk contact met u op.
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
