import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EditorialHero from '@/components/EditorialHero';
import WeChatCard from '@/components/WeChatCard';

const sections=[
 ['一座讲述土地故事的酒庄','Azienda Agricola I Campi 位于维罗纳省 Cellore d’Illasi，由酿酒师 Flavio Prà 经营。他是葡萄种植家族的第四代传人。酒庄以长期经验、研究与对土地的深厚联系为基础不断发展。'],
 ['“每一种酒都需要属于自己的土地”','针对不同葡萄品种，酒庄寻找最适宜的葡萄园，包括高海拔丘陵地块，希望酿造出具有鲜明个性、优雅并与产地紧密相连的葡萄酒。'],
 ['Val d’Illasi：葡萄园与 Lessini 山之间','酒庄位于 Valpolicella 东部的 Val d’Illasi。石材、木材、现代技术与酿酒专业知识在这里结合，围绕品质、葡萄酒的真实性与可持续性展开。']
] as const;
const tastings=[
 ['新视野','Lugana DOC、Pinot Grigio delle Venezie DOC 和 Soave DOC。'],
 ['沉浸 Valpolicella','Valpolicella Superiore DOC、Ripasso DOC 和 Amarone della Valpolicella DOCG。'],
 ['双重对比','Lugana DOC、Soave DOC、Valpolicella Superiore DOC 和 Ripasso DOC。'],
 ['完整路线','Lugana DOC、Soave DOC、Pinot Grigio delle Venezie DOC、Valpolicella Superiore DOC、Ripasso DOC 和 Amarone della Valpolicella DOCG。']
] as const;
const info=[
 ['地点','Azienda Agricola I Campi – Via delle Pezzole, 3, Località Allodola, Cellore d’Illasi (VR)'],
 ['时长','约 1 小时 30 分钟至 2 小时'],
 ['预约','至少提前 48 小时，并需确认可用时间'],
 ['团体','整个团体统一选择一种品鉴路线'],
 ['包含','葡萄酒品鉴、当地奶酪与冷切肉品，以及在适合时期安排的酒窖参观'],
 ['过敏或不耐受','请提前告知']
] as const;
export default function ICampiExperiencePageZh(){return <><Header lang="zh"/><main><article className="editorial-page">
 <EditorialHero image="/images/experience-i-campi-cover.webp" imageAlt="Val d’Illasi 葡萄园中的 Azienda Agricola I Campi 酒庄" crumbs={[{label:'首页',href:'/zh'},{label:'体验',href:'/zh/experiences'},{label:'I Campi'}]} eyebrow="葡萄酒体验 • Val d’Illasi" title="在 Valpolicella 与 Lessini 山之间的酒庄品鉴" subtitle={<>Azienda Agricola I Campi – Flavio Prà<br/><span className="mt-3 block text-white/80">走进维罗纳葡萄酒世界，在葡萄园、酒窖与威尼托最具代表性的法定产区之间展开一次品鉴之旅。</span></>} strongShade/>
 <section className="py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8"><div className="space-y-12">{sections.map(([title,text],i)=><section key={title} className="editorial-section-row grid grid-cols-[34px_1fr] gap-3 sm:grid-cols-[42px_1fr] sm:gap-4"><div className="font-serif text-5xl text-gold">{String(i+1).padStart(2,'0')}</div><div><h2 className="font-serif text-4xl text-navy">{title}</h2><p className="mt-4 text-lg leading-8 text-slate-600">{text}</p></div></section>)}</div></div></section>
 <section className="bg-cream py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8"><h2 className="font-serif text-4xl text-navy">获奖葡萄酒与备受认可的风格</h2><p className="mt-5 text-lg leading-8 text-slate-600">多年来，I Campi 获得多家意大利及国际指南与酒评家的认可。Soave Classico DOC “Campo Vulcano”、Valpolicella Ripasso Superiore DOC “Campo Ciotoli” 和 Amarone della Valpolicella DOCG “Campi Lunghi” 都曾获得重要评价与奖项。</p><p className="mt-5 rounded-2xl bg-white p-5 text-sm leading-6 text-slate-600"><strong>奖项对应特定酒款与年份，并不表示品鉴时一定包含相同年份。</strong></p></div></section>
 <section className="py-20"><div className="mx-auto max-w-5xl px-5 lg:px-8"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">葡萄酒品鉴</p><h2 className="mt-3 font-serif text-5xl text-navy">选择您的品鉴路线</h2><p className="mt-5 text-lg text-slate-600">共有四种方案可选，同一团体需统一选择一种品鉴路线：</p><div className="mt-8 grid gap-5 md:grid-cols-2">{tastings.map(([name,wines])=><div key={name} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-soft"><h3 className="font-serif text-3xl text-navy">{name}</h3><p className="mt-3 leading-7 text-slate-600">{wines}</p></div>)}</div><p className="mt-8 rounded-[2rem] bg-cream p-7 text-lg leading-8 text-navy">品鉴包含当地奶酪与冷切肉品；视参观时期而定，也可能安排酒窖参观。</p></div></section>
 <section className="bg-navy py-20 text-white"><div className="mx-auto grid max-w-5xl gap-8 px-5 lg:grid-cols-2 lg:px-8"><div><p className="text-xs font-black uppercase tracking-[.2em] text-gold">Marghera Venice Apartments</p><h2 className="mt-3 font-serif text-5xl">为什么我们推荐</h2><p className="mt-5 text-lg leading-8 text-white/75">我们选择 I Campi，是因为这里的品鉴不仅是喝酒，更是一种真正认识当地土地与文化的方式。非常适合想在威尼斯之外探索另一面威尼托的旅客。</p><p className="mt-6 font-semibold text-gold">适合：情侣 • 朋友团体 • 葡萄酒爱好者 • 想探索威尼斯之外威尼托地区的旅客</p></div><aside className="rounded-[2rem] bg-white p-8 text-navy"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">我们的建议</p><p className="mt-4 text-lg leading-8">不知道该选哪一种路线？通过微信告诉我们您喜欢什么类型的葡萄酒，我们很乐意帮您了解不同方案，并与酒庄确认可用时间。</p><p className="mt-5 font-bold">需至少提前 48 小时预约。</p><div className="mt-7"><WeChatCard title="通过微信咨询此体验"/></div></aside></div></section>
 <section className="py-20"><div className="mx-auto max-w-5xl px-5 lg:px-8"><h2 className="font-serif text-5xl text-navy">实用信息</h2><div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">{info.map(([label,value],i)=><div key={label} className={`grid gap-2 p-5 sm:grid-cols-[190px_1fr] sm:p-6 ${i<info.length-1?'border-b border-slate-200':''}`}><strong className="text-navy">{label}</strong><span className="text-slate-600">{value}</span></div>)}</div><div className="mt-8 flex flex-wrap gap-3"><a href="https://www.icampi.it/" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full border border-navy px-6 py-3 font-bold text-navy">I Campi 官方网站 ↗</a><Link href="/zh/experiences" className="inline-flex rounded-full bg-gold px-6 py-3 font-bold text-navy">返回体验</Link></div></div></section>
 </article></main><Footer lang="zh"/></>}
