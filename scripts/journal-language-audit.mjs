import fs from 'node:fs';
import {gunzipSync} from 'node:zlib';
import ts from 'typescript';

/** Source-aware QA, not a replacement for native-speaker copyediting. */
const langs=['it','en','de','fr','es','zh'];
const read=p=>fs.readFileSync(p,'utf8');
const errors=[]; const notices=[];
const check=(pass,msg)=>{if(!pass)errors.push(msg)};
const unwrap=n=>ts.isAsExpression(n)||ts.isTypeAssertionExpression(n)||ts.isParenthesizedExpression(n)?unwrap(n.expression):n;
function value(node,scope={}){
 if(!node)return undefined;node=unwrap(node);
 if(ts.isStringLiteral(node)||ts.isNoSubstitutionTemplateLiteral(node))return node.text;
 if(ts.isNumericLiteral(node))return Number(node.text);
 if(node.kind===ts.SyntaxKind.TrueKeyword)return true;
 if(node.kind===ts.SyntaxKind.FalseKeyword)return false;
 if(node.kind===ts.SyntaxKind.NullKeyword)return null;
 if(ts.isIdentifier(node))return scope[node.text];
 if(ts.isArrayLiteralExpression(node))return node.elements.map(n=>value(n,scope));
 if(ts.isObjectLiteralExpression(node)){
  const out={};for(const p of node.properties){
   if(ts.isPropertyAssignment(p)){const k=ts.isComputedPropertyName(p.name)?undefined:p.name.text;if(k!==undefined)out[k]=value(p.initializer,scope);}
   else if(ts.isShorthandPropertyAssignment(p))out[p.name.text]=scope[p.name.text];
   else if(ts.isSpreadAssignment(p))Object.assign(out,value(p.expression,scope)||{});
  }return out;
 }
 return undefined;
}
function declarations(file){
 const parsed=ts.createSourceFile(file,read(file),ts.ScriptTarget.Latest,true,ts.ScriptKind.TS);
 const scope={};
 for(const st of parsed.statements){
  if(!ts.isVariableStatement(st))continue;
  for(const d of st.declarationList.declarations)if(ts.isIdentifier(d.name)&&d.initializer)scope[d.name.text]=value(d.initializer,scope);
 }
 return scope;
}
const shared=declarations('data/journal-events-2026.ts');
const slugs=shared.eventSlugs||[];
const payload=[0,1,2,3,4].map(i=>{
 const str=read('data/journal-events-payload-'+i+'.ts');
 const m=str.match(/export default '([^']+)'/);
 check(Boolean(m),'Missing compressed Journal payload part '+i);
 return m?.[1]||'';
}).join('');
let archive={};
try{archive=JSON.parse(gunzipSync(Buffer.from(payload,'base64')).toString('utf8'))}catch(e){errors.push('Could not read archived dynamic Journal data: '+e.message);}
const additions=[
 ['data/journal2027Expansion.ts','journal2027Expansion'],
 ['data/journal2027Events.ts','journalEvents2027'],
 ['data/journalNovember2026Official.ts','officialNovemberEvents'],
 ['data/madonnaSalute2026.ts','madonnaSalute2026'],
 ['data/sanMartinoJournal.ts','sanMartinoJournal'],
 ['data/sanMicheleJournal.ts','sanMicheleJournal'],
 ['data/veneziaNovembreJournal.ts','veneziaNovembreJournal'],
 ['data/halloween2026.ts','halloween2026'],
 ['data/arteLagunaPrize2026.ts','arteLagunaPrize2026']
];
const datasets=[['journal-payload',archive]];
for(const [file,key] of additions){
 if(!fs.existsSync(file))continue;
 const obj=declarations(file)[key];
 if(obj&&typeof obj==='object')datasets.push([key,obj]);
 else notices.push('DATASET_NOT_PARSED '+file+' ('+key+')');
}
const staticJournal={};
for(const l of ['de','fr','es','zh']){
 const src=declarations('data/journal-'+l+'.ts');
 staticJournal[l]=src['journal'+l[0].toUpperCase()+l.slice(1)];
 check(Boolean(staticJournal[l]),'Missing static journal dictionary '+l);
}
const expected=Object.keys(staticJournal.de||{}).sort().join(',');
for(const l of ['fr','es','zh'])check(Object.keys(staticJournal[l]||{}).sort().join(',')===expected,'Static Journal slugs do not match between de and '+l);
let localizedArticleCount=0,compared=0,identical=[],wrongScript=[],strange=[];
const allSources=[...datasets,['staticJournal',staticJournal],['veniceKidsAudit',declarations('data/veniceKidsAudit.ts').veniceKidsAudit],['veniceChristmasAudit',declarations('data/veniceChristmasAudit.ts').veniceChristmasAudit],['journalAuditLocalized',declarations('data/journalAuditLocalized.ts').journalAuditLocalized],['journalAuditPrimary',declarations('data/journalAuditPrimary.ts').journalAuditPrimary]];
const phrases={
 it:/\b(?:Il nostro consiglio|Per maggiori informazioni|Cosa vedere a|Dove parcheggiare|Come arrivare a|La mostra è|La mostra si|Gli orari sono|I biglietti sono|Controlla il sito ufficiale|Scopri anche|Se vuoi visitare)\b/i,
 en:/\b(?:The exhibition (?:will|is|runs)|Please check the|For more information|This guide (?:will|is)|Opening hours and tickets|Read more about|You can visit the|The official programme)\b/i
};
function flatten(node,out=[],key=''){
 if(node==null)return out;
 if(typeof node==='string'){if(!/(?:^https?:|^\/|^\d{4}-\d\d|^www\.)/.test(node)&&node.length>=5)out.push([key,node]);}
 else if(Array.isArray(node))node.forEach((v,i)=>flatten(v,out,key+'['+i+']'));
 else if(typeof node==='object')Object.entries(node).forEach(([k,v])=>{if(!['slug','image','fallbackImage','commonsQuery','officialUrl','href','startDate','endDate','datePublished','dateModified','eventLocation','eventLocations','relatedSlugs','imageCredits','cardImage'].includes(k))flatten(v,out,key+'.'+k)});
 return out;
}
for(const [label,rawSource] of allSources){
 if(!rawSource||typeof rawSource!=='object'){notices.push('UNAVAILABLE_SOURCE '+label);continue;}
 // Some older data modules store a single full article per language instead of slug dictionaries.
 const byLang=Object.fromEntries(langs.filter(l=>rawSource[l]&&typeof rawSource[l]==='object').map(l=>{
  const v=rawSource[l];return [l,v.slug&&Array.isArray(v.sections)?{[v.slug]:v}:v];
 }));
 const available=langs.filter(l=>byLang[l]&&typeof byLang[l]==='object');
 const baseline=available.includes('it')?'it':available.includes('de')?'de':available[0];
 const names=new Set(available.flatMap(l=>Object.keys(byLang[l]||{})));
 for(const slug of names){
  const reference=byLang[baseline]?.[slug];const originalText=flatten(reference);
  for(const lang of available.filter(l=>l!==baseline)){
   const item=byLang[lang]?.[slug];
   if(!item){if(label!=='staticJournal')errors.push('Missing '+lang+' article '+slug+' in '+label);continue;}
   localizedArticleCount++;
   if(label!=='journalAuditLocalized'&&(!item.title||!item.description||!item.lead))errors.push('Incomplete '+lang+' article '+slug+' in '+label);
   if(reference?.sections && item.sections && item.sections.length<Math.ceil(reference.sections.length*0.5))notices.push('SHORT_SECTIONS '+label+' '+slug+' '+lang+' '+item.sections.length+'/'+reference.sections.length);
   const texts=flatten(item);
   for(const [key,text] of texts){
    if(text.length>95&&originalText.some(([,source])=>source===text))identical.push(label+' '+slug+' '+lang+' '+key+': '+text.slice(0,110));
    if(lang==='zh'&&text.length>120&&!(key.endsWith('.official[0]'))){
     const letters=(text.match(/[\u3400-\u9FFF]/g)||[]).length,words=(text.match(/[A-Za-z]{2,}/g)||[]).length;
     if(letters/text.length<0.09&&words>14)wrongScript.push(label+' '+slug+' '+key+': '+text.slice(0,150));
    }
    if(lang!=='it'&&phrases.it.test(text))strange.push('POSSIBLE_ITALIAN '+label+' '+slug+' '+lang+' '+key+': '+text.slice(0,160));
    if(lang!=='en'&&phrases.en.test(text))strange.push('POSSIBLE_ENGLISH '+label+' '+slug+' '+lang+' '+key+': '+text.slice(0,160));
    compared++;
   }
  }
 }
}
for(const x of identical)errors.push('VERBATIM_SOURCE_LOCALE '+x);
for(const x of wrongScript)errors.push('CHINESE_SCRIPT '+x);
// Protect the language of Journal related links across the shared templates.
for(const filename of ['components/AuditedPrimaryJournalArticle.tsx','components/AuditedLocalizedJournalArticle.tsx','components/LocalizedRich.tsx']){
 const code=read(filename);
 check(code.includes('href:localePath(href,lang)')||code.includes('href:localePath(href,lang)')||code.includes('href.startsWith("http")?href:localePath(href,lang)'), 'Journal related links not localized: '+filename);
}
check(read('components/EventJournalArticle.tsx').includes('localePath(data.internalLink.href,lang)'), 'Dynamic article inline link not localized');
const localizedRoutes=langs.map(l=>l==='it'?'app/journal/':'app/'+l+'/journal/');
const routeDirs=fs.readdirSync(localizedRoutes[0],{withFileTypes:true}).filter(f=>f.isDirectory()&&!f.name.startsWith('[')).map(f=>f.name);
for(const l of langs.slice(1))for(const slug of routeDirs)check(fs.existsSync('app/'+l+'/journal/'+slug+'/page.tsx'),'Missing local Journal route '+l+'/'+slug);
const dynamicKeys=slugs.filter(x=>!Object.keys(archive.it||{}).includes(x));
console.log('JOURNAL LANGUAGE AUDIT: '+langs.length+' locales, '+routeDirs.length+' static routes each, '+slugs.length+' dynamic event slugs, '+datasets.length+' dynamic data sources, '+localizedArticleCount+' localized article records, '+compared+' translated text fields.');
console.log('JOURNAL SOURCE DATA: compressed original '+Object.keys(archive.it||{}).length+' articles; dynamic added slugs '+dynamicKeys.join(', '));
for(const line of [...notices,...strange].slice(0,45))console.warn('REVIEW '+line);
if(notices.length+strange.length>45)console.warn('REVIEW +'+(notices.length+strange.length-45)+' more items');
if(errors.length){for(const err of errors.slice(0,50))console.error('FAIL '+err);process.exit(1);}
console.log('PASS Journal language source parity, missing locales, Italian verbatim reuse and Chinese text script checks');
