import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export type LPSection = {
  title: string;
  text: string;
  links?: string[][];
};

type Lang = 'de' | 'fr' | 'es';

const contactCopy: Record<
  Lang,
  {
    home: string;
    eyebrow: string;
    title: string;
    text: string;
    button: string;
    whatsappMessage: string;
  }
> = {
  de: {
    home: 'Startseite',
    eyebrow: 'DIREKTER KONTAKT',
    title: 'Erzählen Sie uns von Ihrer Reise',
    text:
      'Senden Sie uns Ihre Reisedaten und die Anzahl der Gäste: Wir antworten Ihnen persönlich mit der Verfügbarkeit und allen Informationen, die Sie für Ihren Aufenthalt benötigen.',
    button: 'Verfügbarkeit prüfen',
    whatsappMessage:
      'Hallo, ich möchte Informationen zur Verfügbarkeit der Marghera Venice Apartments.',
  },
  fr: {
    home: 'Accueil',
    eyebrow: 'CONTACT DIRECT',
    title: 'Parlez-nous de votre voyage',
    text:
      'Envoyez-nous vos dates et le nombre de voyageurs : nous vous répondrons personnellement avec les disponibilités et toutes les informations utiles pour votre séjour.',
    button: 'Vérifier les disponibilités',
    whatsappMessage:
      'Bonjour, je souhaite obtenir des informations sur les disponibilités de Marghera Venice Apartments.',
  },
  es: {
    home: 'Inicio',
    eyebrow: 'CONTACTO DIRECTO',
    title: 'Cuéntanos sobre tu viaje',
    text:
      'Envíanos tus fechas y el número de huéspedes: te responderemos personalmente con la disponibilidad y toda la información que necesites para tu estancia.',
    button: 'Comprobar disponibilidad',
    whatsappMessage:
      'Hola, me gustaría recibir información sobre la disponibilidad de Marghera Venice Apartments.',
  },
};

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current">
      <rect x="3" y="3" width="18" height="18" rx="5" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" strokeWidth="1.8" />
      <circle cx="17.4" cy="6.7" r="1" className="fill-current stroke-none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M13.6 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.6-1.6h1.7V4a22 22 0 0 0-2.5-.1c-2.5 0-4.3 1.5-4.3 4.4v2.4H7.3v3.2h2.8V22h3.5Z" />
    </svg>
  );
}

export default function LocalizedPage({
  lang,
  title,
  subtitle,
  image = '/images/home-rialto-vincenzo-landino.webp',
  imageAlt,
  sections,
  cta,
}: {
  lang: Lang;
  title: string;
  subtitle: string;
  image?: string;
  imageAlt: string;
  sections: LPSection[];
  cta?: string;
}) {
  const copy = contactCopy[lang];
  const contact = cta || copy.button;

  return (
    <>
      <Header lang={lang} />

      <main>
        <section className="relative min-h-[68vh] overflow-hidden pt-20">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/20" />

          <div className="relative mx-auto flex min-h-[calc(68vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-20 lg:px-8">
            <div className="max-w-4xl text-white">
              <Link href={`/${lang}`} className="text-sm text-white/70">
                {copy.home}
              </Link>

              <h1 className="mt-5 break-words font-serif text-5xl leading-[0.98] sm:text-6xl md:text-8xl">
                {title}
              </h1>

              <p className="mt-6 max-w-3xl text-xl text-white/85">
                {subtitle}
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-5xl space-y-12 px-5 lg:px-8">
            {sections.map((s) => (
              <section
                key={s.title}
                className="rounded-[2rem] bg-white p-8 shadow-soft"
              >
                <h2 className="break-words font-serif text-4xl text-navy">
                  {s.title}
                </h2>

                <p className="mt-5 whitespace-pre-line text-lg leading-8 text-slate-600">
                  {s.text}
                </p>

                {s.links && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {s.links.map(([label, href]) => (
                      <Link
                        key={`${label}-${href}`}
                        href={href}
                        className="rounded-full border border-navy px-5 py-3 font-bold text-navy transition hover:bg-navy hover:text-white"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        </section>

        {/* Direct contact section: same visual logic as IT / EN */}
        <section className="bg-navy py-20 text-white">
          <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-gold">
              {copy.eyebrow}
            </p>

            <h2 className="mx-auto mt-4 max-w-4xl break-words font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
              {copy.title}
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">
              {copy.text}
            </p>

            <a
              href={`https://wa.me/393514462261?text=${encodeURIComponent(
                copy.whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex max-w-full items-center justify-center rounded-full bg-gold px-8 py-4 text-center font-bold text-navy transition hover:scale-[1.02]"
            >
              {contact}
            </a>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://www.instagram.com/margheraveniceapartments/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram - Marghera Venice Apartments"
                className="inline-flex items-center gap-3 rounded-full border border-white/70 px-6 py-3 font-bold text-white transition hover:border-gold hover:text-gold"
              >
                <InstagramIcon />
                Instagram
              </a>

              <a
                href="https://www.facebook.com/margheraveniceapartments"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook - Marghera Venice Apartments"
                className="inline-flex items-center gap-3 rounded-full border border-white/70 px-6 py-3 font-bold text-white transition hover:border-gold hover:text-gold"
              >
                <FacebookIcon />
                Facebook
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </>
  );
}
