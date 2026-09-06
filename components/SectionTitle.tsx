export default function SectionTitle({eyebrow,title,text,center=false}:{eyebrow:string,title:string,text?:string;center?:boolean}){
  return <div className={center?'mx-auto mb-7 max-w-3xl text-center':'mb-7 max-w-3xl'}>
    <p className="mb-2 text-xs font-black uppercase tracking-[.22em] text-gold">{eyebrow}</p>
    <h2 className="font-serif text-[clamp(1.95rem,4.4vw,2.9rem)] leading-[1.12] tracking-[-.015em] text-current">{title}</h2>
    {text&&<p className="mt-3 text-[1.05rem] leading-7 text-current opacity-70">{text}</p>}
  </div>;
}
