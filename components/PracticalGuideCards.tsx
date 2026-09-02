import Image from 'next/image';
import Link from 'next/link';

type Lang='it'|'en'|'de'|'fr'|'es'|'zh';

type Copy={
  eyebrow:string;
  title:string;
  lead:string;
  open:string;
  food:{title:string;subtitle:string;text:string;href:string;alt:string};
  services:{title:string;subtitle:string;text:string;href:string;alt:string};
};

const copy:Record<Lang,Copy>={
  it:{
    eyebrow:'Guide pratiche',
    title:'Tutto quello che serve durante il soggiorno.',
    lead:'Due raccolte rapide da consultare prima di uscire: i nostri indirizzi per mangiare e i servizi utili tra Marghera e Venezia.',
    open:'Apri la guida',
    food:{title:'Dove mangiare',subtitle:'Ristoranti, cicchetti & colazioni',text:'Una selezione pratica di ristoranti, pasticcerie, bacari, aperitivi, pizza e take-away tra Marghera e Venezia.',href:'/dove-mangiare',alt:'Cicchetti veneziani serviti al banco'},
    services:{title:'Servizi in zona',subtitle:'Spesa, farmacia, animali & sport',text:'Supermercati, mercato, farmacie, veterinario, pet shop, sport, banca, posta, taxi e altri riferimenti utili durante il soggiorno.',href:'/servizi-in-zona',alt:'Mappa di Venezia e della laguna'}
  },
  en:{
    eyebrow:'Practical guides',
    title:'Useful information for your stay.',
    lead:'Two quick collections to check before heading out: our places to eat and useful services around Marghera and Venice.',
    open:'Open guide',
    food:{title:'Where to eat',subtitle:'Restaurants, cicchetti & breakfast',text:'A practical selection of restaurants, pastry shops, bacari, aperitivo spots, pizza and takeaway in Marghera and Venice.',href:'/en/where-to-eat',alt:'Venetian cicchetti served at the counter'},
    services:{title:'Services nearby',subtitle:'Groceries, pharmacy, pets & sport',text:'Supermarkets, local market, pharmacies, veterinary care, pet shop, sport, bank, post office, taxi and other useful services during your stay.',href:'/en/services-nearby',alt:'Map of Venice and the lagoon'}
  },
  de:{
    eyebrow:'Praktische Guides',
    title:'Nützliche Informationen für deinen Aufenthalt.',
    lead:'Zwei schnelle Übersichten für unterwegs: unsere Empfehlungen zum Essen sowie nützliche Services in Marghera und Venedig.',
    open:'Guide öffnen',
    food:{title:'Essen gehen',subtitle:'Restaurants, Cicchetti & Frühstück',text:'Eine praktische Auswahl an Restaurants, Konditoreien, Bacari, Aperitivo-Lokalen, Pizza und Take-away in Marghera und Venedig.',href:'/de/where-to-eat',alt:'Venezianische Cicchetti an der Theke'},
    services:{title:'Services in der Nähe',subtitle:'Einkaufen, Apotheke, Haustiere & Sport',text:'Supermärkte, Wochenmarkt, Apotheken, Tierarzt, Tierbedarf, Sport, Bank, Post, Taxi und weitere nützliche Angebote während des Aufenthalts.',href:'/de/services-nearby',alt:'Karte von Venedig und der Lagune'}
  },
  fr:{
    eyebrow:'Guides pratiques',
    title:'Les informations utiles pendant votre séjour.',
    lead:'Deux sélections rapides à consulter avant de sortir : nos bonnes adresses pour manger et les services utiles entre Marghera et Venise.',
    open:'Ouvrir le guide',
    food:{title:'Où manger',subtitle:'Restaurants, cicchetti & petit-déjeuner',text:'Une sélection pratique de restaurants, pâtisseries, bacari, adresses pour l’apéritif, pizzas et plats à emporter à Marghera et Venise.',href:'/fr/where-to-eat',alt:'Cicchetti vénitiens servis au comptoir'},
    services:{title:'Services à proximité',subtitle:'Courses, pharmacie, animaux & sport',text:'Supermarchés, marché, pharmacies, vétérinaire, animalerie, sport, banque, poste, taxi et autres services utiles pendant le séjour.',href:'/fr/services-nearby',alt:'Carte de Venise et de la lagune'}
  },
  es:{
    eyebrow:'Guías prácticas',
    title:'Información útil durante tu estancia.',
    lead:'Dos selecciones rápidas para consultar antes de salir: nuestros lugares para comer y los servicios útiles entre Marghera y Venecia.',
    open:'Abrir guía',
    food:{title:'Dónde comer',subtitle:'Restaurantes, cicchetti y desayunos',text:'Una selección práctica de restaurantes, pastelerías, bacari, lugares para el aperitivo, pizza y comida para llevar en Marghera y Venecia.',href:'/es/where-to-eat',alt:'Cicchetti venecianos servidos en la barra'},
    services:{title:'Servicios cercanos',subtitle:'Compras, farmacia, mascotas y deporte',text:'Supermercados, mercado, farmacias, veterinario, tienda de mascotas, deporte, banco, correos, taxi y otros servicios útiles durante la estancia.',href:'/es/services-nearby',alt:'Mapa de Venecia y la laguna'}
  },
  zh:{
    eyebrow:'实用指南',
    title:'住宿期间真正用得上的信息。',
    lead:'出门前可以快速查看的两份指南：马尔盖拉与威尼斯的餐饮推荐，以及住宿期间常用的周边服务。',
    open:'打开指南',
    food:{title:'餐饮推荐',subtitle:'餐厅、cicchetti 与早餐',text:'精选马尔盖拉和威尼斯的餐厅、糕点店、bacari、开胃酒去处、披萨与外带选择。',href:'/zh/where-to-eat',alt:'吧台上的威尼斯 cicchetti'},
    services:{title:'附近服务',subtitle:'购物、药房、宠物与运动',text:'汇总超市、市场、药房、兽医、宠物店、运动设施、银行、邮局、出租车以及住宿期间可能用到的其他服务。',href:'/zh/services-nearby',alt:'威尼斯与潟湖地图'}
  }
};

export default function PracticalGuideCards({lang='it'}:{lang?:Lang}){
  const t=copy[lang];
  const cards=[
    {...t.food,image:'/images/journal-cicchetti.webp'},
    {...t.services,image:'/images/mappa-venezia-finale.webp'}
  ];
  return <section className="bg-white py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-xs font-black uppercase tracking-[.22em] text-gold">{t.eyebrow}</p>
        <h2 className="mt-4 font-serif text-4xl text-navy sm:text-5xl">{t.title}</h2>
        <p className="mt-4 text-lg leading-8 text-slate-600">{t.lead}</p>
      </div>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {cards.map(card=><article key={card.href} className="overflow-hidden rounded-[2rem] bg-cream shadow-soft">
          <div className="relative h-56 sm:h-64 lg:h-72">
            <Image src={card.image} alt={card.alt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover"/>
          </div>
          <div className="p-6 sm:p-8">
            <p className="text-xs font-black uppercase tracking-[.18em] text-gold">{card.subtitle}</p>
            <h3 className="mt-3 font-serif text-4xl text-navy sm:text-5xl">{card.title}</h3>
            <p className="mt-4 text-lg leading-8 text-slate-600">{card.text}</p>
            <Link href={card.href} className="mt-7 inline-flex rounded-full bg-gold px-6 py-3 font-bold text-navy">{t.open}</Link>
          </div>
        </article>)}
      </div>
    </div>
  </section>
}
