type Review = {
  name: string;
  date: string;
  text: string;
};

type ReviewLang='it'|'en'|'de'|'fr'|'es'|'zh';

const reviewUi:Record<ReviewLang,{
  eyebrow:string;
  title:(property:string)=>string;
  intro:string;
  stars:string;
  source:string;
}>={
  it:{eyebrow:'Le parole degli ospiti',title:(property)=>`Cosa dicono di ${property}`,intro:'Esperienze reali di chi ha già soggiornato da noi. Gli estratti sono stati abbreviati solo per facilitarne la lettura.',stars:'5 stelle',source:'Recensione pubblicata su Airbnb'},
  en:{eyebrow:'Guest reviews',title:(property)=>`What guests say about ${property}`,intro:'Real experiences from guests who have stayed with us. Excerpts have only been shortened to make them easier to read.',stars:'5 stars',source:'Review published on Airbnb'},
  de:{eyebrow:'Stimmen unserer Gäste',title:(property)=>`Was Gäste über ${property} sagen`,intro:'Echte Erfahrungen von Gästen, die bereits bei uns übernachtet haben. Die Auszüge wurden nur zur besseren Lesbarkeit gekürzt.',stars:'5 Sterne',source:'Bewertung auf Airbnb veröffentlicht'},
  fr:{eyebrow:'Les avis de nos voyageurs',title:(property)=>`Ce que les voyageurs disent de ${property}`,intro:'Des expériences réelles de voyageurs ayant déjà séjourné chez nous. Les extraits ont uniquement été raccourcis pour faciliter la lecture.',stars:'5 étoiles',source:'Avis publié sur Airbnb'},
  es:{eyebrow:'Opiniones de nuestros huéspedes',title:(property)=>`Qué dicen los huéspedes de ${property}`,intro:'Experiencias reales de quienes ya se han alojado con nosotros. Los extractos solo se han abreviado para facilitar la lectura.',stars:'5 estrellas',source:'Reseña publicada en Airbnb'},
  zh:{eyebrow:'住客评价',title:(property)=>`住客如何评价 ${property}`,intro:'这里展示的是曾入住我们公寓的真实住客体验。部分摘录仅为方便阅读而适当缩短。',stars:'5星',source:'评价发布于 Airbnb'}
};

export default function ReviewSection({property,reviews,lang='it'}:{property:string;reviews:Review[];lang?:ReviewLang}){
  const t=reviewUi[lang];
  return <section className="bg-cream py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8">
    <div className="max-w-3xl"><p className="text-xs font-black uppercase tracking-[.22em] text-gold">{t.eyebrow}</p><h2 className="mt-3 font-serif text-5xl text-navy">{t.title(property)}</h2><p className="mt-5 text-lg text-slate-600">{t.intro}</p></div>
    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{reviews.map(review=><article key={`${review.name}-${review.date}`} className="flex h-full flex-col rounded-[2rem] bg-white p-7 shadow-soft"><div className="text-lg tracking-[.12em] text-gold" aria-label={t.stars}>★★★★★</div><blockquote className="mt-5 flex-1 text-[17px] leading-7 text-slate-600">“{review.text}”</blockquote><footer className="mt-6 border-t border-slate-100 pt-5"><p className="font-bold text-navy">{review.name}</p><p className="mt-1 text-sm text-slate-500">{review.date} · {t.source}</p></footer></article>)}</div>
  </div></section>;
}
