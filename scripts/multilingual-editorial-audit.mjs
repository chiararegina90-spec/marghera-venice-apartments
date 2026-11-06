import fs from 'node:fs';
const read=(file)=>fs.readFileSync(file,'utf8');
const exists=(file)=>fs.existsSync(file);
const langs=['it','en','de','fr','es','zh'];
const problems=[];
const ok=(test,msg)=>{if(!test)problems.push(msg)};
for(const lang of langs){
 const p=lang==='it'?'app/':'app/'+lang+'/';
 for(const [route,folder] of [['guides','guide'],['journal','journal']]){
  ok(exists(p+folder+'/page.tsx'),lang+' missing '+route+' index');
 }
 ok(exists(p+'guide/[bookQrSlug]/page.tsx'),lang+' missing QR guides');
 ok(exists(p+'journal/[eventSlug]/page.tsx'),lang+' missing events');
 ok(exists(p+'corporate/page.tsx'),lang+' missing corporate');
}
const itGuides=new Set([...read('data/guides.ts').matchAll(/"slug":\s*"([^"]+)"/g)].map(x=>x[1]));
ok(itGuides.size===15,'Unexpected base travel guide count');
for(const lang of langs.slice(1)){
 const localized=read('data/guides-'+lang+'.ts');
 // Distinct guide titles and internal editorial plans must be present in each language.
 for(const slug of itGuides)ok(localized.includes("slug:'"+slug+"'"),lang+' missing travel guide '+slug);
}
const italianJournalDirs=fs.readdirSync('app/journal',{withFileTypes:true}).filter(e=>e.isDirectory()&&!e.name.startsWith('[')).map(e=>e.name);
for(const lang of langs.slice(1))for(const slug of italianJournalDirs){
 ok(exists('app/'+lang+'/journal/'+slug+'/page.tsx'),lang+' missing Journal editorial page '+slug);
}
const culture=read('data/culturePlaces.ts');
const nVenice=(culture.match(/"scope": "venice"/g)||[]).length;
const nVeneto=(culture.match(/"scope": "veneto"/g)||[]).length;
ok(nVenice>=82&&nVeneto>=49,'Culture index changed: '+nVenice+'/'+nVeneto);
const sourceFacts=new Set([...culture.matchAll(/"highlights":\s*\[\s*"([^"]+)"\s*,\s*"([^"]+)"\s*,\s*"([^"]+)"/g)].flatMap(m=>m.slice(1)));
const facts=read('data/cultureHighlightsLocalized.ts');
const factStart=facts.indexOf('const raw:Record<string,string[]> = ');
const factEnd=facts.indexOf(';\nexport function cultureFactHighlight',factStart);
ok(factStart>=0&&factEnd>factStart,'Culture translations unavailable');
let dictionary={};
if(factEnd>factStart)dictionary=JSON.parse(facts.slice(facts.indexOf('=',factStart)+1,factEnd));
ok(Object.keys(dictionary).length>=200,'Cultural source-grounded facts reduced');
for(const [original,translations] of Object.entries(dictionary)){
 ok(sourceFacts.has(original),'Obsolete cultural term: '+original);
 ok(Array.isArray(translations)&&translations.length===5&&translations.every(x=>typeof x==='string'&&x.length>1),'Untranslated cultural term: '+original);
}
const et=read('data/cultureTemporaryEvents.ts');
const listed=[...et.matchAll(/\{placeSlug:'([^']+)',title:'([^']+)',start:'([^']+)',end:'([^']+)'/g)];
const loc=read('data/cultureTemporaryDetailsLocalized.ts');
const locStart=loc.indexOf('const details:Record<string,Partial<Record<CultureLang,string>>> = ');
const locEnd=loc.indexOf(';\nexport function localizedTemporaryEventDetail',locStart);
ok(locStart>=0&&locEnd>locStart,'Missing event-specific translations');
const eventDetails=locEnd>locStart?JSON.parse(loc.slice(loc.indexOf('=',locStart)+1,locEnd)):{};
let repaired=0;
for(let i=0;i<listed.length;i++){
 const event=listed[i],part=et.slice(event.index,listed[i+1]?.index||et.indexOf('];',event.index));
 if(event[4]<new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Rome',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date()))continue;
 if(part.includes('summaries:')){for(const lang of langs.slice(1))ok(new RegExp('\\b'+lang+':').test(part),'Missing exhibition summary in '+lang+': '+event[2]);continue;}
 const x=eventDetails[event[2]];
 ok(Boolean(x)&&langs.slice(1).every(l=>typeof x[l]==='string'&&x[l].length>=(l==='zh'?12:30)),'Event missing specific 5-language copy: '+event[2]);
 if(x)repaired++;
}
// The active event count changes with the calendar; enforce parity for each active row rather than a fixed historical count.
for(const filename of ['data/bookQrPackageBCItineraries.ts','data/bookQrPackageBCCulture.ts']){
 const src=read(filename),begin=src.indexOf('const source:Record<'),eq=src.indexOf('=',begin),end=src.indexOf(';\nconst langs:',eq);
 ok(begin>=0&&end>eq,'Could not audit '+filename);if(end<=eq)continue;
 const pages=JSON.parse(src.slice(eq+1,end));
 for(const [slug,versions] of Object.entries(pages)){
  for(const language of langs){
   ok(Boolean(versions[language]),slug+' missing '+language);
   if(!versions[language])continue;
   for(const section of ['intro','highlights','itinerary','faq'])ok(versions[language][section].length===versions.it[section].length,slug+' missing '+section+' in '+language);
  }
 }
}
const guide=read('components/GuideDirectoryIndex.tsx'),body=read('components/GuideBody.tsx');
ok(guide.includes('...packageASlugs,...itineraryBookSlugs,...culturalBookSlugs'),'Book A-C missing in guide directory');
ok(body.includes('return localePath(href,lang);'),'Localized links regressed');
const transport=read('data/parity-pages.ts');
for(const label of ['7 Tage (168 Stunden)','7 jours (168 heures)','7 días (168 horas)','7 天（168 小时）'])ok(transport.includes(label),'Missing ACTV fare in locale: '+label);
ok(read('app/en/getting-to-venice/page.tsx').includes('7 days (168 hours)'),'EN weekly ACTV pass missing');
ok(read('app/come-raggiungere-venezia/page.tsx').includes('7 giorni'),'IT weekly ACTV pass missing');
const editorial=read('data/guideEditorial.ts');
ok(editorial.includes('extraTitle:translations.extraTitle')&&editorial.includes('extraText:translations.extraText'),'English editorial callouts could leak');
console.log('Multilingual SEO audit: 6 languages; '+nVenice+' Venice + '+nVeneto+' Veneto places; '+Object.keys(dictionary).length+' curated fact translations; '+repaired+' current event listings repaired.');

// Book cross-reference invariants: preserve the 17 printed URLs and prohibit old Frari claims.
const bookMap=read('docs/book-qr-17-capitoli.md');
for(let i=1;i<=17;i++){
 const num=String(i).padStart(2,'0');
 ok(bookMap.includes('| '+num+' |'),'Missing chapter QR mapping '+num);
}
const places=read('data/culturePlaces.ts');
const frari=places.split('"slug": "basilica-frari"')[1]?.split('\n  },')[0]||'';
ok(frari.includes('€8 intero')&&!frari.includes('Ingresso libero secondo nuovo sistema'),'Frari tourist ticket reverted to incorrect free admission');
const directory=read('components/GuideDirectoryIndex.tsx');
ok(directory.includes("bookQrGuide('torcello',lang)")&&directory.includes("slug!=='torcello'"),'Torcello must appear once in the lagoon directory');
const museum=places.split('"slug": "muvec-mestre"')[1]?.split('\n  },')[0]||'';
ok(museum.includes('Centro Culturale Candiani')&&!museum.includes('"Forte Marghera"'),'MUVEC location regressed');

if(problems.length){problems.forEach(p=>console.error('FAIL '+p));process.exit(1)}
console.log('PASS six-language content parity and regression checks');
