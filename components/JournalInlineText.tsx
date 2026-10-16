import Link from 'next/link';
import type {ReactNode} from 'react';
import type {JournalInlineLink} from '@/components/LocalizedRich';

/** Only link explicitly approved phrases; leave other article text unchanged. */
export default function JournalInlineText({text,section,links}:{text:string;section:number;links?:JournalInlineLink[]}){
 if(!links?.length)return <>{text}</>;
 const matches=links
  .filter(([index,label,href])=>index===section && label.length>0 && href.startsWith('/'))
  .map(([,label,href])=>({label,href,at:text.indexOf(label)}))
  .filter(item=>item.at>=0)
  .sort((a,b)=>a.at-b.at);
 if(!matches.length)return <>{text}</>;
 const parts:ReactNode[]=[];
 let cursor=0;
 for(const item of matches){
  if(item.at<cursor)continue;
  if(item.at>cursor)parts.push(text.slice(cursor,item.at));
  parts.push(<Link key={item.href} href={item.href} className="font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-gold focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">{item.label}</Link>);
  cursor=item.at+item.label.length;
 }
 if(cursor<text.length)parts.push(text.slice(cursor));
 return <>{parts}</>;
}
