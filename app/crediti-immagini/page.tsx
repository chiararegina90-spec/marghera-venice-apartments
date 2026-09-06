import type {Metadata} from 'next'; import ImageCreditsPage from '@/components/ImageCreditsPage';
export const metadata:Metadata={title:'Crediti immagini | Marghera Venice Apartments',description:'Crediti e licenze delle immagini Wikimedia Commons utilizzate nelle guide.',alternates:{canonical:'/crediti-immagini'},robots:{index:false,follow:true}};
export default function Page(){return <ImageCreditsPage lang="it"/>}
