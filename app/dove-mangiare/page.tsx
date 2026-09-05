import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dove mangiare a Marghera e Venezia | Marghera Venice Apartments",
  description:
    "Una piccola guida personale ai nostri indirizzi preferiti tra Marghera e Venezia: ristoranti, osterie, bacari, pizza, pasticcerie, gelaterie e delivery.",
};

type Venue = {
  name: string;
  type: string;
  area: string;
  address: string;
  description: string;
  try?: string;
  phone?: string;
  website?: string;
  mapsQuery: string;
};

type Category = {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  venues: Venue[];
};

const margheraCategories: Category[] = [
  {
    id: "marghera-osterie",
    title: "Ristoranti & Osterie",
    subtitle: "Cucina veneziana, pesce e locali di quartiere.",
    emoji: "🍷",
    venues: [
      {
        name: "Osteria Al Diplomatico",
        type: "Osteria · cicchetti · cucina veneziana",
        area: "Marghera",
        address: "Via Domenico Giuriati, 11",
        description: "Cicchetti, piatti di pesce e cucina veneziana in un ambiente informale e molto locale.",
        try: "Cicchetti e piatti di pesce",
        phone: "+39 338 870 6955",
        website: "https://www.osterialdiplomatico.com/",
        mapsQuery: "Osteria Al Diplomatico Marghera",
      },
      {
        name: "Osteria 0.75",
        type: "Osteria · vino · cucina contemporanea",
        area: "Marghera",
        address: "Via Domenico Giuriati, 11",
        description: "Tradizione veneziana riletta in chiave contemporanea, con una buona attenzione ai vini.",
        try: "Piatti veneziani e calice di vino",
        phone: "+39 328 480 8422",
        website: "https://www.osteria075.com/",
        mapsQuery: "Osteria 0.75 Marghera",
      },
      {
        name: "Il Giardinetto",
        type: "Ristorante · pizzeria",
        area: "Marghera",
        address: "Marghera, Venezia",
        description: "Ristorante e pizzeria con un piacevole giardino sul retro, particolarmente bello nelle serate estive.",
        try: "Pizza e cena in giardino",
        phone: "+39 041 921563",
        website: "https://www.ilgiardinettomarghera.it/",
        mapsQuery: "Il Giardinetto Marghera",
      },
      {
        name: "Osteria Trattoria La Campana",
        type: "Osteria veneziana",
        area: "Marghera",
        address: "Via Catene, 59/A",
        description: "Per assaggiare l'atmosfera della vera osteria veneziana. È il locale più antico di Marghera.",
        try: "Cicchetti e cucina da osteria",
        phone: "+39 334 342 5301",
        mapsQuery: "Osteria Trattoria La Campana Marghera",
      },
      {
        name: "Da Gigi Cucina e Pizzeria",
        type: "Ristorante · pizzeria",
        area: "Marghera",
        address: "Via della Rinascita, 81",
        description: "Una scelta versatile per famiglie e gruppi: pizze, primi, carne e pesce.",
        try: "Pizza, pesce e cucina italiana",
        phone: "+39 041 925793",
        website: "https://ristorantedagigimarghera.it/",
        mapsQuery: "Da Gigi Cucina e Pizzeria Marghera",
      },
      {
        name: "Cicchetteria Venexiana",
        type: "Pesce · cucina espressa",
        area: "Marghera",
        address: "Via Angelo Scarsellini, 28",
        description: "Gestione familiare, menu ristretto ma molto curato, piatti espressi, porzioni generose e pesce di eccellente qualità.",
        try: "Pesce e piatti del giorno",
        phone: "+39 041 303 0453",
        mapsQuery: "Cicchetteria Venexiana Marghera",
      },
    ],
  },
  {
    id: "marghera-pizza",
    title: "Pizza, Pub & Casual",
    subtitle: "Per una cena informale o qualcosa da condividere.",
    emoji: "🍕",
    venues: [
      {
        name: "Al Calesse",
        type: "Pizzeria · ristorante",
        area: "Marghera",
        address: "Via Cesare Beccaria, 24",
        description: "Una pizzeria molto apprezzata in zona, ideale per una cena semplice e rilassata.",
        try: "Pizza",
        phone: "+39 041 922570",
        mapsQuery: "Pizzeria Al Calesse Marghera",
      },
      {
        name: "84010 Pizzosteria",
        type: "Pizza · cucina napoletana",
        area: "Marghera",
        address: "Via Catene, 22",
        description: "Pizza e cucina campana in un locale informale. Uno dei nostri indirizzi preferiti quando abbiamo voglia di sapori napoletani.",
        try: "Pizza napoletana e cucina campana",
        phone: "+39 041 921966",
        website: "https://www.pizzosteria.it/",
        mapsQuery: "84010 Pizzosteria Marghera",
      },
      {
        name: "Marciano Pub",
        type: "Pub · hamburger · birre",
        area: "Marghera",
        address: "Via Cesare Rossarol, 7",
        description: "Pub informale e vivace, comodo per famiglie con ragazzi e gruppi di amici.",
        try: "Hamburger e birra",
        phone: "+39 041 309 1441",
        website: "https://marciano-pub-marghera.com/",
        mapsQuery: "Marciano Pub Marghera",
      },
      {
        name: "Pizzalonga Away",
        type: "Pizza · take away",
        area: "Marghera",
        address: "Piazza del Municipio, 20",
        description: "Comoda per una serata in appartamento senza cucinare. La pizza al metro è perfetta da condividere.",
        try: "Pizza al metro",
        phone: "+39 041 241 3578",
        website: "https://www.pizzalongaway.it/",
        mapsQuery: "Pizzalonga Away Marghera",
      },
    ],
  },
  {
    id: "marghera-pasticcerie",
    title: "Pasticcerie & Colazione",
    subtitle: "Per iniziare la giornata con calma prima di partire per Venezia.",
    emoji: "🥐",
    venues: [
      {
        name: "Pasticceria Vanin",
        type: "Pasticceria · caffetteria",
        area: "Marghera",
        address: "Piazza del Municipio, 16",
        description: "Pasticceria artigianale molto conosciuta in zona, perfetta per colazione, cappuccino, brioche e dolci della tradizione.",
        try: "Brioche, frittelle e pasticceria fresca",
        phone: "+39 041 923257",
        website: "https://pasticceriavanin.com/",
        mapsQuery: "Pasticceria Vanin Marghera",
      },
      {
        name: "Pasticceria Danieli",
        type: "Pasticceria · colazione",
        area: "Marghera",
        address: "Piazza del Mercato, 9",
        description: "Una pasticceria storica della zona, adatta a una colazione classica o a una pausa dolce.",
        try: "Paste, brioche e frittelle in stagione",
        phone: "+39 329 346 8923",
        mapsQuery: "Pasticceria Danieli Marghera",
      },
      {
        name: "Le Delizie di Dea",
        type: "Pasticceria · caffetteria",
        area: "Marghera",
        address: "Via Nicolò Tommaseo, 6",
        description: "Comoda per colazione, caffè e qualcosa di dolce o salato, con una proposta ampia tra pasticceria e snack.",
        try: "Cornetti, pasticceria e caffè",
        phone: "+39 041 312 1521",
        mapsQuery: "Le Delizie di Dea Marghera",
      },
    ],
  },
  {
    id: "marghera-gelato",
    title: "Gelaterie",
    subtitle: "Una pausa fresca senza dover andare fino a Venezia.",
    emoji: "🍦",
    venues: [
      {
        name: "Gelateria Eta Beta",
        type: "Gelateria",
        area: "Marghera",
        address: "Piazzale Guido e Bruno Parmesan",
        description: "Gelateria di quartiere molto conosciuta a Marghera, ideale per una passeggiata serale o con i bambini.",
        try: "Gelato artigianale",
        phone: "+39 041 937030",
        mapsQuery: "Gelateria Eta Beta Marghera",
      },
    ],
  },
];

