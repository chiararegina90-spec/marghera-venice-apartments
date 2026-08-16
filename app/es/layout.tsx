import type {Metadata} from 'next';
export const metadata:Metadata={title:{default:'Marghera Venice Apartments | Apartamentos cerca de Venecia',template:'%s | Marghera Venice Apartments'},description:'Apartamentos en Marghera cerca de Venecia con aparcamiento privado, buenas conexiones y una acogida pensada para familias y mascotas.',openGraph:{locale:'es_ES',siteName:'Marghera Venice Apartments',type:'website'},twitter:{card:'summary_large_image'}};
export default function LocaleLayout({children}:{children:React.ReactNode}){return children;}
