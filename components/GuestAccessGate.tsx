import Image from 'next/image';
import type {GuestApartment} from '@/lib/guest-auth';

export type GuestAccessLang='it'|'en'|'de'|'fr'|'es'|'zh';

const apartmentNames:Record<GuestApartment,string>={
  rossi:'Rossi Apartment',
  'dimora-castelli':'Dimora Castelli',
};

const copy:Record<GuestAccessLang,{
  subtitle:string;
  title:string;
  intro:string;
  label:string;
  button:string;
  invalid:string;
  unavailable:string;
  privateNote:string;
}>={
  it:{
    subtitle:'Welcome Book privato · Guida riservata agli ospiti',
    title:'Accesso ospiti',
    intro:'Inserisci il codice ricevuto dall’host per aprire il Welcome Book.',
    label:'Codice di accesso',
    button:'Apri il Welcome Book',
    invalid:'Codice non corretto',
    unavailable:'Accesso temporaneamente non configurato. Contatta l’host.',
    privateNote:'Quest’area privata è riservata agli ospiti di Marghera Venice Apartments.',
  },
  en:{
    subtitle:'Private Welcome Book · Guest-only guide',
    title:'Guest access',
    intro:'Enter the access code provided by your host to open the Welcome Book.',
    label:'Access code',
    button:'Open Welcome Book',
    invalid:'Incorrect access code',
    unavailable:'Access is temporarily unavailable. Please contact your host.',
    privateNote:'This private area is reserved for guests of Marghera Venice Apartments.',
  },
  de:{
    subtitle:'Privates Welcome Book · Nur für Gäste',
    title:'Gästezugang',
    intro:'Geben Sie den Zugangscode Ihres Gastgebers ein, um das Welcome Book zu öffnen.',
    label:'Zugangscode',
    button:'Welcome Book öffnen',
    invalid:'Der Zugangscode ist nicht korrekt',
    unavailable:'Der Zugang ist vorübergehend nicht verfügbar. Bitte kontaktieren Sie Ihren Gastgeber.',
    privateNote:'Dieser private Bereich ist ausschließlich für Gäste von Marghera Venice Apartments bestimmt.',
  },
  fr:{
    subtitle:'Welcome Book privé · Guide réservé aux voyageurs',
    title:'Accès voyageurs',
    intro:'Saisissez le code transmis par votre hôte pour ouvrir le Welcome Book.',
    label:'Code d’accès',
    button:'Ouvrir le Welcome Book',
    invalid:'Code d’accès incorrect',
    unavailable:'L’accès est temporairement indisponible. Contactez votre hôte.',
    privateNote:'Cet espace privé est réservé aux voyageurs de Marghera Venice Apartments.',
  },
  es:{
    subtitle:'Welcome Book privado · Guía exclusiva para huéspedes',
    title:'Acceso para huéspedes',
    intro:'Introduce el código facilitado por tu anfitrión para abrir el Welcome Book.',
    label:'Código de acceso',
    button:'Abrir el Welcome Book',
    invalid:'El código de acceso no es correcto',
    unavailable:'El acceso no está disponible temporalmente. Contacta con tu anfitrión.',
    privateNote:'Esta zona privada está reservada a los huéspedes de Marghera Venice Apartments.',
  },
  zh:{
    subtitle:'私人 Welcome Book · 仅限住客使用',
    title:'住客访问',
    intro:'请输入房东提供的访问码，以打开 Welcome Book。',
    label:'访问码',
    button:'打开 Welcome Book',
    invalid:'访问码不正确',
    unavailable:'暂时无法使用访问功能，请联系房东。',
    privateNote:'此私人区域仅供 Marghera Venice Apartments 当前住客使用。',
  },
};

const fallback={
  subtitle:'Private Welcome Book · Guida privata per gli ospiti',
  title:'Guest access',
  intro:'Enter the access code provided by your host to open the Welcome Book.',
  secondary:'Inserisci il codice ricevuto dall’host per accedere al Welcome Book.',
  label:'Access code · Codice di accesso',
  button:'Open Welcome Book',
  invalid:'Codice non corretto · Incorrect access code',
  unavailable:'Accesso temporaneamente non configurato. Contatta l’host.',
  privateNote:'This private area is reserved for current guests of Marghera Venice Apartments.',
};

export default function GuestAccessGate({
  apartment,
  error,
  configured,
  lang,
}: {
  apartment: GuestApartment;
  error?: string;
  configured: boolean;
  lang?: GuestAccessLang;
}) {
  const localized=lang?copy[lang]:null;
  const c=localized||fallback;
  return (
    <main className="min-h-screen bg-cream px-5 py-12 text-navy">
      <div className="mx-auto max-w-lg text-center">
        <Image
          src="/images/logo.png"
          alt="Marghera Venice Apartments"
          width={100}
          height={100}
          className="mx-auto rounded-full bg-white shadow-soft"
          priority
        />
        <p className="mt-6 text-xs font-black uppercase tracking-[.22em] text-gold">
          Marghera Venice Apartments
        </p>
        <h1 className="mt-3 font-serif text-5xl">{apartmentNames[apartment]}</h1>
        <p className="mt-3 text-slate-600">{c.subtitle}</p>

        <section className="mt-8 rounded-[2rem] bg-white p-7 text-left shadow-soft sm:p-9">
          <h2 className="font-serif text-3xl text-navy">{c.title}</h2>
          <p className="mt-3 leading-7 text-slate-600">{c.intro}</p>
          {!localized&&<p className="mt-1 text-sm leading-6 text-slate-500">{fallback.secondary}</p>}

          {!configured ? (
            <p className="mt-6 rounded-2xl bg-cream p-4 text-sm font-semibold text-navy">
              {c.unavailable}
            </p>
          ) : (
            <form action="/api/guest-access" method="post" className="mt-7">
              <input type="hidden" name="apartment" value={apartment} />
              {lang&&<input type="hidden" name="lang" value={lang}/>} 
              <label htmlFor="guest-code" className="text-sm font-bold text-navy">
                {c.label}
              </label>
              <input
                id="guest-code"
                name="code"
                type="password"
                autoComplete="current-password"
                required
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-cream px-5 py-4 text-lg font-semibold uppercase tracking-[.08em] outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                placeholder="••••••••••"
              />
              {error === 'invalid' && (
                <p className="mt-3 text-sm font-semibold text-red-700">{c.invalid}</p>
              )}
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-navy px-6 py-4 font-bold text-white transition hover:-translate-y-0.5"
              >
                {c.button}
              </button>
            </form>
          )}
        </section>
        <p className="mt-6 text-xs leading-5 text-slate-500">{c.privateNote}</p>
      </div>
    </main>
  );
}