const veniceCategories: Category[] = [
  {
    id: "venezia-ristoranti",
    title: "Ristoranti & Cene",
    subtitle: "Da una cena con vista a una trattoria veneziana più tradizionale.",
    emoji: "🍽️",
    venues: [
      {
        name: "Ristorante Algiubagiò",
        type: "Ristorante · terrazza sull'acqua",
        area: "Cannaregio · Fondamente Nove",
        address: "Fondamente Nove, Cannaregio",
        description: "Una terrazza eccezionale affacciata sulla laguna, perfetta per una cena più speciale.",
        try: "Cena in terrazza con vista laguna",
        website: "https://www.algiubagio.net/",
        mapsQuery: "Algiubagio Venezia Fondamente Nove",
      },
      {
        name: "Osteria Al Timon",
        type: "Osteria · carne · pesce",
        area: "Cannaregio · Ormesini",
        address: "Fondamenta dei Ormesini, Cannaregio",
        description: "Un indirizzo molto veneziano diviso tra Timon Carne e Timon Pesce, in due locali vicini.",
        try: "Carne, pesce, cicchetti e vino",
        website: "https://www.altimon.it/",
        mapsQuery: "Osteria Al Timon Venezia",
      },
      {
        name: "Hard Rock Cafe Venice",
        type: "American · family friendly",
        area: "San Marco · Bacino Orseolo",
        address: "Bacino Orseolo, San Marco 1192",
        description: "Diverso dalla cucina veneziana, ma divertente per famiglie, ragazzi e appassionati del marchio.",
        try: "Burger e atmosfera Hard Rock",
        website: "https://cafe.hardrock.com/venice/it/",
        mapsQuery: "Hard Rock Cafe Venice",
      },
      {
        name: "Trattoria alla Madonna",
        type: "Trattoria veneziana · pesce",
        area: "San Polo · Rialto",
        address: "Calle della Madonna, San Polo",
        description: "Storica trattoria veneziana vicino a Rialto, indicata per piatti tradizionali e cucina di pesce.",
        try: "Pesce e cucina veneziana",
        mapsQuery: "Trattoria alla Madonna Venezia",
      },
      {
        name: "Paradiso Perduto",
        type: "Osteria · musica · cucina veneziana",
        area: "Cannaregio · Misericordia",
        address: "Fondamenta della Misericordia, Cannaregio",
        description: "Locale storico e vivace dove cibo, convivialità e musica fanno parte della stessa esperienza.",
        try: "Piatti veneziani e atmosfera",
        mapsQuery: "Paradiso Perduto Venezia",
      },
      {
        name: "Ristorante Lineadombra",
        type: "Ristorante · terrazza sul canale",
        area: "Dorsoduro · Zattere",
        address: "Dorsoduro, zona Zattere",
        description: "Una proposta più raffinata con una splendida terrazza sull'acqua, ideale per una cena speciale.",
        try: "Cena di pesce con vista",
        mapsQuery: "Ristorante Lineadombra Venezia",
      },
      {
        name: "Ostaria Al Vecio Pozzo",
        type: "Osteria · cucina veneziana",
        area: "Santa Croce",
        address: "Santa Croce, Venezia",
        description: "Una buona soluzione per una cena veneziana in una zona meno frenetica rispetto a San Marco.",
        try: "Cucina veneziana e italiana",
        mapsQuery: "Ostaria Al Vecio Pozzo Venezia",
      },
      {
        name: "Al Profeta",
        type: "Ristorante · pizzeria · giardino",
        area: "Dorsoduro · San Barnaba",
        address: "Calle Lunga San Barnaba, Dorsoduro",
        description: "Pizza e cucina italiana in una zona piacevole di Dorsoduro, con un bel giardino interno.",
        try: "Pizza e cena in giardino",
        website: "https://alprofeta.it/",
        mapsQuery: "Al Profeta Venezia",
      },
    ],
  },
  {
    id: "venezia-bacari",
    title: "Bacari, Cicchetti & Ombre",
    subtitle: "Il modo più veneziano di fare una pausa: un'ombra, qualche cicchetto e poi si riparte.",
    emoji: "🥂",
    venues: [
      {
        name: "All'Arco",
        type: "Bacaro · cicchetti",
        area: "San Polo · Rialto",
        address: "Zona Rialto, San Polo",
        description: "Piccolo, essenziale e molto conosciuto per i cicchetti. Perfetto per una sosta al bancone.",
        try: "Cicchetti di pesce e ombra di vino",
        mapsQuery: "All'Arco Venezia",
      },
      {
        name: "Al Volto",
        type: "Osteria · vino · cicchetti",
        area: "San Marco · Rialto",
        address: "Calle Cavalli, zona Rialto",
        description: "Una storica osteria veneziana dove fermarsi per cicchetti, vino e cucina tradizionale.",
        try: "Cicchetti e vino",
        mapsQuery: "Osteria Al Volto Venezia",
      },
      {
        name: "Ca' d'Oro Alla Vedova",
        type: "Bacaro · osteria storica",
        area: "Cannaregio · Ca' d'Oro",
        address: "Ramo Ca' d'Oro, Cannaregio",
        description: "Un classico veneziano. Anche se mangiate altrove, vale una sosta per le sue famosissime polpette.",
        try: "Le polpette della Vedova",
        mapsQuery: "Ca d'Oro Alla Vedova Venezia",
      },
      {
        name: "Cantina Do Spade",
        type: "Bacaro · osteria",
        area: "San Polo · Rialto",
        address: "Calle Do Spade, San Polo",
        description: "Tra le calli di Rialto, perfetta per combinare cicchetti, vino e piatti veneziani.",
        try: "Cicchetti, baccalà e ombra",
        website: "https://www.cantinadospade.com/",
        mapsQuery: "Cantina Do Spade Venezia",
      },
      {
        name: "Al Mercà",
        type: "Bacaro · cicchetti",
        area: "San Polo · Mercato di Rialto",
        address: "Campo Bella Vienna, Rialto",
        description: "Piccolissimo e senza fronzoli: bicchiere, paninetto o cicchetto in piedi vicino al Mercato di Rialto.",
        try: "Paninetti, cicchetti e vino",
        mapsQuery: "Al Merca Venezia Rialto",
      },
    ],
  },
  {
    id: "venezia-spuntini",
    title: "Sapori veneziani da provare",
    subtitle: "Tre soste veloci che valgono quasi quanto una visita turistica.",
    emoji: "🥪",
    venues: [
      {
        name: "Bar Tiziano",
        type: "Bar · tramezzini",
        area: "Cannaregio · San Giovanni Grisostomo",
        address: "Salizada San Giovanni Grisostomo, 5747",
        description: "Un bar semplice e molto conosciuto per i tramezzini abbondantemente farciti.",
        try: "I tramezzini",
        mapsQuery: "Bar Tiziano Venezia San Giovanni Grisostomo",
      },
      {
        name: "Rosticceria Rialto · ex Gislon",
        type: "Rosticceria · cucina pronta",
        area: "San Marco · Rialto",
        address: "Calle de la Bissa, 5424/A",
        description: "Una vera istituzione vicino a Rialto. Oltre ai fritti trovate primi e secondi e potete anche mangiare seduti.",
        try: "Mozzarella in carrozza con acciuga",
        mapsQuery: "Rosticceria Rialto ex Gislon Venezia",
      },
      {
        name: "Aciugheta",
        type: "Pizzeria · cicchetti",
        area: "Castello · San Marco",
        address: "Campo SS. Filippo e Giacomo, 4359",
        description: "A pochi minuti da Piazza San Marco, è una sosta comoda per uno spuntino veloce.",
        try: "Pizzette con l'acciuga",
        website: "https://www.aciugheta.com/",
        mapsQuery: "Aciugheta Venezia",
      },
    ],
  },
  {
    id: "venezia-pasticcerie",
    title: "Pasticcerie & Colazione",
    subtitle: "Per una colazione veneziana o una pausa dolce tra una visita e l'altra.",
    emoji: "🥐",
    venues: [
      {
        name: "Rosa Salva · San Salvador",
        type: "Pasticceria storica · caffetteria",
        area: "San Marco · San Salvador",
        address: "Campo San Salvador, 4805",
        description: "Una delle pasticcerie storiche di Venezia, centralissima tra Rialto e San Marco.",
        try: "Pasticceria veneziana e frittelle in Carnevale",
        phone: "+39 041 5226808",
        website: "https://rosasalva.it/",
        mapsQuery: "Rosa Salva San Salvador Venezia",
      },
      {
        name: "Pasticceria Ponte delle Paste",
        type: "Pasticceria · caffetteria",
        area: "Castello",
        address: "Calle del Pistor, 5991",
        description: "Una pasticceria raccolta e piacevole, ideale per una colazione o un dolce durante una passeggiata.",
        try: "Paste, brioche e caffè",
        phone: "+39 041 2410173",
        mapsQuery: "Pasticceria Ponte delle Paste Venezia",
      },
      {
        name: "Pasticceria Tonolo",
        type: "Pasticceria storica",
        area: "Dorsoduro · San Pantalon",
        address: "Calle San Pantalon, 3764",
        description: "Un grande classico veneziano, amatissimo per paste, dolci tradizionali e frittelle in stagione.",
        try: "Frittelle, paste e dolci tradizionali",
        phone: "+39 041 5237209",
        mapsQuery: "Pasticceria Tonolo Venezia",
      },
      {
        name: "Pasticceria Marchini Time",
        type: "Pasticceria · caffetteria",
        area: "San Marco · Campo San Luca",
        address: "Campo San Luca, 4589",
        description: "Centralissima e comoda durante una giornata tra Rialto e San Marco, con dolce e salato.",
        try: "Pasticceria artigianale e colazione",
        phone: "+39 041 2413087",
        mapsQuery: "Pasticceria Marchini Time Venezia",
      },
    ],
  },
  {
    id: "venezia-gelato",
    title: "Gelaterie",
    subtitle: "Dai grandi classici veneziani ai gusti più creativi.",
    emoji: "🍦",
    venues: [
      {
        name: "Gelateria Nico",
        type: "Gelateria storica",
        area: "Dorsoduro · Zattere",
        address: "Fondamenta Zattere al Ponte Longo",
        description: "Una delle gelaterie più iconiche di Venezia, con terrazza sul Canale della Giudecca.",
        try: "Il famoso Gianduiotto",
        mapsQuery: "Gelateria Nico Zattere Venezia",
      },
      {
        name: "Suso Gelatoteca",
        type: "Gelateria · gusti creativi",
        area: "Centro storico",
        address: "Venezia · più sedi in centro storico",
        description: "Molto conosciuta per gusti ricchi e originali, con diverse sedi nel centro storico.",
        try: "Gusti stagionali e specialità della casa",
        website: "https://suso.gelatoteca.it/",
        mapsQuery: "Suso Gelatoteca Venezia",
      },
      {
        name: "Gelateria Il Pinguino",
        type: "Gelateria",
        area: "Castello · Arsenale",
        address: "Castello, zona Arsenale",
        description: "Una gelateria più defilata, comoda se state visitando Castello, l'Arsenale o la Biennale.",
        try: "Gelato artigianale e gusti stagionali",
        mapsQuery: "Gelateria Il Pinguino Venezia",
      },
      {
        name: "La Mela Verde",
        type: "Gelateria artigianale",
        area: "Castello",
        address: "Castello, Venezia",
        description: "Piccola gelateria artigianale a Castello, ideale per allontanarsi un po' dalle soste più turistiche.",
        try: "Gelato artigianale",
        mapsQuery: "Gelateria La Mela Verde Venezia",
      },
    ],
  },
  {
    id: "venezia-aperitivo",
    title: "Aperitivo & Cocktail",
    subtitle: "Per uno spritz con vista, un cocktail o una birra dopo una giornata a piedi.",
    emoji: "🍹",
    venues: [
      {
        name: "Terrazza Aperol",
        type: "Aperitivo · cocktail",
        area: "San Marco · Campo Santo Stefano",
        address: "Campo Santo Stefano, Venezia",
        description: "La terrazza ufficiale dedicata al mondo Aperol, perfetta per uno spritz e una pausa.",
        try: "Aperol Spritz",
        website: "https://terrazza.aperol.com/",
        mapsQuery: "Terrazza Aperol Venezia Campo Santo Stefano",
      },
      {
        name: "Il Mercante",
        type: "Cocktail bar",
        area: "San Polo · Frari",
        address: "Zona Frari, San Polo",
        description: "Cocktail bar raccolto e curato, per chi cerca drink più creativi del classico aperitivo.",
        try: "Cocktail signature",
        mapsQuery: "Il Mercante Venezia cocktail bar",
      },
      {
        name: "Il Santo Bevitore",
        type: "Pub · birre",
        area: "Cannaregio",
        address: "Cannaregio, Venezia",
        description: "Una sosta informale per chi preferisce una buona birra allo spritz.",
        try: "Birre",
        mapsQuery: "Il Santo Bevitore Venezia",
      },
      {
        name: "Ombra del Leone",
        type: "Wine bar · aperitivo",
        area: "San Marco",
        address: "Area San Marco, Venezia",
        description: "Una terrazza con vista sul Bacino di San Marco, indicata per un aperitivo panoramico.",
        try: "Spritz o calice di vino con vista",
        mapsQuery: "Ombra del Leone Venezia",
      },
    ],
  },
];

function mapsUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function VenueCard({ venue }: { venue: Venue }) {
  return (
    <article className="overflow-hidden rounded-[28px] border border-[#ddd5c8] bg-white shadow-[0_10px_35px_rgba(22,42,62,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(22,42,62,0.12)]">
      <div className="relative flex h-44 items-end overflow-hidden bg-[linear-gradient(135deg,#e9e0d3_0%,#f8f4ed_45%,#d9c59d_100%)] p-5">
        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#17324a] shadow-sm">📍 {venue.area}</span>
        <span className="absolute right-4 top-4 rounded-full border border-white/70 bg-white/70 px-3 py-1 text-[11px] font-medium text-[#6b6258] backdrop-blur">foto in arrivo</span>
      </div>

      <div className="p-6">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#b28a43]">{venue.type}</p>
        <h3 className="font-serif text-2xl font-semibold leading-tight text-[#17324a]">{venue.name}</h3>
        <p className="mt-3 text-[15px] leading-7 text-[#56616a]">{venue.description}</p>

        {venue.try && (
          <div className="mt-4 rounded-2xl bg-[#f7f2e9] px-4 py-3">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#9a7536]">Da provare</span>
            <p className="mt-1 text-sm font-medium text-[#243b50]">{venue.try}</p>
          </div>
        )}

        <div className="mt-5 space-y-2 border-t border-[#eee7dc] pt-4 text-sm text-[#4f5c66]">
          <p className="flex gap-2"><span>📍</span><span>{venue.address}</span></p>
          {venue.phone && (
            <p className="flex gap-2"><span>☎️</span><a className="hover:text-[#b28a43]" href={`tel:${venue.phone.replace(/\s/g, "")}`}>{venue.phone}</a></p>
          )}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <a href={mapsUrl(venue.mapsQuery)} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#17324a] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#244862]">Apri Maps ↗</a>
          {venue.website && (
            <a href={venue.website} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#c8a35e] px-4 py-2.5 text-sm font-semibold text-[#775c2d] transition hover:bg-[#f7f2e9]">Sito web ↗</a>
          )}
        </div>
      </div>
    </article>
  );
}

