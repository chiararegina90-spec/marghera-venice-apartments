type Review = {
  name: string;
  date: string;
  text: string;
};

export default function ReviewSection({
  property,
  reviews,
}: {
  property: string;
  reviews: Review[];
}) {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Le parole degli ospiti</p>
          <h2 className="mt-3 font-serif text-5xl text-navy">Cosa dicono di {property}</h2>
          <p className="mt-5 text-lg text-slate-600">
            Esperienze reali di chi ha già soggiornato da noi. Gli estratti sono stati abbreviati solo per facilitarne la lettura.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review) => (
            <article key={`${review.name}-${review.date}`} className="flex h-full flex-col rounded-[2rem] bg-white p-7 shadow-soft">
              <div className="text-lg tracking-[.12em] text-gold" aria-label="5 stelle">★★★★★</div>
              <blockquote className="mt-5 flex-1 text-[17px] leading-7 text-slate-600">
                “{review.text}”
              </blockquote>
              <footer className="mt-6 border-t border-slate-100 pt-5">
                <p className="font-bold text-navy">{review.name}</p>
                <p className="mt-1 text-sm text-slate-500">{review.date} · Recensione pubblicata su Airbnb</p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
