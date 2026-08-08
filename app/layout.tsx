import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'Marghera Venice Apartments',description:'Due appartamenti con parcheggio privato, Pet Friendly e Family Friendly: il punto di partenza per Venezia e il Veneto.',openGraph:{title:'Marghera Venice Apartments',description:'Venezia è solo l’inizio.',type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="it" data-scroll-behavior="smooth"><body className="font-sans antialiased">{children}</body></html>}
