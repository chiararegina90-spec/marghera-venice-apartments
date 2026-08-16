import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WeChatCard from '@/components/WeChatCard';

export const metadata: Metadata = {
  title: '威尼斯附近公寓与免费私人停车',
  description:
    'Rossi Apartment 与 Dimora Castelli 位于马尔盖拉，前往威尼斯方便，提供免费私人停车位，适合家庭、朋友及携宠旅客。',
  alternates: {
    canonical: '/zh',
    languages: {
      'it-IT': '/',
      'en-GB': '/en',
      'de-DE': '/de',
      'fr-FR': '/fr',
      'es-ES': '/es',
      'zh-CN': '/zh',
      'x-default': '/',
    },
  },
  openGraph: {
    title: 'Marghera Venice Apartments｜您的威尼斯之家',
    description:
      '住在马尔盖拉，轻松前往威尼斯：两套舒适公寓、免费私人停车位与全天候交通连接。',
    url: '/zh',
    locale: 'zh_CN',
    images: ['/images/home-rialto-vincenzo-landino.webp'],
  },
twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};

const cards = [
  [
    'Rossi Apartment',
    '最多 7 位客人 · 适合家庭和朋友团体',
    '/images/rossi-card.webp',
    '/zh/apartments/rossi-apartment',
  ],
  [
    'Dimora Castelli',
    '最多 5 位客人 · 温馨、安静、舒适',
    '/images/castelli-card.webp',
    '/zh/apartments/dimora-castelli',
  ],
] as const;

export default function Home() {
  return (
    <>
      <Header lang="zh" />
      <main>
        <section className="relative min-h-[88vh] overflow-hidden pt-20">
          <Image
            src="/images/home-rialto-vincenzo-landino.webp"
            alt="威尼斯里亚托桥与大运河"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="hero-overlay absolute inset-0" />

          <div className="relative mx-auto flex min-h-[calc(88vh-5rem)] max-w-7xl items-center px-5 py-20 lg:px-8">
            <div className="max-w-4xl text-white">
              <p className="text-xs font-black uppercase tracking-[.25em] text-gold">
                Marghera · Venezia
              </p>
              <h1 className="mt-5 break-words font-serif text-5xl leading-[1.02] sm:text-6xl md:text-8xl">
                威尼斯，只是旅程的开始。
              </h1>
              <p className="mt-7 max-w-2xl text-xl text-white/85">
                两套位于马尔盖拉的舒适公寓，提供免费私人停车位，公共交通可便捷前往威尼斯，并贴心欢迎家庭与宠物。
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#case"
                  className="rounded-full bg-gold px-7 py-4 font-bold text-navy"
                >
                  查看公寓
                </a>
                <a
                  href="#direct-contact"
                  className="rounded-full border border-white/60 px-7 py-4 font-bold text-white"
                >
                  微信咨询
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-bold">
                <span>免费私人停车</span>
                <span>全天候交通连接</span>
                <span>宠物友好</span>
                <span>家庭友好</span>
              </div>
            </div>
          </div>
        </section>

        <section id="case" className="py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <p className="text-xs font-black uppercase tracking-[.22em] text-gold">
              我们的公寓
            </p>
            <h2 className="mt-3 break-words font-serif text-5xl text-navy">
              选择您在威尼斯附近的家
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-slate-600">
              既能轻松游览威尼斯，也能享受真实住宅的空间、厨房和停车便利。
            </p>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              {cards.map(([title, sub, img, href]) => (
                <article
                  key={title}
                  className="overflow-hidden rounded-[2rem] bg-white shadow-soft"
                >
                  <div className="relative h-[420px]">
                    <Image
                      src={img}
                      alt={`${title} 公寓实景`}
                      fill
                      sizes="(min-width:1024px) 50vw,100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-serif text-4xl text-navy">{title}</h3>
                    <p className="mt-2 text-slate-600">{sub}</p>
                    <Link
                      href={href}
                      className="mt-6 inline-block font-bold text-gold"
                    >
                      查看详情 →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-cream py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <h2 className="break-words font-serif text-5xl text-navy">
              从这里开始规划威尼斯之旅
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                ['探索威尼斯', '景点、岛屿、亲子与实用建议', '/zh/discover-venice'],
                ['探索威尼托', '帕多瓦、维罗纳、普罗塞克丘陵与多洛米蒂', '/zh/discover-veneto'],
                ['如何前往威尼斯', '公交、火车与机场交通信息', '/zh/getting-to-venice'],
                ['旅行指南', '15 个值得探索的目的地', '/zh/guide'],
              ].map(([title, description, href]) => (
                <Link
                  href={href}
                  key={href}
                  className="rounded-3xl bg-white p-7 shadow-soft"
                >
                  <h3 className="font-serif text-3xl text-navy">{title}</h3>
                  <p className="mt-3 text-slate-600">{description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="direct-contact" className="bg-navy py-20 text-white">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <p className="text-xs font-black uppercase tracking-[.22em] text-gold">
              微信联系
            </p>
            <h2 className="mt-3 break-words font-serif text-5xl">
              告诉我们您的旅行计划
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-white/75">
              发送入住日期、人数和您感兴趣的公寓，我们会亲自回复可订情况与住宿信息。
            </p>

            <div className="mt-8">
              <WeChatCard dark title="添加我们的微信" />
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </>
  );
}
