import {notFound} from 'next/navigation';
import BookQrGuidePage from '@/components/BookQrGuidePage';
import {bookQrGuide,bookQrGuideSlugs,isBookQrGuideSlug} from '@/data/bookQrGuides';
import {editorialMetadata} from '@/lib/seoContentMetadata';

export function generateStaticParams(){return bookQrGuideSlugs.map(bookQrSlug=>({bookQrSlug}));}
export async function generateMetadata({params}:{params:Promise<{bookQrSlug:string}>}){
 const {bookQrSlug}=await params;if(!isBookQrGuideSlug(bookQrSlug))return {};
 const data=bookQrGuide(bookQrSlug,'zh');
 return editorialMetadata({lang:'zh',logicalPath:`/guide/${bookQrSlug}`,title:data.title,description:data.description,image:data.image,alt:data.imageAlt,modified:['venezia-accessibile','venezia-con-qualsiasi-tempo','acquisti-autentici-venezia'].includes(bookQrSlug)?'2026-11-05':'2026-11-06'});
}
export default async function Page({params}:{params:Promise<{bookQrSlug:string}>}){
 const {bookQrSlug}=await params;if(!isBookQrGuideSlug(bookQrSlug))notFound();
 return <BookQrGuidePage lang="zh" data={bookQrGuide(bookQrSlug,'zh')}/>;
}
