import Image from 'next/image';
import Link from 'next/link';
import type {ReactNode} from 'react';

type Crumb={label:string;href?:string};

type Props={
  image:string;
  imageAlt:string;
  crumbs:Crumb[];
  eyebrow?:ReactNode;
  title:ReactNode;
  subtitle?:ReactNode;
  children?:ReactNode;
  imagePosition?:string;
  strongShade?:boolean;
  credit?:ReactNode;
  breadcrumbLabel?:string;
};

export default function EditorialHero({image,imageAlt,crumbs,eyebrow,title,subtitle,children,imagePosition='object-center',strongShade=false,credit,breadcrumbLabel='Breadcrumb'}:Props){
  return <section className="relative min-h-[64svh] overflow-hidden pt-20 text-white sm:min-h-[72vh]">
    <Image src={image} alt={imageAlt} fill priority sizes="100vw" className={`object-cover ${imagePosition}`}/>
    <div className={`absolute inset-0 ${strongShade?'bg-[linear-gradient(180deg,rgba(4,24,39,.28)_0%,rgba(4,24,39,.45)_36%,rgba(4,24,39,.94)_100%),linear-gradient(90deg,rgba(4,24,39,.78)_0%,rgba(4,24,39,.34)_64%,rgba(4,24,39,.08)_100%)]':'editorial-cover-shade'}`}/>
    {credit&&<div className="absolute bottom-3 right-4 z-20 max-w-[70vw] text-right text-[10px] leading-4 text-white/72 [text-shadow:0_1px_6px_rgba(0,0,0,.55)]">{credit}</div>}
    <div className="relative mx-auto flex min-h-[calc(64svh-5rem)] max-w-7xl sm:min-h-[calc(72vh-5rem)] items-end px-5 pb-12 pt-20 sm:pb-14 lg:px-8">
      <div className="hero-copy max-w-4xl">
        <nav aria-label={breadcrumbLabel} className="mb-4 flex flex-wrap items-center gap-2 text-sm text-white/75">
          {crumbs.map((crumb,i)=><span key={`${crumb.label}-${i}`} className="contents">{i>0&&<span aria-hidden="true">›</span>}{crumb.href?<Link href={crumb.href} className="hover:text-gold">{crumb.label}</Link>:<span className="text-gold">{crumb.label}</span>}</span>)}
        </nav>
        {eyebrow&&<div className="text-xs font-black uppercase tracking-[.22em] text-gold">{eyebrow}</div>}
        <h1 className="editorial-hero-title mt-4 max-w-5xl font-serif">{title}</h1>
        {subtitle&&<p className="editorial-hero-subtitle mt-5 max-w-3xl text-white/88">{subtitle}</p>}
        {children&&<div className="mt-7">{children}</div>}
      </div>
    </div>
  </section>;
}
