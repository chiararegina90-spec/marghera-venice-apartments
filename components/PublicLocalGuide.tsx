import Header from './Header';
import Footer from './Footer';
import Link from 'next/link';

type Lang='it'|'en'|'de'|'fr'|'es'|'zh';
type Place={name:string;description:string;type:string;zone?:string;maps?:string;website?:string};
type Section={title:string;places:Place[]};
type LocalizedPage={home:string;maps:string;website:string;note:string;foodTitle:string;foodLead:string;servicesTitle:string;servicesLead:string;food:Section[];services:Section[]};

const mapSearch=(q:string)=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

const shared={
 diplomatico:'https://maps.app.goo.gl/MNNWR3kJZSnnxZG98',
 osteria075:'https://maps.app.goo.gl/L3JK8hHVEFvx2HdZA',
 giardinetto:'https://maps.app.goo.gl/z4TqmVdUBrUPQH8P6',
 marciano:'https://maps.app.goo.gl/wF9B13DRLNFP9HGd8',
 pizzalonga:'https://maps.app.goo.gl/hCL2WwWutxz9WNg68',
 vanin:'https://maps.app.goo.gl/hgAmAcDiRphVmiHJ6',
 danieli:'https://maps.google.com/?cid=12992732050271274020',
 mega:'https://maps.app.goo.gl/Q1aQPi4GSuTyL4sP8',
 lidl:'https://maps.app.goo.gl/rCugwjQDNvnKRHXM6',
 drmax:'https://maps.app.goo.gl/bNvwfFu2dG2Fu2e3A',
 petshop:'https://share.google/e9vFEdILNij9S7ein',
 vet:'https://share.google/xpDu0eFGIOcj8oGw8',
 pharmacies:'https://www.farmacievenezia.it/',
};

const commonMaps={
 madonna:mapSearch('Trattoria alla Madonna Venezia'),
 paradiso:mapSearch('Paradiso Perduto Venezia'),
 lineadombra:mapSearch('Ristorante Lineadombra Venezia'),
 aperol:mapSearch('Terrazza Aperol Venezia Campo Santo Stefano'),
 mercante:mapSearch('Il Mercante Venezia'),
 santo:mapSearch('Il Santo Bevitore Venezia'),
 ombra:mapSearch('Ombra del Leone Venezia'),
 market:mapSearch('Mercato rionale Marghera Venezia'),
 anytime:mapSearch('Anytime Fitness Marghera Venezia'),
 pool:mapSearch('Piscina Comunale di Marghera Venezia'),
 green:mapSearch('Green Garden Village Marghera Venezia'),
 golf:mapSearch('Golf Club Venezia Alberoni Lido Venezia'),
 bank:mapSearch('UniCredit Via Cesare Rossarol 1 Marghera Venezia'),
 post:mapSearch('Poste Italiane Via Nicolo Tommaseo 1 Marghera Venezia'),
 tobacconist:mapSearch('Tabaccheria Marghera Venezia'),
 fuel:mapSearch('Distributore carburante Marghera Venezia'),
 hospital:mapSearch("Ospedale dell'Angelo Mestre"),
};

const foodRelated:Record<Lang,{eyebrow:string;title:string;items:[string,string][]}>={
 it:{eyebrow:'Sapori & tradizioni',title:'Per capire meglio l’aperitivo veneziano',items:[['Cicchetti veneziani','/journal/cicchetti-veneziani'],['Lo Spritz veneziano','/journal/spritz-veneziano']]},
 en:{eyebrow:'Food & traditions',title:'Learn more about Venetian aperitivo culture',items:[['Venetian cicchetti','/en/journal/cicchetti-veneziani'],['The Venetian Spritz','/en/journal/spritz-veneziano']]},
 de:{eyebrow:'Genuss & Traditionen',title:'Mehr über die venezianische Aperitivo-Kultur',items:[['Venezianische Cicchetti','/de/journal/cicchetti-veneziani'],['Der venezianische Spritz','/de/journal/spritz-veneziano']]},
 fr:{eyebrow:'Saveurs & traditions',title:'Mieux comprendre l’aperitivo vénitien',items:[['Les cicchetti vénitiens','/fr/journal/cicchetti-veneziani'],['Le Spritz vénitien','/fr/journal/spritz-veneziano']]},
 es:{eyebrow:'Sabores & tradiciones',title:'Descubre mejor la cultura del aperitivo veneciano',items:[['Cicchetti venecianos','/es/journal/cicchetti-veneziani'],['El Spritz veneciano','/es/journal/spritz-veneziano']]},
 zh:{eyebrow:'美食与传统',title:'进一步了解威尼斯 aperitivo 文化',items:[['威尼斯 cicchetti','/zh/journal/cicchetti-veneziani'],['威尼斯 Spritz','/zh/journal/spritz-veneziano']]}
};

