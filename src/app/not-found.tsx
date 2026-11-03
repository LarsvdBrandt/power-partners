import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@/components/icons";
import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-ink pt-32 pb-20 text-white">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div className="container-page relative text-center">
        <span className="inline-flex size-16 items-center justify-center rounded-brand bg-sky text-2xl text-ink">
          <Icon icon={faBolt} />
        </span>
        <h1 className="mt-8 text-4xl font-semibold sm:text-6xl">
          Hier staat geen stroom op
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-white/70">
          De pagina die u zoekt bestaat niet (meer). Ga terug naar de homepage
          of neem direct contact met ons op.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/" variant="light" arrow>
            Naar de homepage
          </ButtonLink>
          <ButtonLink href="/contact" variant="ghost-light">
            Contact
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
