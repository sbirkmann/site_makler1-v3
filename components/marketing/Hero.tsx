import Image from "next/image";
import { site } from "@/lib/site";
import { PropertySearch } from "@/components/property/PropertySearch";

/**
 * Hero als eingerueckte Bildflaeche mit runden Ecken:
 * seitlicher Abstand, begrenzte Maximalbreite, Header liegt transparent darueber.
 * Die Headline ist zweizeilig – erste Zeile als Kontur, zweite vollflaechig.
 */
export function Hero({ cities }: { cities: string[] }) {
  const years = new Date().getFullYear() - site.founded;

  return (
    <section className="relative w-full overflow-hidden bg-primary-950">
      <div className="relative min-h-[34rem] w-full lg:min-h-[38rem]">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80"
          alt="Modernes Wohnhaus mit großzügiger Verglasung und begrüntem Vorgarten"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Gleichmaessige, eher flache Abdunklung – die Schrift traegt sich selbst */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/85 via-primary-950/35 to-primary-950/45" />

        <div className="relative mx-auto flex min-h-[34rem] w-full max-w-[1552px] flex-col justify-end px-4 pb-12 pt-[calc(var(--header-height)+2.5rem)] sm:px-8 lg:min-h-[38rem] lg:px-12 lg:pb-16">
          <p className="eyebrow text-accent-200">Immobilienmakler im Rheinland</p>
          <h1 className="hero-title mt-3 max-w-[20ch] text-balance text-white">
            Ihr Immobilienmakler in Köln, Bonn und Umgebung.
          </h1>

          <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-white/80">
            Ehrliche Einschätzung statt Wunschpreisen – für Eigentümer, Käufer und alle,
            die eine Entscheidung in Ruhe treffen wollen. Seit {years} Jahren im Rheinland.
          </p>

          <div className="mt-9 lg:mt-10">
            <PropertySearch cities={cities} />
          </div>
        </div>
      </div>
    </section>
  );
}