const pages:Record<Lang,LocalizedPage>={
 it:{
  home:'Home',maps:'Apri in Google Maps',website:'Apri il sito',note:'Orari, aperture e disponibilità possono cambiare: verifica sempre prima di partire.',
  foodTitle:'Dove mangiare',foodLead:'Una selezione pratica di indirizzi consigliati tra Marghera e Venezia: cucina locale, colazioni, cicchetti, aperitivi e soluzioni da asporto.',
  servicesTitle:'Servizi in zona',servicesLead:'Spesa, farmacia, animali, sport e altri servizi utili vicino agli appartamenti, raccolti in una pagina semplice da consultare anche da smartphone.',
  food:[
   {title:'Mangiare a Marghera',places:[
    {name:'Osteria Al Diplomatico',type:'Osteria e cicchetti',zone:'Marghera',description:'Una tappa molto conosciuta per cicchetti veneziani e atmosfera informale, ideale per assaggiare qualcosa in stile locale.',maps:shared.diplomatico},
    {name:'Osteria 0.75',type:'Cucina veneziana contemporanea',zone:'Marghera',description:'Piatti della tradizione veneziana rivisitati in chiave moderna, con una buona attenzione alla selezione dei vini.',maps:shared.osteria075},
    {name:'Il Giardinetto',type:'Ristorante e pizzeria',zone:'Marghera',description:'Pizza, piatti di pasta e un piacevole giardino sul retro, particolarmente apprezzabile nelle serate estive.',maps:shared.giardinetto},
    {name:'Marciano Pub Marghera',type:'Pub e cucina informale',zone:'Marghera',description:'Un indirizzo informale per una serata rilassata, con birre e una proposta adatta a gruppi e amici.',maps:shared.marciano},
   ]},
   {title:'Mangiare a Venezia',places:[
    {name:'Trattoria alla Madonna',type:'Cucina veneziana',zone:'Rialto',description:'Una storica trattoria veneziana, particolarmente indicata per chi vuole provare piatti tradizionali e cucina di pesce.',maps:commonMaps.madonna},
    {name:'Paradiso Perduto',type:'Osteria e musica',zone:'Cannaregio',description:'Locale storico dall’atmosfera vivace, conosciuto per cucina, convivialità e serate con musica.',maps:commonMaps.paradiso},
    {name:'Ristorante Lineadombra',type:'Ristorante',zone:'Dorsoduro',description:'Una scelta più elegante, con terrazza sul canale, adatta a una cena speciale o romantica.',maps:commonMaps.lineadombra},
   ]},
   {title:'Colazione e pasticcerie',places:[
    {name:'Pasticceria Vanin',type:'Pasticceria',zone:'Marghera',description:'Pasticceria artigianale consigliata per cornetto, cappuccino e una colazione prima di partire per Venezia.',maps:shared.vanin},
    {name:'Pasticceria Danieli',type:'Pasticceria',zone:'Marghera',description:'Un punto di riferimento locale con una ricca scelta di dolci freschi e prodotti da colazione.',maps:shared.danieli},
   ]},
   {title:'Aperitivi, cicchetti e cocktail',places:[
    {name:'Terrazza Aperol',type:'Aperitivo e ristorazione',zone:'Campo Santo Stefano',description:'Una terrazza nel cuore di Venezia per aperitivo, cocktail e una pausa con vista su Campo Santo Stefano.',maps:commonMaps.aperol},
    {name:'Il Mercante',type:'Cocktail bar',zone:'Venezia',description:'Cocktail bar curato e intimo, indicato per chi cerca miscelazione creativa e un ambiente più ricercato.',maps:commonMaps.mercante},
    {name:'Il Santo Bevitore',type:'Pub e birre',zone:'Cannaregio',description:'Un pub accogliente per una pausa informale e una buona selezione di birre.',maps:commonMaps.santo},
    {name:'Ombra del Leone',type:'Aperitivo e wine bar',zone:'San Marco',description:'Una terrazza affacciata sul Bacino di San Marco, ideale per uno spritz o un calice di vino in una posizione scenografica.',maps:commonMaps.ombra},
   ]},
   {title:'Pizza e take-away',places:[
    {name:'Pizzalonga Away Marghera',type:'Pizza da asporto',zone:'Marghera',description:'Una soluzione comoda per cenare in appartamento; tra le proposte più caratteristiche c’è la pizza al metro da condividere.',maps:shared.pizzalonga},
   ]},
  ],
  services:[
   {title:'Supermercati',places:[
    {name:'MEGA Supermercato',type:'Supermercato',zone:'Marghera',description:'Supermercato in zona Marghera, comodo per una spesa completa durante il soggiorno.',maps:shared.mega},
    {name:'LIDL',type:'Supermercato',zone:'Marghera',description:'Grande supermercato utile per una spesa completa durante il soggiorno.',maps:shared.lidl},
   ]},
   {title:'Mercato rionale',places:[{name:'Mercato rionale di Marghera',type:'Mercato',zone:'Marghera',description:'Mercato rionale di Marghera, attivo il martedì e il sabato mattina, con prodotti freschi, formaggi, abbigliamento e altri banchi.',maps:commonMaps.market}]},
   {title:'Farmacie',places:[
    {name:'Farmacia Dr. Max',type:'Farmacia',zone:'Marghera',description:'Farmacia in zona Marghera, utile per farmaci da banco, prescrizioni e necessità durante il soggiorno.',maps:shared.drmax},
    {name:'Farmacie di turno',type:'Servizio online',zone:'Venezia',description:'Per trovare una farmacia aperta di notte, la domenica o nei giorni festivi, consulta il servizio dedicato alle farmacie di turno.',website:shared.pharmacies},
   ]},
   {title:'Animali',places:[
    {name:'L’Arca di Noè',type:'Pet shop e toelettatura',zone:'Marghera',description:'Pet shop e toelettatura a Marghera con cibo, accessori, museruole, guinzagli, giochi e servizio di grooming. Negli appartamenti Marghera Venice Apartments mettiamo già a disposizione ciotole e cuccia.',maps:shared.petshop},
    {name:'Ambulatorio Veterinario Associato Concordia',type:'Veterinario',zone:'Marghera',description:'Ambulatorio veterinario a Marghera per visite e necessità durante il soggiorno.',maps:shared.vet},
   ]},
   {title:'Palestra / sport',places:[
    {name:'Anytime Fitness',type:'Palestra',zone:'Marghera',description:'Palestra moderna con accesso 24 ore su 24, 7 giorni su 7.',maps:commonMaps.anytime},
    {name:'Piscina Comunale di Marghera',type:'Piscina',zone:'Marghera',description:'Una soluzione per il nuoto con possibilità di ingressi giornalieri.',maps:commonMaps.pool},
    {name:'Green Garden Village',type:'Centro sportivo',zone:'Marghera',description:'Complesso con tennis, padel, calcio e piscine, adatto anche a famiglie.',maps:commonMaps.green},
    {name:'Golf Club Venezia',type:'Golf',zone:'Alberoni, Lido di Venezia',description:'Storico campo da golf agli Alberoni, utile per chi vuole dedicare una giornata allo sport durante il soggiorno. Verifica accesso, prenotazioni e disponibilità prima di partire.',maps:commonMaps.golf},
   ]},
   {title:'Altri servizi utili',places:[
    {name:'UniCredit',type:'Banca / Bancomat',zone:'Via Cesare Rossarol, Marghera',description:'Filiale bancaria in zona Via Cesare Rossarol. Verifica su Maps la disponibilità del bancomat e gli orari della filiale.',maps:commonMaps.bank},
    {name:'Poste Italiane',type:'Ufficio postale',zone:'Marghera',description:'Ufficio postale di Marghera utile per spedizioni e servizi postali durante il soggiorno.',maps:commonMaps.post},
    {name:'Tabaccheria',type:'Tabacchi e servizi',zone:'Marghera',description:'Per tabacchi, marche da bollo e altri servizi di uso quotidiano, apri Maps per vedere le rivendite più vicine.',maps:commonMaps.tobacconist},
    {name:'Distributori di carburante',type:'Carburante',zone:'Marghera',description:'Per chi viaggia in auto, apri Maps per trovare rapidamente il distributore più comodo in base al percorso.',maps:commonMaps.fuel},
   ]},
   {title:'Emergenze e trasporti',places:[
    {name:'Numero unico emergenze 112',type:'Emergenze',zone:'Italia / UE',description:'Numero unico europeo per emergenze sanitarie, Polizia, Carabinieri e Vigili del Fuoco.'},
    {name:"Ospedale dell’Angelo",type:'Pronto Soccorso',zone:'Mestre',description:'L’ospedale principale della zona, con Pronto Soccorso.',maps:commonMaps.hospital},
    {name:'Radio Taxi Venezia',type:'Taxi',zone:'Venezia / Mestre',description:'Servizio taxi locale. Numero telefonico: 041 5964.'},
   ]},
  ]
 },
 en:{
  home:'Home',maps:'Open in Google Maps',website:'Open website',note:'Opening hours and availability may change: always check before you go.',
  foodTitle:'Where to eat',foodLead:'A practical selection of recommended places in Marghera and Venice: local cuisine, breakfast, cicchetti, aperitivo and takeaway.',
  servicesTitle:'Services nearby',servicesLead:'Groceries, pharmacy, pet care, sport and other useful services near the apartments, designed for quick mobile access.',
  food:[],services:[]
 },
 de:{home:'Startseite',maps:'In Google Maps öffnen',website:'Website öffnen',note:'Öffnungszeiten und Verfügbarkeit können sich ändern. Bitte vorher prüfen.',foodTitle:'Essen gehen',foodLead:'Praktische Empfehlungen in Marghera und Venedig: lokale Küche, Frühstück, Cicchetti, Aperitivo und Take-away.',servicesTitle:'Services in der Nähe',servicesLead:'Supermärkte, Apotheke, Tierbedarf, Sport und weitere nützliche Angebote in der Nähe der Apartments.',food:[],services:[]},
 fr:{home:'Accueil',maps:'Ouvrir dans Google Maps',website:'Ouvrir le site',note:'Les horaires et disponibilités peuvent changer : vérifiez toujours avant de partir.',foodTitle:'Où manger',foodLead:'Une sélection pratique d’adresses recommandées à Marghera et Venise : cuisine locale, petit-déjeuner, cicchetti, apéritifs et plats à emporter.',servicesTitle:'Services à proximité',servicesLead:'Supermarchés, pharmacie, services pour animaux, sport et autres services utiles près des appartements.',food:[],services:[]},
 es:{home:'Inicio',maps:'Abrir en Google Maps',website:'Abrir sitio web',note:'Los horarios y la disponibilidad pueden cambiar: compruébalos antes de ir.',foodTitle:'Dónde comer',foodLead:'Una selección práctica de lugares recomendados en Marghera y Venecia: cocina local, desayunos, cicchetti, aperitivos y comida para llevar.',servicesTitle:'Servicios cercanos',servicesLead:'Supermercados, farmacia, servicios para mascotas, deporte y otros servicios útiles cerca de los apartamentos.',food:[],services:[]},
 zh:{home:'首页',maps:'在 Google 地图中打开',website:'打开网站',note:'营业时间和服务情况可能变化，出发前请再次确认。',foodTitle:'餐饮推荐',foodLead:'精选马尔盖拉与威尼斯的实用餐饮地址，包括当地美食、早餐、cicchetti、开胃酒和外带。',servicesTitle:'附近服务',servicesLead:'公寓附近的超市、药房、宠物服务、运动设施和其他实用服务，方便手机快速查看。',food:[],services:[]}
};

