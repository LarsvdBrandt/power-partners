"use server";

import { site } from "@/lib/site";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "message", string>>;
  values?: { name: string; email: string; phone: string; company: string; message: string };
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContactMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const values = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    company: String(formData.get("company") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  // Honeypot: real visitors never fill this hidden field
  if (String(formData.get("website") ?? "") !== "") {
    return { status: "success", message: "Bedankt voor uw bericht!" };
  }

  const errors: ContactState["errors"] = {};
  if (values.name.length < 2) errors.name = "Vul uw naam in.";
  if (!EMAIL_PATTERN.test(values.email))
    errors.email = "Vul een geldig e-mailadres in.";
  if (values.message.length < 10)
    errors.message = "Vertel ons kort waar we u mee kunnen helpen.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors, values };
  }

  const body = [
    `Naam: ${values.name}`,
    `E-mail: ${values.email}`,
    `Telefoon: ${values.phone || "-"}`,
    `Bedrijf: ${values.company || "-"}`,
    "",
    values.message,
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // No mail provider configured yet: log so messages aren't silently lost in development
    console.info("[contact] Nieuw bericht (RESEND_API_KEY ontbreekt):\n" + body);
    return {
      status: "success",
      message: "Bedankt! We nemen zo snel mogelijk contact met u op.",
    };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? "website@power-partners.nl",
        to: process.env.CONTACT_TO_EMAIL ?? site.email,
        reply_to: values.email,
        subject: `Adviesaanvraag via website: ${values.name}`,
        text: body,
      }),
    });
    if (!res.ok) throw new Error(`Resend responded with ${res.status}`);
  } catch (error) {
    console.error("[contact] Versturen mislukt", error);
    return {
      status: "error",
      message: `Er ging iets mis bij het versturen. Bel ons gerust op ${site.phone}.`,
      values,
    };
  }

  return {
    status: "success",
    message: "Bedankt! We nemen zo snel mogelijk contact met u op.",
  };
}
