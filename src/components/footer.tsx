import Image from "next/image";
import Link from "next/link";
import { cacheLife } from "next/cache";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { navigation, site } from "@/lib/site";
import { Icon } from "./icons";

async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

const socialClass =
  "inline-flex size-11 items-center justify-center rounded-brand border border-white/15 transition-colors hover:border-sky hover:text-sky";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="absolute -top-40 right-0 size-[520px] rounded-full bg-petrol/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Image
              src="/images/logo-horizontal-white.png"
              alt={site.name}
              width={2007}
              height={414}
              className="h-10 w-auto"
            />
            <p className="mt-6 max-w-sm leading-relaxed text-white/65">
              Onafhankelijk energieadvies voor ondernemers in Valkenswaard en
              omstreken. Persoonlijk, transparant en altijd vrijblijvend.
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href={site.linkedinHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={socialClass}
              >
                <Icon icon={faLinkedinIn} />
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className={socialClass}
              >
                <Icon icon={faWhatsapp} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-xs font-semibold tracking-[0.18em] text-sky uppercase">
              Navigatie
            </h2>
            <ul className="mt-5 space-y-3">
              {[{ href: "/", label: "Home" }, ...navigation, { href: "/contact", label: "Contact" }].map(
                (item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-white/75 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h2 className="text-xs font-semibold tracking-[0.18em] text-sky uppercase">
              Contact
            </h2>
            <ul className="mt-5 space-y-4 text-white/75">
              <li>
                <a
                  href={site.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 transition-colors hover:text-white"
                >
                  <Icon icon={faLocationDot} className="mt-1 w-4 text-sky" />
                  <span>
                    {site.address.street}
                    <br />
                    {site.address.postalCode} {site.address.city}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Icon icon={faPhone} className="w-4 text-sky" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Icon icon={faEnvelope} className="w-4 text-sky" />
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CurrentYear /> {site.name}. Alle rechten voorbehouden.
          </p>
          <p>Energieadvies uit Valkenswaard</p>
        </div>
      </div>
    </footer>
  );
}
