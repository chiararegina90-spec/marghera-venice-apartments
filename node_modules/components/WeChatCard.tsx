import Image from 'next/image';

export default function WeChatCard({
  dark = false,
  title = '添加我们的微信',
}: {
  dark?: boolean;
  title?: string;
}) {
  return (
    <div
      className={`mx-auto max-w-sm rounded-[2rem] border p-6 text-center sm:p-7 ${
        dark
          ? 'border-gold/60 bg-navy text-white shadow-soft'
          : 'border-gold/40 bg-white text-navy shadow-soft'
      }`}
    >
      <p className="text-xs font-black uppercase tracking-[.22em] text-gold">
        微信联系
      </p>

      <h3 className="mt-2 font-serif text-3xl leading-tight">{title}</h3>

      <div className="mx-auto mt-6 w-fit rounded-3xl border border-gold/50 bg-white p-3 sm:p-4">
        <Image
          src="/images/wechat-qr-only.png"
          alt="Marghera Venice Apartments 微信二维码"
          width={320}
          height={320}
          className="h-auto w-[230px] max-w-full"
        />
      </div>

      <p className={`mt-5 text-sm ${dark ? 'text-white/80' : 'text-slate-600'}`}>
        扫描二维码添加好友
      </p>

      <p className={`mt-2 text-sm ${dark ? 'text-white/70' : 'text-slate-500'}`}>
        微信号：<strong className={dark ? 'text-white' : 'text-navy'}>MargheraVenice</strong>
      </p>
    </div>
  );
}