function CategoryHeading({ category }: { category: Category }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f2e8d6] text-xl md:h-12 md:w-12 md:text-2xl">{category.emoji}</div>
      <div className="min-w-0 flex-1">
        <h2 className="font-serif text-[1.65rem] font-semibold leading-tight text-[#17324a] md:text-4xl">{category.title}</h2>
        <p className="mt-1.5 max-w-2xl text-sm leading-6 text-[#68727a] md:mt-2 md:text-base md:leading-7">{category.subtitle}</p>
      </div>
    </div>
  );
}

function CategoryBlock({ category }: { category: Category }) {
  return (
    <>
      {/* MOBILE: category accordion */}
      <details className="food-category group scroll-mt-28 border-b border-[#e6ded2] md:hidden">
        <summary className="flex cursor-pointer list-none items-start gap-4 py-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f2e8d6] text-xl">{category.emoji}</div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-serif text-[1.65rem] font-semibold leading-tight text-[#17324a]">{category.title}</h2>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#ddd5c8] bg-white text-lg text-[#8a682f] transition duration-200 group-open:rotate-180" aria-hidden="true">⌄</span>
            </div>
            <p className="mt-1.5 max-w-2xl text-sm leading-6 text-[#68727a]">{category.subtitle}</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-[#a47b34]">{category.venues.length} {category.venues.length === 1 ? "locale" : "locali"} · tocca per aprire</p>
          </div>
        </summary>

        <div className="pb-7">
          <div className="grid gap-5">
            {category.venues.map((venue) => <VenueCard key={venue.name} venue={venue} />)}
          </div>
        </div>
      </details>

      {/* DESKTOP/TABLET: normal section, always open */}
      <section id={category.id} className="hidden scroll-mt-28 py-10 md:block">
        <div className="mb-7">
          <CategoryHeading category={category} />
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {category.venues.map((venue) => <VenueCard key={venue.name} venue={venue} />)}
        </div>
      </section>
    </>
  );
}

export default function DoveMangiarePage() {
  return (
    <>
      <Header />
      <style>{`
        details.food-category > summary::-webkit-details-marker { display: none; }
      `}</style>
      <main className="bg-[#fbfaf7] text-[#17324a]">
        <section className="border-b border-[#e6ded2] bg-[#f4efe7]">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#b28a43]">Marghera Venice Apartments</p>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl font-semibold leading-tight md:text-6xl">Dove mangiare</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#58636d] md:text-xl">Non una classifica, ma una piccola guida ai posti che conosciamo e che consigliamo davvero: vicino agli appartamenti e durante le vostre giornate a Venezia.</p>

            <div className="mt-8 rounded-[24px] border border-[#d8c29a] bg-white px-5 py-4 shadow-[0_8px_24px_rgba(22,42,62,0.05)] md:flex md:items-start md:gap-4 md:px-6 md:py-5">
              <div className="mb-2 text-2xl md:mb-0">📞</div>
              <div>
                <p className="font-semibold text-[#17324a]">Un consiglio prima di andare</p>
                <p className="mt-1 text-sm leading-6 text-[#5f6971] md:text-[15px]">Se vuoi fermarti a mangiare, chiama sempre il locale prima di partire per prenotare il tavolo e verificare apertura e disponibilità. Giorni di chiusura, orari e posti liberi possono cambiare.</p>
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <a href="#marghera" className="rounded-[30px] bg-[#17324a] p-7 text-white transition hover:-translate-y-1">
                <span className="text-3xl">🏠</span>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-[#ddc186]">Vicino agli appartamenti</p>
                <h2 className="mt-2 font-serif text-3xl font-semibold">Mangiare a Marghera</h2>
                <p className="mt-3 leading-7 text-white/75">Osterie, pizza, colazione, gelato e delivery quando preferite restare in zona.</p>
                <span className="mt-5 inline-block font-semibold text-[#ead29f]">Vai a Marghera ↓</span>
              </a>

              <a href="#venezia" className="rounded-[30px] border border-[#d8c29a] bg-white p-7 transition hover:-translate-y-1">
                <span className="text-3xl">🦁</span>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-[#a47b34]">Durante la giornata in città</p>
                <h2 className="mt-2 font-serif text-3xl font-semibold">Mangiare a Venezia</h2>
                <p className="mt-3 leading-7 text-[#68727a]">Ristoranti, bacari, cicchetti, pasticcerie, gelaterie e piccoli sapori da non perdere.</p>
                <span className="mt-5 inline-block font-semibold text-[#9a7536]">Vai a Venezia ↓</span>
              </a>
            </div>
          </div>
        </section>

        <section id="marghera" className="scroll-mt-20">
          <div className="bg-[#17324a]">
            <div className="mx-auto max-w-7xl px-5 py-10 text-white md:px-8">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ddc186]">MARGHERA · VICINO AGLI APPARTAMENTI</p>
              <h2 className="mt-2 font-serif text-4xl font-semibold md:text-5xl">Quando vuoi mangiare vicino a casa</h2>
              <p className="mt-3 max-w-2xl leading-7 text-white/75">Una selezione pratica per cena, colazione o una serata tranquilla senza tornare a Venezia.</p>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-5 py-6 md:px-8">
            <nav className="hidden flex-wrap gap-2 py-4 md:flex" aria-label="Categorie Marghera">
              {margheraCategories.map((category) => (
                <a key={category.id} href={`#${category.id}`} className="rounded-full border border-[#d9d0c3] bg-white px-4 py-2 text-sm font-semibold text-[#344b5e] hover:border-[#b28a43] hover:text-[#8a682f]">{category.emoji} {category.title}</a>
              ))}
            </nav>
            {margheraCategories.map((category) => <CategoryBlock key={category.id} category={category} />)}

            <section className="my-10 overflow-hidden rounded-[32px] border border-[#d7c49d] bg-[#f4ead8]">
              <div className="grid md:grid-cols-[1.25fr_.75fr]">
                <div className="p-7 md:p-10">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9a7536]">🛵 DELIVERY IN APPARTAMENTO</p>
                  <h2 className="mt-3 font-serif text-3xl font-semibold md:text-4xl">Preferisci cenare a casa?</h2>
                  <p className="mt-4 max-w-2xl leading-7 text-[#56616a]">A Marghera sono attivi anche Deliveroo e Just Eat. Accedi con il tuo account personale e inserisci come indirizzo di consegna l'indirizzo dell'appartamento in cui stai soggiornando: vedrai direttamente i ristoranti disponibili, gli orari e i tempi di consegna.</p>
                  <p className="mt-3 text-sm text-[#766c60]">La disponibilità dei locali può cambiare in base al giorno e all'orario.</p>
                </div>
                <div className="flex items-center justify-center gap-3 bg-white/55 p-7 md:flex-col">
                  <a href="https://deliveroo.it/" target="_blank" rel="noopener noreferrer" className="w-full rounded-2xl bg-[#17324a] px-5 py-4 text-center font-semibold text-white">Deliveroo ↗</a>
                  <a href="https://www.justeat.it/" target="_blank" rel="noopener noreferrer" className="w-full rounded-2xl border border-[#b28a43] bg-white px-5 py-4 text-center font-semibold text-[#775c2d]">Just Eat ↗</a>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section id="venezia" className="scroll-mt-20">
          <div className="border-y border-[#e1d5c1] bg-[#e9dfcf]">
            <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8b682d]">VENEZIA · DURANTE LA GIORNATA IN CITTÀ</p>
              <h2 className="mt-2 font-serif text-4xl font-semibold md:text-5xl">Dove fermarsi mentre esplori Venezia</h2>
              <p className="mt-3 max-w-2xl leading-7 text-[#59646d]">Dalla cena con vista al cicchetto al bancone: scegli in base alla giornata, non alla classifica.</p>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-5 py-6 md:px-8">
            <nav className="hidden flex-wrap gap-2 py-4 md:flex" aria-label="Categorie Venezia">
              {veniceCategories.map((category) => (
                <a key={category.id} href={`#${category.id}`} className="rounded-full border border-[#d9d0c3] bg-white px-4 py-2 text-sm font-semibold text-[#344b5e] hover:border-[#b28a43] hover:text-[#8a682f]">{category.emoji} {category.title}</a>
              ))}
            </nav>
            {veniceCategories.map((category) => <CategoryBlock key={category.id} category={category} />)}

            <section className="my-12 rounded-[32px] bg-[#17324a] p-7 text-white md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ddc186]">CIBO & TRADIZIONI</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold md:text-4xl">Prima volta in un bacaro?</h2>
              <p className="mt-4 max-w-2xl leading-7 text-white/75">Se vuoi capire davvero cosa sono cicchetti, ombre e Spritz veneziano, abbiamo preparato due brevi guide.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/journal/cicchetti-veneziani" className="rounded-full bg-white px-5 py-3 font-semibold text-[#17324a]">Cicchetti veneziani →</a>
                <a href="/journal/spritz-veneziano" className="rounded-full border border-white/35 px-5 py-3 font-semibold text-white">Lo Spritz veneziano →</a>
              </div>
            </section>
          </div>
        </section>

        <section className="border-t border-[#e6ded2] bg-white">
          <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
            <p className="max-w-4xl text-sm leading-6 text-[#727b82]">I locali presenti in questa guida sono suggerimenti personali e non inserzioni a pagamento. Orari, giorni di chiusura, menu e contatti possono cambiare. Per ristoranti, osterie e pizzerie consigliamo sempre di telefonare prima di andare, sia per verificare l'apertura sia per prenotare il tavolo.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
