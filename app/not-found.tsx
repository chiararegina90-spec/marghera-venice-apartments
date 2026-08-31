import Link from 'next/link';
import {headers} from 'next/headers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Lang='it'|'en'|'de'|'fr'|'es'|'zh';

const copy:Record<Lang,{title:string;body:string;back:string}>={
  it:{title:'Questa pagina non c’è.',body:'Il collegamento potrebbe essere cambiato o la pagina potrebbe non essere disponibile. Puoi tornare alla home e continuare da lì.',back:'Torna alla home'},
  en:{title:'This page does not exist.',body:'The link may have changed or the page may no longer be available. You can return to the home page and continue from there.',back:'Back to home'},
  de:{title:'Diese Seite gibt es nicht.',body:'Der Link wurde möglicherweise geändert oder die Seite ist nicht mehr verfügbar. Sie können zur Startseite zurückkehren und von dort weitermachen.',back:'Zur Startseite'},
  fr:{title:'Cette page n’existe pas.',body:'Le lien a peut-être changé ou la page n’est plus disponible. Vous pouvez revenir à l’accueil et poursuivre votre navigation.',back:'Retour à l’accueil'},
  es:{title:'Esta página no existe.',body:'Es posible que el enlace haya cambiado o que la página ya no esté disponible. Puedes volver a la página de inicio y continuar desde allí.',back:'Volver al inicio'},
  zh:{title:'此页面不存在。',body:'链接可能已更改，或该页面目前不可用。您可以返回首页继续浏览。',back:'返回首页'}
};

const home:Record<Lang,string>={it:'/',en:'/en',de:'/de',fr:'/fr',es:'/es',zh:'/zh'};

export default async function NotFound(){
  const requestHeaders=await headers();
  const requested=requestHeaders.get('x-site-lang');
  const lang:Lang=['en','de','fr','es','zh'].includes(requested||'')?requested as Lang:'it';
  const t=copy[lang];
  return <><Header lang={lang}/><main className="bg-cream px-5 pb-24 pt-40 text-navy"><section className="mx-auto max-w-3xl text-center"><p className="text-sm font-black uppercase tracking-[.22em] text-gold">404</p><h1 className="mt-4 font-serif text-5xl font-bold md:text-6xl">{t.title}</h1><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-navy/70">{t.body}</p><Link href={home[lang]} className="mt-8 inline-flex rounded-full bg-navy px-7 py-4 font-bold text-white">{t.back}</Link></section></main><Footer lang={lang}/></>;
}