const translatedFood:Record<Exclude<Lang,'it'>,Section[]>={
 en:[
  {title:'Eating in Marghera',places:[
   {name:'Osteria Al Diplomatico',type:'Osteria & cicchetti',zone:'Marghera',description:'A well-known stop for Venetian cicchetti and an informal local atmosphere.',maps:shared.diplomatico},
   {name:'Osteria 0.75',type:'Contemporary Venetian cuisine',zone:'Marghera',description:'Venetian traditions reworked with a modern touch, accompanied by a thoughtful wine selection.',maps:shared.osteria075},
   {name:'Il Giardinetto',type:'Restaurant & pizzeria',zone:'Marghera',description:'Pizza, pasta dishes and a pleasant rear garden, especially enjoyable on summer evenings.',maps:shared.giardinetto},
   {name:'Marciano Pub Marghera',type:'Pub & casual dining',zone:'Marghera',description:'A casual option for a relaxed evening, with beers and food suited to friends and groups.',maps:shared.marciano},
  ]},
  {title:'Eating in Venice',places:[
   {name:'Trattoria alla Madonna',type:'Venetian cuisine',zone:'Rialto',description:'A historic Venetian trattoria for traditional dishes, especially seafood.',maps:commonMaps.madonna},
   {name:'Paradiso Perduto',type:'Osteria & music',zone:'Cannaregio',description:'A lively historic venue known for food, convivial atmosphere and music.',maps:commonMaps.paradiso},
   {name:'Ristorante Lineadombra',type:'Restaurant',zone:'Dorsoduro',description:'A more refined option with a canal-side terrace, ideal for a special dinner.',maps:commonMaps.lineadombra},
  ]},
  {title:'Breakfast & pastry shops',places:[
   {name:'Pasticceria Vanin',type:'Pastry shop',zone:'Marghera',description:'An artisan pastry shop recommended for a croissant and cappuccino before heading to Venice.',maps:shared.vanin},
   {name:'Pasticceria Danieli',type:'Pastry shop',zone:'Marghera',description:'A local favourite with a generous selection of fresh pastries and breakfast treats.',maps:shared.danieli},
  ]},
  {title:'Aperitivo, cicchetti & cocktails',places:[
   {name:'Terrazza Aperol',type:'Aperitivo & dining',zone:'Campo Santo Stefano',description:'A terrace in central Venice for aperitivo, cocktails and a break overlooking Campo Santo Stefano.',maps:commonMaps.aperol},
   {name:'Il Mercante',type:'Cocktail bar',zone:'Venice',description:'An intimate cocktail bar for creative drinks in a more refined setting.',maps:commonMaps.mercante},
   {name:'Il Santo Bevitore',type:'Pub & beer',zone:'Cannaregio',description:'A welcoming pub for an informal break and a good beer selection.',maps:commonMaps.santo},
   {name:'Ombra del Leone',type:'Aperitivo & wine bar',zone:'San Marco',description:'A terrace overlooking St Mark’s Basin, ideal for a spritz or glass of wine.',maps:commonMaps.ombra},
  ]},
  {title:'Pizza & takeaway',places:[{name:'Pizzalonga Away Marghera',type:'Takeaway pizza',zone:'Marghera',description:'A convenient option for dinner at the apartment; their metre-long pizza is made for sharing.',maps:shared.pizzalonga}]},
 ],
 de:[],fr:[],es:[],zh:[]
};

