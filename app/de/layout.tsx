import type {Metadata} from 'next';
export const metadata:Metadata={title:{default:'Marghera Venice Apartments | Apartments nahe Venedig',template:'%s | Marghera Venice Apartments'},description:'Apartments in Marghera nahe Venedig mit privatem Parkplatz, guten Verkehrsverbindungen sowie familien- und haustierfreundlicher Gastfreundschaft.',openGraph:{locale:'de_DE',siteName:'Marghera Venice Apartments',type:'website'},twitter:{card:'summary_large_image'}};
export default function LocaleLayout({children}:{children:React.ReactNode}){return children;}
