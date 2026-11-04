"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { faBars, faPhone, faXmark } from "@fortawesome/free-solid-svg-icons";
import { navigation, site } from "@/lib/site";
import { Icon } from "./icons";

const allLinks = [
  { href: "/", label: "Home" },
  ...navigation,
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  // Close the mobile menu after navigating
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    // The header box itself ignores taps so it never blocks the page underneath;
    // only the bar and the open menu are interactive.
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      {open && (
        <button
          type="button"
          aria-label="Menu sluiten"
          tabIndex={-1}
          onClick={() => setOpen(false)}
          className="pointer-events-auto fixed inset-0 -z-10 bg-ink/40 backdrop-blur-sm lg:hidden"
        />
      )}

      <div
        className={`pointer-events-auto mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-brand border py-2 pr-2 pl-3 transition-all duration-500 sm:pl-5 ${
          scrolled || open
            ? "border-ink/5 bg-white/95 shadow-xl shadow-ink/5 backdrop-blur-xl"
            : "border-white/60 bg-white/85 backdrop-blur-md"
        }`}
      >
        <Link
          href="/"
          aria-label={`${site.name} home`}
          className="flex min-h-11 shrink-0 items-center px-1"
        >
          <Image
            src="/images/logo-horizontal.png"
            alt={site.name}
            width={2007}
            height={414}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <nav aria-label="Hoofdmenu" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-brand px-4 py-2 text-[14px] font-medium transition-colors ${
                      active
                        ? "bg-sky-100 text-petrol"
                        : "text-ink/75 hover:bg-mist hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-brand px-3 py-2 text-sm font-semibold text-ink/80 transition-colors hover:text-petrol xl:inline-flex"
          >
            <Icon icon={faPhone} className="text-petrol" />
            {site.phone}
          </a>
          <a
            href={site.phoneHref}
            aria-label={`Bel ${site.phone}`}
            className="inline-flex size-11 items-center justify-center rounded-brand bg-sky-100 text-petrol transition-transform active:scale-95 sm:hidden"
          >
            <Icon icon={faPhone} />
          </a>
          <Link
            href="/contact"
            className="hidden min-h-11 items-center rounded-brand bg-ink px-5 text-sm font-semibold text-white transition-colors hover:bg-petrol sm:inline-flex"
          >
            Adviesgesprek
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            className="inline-flex size-11 items-center justify-center rounded-brand bg-mist text-lg text-ink transition-all hover:bg-sky-100 active:scale-95 lg:hidden"
          >
            <Icon icon={open ? faXmark : faBars} />
          </button>
        </div>
      </div>

      {/* Absolutely positioned so the closed menu takes up no space in the header */}
      <div
        id="mobile-menu"
        className={`absolute inset-x-3 top-full mt-2 max-h-[calc(100dvh-6rem)] origin-top overflow-y-auto overscroll-contain rounded-brand bg-white shadow-2xl shadow-ink/20 transition-all duration-300 sm:inset-x-5 lg:hidden ${
          open
            ? "pointer-events-auto visible scale-100 opacity-100"
            : "invisible scale-95 opacity-0"
        }`}
      >
        <nav aria-label="Mobiel menu" className="p-3">
          <ul>
            {allLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex min-h-12 items-center rounded-brand px-4 text-lg font-medium transition-colors active:bg-sky-100 ${
                    pathname === item.href
                      ? "bg-sky-50 text-petrol"
                      : "text-ink hover:bg-mist"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 grid gap-2 border-t border-ink/5 p-2 pt-4 sm:grid-cols-2">
            <a
              href={site.phoneHref}
              className="flex min-h-12 items-center justify-center gap-2 rounded-brand border border-ink/10 px-5 font-semibold active:bg-mist"
            >
              <Icon icon={faPhone} className="text-petrol" /> Bel {site.phone}
            </a>
            <Link
              href="/contact"
              className="flex min-h-12 items-center justify-center rounded-brand bg-petrol px-5 font-semibold text-white active:bg-petrol-600"
            >
              Plan een adviesgesprek
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