const translatedServices:Record<Exclude<Lang,'it'>,Section[]>={
 en:[
  {title:'Supermarkets',places:[{name:'MEGA Supermercato',type:'Supermarket',zone:'Marghera',description:'A supermarket in Marghera, convenient for a full grocery shop during your stay.',maps:shared.mega},{name:'LIDL',type:'Supermarket',zone:'Marghera',description:'A large supermarket for a full grocery shop during your stay.',maps:shared.lidl}]},
  {title:'Local market',places:[{name:'Marghera local market',type:'Market',zone:'Marghera',description:'Marghera’s local market, held on Tuesday and Saturday mornings with fresh produce, cheese, clothing and other stalls.',maps:commonMaps.market}]},
  {title:'Pharmacies',places:[{name:'Farmacia Dr. Max',type:'Pharmacy',zone:'Marghera',description:'A pharmacy in Marghera for everyday health needs during your stay.',maps:shared.drmax},{name:'On-duty pharmacies',type:'Online service',zone:'Venice',description:'Use the official local service to find a pharmacy open at night, on Sundays or public holidays.',website:shared.pharmacies}]},
  {title:'Pets',places:[{name:'L’Arca di Noè',type:'Pet shop & grooming',zone:'Marghera',description:'Pet shop and grooming service in Marghera with food, accessories, muzzles, leads and toys. Bowls and a pet bed are already provided in Marghera Venice Apartments.',maps:shared.petshop},{name:'Ambulatorio Veterinario Associato Concordia',type:'Veterinary clinic',zone:'Marghera',description:'A veterinary clinic in Marghera for appointments and pet-care needs during your stay.',maps:shared.vet}]},
  {title:'Gym / sport',places:[{name:'Anytime Fitness',type:'Gym',zone:'Marghera',description:'A modern gym with 24/7 access.',maps:commonMaps.anytime},{name:'Piscina Comunale di Marghera',type:'Swimming pool',zone:'Marghera',description:'A convenient swimming option with day-entry availability.',maps:commonMaps.pool},{name:'Green Garden Village',type:'Sports centre',zone:'Marghera',description:'Tennis, padel, football and pools, also suitable for families.',maps:commonMaps.green},{name:'Golf Club Venezia',type:'Golf',zone:'Alberoni, Venice Lido',description:'A historic golf course at Alberoni for guests who want to add a sporting day to their stay. Check access, reservations and availability before travelling.',maps:commonMaps.golf}]},
  {title:'Other useful services',places:[{name:'UniCredit',type:'Bank / ATM',zone:'Via Cesare Rossarol, Marghera',description:'A bank branch in the Via Cesare Rossarol area. Check Maps for current ATM availability and branch hours.',maps:commonMaps.bank},{name:'Poste Italiane',type:'Post office',zone:'Marghera',description:'A local post office for postal and shipping services.',maps:commonMaps.post},{name:'Tobacconist',type:'Tobacco & everyday services',zone:'Marghera',description:'Open Maps to find the closest tobacconist for tobacco, stamps and other everyday services.',maps:commonMaps.tobacconist},{name:'Fuel stations',type:'Fuel',zone:'Marghera',description:'If you are travelling by car, open Maps to find the most convenient fuel station for your route.',maps:commonMaps.fuel}]},
  {title:'Emergencies & transport',places:[{name:'European emergency number 112',type:'Emergency',zone:'Italy / EU',description:'Single European emergency number for medical emergencies, Police, Carabinieri and Fire Brigade.'},{name:"Ospedale dell’Angelo",type:'Emergency department',zone:'Mestre',description:'The main hospital in the area, with an emergency department.',maps:commonMaps.hospital},{name:'Radio Taxi Venezia',type:'Taxi',zone:'Venice / Mestre',description:'Local taxi service. Phone: 041 5964.'}]},
 ],
 de:[],fr:[],es:[],zh:[]
};

