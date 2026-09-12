export default function SectionTitle({eyebrow,title,text,center=false}:{eyebrow:string,title:string,text?:string;center?:boolean}){
  return <div className={center?'mx-auto mb-7 max-w-3xl text-center':'mb-7 max-w-3xl'}>
    <p className="mb-2 text-xs font-black uppercase tracking-[.22em] text-gold">{eyebrow}</p>
    <h2 className="font-serif text-5xl leading-[1.12] tracking-[-.015em] text-current">{title}</h2>
    {text&&<p className="mt-3 text-lg leading-8 text-current opacity-70">{text}</p>}
  </div>;
}
