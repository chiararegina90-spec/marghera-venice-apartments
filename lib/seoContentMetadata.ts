import type {Metadata} from 'next';
import {languageAlternates,localePath,type SiteLang} from '@/lib/i18n';

const BASE='https://www.margheraveniceapartments.com';
const ogLocale:Record<SiteLang,string>={it:'it_IT',en:'en_GB',de:'de_DE',fr:'fr_FR',es:'es_ES',zh:'zh_CN'};

export function editorialMetadata({lang,logicalPath,title,description,image,alt}:{lang:SiteLang;logicalPath:string;title:string;description:string;image:string;alt:string}):Metadata{
  const path=localePath(logicalPath,lang);
  const alternates=languageAlternates(logicalPath);
  const resolvedImage=
    logicalPath==='/journal/contributo-accesso-venezia'
      ? '/images/access-fee-cover.png'
      : logicalPath==='/guide/venezia-nascosta'
        ? '/images/venezia-nascosta-cover.png'
        : image;
  return {
    title,description,
    alternates:{...alternates,canonical:path},
    openGraph:{title,description,url:path,locale:ogLocale[lang],type:'article',images:[{url:resolvedImage,alt}]},
    twitter:{card:'summary_large_image',title,description,images:[resolvedImage]},
    other:{'article:modified_time':'2026-09-11'}
  };
}

export const absoluteUrl=(path:string)=>`${BASE}${path}`;
