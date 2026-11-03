import Image from "next/image";
import type { ReactNode } from "react";
import {
  faBolt,
  faCheck,
  faPhone,
  faQuoteLeft,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { site, type Service, type Testimonial } from "@/lib/site";
import { Icon, ServiceIcon } from "./icons";
import { ButtonLink, Eyebrow, buttonBase } from "./ui";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  image: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink pt-36 pb-20 text-white sm:pt-44 sm:pb-28">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div
        className="absolute inset-0 bg-linear-to-r from-ink via-ink/90 to-ink/40"
        aria-hidden="true"
      />
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div className="container-page relative">
        <div className="max-w-3xl animate-fade-up">
          <Eyebrow tone="light">{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-4xl leading-[1.1] font-semibold sm:text-5xl lg:text-[3.5rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            {intro}
          </p>
          {children && <div className="mt-9 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </section>
  );
}

export function IconBadge({
  name,
  className = "",
}: {
  name: Service["icon"];
  className?: string;
}) {
  return (
    <span
      className={`inline-flex size-14 items-center justify-center rounded-brand bg-petrol text-xl text-white shadow-lg shadow-petrol/30 ${className}`}
    >
      <ServiceIcon name={name} />
    </span>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-brand border border-ink/5 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-petrol/10">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-ink/50 to-transparent"
          aria-hidden="true"
        />
      </div>
      <div className="relative flex flex-1 flex-col px-7 pt-11 pb-8">
        <IconBadge name={service.icon} className="absolute -top-7 left-7 ring-4 ring-white" />
        <h3 className="text-xl font-semibold">{service.title}</h3>
        <p className="mt-3 leading-relaxed text-slate-ink">
          {service.description}
        </p>
      </div>
    </article>
  );
}

export function TestimonialCard({
  testimonial,
  featured = false,
}: {
  testimonial: Testimonial;
  featured?: boolean;
}) {
  return (
    <figure
      className={`flex h-full flex-col rounded-brand p-8 ${
        featured
          ? "bg-petrol text-white"
          : "border border-ink/5 bg-white text-ink shadow-sm"
      }`}
    >
      <div className="flex items-center justify-between">
        <Icon icon={faQuoteLeft} className="text-3xl text-sky" />
        <div
          className={`flex gap-1 text-sm ${featured ? "text-sky" : "text-teal"}`}
          role="img"
          aria-label="5 van 5 sterren"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Icon key={i} icon={faStar} />
          ))}
        </div>
      </div>
      <blockquote
        className={`mt-6 flex-1 text-[17px] leading-relaxed ${
          featured ? "text-white/90" : "text-ink/85"
        }`}
      >
        <p>“{testimonial.quote}”</p>
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-3">
        <span
          className={`inline-flex size-11 items-center justify-center rounded-brand font-semibold ${
            featured ? "bg-white/15 text-white" : "bg-sky-100 text-petrol"
          }`}
          aria-hidden="true"
        >
          {testimonial.name.charAt(0)}
        </span>
        <span>
          <span className="block font-semibold">{testimonial.name}</span>
          {testimonial.company && (
            <span
              className={`block text-sm ${featured ? "text-white/65" : "text-slate-ink"}`}
            >
              {testimonial.company}
            </span>
          )}
        </span>
      </figcaption>
    </figure>
  );
}

export function TrustList({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const items = ["100% onafhankelijk", "Altijd vrijblijvend", "Advies op locatie"];
  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-3">
      {items.map((item) => (
        <li
          key={item}
          className={`flex items-center gap-2 text-sm font-medium ${
            tone === "light" ? "text-white/80" : "text-ink/80"
          }`}
        >
          <span
            className={`inline-flex size-6 items-center justify-center rounded-brand text-[11px] ${
              tone === "light" ? "bg-sky/20 text-sky" : "bg-sky-100 text-petrol"
            }`}
          >
            <Icon icon={faCheck} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function CtaBanner({
  title = "Klaar om te besparen op uw energierekening?",
  text = "Neem vandaag nog contact op voor een gratis en vrijblijvend adviesgesprek bij u op de zaak.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="container-page py-20 sm:py-28">
      <div className="relative isolate overflow-hidden rounded-brand bg-linear-to-br from-petrol via-petrol-900 to-ink px-7 py-14 text-white sm:px-14 sm:py-20">
        <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
        <div
          className="absolute -right-24 -bottom-24 -z-10 size-96 rounded-full bg-teal/30 blur-3xl"
          aria-hidden="true"
        />
        <Icon
          icon={faBolt}
          className="absolute top-1/2 right-16 -z-10 hidden -translate-y-1/2 text-[16rem] text-white/[0.06] lg:block"
        />
        <div className="max-w-2xl">
          <h2 className="text-3xl leading-tight font-semibold sm:text-[2.75rem]">
            {title}
          </h2>
          <p className="mt-5 text-lg text-white/75">{text}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="light" arrow>
              Plan een adviesgesprek
            </ButtonLink>
            <a
              href={site.phoneHref}
              className={`${buttonBase} border border-white/25 hover:border-white/50 hover:bg-white/10`}
            >
              <Icon icon={faPhone} /> {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
