import type {Metadata} from 'next';
import ParkingStayPage from '@/components/ParkingStayPage';
import {parkingStayContent} from '@/data/parkingStayContent';
import {languageAlternates} from '@/lib/i18n';

const content=parkingStayContent.it;
export const metadata:Metadata={
  title:{absolute:content.seoTitle},
  description:content.metaDescription,
  alternates:languageAlternates('/appartamenti-venezia-parcheggio-gratuito'),
  openGraph:{title:content.ogTitle,description:content.ogDescription,type:'website',images:[{url:'/images/rossi-parcheggio-privato.webp',alt:content.parkingRossiAlt}]},
  twitter:{card:'summary_large_image',title:content.ogTitle,description:content.ogDescription,images:['/images/rossi-parcheggio-privato.webp']}
};
export default function Page(){return <ParkingStayPage lang="it"/>;}
