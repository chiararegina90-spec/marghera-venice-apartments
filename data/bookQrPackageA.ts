import type {GuideData} from '@/data/guideTypes';
import type {SiteLang} from '@/lib/i18n';

export const packageASlugs=['torcello','museum-pass-venezia'] as const;
export type PackageASlug=(typeof packageASlugs)[number];
const torcelloContent:Record<SiteLang,Omit<GuideData,'slug'|'image'|'experiences'|'officialLinks'>>={
  "it": {
    "title": "Torcello: Basilica, Museo, Ponte del Diavolo e come arrivare",
    "kicker": "Isole della laguna · guida aggiornata",
    "subtitle": "Le origini di Venezia fra mosaici, archeologia e silenzio: una visita senza fretta.",
    "description": "Guida a Torcello: linea ACTV 9 da Burano, Basilica di Santa Maria Assunta, Museo di Torcello, Ponte del Diavolo, Trono di Attila, orari e biglietti.",
    "imageAlt": "Veduta della laguna veneziana: punto di partenza per l'escursione a Torcello",
    "badges": [
      [
        "Durata consigliata",
        "1½–2 ore sull'isola"
      ],
      [
        "Arrivo",
        "Da Burano, linea 9"
      ],
      [
        "Museo",
        "Chiuso lunedì"
      ],
      [
        "Verifica",
        "6 novembre 2026"
      ]
    ],
    "introTitle": "Torcello è la Venezia prima di Venezia",
    "intro": [
      "Antico centro della laguna, oggi Torcello è un'isola raccolta dove il paesaggio e i monumenti raccontano le origini della città. Non è una tappa da aggiungere di corsa dopo aver fotografato Burano.",
      "Dall'imbarcadero si cammina verso il Ponte del Diavolo e la piazzetta con Basilica, Santa Fosca e il sedile popolarmente chiamato Trono di Attila. Quel nome è una leggenda: non fu il trono del sovrano degli Unni.",
      "Tariffe e orari verificati su MUVE e Patriarcato il 6 novembre 2026; prima di partire controlla sempre le fonti ufficiali qui collegate."
    ],
    "highlights": [
      [
        "Basilica di Santa Maria Assunta",
        "Mosaici bizantini, incluso il Giudizio Universale. Ingresso ordinario pubblicato: €5; condizioni e gratuità sul sito del Patriarcato."
      ],
      [
        "Museo di Torcello",
        "Archeologia e storia medievale nelle antiche sedi del museo. Biglietto intero €7, ridotto €3,50; inverno 11–17, estate 11–17:30; chiuso lunedì."
      ],
      [
        "Ponte del Diavolo",
        "Storico ponte senza parapetti: attraversalo con attenzione. Le storie legate al nome appartengono alla tradizione popolare."
      ],
      [
        "Trono di Attila e Santa Fosca",
        "Il sedile di pietra è tradizionalmente chiamato Trono di Attila, senza fondamento storico; accanto alla Basilica si trova la chiesa di Santa Fosca."
      ]
    ],
    "itinerary": [
      [
        "1",
        "Raggiungi Burano",
        "Dalle Fondamente Nove usa i collegamenti ACTV per Burano; controlla prima frequenze e direzione."
      ],
      [
        "2",
        "Da Burano a Torcello",
        "Cerca la linea 9 negli orari di servizio e verifica la fermata esatta. Alcune corse della linea 12 possono servire Torcello, ma non tutte."
      ],
      [
        "3",
        "Passeggia dall'approdo",
        "Osserva il paesaggio, attraversa con prudenza il Ponte del Diavolo e raggiungi la piazzetta."
      ],
      [
        "4",
        "Scegli le visite",
        "Basilica per i mosaici, museo per la storia; lascia tempo per Santa Fosca e la passeggiata di ritorno."
      ]
    ],
    "adviceTitle": "Non confondere Basilica e Museo",
    "advice": "Sono gestiti da enti differenti e hanno biglietti e orari separati. In inverno la Basilica apre prima del Museo; il campanile ha biglietto e accesso propri. Verifica anche le condizioni del biglietto della Basilica di San Marco, che può includere Santa Maria Assunta a Torcello.",
    "heartTitle": "Le isole non sono figurine da collezionare",
    "heartText": "Se ami la storia, puoi dedicare più tempo a Torcello e meno ad altre tappe. Per una prima visita completa di Murano e Burano, aggiungere Torcello rende la giornata più intensa.",
    "faq": [
      [
        "Quanto tempo serve per Torcello?",
        "Almeno 1 ora e mezza o 2 ore sull'isola, più navigazione e attese."
      ],
      [
        "Il Museo di Torcello è aperto il lunedì?",
        "Secondo il calendario MUVE verificato al 6 novembre 2026 è chiuso il lunedì: controlla gli avvisi per eccezioni."
      ],
      [
        "Il Museum Pass comprende il Museo di Torcello?",
        "Sì, il Museo di Torcello è incluso nel Museum Pass MUVE; la Basilica ha biglietto distinto."
      ],
      [
        "Come raggiungo Torcello da Burano?",
        "Con la linea ACTV 9 negli orari di esercizio. Verifica la corsa di andata e quella di ritorno."
      ]
    ],
    "related": [
      [
        "Murano",
        "/guide/murano"
      ],
      [
        "Burano",
        "/guide/burano"
      ],
      [
        "Museum Pass e biglietti",
        "/guide/museum-pass-venezia"
      ],
      [
        "Trasporti da Marghera",
        "/come-raggiungere-venezia"
      ]
    ]
  },
  "en": {
    "title": "Torcello: Basilica, Museum and how to get there",
    "kicker": "Lagoon islands · practical guide",
    "subtitle": "Venice's earliest history, Byzantine mosaics and quiet lagoon paths.",
    "description": "Visit Torcello from Burano: ACTV line 9, Santa Maria Assunta Basilica, Torcello Museum, Devil's Bridge, Attila's Throne, opening hours and tickets.",
    "imageAlt": "The Venetian lagoon, starting point for an excursion to Torcello",
    "badges": [
      [
        "Suggested time",
        "1½–2 hours on island"
      ],
      [
        "From Burano",
        "ACTV line 9"
      ],
      [
        "Museum",
        "Closed Mondays"
      ],
      [
        "Checked",
        "6 November 2026"
      ]
    ],
    "introTitle": "Torcello tells the story of Venice's beginnings",
    "intro": [
      "Once an important settlement, Torcello is now a quiet island where history and the lagoon landscape belong together.",
      "Walk from the landing stage past the Devil's Bridge to the Basilica, Santa Fosca and the so-called Throne of Attila. The throne's name is a popular legend, not historical proof.",
      "Prices and opening times were checked against the Basilica and MUVE websites on 6 November 2026. Recheck before travelling."
    ],
    "highlights": [
      [
        "Santa Maria Assunta Basilica",
        "Remarkable Byzantine mosaics, including the Last Judgement. Published standard admission €5; see the Patriarchate for conditions."
      ],
      [
        "Torcello Museum",
        "Archaeology and medieval history. Adult ticket €7, reduced €3.50; winter 11–17, summer 11–17:30; closed Monday."
      ],
      [
        "Devil's Bridge",
        "Old bridge without parapets; take care when crossing. Its stories are folklore."
      ],
      [
        "Attila's Throne and Santa Fosca",
        "The stone seat is traditionally called Attila's Throne but was not the Hun ruler's throne; nearby stands Santa Fosca church."
      ]
    ],
    "itinerary": [
      [
        "1",
        "Travel to Burano",
        "Check ACTV services from Fondamente Nove."
      ],
      [
        "2",
        "Continue to Torcello",
        "Use ACTV line 9 when operating; not every line 12 sailing calls at Torcello."
      ],
      [
        "3",
        "Walk from the landing",
        "Follow the canal, cross Devil's Bridge carefully and reach the square."
      ],
      [
        "4",
        "Choose your visit",
        "Basilica for mosaics; museum for archaeology; allow time to enjoy the island."
      ]
    ],
    "adviceTitle": "Basilica and museum have separate tickets",
    "advice": "The Basilica is run by the Patriarchate and the museum by MUVE. Check their separate hours, the bell tower and whether a St Mark's Basilica ticket includes Santa Maria Assunta.",
    "heartTitle": "Do not rush through the lagoon",
    "heartText": "Murano, Burano and Torcello in one day is possible but demanding. If you love mosaics or early history, give Torcello the time it deserves.",
    "faq": [
      [
        "How long do I need?",
        "Allow roughly 1½–2 hours on Torcello, plus boat journeys and waiting."
      ],
      [
        "Is the museum open on Mondays?",
        "The published MUVE schedule says closed Mondays; check special notices."
      ],
      [
        "Does Museum Pass include Torcello Museum?",
        "Yes; the Basilica has a different admission system."
      ],
      [
        "How do I get there from Burano?",
        "ACTV line 9 when operating; check both outbound and return trips."
      ]
    ],
    "related": [
      [
        "Murano",
        "/guide/murano"
      ],
      [
        "Burano",
        "/guide/burano"
      ],
      [
        "Museum passes",
        "/guide/museum-pass-venezia"
      ],
      [
        "Getting to Venice",
        "/come-raggiungere-venezia"
      ]
    ]
  },
  "de": {
    "title": "Torcello: Basilika, Museum und Anreise",
    "kicker": "Laguneninseln · praktische Hinweise",
    "subtitle": "Frühe Geschichte Venedigs, byzantinische Mosaiken und stille Wege.",
    "description": "Torcello ab Burano besuchen: ACTV-Linie 9, Basilika Santa Maria Assunta, Museum, Teufelsbrücke, Attila-Thron, Öffnungszeiten und Tickets.",
    "imageAlt": "Die Lagune von Venedig als Ausgangspunkt nach Torcello",
    "badges": [
      [
        "Besuchsdauer",
        "1½–2 Stunden"
      ],
      [
        "Ab Burano",
        "ACTV-Linie 9"
      ],
      [
        "Museum",
        "Montags geschlossen"
      ],
      [
        "Geprüft",
        "6. November 2026"
      ]
    ],
    "introTitle": "Torcello erzählt von den Anfängen Venedigs",
    "intro": [
      "Einst ein bedeutender Ort, ist Torcello heute eine stille Insel voller Geschichte und Lagunenlandschaft.",
      "Vom Anleger führt der Weg über die Teufelsbrücke zur Basilika, nach Santa Fosca und zum sogenannten Attila-Thron. Die Zuschreibung an den Hunnenkönig ist eine Legende.",
      "Preise und Zeiten wurden am 6. November 2026 bei MUVE und Patriarchat geprüft; bitte vor der Reise erneut nachsehen."
    ],
    "highlights": [
      [
        "Basilika Santa Maria Assunta",
        "Byzantinische Mosaiken mit Jüngstem Gericht. Regulärer Eintritt laut Patriarchat €5."
      ],
      [
        "Museum von Torcello",
        "Archäologie und Mittelalter; €7 regulär, €3,50 ermäßigt. Winter 11–17, Sommer 11–17:30; Montag geschlossen."
      ],
      [
        "Teufelsbrücke",
        "Historische Brücke ohne Geländer; vorsichtig überqueren. Die Namensgeschichten sind Volksüberlieferungen."
      ],
      [
        "Attila-Thron und Santa Fosca",
        "Der Steinsitz wird so genannt, gehörte aber nicht dem Hunnenkönig. Daneben liegt die Kirche Santa Fosca."
      ]
    ],
    "itinerary": [
      [
        "1",
        "Nach Burano fahren",
        "ACTV-Verbindungen ab Fondamente Nove prüfen."
      ],
      [
        "2",
        "Weiter nach Torcello",
        "Linie 9, sofern in Betrieb. Nicht jede Fahrt der Linie 12 hält auf Torcello."
      ],
      [
        "3",
        "Vom Anleger spazieren",
        "Am Kanal entlang über die Teufelsbrücke zum Platz."
      ],
      [
        "4",
        "Besuch auswählen",
        "Basilika für Mosaiken, Museum für Geschichte; Zeit zum Spazieren lassen."
      ]
    ],
    "adviceTitle": "Basilika und Museum sind getrennt",
    "advice": "Sie haben verschiedene Betreiber, Tickets und Öffnungszeiten. Auch Turm und mögliche Inklusivleistungen der San-Marco-Basilika-Tickets prüfen.",
    "heartTitle": "Die Inseln nicht abhaken",
    "heartText": "Murano, Burano und Torcello an einem Tag sind anstrengend. Für Geschichte und Mosaiken lohnt sich mehr Zeit.",
    "faq": [
      [
        "Wie lange dauert die Insel?",
        "Etwa 1½–2 Stunden zuzüglich Schifffahrten und Wartezeit."
      ],
      [
        "Ist das Museum montags geöffnet?",
        "Laut MUVE-Plan nicht; Sonderöffnungen prüfen."
      ],
      [
        "Ist Torcello im Museum Pass enthalten?",
        "Das Museum ja, die Basilika nicht."
      ],
      [
        "Anreise von Burano?",
        "ACTV-Linie 9 nach Fahrplan; Rückfahrt ebenfalls prüfen."
      ]
    ],
    "related": [
      [
        "Murano",
        "/guide/murano"
      ],
      [
        "Burano",
        "/guide/burano"
      ],
      [
        "Museum Pass",
        "/guide/museum-pass-venezia"
      ],
      [
        "Anreise",
        "/come-raggiungere-venezia"
      ]
    ]
  },
  "fr": {
    "title": "Torcello : basilique, musée et accès",
    "kicker": "Îles de la lagune · guide pratique",
    "subtitle": "Les origines de Venise, des mosaïques byzantines et le calme.",
    "description": "Visiter Torcello depuis Burano : ligne ACTV 9, basilique Santa Maria Assunta, musée, pont du Diable, trône d'Attila, horaires et tarifs.",
    "imageAlt": "La lagune de Venise, départ possible vers Torcello",
    "badges": [
      [
        "Durée",
        "1 h 30–2 h"
      ],
      [
        "Depuis Burano",
        "Ligne ACTV 9"
      ],
      [
        "Musée",
        "Fermé lundi"
      ],
      [
        "Vérifié",
        "6 novembre 2026"
      ]
    ],
    "introTitle": "Torcello raconte les origines de Venise",
    "intro": [
      "Ancien foyer majeur de la lagune, Torcello est aujourd'hui une île paisible où histoire et paysage se répondent.",
      "Depuis l'embarcadère, rejoignez le pont du Diable, la basilique, Santa Fosca et le soi-disant trône d'Attila : son nom relève de la légende.",
      "Tarifs et horaires vérifiés auprès du Patriarcat et de MUVE le 6 novembre 2026. Contrôlez avant votre visite."
    ],
    "highlights": [
      [
        "Basilique Santa Maria Assunta",
        "Mosaïques byzantines dont le Jugement dernier. Entrée ordinaire publiée : 5 €."
      ],
      [
        "Musée de Torcello",
        "Archéologie et Moyen Âge ; plein tarif 7 €, réduit 3,50 €. Hiver 11 h–17 h, été 11 h–17 h 30 ; fermé lundi."
      ],
      [
        "Pont du Diable",
        "Pont ancien sans parapets : traversée prudente. Les récits sur son nom sont des légendes."
      ],
      [
        "Trône d'Attila et Santa Fosca",
        "Le siège en pierre porte ce nom traditionnel, sans lien historique avec le chef hun. L'église Santa Fosca est proche."
      ]
    ],
    "itinerary": [
      [
        "1",
        "Rejoindre Burano",
        "Vérifiez ACTV depuis Fondamente Nove."
      ],
      [
        "2",
        "Continuer vers Torcello",
        "Ligne 9 lorsqu'elle circule ; tous les bateaux de la ligne 12 n'y passent pas."
      ],
      [
        "3",
        "Marcher depuis le quai",
        "Suivez le canal, traversez prudemment le pont et rejoignez la place."
      ],
      [
        "4",
        "Choisir les visites",
        "Basilique pour les mosaïques, musée pour l'histoire, puis promenade."
      ]
    ],
    "adviceTitle": "Basilique et musée sont distincts",
    "advice": "Billets, gestion et horaires différents. Vérifiez également le campanile et les avantages éventuels d'un billet de la basilique Saint-Marc.",
    "heartTitle": "Prenez votre temps dans la lagune",
    "heartText": "Murano, Burano et Torcello en un jour : programme dense. Consacrez du temps à Torcello si les mosaïques vous passionnent.",
    "faq": [
      [
        "Combien de temps prévoir ?",
        "1 h 30 à 2 h sur l'île, plus les trajets."
      ],
      [
        "Le musée ouvre-t-il le lundi ?",
        "Le calendrier MUVE indique fermeture lundi, sauf modification."
      ],
      [
        "Museum Pass inclut-il Torcello ?",
        "Oui pour le musée ; non pour la basilique."
      ],
      [
        "Comment venir de Burano ?",
        "Ligne ACTV 9 selon les horaires, aller et retour à vérifier."
      ]
    ],
    "related": [
      [
        "Murano",
        "/guide/murano"
      ],
      [
        "Burano",
        "/guide/burano"
      ],
      [
        "Pass musées",
        "/guide/museum-pass-venezia"
      ],
      [
        "Rejoindre Venise",
        "/come-raggiungere-venezia"
      ]
    ]
  },
  "es": {
    "title": "Torcello: basílica, museo y cómo llegar",
    "kicker": "Islas de la laguna · guía práctica",
    "subtitle": "Los orígenes de Venecia, mosaicos bizantinos y tranquilidad.",
    "description": "Guía de Torcello desde Burano: línea ACTV 9, basílica de Santa Maria Assunta, museo, Puente del Diablo, Trono de Atila, horarios y precios.",
    "imageAlt": "Laguna veneciana, punto de partida para visitar Torcello",
    "badges": [
      [
        "Duración",
        "1½–2 horas"
      ],
      [
        "Desde Burano",
        "Línea ACTV 9"
      ],
      [
        "Museo",
        "Cerrado lunes"
      ],
      [
        "Revisado",
        "6 noviembre 2026"
      ]
    ],
    "introTitle": "Torcello cuenta los orígenes de Venecia",
    "intro": [
      "Antiguamente un importante centro de la laguna, Torcello hoy es una isla tranquila donde paisaje e historia se encuentran.",
      "Desde el embarcadero se llega al Puente del Diablo, la basílica, Santa Fosca y el llamado Trono de Atila. El nombre es una leyenda, no una atribución histórica.",
      "Tarifas y horarios comprobados con MUVE y el Patriarcado el 6 de noviembre de 2026; revisa antes de viajar."
    ],
    "highlights": [
      [
        "Basílica Santa Maria Assunta",
        "Mosaicos bizantinos y Juicio Final. Entrada general publicada: 5 €."
      ],
      [
        "Museo de Torcello",
        "Arqueología e historia medieval; entrada 7 €, reducida 3,50 €. Invierno 11–17, verano 11–17:30, cerrado lunes."
      ],
      [
        "Puente del Diablo",
        "Puente antiguo sin barandillas; cruza con cuidado. Sus historias son populares, no hechos acreditados."
      ],
      [
        "Trono de Atila y Santa Fosca",
        "El asiento pétreo no perteneció a Atila. Cerca está la iglesia de Santa Fosca."
      ]
    ],
    "itinerary": [
      [
        "1",
        "Llega a Burano",
        "Consulta ACTV desde Fondamente Nove."
      ],
      [
        "2",
        "Continúa a Torcello",
        "Línea 9 cuando opere; no todas las salidas de la línea 12 paran allí."
      ],
      [
        "3",
        "Camina desde el muelle",
        "Sigue el canal y cruza con cuidado el Puente del Diablo."
      ],
      [
        "4",
        "Elige qué visitar",
        "Basílica para mosaicos y museo para historia; deja tiempo para pasear."
      ]
    ],
    "adviceTitle": "Basílica y museo son distintos",
    "advice": "Gestionan entradas y horarios separados. Comprueba también el campanario y si tu entrada de San Marcos incluye la basílica de Torcello.",
    "heartTitle": "Las islas merecen calma",
    "heartText": "Murano, Burano y Torcello en un día exigen mucho tiempo. Si te interesa la historia, prioriza Torcello.",
    "faq": [
      [
        "¿Cuánto tiempo hace falta?",
        "1½–2 horas en la isla, además de los trayectos."
      ],
      [
        "¿Abre el museo los lunes?",
        "Según MUVE, cierra los lunes salvo cambios."
      ],
      [
        "¿Incluye el Museum Pass el museo?",
        "Sí, pero no incluye la basílica."
      ],
      [
        "¿Cómo voy desde Burano?",
        "Con la línea ACTV 9 según horario; revisa también el regreso."
      ]
    ],
    "related": [
      [
        "Murano",
        "/guide/murano"
      ],
      [
        "Burano",
        "/guide/burano"
      ],
      [
        "Pases de museos",
        "/guide/museum-pass-venezia"
      ],
      [
        "Cómo llegar",
        "/come-raggiungere-venezia"
      ]
    ]
  },
  "zh": {
    "title": "托尔切洛岛 Torcello：大教堂、博物馆与交通",
    "kicker": "潟湖岛屿 · 实用指南",
    "subtitle": "拜占庭马赛克、威尼斯早期历史与宁静的岛屿风景。",
    "description": "Torcello 岛游览指南：从 Burano 乘 ACTV 9 号线、Santa Maria Assunta 大教堂、博物馆、魔鬼桥、阿提拉王座、门票与开放时间。",
    "imageAlt": "威尼斯潟湖风景：前往 Torcello 岛的起点",
    "badges": [
      [
        "建议时间",
        "岛上 1.5–2 小时"
      ],
      [
        "从 Burano",
        "ACTV 9 号线"
      ],
      [
        "博物馆",
        "周一闭馆"
      ],
      [
        "核查日期",
        "2026年11月6日"
      ]
    ],
    "introTitle": "Torcello 讲述威尼斯的起源",
    "intro": [
      "Torcello 曾是潟湖中的重要聚落，如今小岛宁静，历史建筑与自然环境相互映衬。",
      "从码头步行可看到没有护栏的魔鬼桥，随后抵达大教堂、Santa Fosca 教堂以及被称为“阿提拉王座”的石椅。后者的名称是民间传说。",
      "以下价格与开放时间于2026年11月6日对照 MUVE 与宗主教区官方网页；出行前请再次确认。"
    ],
    "highlights": [
      [
        "Santa Maria Assunta 大教堂",
        "珍贵的拜占庭马赛克，包括《最后的审判》。官网普通票 €5。"
      ],
      [
        "Torcello 博物馆",
        "考古及中世纪历史；普通票 €7、优惠票 €3.50。冬季11–17时，夏季11–17:30，周一闭馆。"
      ],
      [
        "魔鬼桥",
        "古老的无护栏桥梁，请小心通行；名称相关故事属于民间传说。"
      ],
      [
        "阿提拉王座与 Santa Fosca",
        "石椅并非匈人首领阿提拉所用；附近可参观 Santa Fosca 教堂。"
      ]
    ],
    "itinerary": [
      [
        "1",
        "先到 Burano",
        "查询 Fondamente Nove 出发的 ACTV 船班。"
      ],
      [
        "2",
        "前往 Torcello",
        "运营时乘9号线；并非所有12号线班次都会停靠。"
      ],
      [
        "3",
        "从码头步行",
        "沿水道前行，小心经过魔鬼桥。"
      ],
      [
        "4",
        "选择参观重点",
        "大教堂看马赛克，博物馆看历史，并预留散步时间。"
      ]
    ],
    "adviceTitle": "大教堂与博物馆票务不同",
    "advice": "两者由不同机构管理，开放时间及门票独立。钟楼另有安排；持圣马可大教堂门票的游客可核查是否包含 Torcello 教堂。",
    "heartTitle": "不要把每个岛都当成打卡点",
    "heartText": "一天游览 Murano、Burano 与 Torcello 会比较紧凑；对历史感兴趣可多留时间给 Torcello。",
    "faq": [
      [
        "需要多久？",
        "岛上建议1.5–2小时，另计船程与候船。"
      ],
      [
        "博物馆周一开放吗？",
        "MUVE 官网目前注明周一闭馆，特殊开放另行查看。"
      ],
      [
        "Museum Pass 包含这里吗？",
        "包含 Torcello 博物馆，不包含大教堂。"
      ],
      [
        "从 Burano 怎么过去？",
        "按船班乘 ACTV 9 号线，并确认回程。"
      ]
    ],
    "related": [
      [
        "Murano",
        "/guide/murano"
      ],
      [
        "Burano",
        "/guide/burano"
      ],
      [
        "博物馆通票",
        "/guide/museum-pass-venezia"
      ],
      [
        "前往威尼斯",
        "/come-raggiungere-venezia"
      ]
    ]
  }
};
const museumPassContent:Record<SiteLang,Omit<GuideData,'slug'|'image'|'experiences'|'officialLinks'>>={
  "it": {
    "title": "Museum Pass Venezia: quali musei include e quando conviene",
    "kicker": "Musei di Venezia · prezzi verificati",
    "subtitle": "Museum Pass, Musei di Piazza San Marco e Musei delle Isole: scegli dopo aver scelto le visite.",
    "description": "Museum Pass MUVE Venezia: €50 intero, €25 ridotto, musei inclusi ed esclusi, confronto con biglietti Piazza San Marco e Musei delle Isole. Aggiornato 2026.",
    "imageAlt": "Museo del Vetro di Murano, una delle sedi comprese nel Museum Pass MUVE",
    "badges": [
      [
        "Museum Pass",
        "€50 intero · €25 ridotto"
      ],
      [
        "Piazza San Marco",
        "€35 intero"
      ],
      [
        "Musei delle Isole",
        "€20 intero"
      ],
      [
        "Verifica",
        "6 novembre 2026"
      ]
    ],
    "introTitle": "Il pass migliore dipende dai musei che vuoi vedere",
    "intro": [
      "Il Museum Pass dei Musei Civici di Venezia permette un ingresso in ciascuna collezione permanente inclusa entro sei mesi dal primo utilizzo. Non significa accesso a tutti i musei della città: Basilica di San Marco, Gallerie dell'Accademia, Peggy Guggenheim e Teatro La Fenice richiedono titoli separati.",
      "Tariffe ufficiali di riferimento al 6 novembre 2026: Museum Pass €50/€25, Musei di Piazza San Marco €35, Musei delle Isole €20. Prima dell'acquisto verifica eventuali supplementi, agevolazioni, mostre e restrizioni.",
      "Il libro MVA racconta le collezioni; questa pagina aiuta a scegliere il biglietto aggiornato."
    ],
    "highlights": [
      [
        "Museum Pass MUVE — €50",
        "Comprende Palazzo Ducale, percorso integrato Correr–Archeologico–Marciana, Ca' Rezzonico, Ca' Pesaro, Fortuny, Museo del Vetro, Merletto, Torcello, Storia Naturale, MUVEC, Mocenigo e Casa Goldoni, secondo il circuito ufficiale."
      ],
      [
        "Musei di Piazza San Marco — €35",
        "Il biglietto riguarda Palazzo Ducale e il percorso integrato dei musei dell'area marciana; non comprende la Basilica di San Marco."
      ],
      [
        "Musei delle Isole — €20",
        "Circuito Museo del Vetro di Murano, Museo del Merletto di Burano e Museo di Torcello: utile se visiti più musei della laguna."
      ],
      [
        "Ingresso separato",
        "Gallerie dell'Accademia, Collezione Peggy Guggenheim, Basilica di San Marco e Scuola Grande di San Rocco non rientrano nel Museum Pass MUVE."
      ]
    ],
    "itinerary": [
      [
        "1",
        "Scrivi le visite irrinunciabili",
        "Parti da musei e giorni disponibili, non dal prezzo del pass."
      ],
      [
        "2",
        "Segna quelli inclusi nel circuito",
        "Confronta Palazzo Ducale e gli altri musei MUVE con le sedi indipendenti."
      ],
      [
        "3",
        "Somma i biglietti necessari",
        "Due o tre musei MUVE possono rendere utile un circuito piccolo; con più sedi può convenire il Museum Pass."
      ],
      [
        "4",
        "Acquista dal canale ufficiale",
        "Verifica la validità, eventuali prenotazioni a fascia oraria, mostre temporanee e condizioni ridotte."
      ]
    ],
    "adviceTitle": "Un esempio semplice di convenienza",
    "advice": "Se vuoi il circuito di Piazza San Marco (€35) e Ca' Rezzonico (€15 intero nella verifica del libro), arrivi a €50: il Museum Pass può diventare interessante perché lascia aperte altre visite incluse. Se desideri solo Accademia e Guggenheim, non acquistare il Museum Pass MUVE: non copre quei musei.",
    "heartTitle": "Il pass non è un obbligo",
    "heartText": "Un soggiorno lungo non richiede automaticamente un abbonamento. Scegli le collezioni che ti interessano e verifica sempre la situazione attuale della sede.",
    "faq": [
      [
        "Il Museum Pass include la Basilica di San Marco?",
        "No. È un luogo di culto con ingresso e biglietteria distinti."
      ],
      [
        "Il Museum Pass comprende Torcello?",
        "Comprende il Museo di Torcello, non la Basilica di Santa Maria Assunta."
      ],
      [
        "Il pass include tutte le mostre?",
        "Non necessariamente: alcuni eventi e percorsi speciali possono richiedere biglietti o supplementi distinti."
      ],
      [
        "Museum Pass e ACTV sono lo stesso prodotto?",
        "No. Il Museum Pass riguarda i musei MUVE; i pass ACTV riguardano il trasporto pubblico."
      ]
    ],
    "related": [
      [
        "Torcello",
        "/guide/torcello"
      ],
      [
        "Murano",
        "/guide/murano"
      ],
      [
        "Burano",
        "/guide/burano"
      ],
      [
        "Trasporti e biglietti ACTV",
        "/come-raggiungere-venezia"
      ]
    ]
  },
  "en": {
    "title": "Venice Museum Pass: what is included and is it worth it?",
    "kicker": "Venice museums · checked ticket prices",
    "subtitle": "Compare MUVE Museum Pass, St Mark's Square and Island Museums tickets before buying.",
    "description": "Venice MUVE Museum Pass: €50 adult, €25 reduced, included and excluded museums, St Mark's Square and Island Museums ticket comparisons.",
    "imageAlt": "Murano Glass Museum, one of the MUVE Museum Pass venues",
    "badges": [
      [
        "Museum Pass",
        "€50 adult · €25 reduced"
      ],
      [
        "St Mark's museums",
        "€35 adult"
      ],
      [
        "Island Museums",
        "€20 adult"
      ],
      [
        "Checked",
        "6 November 2026"
      ]
    ],
    "introTitle": "Choose the museums first, then the pass",
    "intro": [
      "The MUVE Museum Pass covers one visit to each included permanent collection within six months of first use. It does not cover every cultural venue in Venice: St Mark's Basilica, Accademia Galleries and Peggy Guggenheim have separate tickets.",
      "Official reference prices checked on 6 November 2026: Museum Pass €50/€25, St Mark's Square museums €35, Island Museums €20. Recheck special exhibitions and reductions.",
      "The MVA book introduces the museums; this page keeps the practical ticket comparison available."
    ],
    "highlights": [
      [
        "MUVE Museum Pass — €50",
        "Includes Doge's Palace, integrated Correr–Archaeological–Marciana visit, Ca' Rezzonico, Ca' Pesaro, Fortuny, Glass Museum, Lace Museum, Torcello Museum, Natural History Museum, MUVEC, Mocenigo and Goldoni House."
      ],
      [
        "St Mark's Square museums — €35",
        "Doge's Palace and the integrated museum visit in the square; not St Mark's Basilica."
      ],
      [
        "Island Museums — €20",
        "Glass Museum in Murano, Lace Museum in Burano and Torcello Museum."
      ],
      [
        "Separate admission",
        "Accademia Galleries, Peggy Guggenheim, St Mark's Basilica and Scuola Grande di San Rocco are not part of MUVE Museum Pass."
      ]
    ],
    "itinerary": [
      [
        "1",
        "Pick your priorities",
        "List your must-see museums and available days."
      ],
      [
        "2",
        "Check the circuit",
        "Identify MUVE venues and independent museums."
      ],
      [
        "3",
        "Compare totals",
        "For a few MUVE visits a smaller circuit may suffice; with more venues Museum Pass may save money."
      ],
      [
        "4",
        "Use official channels",
        "Check time slots, reductions, validity and any special-exhibition charges."
      ]
    ],
    "adviceTitle": "A quick example",
    "advice": "St Mark's museum circuit (€35) plus Ca' Rezzonico (€15 adult in the book's price check) totals €50. At that point Museum Pass can offer more flexibility. For Accademia and Guggenheim alone, it adds no value.",
    "heartTitle": "Not every trip needs a pass",
    "heartText": "Buy for the museums you intend to visit, not simply because you are staying a week.",
    "faq": [
      [
        "Does Museum Pass include St Mark's Basilica?",
        "No, Basilica tickets are separate."
      ],
      [
        "Does it include Torcello?",
        "Torcello Museum yes; Santa Maria Assunta Basilica no."
      ],
      [
        "Are temporary exhibitions always included?",
        "No; special programmes may require another ticket."
      ],
      [
        "Is ACTV included?",
        "No, ACTV travel passes are separate products."
      ]
    ],
    "related": [
      [
        "Torcello",
        "/guide/torcello"
      ],
      [
        "Murano",
        "/guide/murano"
      ],
      [
        "Burano",
        "/guide/burano"
      ],
      [
        "ACTV tickets",
        "/come-raggiungere-venezia"
      ]
    ]
  },
  "de": {
    "title": "Venedig Museum Pass: enthaltene Museen und Preisvergleich",
    "kicker": "Museen · geprüfte Preise",
    "subtitle": "Museum Pass, Museen am Markusplatz und Inselmuseen sinnvoll vergleichen.",
    "description": "MUVE Museum Pass in Venedig: 50 € regulär, 25 € ermäßigt, enthaltene und ausgeschlossene Museen und Vergleich der Kombitickets.",
    "imageAlt": "Glasmuseum Murano, Teil des MUVE Museum Pass",
    "badges": [
      [
        "Museum Pass",
        "50 € · ermäßigt 25 €"
      ],
      [
        "Markusplatz",
        "35 €"
      ],
      [
        "Inselmuseen",
        "20 €"
      ],
      [
        "Geprüft",
        "6. November 2026"
      ]
    ],
    "introTitle": "Erst die Museen wählen, dann das Ticket",
    "intro": [
      "Der Museum Pass MUVE erlaubt je einen Besuch der enthaltenen Dauerausstellungen innerhalb von sechs Monaten nach erster Nutzung. Nicht alle Kultureinrichtungen gehören dazu: Markusdom, Gallerie dell'Accademia und Peggy Guggenheim sind getrennt.",
      "Preise laut offiziellen Seiten am 6. November 2026: Museum Pass 50 €/25 €, Markusplatz-Museen 35 €, Inselmuseen 20 €. Sonderausstellungen und Ermäßigungen prüfen.",
      "Das MVA-Buch erzählt die Museen; hier bleibt der Ticketvergleich aktuell."
    ],
    "highlights": [
      [
        "MUVE Museum Pass — 50 €",
        "Dogenpalast, integrierter Correr–Archäologie–Marciana-Besuch, Ca' Rezzonico, Ca' Pesaro, Fortuny, Glas-, Spitzen- und Torcello-Museum, Naturkunde, MUVEC, Mocenigo und Goldoni-Haus."
      ],
      [
        "Museen am Markusplatz — 35 €",
        "Dogenpalast und integrierter Museumsrundgang, nicht der Markusdom."
      ],
      [
        "Inselmuseen — 20 €",
        "Glasmuseum Murano, Spitzenmuseum Burano und Museum Torcello."
      ],
      [
        "Nicht enthalten",
        "Accademia-Galerien, Peggy Guggenheim, Markusdom und Scuola Grande di San Rocco."
      ]
    ],
    "itinerary": [
      [
        "1",
        "Wunschmuseen notieren",
        "Besuchstage und wichtige Sammlungen auswählen."
      ],
      [
        "2",
        "MUVE-Zugehörigkeit prüfen",
        "Städtische Museen von unabhängigen Einrichtungen trennen."
      ],
      [
        "3",
        "Preise vergleichen",
        "Kleines Kombiticket oder großer Museum Pass – je nach tatsächlichen Besuchen."
      ],
      [
        "4",
        "Offiziell kaufen",
        "Zeitfenster, Ermäßigungen, Laufzeit und Sonderausstellungen prüfen."
      ]
    ],
    "adviceTitle": "Ein Beispiel",
    "advice": "Markusplatz-Kombiticket (35 €) und Ca' Rezzonico (15 € im Buch-Preisvergleich) ergeben 50 €. Dann kann der große Pass sinnvoll sein. Für Accademia und Guggenheim allein lohnt er sich nicht.",
    "heartTitle": "Nicht jeder braucht einen Pass",
    "heartText": "Ein langer Aufenthalt bedeutet nicht automatisch, dass sich ein Museum Pass rechnet.",
    "faq": [
      [
        "Markusdom enthalten?",
        "Nein, der Dom hat getrennte Eintrittsregeln."
      ],
      [
        "Torcello enthalten?",
        "Das Museum ja, die Basilika nicht."
      ],
      [
        "Alle Sonderausstellungen enthalten?",
        "Nicht immer, Zusatzkarten können nötig sein."
      ],
      [
        "ACTV-Fahrten enthalten?",
        "Nein, ACTV-Tickets sind ein anderes Produkt."
      ]
    ],
    "related": [
      [
        "Torcello",
        "/guide/torcello"
      ],
      [
        "Murano",
        "/guide/murano"
      ],
      [
        "Burano",
        "/guide/burano"
      ],
      [
        "ACTV-Tickets",
        "/come-raggiungere-venezia"
      ]
    ]
  },
  "fr": {
    "title": "Museum Pass Venise : musées inclus et tarifs",
    "kicker": "Musées de Venise · tarifs vérifiés",
    "subtitle": "Comparer Museum Pass MUVE, musées de Saint-Marc et musées des îles.",
    "description": "Museum Pass MUVE Venise : 50 € plein tarif, 25 € réduit, musées inclus et exclus, billets combinés de Saint-Marc et des îles.",
    "imageAlt": "Musée du Verre de Murano, compris dans le Museum Pass MUVE",
    "badges": [
      [
        "Museum Pass",
        "50 € · réduit 25 €"
      ],
      [
        "Musées Saint-Marc",
        "35 €"
      ],
      [
        "Musées des îles",
        "20 €"
      ],
      [
        "Vérifié",
        "6 novembre 2026"
      ]
    ],
    "introTitle": "Choisir les musées avant d'acheter",
    "intro": [
      "Le Museum Pass MUVE permet une entrée dans chaque collection permanente incluse pendant six mois après la première utilisation. Il ne couvre pas toute la culture vénitienne : basilique Saint-Marc, Gallerie dell'Accademia et Peggy Guggenheim sont séparées.",
      "Tarifs officiels de référence au 6 novembre 2026 : Museum Pass 50 €/25 €, musées de Saint-Marc 35 €, musées des îles 20 €. Vérifiez les suppléments et réductions.",
      "Le livre MVA présente les collections ; cette page conserve le comparatif pratique."
    ],
    "highlights": [
      [
        "MUVE Museum Pass — 50 €",
        "Palais des Doges, parcours intégré Correr–Archéologique–Marciana, Ca' Rezzonico, Ca' Pesaro, Fortuny, musées du Verre, de la Dentelle, de Torcello, d'Histoire naturelle, MUVEC, Mocenigo et Maison Goldoni."
      ],
      [
        "Musées Saint-Marc — 35 €",
        "Palais des Doges et parcours intégré des musées, pas la basilique."
      ],
      [
        "Musées des îles — 20 €",
        "Musée du Verre à Murano, de la Dentelle à Burano et musée de Torcello."
      ],
      [
        "Billets séparés",
        "Gallerie dell'Accademia, Peggy Guggenheim, basilique Saint-Marc et Scuola Grande di San Rocco ne sont pas dans le pass MUVE."
      ]
    ],
    "itinerary": [
      [
        "1",
        "Choisir ses priorités",
        "Noter musées et jours disponibles."
      ],
      [
        "2",
        "Vérifier le circuit",
        "Distinguer MUVE et musées indépendants."
      ],
      [
        "3",
        "Comparer les totaux",
        "Petit billet combiné ou Museum Pass selon vos visites."
      ],
      [
        "4",
        "Acheter officiellement",
        "Vérifier horaires, réductions, validité et expositions spéciales."
      ]
    ],
    "adviceTitle": "Un exemple concret",
    "advice": "Circuit Saint-Marc (35 €) et Ca' Rezzonico (15 € dans la vérification du livre) totalisent 50 €. Le Museum Pass devient alors intéressant. Pas pour Accademia et Guggenheim seuls.",
    "heartTitle": "Pas de pass obligatoire",
    "heartText": "Choisissez le billet selon vos visites réelles, pas uniquement selon la durée du séjour.",
    "faq": [
      [
        "Basilique Saint-Marc incluse ?",
        "Non, ses billets sont séparés."
      ],
      [
        "Musée Torcello inclus ?",
        "Oui pour le musée, non pour la basilique."
      ],
      [
        "Toutes les expositions incluses ?",
        "Non, certaines nécessitent un supplément."
      ],
      [
        "ACTV compris ?",
        "Non, les billets de transport sont distincts."
      ]
    ],
    "related": [
      [
        "Torcello",
        "/guide/torcello"
      ],
      [
        "Murano",
        "/guide/murano"
      ],
      [
        "Burano",
        "/guide/burano"
      ],
      [
        "Billets ACTV",
        "/come-raggiungere-venezia"
      ]
    ]
  },
  "es": {
    "title": "Museum Pass Venecia: museos incluidos y cuándo conviene",
    "kicker": "Museos · precios verificados",
    "subtitle": "Compara el Museum Pass MUVE, San Marcos y Museos de las Islas.",
    "description": "Museum Pass MUVE Venecia: 50 € general, 25 € reducido, museos incluidos y excluidos, entradas combinadas de San Marcos e islas.",
    "imageAlt": "Museo del Vidrio de Murano incluido en el Museum Pass MUVE",
    "badges": [
      [
        "Museum Pass",
        "50 € · reducido 25 €"
      ],
      [
        "San Marcos",
        "35 €"
      ],
      [
        "Museos de las Islas",
        "20 €"
      ],
      [
        "Verificado",
        "6 noviembre 2026"
      ]
    ],
    "introTitle": "Primero elige los museos; después, el billete",
    "intro": [
      "El Museum Pass de MUVE permite una entrada a cada colección permanente incluida dentro de los seis meses desde el primer uso. No cubre toda Venecia: Basílica de San Marcos, Accademia y Peggy Guggenheim van aparte.",
      "Precios oficiales de referencia comprobados el 6 de noviembre de 2026: Museum Pass 50 €/25 €, museos de San Marcos 35 €, Museos de las Islas 20 €. Comprueba extras y descuentos.",
      "El libro MVA cuenta las colecciones; aquí encontrarás el comparador práctico."
    ],
    "highlights": [
      [
        "MUVE Museum Pass — 50 €",
        "Palacio Ducal, ruta integrada Correr–Arqueológico–Marciana, Ca' Rezzonico, Ca' Pesaro, Fortuny, museos del Vidrio, Encaje, Torcello, Historia Natural, MUVEC, Mocenigo y Casa Goldoni."
      ],
      [
        "Museos San Marcos — 35 €",
        "Palacio Ducal y ruta integrada de museos, sin la basílica."
      ],
      [
        "Museos de las Islas — 20 €",
        "Museo del Vidrio en Murano, del Encaje en Burano y Museo de Torcello."
      ],
      [
        "Entrada independiente",
        "Accademia, Peggy Guggenheim, Basílica de San Marcos y Scuola Grande di San Rocco no pertenecen al Museum Pass MUVE."
      ]
    ],
    "itinerary": [
      [
        "1",
        "Elige las visitas",
        "Museos prioritarios y tiempo disponible."
      ],
      [
        "2",
        "Identifica el circuito",
        "Distingue museos MUVE e instituciones independientes."
      ],
      [
        "3",
        "Suma los precios",
        "Un pase pequeño puede bastar; con muchas sedes el Museum Pass podría compensar."
      ],
      [
        "4",
        "Compra en canales oficiales",
        "Revisa reservas, descuentos, validez y exposiciones especiales."
      ]
    ],
    "adviceTitle": "Un ejemplo sencillo",
    "advice": "Entrada combinada San Marcos (35 €) más Ca' Rezzonico (15 € según el libro) suman 50 €. En ese caso el Museum Pass aporta flexibilidad. No sirve para Accademia y Guggenheim solos.",
    "heartTitle": "No todo viaje necesita un pase",
    "heartText": "Compra según los museos que visitarás, no solo por la duración del viaje.",
    "faq": [
      [
        "¿Incluye San Marcos?",
        "La basílica no; tiene entradas propias."
      ],
      [
        "¿Incluye Torcello?",
        "El museo sí, la basílica no."
      ],
      [
        "¿Todas las exposiciones?",
        "No necesariamente; algunas requieren un suplemento."
      ],
      [
        "¿Incluye ACTV?",
        "No, el transporte usa billetes separados."
      ]
    ],
    "related": [
      [
        "Torcello",
        "/guide/torcello"
      ],
      [
        "Murano",
        "/guide/murano"
      ],
      [
        "Burano",
        "/guide/burano"
      ],
      [
        "Billetes ACTV",
        "/come-raggiungere-venezia"
      ]
    ]
  },
  "zh": {
    "title": "威尼斯 Museum Pass 博物馆通票：包含哪些景点？",
    "kicker": "威尼斯博物馆 · 已核查票价",
    "subtitle": "对比 MUVE 通票、圣马可广场套票和岛屿博物馆套票。",
    "description": "威尼斯 MUVE Museum Pass：普通票 €50、优惠票 €25；包含与不包含的博物馆，圣马可及岛屿套票选择。",
    "imageAlt": "Murano 玻璃博物馆是 MUVE Museum Pass 包含的景点之一",
    "badges": [
      [
        "Museum Pass",
        "€50 · 优惠 €25"
      ],
      [
        "圣马可广场",
        "€35"
      ],
      [
        "岛屿博物馆",
        "€20"
      ],
      [
        "核查日期",
        "2026年11月6日"
      ]
    ],
    "introTitle": "先决定想参观什么，再选择通票",
    "intro": [
      "MUVE Museum Pass 可在首次使用后六个月内分别进入所包含的常设展馆一次，但不涵盖威尼斯所有文化景点：圣马可大教堂、学院美术馆、佩吉·古根海姆美术馆另需门票。",
      "2026年11月6日核查的参考价格：Museum Pass €50/€25，圣马可广场博物馆套票 €35，岛屿博物馆套票 €20。购买前应再次核实优惠、特别展览与限制。",
      "MVA 纸质指南介绍艺术馆的故事；本网页用于比较会变化的票务信息。"
    ],
    "highlights": [
      [
        "MUVE Museum Pass — €50",
        "包括总督宫、Correr—考古—Marciana 联合参观、Ca' Rezzonico、Ca' Pesaro、Fortuny、Murano 玻璃博物馆、Burano 蕾丝博物馆、Torcello 博物馆、自然历史博物馆、MUVEC、Mocenigo 与 Goldoni 故居等。"
      ],
      [
        "圣马可广场博物馆 — €35",
        "包含总督宫及广场区域联合博物馆参观，不包含圣马可大教堂。"
      ],
      [
        "岛屿博物馆 — €20",
        "涵盖 Murano 玻璃博物馆、Burano 蕾丝博物馆和 Torcello 博物馆。"
      ],
      [
        "需要单独购票",
        "学院美术馆、佩吉·古根海姆美术馆、圣马可大教堂及 San Rocco 大会堂不包含在 MUVE 通票内。"
      ]
    ],
    "itinerary": [
      [
        "1",
        "列出想参观的馆",
        "先看兴趣、行程天数与开放时间。"
      ],
      [
        "2",
        "核查是否属于 MUVE",
        "区分市立博物馆与独立机构。"
      ],
      [
        "3",
        "比较票价",
        "若只看少数馆，小套票可能合适；参观多馆可考虑 Museum Pass。"
      ],
      [
        "4",
        "优先官方购票",
        "确认时段、优惠、有效期和特别展览附加费用。"
      ]
    ],
    "adviceTitle": "简单比较示例",
    "advice": "圣马可广场套票 €35 加 Ca' Rezzonico 普通票 €15（书中核查价格）合计 €50。这时 Museum Pass 值得考虑。但只去学院美术馆和古根海姆则无需 MUVE 通票。",
    "heartTitle": "不必为了旅行而买通票",
    "heartText": "根据实际参观数量决定，不要仅因为住一周就自动购买。",
    "faq": [
      [
        "包含圣马可大教堂吗？",
        "不包含；大教堂门票独立。"
      ],
      [
        "包含 Torcello 吗？",
        "包含博物馆，不包含大教堂。"
      ],
      [
        "包含所有特别展吗？",
        "不一定，部分活动需另外购票。"
      ],
      [
        "包含 ACTV 交通吗？",
        "不包含，交通通票另行购买。"
      ]
    ],
    "related": [
      [
        "Torcello",
        "/guide/torcello"
      ],
      [
        "Murano",
        "/guide/murano"
      ],
      [
        "Burano",
        "/guide/burano"
      ],
      [
        "ACTV 交通票",
        "/come-raggiungere-venezia"
      ]
    ]
  }
};
const languages:SiteLang[]=['it','en','de','fr','es','zh'];
function asGuide(slug:PackageASlug, copy:Omit<GuideData,'slug'|'image'|'experiences'|'officialLinks'>,image:string,links:[string,string][]):GuideData{
 return {slug,...copy,image,experiences:[],officialLinks:links};
}
export const packageAGuides:Record<PackageASlug,Record<SiteLang,GuideData>>={
 torcello:Object.fromEntries(languages.map(lang=>[lang,asGuide('torcello',torcelloContent[lang],'/images/venezia.webp',[["Patriarcato · Basilica Santa Maria Assunta","https://www.patriarcatovenezia.it/basilica-di-santa-maria-assunta-di-torcello/"],["MUVE · Museo di Torcello","https://torcello.visitmuve.it/informazioni-pratiche/"],["ACTV · Orari e avvisi","https://actv.avmspa.it/"]])])) as Record<SiteLang,GuideData>,
 'museum-pass-venezia':Object.fromEntries(languages.map(lang=>[lang,asGuide('museum-pass-venezia',museumPassContent[lang],'/images/culture/museo-del-vetro-murano-cover.webp',[["MUVE · Museum Pass e circuiti","https://torcello.visitmuve.it/informazioni-pratiche/"],["MUVE · Musei delle Isole","https://museovetro.visitmuve.it/it/pianifica-la-tua-visita/biglietti/"],["Venezia Unica · Biglietti museali","https://www.veneziaunica.it/it/cosa-fare-a-venezia/musei-civici-di-venezia/museo-di-torcello"]])])) as Record<SiteLang,GuideData>
};
