import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const walk=(dir)=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>{
  const p=path.join(dir,e.name);
  if(e.name==='node_modules'||e.name==='.next'||e.name==='.git') return [];
  return e.isDirectory()?walk(p):[p];
});
const files=walk(root);
const source=files.filter(f=>/\.(?:ts|tsx|js|jsx|mjs)$/.test(f));
const pages=files.filter(f=>/[/\\]app[/\\].*[/\\]page\.tsx$/.test(f));
const rel=f=>path.relative(root,f).replaceAll('\\','/');
const failures=[];
const warnings=[];

const textCache=new Map();
const read=f=>{if(!textCache.has(f)) textCache.set(f,fs.readFileSync(f,'utf8')); return textCache.get(f)};

let literalHrefs=0, blankTargets=0;
for(const f of source){
  const t=read(f);
  for(const m of t.matchAll(/href\s*=\s*["']([^"']*)["']/g)){
    literalHrefs++;
    const href=m[1];
    if(href===''||href==='#') failures.push(`${rel(f)}: empty/useless href ${JSON.stringify(href)}`);
  }
  for(const m of t.matchAll(/<a\b[^>]*target=["']_blank["'][^>]*>/g)){
    blankTargets++;
    const tag=m[0];
    if(!/rel=["'][^"']*noopener[^"']*noreferrer[^"']*["']/.test(tag) && !/rel=["'][^"']*noreferrer[^"']*noopener[^"']*["']/.test(tag)) failures.push(`${rel(f)}: target=_blank without noopener+noreferrer`);
  }
}

let localImages=0;
for(const f of source){
  const t=read(f);
  for(const m of t.matchAll(/["'](\/images\/[^"'?#]+)["']/g)){
    localImages++;
    const asset=path.join(root,'public',m[1]);
    if(!fs.existsSync(asset)) failures.push(`${rel(f)}: missing local image ${m[1]}`);
  }
}

for(const f of source){
  if(rel(f)==='scripts/site-audit.mjs') continue;
  if(read(f).includes('2026-01-01')) failures.push(`${rel(f)}: forbidden fake fallback date 2026-01-01`);
}

const social=read(path.join(root,'components','SocialLinks.tsx'));
if(!social.includes("showWhatsApp && lang!=='zh'")) failures.push('SocialLinks.tsx: WhatsApp is not defensively disabled for zh');
const gondola=read(path.join(root,'components','GondolaTourGuide.tsx'));
if(!gondola.includes("lang==='zh'?<div className=\"mt-5\"><WeChatCard")) failures.push('GondolaTourGuide.tsx: missing zh WeChat CTA');
const icampi=read(path.join(root,'components','ICampiExperiencePage.tsx'));
if(!icampi.includes("lang==='zh'?<div className=\"mt-7\"><WeChatCard")) failures.push('ICampiExperiencePage.tsx: missing zh WeChat CTA');
if(!/lang===['"]zh['"][\s\S]*WeChatCard/.test(gondola)) failures.push('GondolaTourGuide.tsx: zh contact does not visibly switch to WeChat');

const sitemap=read(path.join(root,'app','sitemap.ts'));
if(/guest/i.test(sitemap)) failures.push('app/sitemap.ts: guest/private route reference found');
const robots=read(path.join(root,'app','robots.ts'));
if(!robots.includes("disallow: ['/guest', '/guest-content']")) failures.push('app/robots.ts: guest exclusions changed or missing');
if(!robots.includes('sitemap:')) failures.push('app/robots.ts: sitemap declaration missing');

// Welcome Book/private-area regression checks.
const guestHtml=files.filter(f=>/^public\/guest-content\/(rossi|dimora-castelli)\/(it|en|de|fr|es|zh)\.html$/.test(rel(f)));
if(guestHtml.length!==12) failures.push(`Welcome Book: expected 12 localized HTML files, found ${guestHtml.length}`);
for(const f of guestHtml){
  const r=rel(f),t=read(f);
  const m=r.match(/\/(it|en|de|fr|es|zh)\.html$/);
  const lang=m?.[1];
  if(!t.includes('noindex,nofollow,noarchive,nosnippet,noimageindex')) failures.push(`${r}: missing private noindex robots directive`);
  if(lang&&!t.includes(`<html lang="${lang}">`)) failures.push(`${r}: html lang does not match file locale`);
  if(!t.includes('/guest-content/assets/welcome.js')) failures.push(`${r}: shared Welcome Book JS missing`);
  if(lang&&lang!=='it'&&!t.includes(`www.margheraveniceapartments.com/${lang}/`)) warnings.push(`${r}: no localized public-site link found`);
}
const welcomeJs=read(path.join(root,'public','guest-content','assets','welcome.js'));
if(!welcomeJs.includes('/images/wechat-qr-only.png')||!welcomeJs.includes('a[href^="https://wa.me/"]')) failures.push('Welcome Book JS: Chinese WhatsApp-to-WeChat QR override missing');
const proxy=read(path.join(root,'proxy.ts'));
if(!proxy.includes("path==='/guest-content/assets/welcome.css'||path==='/guest-content/assets/welcome.js'")) failures.push('proxy.ts: shared Welcome Book CSS/JS allowlist incomplete');
if(!proxy.includes('await authenticated(request,apartment)')) failures.push('proxy.ts: guest authentication check missing');
if(!proxy.includes("X-Robots-Tag','noindex, nofollow, noarchive, nosnippet, noimageindex")) failures.push('proxy.ts: private X-Robots-Tag missing');

// Public SEO/content source must not point visitors into the authenticated guest area.
const publicSource=source.filter(f=>{
  const r=rel(f);
  return !r.startsWith('app/guest/')&&!r.startsWith('components/Guest')&&r!=='proxy.ts'&&!r.startsWith('lib/guest')&&!r.startsWith('scripts/')&&!r.startsWith('public/guest-content/');
});
for(const f of publicSource){
  if(/href\s*=\s*["']\/guest\//.test(read(f))) failures.push(`${rel(f)}: public source links directly into private /guest area`);
}

const langs=['it','en','de','fr','es','zh'];
const routeSet=new Set(pages.map(f=>rel(f).replace(/^app\//,'').replace(/\/page\.tsx$/,'').replace(/^page\.tsx$/,'')));
const dirSlugs=(base)=>fs.existsSync(base)?fs.readdirSync(base,{withFileTypes:true}).filter(e=>e.isDirectory()&&!e.name.startsWith('[')).map(e=>e.name):[];
const localizedGuideAliases={
 'musei-venezia':{en:'venice-museums',de:'museen-venedig',fr:'musees-venise',es:'museos-venecia',zh:'venice-museums'},
 'veneto':{en:'veneto',de:'venetien',fr:'venetie',es:'veneto',zh:'veneto'}
};
for(const section of ['guide','journal']){
  const itSlugs=dirSlugs(path.join(root,'app',section));
  for(const slug of itSlugs){
    for(const lang of langs.slice(1)){
      const localizedSlug=section==='guide'&&localizedGuideAliases[slug]?.[lang]||slug;
      const route=`${lang}/${section}/${localizedSlug}`;
      if(!routeSet.has(route)) warnings.push(`Locale parity: ${route} has no direct page.tsx counterpart`);
    }
  }
}

const publicPages=pages.filter(f=>!/[\\/]app[\\/](?:[a-z]{2}[\\/])?guest(?:[\\/]|$)/.test(f) && !/[\\/]guest-content[\\/]/.test(f));
const privatePages=pages.length-publicPages.length;
console.log(`Site audit: ${pages.length} page routes (${publicPages.length} public, ${privatePages} private/guest)`);
console.log(`Checked ${literalHrefs} literal hrefs, ${blankTargets} target=_blank links, ${localImages} local image references, ${guestHtml.length} Welcome Book HTML files.`);
if(warnings.length){
  console.log(`Warnings (${warnings.length}):`);
  for(const w of warnings.slice(0,40)) console.log(`  - ${w}`);
  if(warnings.length>40) console.log(`  ... ${warnings.length-40} more`);
}
if(failures.length){
  console.error(`FAIL (${failures.length}):`);
  for(const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}
console.log('PASS: no blocking static audit errors.');
