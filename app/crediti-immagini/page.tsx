import type {Metadata} from 'next'; import ImageCreditsPage from '@/components/ImageCreditsPage';
export const metadata:Metadata={title:'Crediti immagini | Marghera Venice Apartments',description:'Crediti, autori, fonti e licenze delle fotografie di terzi utilizzate nel sito.',alternates:{canonical:'/crediti-immagini'},robots:{index:false,follow:true}};
export default function Page(){return <ImageCreditsPage lang="it"/>}
