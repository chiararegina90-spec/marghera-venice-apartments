import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import CultureDetailPage from '@/components/CultureDetailPage';
import {venetoCulturePlaces,getCulturePlace} from '@/data/culturePlaces';
import {cultureDetailMetadata} from '@/lib/cultureSeo';
export function generateStaticParams(){return venetoCulturePlaces.map(place=>({slug:place.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const place=getCulturePlace('veneto',slug);if(!place)return {};return cultureDetailMetadata('veneto','it',place);}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const place=getCulturePlace('veneto',slug);if(!place)notFound();return <CultureDetailPage place={place} lang="it" scope="veneto" allPlaces={venetoCulturePlaces}/>;}
