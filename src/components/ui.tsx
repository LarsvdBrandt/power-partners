import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "./icons";

type ButtonVariant = "primary" | "light" | "outline" | "ghost-light";

const buttonStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-petrol text-white shadow-lg shadow-petrol/25 hover:bg-petrol-600 hover:shadow-petrol/35",
  light: "bg-sky text-ink hover:bg-white",
  outline:
    "border border-ink/15 text-ink hover:border-petrol hover:text-petrol bg-white/60",
  "ghost-light":
    "border border-white/25 text-white hover:bg-white/10 hover:border-white/50",
};

export const buttonBase =
  "group inline-flex items-center justify-center gap-2.5 rounded-brand px-6 py-3.5 text-[15px] font-semibold transition-all duration-300";

export function ButtonLink({
  variant = "primary",
  arrow = false,
  className = "",
  children,
  ...props
}: ComponentProps<typeof Link> & {
  variant?: ButtonVariant;
  arrow?: boolean;
}) {
  return (
    <Link
      className={`${buttonBase} ${buttonStyles[variant]} ${className}`}
      {...props}
    >
      {children}
      {arrow && (
        <Icon
          icon={faArrowRight}
          className="text-sm transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </Link>
  );
}

export function Eyebrow({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase ${
        tone === "light" ? "text-sky" : "text-petrol-600"
      }`}
    >
      <span
        className={`h-px w-8 ${tone === "light" ? "bg-sky" : "bg-petrol-600"}`}
      />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "dark",
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-4 text-3xl leading-[1.15] font-semibold sm:text-4xl lg:text-[2.6rem] ${
          tone === "light" ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            tone === "light" ? "text-white/70" : "text-slate-ink"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
