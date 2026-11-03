"use client";

import { useActionState } from "react";
import { sendContactMessage, type ContactState } from "@/app/actions";
import { faArrowRight, faCheck, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "./icons";

const initialState: ContactState = { status: "idle" };

const inputClass =
  "w-full rounded-brand border border-ink/10 bg-mist px-4 py-3.5 text-ink placeholder:text-ink/35 transition-colors outline-none focus:border-petrol-500 focus:bg-white focus:ring-4 focus:ring-sky/40 aria-invalid:border-red-400";

function Field({
  label,
  name,
  error,
  required,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-ink">
        {label}
        {required && <span className="text-petrol-500"> *</span>}
      </label>
      {children}
      {error && (
        <p id={`${name}-error`} className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center rounded-brand bg-sky-50 px-8 py-14 text-center">
        <span className="inline-flex size-16 items-center justify-center rounded-brand bg-petrol text-white">
          <Icon icon={faCheck} className="text-2xl" />
        </span>
        <h3 className="mt-6 text-2xl font-semibold">Bericht ontvangen</h3>
        <p className="mt-3 max-w-sm text-slate-ink">{state.message}</p>
      </div>
    );
  }

  const v = state.values;
  const e = state.errors ?? {};

  return (
    <form action={formAction} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Naam" name="name" error={e.name} required>
          <input
            id="name"
            name="name"
            autoComplete="name"
            defaultValue={v?.name}
            aria-invalid={!!e.name || undefined}
            aria-describedby={e.name ? "name-error" : undefined}
            className={inputClass}
            placeholder="Uw naam"
          />
        </Field>
        <Field label="Bedrijfsnaam" name="company">
          <input
            id="company"
            name="company"
            autoComplete="organization"
            defaultValue={v?.company}
            className={inputClass}
            placeholder="Optioneel"
          />
        </Field>
        <Field label="E-mailadres" name="email" error={e.email} required>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            defaultValue={v?.email}
            aria-invalid={!!e.email || undefined}
            aria-describedby={e.email ? "email-error" : undefined}
            className={inputClass}
            placeholder="naam@bedrijf.nl"
          />
        </Field>
        <Field label="Telefoonnummer" name="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            defaultValue={v?.phone}
            className={inputClass}
            placeholder="Optioneel"
          />
        </Field>
      </div>
      <Field label="Bericht" name="message" error={e.message} required>
        <textarea
          id="message"
          name="message"
          rows={5}
          defaultValue={v?.message}
          aria-invalid={!!e.message || undefined}
          aria-describedby={e.message ? "message-error" : undefined}
          className={`${inputClass} resize-y`}
          placeholder="Waar kunnen we u mee helpen?"
        />
      </Field>

      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label htmlFor="website">Laat dit veld leeg</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {state.status === "error" && state.message && (
        <p role="alert" className="rounded-brand bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.message}
        </p>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-ink">
          Gratis en vrijblijvend. We reageren binnen één werkdag.
        </p>
        <button
          type="submit"
          disabled={pending}
          className="group inline-flex items-center justify-center gap-2 rounded-brand bg-petrol px-7 py-3.5 font-semibold text-white shadow-lg shadow-petrol/25 transition-all hover:bg-petrol-600 disabled:cursor-wait disabled:opacity-70"
        >
          {pending ? "Versturen…" : "Verstuur aanvraag"}
          <Icon
            icon={pending ? faPaperPlane : faArrowRight}
            className="text-sm transition-transform group-hover:translate-x-1"
          />
        </button>
      </div>
    </form>
  );
}
