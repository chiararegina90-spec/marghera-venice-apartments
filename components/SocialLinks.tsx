type SocialLinksProps = {
  className?: string;
  showWhatsApp?: boolean;
  compact?: boolean;
};

const FACEBOOK_URL = 'https://www.facebook.com/margheraveniceapartments/';
const INSTAGRAM_URL = 'https://www.instagram.com/margheraveniceapartments/';
const WHATSAPP_URL = 'https://wa.me/393514462261';

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

export default function SocialLinks({className='',showWhatsApp=false,compact=false}:SocialLinksProps){
  const base = compact
    ? 'inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20 transition hover:-translate-y-0.5 hover:text-gold'
    : 'inline-flex items-center gap-2 rounded-full border border-current/20 px-4 py-2.5 font-semibold transition hover:-translate-y-0.5 hover:border-gold hover:text-gold';

  return <div className={`flex flex-wrap items-center gap-3 ${className}`} aria-label="Social media Marghera Venice Apartments">
    <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Marghera Venice Apartments su Instagram" className={base}>
      <InstagramIcon/>{!compact && <span>Instagram</span>}
    </a>
    <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Marghera Venice Apartments su Facebook" className={base}>
      <FacebookIcon/>{!compact && <span>Facebook</span>}
    </a>
    {showWhatsApp && <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Contatta Marghera Venice Apartments su WhatsApp" className={base}>
      <WhatsAppIcon/>{!compact && <span>WhatsApp</span>}
    </a>}
  </div>
}
