import type {CultureLang,CulturePlace} from '@/data/culturePlaces';
import {bookingLabel,hoursLabel,priceLabel} from '@/data/cultureTranslations';

type Narrative={lead:string;why:string;curiosity:string;getting:string;tip:string};

const cityTransit:Record<CultureLang,{venice:string;veneto:string}>={
 it:{venice:'A Venezia considera sempre anche il tempo reale a piedi e, per gli spostamenti più lunghi, le linee ACTV.',veneto:'Per le escursioni in Veneto controlla insieme tempi di viaggio, parcheggio o collegamenti ferroviari e orari dell’ultima visita.'},
 en:{venice:'In Venice, factor in real walking time and ACTV services for longer journeys.',veneto:'For Veneto day trips, check travel time, parking or rail connections and the last admission time together.'},
 de:{venice:'In Venedig sollten reale Gehzeiten und für längere Strecken auch ACTV-Verbindungen eingeplant werden.',veneto:'Für Ausflüge in Venetien sollten Fahrzeit, Parken oder Bahnverbindung und letzter Einlass gemeinsam geprüft werden.'},
 fr:{venice:'À Venise, tenez compte du vrai temps de marche et des lignes ACTV pour les trajets plus longs.',veneto:'Pour une excursion en Vénétie, vérifiez ensemble le trajet, le stationnement ou le train et l’heure de dernière entrée.'},
 es:{venice:'En Venecia, cuenta con el tiempo real a pie y con ACTV para los trayectos más largos.',veneto:'Para una excursión por el Véneto, revisa a la vez el tiempo de viaje, aparcamiento o tren y la hora de última entrada.'},
 zh:{venice:'在威尼斯要把实际步行时间算进去，较远路段还要结合 ACTV 水上巴士班次。',veneto:'前往威尼托其他城市时，建议同时确认交通时间、停车或火车衔接以及最后入场时间。'}
};

const kindLead={
 it:{museum:(p:CulturePlace)=>`${p.name} non è soltanto una tappa da “spuntare”: è uno dei luoghi che aiutano a leggere meglio ${p.city} attraverso opere, spazi e storia.`,church:(p:CulturePlace)=>`${p.name} merita attenzione non solo come edificio religioso, ma come parte della storia artistica e urbana di ${p.city}.`,monument:(p:CulturePlace)=>`${p.name} permette di leggere una parte concreta della storia di ${p.city}: architettura, funzioni e trasformazioni diventano visibili nello stesso luogo.`,panorama:(p:CulturePlace)=>`${p.name} vale soprattutto per il cambio di prospettiva: vedere ${p.city} dall’alto aiuta a capirne distanze, acqua e forma urbana.`},
 en:{museum:(p:CulturePlace)=>`${p.name} is more than another museum stop: it helps you read ${p.city} through its collections, spaces and history.`,church:(p:CulturePlace)=>`${p.name} matters not only as a place of worship but as part of the artistic and urban history of ${p.city}.`,monument:(p:CulturePlace)=>`${p.name} makes part of ${p.city}’s history tangible, bringing architecture, function and later transformations into one place.`,panorama:(p:CulturePlace)=>`${p.name} is mainly about perspective: seeing ${p.city} from above makes its scale, water and urban form easier to understand.`},
 de:{museum:(p:CulturePlace)=>`${p.name} ist mehr als ein weiterer Museumsstopp: Sammlungen, Räume und Geschichte helfen dabei, ${p.city} besser zu verstehen.`,church:(p:CulturePlace)=>`${p.name} ist nicht nur ein Sakralbau, sondern Teil der Kunst- und Stadtgeschichte von ${p.city}.`,monument:(p:CulturePlace)=>`${p.name} macht einen Teil der Geschichte von ${p.city} unmittelbar sichtbar – durch Architektur, frühere Funktion und spätere Veränderungen.`,panorama:(p:CulturePlace)=>`${p.name} lebt vom Perspektivwechsel: Von oben werden Maßstab, Wasser und Stadtform von ${p.city} deutlich verständlicher.`},
 fr:{museum:(p:CulturePlace)=>`${p.name} n’est pas seulement une étape de musée : collections, espaces et histoire aident à mieux comprendre ${p.city}.`,church:(p:CulturePlace)=>`${p.name} compte autant comme lieu de culte que comme fragment de l’histoire artistique et urbaine de ${p.city}.`,monument:(p:CulturePlace)=>`${p.name} rend une partie de l’histoire de ${p.city} très concrète, entre architecture, fonction d’origine et transformations.`,panorama:(p:CulturePlace)=>`${p.name} vaut surtout pour le changement de perspective : vue d’en haut, la forme de ${p.city} et son rapport à l’eau deviennent plus lisibles.`},
 es:{museum:(p:CulturePlace)=>`${p.name} es algo más que otra visita de museo: sus colecciones, espacios e historia ayudan a comprender mejor ${p.city}.`,church:(p:CulturePlace)=>`${p.name} interesa no solo como lugar religioso, sino como parte de la historia artística y urbana de ${p.city}.`,monument:(p:CulturePlace)=>`${p.name} hace visible una parte concreta de la historia de ${p.city}, reuniendo arquitectura, función original y transformaciones posteriores.`,panorama:(p:CulturePlace)=>`${p.name} merece la pena sobre todo por el cambio de perspectiva: desde arriba se entiende mejor la escala, el agua y la forma urbana de ${p.city}.`},
 zh:{museum:(p:CulturePlace)=>`${p.name}不只是“再去一个博物馆”，它通过馆藏、空间与历史帮助你真正理解${p.city}。`,church:(p:CulturePlace)=>`${p.name}不仅是宗教场所，也是理解${p.city}艺术与城市历史的一部分。`,monument:(p:CulturePlace)=>`${p.name}把${p.city}的一段历史变得具体可见：建筑、原有功能与后来的变化都集中在同一地点。`,panorama:(p:CulturePlace)=>`${p.name}最大的价值是换一个角度看${p.city}：从高处更容易理解城市尺度、水域与整体形态。`}
} as const;

