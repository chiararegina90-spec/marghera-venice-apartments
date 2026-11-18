import CultureVisitorNotices from '@/components/CultureVisitorNotices';
import JournalNoticeExpiry from '@/components/JournalNoticeExpiry';
import type {CultureLang} from '@/data/culturePlaces';
import {journalVisitorNotices} from '@/data/journalVisitorNotices';
import {cultureVisitorNoticesFor} from '@/data/cultureVisitorNotices';

export default function JournalVisitorNotices({slug,lang}:{slug:string;lang:CultureLang}){
 const notices=cultureVisitorNoticesFor(slug,undefined,undefined,journalVisitorNotices);
 if(!notices.length)return null;
 const lastDay=notices.map(n=>n.end||'9999-12-31').sort().at(-1)!;
 return <JournalNoticeExpiry lastDay={lastDay}><div className="mx-auto max-w-4xl px-5 lg:px-8"><CultureVisitorNotices placeSlug={slug} lang={lang} entries={journalVisitorNotices}/></div></JournalNoticeExpiry>;
}
