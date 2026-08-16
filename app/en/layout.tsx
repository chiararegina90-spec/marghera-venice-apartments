import type {Metadata} from 'next';
export const metadata:Metadata={title:{default:'Marghera Venice Apartments | Apartments near Venice',template:'%s | Marghera Venice Apartments'},description:'Apartments in Marghera near Venice with private parking, convenient transport connections and family- and pet-friendly hospitality.',openGraph:{locale:'en_GB',siteName:'Marghera Venice Apartments',type:'website'},twitter:{card:'summary_large_image'}};
export default function LocaleLayout({children}:{children:React.ReactNode}){return children;}