const special:Partial<Record<string,Partial<Record<CultureLang,{lead:string;why:string}>>>>={
 'palazzo-ducale':{
  it:{lead:'Palazzo Ducale è il luogo in cui potere politico, giustizia e rappresentazione pubblica della Serenissima diventano architettura. Non è soltanto un palazzo bellissimo: è una chiave per capire come funzionava Venezia.',why:'Sale istituzionali, appartamenti, prigioni e Ponte dei Sospiri raccontano parti molto diverse dello stesso sistema di governo. La visita funziona meglio se la si legge come un percorso attraverso il potere veneziano, non come una successione di sale decorate.'},
  en:{lead:'The Doge’s Palace turns the politics, justice and public image of the Venetian Republic into architecture. It is not simply a beautiful palace, but one of the clearest keys to understanding how Venice worked.',why:'Institutional rooms, private apartments, prisons and the Bridge of Sighs reveal very different sides of the same system of government. The visit makes more sense as a journey through Venetian power than as a sequence of decorated rooms.'}
 },
 'basilica-san-marco':{
  it:{lead:'San Marco concentra in pochi metri secoli di rapporti tra Venezia, Bisanzio, commercio e potere. I mosaici dorati sono spettacolari, ma il vero interesse nasce dal modo in cui architettura, reliquie e simboli costruiscono l’identità della città.',why:'Guarda la Basilica come un insieme: mosaici, pavimenti, Pala d’Oro, Museo e Loggia dei Cavalli raccontano fasi e funzioni diverse. Se il tempo è poco scegli in anticipo quali ambienti aggiuntivi vuoi davvero vedere.'},
  en:{lead:'St Mark’s Basilica condenses centuries of links between Venice, Byzantium, trade and political power into a remarkably small area. The gold mosaics are spectacular, but the deeper interest lies in how architecture, relics and symbols build the city’s identity.',why:'Read the basilica as a whole: mosaics, floors, the Pala d’Oro, museum and Horses’ Loggia tell different parts of its story. If time is limited, decide in advance which optional areas matter most to you.'}
 },
 'peggy-guggenheim':{
  it:{lead:'La Collezione Peggy Guggenheim funziona perché unisce grandi nomi del Novecento a una casa affacciata sul Canal Grande. La scala è più raccolta di molti grandi musei e rende la visita leggibile anche a chi non è specialista di arte moderna.',why:'Cubismo, surrealismo, astrattismo ed espressionismo americano si incontrano nelle stanze di Palazzo Venier dei Leoni e nel giardino. È un museo in cui vale la pena fermarsi davanti a poche opere invece di cercare di riconoscere tutti i nomi celebri.'},
  en:{lead:'The Peggy Guggenheim Collection works so well because major 20th-century artists are shown inside a former home on the Grand Canal. Its relatively intimate scale makes modern art approachable even for non-specialists.',why:'Cubism, Surrealism, abstraction and American post-war art meet inside Palazzo Venier dei Leoni and its garden. The museum rewards slowing down for a few works rather than trying to tick off every famous name.'}
 },
 'museo-del-vetro-murano':{
  it:{lead:'Il Museo del Vetro è il passaggio che trasforma Murano da “isola delle fornaci” a storia comprensibile: tecniche, oggetti e secoli di sperimentazione mostrano perché il vetro muranese è diventato famoso ben oltre Venezia.',why:'La visita è particolarmente utile prima o dopo una dimostrazione in fornace: ciò che si vede lavorare dal vivo acquista contesto storico, e le vetrine smettono di essere soltanto una successione di oggetti decorativi.'},
  en:{lead:'The Glass Museum turns Murano from “the island of furnaces” into a story you can actually understand: techniques, objects and centuries of experimentation explain why Murano glass became famous far beyond Venice.',why:'It is especially useful before or after a furnace demonstration. Seeing the historical techniques and objects gives context to the live craft, so the displays become more than a sequence of decorative pieces.'}
 },
 'basilica-santi-maria-donato-murano':{
  it:{lead:'La Basilica dei Santi Maria e Donato è il contrappunto perfetto alle fornaci: mostra che Murano ha una storia religiosa e urbana molto più antica del turismo del vetro.',why:'Il pavimento musivo medievale, l’abside romanica e il mosaico della Madonna orante meritano una visita lenta. È uno dei luoghi migliori per capire che Murano non è semplicemente un quartiere commerciale separato da Venezia.'},
  en:{lead:'The Basilica of Santi Maria e Donato is the perfect counterpoint to Murano’s furnaces, revealing an island with a religious and urban history far older than glass tourism.',why:'Its medieval mosaic floor, Romanesque apse and image of the praying Virgin reward a slow visit. It is one of the clearest reminders that Murano is much more than a shopping district separated from Venice.'}
 },
 'basilica-santa-maria-assunta-torcello':{
  it:{lead:'Santa Maria Assunta è uno dei luoghi che spiegano perché Torcello viene definita “Venezia prima di Venezia”. La basilica conserva il ricordo di quando la Laguna Nord aveva un peso molto diverso da quello attuale.',why:'I mosaici bizantini, soprattutto il grande Giudizio Universale, sono il cuore della visita. Se il campanile è accessibile, la vista completa il racconto mostrando una laguna quasi orizzontale, molto diversa dal centro storico.'},
  en:{lead:'Santa Maria Assunta helps explain why Torcello is often described as “Venice before Venice”. The basilica preserves the memory of a time when the northern lagoon had a very different importance from today.',why:'The Byzantine mosaics, especially the monumental Last Judgement, are the core of the visit. If the bell tower is accessible, the view completes the story with a remarkably open panorama of the northern lagoon.'}
 },
 'cappella-scrovegni':{
  it:{lead:'La Cappella degli Scrovegni è piccola nelle dimensioni ma enorme nella storia dell’arte: il ciclo di Giotto cambia il modo di raccontare spazio, emozioni e figure all’inizio del Trecento.',why:'La visita è contingentata e breve, quindi arrivare con un minimo di contesto fa una grande differenza. Osserva soprattutto come le scene dialogano tra loro sulle pareti e non soltanto i singoli episodi più famosi.'},
  en:{lead:'The Scrovegni Chapel is small in size but enormous in art history: Giotto’s fresco cycle changed the way space, emotion and human figures could be represented in the early 14th century.',why:'Visits are timed and relatively short, so a little context beforehand makes a real difference. Look at how the scenes speak to one another across the walls, rather than focusing only on the most famous individual panels.'}
 },
 'arena-verona':{
  it:{lead:'L’Arena non è soltanto il simbolo di Verona o il palcoscenico dell’opera estiva: è un anfiteatro romano che continua a essere usato dopo quasi duemila anni.',why:'Durante la visita diurna concentrati sulla struttura, sulle gradinate e sul rapporto con Piazza Bra. Vederla vuota aiuta a leggere l’edificio in modo molto diverso rispetto a una serata di spettacolo.'},
  en:{lead:'The Arena is not just Verona’s symbol or the stage for summer opera: it is a Roman amphitheatre that has continued to be used for almost two thousand years.',why:'On a daytime visit, focus on structure, seating and the relationship with Piazza Bra. Seeing the amphitheatre empty reveals the building very differently from an evening performance.'}
 },
 'teatro-olimpico':{
  it:{lead:'Il Teatro Olimpico è uno dei luoghi in cui l’architettura rinascimentale diventa quasi scenografia permanente. Palladio progettò il teatro e Vincenzo Scamozzi completò le celebri prospettive lignee.',why:'Il punto da osservare non è soltanto la cavea: guarda il rapporto tra scena, statue e finte strade prospettiche. È un ambiente relativamente compatto, ma pieno di soluzioni che cambiano a seconda del punto da cui lo si guarda.'},
  en:{lead:'The Teatro Olimpico is where Renaissance architecture becomes almost permanent stage design. Palladio designed the theatre, while Vincenzo Scamozzi completed its famous perspective streets.',why:'Do not focus only on the seating: look at the relationship between stage, statues and the illusionistic streets behind it. The space is compact, but changes dramatically depending on where you stand.'}
 }
};

