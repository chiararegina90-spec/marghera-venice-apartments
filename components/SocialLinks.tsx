type SocialLinksProps = {
  className?: string;
  showWhatsApp?: boolean;
  compact?: boolean;
  lang?: 'it'|'en'|'de'|'fr'|'es'|'zh';
};

const FACEBOOK_URL = 'https://www.facebook.com/margheraveniceapartments/';
const INSTAGRAM_URL = 'https://www.instagram.com/margheraveniceapartments/';
const WHATSAPP_URL_IT = 'https://wa.me/393514462261?text=Ciao%2C%20vorrei%20ricevere%20informazioni%20su%20Marghera%20Venice%20Apartments.%20';
const WHATSAPP_URL_DE = 'https://wa.me/393514462261?text=Hallo%2C%20ich%20m%C3%B6chte%20Informationen%20zu%20Marghera%20Venice%20Apartments.%20';
const WHATSAPP_URL_FR = 'https://wa.me/393514462261?text=Bonjour%2C%20je%20souhaite%20recevoir%20des%20informations%20sur%20Marghera%20Venice%20Apartments.%20';
const WHATSAPP_URL_ES = 'https://wa.me/393514462261?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20Marghera%20Venice%20Apartments.%20';
const WHATSAPP_URL_EN = 'https://wa.me/393514462261?text=Hello%2C%20I%E2%80%99d%20like%20information%20about%20Marghera%20Venice%20Apartments.%20';

function InstagramIcon(){
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="3" width="18" height="18" rx="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
}

function FacebookIcon(){
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
    <path d="M13.7 22v-9h3l.5-3.5h-3.5V7.3c0-1 .3-1.7 1.8-1.7h1.9V2.5c-.3 0-1.5-.1-2.8-.1-2.8 0-4.7 1.7-4.7 4.8v2.3H7V13h2.9v9h3.8Z"/>
  </svg>
}

function WhatsAppIcon(){
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z"/>
    <path d="M8.4 8.2c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.8 2c.1.3 0 .5-.2.7l-.6.7c-.2.2-.1.4 0 .6.7 1.3 1.8 2.3 3.2 3 .2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l1.9.9c.3.1.4.3.4.5 0 .3-.1 1.4-.7 2-.5.6-1.3.9-2.2.7-1.1-.2-2.7-.8-4.6-2.5-1.5-1.3-2.6-2.9-3-4.2-.4-1.3 0-2.4.7-3Z"/>
  </svg>
}

export default function SocialLinks({className='',showWhatsApp=false,compact=false,lang='it'}:SocialLinksProps){
  const WHATSAPP_URL=lang==='en'?WHATSAPP_URL_EN:lang==='de'?WHATSAPP_URL_DE:lang==='fr'?WHATSAPP_URL_FR:lang==='es'?WHATSAPP_URL_ES:WHATSAPP_URL_IT;
  const base = compact
    ? 'inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20 transition hover:-translate-y-0.5 hover:text-gold'
    : 'inline-flex items-center gap-2 rounded-full border border-current/20 px-4 py-2.5 font-semibold transition hover:-translate-y-0.5 hover:border-gold hover:text-gold';

  const labels={it:['Social media Marghera Venice Apartments','Marghera Venice Apartments su Instagram','Marghera Venice Apartments su Facebook','Contatta Marghera Venice Apartments su WhatsApp'],en:['Marghera Venice Apartments social media','Marghera Venice Apartments on Instagram','Marghera Venice Apartments on Facebook','Contact Marghera Venice Apartments on WhatsApp'],de:['Social Media von Marghera Venice Apartments','Marghera Venice Apartments auf Instagram','Marghera Venice Apartments auf Facebook','Marghera Venice Apartments über WhatsApp kontaktieren'],fr:['Réseaux sociaux de Marghera Venice Apartments','Marghera Venice Apartments sur Instagram','Marghera Venice Apartments sur Facebook','Contacter Marghera Venice Apartments sur WhatsApp'],es:['Redes sociales de Marghera Venice Apartments','Marghera Venice Apartments en Instagram','Marghera Venice Apartments en Facebook','Contactar con Marghera Venice Apartments por WhatsApp'],zh:['Marghera Venice Apartments 社交媒体','Marghera Venice Apartments Instagram','Marghera Venice Apartments Facebook','通过 WhatsApp 联系 Marghera Venice Apartments']} as const;
  const a=labels[lang];
  return <div className={`flex flex-wrap items-center gap-3 ${className}`} aria-label={a[0]}>
    <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label={a[1]} className={base}>
      <InstagramIcon/>{!compact && <span>Instagram</span>}
    </a>
    <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label={a[2]} className={base}>
      <FacebookIcon/>{!compact && <span>Facebook</span>}
    </a>
    {showWhatsApp && <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label={a[3]} className={base}>
      <WhatsAppIcon/>{!compact && <span>WhatsApp</span>}
    </a>}
  </div>
}
