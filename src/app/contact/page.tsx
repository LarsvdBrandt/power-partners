import Image from "next/image";
import type { Metadata } from "next";
import {
  faArrowUpRightFromSquare,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { ContactForm } from "@/components/contact-form";
import { Icon } from "@/components/icons";
import { PageHero } from "@/components/sections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Vraag een gratis en vrijblijvend adviesgesprek aan bij PowerPartners in Valkenswaard. Bel, mail, app of vul het contactformulier in.",
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    icon: faPhone,
    title: "Telefoon",
    value: site.phone,
    action: "Bel nu",
    href: site.phoneHref,
  },
  {
    icon: faEnvelope,
    title: "E-mail",
    value: site.email,
    action: "Mail nu",
    href: site.emailHref,
  },
  {
    icon: faWhatsapp,
    title: "WhatsApp",
    value: site.phone,
    action: "Stuur een bericht",
    href: site.whatsappHref,
    external: true,
  },
  {
    icon: faLinkedinIn,
    title: "LinkedIn",
    value: site.owner,
    action: "Bekijk profiel",
    href: site.linkedinHref,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Vraag een gratis adviesgesprek aan"
        intro="Op zoek naar onafhankelijk energieadvies? Vul het formulier in en we nemen vrijblijvend contact met u op. Samen kijken we welk energieplan bij uw bedrijf past."
        image="/images/telefoon.jpg"
      />

      <section className="container-page relative z-10 -mt-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c) => (
            <a
              key={c.title}
              href={c.href}
              {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group rounded-brand border border-ink/5 bg-white p-6 shadow-xl shadow-ink/5 transition-all hover:-translate-y-1 hover:border-petrol/20"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-brand bg-sky-100 text-lg text-petrol transition-colors group-hover:bg-petrol group-hover:text-white">
                <Icon icon={c.icon} />
              </span>
              <h2 className="mt-5 text-lg font-semibold">{c.title}</h2>
              <p className="mt-1 truncate text-slate-ink">{c.value}</p>
              <p className="mt-4 text-sm font-semibold text-petrol">{c.action} →</p>
            </a>
          ))}
        </div>
      </section>

      <section className="container-page grid gap-10 py-24 sm:py-28 lg:grid-cols-12">
        <div className="rounded-brand border border-ink/5 bg-white p-6 shadow-2xl shadow-ink/5 sm:p-10 lg:col-span-7">
          <h2 className="text-3xl font-semibold">Neem contact met ons op</h2>
          <p className="mt-3 mb-8 text-slate-ink">
            Vertel kort waar u mee bezig bent. {site.owner} neemt persoonlijk
            contact met u op.
          </p>
          <ContactForm />
        </div>

        <div className="flex flex-col gap-6 lg:col-span-5">
          <div className="relative min-h-72 flex-1 overflow-hidden rounded-brand">
            <Image
              src="/images/toni.jpg"
              alt="Toni Janssen, energieadviseur bij PowerPartners"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-brand bg-white/90 p-5 backdrop-blur-md">
              <p className="font-semibold">{site.owner}</p>
              <p className="text-sm text-slate-ink">
                Uw vaste aanspreekpunt, persoonlijk en direct bereikbaar.
              </p>
            </div>
          </div>
          <a
            href={site.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 rounded-brand bg-ink p-6 text-white transition-colors hover:bg-ink-800"
          >
            <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-brand bg-sky text-lg text-ink">
              <Icon icon={faLocationDot} />
            </span>
            <span className="flex-1">
              <span className="block font-semibold">Locatie</span>
              <span className="mt-1 block text-white/70">
                {site.address.street}, {site.address.postalCode}{" "}
                {site.address.city}
              </span>
              <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-sky">
                Plan uw route
                <Icon icon={faArrowUpRightFromSquare} className="text-xs" />
              </span>
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