function fallbackWhy(place:CulturePlace,lang:CultureLang){
 const focus={
  it:{museum:'La visita funziona meglio scegliendo alcuni nuclei della collezione e osservando anche l’edificio che li ospita.',church:'Dedica tempo all’interno e ai dettagli artistici, ricordando che resta prima di tutto un luogo di culto.',monument:'Osserva come l’edificio dialoga con lo spazio urbano: spesso il contesto spiega quanto l’architettura stessa.',panorama:'Non limitarti alla fotografia: prova a riconoscere campanili, canali, assi urbani e isole per orientarti meglio.'},
  en:{museum:'The visit works best when you choose a few parts of the collection and also pay attention to the building that houses them.',church:'Give the interior and artworks time, while remembering that this remains first and foremost a place of worship.',monument:'Notice how the building relates to its surroundings: the urban context often explains as much as the architecture itself.',panorama:'Do more than take a photograph: identify bell towers, canals, urban axes and islands to understand the city better.'},
  de:{museum:'Am besten konzentriert man sich auf einige Bereiche der Sammlung und bezieht auch das Museumsgebäude selbst in den Besuch ein.',church:'Nehmen Sie sich Zeit für Innenraum und Kunstwerke und denken Sie daran, dass dies in erster Linie ein Gotteshaus ist.',monument:'Achten Sie auf die Beziehung zwischen Gebäude und Umgebung: Der Stadtraum erklärt oft ebenso viel wie die Architektur.',panorama:'Nicht nur fotografieren: Versuchen Sie Glockentürme, Kanäle, Stadtachsen und Inseln zu erkennen und sich räumlich zu orientieren.'},
  fr:{museum:'La visite gagne à se concentrer sur quelques ensembles de la collection tout en observant l’architecture qui les abrite.',church:'Prenez le temps d’observer l’intérieur et les œuvres, sans oublier qu’il s’agit avant tout d’un lieu de culte.',monument:'Regardez aussi la relation entre le bâtiment et son environnement : le contexte urbain explique souvent autant que l’architecture.',panorama:'Ne vous contentez pas de la photo : repérez clochers, canaux, axes urbains et îles pour mieux comprendre le territoire.'},
  es:{museum:'La visita funciona mejor si eliges algunas partes de la colección y prestas atención también al edificio que la alberga.',church:'Dedica tiempo al interior y a las obras, recordando que ante todo sigue siendo un lugar de culto.',monument:'Observa la relación entre el edificio y su entorno: muchas veces el contexto urbano explica tanto como la propia arquitectura.',panorama:'No te limites a hacer una foto: intenta reconocer campanarios, canales, ejes urbanos e islas para orientarte mejor.'},
  zh:{museum:'参观时不必试图看完所有展品，选择几个重点，同时观察承载这些藏品的建筑本身，体验会更完整。',church:'给内部空间和艺术作品一些时间，同时尊重这里首先是一处宗教场所。',monument:'也要看建筑与周围城市空间的关系；很多时候，环境和建筑本身同样能解释历史。',panorama:'不要只拍照：试着辨认钟楼、运河、城市轴线和岛屿，会更容易理解整个区域。'}
 } as const;
 return focus[lang][place.kind];
}

