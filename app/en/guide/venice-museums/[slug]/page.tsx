import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import CultureDetailPage from '@/components/CultureDetailPage';
import {veniceCulturePlaces,getCulturePlace} from '@/data/culturePlaces';
import {cultureDetailMetadata} from '@/lib/cultureSeo';
export function generateStaticParams(){return veniceCulturePlaces.map(place=>({slug:place.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const place=getCulturePlace('venice',slug);if(!place)return {};return cultureDetailMetadata('venice','en',place);}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const place=getCulturePlace('venice',slug);if(!place)notFound();return <CultureDetailPage place={place} lang="en" scope="venice" allPlaces={veniceCulturePlaces}/>;}
