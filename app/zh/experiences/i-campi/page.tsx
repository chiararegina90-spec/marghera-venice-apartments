import ICampiExperiencePageZh from '@/components/ICampiExperiencePageZh';
import {editorialMetadata} from '@/lib/seoContentMetadata';

const title='I Campi 酒庄品鉴：Valpolicella 葡萄酒体验';
const description='从威尼斯出发探索维罗纳附近的 Azienda Agricola I Campi：酒庄品鉴、Valpolicella、Soave、Ripasso 与 Amarone，并可通过微信咨询。';
export const metadata=editorialMetadata({lang:'zh',logicalPath:'/experiences/i-campi',title,description,image:'/images/experience-i-campi-cover.webp',alt:'Val d’Illasi 葡萄园中的 Azienda Agricola I Campi 酒庄'});
export default function Page(){return <ICampiExperiencePageZh/>;}