function goodToKnow(place:CulturePlace,lang:CultureLang){
 const closed=priceLabel(place,lang).toLowerCase().includes(lang==='it'?'chius':lang==='en'?'closed':lang==='de'?'geschlossen':lang==='fr'?'fermé':lang==='es'?'cerrad':'关闭');
 if(closed) return {
  it:`Al momento la visita ordinaria non è disponibile. Conserviamo la scheda perché ${place.name} resta un luogo importante, ma prima di programmare lo spostamento verifica la data di riapertura sul sito ufficiale.`,
  en:`Regular visits are currently unavailable. We keep the entry because ${place.name} remains important, but check the official reopening date before planning a journey around it.`,
  de:`Ein regulärer Besuch ist derzeit nicht möglich. Der Eintrag bleibt bestehen, weil ${place.name} wichtig ist; prüfen Sie vor der Planung unbedingt den offiziellen Wiedereröffnungstermin.`,
  fr:`La visite normale n’est actuellement pas possible. La fiche reste utile car ${place.name} demeure important, mais vérifiez la date officielle de réouverture avant de vous déplacer.`,
  es:`La visita ordinaria no está disponible actualmente. Mantenemos la ficha porque ${place.name} sigue siendo importante, pero comprueba la fecha oficial de reapertura antes de organizar el desplazamiento.`,
  zh:`目前暂不提供常规参观。我们保留该页面，因为${place.name}仍是重要地点；专门前往之前请先确认官方重新开放日期。`
 }[lang];
 if(place.panorama) return {
  it:`Qui il meteo e la visibilità contano quasi quanto l’orario. Se il panorama è una parte importante della visita, una giornata limpida cambia davvero l’esperienza.`,
  en:`Weather and visibility matter almost as much as opening hours here. If the view is an important part of your visit, a clear day genuinely changes the experience.`,
  de:`Wetter und Sicht sind hier fast so wichtig wie die Öffnungszeiten. Wenn der Ausblick ein Hauptgrund für den Besuch ist, macht ein klarer Tag einen echten Unterschied.`,
  fr:`La météo et la visibilité comptent presque autant que les horaires. Si le panorama est important pour vous, une journée claire change réellement l’expérience.`,
  es:`El tiempo y la visibilidad cuentan casi tanto como el horario. Si el panorama es una parte importante de la visita, un día despejado cambia mucho la experiencia.`,
  zh:`这里的天气和能见度几乎和开放时间一样重要。如果观景是主要目的，晴朗天气会明显提升体验。`
 }[lang];
 if(place.booking==='required'||place.booking==='recommended') return {
  it:`La gestione degli ingressi può incidere molto sulla giornata: controlla disponibilità e fascia oraria prima di costruire intorno a ${place.name} il resto dell’itinerario.`,
  en:`Entry arrangements can shape the whole day. Check availability and time slots before building the rest of your itinerary around ${place.name}.`,
  de:`Die Einlassregelung kann den Tagesplan stark beeinflussen. Prüfen Sie Verfügbarkeit und Zeitfenster, bevor Sie den restlichen Tag um ${place.name} herum planen.`,
  fr:`Les conditions d’entrée peuvent structurer toute la journée. Vérifiez disponibilités et créneaux avant d’organiser le reste de l’itinéraire autour de ${place.name}.`,
  es:`La gestión de entradas puede condicionar todo el día. Comprueba disponibilidad y franjas horarias antes de organizar el resto del itinerario alrededor de ${place.name}.`,
  zh:`入场方式会影响整天安排。以${place.name}为核心规划行程前，先确认余票和时间段。`
 }[lang];
 return {
  it:`La parte più variabile è quella pratica: ${hoursLabel(place,lang)}. Per questo la fonte ufficiale resta sempre il riferimento finale il giorno della visita.`,
  en:`The practical details are the part most likely to change: ${hoursLabel(place,lang)}. Treat the official source as the final reference on the day of your visit.`,
  de:`Am ehesten ändern sich die praktischen Angaben: ${hoursLabel(place,lang)}. Am Besuchstag bleibt die offizielle Quelle daher der letzte Maßstab.`,
  fr:`Les informations pratiques sont celles qui changent le plus facilement : ${hoursLabel(place,lang)}. Le jour de la visite, la source officielle reste donc la référence finale.`,
  es:`La parte que más puede cambiar es la práctica: ${hoursLabel(place,lang)}. El día de la visita, la fuente oficial debe ser siempre la referencia final.`,
  zh:`最容易变化的是实用信息：${hoursLabel(place,lang)}。参观当天请始终以官方来源为最终依据。`
 }[lang];
}