const translatedOther:Record<'de'|'fr'|'es'|'zh',{food:Section[];services:Section[]}>= {
 de:{food:[
  {title:'Essen in Marghera',places:[
   {name:'Osteria Al Diplomatico',type:'Osteria & Cicchetti',zone:'Marghera',description:'Eine bekannte Adresse für venezianische Cicchetti und eine ungezwungene, typisch lokale Atmosphäre.',maps:shared.diplomatico},
   {name:'Osteria 0.75',type:'Moderne venezianische Küche',zone:'Marghera',description:'Venezianische Tradition modern interpretiert, begleitet von einer sorgfältigen Weinauswahl.',maps:shared.osteria075},
   {name:'Il Giardinetto',type:'Restaurant & Pizzeria',zone:'Marghera',description:'Pizza, Pastagerichte und ein schöner Garten im hinteren Bereich, besonders angenehm an Sommerabenden.',maps:shared.giardinetto},
   {name:'Marciano Pub Marghera',type:'Pub & unkomplizierte Küche',zone:'Marghera',description:'Eine lockere Adresse für einen entspannten Abend mit Bier und Gerichten für Freunde und Gruppen.',maps:shared.marciano},
  ]},
  {title:'Essen in Venedig',places:[
   {name:'Trattoria alla Madonna',type:'Venezianische Küche',zone:'Rialto',description:'Eine historische venezianische Trattoria für traditionelle Gerichte, besonders Fisch und Meeresfrüchte.',maps:commonMaps.madonna},
   {name:'Paradiso Perduto',type:'Osteria & Musik',zone:'Cannaregio',description:'Ein lebendiges historisches Lokal, bekannt für Küche, gesellige Atmosphäre und Musik.',maps:commonMaps.paradiso},
   {name:'Ristorante Lineadombra',type:'Restaurant',zone:'Dorsoduro',description:'Eine elegantere Wahl mit Terrasse am Kanal, ideal für ein besonderes oder romantisches Abendessen.',maps:commonMaps.lineadombra},
  ]},
  {title:'Frühstück & Konditoreien',places:[
   {name:'Pasticceria Vanin',type:'Konditorei',zone:'Marghera',description:'Handwerkliche Konditorei für Croissant und Cappuccino vor dem Start nach Venedig.',maps:shared.vanin},
   {name:'Pasticceria Danieli',type:'Konditorei',zone:'Marghera',description:'Ein lokaler Klassiker mit großer Auswahl an frischem Gebäck und Frühstücksangeboten.',maps:shared.danieli},
  ]},
  {title:'Aperitivo, Cicchetti & Cocktails',places:[
   {name:'Terrazza Aperol',type:'Aperitivo & Gastronomie',zone:'Campo Santo Stefano',description:'Eine Terrasse im Herzen Venedigs für Aperitivo und Cocktails mit Blick auf Campo Santo Stefano.',maps:commonMaps.aperol},
   {name:'Il Mercante',type:'Cocktailbar',zone:'Venedig',description:'Eine intime Cocktailbar für kreative Drinks in gepflegter Atmosphäre.',maps:commonMaps.mercante},
   {name:'Il Santo Bevitore',type:'Pub & Bier',zone:'Cannaregio',description:'Ein gemütlicher Pub für eine ungezwungene Pause und eine gute Bierauswahl.',maps:commonMaps.santo},
   {name:'Ombra del Leone',type:'Aperitivo & Weinbar',zone:'San Marco',description:'Eine Terrasse mit Blick auf das Markusbecken, ideal für Spritz oder ein Glas Wein.',maps:commonMaps.ombra},
  ]},
  {title:'Pizza & Take-away',places:[{name:'Pizzalonga Away Marghera',type:'Pizza zum Mitnehmen',zone:'Marghera',description:'Praktisch für ein Abendessen im Apartment; die Meterpizza eignet sich besonders gut zum Teilen.',maps:shared.pizzalonga}]},
 ],services:[
  {title:'Supermärkte',places:[{name:'MEGA Supermercato',type:'Supermarkt',zone:'Marghera',description:'Ein Supermarkt in Marghera, praktisch für den Einkauf während des Aufenthalts.',maps:shared.mega},{name:'LIDL',type:'Supermarkt',zone:'Marghera',description:'Ein großer Supermarkt für den kompletten Einkauf während des Aufenthalts.',maps:shared.lidl}]},
  {title:'Wochenmarkt',places:[{name:'Wochenmarkt Marghera',type:'Markt',zone:'Marghera',description:'Der Wochenmarkt von Marghera findet dienstags und samstags vormittags statt und bietet frische Lebensmittel, Käse, Kleidung und weitere Stände.',maps:commonMaps.market}]},
  {title:'Apotheken',places:[{name:'Farmacia Dr. Max',type:'Apotheke',zone:'Marghera',description:'Eine Apotheke in Marghera für gesundheitliche Bedürfnisse während des Aufenthalts.',maps:shared.drmax},{name:'Apotheken-Notdienst',type:'Online-Service',zone:'Venedig',description:'Hier findest du Apotheken, die nachts, sonntags oder an Feiertagen geöffnet sind.',website:shared.pharmacies}]},
  {title:'Haustiere',places:[{name:'L’Arca di Noè',type:'Tierbedarf & Fellpflege',zone:'Marghera',description:'Tierbedarf und Fellpflege in Marghera mit Futter, Zubehör, Maulkörben, Leinen und Spielzeug. In den Apartments von Marghera Venice Apartments stehen Näpfe und ein Tierbett bereit.',maps:shared.petshop},{name:'Ambulatorio Veterinario Associato Concordia',type:'Tierarztpraxis',zone:'Marghera',description:'Tierarztpraxis in Marghera für Untersuchungen und tiermedizinische Bedürfnisse während des Aufenthalts.',maps:shared.vet}]},
  {title:'Fitness / Sport',places:[{name:'Anytime Fitness',type:'Fitnessstudio',zone:'Marghera',description:'Modernes Fitnessstudio mit Zugang rund um die Uhr.',maps:commonMaps.anytime},{name:'Piscina Comunale di Marghera',type:'Schwimmbad',zone:'Marghera',description:'Praktische Möglichkeit zum Schwimmen mit Tageskarten.',maps:commonMaps.pool},{name:'Green Garden Village',type:'Sportzentrum',zone:'Marghera',description:'Tennis, Padel, Fußball und Schwimmbäder – auch für Familien geeignet.',maps:commonMaps.green},{name:'Golf Club Venezia',type:'Golf',zone:'Alberoni, Lido di Venezia',description:'Historischer Golfplatz in Alberoni für Gäste, die einen sportlichen Tag einplanen möchten. Zugang, Reservierung und Verfügbarkeit vorher prüfen.',maps:commonMaps.golf}]},
  {title:'Weitere nützliche Services',places:[{name:'UniCredit',type:'Bank / Geldautomat',zone:'Via Cesare Rossarol, Marghera',description:'Bankfiliale im Bereich Via Cesare Rossarol. Bitte aktuelle Geldautomaten-Verfügbarkeit und Öffnungszeiten in Maps prüfen.',maps:commonMaps.bank},{name:'Poste Italiane',type:'Postamt',zone:'Marghera',description:'Postamt in Marghera für Versand- und Postdienstleistungen.',maps:commonMaps.post},{name:'Tabakladen',type:'Tabak & Alltagsservices',zone:'Marghera',description:'Öffne Maps, um den nächstgelegenen Tabakladen für Tabakwaren, Wertmarken und weitere Services zu finden.',maps:commonMaps.tobacconist},{name:'Tankstellen',type:'Kraftstoff',zone:'Marghera',description:'Für Autofahrer: Öffne Maps, um die praktischste Tankstelle für deine Route zu finden.',maps:commonMaps.fuel}]},
  {title:'Notfälle & Verkehr',places:[{name:'Europäische Notrufnummer 112',type:'Notfall',zone:'Italien / EU',description:'Einheitliche europäische Notrufnummer für medizinische Notfälle, Polizei, Carabinieri und Feuerwehr.'},{name:'Ospedale dell’Angelo',type:'Notaufnahme',zone:'Mestre',description:'Das wichtigste Krankenhaus der Umgebung mit Notaufnahme.',maps:commonMaps.hospital},{name:'Radio Taxi Venezia',type:'Taxi',zone:'Venedig / Mestre',description:'Lokaler Taxiservice. Telefonnummer: 041 5964.'}]},
 ]},
 fr:{food:[
  {title:'Manger à Marghera',places:[
   {name:'Osteria Al Diplomatico',type:'Osteria & cicchetti',zone:'Marghera',description:'Une adresse connue pour les cicchetti vénitiens et une ambiance locale décontractée.',maps:shared.diplomatico},
   {name:'Osteria 0.75',type:'Cuisine vénitienne contemporaine',zone:'Marghera',description:'Des traditions vénitiennes revisitées avec une touche moderne et une sélection de vins soignée.',maps:shared.osteria075},
   {name:'Il Giardinetto',type:'Restaurant & pizzeria',zone:'Marghera',description:'Pizzas, plats de pâtes et agréable jardin à l’arrière, particulièrement plaisant les soirs d’été.',maps:shared.giardinetto},
   {name:'Marciano Pub Marghera',type:'Pub & cuisine décontractée',zone:'Marghera',description:'Une adresse simple pour une soirée détendue, avec bières et plats adaptés aux amis et aux groupes.',maps:shared.marciano},
  ]},
  {title:'Manger à Venise',places:[
   {name:'Trattoria alla Madonna',type:'Cuisine vénitienne',zone:'Rialto',description:'Une trattoria historique pour goûter la cuisine vénitienne traditionnelle, notamment les poissons et fruits de mer.',maps:commonMaps.madonna},
   {name:'Paradiso Perduto',type:'Osteria & musique',zone:'Cannaregio',description:'Une adresse historique et animée, connue pour sa cuisine, son atmosphère conviviale et sa musique.',maps:commonMaps.paradiso},
   {name:'Ristorante Lineadombra',type:'Restaurant',zone:'Dorsoduro',description:'Une option plus raffinée avec terrasse au bord du canal, idéale pour un dîner spécial.',maps:commonMaps.lineadombra},
  ]},
  {title:'Petit-déjeuner & pâtisseries',places:[{name:'Pasticceria Vanin',type:'Pâtisserie',zone:'Marghera',description:'Pâtisserie artisanale idéale pour un croissant et un cappuccino avant de partir à Venise.',maps:shared.vanin},{name:'Pasticceria Danieli',type:'Pâtisserie',zone:'Marghera',description:'Une référence locale avec un grand choix de pâtisseries fraîches et de produits pour le petit-déjeuner.',maps:shared.danieli}]},
  {title:'Apéritifs, cicchetti & cocktails',places:[{name:'Terrazza Aperol',type:'Apéritif & restauration',zone:'Campo Santo Stefano',description:'Une terrasse au cœur de Venise pour un apéritif ou un cocktail avec vue sur Campo Santo Stefano.',maps:commonMaps.aperol},{name:'Il Mercante',type:'Bar à cocktails',zone:'Venise',description:'Un bar à cocktails intime pour des créations originales dans une ambiance soignée.',maps:commonMaps.mercante},{name:'Il Santo Bevitore',type:'Pub & bières',zone:'Cannaregio',description:'Un pub accueillant pour une pause informelle et une bonne sélection de bières.',maps:commonMaps.santo},{name:'Ombra del Leone',type:'Apéritif & bar à vins',zone:'San Marco',description:'Une terrasse donnant sur le bassin de Saint-Marc, idéale pour un spritz ou un verre de vin.',maps:commonMaps.ombra}]},
  {title:'Pizza & à emporter',places:[{name:'Pizzalonga Away Marghera',type:'Pizza à emporter',zone:'Marghera',description:'Une solution pratique pour dîner à l’appartement ; la pizza au mètre est parfaite à partager.',maps:shared.pizzalonga}]},
 ],services:[
  {title:'Supermarchés',places:[{name:'MEGA Supermercato',type:'Supermarché',zone:'Marghera',description:'Un supermarché à Marghera, pratique pour faire les courses pendant le séjour.',maps:shared.mega},{name:'LIDL',type:'Supermarché',zone:'Marghera',description:'Un grand supermarché pratique pour faire toutes les courses du séjour.',maps:shared.lidl}]},
  {title:'Marché local',places:[{name:'Marché de Marghera',type:'Marché',zone:'Marghera',description:'Le marché de Marghera a lieu le mardi et le samedi matin, avec produits frais, fromages, vêtements et autres stands.',maps:commonMaps.market}]},
  {title:'Pharmacies',places:[{name:'Farmacia Dr. Max',type:'Pharmacie',zone:'Marghera',description:'Une pharmacie à Marghera pour les besoins de santé courants pendant le séjour.',maps:shared.drmax},{name:'Pharmacies de garde',type:'Service en ligne',zone:'Venise',description:'Pour trouver une pharmacie ouverte la nuit, le dimanche ou les jours fériés.',website:shared.pharmacies}]},
  {title:'Animaux',places:[{name:'L’Arca di Noè',type:'Animalerie & toilettage',zone:'Marghera',description:'Animalerie et toilettage à Marghera avec nourriture, accessoires, muselières, laisses et jouets. Des gamelles et un couchage sont déjà fournis dans les appartements Marghera Venice Apartments.',maps:shared.petshop},{name:'Ambulatorio Veterinario Associato Concordia',type:'Clinique vétérinaire',zone:'Marghera',description:'Clinique vétérinaire à Marghera pour les consultations et besoins de votre animal pendant le séjour.',maps:shared.vet}]},
  {title:'Salle de sport / activités',places:[{name:'Anytime Fitness',type:'Salle de sport',zone:'Marghera',description:'Salle de sport moderne accessible 24h/24.',maps:commonMaps.anytime},{name:'Piscina Comunale di Marghera',type:'Piscine',zone:'Marghera',description:'Une option pratique pour nager avec possibilité d’entrée à la journée.',maps:commonMaps.pool},{name:'Green Garden Village',type:'Centre sportif',zone:'Marghera',description:'Tennis, padel, football et piscines, également adapté aux familles.',maps:commonMaps.green},{name:'Golf Club Venezia',type:'Golf',zone:'Alberoni, Lido de Venise',description:'Parcours de golf historique à Alberoni pour ajouter une journée sportive au séjour. Vérifiez accès, réservation et disponibilité avant de partir.',maps:commonMaps.golf}]},
  {title:'Autres services utiles',places:[{name:'UniCredit',type:'Banque / distributeur',zone:'Via Cesare Rossarol, Marghera',description:'Agence bancaire dans le secteur de Via Cesare Rossarol. Vérifiez sur Maps la disponibilité du distributeur et les horaires.',maps:commonMaps.bank},{name:'Poste Italiane',type:'Bureau de poste',zone:'Marghera',description:'Bureau de poste de Marghera pour les envois et services postaux.',maps:commonMaps.post},{name:'Bureau de tabac',type:'Tabac & services',zone:'Marghera',description:'Ouvrez Maps pour trouver le bureau de tabac le plus proche pour tabac, timbres fiscaux et autres services.',maps:commonMaps.tobacconist},{name:'Stations-service',type:'Carburant',zone:'Marghera',description:'Si vous voyagez en voiture, ouvrez Maps pour trouver la station-service la plus pratique selon votre itinéraire.',maps:commonMaps.fuel}]},
  {title:'Urgences & transports',places:[{name:'Numéro d’urgence européen 112',type:'Urgence',zone:'Italie / UE',description:'Numéro unique européen pour les urgences médicales, la police, les Carabinieri et les pompiers.'},{name:'Ospedale dell’Angelo',type:'Urgences',zone:'Mestre',description:'Le principal hôpital de la zone, avec service d’urgences.',maps:commonMaps.hospital},{name:'Radio Taxi Venezia',type:'Taxi',zone:'Venise / Mestre',description:'Service de taxi local. Téléphone : 041 5964.'}]},
 ]},
 es:{food:[
  {title:'Comer en Marghera',places:[{name:'Osteria Al Diplomatico',type:'Osteria y cicchetti',zone:'Marghera',description:'Un lugar muy conocido por sus cicchetti venecianos y su ambiente local e informal.',maps:shared.diplomatico},{name:'Osteria 0.75',type:'Cocina veneciana contemporánea',zone:'Marghera',description:'Tradición veneciana reinterpretada con un toque moderno y una cuidada selección de vinos.',maps:shared.osteria075},{name:'Il Giardinetto',type:'Restaurante y pizzería',zone:'Marghera',description:'Pizza, platos de pasta y un agradable jardín trasero, especialmente recomendable en las noches de verano.',maps:shared.giardinetto},{name:'Marciano Pub Marghera',type:'Pub y cocina informal',zone:'Marghera',description:'Una opción informal para una noche relajada, con cervezas y comida para amigos y grupos.',maps:shared.marciano}]},
  {title:'Comer en Venecia',places:[{name:'Trattoria alla Madonna',type:'Cocina veneciana',zone:'Rialto',description:'Una trattoria histórica para probar platos venecianos tradicionales, especialmente pescado y marisco.',maps:commonMaps.madonna},{name:'Paradiso Perduto',type:'Osteria y música',zone:'Cannaregio',description:'Un local histórico y animado, conocido por su comida, ambiente acogedor y música.',maps:commonMaps.paradiso},{name:'Ristorante Lineadombra',type:'Restaurante',zone:'Dorsoduro',description:'Una opción más elegante con terraza junto al canal, ideal para una cena especial o romántica.',maps:commonMaps.lineadombra}]},
  {title:'Desayuno y pastelerías',places:[{name:'Pasticceria Vanin',type:'Pastelería',zone:'Marghera',description:'Pastelería artesanal recomendada para tomar un croissant y un cappuccino antes de ir a Venecia.',maps:shared.vanin},{name:'Pasticceria Danieli',type:'Pastelería',zone:'Marghera',description:'Un clásico local con una amplia selección de dulces frescos y productos de desayuno.',maps:shared.danieli}]},
  {title:'Aperitivos, cicchetti y cócteles',places:[{name:'Terrazza Aperol',type:'Aperitivo y restauración',zone:'Campo Santo Stefano',description:'Una terraza en el centro de Venecia para aperitivos y cócteles con vistas a Campo Santo Stefano.',maps:commonMaps.aperol},{name:'Il Mercante',type:'Coctelería',zone:'Venecia',description:'Un bar íntimo para disfrutar de cócteles creativos en un ambiente cuidado.',maps:commonMaps.mercante},{name:'Il Santo Bevitore',type:'Pub y cervezas',zone:'Cannaregio',description:'Un pub acogedor para una pausa informal y una buena selección de cervezas.',maps:commonMaps.santo},{name:'Ombra del Leone',type:'Aperitivo y vinoteca',zone:'San Marco',description:'Una terraza con vistas a la cuenca de San Marcos, ideal para un spritz o una copa de vino.',maps:commonMaps.ombra}]},
  {title:'Pizza y comida para llevar',places:[{name:'Pizzalonga Away Marghera',type:'Pizza para llevar',zone:'Marghera',description:'Una solución cómoda para cenar en el apartamento; la pizza al metro es perfecta para compartir.',maps:shared.pizzalonga}]},
 ],services:[
  {title:'Supermercados',places:[{name:'MEGA Supermercato',type:'Supermercado',zone:'Marghera',description:'Supermercado en Marghera, práctico para hacer una compra completa durante la estancia.',maps:shared.mega},{name:'LIDL',type:'Supermercado',zone:'Marghera',description:'Un supermercado grande para hacer una compra completa durante la estancia.',maps:shared.lidl}]},
  {title:'Mercado local',places:[{name:'Mercado de Marghera',type:'Mercado',zone:'Marghera',description:'El mercado local de Marghera se celebra los martes y sábados por la mañana, con productos frescos, quesos, ropa y otros puestos.',maps:commonMaps.market}]},
  {title:'Farmacias',places:[{name:'Farmacia Dr. Max',type:'Farmacia',zone:'Marghera',description:'Farmacia en Marghera para necesidades de salud habituales durante la estancia.',maps:shared.drmax},{name:'Farmacias de guardia',type:'Servicio online',zone:'Venecia',description:'Para encontrar una farmacia abierta por la noche, los domingos o festivos.',website:shared.pharmacies}]},
  {title:'Mascotas',places:[{name:'L’Arca di Noè',type:'Tienda de mascotas y peluquería',zone:'Marghera',description:'Tienda de mascotas y peluquería en Marghera con comida, accesorios, bozales, correas y juguetes. En los apartamentos Marghera Venice Apartments ya ofrecemos cuencos y cama para mascotas.',maps:shared.petshop},{name:'Ambulatorio Veterinario Associato Concordia',type:'Clínica veterinaria',zone:'Marghera',description:'Clínica veterinaria en Marghera para consultas y necesidades de la mascota durante la estancia.',maps:shared.vet}]},
  {title:'Gimnasio / deporte',places:[{name:'Anytime Fitness',type:'Gimnasio',zone:'Marghera',description:'Gimnasio moderno con acceso las 24 horas.',maps:commonMaps.anytime},{name:'Piscina Comunale di Marghera',type:'Piscina',zone:'Marghera',description:'Una opción cómoda para nadar con posibilidad de entrada diaria.',maps:commonMaps.pool},{name:'Green Garden Village',type:'Centro deportivo',zone:'Marghera',description:'Tenis, pádel, fútbol y piscinas, también adecuado para familias.',maps:commonMaps.green},{name:'Golf Club Venezia',type:'Golf',zone:'Alberoni, Lido de Venecia',description:'Campo de golf histórico en Alberoni para quienes quieran añadir una jornada deportiva a la estancia. Comprueba acceso, reserva y disponibilidad antes de ir.',maps:commonMaps.golf}]},
  {title:'Otros servicios útiles',places:[{name:'UniCredit',type:'Banco / cajero',zone:'Via Cesare Rossarol, Marghera',description:'Sucursal bancaria en la zona de Via Cesare Rossarol. Comprueba en Maps la disponibilidad del cajero y los horarios.',maps:commonMaps.bank},{name:'Poste Italiane',type:'Oficina de correos',zone:'Marghera',description:'Oficina de correos de Marghera para envíos y servicios postales.',maps:commonMaps.post},{name:'Estanco',type:'Tabaco y servicios',zone:'Marghera',description:'Abre Maps para encontrar el estanco más cercano para tabaco, sellos fiscales y otros servicios.',maps:commonMaps.tobacconist},{name:'Gasolineras',type:'Combustible',zone:'Marghera',description:'Si viajas en coche, abre Maps para encontrar la gasolinera más práctica según tu ruta.',maps:commonMaps.fuel}]},
  {title:'Emergencias y transporte',places:[{name:'Número europeo de emergencias 112',type:'Emergencias',zone:'Italia / UE',description:'Número único europeo para emergencias médicas, Policía, Carabinieri y Bomberos.'},{name:'Ospedale dell’Angelo',type:'Urgencias',zone:'Mestre',description:'El principal hospital de la zona, con servicio de urgencias.',maps:commonMaps.hospital},{name:'Radio Taxi Venezia',type:'Taxi',zone:'Venecia / Mestre',description:'Servicio local de taxi. Teléfono: 041 5964.'}]},
 ]},
 zh:{food:[
  {title:'马尔盖拉餐饮',places:[{name:'Osteria Al Diplomatico',type:'小酒馆与 cicchetti',zone:'马尔盖拉',description:'当地很受欢迎的威尼斯小吃店，适合体验轻松而地道的 cicchetti 氛围。',maps:shared.diplomatico},{name:'Osteria 0.75',type:'现代威尼斯料理',zone:'马尔盖拉',description:'以现代方式重新演绎威尼斯传统菜肴，并搭配精心挑选的葡萄酒。',maps:shared.osteria075},{name:'Il Giardinetto',type:'餐厅与披萨店',zone:'马尔盖拉',description:'提供披萨、意面等菜品，后院花园在夏季夜晚尤其舒适。',maps:shared.giardinetto},{name:'Marciano Pub Marghera',type:'酒吧与休闲餐饮',zone:'马尔盖拉',description:'适合朋友或小团体放松聚会，可享用啤酒和简单餐食。',maps:shared.marciano}]},
  {title:'威尼斯餐饮',places:[{name:'Trattoria alla Madonna',type:'威尼斯传统菜',zone:'Rialto',description:'历史悠久的威尼斯餐馆，适合品尝传统菜肴，尤其是鱼类和海鲜。',maps:commonMaps.madonna},{name:'Paradiso Perduto',type:'小酒馆与音乐',zone:'Cannaregio',description:'气氛热闹的老字号餐馆，以美食、轻松氛围和音乐而闻名。',maps:commonMaps.paradiso},{name:'Ristorante Lineadombra',type:'餐厅',zone:'Dorsoduro',description:'较为精致的选择，拥有临运河露台，适合特别或浪漫的晚餐。',maps:commonMaps.lineadombra}]},
  {title:'早餐与甜点店',places:[{name:'Pasticceria Vanin',type:'甜点店',zone:'马尔盖拉',description:'手工甜点店，适合在前往威尼斯前享用可颂和卡布奇诺。',maps:shared.vanin},{name:'Pasticceria Danieli',type:'甜点店',zone:'马尔盖拉',description:'当地很受欢迎的甜点店，提供丰富的新鲜糕点和早餐选择。',maps:shared.danieli}]},
  {title:'开胃酒、cicchetti 与鸡尾酒',places:[{name:'Terrazza Aperol',type:'开胃酒与餐饮',zone:'Campo Santo Stefano',description:'位于威尼斯市中心的露台，可一边享用开胃酒或鸡尾酒，一边欣赏 Campo Santo Stefano。',maps:commonMaps.aperol},{name:'Il Mercante',type:'鸡尾酒吧',zone:'威尼斯',description:'环境精致而私密，适合品尝创意鸡尾酒。',maps:commonMaps.mercante},{name:'Il Santo Bevitore',type:'酒吧与啤酒',zone:'Cannaregio',description:'氛围轻松的酒吧，适合短暂休息并品尝多种啤酒。',maps:commonMaps.santo},{name:'Ombra del Leone',type:'开胃酒与葡萄酒吧',zone:'San Marco',description:'露台俯瞰圣马可湾，非常适合来一杯 Spritz 或葡萄酒。',maps:commonMaps.ombra}]},
  {title:'披萨与外带',places:[{name:'Pizzalonga Away Marghera',type:'外带披萨',zone:'马尔盖拉',description:'适合带回公寓享用；按米制作的长披萨尤其适合多人分享。',maps:shared.pizzalonga}]},
 ],services:[
  {title:'超市',places:[{name:'MEGA Supermercato',type:'超市',zone:'马尔盖拉',description:'位于马尔盖拉，适合住宿期间采购日常用品。',maps:shared.mega},{name:'LIDL',type:'超市',zone:'马尔盖拉',description:'大型超市，适合住宿期间采购日常用品。',maps:shared.lidl}]},
  {title:'当地市场',places:[{name:'马尔盖拉当地市场',type:'市场',zone:'马尔盖拉',description:'马尔盖拉当地市场每周二和周六上午开放，可购买新鲜食品、奶酪、服装等。',maps:commonMaps.market}]},
  {title:'药房',places:[{name:'Farmacia Dr. Max',type:'药房',zone:'马尔盖拉',description:'位于马尔盖拉的药房，可满足住宿期间常见的健康需求。',maps:shared.drmax},{name:'值班药房',type:'在线服务',zone:'威尼斯',description:'可查询夜间、周日或节假日营业的药房。',website:shared.pharmacies}]},
  {title:'宠物',places:[{name:'L’Arca di Noè',type:'宠物用品店与美容',zone:'马尔盖拉',description:'马尔盖拉的宠物用品店与美容服务，提供宠物食品、配件、口套、牵引绳和玩具。Marghera Venice Apartments 的公寓内已提供食盆和宠物床。',maps:shared.petshop},{name:'Ambulatorio Veterinario Associato Concordia',type:'兽医诊所',zone:'马尔盖拉',description:'位于马尔盖拉的兽医诊所，可满足住宿期间宠物就诊需求。',maps:shared.vet}]},
  {title:'健身 / 运动',places:[{name:'Anytime Fitness',type:'健身房',zone:'马尔盖拉',description:'现代健身房，全天 24 小时开放。',maps:commonMaps.anytime},{name:'Piscina Comunale di Marghera',type:'游泳馆',zone:'马尔盖拉',description:'适合游泳锻炼，并可购买单日入场票。',maps:commonMaps.pool},{name:'Green Garden Village',type:'体育中心',zone:'马尔盖拉',description:'提供网球、板式网球、足球和泳池，也适合家庭活动。',maps:commonMaps.green},{name:'Golf Club Venezia',type:'高尔夫',zone:'Alberoni，威尼斯丽都',description:'位于 Alberoni 的历史高尔夫球场，适合想在旅途中安排运动日的客人。出发前请确认入场、预约和可用情况。',maps:commonMaps.golf}]},
  {title:'其他实用服务',places:[{name:'UniCredit',type:'银行 / ATM',zone:'Via Cesare Rossarol, 马尔盖拉',description:'位于 Via Cesare Rossarol 一带的银行网点。请在 Maps 中确认 ATM 当前可用情况和营业时间。',maps:commonMaps.bank},{name:'Poste Italiane',type:'邮局',zone:'马尔盖拉',description:'马尔盖拉的邮局，可办理邮寄和其他邮政服务。',maps:commonMaps.post},{name:'烟草店',type:'烟草与日常服务',zone:'马尔盖拉',description:'打开 Maps 可查找最近的烟草店，购买烟草、印花税票等。',maps:commonMaps.tobacconist},{name:'加油站',type:'燃油',zone:'马尔盖拉',description:'自驾出行时，可打开 Maps 根据路线查找最方便的加油站。',maps:commonMaps.fuel}]},
  {title:'紧急情况与交通',places:[{name:'欧洲紧急电话 112',type:'紧急情况',zone:'意大利 / 欧盟',description:'欧洲统一紧急电话号码，可联系医疗急救、警察、Carabinieri 和消防部门。'},{name:'Ospedale dell’Angelo',type:'急诊',zone:'梅斯特雷',description:'本地区主要医院，设有急诊科。',maps:commonMaps.hospital},{name:'Radio Taxi Venezia',type:'出租车',zone:'威尼斯 / 梅斯特雷',description:'当地出租车服务。电话：041 5964。'}]},
 ]}
};

