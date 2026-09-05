import {NextResponse} from 'next/server';

export const runtime='nodejs';

const badWords=[' map','map of','coat of arms','logo','flag','floor plan','plan of','diagram','drawing','engraving','etching','poster','icon','locator','location map','svg','seal of'];
function cleanHtml(value:string|undefined){return (value||'').replace(/<[^>]*>/g,' ').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/\s+/g,' ').trim();}

export async function GET(request:Request){
  const {searchParams}=new URL(request.url);
  const query=(searchParams.get('q')||'').trim().slice(0,120);
  if(!query) return NextResponse.json({error:'missing query'},{status:400});
  const api=new URL('https://commons.wikimedia.org/w/api.php');
  api.searchParams.set('action','query');
  api.searchParams.set('format','json');
  api.searchParams.set('origin','*');
  api.searchParams.set('generator','search');
  api.searchParams.set('gsrsearch',query);
  api.searchParams.set('gsrnamespace','6');
  api.searchParams.set('gsrlimit','12');
  api.searchParams.set('prop','imageinfo');
  api.searchParams.set('iiprop','url|mime|size|extmetadata');
  api.searchParams.set('iiurlwidth','1400');
  try{
    const res=await fetch(api,{headers:{'User-Agent':'MargheraVeniceApartments/1.0 (https://www.margheraveniceapartments.com)'},next:{revalidate:60*60*24*30}});
    if(!res.ok) throw new Error(`Commons ${res.status}`);
    const data=await res.json();
    const pages=Object.values((data?.query?.pages||{}) as Record<string,any>) as any[];
    const candidates=pages.map((p:any)=>({title:String(p.title||''),info:p.imageinfo?.[0]})).filter((x:any)=>x.info&&['image/jpeg','image/png','image/webp'].includes(x.info.mime)&&x.info.width>=700);
    const ranked=candidates.sort((a:any,b:any)=>{
      const at=a.title.toLowerCase(),bt=b.title.toLowerCase();
      const abad=badWords.some(w=>at.includes(w))?1:0,bad=badWords.some(w=>bt.includes(w))?1:0;
      if(abad!==bad) return abad-bad;
      const ar=a.info.width/a.info.height,br=b.info.width/b.info.height;
      const al=Math.abs(ar-1.5),bl=Math.abs(br-1.5);
      if(Math.abs(al-bl)>.15) return al-bl;
      return (b.info.width*b.info.height)-(a.info.width*a.info.height);
    });
    const pick=ranked[0];
    if(!pick) return NextResponse.json({src:null},{headers:{'Cache-Control':'public, max-age=3600, s-maxage=86400'}});
    const meta=pick.info.extmetadata||{};
    const artist=cleanHtml(meta.Artist?.value||meta.Credit?.value)||'Wikimedia Commons contributor';
    const license=cleanHtml(meta.LicenseShortName?.value)||'Wikimedia Commons';
    const page=pick.info.descriptionurl||`https://commons.wikimedia.org/wiki/${encodeURIComponent(pick.title.replace(/ /g,'_'))}`;
    return NextResponse.json({src:pick.info.thumburl||pick.info.url,page,artist,license,title:pick.title},{headers:{'Cache-Control':'public, max-age=86400, s-maxage=2592000, stale-while-revalidate=604800'}});
  }catch(error){
    console.error('commons-image',error);
    return NextResponse.json({src:null},{headers:{'Cache-Control':'public, max-age=900, s-maxage=3600'}});
  }
}