function getting(place:CulturePlace,lang:CultureLang){
 const scope=place.scope==='venice'?'venice':'veneto';
 const start={
  it:`Apri Maps per il percorso esatto verso ${place.name}. ${cityTransit[lang][scope]}`,
  en:`Open Maps for the exact route to ${place.name}. ${cityTransit[lang][scope]}`,
  de:`Öffnen Sie Maps für die genaue Route zu ${place.name}. ${cityTransit[lang][scope]}`,
  fr:`Ouvrez Maps pour l’itinéraire exact vers ${place.name}. ${cityTransit[lang][scope]}`,
  es:`Abre Maps para ver la ruta exacta hasta ${place.name}. ${cityTransit[lang][scope]}`,
  zh:`打开地图查看前往${place.name}的准确路线。${cityTransit[lang][scope]}`
 }[lang];
 return start;
}
function tip(place:CulturePlace,lang:CultureLang){
 const long=/2h|2h 30m|3h|giornata|day/i.test(place.duration);
 if(long) return {it:'È una visita che merita spazio: evita di abbinarla a troppi altri ingressi importanti nella stessa mezza giornata.',en:'This visit deserves space. Avoid pairing it with too many other major admissions in the same half-day.',de:'Dieser Besuch braucht Zeit. Kombinieren Sie ihn nicht mit zu vielen weiteren großen Besichtigungen am selben Halbtag.',fr:'Cette visite mérite du temps. Évitez de l’associer à trop d’autres visites importantes dans la même demi-journée.',es:'Esta visita necesita tiempo. Evita combinarla con demasiadas visitas importantes en la misma media jornada.',zh:'这类参观需要留出足够时间，同一个半天内不要再塞入太多大型景点。'}[lang];
 if(place.family) return {it:'Con bambini alterna la visita a una pausa all’aperto: tempi realistici funzionano meglio di un programma pieno di ingressi consecutivi.',en:'With children, pair the visit with an outdoor break. Realistic timing works better than a day packed with consecutive admissions.',de:'Mit Kindern sollte nach dem Besuch eine Pause im Freien folgen. Realistische Zeiten funktionieren besser als viele Eintritte direkt hintereinander.',fr:'Avec des enfants, prévoyez une pause à l’extérieur après la visite. Un rythme réaliste fonctionne mieux qu’une succession d’entrées.',es:'Con niños, combina la visita con una pausa al aire libre. Un ritmo realista funciona mejor que encadenar muchas entradas.',zh:'带孩子时，参观后安排一段户外休息会更舒服；现实的节奏比连续安排多个室内景点更有效。'}[lang];
 return {it:'Inseriscilo nell’itinerario per un motivo preciso, non solo perché è vicino: qualità della visita e tempo a disposizione contano più del numero di tappe.',en:'Add it to the itinerary for a clear reason, not simply because it is nearby. Visit quality and available time matter more than the number of stops.',de:'Nehmen Sie den Ort aus einem klaren Grund in die Route auf – nicht nur, weil er in der Nähe liegt. Qualität und verfügbare Zeit zählen mehr als die Zahl der Stopps.',fr:'Intégrez-le au parcours pour une vraie raison, pas seulement parce qu’il est proche. La qualité de la visite et le temps disponible comptent plus que le nombre d’étapes.',es:'Inclúyelo en el itinerario por una razón concreta, no solo porque esté cerca. La calidad de la visita y el tiempo disponible importan más que el número de paradas.',zh:'把它加入行程应有明确理由，而不只是“顺路”。参观质量和可用时间比景点数量更重要。'}[lang];
}

export function cultureNarrative(place:CulturePlace,lang:CultureLang):Narrative{
 const sp=special[place.slug]?.[lang];
 return {
  lead:sp?.lead||kindLead[lang][place.kind](place),
  why:sp?.why||fallbackWhy(place,lang),
  curiosity:goodToKnow(place,lang),
  getting:getting(place,lang),
  tip:tip(place,lang)
 };
}
