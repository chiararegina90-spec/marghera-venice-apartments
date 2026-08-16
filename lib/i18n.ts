export type SiteLang='it'|'en'|'de'|'fr'|'es'|'zh';
export const siteLangs:SiteLang[]=['it','en','de','fr','es','zh'];
const localizedToIt:Record<string,string>={
 '/apartments/rossi-apartment':'/case/rossi-apartment',
 '/apartments/dimora-castelli':'/case/dimora-castelli',
 '/discover-venice':'/scopri-venezia',
 '/discover-veneto':'/scopri-il-veneto',
 '/getting-to-venice':'/come-raggiungere-venezia',
 '/experiences':'/collaborazioni',
 '/useful-links':'/link-utili',
};
const itToLocalized=Object.fromEntries(Object.entries(localizedToIt).map(([k,v])=>[v,k]));
export function stripLocale(pathname:string){
 for(const l of siteLangs.filter(x=>x!=='it')) if(pathname===`/${l}`) return '/'; else if(pathname.startsWith(`/${l}/`)) return pathname.slice(l.length+1);
 return pathname;
}
export function localePath(pathname:string,target:SiteLang){
 let logical=stripLocale(pathname||'/');
 if(logical!=='/' && !logical.startsWith('/')) logical='/'+logical;
 // Normalize Italian special slugs to the shared localized logical slugs.
 if(itToLocalized[logical]) logical=itToLocalized[logical];
 if(target==='it') return localizedToIt[logical] || logical;
 return logical==='/'?`/${target}`:`/${target}${logical}`;
}
export const hreflang:Record<SiteLang,string>={it:'it-IT',en:'en-GB',de:'de-DE',fr:'fr-FR',es:'es-ES',zh:'zh-CN'};

export function languageAlternates(pathname:string){
  return {canonical:pathname,languages:{'it-IT':localePath(pathname,'it'),'en-GB':localePath(pathname,'en'),'de-DE':localePath(pathname,'de'),'fr-FR':localePath(pathname,'fr'),'es-ES':localePath(pathname,'es'),'zh-CN':localePath(pathname,'zh'),'x-default':localePath(pathname,'it')}};
}