export default function PublicLocalGuide({lang='it',kind}:{lang?:Lang;kind:'food'|'services'}){
 const t=pages[lang];
 const sections=lang==='it'?(kind==='food'?t.food:t.services):(kind==='food'?(lang==='en'?translatedFood.en:translatedOther[lang as 'de'|'fr'|'es'|'zh'].food):(lang==='en'?translatedServices.en:translatedOther[lang as 'de'|'fr'|'es'|'zh'].services));
 const title=kind==='food'?t.foodTitle:t.servicesTitle;
 const lead=kind==='food'?t.foodLead:t.servicesLead;
 const home=lang==='it'?'/':`/${lang}`;
 return <><Header lang={lang}/><main><section className="bg-navy px-5 pb-16 pt-36 text-white lg:px-8"><div className="mx-auto max-w-7xl"><nav className="mb-6 flex gap-2 text-sm text-white/70"><Link href={home}>{t.home}</Link><span>›</span><span className="text-gold">{title}</span></nav><p className="text-xs font-black uppercase tracking-[.22em] text-gold">Marghera Venice Apartments</p><h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">{title}</h1><p className="mt-6 max-w-3xl text-xl text-white/75">{lead}</p></div></section><section className="bg-cream py-16"><div className="mx-auto max-w-7xl space-y-14 px-5 lg:px-8">{sections.map(section=><section key={section.title}><h2 className="font-serif text-4xl text-navy md:text-5xl">{section.title}</h2><div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{section.places.map(p=><article key={`${section.title}-${p.name}`} className="rounded-[2rem] bg-white p-6 shadow-soft"><div className="flex flex-wrap gap-2 text-xs font-black uppercase tracking-[.14em]"><span className="text-gold">{p.type}</span>{p.zone&&<span className="text-navy/45">• {p.zone}</span>}</div><h3 className="mt-3 font-serif text-3xl text-navy">{p.name}</h3><p className="mt-3 leading-7 text-slate-600">{p.description}</p><div className="mt-5 flex flex-wrap gap-2">{p.maps&&<a href={p.maps} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full bg-navy px-5 py-3 text-sm font-bold text-white">{t.maps} ↗</a>}{p.website&&<a href={p.website} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full bg-gold px-5 py-3 text-sm font-bold text-navy">{t.website} ↗</a>}</div></article>)}</div></section>)}<p className="rounded-2xl border border-navy/10 bg-white p-5 text-sm text-slate-600">{t.note}</p>{kind==='food'&&<section className="rounded-[2rem] bg-navy p-7 text-white md:p-9"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">{foodRelated[lang].eyebrow}</p><h2 className="mt-3 font-serif text-4xl">{foodRelated[lang].title}</h2><div className="mt-6 flex flex-wrap gap-3">{foodRelated[lang].items.map(([label,href])=><Link key={href} href={href} className="rounded-full bg-gold px-5 py-3 font-bold text-navy">{label} →</Link>)}</div></section>}</div></section></main><Footer lang={lang}/></>;
}
