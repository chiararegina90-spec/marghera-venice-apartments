import Link from 'next/link';
import type {ReactNode} from 'react';

export default function Feature({icon,title,text,href,label}:{icon:ReactNode;title:string;text:string;href?:string;label?:string}){
 return <article className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-soft"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cream text-gold">{icon}</div><h3 className="font-serif text-2xl text-navy">{title}</h3><p className="mt-2 text-slate-600">{text}</p>{href&&label&&<Link href={href} className="mt-auto pt-5 text-sm font-bold text-navy underline decoration-gold decoration-2 underline-offset-4 transition hover:text-gold">{label}</Link>}</article>;
}
