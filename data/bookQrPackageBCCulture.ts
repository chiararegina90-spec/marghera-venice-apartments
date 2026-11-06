import type {GuideData} from '@/data/guideTypes';
import type {SiteLang} from '@/lib/i18n';

export const culturalBookSlugs=["venezia-nizioleti-calli-sestieri","parole-veneziane-glossario","venezia-da-fotografare","mangiare-a-venezia-senza-sorprese","cosa-mangiare-a-venezia"] as const;
export type CulturalBookSlug=(typeof culturalBookSlugs)[number];
type TranslatedCopy=Omit<GuideData,'slug'|'image'|'experiences'|'officialLinks'|'related'>;
const source:Record<CulturalBookSlug,Record<SiteLang,TranslatedCopy>>={
  "venezia-nizioleti-calli-sestieri": {
    "it": {
      "title": "Nizioleti di Venezia: significato di calli, campi e sestieri",
      "kicker": "Capire Venezia · nomi e strade",
      "subtitle": "Le scritte sui muri raccontano antichi mestieri, geografia d'acqua e una città diversa dalle altre.",
      "description": "Cosa sono i nizioleti a Venezia? Guida a calli, campi, fondamenta, rio terà, sottoportego, ruga, salizada, sei sestieri e numeri civici a insulario.",
      "imageAlt": "Calli e architetture del centro storico di Venezia",
      "badges": [
        [
          "Quartieri",
          "6 sestieri"
        ],
        [
          "Insegne",
          "Nizioleti dipinti"
        ],
        [
          "Numeri civici",
          "A insulario"
        ],
        [
          "Percorso",
          "Guarda in alto"
        ]
      ],
      "introTitle": "La mappa di Venezia è scritta sui muri",
      "intro": [
        "In una città senza strade per automobili nel centro storico, le parole contano: *calle* è una strada pedonale, *campo* è una piazza, *fondamenta* costeggia l'acqua. I nizioleti sono le indicazioni tradizionali dipinte sui muri, bianco e nero, simili a piccoli lenzuoli da cui deriva il nome.",
        "Non chiamare ogni spazio aperto 'piazza': a Venezia quasi tutti sono campi o campielli, mentre Piazza San Marco è un'eccezione celebre. Anche la numerazione degli edifici sorprende: progredisce per sestiere, non cambia a ogni calle con pari e dispari.",
        "Prova a leggere i nomi: Pistor rimanda ai panettieri, Pestrin al lattaio, Oresi agli orafi, Frezzaria a frecce e fabbricanti di frecce, Frutarol alla frutta. Le parole riportano in superficie mestieri, botteghe e funzioni che un tempo identificavano il luogo."
      ],
      "highlights": [
        [
          "I sei sestieri",
          "Cannaregio, Castello, Dorsoduro, San Marco, San Polo e Santa Croce. Ognuno ha storia, caratteri e progressione civica propri."
        ],
        [
          "Calle, ruga, salizada",
          "La calle è un passaggio pedonale; una ruga era spesso strada commerciale; una salizada indica una strada storicamente pavimentata."
        ],
        [
          "Campo, campiello, corte",
          "Il campo è uno spazio aperto di quartiere, il campiello più piccolo e la corte uno spazio raccolto fra edifici."
        ],
        [
          "Fondamenta, rio terà, sottoportego",
          "La fondamenta corre lungo un canale; il rio terà è un canale interrato; il sottoportego è un passaggio coperto sotto un edificio."
        ],
        [
          "Squero, chiovere, pescaria",
          "I nomi conservano tracce di cantieri per barche, spazi di asciugatura e antichi mercati."
        ],
        [
          "La numerazione 'a insulario'",
          "I civici seguono una progressione entro il sestiere, non una numerazione autonoma per ogni strada. Per questo puoi incontrare numeri a quattro cifre."
        ],
        [
          "Nizioleti e frecce",
          "Alcune scritte indicano nomi di luoghi; altre aiutano a orientarsi verso Rialto, San Marco e Ferrovia: non sono la stessa cosa."
        ]
      ],
      "itinerary": [
        [
          "Piazzale Roma",
          "Inizia a leggere i nomi",
          "Cerca indicazioni, non solo frecce per San Marco; attraversa Santa Croce."
        ],
        [
          "Frari",
          "Leggi le calli vicine",
          "I nomi delle attività e delle parrocchie cambiano da un tratto all'altro."
        ],
        [
          "San Polo",
          "Cerca un campo",
          "Osserva come lo spazio si apre tra case e sottoporteghi."
        ],
        [
          "Rialto",
          "Riconosci mestieri e merci",
          "Tra mercato e botteghe la toponomastica commerciale diventa particolarmente leggibile."
        ],
        [
          "San Marco",
          "Osserva un nizioleto storico",
          "La città non è solo monumenti: cerca l'indicazione che spiega dove sei."
        ],
        [
          "A fine giornata",
          "Confronta i sestieri",
          "Prendi nota di un nome curioso, ma senza fotografare porte o finestre private senza rispetto."
        ]
      ],
      "adviceTitle": "Un nizioleto non è un invito a entrare",
      "advice": "Le calli possono terminare su corti private o accessi condominiali. Leggere una scritta è interessante; attraversare spazi chiusi o cortili privati non è necessario.",
      "heartTitle": "La città è un libro all'aperto",
      "heartText": "Invece di fissare soltanto il navigatore, prova a cercare una parola sui muri. Un nome antico può spiegare più di molte fotografie.",
      "faq": [
        [
          "Che cos'è un nizioleto?",
          "È la tipica indicazione stradale veneziana dipinta in scuro su fondo bianco; letteralmente richiama un piccolo lenzuolo."
        ],
        [
          "Quanti sestieri ha Venezia?",
          "Sei: Cannaregio, Castello, Dorsoduro, San Marco, San Polo e Santa Croce."
        ],
        [
          "Perché i numeri civici veneziani sono così alti?",
          "Perché seguono una progressione di sestiere, detta a insulario, non via per via."
        ],
        [
          "Cosa significa rio terà?",
          "Un antico rio o canale che è stato interrato e trasformato in percorso pedonale."
        ]
      ]
    },
    "en": {
      "title": "Venice nizioleti: what calli, campi and sestieri mean",
      "kicker": "Understand Venice · street names",
      "subtitle": "Painted street names reveal old trades, water geography and six distinct neighbourhoods.",
      "description": "What are Venice nizioleti? Calle, campo, fondamenta, rio terà, sottoportego, salizada, six sestieri and unusual house numbering explained.",
      "imageAlt": "Pedestrian streets and historic buildings in Venice",
      "badges": [
        [
          "Districts",
          "6 sestieri"
        ],
        [
          "Signs",
          "Painted nizioleti"
        ],
        [
          "Addresses",
          "By sestiere"
        ],
        [
          "Tip",
          "Look up"
        ]
      ],
      "introTitle": "Venice's map is written on its walls",
      "intro": [
        "A calle is a pedestrian lane, a campo an open square and a fondamenta a waterside path. The black-on-white painted street labels are called nizioleti, from the word for a small sheet.",
        "Almost all Venice's open squares are called campi or campielli, not piazze; St Mark's is the famous exception. House numbers also run through each sestiere instead of restarting in every street.",
        "Names preserve work and daily life: Pistor refers to bakers, Pestrin to a milk seller, Oresi to goldsmiths, Frutarol to fruit and Frezzaria to the trade in arrows."
      ],
      "highlights": [
        [
          "Six sestieri",
          "Cannaregio, Castello, Dorsoduro, San Marco, San Polo and Santa Croce."
        ],
        [
          "Calle, ruga, salizada",
          "A lane; a street often associated with trade; a street historically paved."
        ],
        [
          "Campo, campiello, corte",
          "A neighbourhood square; a smaller square; an enclosed courtyard."
        ],
        [
          "Fondamenta, rio terà, sottoportego",
          "Waterside walkway; filled-in canal; covered passage beneath a building."
        ],
        [
          "Squero, chiovere, pescaria",
          "Names recall boatyards, open areas for drying cloth and markets."
        ],
        [
          "House numbering",
          "Addresses progress through a district, not along each street; four-digit numbers are normal."
        ],
        [
          "Painted words and arrows",
          "Street-name panels and directional signs serve different purposes."
        ]
      ],
      "itinerary": [
        [
          "Piazzale Roma",
          "Start noticing names",
          "Walk into Santa Croce, looking beyond San Marco arrows."
        ],
        [
          "Frari",
          "Read nearby calle names",
          "Trade and parish history often survives on walls."
        ],
        [
          "San Polo",
          "Find a campo",
          "Notice courtyards and underpasses."
        ],
        [
          "Rialto",
          "Look for trade names",
          "Markets and workshops shaped local names."
        ],
        [
          "San Marco",
          "Notice a nizioleto",
          "Pause to understand the name of the place."
        ],
        [
          "Later",
          "Compare neighbourhoods",
          "Respect private courtyards and residents."
        ]
      ],
      "adviceTitle": "A sign is not an invitation into private spaces",
      "advice": "Some lanes end in private courtyards or residential entrances. Enjoy reading the walls without entering closed areas.",
      "heartTitle": "A city that reads like a book",
      "heartText": "Look up from the map occasionally: an old name can tell you what happened here.",
      "faq": [
        [
          "What is a nizioleto?",
          "A traditional white painted street label with dark lettering, named after a small sheet."
        ],
        [
          "How many sestieri?",
          "Six: Cannaregio, Castello, Dorsoduro, San Marco, San Polo and Santa Croce."
        ],
        [
          "Why are house numbers so high?",
          "They follow the entire sestiere's sequence rather than the individual street."
        ],
        [
          "What is a rio terà?",
          "A former canal that was filled in and became a walkway."
        ]
      ]
    },
    "de": {
      "title": "Nizioleti in Venedig: Calli, Campi und Sestieri erklärt",
      "kicker": "Venedig verstehen · Straßennamen",
      "subtitle": "Die gemalten Schilder erzählen von Handwerk, Kanälen und sechs Vierteln.",
      "description": "Nizioleti, Calli, Campi, Fondamenta, Rio Terà, Sottoportego und die Hausnummern der sechs venezianischen Sestieri.",
      "imageAlt": "Gassen und historische Häuser Venedigs",
      "badges": [
        [
          "Stadtteile",
          "6 Sestieri"
        ],
        [
          "Schilder",
          "Nizioleti"
        ],
        [
          "Hausnummern",
          "Je Stadtteil"
        ],
        [
          "Tipp",
          "Nach oben schauen"
        ]
      ],
      "introTitle": "Venedigs Stadtplan steht auf den Wänden",
      "intro": [
        "Calle bedeutet Fußgängergasse, Campo Platz und Fondamenta Uferweg. Die schwarz-weiß gemalten Straßennamen heißen Nizioleti – nach dem kleinen Tuch.",
        "Die offenen Plätze heißen meist Campi oder Campielli, nicht Piazze. Auch Hausnummern zählen je Sestiere fortlaufend statt straßenweise.",
        "Namen wie Pistor (Bäcker), Pestrin (Milchverkäufer), Oresi (Goldschmiede) und Frutarol (Obstverkäufer) bewahren Berufe der Vergangenheit."
      ],
      "highlights": [
        [
          "Sechs Sestieri",
          "Cannaregio, Castello, Dorsoduro, San Marco, San Polo und Santa Croce."
        ],
        [
          "Calle, Ruga, Salizada",
          "Gasse, oft Handelsstraße, historisch gepflasterter Weg."
        ],
        [
          "Campo, Campiello, Corte",
          "Quartiersplatz, kleiner Platz, Hof."
        ],
        [
          "Fondamenta, Rio Terà, Sottoportego",
          "Uferweg, zugeschütteter Kanal, überdachter Durchgang."
        ],
        [
          "Squero, Chiovere, Pescaria",
          "Werften, Trockenflächen und Märkte im alten Stadtplan."
        ],
        [
          "Nummern à insulario",
          "Die Zahlen laufen durch das Sestiere und können vierstellig sein."
        ],
        [
          "Namen und Wegweiser",
          "Gemalte Straßennamen sind etwas anderes als Richtungspfeile."
        ]
      ],
      "itinerary": [
        [
          "Piazzale Roma",
          "Namen lesen",
          "Durch Santa Croce, nicht nur den Pfeilen folgen."
        ],
        [
          "Frari",
          "Alte Berufe suchen",
          "Straßennamen erklären Handwerk und Pfarreien."
        ],
        [
          "San Polo",
          "Einen Campo entdecken",
          "Platz und Passagen vergleichen."
        ],
        [
          "Rialto",
          "Handelsnamen suchen",
          "Markt und alte Warenwege."
        ],
        [
          "San Marco",
          "Nizioleto beachten",
          "Den Ortsnamen bewusst lesen."
        ],
        [
          "Zum Schluss",
          "Viertel vergleichen",
          "Private Höfe nicht betreten."
        ]
      ],
      "adviceTitle": "Privatbereiche respektieren",
      "advice": "Manche Gassen enden an privaten Höfen. Schilder lesen ist willkommen, abgeschlossene Bereiche betreten nicht.",
      "heartTitle": "Eine Stadt als offenes Geschichtsbuch",
      "heartText": "Manchmal reicht ein Blick auf die Wand, um eine alte Geschichte zu entdecken.",
      "faq": [
        [
          "Was ist ein Nizioleto?",
          "Ein typisch venezianisch gemaltes Straßenschild mit dunkler Schrift auf Weiß."
        ],
        [
          "Wie viele Sestieri gibt es?",
          "Sechs."
        ],
        [
          "Warum hohe Hausnummern?",
          "Die Nummern folgen dem ganzen Stadtteil statt einer Straße."
        ],
        [
          "Was bedeutet Rio Terà?",
          "Ein zugeschütteter, heute begehbarer Kanal."
        ]
      ]
    },
    "fr": {
      "title": "Nizioleti à Venise : calli, campi et sestieri expliqués",
      "kicker": "Comprendre Venise · toponymie",
      "subtitle": "Les noms peints racontent métiers, eau et quartiers.",
      "description": "Nizioleti vénitiens : calle, campo, fondamenta, rio terà, sottoportego, salizada, six sestieri et numérotation des maisons.",
      "imageAlt": "Ruelles piétonnes et bâtiments historiques de Venise",
      "badges": [
        [
          "Quartiers",
          "6 sestieri"
        ],
        [
          "Enseignes",
          "Nizioleti peints"
        ],
        [
          "Adresses",
          "Par quartier"
        ],
        [
          "Conseil",
          "Lever les yeux"
        ]
      ],
      "introTitle": "Venise s'écrit sur ses murs",
      "intro": [
        "Une calle est une ruelle, un campo une place, une fondamenta longe l'eau. Les noms peints en noir sur blanc sont des nizioleti, mot lié au petit drap.",
        "La plupart des places sont des campi ou campielli, non des piazze. Les numéros de maison avancent par sestiere plutôt que par rue.",
        "Pistor (boulanger), Pestrin (laitier), Oresi (orfèvres), Frutarol (fruitier) rappellent des métiers d'autrefois."
      ],
      "highlights": [
        [
          "Six sestieri",
          "Cannaregio, Castello, Dorsoduro, San Marco, San Polo et Santa Croce."
        ],
        [
          "Calle, ruga, salizada",
          "Ruelle, ancienne voie commerçante, voie historiquement pavée."
        ],
        [
          "Campo, campiello, corte",
          "Place de quartier, petite place, cour."
        ],
        [
          "Fondamenta, rio terà, sottoportego",
          "Chemin le long de l'eau, ancien canal comblé, passage couvert."
        ],
        [
          "Squero, chiovere, pescaria",
          "Anciens chantiers, lieux de séchage, marchés."
        ],
        [
          "Numéros à insulario",
          "Numérotation continue dans le sestiere, souvent à quatre chiffres."
        ],
        [
          "Noms et flèches",
          "Les étiquettes de rue et les directions ont des fonctions différentes."
        ]
      ],
      "itinerary": [
        [
          "Piazzale Roma",
          "Lire les noms",
          "Traverser Santa Croce en levant les yeux."
        ],
        [
          "Frari",
          "Chercher les métiers",
          "Les noms parlent des ateliers et paroisses."
        ],
        [
          "San Polo",
          "Reconnaître un campo",
          "Observer les petites places et passages."
        ],
        [
          "Rialto",
          "Traces du commerce",
          "Marché et anciennes activités."
        ],
        [
          "San Marco",
          "Trouver un nizioleto",
          "Lire la mémoire d'un mur."
        ],
        [
          "Fin",
          "Comparer les quartiers",
          "Respecter les cours privées."
        ]
      ],
      "adviceTitle": "Respecter les espaces privés",
      "advice": "Une ruelle peut aboutir dans une cour privée. Les indications ne donnent pas le droit d'entrer.",
      "heartTitle": "Une ville qui se lit",
      "heartText": "Levez parfois les yeux du téléphone : un nom ancien peut raconter beaucoup.",
      "faq": [
        [
          "Qu'est-ce qu'un nizioleto ?",
          "Un nom de rue peint en sombre sur fond blanc."
        ],
        [
          "Combien de sestieri ?",
          "Six."
        ],
        [
          "Pourquoi de grands numéros ?",
          "Ils suivent la numérotation du quartier, pas celle de la rue."
        ],
        [
          "Rio terà ?",
          "Un ancien canal comblé."
        ]
      ]
    },
    "es": {
      "title": "Nizioleti de Venecia: qué significan calli, campi y sestieri",
      "kicker": "Entender Venecia · nombres",
      "subtitle": "Los nombres pintados guardan memoria de oficios y canales.",
      "description": "Qué son los nizioleti: calle, campo, fondamenta, rio terà, sottoportego, salizada, seis sestieri y números de edificios.",
      "imageAlt": "Calles peatonales y edificios de Venecia",
      "badges": [
        [
          "Barrios",
          "6 sestieri"
        ],
        [
          "Letreros",
          "Nizioleti"
        ],
        [
          "Direcciones",
          "Por barrio"
        ],
        [
          "Consejo",
          "Mira arriba"
        ]
      ],
      "introTitle": "El mapa de Venecia está escrito en los muros",
      "intro": [
        "Calle significa callejón peatonal, campo es plaza y fondamenta es camino junto al agua. Los nombres negros sobre fondo blanco se llaman nizioleti, palabra relacionada con una sábana pequeña.",
        "Casi todas las plazas son campi o campielli; Piazza San Marco es la célebre excepción. Los números de edificios avanzan por sestiere y no por calle.",
        "Pistor (panadero), Pestrin (lechero), Oresi (orfebres) o Frutarol (frutero) recuerdan antiguos trabajos."
      ],
      "highlights": [
        [
          "Seis sestieri",
          "Cannaregio, Castello, Dorsoduro, San Marco, San Polo y Santa Croce."
        ],
        [
          "Calle, ruga, salizada",
          "Callejón, antigua vía comercial y calle históricamente pavimentada."
        ],
        [
          "Campo, campiello, corte",
          "Plaza, plazuela y patio."
        ],
        [
          "Fondamenta, rio terà, sottoportego",
          "Paseo junto al canal, canal rellenado y pasaje cubierto."
        ],
        [
          "Squero, chiovere, pescaria",
          "Astilleros pequeños, lugares para secar tejidos y mercados."
        ],
        [
          "Numeración a insulario",
          "Los números siguen todo el barrio y pueden tener cuatro cifras."
        ],
        [
          "Nombres y flechas",
          "Señales de calle y direcciones no son iguales."
        ]
      ],
      "itinerary": [
        [
          "Piazzale Roma",
          "Leer nombres",
          "Cruzar Santa Croce levantando la vista."
        ],
        [
          "Frari",
          "Buscar los oficios",
          "Nombres de talleres y parroquias."
        ],
        [
          "San Polo",
          "Encontrar un campo",
          "Observar plazas y pasajes."
        ],
        [
          "Rialto",
          "Viejo comercio",
          "Mercados y oficios en las calles."
        ],
        [
          "San Marco",
          "Leer un nizioleto",
          "Entender qué lugar recorres."
        ],
        [
          "Al final",
          "Comparar barrios",
          "No entrar en patios privados."
        ]
      ],
      "adviceTitle": "Respeta los espacios privados",
      "advice": "Algunas calles terminan en patios residenciales. Leer los letreros no permite entrar.",
      "heartTitle": "Una ciudad para leer",
      "heartText": "Levanta la vista del móvil: cada nombre puede contar una historia.",
      "faq": [
        [
          "¿Qué es un nizioleto?",
          "Nombre de calle pintado en oscuro sobre fondo blanco."
        ],
        [
          "¿Cuántos sestieri?",
          "Seis."
        ],
        [
          "¿Por qué números tan altos?",
          "La numeración es continua por barrio."
        ],
        [
          "¿Qué significa rio terà?",
          "Un canal antiguo rellenado."
        ]
      ]
    },
    "zh": {
      "title": "威尼斯 Nizioleti 路牌：Calle、Campo 与六大街区",
      "kicker": "读懂威尼斯 · 地名",
      "subtitle": "墙上的地名保留着古老职业、运河和街区的故事。",
      "description": "认识威尼斯 nizioleti 白底黑字路牌、calle、campo、fondamenta、rio terà、sottoportego、六大 sestieri 和门牌编号。",
      "imageAlt": "威尼斯历史中心的步行小巷与建筑",
      "badges": [
        [
          "街区",
          "六大 sestieri"
        ],
        [
          "路牌",
          "Nizioleti"
        ],
        [
          "门牌",
          "按街区顺序"
        ],
        [
          "提示",
          "抬头看看"
        ]
      ],
      "introTitle": "威尼斯的地图写在墙上",
      "intro": [
        "Calle 是步行小巷，campo 是广场，fondamenta 是临水步道。墙上白底黑字的传统地名叫 nizioleti，名称与“小床单”有关。",
        "多数广场叫 campi 或 campielli，著名的 Piazza San Marco 是例外。门牌号按整个 sestiere 编排，而不是每条街从头编号。",
        "Pistor（面包师）、Pestrin（送奶人）、Oresi（金匠）、Frutarol（果贩）等名称保留了古老手艺。"
      ],
      "highlights": [
        [
          "六大 sestieri",
          "Cannaregio、Castello、Dorsoduro、San Marco、San Polo、Santa Croce。"
        ],
        [
          "Calle、ruga、salizada",
          "小巷、与商业有关的街道、历史上较早铺路的街道。"
        ],
        [
          "Campo、campiello、corte",
          "广场、小广场和院落。"
        ],
        [
          "Fondamenta、rio terà、sottoportego",
          "临水步道、填平的运河、建筑下方的有顶通道。"
        ],
        [
          "Squero、chiovere、pescaria",
          "船坞、晒布场与集市的地名记忆。"
        ],
        [
          "门牌 a insulario",
          "按街区依次编号，常见四位数字。"
        ],
        [
          "路名与方向箭头",
          "名称牌与指路箭头功能不同。"
        ]
      ],
      "itinerary": [
        [
          "Piazzale Roma",
          "开始读路名",
          "经过 Santa Croce，注意墙上的字。"
        ],
        [
          "Frari",
          "寻找职业名称",
          "读懂教区与手艺历史。"
        ],
        [
          "San Polo",
          "观察 campo",
          "注意广场及廊下通道。"
        ],
        [
          "Rialto",
          "寻找贸易痕迹",
          "市场附近尤其有意思。"
        ],
        [
          "San Marco",
          "发现 nizioleto",
          "了解自己身处的地方。"
        ],
        [
          "最后",
          "对比各街区",
          "尊重私人院落。"
        ]
      ],
      "adviceTitle": "路牌不代表可以进入私人空间",
      "advice": "一些小巷通向私人住宅庭院；阅读墙上文字不等于可以进入。",
      "heartTitle": "像读书一样逛威尼斯",
      "heartText": "偶尔收起导航，老路名能讲述城市故事。",
      "faq": [
        [
          "Nizioleto 是什么？",
          "白底黑字的传统威尼斯街名涂绘。"
        ],
        [
          "威尼斯有几个 sestieri？",
          "六个。"
        ],
        [
          "为什么门牌号码很大？",
          "因为整片街区连续编号。"
        ],
        [
          "Rio terà 是什么？",
          "填平后变成步行道的旧运河。"
        ]
      ]
    }
  },
  "parole-veneziane-glossario": {
    "it": {
      "title": "Parole veneziane: glossario del dialetto, da freschin a caìgo",
      "kicker": "Parole di Venezia · mini dizionario",
      "subtitle": "Trenta parole per capire voci, oggetti e paesaggi della laguna, senza trasformare il dialetto in folclore.",
      "description": "Glossario veneziano: cosa significano freschin, xe, ghe xe, ciàcole, schei, caìgo, cocàl, altana, bricola, squero, morosi e altre parole.",
      "imageAlt": "Panorama dei canali veneziani, luoghi del dialetto della laguna",
      "badges": [
        [
          "Tema",
          "Dialetto veneziano"
        ],
        [
          "Da sapere",
          "Freschin"
        ],
        [
          "Paesaggio",
          "Barena e velma"
        ],
        [
          "Curiosità",
          "Ciao e s-ciao"
        ]
      ],
      "introTitle": "Il veneziano descrive cose che l'italiano dice più lentamente",
      "intro": [
        "Non è necessario parlare dialetto per apprezzare Venezia. Ma alcune parole dicono subito come vive una città d'acqua: una *bricola* non è una semplice palina, una *cavana* non è un normale garage, e il *caìgo* cambia completamente la vista sui canali.",
        "Il dialetto non ha una sola grafia o una pronuncia identica in ogni zona. Gli accenti e le forme possono variare fra Venezia, laguna e terraferma; per questo questo glossario è un invito all'ascolto, non una lezione di grammatica.",
        "Una parola da ricordare è *freschin*: l'odore caratteristico che può restare su stoviglie lavate, specie con residui di pesce o uova. Non equivale semplicemente a 'puzza di pesce' e non è un profumo tipico della laguna."
      ],
      "highlights": [
        [
          "Xe · go · ghe xe",
          "Xe = è; go = ho; ghe xe = c'è / ci sono. Sono forme quotidiane, non slogan turistici."
        ],
        [
          "Ciàcole · bagolo · un fià",
          "Ciàcole = chiacchiere; bagolo = scherzo/chiasso secondo il contesto; un fià = un poco."
        ],
        [
          "Fioi · putèi · morosi",
          "Fioi e putèi = ragazzi/bambini, con usi locali; morosi = fidanzati o innamorati."
        ],
        [
          "Còcolo · santolo · schei",
          "Còcolo = carino/affettuoso; santolo = padrino; schei = soldi."
        ],
        [
          "Caìgo · cocàl · freschin",
          "Caìgo = nebbia; cocàl = gabbiano; freschin = odore particolare che resta su piatti o utensili."
        ],
        [
          "Altana · bovolo · squero",
          "Altana = terrazza sopra i tetti; bovolo = scala a chiocciola; squero = cantiere artigianale delle barche."
        ],
        [
          "Barena · velma · bricola · cavana",
          "Barena = terra vegetata periodicamente sommersa; velma = bassofondo che emerge con la marea; bricola = pali di segnalazione; cavana = riparo per barche."
        ],
        [
          "Gòto · tècia · carèga · scarsèla",
          "Gòto = bicchiere; tècia = pentola; carèga = sedia; scarsèla = tasca."
        ],
        [
          "Ciao e s-ciao",
          "L'etimologia tradizionale di ciao è ricondotta a s-ciao, cioè 'schiavo [vostro]' come formula storica di saluto; non è un invito a usarla letteralmente."
        ]
      ],
      "itinerary": [
        [
          "In un bacaro",
          "Ombra, gòto, ciàcole",
          "Osserva l'uso delle parole nel contesto: non tutti parlano dialetto fra turisti."
        ],
        [
          "In una calle",
          "Cerca le parole sui muri",
          "Nizioleti e nomi dei mestieri sono un vocabolario urbano."
        ],
        [
          "Sul vaporetto",
          "Bricole e cavane",
          "Guarda i pali di segnalazione e i ricoveri delle barche."
        ],
        [
          "Con la nebbia",
          "Capisci il caìgo",
          "Una parola più precisa di 'brutto tempo' per quella luce smorzata."
        ],
        [
          "In cucina",
          "Tècia e freschin",
          "È un lessico domestico, non soltanto di piazze o gondole."
        ]
      ],
      "adviceTitle": "Non tutte le parole hanno una traduzione perfetta",
      "advice": "La resa dipende dal contesto, dall'età del parlante e dalla zona. Evita di prendere una singola definizione come regola assoluta; soprattutto non confondere freschin con la puzza generica del pesce.",
      "heartTitle": "La parola più bella è quella ascoltata per caso",
      "heartText": "Un piccolo glossario serve a capire meglio una conversazione o un cartello, non a recitare il dialetto ai residenti.",
      "faq": [
        [
          "Cosa significa freschin?",
          "Un odore caratteristico, spesso persistente sulle stoviglie dopo il lavaggio, associato soprattutto a residui di uova o pesce; non significa genericamente acqua di laguna."
        ],
        [
          "Cosa vuol dire caìgo?",
          "Nebbia."
        ],
        [
          "Perché si dice schei?",
          "È una parola veneziana per denaro; l'origine storica è legata alle monete in uso in epoca austriaca."
        ],
        [
          "La parola ciao nasce dal veneziano?",
          "L'etimologia tradizionale la collega a s-ciao, 'schiavo vostro', formula di saluto storica."
        ]
      ]
    },
    "en": {
      "title": "Venetian words: dialect glossary from freschin to caìgo",
      "kicker": "Language · Venice glossary",
      "subtitle": "Discover local words for people, objects, fog and life on the lagoon.",
      "description": "Venetian dialect glossary: freschin, xe, ghe xe, ciàcole, schei, caìgo, cocàl, altana, bricola, squero, morosi and more.",
      "imageAlt": "Venetian canals where the lagoon dialect lives",
      "badges": [
        [
          "Topic",
          "Venetian dialect"
        ],
        [
          "Signature word",
          "Freschin"
        ],
        [
          "Landscape",
          "Barena and velma"
        ],
        [
          "Origin",
          "Ciao"
        ]
      ],
      "introTitle": "Venetian has words for things standard Italian barely names",
      "intro": [
        "A bricola is a group of navigation poles; a cavana shelters a boat; caìgo is fog. Such words describe the life and geography of a water city.",
        "Spelling and usage vary across Venice, its islands and the mainland. This is a listening guide, not a fixed dictionary for every speaker.",
        "Freschin describes a particular persistent smell on washed dishes or utensils, often associated with egg or fish residues. It does not simply mean 'fish stink' or the smell of the lagoon."
      ],
      "highlights": [
        [
          "Xe · go · ghe xe",
          "Is; I have; there is/there are."
        ],
        [
          "Ciàcole · bagolo · un fià",
          "Chatting; joking/noisy fun; a little."
        ],
        [
          "Fioi · putèi · morosi",
          "Children or youngsters; children; boyfriends/girlfriends."
        ],
        [
          "Còcolo · santolo · schei",
          "Cute/affectionate; godfather; money."
        ],
        [
          "Caìgo · cocàl · freschin",
          "Fog; seagull; a distinctive lingering smell on dishes."
        ],
        [
          "Altana · bovolo · squero",
          "Roof terrace; spiral staircase; traditional boatyard."
        ],
        [
          "Barena · velma · bricola · cavana",
          "Salt marsh, tidal mudbank, channel marker poles and boat shelter."
        ],
        [
          "Gòto · tècia · carèga · scarsèla",
          "Glass; cooking pot; chair; pocket."
        ],
        [
          "Ciao and s-ciao",
          "A traditional etymology links ciao to the Venetian historic greeting s-ciao ('your servant')."
        ]
      ],
      "itinerary": [
        [
          "In a bacaro",
          "Listen to ciàcole",
          "Local words sound different in context."
        ],
        [
          "In a lane",
          "Read the nizioleti",
          "Street names preserve former trades."
        ],
        [
          "On a vaporetto",
          "Find bricole and cavane",
          "Look for poles and boat shelters."
        ],
        [
          "On a foggy morning",
          "Understand caìgo",
          "A word for a particular lagoon atmosphere."
        ],
        [
          "At home",
          "Tècia and freschin",
          "The dialect also names everyday domestic experiences."
        ]
      ],
      "adviceTitle": "Meanings depend on context",
      "advice": "Spelling, age and neighbourhood affect usage. Freschin should not be reduced to 'fish smell'.",
      "heartTitle": "Learn from listening",
      "heartText": "Use the words to understand what you hear, not to imitate residents.",
      "faq": [
        [
          "What does freschin mean?",
          "A distinctive smell that can linger on washed utensils, particularly after eggs or fish."
        ],
        [
          "What is caìgo?",
          "Fog."
        ],
        [
          "What does schei mean?",
          "Money; its historical origins relate to Austrian-era coinage."
        ],
        [
          "Is ciao Venetian?",
          "Its traditional etymology is linked to s-ciao, a historic phrase of respect."
        ]
      ]
    },
    "de": {
      "title": "Venezianische Wörter: Dialekt von freschin bis caìgo",
      "kicker": "Sprache · Venedig-Glossar",
      "subtitle": "Wörter für Menschen, Nebel, Boote und das Leben in der Lagune.",
      "description": "Glossar venezianischer Begriffe: freschin, xe, ciàcole, schei, caìgo, cocàl, altana, bricola, squero und mehr.",
      "imageAlt": "Kanäle Venedigs als Lebensraum des Dialekts",
      "badges": [
        [
          "Thema",
          "Venezianischer Dialekt"
        ],
        [
          "Wort",
          "Freschin"
        ],
        [
          "Natur",
          "Barena und velma"
        ],
        [
          "Geschichte",
          "Ciao"
        ]
      ],
      "introTitle": "Der Dialekt beschreibt eine Stadt am Wasser",
      "intro": [
        "Bricola nennt die Pfähle der Fahrrinnen, cavana einen Bootsunterschlupf und caìgo den Nebel. Solche Wörter sind eng mit dem Alltag verbunden.",
        "Schreibweise und Gebrauch können zwischen Stadt, Inseln und Festland variieren. Das Glossar soll beim Verstehen helfen, nicht Sprachregeln festschreiben.",
        "Freschin bezeichnet einen besonderen, anhaltenden Geruch auf gespültem Geschirr, oft nach Ei oder Fisch – nicht einfach Fischgestank oder Lagunengeruch."
      ],
      "highlights": [
        [
          "Xe · go · ghe xe",
          "Ist; ich habe; es gibt."
        ],
        [
          "Ciàcole · bagolo · un fià",
          "Gespräche; Scherz/Trubel; ein wenig."
        ],
        [
          "Fioi · putèi · morosi",
          "Kinder/Jugendliche; Kinder; Liebespaare."
        ],
        [
          "Còcolo · santolo · schei",
          "Niedlich; Pate; Geld."
        ],
        [
          "Caìgo · cocàl · freschin",
          "Nebel; Möwe; spezieller Geschirrgeruch."
        ],
        [
          "Altana · bovolo · squero",
          "Dachterrasse; Wendeltreppe; Bootswerft."
        ],
        [
          "Barena · velma · bricola · cavana",
          "Salzwiese; Wattbank; Fahrwassermarker; Bootsschutz."
        ],
        [
          "Gòto · tècia · carèga · scarsèla",
          "Glas; Topf; Stuhl; Tasche."
        ],
        [
          "Ciao und s-ciao",
          "Eine traditionelle Wortgeschichte führt ciao auf s-ciao zurück, einen historischen Gruß."
        ]
      ],
      "itinerary": [
        [
          "Im Bacaro",
          "Ciàcole hören",
          "Gespräche im Alltag verstehen."
        ],
        [
          "In der Gasse",
          "Nizioleti lesen",
          "Alte Berufsnamen entdecken."
        ],
        [
          "Auf dem Vaporetto",
          "Bricole und Cavane",
          "Pfähle und Bootsschuppen ansehen."
        ],
        [
          "Bei Nebel",
          "Caìgo erleben",
          "Die besondere Lagunenstimmung."
        ],
        [
          "Im Haushalt",
          "Tècia und freschin",
          "Vokabular für alltägliche Dinge."
        ]
      ],
      "adviceTitle": "Übersetzung ist nicht immer wörtlich",
      "advice": "Bedeutung und Schreibweise hängen vom Zusammenhang ab. Freschin ist nicht einfach jeder Fischgeruch.",
      "heartTitle": "Beim Zuhören lernen",
      "heartText": "Die Wörter helfen, Gespräche und Ortsnamen zu verstehen.",
      "faq": [
        [
          "Was ist freschin?",
          "Ein besonderer Geruch, der nach dem Spülen auf Geschirr zurückbleiben kann."
        ],
        [
          "Was heißt caìgo?",
          "Nebel."
        ],
        [
          "Schei?",
          "Geld, mit historischen Bezügen zu österreichischen Münzen."
        ],
        [
          "Woher kommt ciao?",
          "Traditionell wird es auf venezianisch s-ciao zurückgeführt."
        ]
      ]
    },
    "fr": {
      "title": "Mots vénitiens : petit glossaire de freschin à caìgo",
      "kicker": "Langue · glossaire vénitien",
      "subtitle": "Les mots de l'eau, du brouillard et de la vie quotidienne.",
      "description": "Petit glossaire du dialecte vénitien : freschin, xe, ciàcole, schei, caìgo, cocàl, altana, bricola, squero et bien plus.",
      "imageAlt": "Canaux où résonne le dialecte vénitien",
      "badges": [
        [
          "Sujet",
          "Dialecte vénitien"
        ],
        [
          "Mot",
          "Freschin"
        ],
        [
          "Paysage",
          "Barena et velma"
        ],
        [
          "Origine",
          "Ciao"
        ]
      ],
      "introTitle": "Les mots disent la vie de la lagune",
      "intro": [
        "Bricola désigne les pieux de navigation, cavana un abri pour bateau et caìgo le brouillard. Le dialecte nomme avec précision le monde de l'eau.",
        "Orthographe et usages varient selon Venise, les îles et la terre ferme. Ce glossaire est un guide d'écoute, pas une grammaire absolue.",
        "Freschin désigne une odeur persistante particulière sur la vaisselle lavée, souvent liée à des résidus d'œuf ou de poisson. Ce n'est pas simplement l'odeur du poisson ou de la lagune."
      ],
      "highlights": [
        [
          "Xe · go · ghe xe",
          "Est ; j'ai ; il y a."
        ],
        [
          "Ciàcole · bagolo · un fià",
          "Bavardage ; plaisanterie ; un peu."
        ],
        [
          "Fioi · putèi · morosi",
          "Enfants/jeunes ; enfants ; amoureux."
        ],
        [
          "Còcolo · santolo · schei",
          "Mignon ; parrain ; argent."
        ],
        [
          "Caìgo · cocàl · freschin",
          "Brouillard ; mouette ; odeur particulière de vaisselle."
        ],
        [
          "Altana · bovolo · squero",
          "Terrasse sur les toits ; escalier en colimaçon ; chantier naval artisanal."
        ],
        [
          "Barena · velma · bricola · cavana",
          "Marais salé ; banc de vase tidal ; pieux de navigation ; abri à bateau."
        ],
        [
          "Gòto · tècia · carèga · scarsèla",
          "Verre ; casserole ; chaise ; poche."
        ],
        [
          "Ciao et s-ciao",
          "Une étymologie traditionnelle relie ciao au salut ancien s-ciao."
        ]
      ],
      "itinerary": [
        [
          "Au bacaro",
          "Écouter les ciàcole",
          "Les conversations donnent du contexte."
        ],
        [
          "Dans une ruelle",
          "Lire les nizioleti",
          "Les anciens métiers apparaissent sur les murs."
        ],
        [
          "En vaporetto",
          "Repérer bricole et cavane",
          "Pieux et abris à bateaux."
        ],
        [
          "Dans le brouillard",
          "Découvrir caìgo",
          "Une ambiance propre à la lagune."
        ],
        [
          "À la maison",
          "Tècia et freschin",
          "Le vocabulaire est aussi domestique."
        ]
      ],
      "adviceTitle": "Le contexte change le sens",
      "advice": "Les usages varient ; freschin ne se réduit pas à une mauvaise odeur de poisson.",
      "heartTitle": "Écoutez avant de répéter",
      "heartText": "Ces mots aident à comprendre les habitants et la ville.",
      "faq": [
        [
          "Que signifie freschin ?",
          "Une odeur particulière sur certains ustensiles lavés, souvent après œuf ou poisson."
        ],
        [
          "Caìgo ?",
          "Brouillard."
        ],
        [
          "Schei ?",
          "Argent, terme lié historiquement à la monnaie de l'époque autrichienne."
        ],
        [
          "Ciao vient du vénitien ?",
          "Son étymologie traditionnelle le rattache au salut s-ciao."
        ]
      ]
    },
    "es": {
      "title": "Palabras venecianas: glosario de freschin a caìgo",
      "kicker": "Idioma · glosario",
      "subtitle": "Palabras del agua, la niebla y la vida de la laguna.",
      "description": "Glosario del dialecto veneciano: freschin, xe, ciàcole, schei, caìgo, cocàl, altana, bricola, squero y más.",
      "imageAlt": "Canales de Venecia y cultura del dialecto",
      "badges": [
        [
          "Tema",
          "Dialecto veneciano"
        ],
        [
          "Palabra",
          "Freschin"
        ],
        [
          "Paisaje",
          "Barena y velma"
        ],
        [
          "Historia",
          "Ciao"
        ]
      ],
      "introTitle": "El veneciano habla de una ciudad sobre el agua",
      "intro": [
        "Bricola es un grupo de postes para navegar, cavana es refugio de barcas y caìgo es niebla. Muchas palabras tienen un sentido muy concreto.",
        "La escritura y el uso pueden variar entre la ciudad, las islas y el continente. Este glosario invita a escuchar, no impone reglas.",
        "Freschin nombra un olor característico que puede persistir en la vajilla lavada, especialmente tras huevos o pescado. No significa simplemente 'olor a pescado' ni olor de la laguna."
      ],
      "highlights": [
        [
          "Xe · go · ghe xe",
          "Es/está; tengo; hay."
        ],
        [
          "Ciàcole · bagolo · un fià",
          "Charla; broma/alboroto; un poquito."
        ],
        [
          "Fioi · putèi · morosi",
          "Chicos/niños; niños; novios."
        ],
        [
          "Còcolo · santolo · schei",
          "Cariñoso/bonito; padrino; dinero."
        ],
        [
          "Caìgo · cocàl · freschin",
          "Niebla; gaviota; olor particular de vajilla."
        ],
        [
          "Altana · bovolo · squero",
          "Terraza sobre tejados; escalera de caracol; astillero artesanal."
        ],
        [
          "Barena · velma · bricola · cavana",
          "Marisma salina; banco de lodo mareal; postes de navegación; cobertizo de barcos."
        ],
        [
          "Gòto · tècia · carèga · scarsèla",
          "Vaso; olla; silla; bolsillo."
        ],
        [
          "Ciao y s-ciao",
          "La etimología tradicional relaciona ciao con el antiguo saludo s-ciao."
        ]
      ],
      "itinerary": [
        [
          "En un bacaro",
          "Escucha ciàcole",
          "Las conversaciones aportan contexto."
        ],
        [
          "En una calle",
          "Lee nizioleti",
          "Descubre oficios antiguos."
        ],
        [
          "En el vaporetto",
          "Busca bricole y cavane",
          "Postes y refugios de barcas."
        ],
        [
          "Con niebla",
          "Entiende caìgo",
          "Una luz muy veneciana."
        ],
        [
          "En casa",
          "Tècia y freschin",
          "También existe vocabulario doméstico."
        ]
      ],
      "adviceTitle": "El contexto importa",
      "advice": "La traducción depende del uso. Freschin no es simplemente cualquier olor a pescado.",
      "heartTitle": "Aprende escuchando",
      "heartText": "Estas palabras ayudan a entender la ciudad sin imitar a los residentes.",
      "faq": [
        [
          "¿Qué es freschin?",
          "Un olor particular que puede quedar en utensilios lavados tras huevo o pescado."
        ],
        [
          "¿Caìgo?",
          "Niebla."
        ],
        [
          "¿Schei?",
          "Dinero, relacionado históricamente con monedas de la época austriaca."
        ],
        [
          "¿De dónde viene ciao?",
          "Su origen tradicional se vincula al saludo veneciano s-ciao."
        ]
      ]
    },
    "zh": {
      "title": "威尼斯方言词汇：从 freschin 到 caìgo 的小词典",
      "kicker": "威尼斯语言 · 迷你词典",
      "subtitle": "通过当地词语理解海水、雾、船只与日常生活。",
      "description": "威尼斯方言词典：freschin、xe、ciàcole、schei、caìgo、cocàl、altana、bricola、squero 等词的含义。",
      "imageAlt": "威尼斯运河与当地语言文化",
      "badges": [
        [
          "主题",
          "威尼斯方言"
        ],
        [
          "特别词语",
          "Freschin"
        ],
        [
          "潟湖地貌",
          "Barena 与 velma"
        ],
        [
          "语言趣闻",
          "Ciao"
        ]
      ],
      "introTitle": "方言记录着水上城市的生活",
      "intro": [
        "Bricola 是航道标记木桩，cavana 是船只遮蔽处，caìgo 是雾。这些当地词语精准反映潟湖的日常。",
        "威尼斯本岛、周边岛屿与陆地地区的写法和用法可能不同。这是理解当地语言的入门，而非严格语法规则。",
        "Freschin 指某种洗净的餐具或用具上残留的特殊气味，常与蛋或鱼的残留有关，并非泛指鱼腥味或潟湖的气味。"
      ],
      "highlights": [
        [
          "Xe · go · ghe xe",
          "是；我有；有/存在。"
        ],
        [
          "Ciàcole · bagolo · un fià",
          "聊天；玩笑/热闹；一点点。"
        ],
        [
          "Fioi · putèi · morosi",
          "孩子或年轻人；孩子；恋人。"
        ],
        [
          "Còcolo · santolo · schei",
          "可爱/亲切；教父；钱。"
        ],
        [
          "Caìgo · cocàl · freschin",
          "雾；海鸥；餐具上的特殊残留气味。"
        ],
        [
          "Altana · bovolo · squero",
          "屋顶平台；螺旋楼梯；传统造船厂。"
        ],
        [
          "Barena · velma · bricola · cavana",
          "盐沼；潮间泥滩；航道木桩；船只遮蔽处。"
        ],
        [
          "Gòto · tècia · carèga · scarsèla",
          "杯子；锅；椅子；口袋。"
        ],
        [
          "Ciao 与 s-ciao",
          "传统词源认为 ciao 与历史上的敬语问候 s-ciao 有关。"
        ]
      ],
      "itinerary": [
        [
          "在 bacaro 小酒馆",
          "听 ciàcole",
          "通过对话理解用法。"
        ],
        [
          "在小巷里",
          "读 nizioleti",
          "墙上保留许多旧职业名称。"
        ],
        [
          "在水上巴士上",
          "寻找 bricole 与 cavane",
          "观察航道木桩和船棚。"
        ],
        [
          "雾天",
          "理解 caìgo",
          "感受潟湖的独特光线。"
        ],
        [
          "在厨房",
          "认识 tècia 与 freschin",
          "日常家务也有本地词语。"
        ]
      ],
      "adviceTitle": "意义随语境变化",
      "advice": "不同地区用法可能不同。Freschin 不只是一般意义的鱼腥味。",
      "heartTitle": "先听，再学",
      "heartText": "这些词帮助理解本地生活，而不必刻意模仿。",
      "faq": [
        [
          "Freschin 是什么意思？",
          "洗净的餐具上可能留下的一种特殊气味，常见于蛋或鱼残留。"
        ],
        [
          "Caìgo 是什么？",
          "雾。"
        ],
        [
          "Schei 呢？",
          "钱，这个词与奥地利统治时期的钱币有历史联系。"
        ],
        [
          "Ciao 来自威尼斯吗？",
          "传统词源将其追溯到旧时问候语 s-ciao。"
        ]
      ]
    }
  },
  "venezia-da-fotografare": {
    "it": {
      "title": "Dove fotografare Venezia: 10 scorci e la luce migliore",
      "kicker": "Venezia da fotografare · fotografia rispettosa",
      "subtitle": "Dal Ponte dell'Accademia a Burano, tra dettagli, riflessi e luoghi dove fermarsi senza intralciare.",
      "description": "Dove fare foto a Venezia: Ponte Accademia, Rialto, San Marco, Ponte dei Sospiri da Ponte della Paglia, Punta Dogana, Zattere, Cannaregio, Burano e regole droni.",
      "imageAlt": "Ponte di Rialto sul Canal Grande, punto fotografico di Venezia",
      "badges": [
        [
          "Fascia",
          "Alba · tramonto"
        ],
        [
          "Attrezzatura",
          "Basta il telefono"
        ],
        [
          "Rispetto",
          "Lascia passare"
        ],
        [
          "Droni",
          "Verifica ENAC"
        ]
      ],
      "introTitle": "La luce conta più della lista di luoghi",
      "intro": [
        "Venezia cambia ogni volta che cambia la luce: la stessa fondamenta può avere colori delicati al mattino e riflessi metallici a sera. Prima di cercare lo scatto perfetto, scegli due o tre soggetti che ti interessano.",
        "La città è abitata e attraversata da persone al lavoro. Non fermarti sul centro di un ponte, non occupare un imbarcadero, non entrare in aree private e rispetta le regole delle istituzioni culturali. Con un telefono pulisci la lente, cura il bordo dell'immagine e cerca un punto stabile.",
        "La direzione del sole cambia con stagione e orario, quindi le 'ore perfette' non sono fisse. Il meteo, anche nebbioso o piovoso, può offrire soggetti interessanti senza obbligarti a voli con drone."
      ],
      "highlights": [
        [
          "Ponte dell'Accademia",
          "Canal Grande e cupola della Salute, barche e riflessi. Non bloccare il passaggio sul ponte."
        ],
        [
          "Rialto e mercato",
          "Fotografa l'attività del mattino, i banchi e le barche da lavoro rispettando venditori e clienti."
        ],
        [
          "San Marco e Riva degli Schiavoni",
          "Architettura e dettagli, evitando di disturbare l'accesso a edifici e visite."
        ],
        [
          "Ponte dei Sospiri · il punto giusto",
          "Lo scorcio classico si vede dal Ponte della Paglia, sulla Riva degli Schiavoni; il ponte dei Sospiri non è un ponte da attraversare liberamente."
        ],
        [
          "Zattere, Salute e Punta Dogana",
          "Orizzonti sul bacino, geometrie della Punta e dettagli architettonici. Attento alla marea e alle passerelle."
        ],
        [
          "Cannaregio e Ponte Chiodo",
          "Canali più tranquilli; Ponte Chiodo è privato e va osservato da spazio pubblico, senza entrare."
        ],
        [
          "Burano e Pellestrina",
          "Colori, panni, barche, reti, laguna. Non usare porte o finestre abitate come set fotografico."
        ],
        [
          "Scala Contarini del Bovolo e Libreria Acqua Alta",
          "Due luoghi scenografici con accessi e regole propri; verifica gli orari e rispetta gli altri visitatori."
        ],
        [
          "Nebbia, pioggia e dettagli",
          "Il caìgo, le gocce e le calli bagnate raccontano altre Venezie. Proteggi l'attrezzatura e usa calzature adatte."
        ],
        [
          "Droni e riprese",
          "Non dare per scontato di poter decollare: ENAC richiede verifica di zone UAS su d-flight, competenze e altri requisiti; possono servire autorizzazioni aggiuntive."
        ]
      ],
      "itinerary": [
        [
          "Mattino presto",
          "Accademia oppure San Marco",
          "Scegli un luogo, non tre: luce e folla variano molto."
        ],
        [
          "Mattina",
          "Rialto mercato",
          "Cerca scene quotidiane senza ostacolare lavoro e passaggio."
        ],
        [
          "Mezzogiorno",
          "Dettagli di calli e portoni",
          "Luce dura? Concentrati su texture, pietra e ombre."
        ],
        [
          "Tardo pomeriggio",
          "Zattere o Punta della Dogana",
          "Osserva come cambia il colore dell'acqua."
        ],
        [
          "Sera",
          "Cannaregio",
          "Riflessi e fondamente illuminate; evita tripodi ingombranti."
        ],
        [
          "Altro giorno",
          "Burano o Pellestrina",
          "Per colore e vita di laguna dedica una giornata autonoma con ritorno ACTV pianificato."
        ]
      ],
      "adviceTitle": "Fotografare bene significa anche rispettare",
      "advice": "Non utilizzare treppiedi o attrezzature che intralciano, evita fotografie intrusive di persone e abitazioni, non disturbare celebrazioni o musei. Per droni verifica ENAC/d-flight prima di ogni volo; l'assenza di un divieto visibile sul posto non significa automaticamente che il volo sia autorizzato.",
      "heartTitle": "Metti via la fotocamera ogni tanto",
      "heartText": "Uno scorcio che ricorderai senza fotografarlo vale quanto cento scatti perfetti.",
      "faq": [
        [
          "Dove si vede il Ponte dei Sospiri?",
          "Dal Ponte della Paglia vicino a Palazzo Ducale sulla Riva degli Schiavoni."
        ],
        [
          "Dove fotografare il Canal Grande?",
          "Dal Ponte dell'Accademia, da Rialto o da un vaporetto negli spazi consentiti."
        ],
        [
          "Si possono usare droni turistici a Venezia?",
          "Non automaticamente. Controlla zone ENAC/d-flight, regole del drone, privacy e permessi eventualmente necessari."
        ],
        [
          "Ponte Chiodo è aperto al pubblico?",
          "È un ponte privato; puoi ammirarlo da luoghi pubblici senza attraversare aree riservate."
        ]
      ]
    },
    "en": {
      "title": "Venice photography spots: where and when to take pictures",
      "kicker": "Photograph Venice · with respect",
      "subtitle": "Accademia Bridge, Rialto, the Bridge of Sighs and quieter lagoon scenes.",
      "description": "Best photo spots in Venice: Accademia, Rialto, St Mark's, Bridge of Sighs from Ponte della Paglia, Zattere, Burano, Cannaregio and drone rules.",
      "imageAlt": "Rialto Bridge on the Grand Canal, a classic Venice photo spot",
      "badges": [
        [
          "Light",
          "Morning · evening"
        ],
        [
          "Camera",
          "Phone is enough"
        ],
        [
          "Respect",
          "Keep paths clear"
        ],
        [
          "Drones",
          "Check ENAC"
        ]
      ],
      "introTitle": "Light matters more than checking off photo spots",
      "intro": [
        "Venice changes with the light, fog and tides. Pick a few subjects you love rather than trying to reproduce every viral picture.",
        "The city is lived in. Keep bridges, landings and doorways clear, respect private spaces and museum rules. A clean phone lens and thoughtful composition are often enough.",
        "There is no perfect hour for every angle: season and weather matter. Rain and fog can become interesting subjects too."
      ],
      "highlights": [
        [
          "Accademia Bridge",
          "Grand Canal and Salute dome; keep the walkway clear."
        ],
        [
          "Rialto market",
          "Morning traders, boats and canal life; respect working people."
        ],
        [
          "St Mark's and the waterfront",
          "Architectural details and reflections without obstructing visitors."
        ],
        [
          "Bridge of Sighs viewpoint",
          "The classic view is from Ponte della Paglia near the Doge's Palace, not by walking over the enclosed bridge."
        ],
        [
          "Zattere and Punta della Dogana",
          "Broad water views and striking geometry; mind tides."
        ],
        [
          "Cannaregio and Ponte Chiodo",
          "A quiet canal and a privately owned bridge: photograph from public space only."
        ],
        [
          "Burano and Pellestrina",
          "Colours, fishing boats and everyday life; people's homes are not photo props."
        ],
        [
          "Bovolo staircase and Libreria Acqua Alta",
          "Distinctive sites with their own entry and photography rules."
        ],
        [
          "Fog, rain and details",
          "Caìgo, wet stone and reflections add atmosphere."
        ],
        [
          "Drones",
          "Do not assume flight is allowed. Check ENAC requirements, d-flight zones and any extra permits."
        ]
      ],
      "itinerary": [
        [
          "Early morning",
          "Accademia or St Mark's",
          "Choose one location and allow time."
        ],
        [
          "Morning",
          "Rialto market",
          "Observe the working city without blocking it."
        ],
        [
          "Midday",
          "Details and shadows",
          "Look at textures and less obvious corners."
        ],
        [
          "Late afternoon",
          "Zattere or Punta Dogana",
          "Watch colours on the water."
        ],
        [
          "Evening",
          "Cannaregio",
          "Reflections and lit foundations without bulky gear."
        ],
        [
          "Another day",
          "Burano or Pellestrina",
          "Explore the islands with enough time for ACTV return boats."
        ]
      ],
      "adviceTitle": "Good photography also means respect",
      "advice": "Avoid blocking circulation with equipment or intruding on people and private homes. Drone use depends on current ENAC/d-flight information and applicable permissions.",
      "heartTitle": "Put the camera down sometimes",
      "heartText": "Some of the best Venice moments are worth remembering without a photo.",
      "faq": [
        [
          "Where is the best view of the Bridge of Sighs?",
          "Ponte della Paglia near the Doge's Palace."
        ],
        [
          "Where can I photograph the Grand Canal?",
          "Accademia Bridge, Rialto and permitted vaporetto areas."
        ],
        [
          "May tourists fly drones in Venice?",
          "Never assume so; check ENAC zones, d-flight, operator obligations and local permissions."
        ],
        [
          "Can I cross Ponte Chiodo?",
          "It is private; view it from public areas."
        ]
      ]
    },
    "de": {
      "title": "Venedig fotografieren: Fotospots, Licht und wichtige Regeln",
      "kicker": "Fotografie · mit Rücksicht",
      "subtitle": "Accademiabrücke, Rialto, Seufzerbrücke und ruhige Lagunenmotive.",
      "description": "Die besten Fotospots in Venedig: Accademia, Rialto, Markusplatz, Seufzerbrücke von Ponte della Paglia, Zattere, Burano und Drohnenregeln.",
      "imageAlt": "Rialtobrücke und Canal Grande als Fotomotiv",
      "badges": [
        [
          "Licht",
          "Morgen · Abend"
        ],
        [
          "Kamera",
          "Handy genügt"
        ],
        [
          "Rücksicht",
          "Wege freihalten"
        ],
        [
          "Drohnen",
          "ENAC prüfen"
        ]
      ],
      "introTitle": "Licht ist wichtiger als eine Liste von Fotospots",
      "intro": [
        "Venedig verändert sich mit Sonne, Nebel und Wasserstand. Wählen Sie wenige Motive, statt jedem beliebten Foto nachzujagen.",
        "Brücken, Anleger und Hauseingänge müssen frei bleiben. Privatbereiche und Museumsregeln respektieren. Ein sauberes Handyobjektiv genügt für gute Bilder.",
        "Es gibt keine perfekte Uhrzeit für jeden Blickwinkel. Auch Nebel und Regen machen die Stadt interessant."
      ],
      "highlights": [
        [
          "Accademiabrücke",
          "Canal Grande und Salute; Durchgang freihalten."
        ],
        [
          "Rialto-Markt",
          "Morgens Händler und Boote fotografieren, ohne zu stören."
        ],
        [
          "Markusplatz",
          "Architektur und Details ohne blockierte Wege."
        ],
        [
          "Seufzerbrücke",
          "Klassischer Blick von der Ponte della Paglia nahe Dogenpalast."
        ],
        [
          "Zattere und Punta Dogana",
          "Weite Wasseransichten und geometrische Formen."
        ],
        [
          "Cannaregio und Ponte Chiodo",
          "Private Brücke: nur von öffentlichen Bereichen ansehen."
        ],
        [
          "Burano und Pellestrina",
          "Farben, Boote und Fischeralltag; Wohnungen respektieren."
        ],
        [
          "Bovolo und Libreria Acqua Alta",
          "Eigene Zugangs- und Fotoregeln beachten."
        ],
        [
          "Nebel und Regen",
          "Caìgo, nasse Gassen und Spiegelungen."
        ],
        [
          "Drohnen",
          "ENAC, d-flight-Karte und nötige Genehmigungen vor jedem Flug prüfen."
        ]
      ],
      "itinerary": [
        [
          "Früh",
          "Accademia oder Markusplatz",
          "Einen Ort wählen und Zeit geben."
        ],
        [
          "Vormittag",
          "Rialto-Markt",
          "Arbeitsalltag nicht behindern."
        ],
        [
          "Mittag",
          "Details und Schatten",
          "Stein, Türen, Reflexe."
        ],
        [
          "Später Nachmittag",
          "Zattere oder Punta Dogana",
          "Farben des Wassers beobachten."
        ],
        [
          "Abend",
          "Cannaregio",
          "Beleuchtete Kanäle ohne sperrige Technik."
        ],
        [
          "Anderer Tag",
          "Burano oder Pellestrina",
          "Rückfahrt per ACTV einplanen."
        ]
      ],
      "adviceTitle": "Rücksicht ist Teil guter Fotografie",
      "advice": "Keine Wege mit Stativen blockieren, Privatsphäre achten. Drohnen nur nach Prüfung der ENAC-/d-flight-Regeln und ggf. Genehmigung.",
      "heartTitle": "Manchmal ohne Kamera schauen",
      "heartText": "Nicht jede Erinnerung braucht ein Bild.",
      "faq": [
        [
          "Seufzerbrücke fotografieren?",
          "Vom Ponte della Paglia am Dogenpalast."
        ],
        [
          "Canal Grande?",
          "Accademiabrücke, Rialto und zugelassene Plätze auf dem Vaporetto."
        ],
        [
          "Drohnen erlaubt?",
          "Nicht automatisch: ENAC, d-flight und weitere Regeln prüfen."
        ],
        [
          "Ponte Chiodo überqueren?",
          "Privat, nur von öffentlichen Bereichen ansehen."
        ]
      ]
    },
    "fr": {
      "title": "Où photographier Venise : beaux points de vue et lumière",
      "kicker": "Photographier · avec respect",
      "subtitle": "Pont de l'Accademia, Rialto, Pont des Soupirs et scènes de la lagune.",
      "description": "Photographier Venise : Accademia, Rialto, Saint-Marc, Pont des Soupirs depuis Ponte della Paglia, Zattere, Burano et règles des drones.",
      "imageAlt": "Pont du Rialto sur le Grand Canal, lieu photo classique",
      "badges": [
        [
          "Lumière",
          "Matin · soir"
        ],
        [
          "Matériel",
          "Téléphone suffisant"
        ],
        [
          "Respect",
          "Laisser passer"
        ],
        [
          "Drones",
          "Vérifier ENAC"
        ]
      ],
      "introTitle": "La lumière prime sur la liste des lieux",
      "intro": [
        "Venise change avec les saisons, les marées et le brouillard. Mieux vaut choisir quelques sujets que reproduire toutes les images célèbres.",
        "Ne bloquez pas les ponts, débarcadères ou portes. Respectez les habitations et les règles des musées. Un téléphone suffit avec un peu d'attention.",
        "Aucune heure n'est idéale pour tous les points de vue. Pluie et brouillard créent aussi de belles images."
      ],
      "highlights": [
        [
          "Pont de l'Accademia",
          "Grand Canal et Salute ; ne pas gêner le passage."
        ],
        [
          "Marché du Rialto",
          "Vie matinale et bateaux, en respectant les commerçants."
        ],
        [
          "Saint-Marc et quais",
          "Architecture et détails sans bloquer les visiteurs."
        ],
        [
          "Pont des Soupirs",
          "Vue classique depuis Ponte della Paglia près du Palais des Doges."
        ],
        [
          "Zattere et Punta Dogana",
          "Grandes vues sur l'eau et lignes architecturales."
        ],
        [
          "Cannaregio et Ponte Chiodo",
          "Pont privé : regarder depuis l'espace public."
        ],
        [
          "Burano et Pellestrina",
          "Couleurs, bateaux et vie quotidienne, respect des résidents."
        ],
        [
          "Bovolo et Libreria Acqua Alta",
          "Accès et règles photo propres à chaque lieu."
        ],
        [
          "Brouillard et pluie",
          "Caìgo et reflets sur les pierres."
        ],
        [
          "Drones",
          "Vérifiez ENAC, d-flight et les autorisations nécessaires."
        ]
      ],
      "itinerary": [
        [
          "Matin tôt",
          "Accademia ou Saint-Marc",
          "Un seul lieu avec du temps."
        ],
        [
          "Matin",
          "Rialto",
          "Respecter le travail au marché."
        ],
        [
          "Midi",
          "Détails et ombres",
          "Textures et ruelles."
        ],
        [
          "Fin d'après-midi",
          "Zattere ou Punta Dogana",
          "Lumière sur l'eau."
        ],
        [
          "Soir",
          "Cannaregio",
          "Reflets, sans matériel gênant."
        ],
        [
          "Autre jour",
          "Burano ou Pellestrina",
          "Prévoir le bateau de retour."
        ]
      ],
      "adviceTitle": "Photographier avec respect",
      "advice": "Ne gênez pas la circulation, évitez les photos intrusives et contrôlez les règles ENAC/d-flight avant tout vol de drone.",
      "heartTitle": "Regardez sans appareil aussi",
      "heartText": "Certains moments valent plus qu'une photo.",
      "faq": [
        [
          "Vue du Pont des Soupirs ?",
          "Depuis Ponte della Paglia près du Palais des Doges."
        ],
        [
          "Grand Canal à photographier ?",
          "Accademia, Rialto et zones autorisées des vaporetti."
        ],
        [
          "Drones autorisés ?",
          "Pas automatiquement : vérifiez ENAC, d-flight et les permis."
        ],
        [
          "Ponte Chiodo ?",
          "Pont privé à observer depuis l'espace public."
        ]
      ]
    },
    "es": {
      "title": "Dónde fotografiar Venecia: rincones, mejor luz y normas",
      "kicker": "Fotografía · respeto",
      "subtitle": "Puente Accademia, Rialto, Suspiros y escenas tranquilas de la laguna.",
      "description": "Los mejores lugares para fotos en Venecia: Accademia, Rialto, San Marcos, Puente de los Suspiros desde Ponte della Paglia, Burano y drones.",
      "imageAlt": "Puente de Rialto y Gran Canal para fotografía",
      "badges": [
        [
          "Luz",
          "Mañana · tarde"
        ],
        [
          "Cámara",
          "Basta el móvil"
        ],
        [
          "Respeto",
          "No bloquear"
        ],
        [
          "Drones",
          "Comprobar ENAC"
        ]
      ],
      "introTitle": "La luz importa más que una lista de fotos",
      "intro": [
        "Venecia cambia con el sol, las mareas y la niebla. Elige pocos lugares que te gusten en vez de buscar cada foto de redes.",
        "No bloquees puentes, paradas ni entradas. Respeta viviendas privadas y reglas de museos. Un móvil limpio puede dar grandes imágenes.",
        "No existe una hora perfecta para todos los lugares. La lluvia y la niebla pueden ser bonitas."
      ],
      "highlights": [
        [
          "Puente Accademia",
          "Gran Canal y Salute; no estorbes el paso."
        ],
        [
          "Mercado Rialto",
          "Actividad matinal y barcos, respetando a trabajadores."
        ],
        [
          "San Marcos",
          "Arquitectura sin obstruir accesos."
        ],
        [
          "Puente de los Suspiros",
          "Vista clásica desde Ponte della Paglia cerca del Palacio Ducal."
        ],
        [
          "Zattere y Punta Dogana",
          "Horizontes y geometrías junto al agua."
        ],
        [
          "Cannaregio y Ponte Chiodo",
          "Puente privado, observar solo desde zonas públicas."
        ],
        [
          "Burano y Pellestrina",
          "Colores, barcos y vida diaria: respeta viviendas."
        ],
        [
          "Bovolo y Libreria Acqua Alta",
          "Comprueba entrada y normas fotográficas."
        ],
        [
          "Niebla y lluvia",
          "Caìgo y reflejos sobre piedra mojada."
        ],
        [
          "Drones",
          "Consulta ENAC, d-flight y permisos antes del vuelo."
        ]
      ],
      "itinerary": [
        [
          "Temprano",
          "Accademia o San Marcos",
          "Un sitio con tiempo suficiente."
        ],
        [
          "Mañana",
          "Mercado Rialto",
          "No interrumpir el trabajo."
        ],
        [
          "Mediodía",
          "Detalles y sombras",
          "Busca texturas y reflejos."
        ],
        [
          "Tarde",
          "Zattere o Punta Dogana",
          "Colores en el agua."
        ],
        [
          "Noche",
          "Cannaregio",
          "Reflejos sin trípodes molestos."
        ],
        [
          "Otro día",
          "Burano o Pellestrina",
          "Calcula regreso ACTV."
        ]
      ],
      "adviceTitle": "Fotografiar bien es respetar",
      "advice": "No bloquees pasos ni invadas la privacidad. Para drones comprueba ENAC/d-flight y autorizaciones.",
      "heartTitle": "Guarda la cámara alguna vez",
      "heartText": "No todos los recuerdos necesitan foto.",
      "faq": [
        [
          "¿Dónde ver Puente de los Suspiros?",
          "Desde Ponte della Paglia junto al Palacio Ducal."
        ],
        [
          "¿Fotos del Gran Canal?",
          "Accademia, Rialto o zonas permitidas del vaporetto."
        ],
        [
          "¿Drones en Venecia?",
          "No automáticamente: comprueba ENAC y d-flight."
        ],
        [
          "¿Ponte Chiodo es público?",
          "Es privado, se puede observar desde espacio público."
        ]
      ]
    },
    "zh": {
      "title": "威尼斯摄影地点：运河、日落、叹息桥与无人机规则",
      "kicker": "威尼斯摄影 · 尊重城市",
      "subtitle": "从 Accademia 桥到 Rialto 与 Burano，寻找自然光与水面倒影。",
      "description": "威尼斯拍照地点：Accademia、Rialto、圣马可、Ponte della Paglia 看叹息桥、Zattere、Burano、Cannaregio 及无人机规定。",
      "imageAlt": "威尼斯大运河与里亚托桥的经典摄影角度",
      "badges": [
        [
          "光线",
          "早晨 · 傍晚"
        ],
        [
          "设备",
          "手机即可"
        ],
        [
          "礼仪",
          "保持通道畅通"
        ],
        [
          "无人机",
          "核查 ENAC"
        ]
      ],
      "introTitle": "光线比网红机位更重要",
      "intro": [
        "威尼斯随着阳光、潮水、雾气不断改变。选两三处真正喜欢的地方，留出观察时间。",
        "不要在桥上、码头或门口挡路；尊重居民住宅和博物馆的拍摄规则。清洁手机镜头和注意构图就很有帮助。",
        "季节不同，日出日落角度也不同。雨天与雾天可以拍出另一种氛围。"
      ],
      "highlights": [
        [
          "Accademia 桥",
          "大运河和 Salute 圆顶，注意让行。"
        ],
        [
          "Rialto 市场",
          "早晨的摊位和工作船只，请尊重商贩。"
        ],
        [
          "圣马可广场",
          "建筑与细节，不挡通道。"
        ],
        [
          "叹息桥最佳观察点",
          "从总督宫附近的 Ponte della Paglia 观看，不是任意穿越叹息桥。"
        ],
        [
          "Zattere 与 Punta Dogana",
          "辽阔水景、建筑线条和倒影。"
        ],
        [
          "Cannaregio 与 Ponte Chiodo",
          "私人桥梁，只从公共区域拍摄。"
        ],
        [
          "Burano 与 Pellestrina",
          "彩色房屋、渔船和生活场景，尊重私人窗户。"
        ],
        [
          "Bovolo 与 Libreria Acqua Alta",
          "需遵守各自开放与拍摄规则。"
        ],
        [
          "雾与雨",
          "Caìgo 和湿润石板反射。"
        ],
        [
          "无人机",
          "飞行前核查 ENAC、d-flight 空域和必要许可。"
        ]
      ],
      "itinerary": [
        [
          "清晨",
          "Accademia 或圣马可",
          "选一处慢慢拍。"
        ],
        [
          "上午",
          "Rialto 市场",
          "不要影响工作。"
        ],
        [
          "中午",
          "建筑细节和光影",
          "拍墙面、石材和小巷。"
        ],
        [
          "傍晚",
          "Zattere 或 Punta Dogana",
          "观察水面颜色变化。"
        ],
        [
          "晚上",
          "Cannaregio",
          "拍倒影，勿放置阻碍通行的设备。"
        ],
        [
          "另一天",
          "Burano 或 Pellestrina",
          "预留 ACTV 返程船班时间。"
        ]
      ],
      "adviceTitle": "好的摄影离不开尊重",
      "advice": "避免挡路或侵扰居民隐私。无人机应核查 ENAC/d-flight 最新规定和相关许可。",
      "heartTitle": "偶尔放下相机",
      "heartText": "有些体验比照片更值得记住。",
      "faq": [
        [
          "哪里能看到叹息桥？",
          "总督宫附近的 Ponte della Paglia。"
        ],
        [
          "拍大运河在哪里好？",
          "Accademia 桥、Rialto 或水上巴士允许的区域。"
        ],
        [
          "游客能放飞无人机吗？",
          "不能假定可以，须先核查 ENAC 与 d-flight 等规则。"
        ],
        [
          "Ponte Chiodo 能上去吗？",
          "私人桥梁，建议仅从公共区域观看。"
        ]
      ]
    }
  },
  "mangiare-a-venezia-senza-sorprese": {
    "it": {
      "title": "Ristoranti a Venezia: prezzi, coperto, pesce all'etto e consigli",
      "kicker": "Venezia pratica · scegliere consapevolmente",
      "subtitle": "Come leggere menu e conto senza diffidare di tutti: regole verificabili e domande utili.",
      "description": "Come scegliere un ristorante a Venezia: menu e prezzi esposti, coperto e servizio, pesce venduto all'etto, surgelati, allergeni, recensioni e conto.",
      "imageAlt": "Cicchetti veneziani al banco, scelta gastronomica senza sorprese",
      "badges": [
        [
          "Prima",
          "Leggi il menu"
        ],
        [
          "Attenzione",
          "Prezzi all'etto"
        ],
        [
          "Sicurezza",
          "Informazioni allergeni"
        ],
        [
          "Fonte",
          "Regione Veneto"
        ]
      ],
      "introTitle": "Non esistono 'ristoranti trappola' riconoscibili da una sola foto",
      "intro": [
        "Un menu con immagini non significa automaticamente cattiva cucina, come una calle nascosta non garantisce bontà. Il criterio più affidabile è la chiarezza: menu disponibile, prezzi comprensibili, indicazione di servizi aggiuntivi e personale capace di rispondere.",
        "In Veneto la legge regionale 29/2007, articolo 30, prevede che gli esercizi espongano i prezzi delle consumazioni e che i locali che servono pasti mettano a disposizione il menu con prezzi e indicazione degli alimenti surgelati o congelati, esponendolo anche all'esterno durante l'apertura. Le maggiorazioni per particolari servizi devono essere comunicate.",
        "Questa guida non è una lista di locali 'buoni e cattivi': è uno strumento per scegliere senza stereotipi e senza sorprese. Per indirizzi selezionati in Marghera e Venezia trovi la nostra pagina Dove mangiare."
      ],
      "highlights": [
        [
          "Il menu va visto prima",
          "Controlla piatti, bevande, prezzi, coperto e servizio. Una differenza fra banco e tavolo dovrebbe risultare chiara."
        ],
        [
          "Pesce al peso e 'all'etto'",
          "Se un prezzo è al 100 g, chiedi il peso previsto e una stima totale. Esempio puramente matematico: 8 €/etto per 5 etti significa 40 €, non 8 €."
        ],
        [
          "Coperto e servizio",
          "Non sono sinonimi: il locale può applicare voci distinte se correttamente comunicate. Chiedi chiarimenti prima di ordinare."
        ],
        [
          "Surgelato non significa automaticamente scadente",
          "L'indicazione del surgelato è informazione dovuta; la qualità dipende da prodotto, conservazione e preparazione, non solo dalla freschezza dichiarata."
        ],
        [
          "Allergie e celiachia",
          "L'informazione sui 14 allergeni deve essere disponibile per i piatti. Per celiachia o allergie serie chiedi ingredienti e possibile contaminazione, senza dare nulla per scontato."
        ],
        [
          "Recensioni: guarda i dettagli",
          "Leggi commenti recenti e specifici su prezzi, servizio e cucina; diffida delle recensioni estreme o senza informazioni verificabili."
        ],
        [
          "Chiedi il conto con calma",
          "Se il totale non corrisponde al menu o all'ordine, chiedi un dettaglio e verifica le voci. Non serve aprire discussioni per ogni cifra."
        ],
        [
          "Fascia di prezzo e contesto",
          "Un locale con vista o servizio al tavolo può costare più di un bacaro al banco. Il punto è sapere cosa stai scegliendo prima."
        ]
      ],
      "itinerary": [
        [
          "Prima di sederti",
          "Leggi il menu esterno",
          "Se non capisci coperto, servizio o prezzi al peso, chiedi."
        ],
        [
          "Quando ordini",
          "Chiedi peso e provenienza",
          "Specialmente per pescato del giorno e piatti non a prezzo fisso."
        ],
        [
          "Con esigenze alimentari",
          "Comunica chiaramente",
          "Verifica allergeni, preparazioni e rischio di contaminazione."
        ],
        [
          "Durante il pasto",
          "Goditi la cucina",
          "Non trasformare ogni locale in un'indagine: fatti guidare dalla qualità e dalla cortesia."
        ],
        [
          "Quando paghi",
          "Controlla il totale",
          "Confronta piatti, bevande e servizi indicati; chiedi chiarimenti su voci inattese."
        ]
      ],
      "adviceTitle": "La trasparenza vale più della posizione",
      "advice": "I turisti possono trovare ottima cucina sia vicino a Rialto sia in zone meno frequentate. La distanza da San Marco non certifica la qualità. Preferisci informazioni concrete e non condividere accuse contro attività specifiche senza elementi.",
      "heartTitle": "Il miglior ristorante è quello giusto per te",
      "heartText": "Un pranzo semplice al banco può essere perfetto quanto una cena panoramica. Scegli il contesto e il prezzo che desideri, sapendo cosa è compreso.",
      "faq": [
        [
          "Il coperto è sempre vietato a Venezia?",
          "No. I costi devono essere comunicati con chiarezza; controlla il menu e le condizioni applicate."
        ],
        [
          "Un prezzo del pesce all'etto è legale?",
          "Il prezzo a peso è possibile; per sapere quanto spenderai chiedi il peso complessivo previsto prima della preparazione."
        ],
        [
          "Il menu deve indicare i surgelati?",
          "La normativa regionale del Veneto prevede indicazioni sugli alimenti surgelati o congelati nel menu dei locali che servono pasti."
        ],
        [
          "Un ristorante con foto sul menu è una trappola?",
          "No: è un segnale estetico, non una prova di qualità scarsa o di prezzi scorretti."
        ]
      ]
    },
    "en": {
      "title": "Eating out in Venice: menu prices, cover charge and fish by weight",
      "kicker": "Practical Venice · informed dining",
      "subtitle": "How to read a menu and bill without falling for stereotypes.",
      "description": "Venice restaurant tips: displayed menu prices, coperto and service fees, seafood priced per 100g, allergens, frozen ingredients and bills.",
      "imageAlt": "Venetian cicchetti on a bar counter",
      "badges": [
        [
          "Before",
          "Read the menu"
        ],
        [
          "Check",
          "Fish priced by 100g"
        ],
        [
          "Safety",
          "Allergen details"
        ],
        [
          "Law",
          "Veneto Region"
        ]
      ],
      "introTitle": "A menu photo does not automatically mean 'tourist trap'",
      "intro": [
        "Good restaurants exist in busy areas too, and a hidden lane does not guarantee quality. Look for clear prices, extra charges and staff who can answer questions.",
        "Veneto Regional Law 29/2007, art. 30, requires published prices and restaurant menus showing prices and whether food is frozen, including a menu visible outside while open. Special service surcharges must be communicated.",
        "This is not a blacklist. Use it to make informed choices; our separate 'Where to eat' page offers selected venues."
      ],
      "highlights": [
        [
          "Read the menu first",
          "Check meals, drinks, service and cover charges, including any bar/table differences."
        ],
        [
          "Fish sold by weight",
          "Ask for the approximate full weight and total before ordering. €8 per 100g at 500g means €40."
        ],
        [
          "Coperto versus service",
          "These are different charges; ask what applies and how it is stated."
        ],
        [
          "Frozen is not automatically bad",
          "The status should be declared; quality also depends on handling and cooking."
        ],
        [
          "Allergies and coeliac disease",
          "Allergen information must be provided. Discuss preparation and cross-contamination directly with staff."
        ],
        [
          "Read useful reviews",
          "Prefer recent reviews about specific dishes, prices and service over vague extremes."
        ],
        [
          "Check your bill",
          "Ask calmly about anything that does not match the menu or order."
        ],
        [
          "Location is not proof",
          "Waterfront tables may cost more; transparency matters more than postcode."
        ]
      ],
      "itinerary": [
        [
          "Before sitting",
          "Check the menu",
          "Clarify prices by weight and charges."
        ],
        [
          "When ordering",
          "Ask about weight",
          "Especially today's catch."
        ],
        [
          "For allergies",
          "Ask clear questions",
          "Check ingredients and contamination risk."
        ],
        [
          "During the meal",
          "Enjoy the experience",
          "Choose quality without treating every venue with suspicion."
        ],
        [
          "Paying",
          "Review the bill",
          "Compare dishes, drinks and disclosed fees."
        ]
      ],
      "adviceTitle": "Clear information beats stereotypes",
      "advice": "A restaurant near Rialto may be excellent; a quiet alley may not. Never make public accusations against specific places without evidence.",
      "heartTitle": "Pick the experience you want",
      "heartText": "A bacaro counter and a scenic dinner can both be right if you know the price in advance.",
      "faq": [
        [
          "Is a cover charge illegal in Venice?",
          "No; relevant charges should be clearly communicated. Check the menu."
        ],
        [
          "Can seafood be priced by 100g?",
          "Yes; request the estimated total weight and final price before ordering."
        ],
        [
          "Must frozen food be declared?",
          "Veneto rules require menus to indicate frozen or deep-frozen foods in meal-serving venues."
        ],
        [
          "Does a photo menu mean a tourist trap?",
          "No; photos are not evidence of poor food or unfair pricing."
        ]
      ]
    },
    "de": {
      "title": "Restaurants in Venedig: Preise, Coperto und Fisch nach Gewicht",
      "kicker": "Praktisch · bewusst essen",
      "subtitle": "Speisekarte und Rechnung verstehen, ohne alle Lokale zu verdächtigen.",
      "description": "Venedig Restaurant-Tipps: Menüpreise, Coperto und Service, Fisch pro 100 g, Tiefkühlware, Allergene und Rechnung.",
      "imageAlt": "Venezianische Cicchetti an der Theke",
      "badges": [
        [
          "Vorher",
          "Speisekarte lesen"
        ],
        [
          "Achtung",
          "Preis je 100g"
        ],
        [
          "Sicherheit",
          "Allergene"
        ],
        [
          "Quelle",
          "Region Veneto"
        ]
      ],
      "introTitle": "Eine Speisekarte mit Fotos ist kein Beweis für Abzocke",
      "intro": [
        "Weder eine touristische Lage noch eine versteckte Gasse garantieren Qualität. Besser sind klare Preise und ein Team, das Fragen beantwortet.",
        "Das regionale Gesetz Veneto 29/2007, Art. 30, verlangt öffentlich sichtbare Preise und Speisekarten mit Preisangaben und Hinweisen zu tiefgekühlten Speisen. Sondergebühren für bestimmte Dienste müssen mitgeteilt werden.",
        "Diese Seite bewertet keine konkreten Restaurants als gut oder schlecht. Für Empfehlungen gibt es die separate MVA-Seite Wo essen."
      ],
      "highlights": [
        [
          "Speisekarte vorher prüfen",
          "Gerichte, Getränke, Coperto und Servicegebühren nachlesen."
        ],
        [
          "Fisch nach Gewicht",
          "Gesamtgewicht und Gesamtpreis erfragen. 8 € pro 100 g bei 500 g ergeben 40 €."
        ],
        [
          "Coperto und Service",
          "Unterschiedliche Gebühren; Bedingungen vorher klären."
        ],
        [
          "Tiefgekühlt heißt nicht automatisch schlecht",
          "Deklaration und Qualität sind zwei verschiedene Dinge."
        ],
        [
          "Allergien und Zöliakie",
          "Allergeninformationen prüfen; Kreuzkontamination mit dem Personal besprechen."
        ],
        [
          "Rezensionen",
          "Aktuelle, konkrete Erfahrungsberichte bevorzugen."
        ],
        [
          "Rechnung prüfen",
          "Bei Abweichungen ruhig nachfragen."
        ],
        [
          "Lage und Preis",
          "Aussicht und Bedienung können mehr kosten; Transparenz ist entscheidend."
        ]
      ],
      "itinerary": [
        [
          "Vor dem Platznehmen",
          "Karte lesen",
          "Zusatzgebühren und Gewichtspreise prüfen."
        ],
        [
          "Bei Bestellung",
          "Gewicht erfragen",
          "Vor allem beim Tagesfisch."
        ],
        [
          "Bei Allergien",
          "Personal informieren",
          "Zutaten und Spuren klären."
        ],
        [
          "Beim Essen",
          "Genießen",
          "Qualität und Atmosphäre zählen."
        ],
        [
          "Beim Bezahlen",
          "Rechnung prüfen",
          "Mit der Karte vergleichen."
        ]
      ],
      "adviceTitle": "Transparenz statt Vorurteile",
      "advice": "Weder Rialto noch eine Seitengasse sagen allein etwas über Qualität. Keine unbelegten Vorwürfe gegen Betriebe teilen.",
      "heartTitle": "Das passende Lokal wählen",
      "heartText": "Cicchetti an der Theke oder Abendessen mit Aussicht – beides kann richtig sein, wenn der Preis vorher klar ist.",
      "faq": [
        [
          "Ist Coperto verboten?",
          "Nein, Gebühren müssen klar mitgeteilt sein."
        ],
        [
          "Fisch pro 100 g erlaubt?",
          "Ja; das Gesamtgewicht vor der Zubereitung klären."
        ],
        [
          "Tiefkühlkost angeben?",
          "Die regionalen Regeln verlangen entsprechende Menüangaben."
        ],
        [
          "Fotospeisekarte = Touristenfalle?",
          "Nein, das allein beweist nichts."
        ]
      ]
    },
    "fr": {
      "title": "Restaurants à Venise : prix, couvert, poisson au poids et menu",
      "kicker": "Pratique · bien choisir",
      "subtitle": "Comprendre les menus et additions sans méfiance excessive.",
      "description": "Restaurants Venise : prix affichés, coperto, service, poisson facturé aux 100 g, produits surgelés, allergènes et addition.",
      "imageAlt": "Cicchetti vénitiens sur le comptoir",
      "badges": [
        [
          "Avant",
          "Lire le menu"
        ],
        [
          "Attention",
          "Prix aux 100 g"
        ],
        [
          "Sécurité",
          "Allergènes"
        ],
        [
          "Référence",
          "Vénétie"
        ]
      ],
      "introTitle": "Un menu avec photos n'est pas une preuve d'arnaque",
      "intro": [
        "Une rue cachée ne garantit pas la qualité, et près de Rialto il existe aussi de bons restaurants. Cherchez des tarifs lisibles et des explications claires.",
        "L'article 30 de la loi régionale 29/2007 en Vénétie impose l'affichage des prix et des menus précisant notamment les aliments congelés ou surgelés, ainsi que la communication des suppléments spéciaux.",
        "Ce guide n'est pas une liste noire. Pour des adresses sélectionnées, consultez notre page Où manger."
      ],
      "highlights": [
        [
          "Lire le menu avant",
          "Vérifiez plats, boissons, couvert et service."
        ],
        [
          "Poisson au poids",
          "Demandez le poids total estimé : 8 € les 100 g pour 500 g = 40 €."
        ],
        [
          "Coperto et service",
          "Deux notions différentes ; vérifiez leur application."
        ],
        [
          "Surgelé ne signifie pas mauvais",
          "L'indication doit être claire, la qualité dépend aussi de la préparation."
        ],
        [
          "Allergies et maladie cœliaque",
          "Demandez les informations allergènes et la gestion des contaminations."
        ],
        [
          "Avis en ligne",
          "Préférez des avis récents et précis."
        ],
        [
          "Addition",
          "Demandez calmement une explication en cas d'écart."
        ],
        [
          "Emplacement",
          "La vue peut coûter plus cher ; la transparence reste essentielle."
        ]
      ],
      "itinerary": [
        [
          "Avant de vous asseoir",
          "Lire la carte",
          "Vérifier les suppléments."
        ],
        [
          "En commandant",
          "Demander le poids",
          "Pour le poisson et autres plats au poids."
        ],
        [
          "Pour les allergies",
          "Informer le personnel",
          "Vérifier ingrédients et risques."
        ],
        [
          "Pendant le repas",
          "Profiter",
          "Ne pas soupçonner chaque adresse."
        ],
        [
          "Au paiement",
          "Relire l'addition",
          "Comparer carte et commande."
        ]
      ],
      "adviceTitle": "La clarté plutôt que les clichés",
      "advice": "La localisation ne prouve pas la qualité. Évitez toute accusation sans preuve envers un établissement.",
      "heartTitle": "Choisir selon ses envies",
      "heartText": "Bacaro simple ou table panoramique : l'important est de connaître le prix avant.",
      "faq": [
        [
          "Coperto interdit ?",
          "Non, les frais applicables doivent être communiqués."
        ],
        [
          "Poisson aux 100 g ?",
          "Oui, demandez le poids total prévu."
        ],
        [
          "Surgelés à signaler ?",
          "Les règles régionales prévoient leur indication sur le menu."
        ],
        [
          "Menu avec photos = piège ?",
          "Non, ce n'est pas une preuve."
        ]
      ]
    },
    "es": {
      "title": "Restaurantes en Venecia: precios, cubierto y pescado al peso",
      "kicker": "Venecia práctica · comer informado",
      "subtitle": "Cómo leer menú y cuenta sin caer en prejuicios.",
      "description": "Restaurantes Venecia: precios visibles, coperto y servicio, pescado por 100 g, congelados, alérgenos y factura.",
      "imageAlt": "Cicchetti venecianos en el mostrador",
      "badges": [
        [
          "Antes",
          "Lee el menú"
        ],
        [
          "Atención",
          "Precio por 100g"
        ],
        [
          "Seguridad",
          "Alérgenos"
        ],
        [
          "Fuente",
          "Región Véneto"
        ]
      ],
      "introTitle": "Un menú con fotos no demuestra que sea una trampa",
      "intro": [
        "Ni una calle escondida asegura buena cocina ni estar cerca de Rialto significa mal servicio. Busca precios claros y personal dispuesto a explicar.",
        "La ley regional de Véneto 29/2007, art. 30, exige información visible de precios y menú con indicación de alimentos congelados, además de comunicar recargos especiales.",
        "Esta guía no juzga locales concretos. Para direcciones elegidas existe la página Dónde comer de MVA."
      ],
      "highlights": [
        [
          "Menú antes de sentarte",
          "Comprueba platos, bebidas, cubierto y servicio."
        ],
        [
          "Pescado al peso",
          "Pide peso aproximado y total. 8 € por 100 g para 500 g son 40 €."
        ],
        [
          "Coperto y servicio",
          "No son idénticos; pregunta qué incluye cada cargo."
        ],
        [
          "Congelado no significa malo",
          "Debe indicarse y la calidad depende de la preparación."
        ],
        [
          "Alergias y celiaquía",
          "Consulta alérgenos, ingredientes y contaminación cruzada."
        ],
        [
          "Reseñas",
          "Busca comentarios recientes y detallados."
        ],
        [
          "La cuenta",
          "Pide aclaración con calma si algo no coincide."
        ],
        [
          "Ubicación y precio",
          "La vista puede tener un coste mayor; importa que sepas cuánto pagarás."
        ]
      ],
      "itinerary": [
        [
          "Antes de entrar",
          "Mira el menú",
          "Aclara suplementos y precios por peso."
        ],
        [
          "Al pedir",
          "Pregunta el peso",
          "Especialmente el pescado del día."
        ],
        [
          "Con alergias",
          "Informa claramente",
          "Comprueba preparación y contaminación."
        ],
        [
          "Durante la comida",
          "Disfruta",
          "No conviertas cada local en una investigación."
        ],
        [
          "Al pagar",
          "Revisa la cuenta",
          "Compara con menú y pedido."
        ]
      ],
      "adviceTitle": "La información vale más que el estereotipo",
      "advice": "No hagas acusaciones contra establecimientos específicos sin pruebas.",
      "heartTitle": "Elige según tu experiencia ideal",
      "heartText": "Bacaro al mostrador o cena panorámica; lo importante es conocer el precio.",
      "faq": [
        [
          "¿El coperto es ilegal?",
          "No, los cargos deben comunicarse con claridad."
        ],
        [
          "¿Pescado por 100 g?",
          "Sí; pregunta peso total y precio antes de pedir."
        ],
        [
          "¿Se indican los congelados?",
          "Las normas regionales exigen indicación en el menú."
        ],
        [
          "¿Menú con fotos es trampa?",
          "No, la foto no prueba nada."
        ]
      ]
    },
    "zh": {
      "title": "威尼斯餐厅消费指南：菜单、服务费、按重量计价的海鲜",
      "kicker": "理性用餐 · 实用建议",
      "subtitle": "理解菜单与账单，不靠刻板印象判断餐厅。",
      "description": "威尼斯餐厅指南：菜单明码标价、coperto 餐位费、服务费、每100克海鲜价格、冷冻食材、过敏原与账单。",
      "imageAlt": "威尼斯小酒馆柜台上的 cicchetti 小食",
      "badges": [
        [
          "入座前",
          "看清菜单"
        ],
        [
          "注意",
          "每100克计价"
        ],
        [
          "安全",
          "过敏原信息"
        ],
        [
          "法规",
          "威尼托大区"
        ]
      ],
      "introTitle": "有照片的菜单不等于游客陷阱",
      "intro": [
        "小巷里的店不一定更好，里亚托附近也可能有好餐厅。更可靠的是清楚的价格、服务项目和能回答问题的员工。",
        "威尼托大区29/2007号法律第30条要求商家展示价格，提供包含价目和冷冻/速冻食材说明的菜单，并公布特殊服务附加费用。",
        "这不是餐厅黑名单；MVA 另有“在哪里吃饭”页面提供地点推荐。"
      ],
      "highlights": [
        [
          "入座前读菜单",
          "确认菜价、饮料、coperto 和服务费。"
        ],
        [
          "海鲜按重量收费",
          "询问预计重量与总价。例如每100克 €8，500克就是 €40。"
        ],
        [
          "Coperto 与服务费",
          "可能是不同项目，提前问清适用条件。"
        ],
        [
          "冷冻不等于低质量",
          "菜单应正确标示，品质还取决于保管与烹饪。"
        ],
        [
          "过敏与乳糜泻",
          "询问过敏原、配料与交叉污染风险。"
        ],
        [
          "查看近期评论",
          "优先参考有具体细节的评论。"
        ],
        [
          "核对账单",
          "如果与菜单或点单不符，礼貌询问。"
        ],
        [
          "位置不代表品质",
          "景观餐厅可能更贵，关键是明白自己购买的服务。"
        ]
      ],
      "itinerary": [
        [
          "入座前",
          "读菜单",
          "确认额外费用和重量价格。"
        ],
        [
          "点菜时",
          "问总重量",
          "尤其是当天海鲜。"
        ],
        [
          "有过敏需求",
          "明确沟通",
          "确认食材和可能的污染。"
        ],
        [
          "用餐期间",
          "享受餐点",
          "无需怀疑所有店铺。"
        ],
        [
          "结账时",
          "核对账单",
          "与菜单和点单比较。"
        ]
      ],
      "adviceTitle": "透明信息比传闻可靠",
      "advice": "不要仅因为餐厅位于旅游区就认定其不诚信，也不要在没有证据时指责具体商家。",
      "heartTitle": "选择适合自己的餐厅",
      "heartText": "柜台小食或景观晚餐都可以，只要在点单前知道价格。",
      "faq": [
        [
          "威尼斯餐位费违法吗？",
          "不一定；相关收费应清楚公布。"
        ],
        [
          "海鲜可按100克计价吗？",
          "可以，但建议先问完整重量与预计总价。"
        ],
        [
          "冷冻食材必须标注吗？",
          "威尼托地区规定菜单应披露相关信息。"
        ],
        [
          "有照片的菜单就差吗？",
          "不能仅凭照片判断质量。"
        ]
      ]
    }
  },
  "cosa-mangiare-a-venezia": {
    "it": {
      "title": "Cosa mangiare a Venezia: piatti tipici, cicchetti e dolci",
      "kicker": "Sapori veneziani · guida gastronomica",
      "subtitle": "Dal baccalà mantecato alle moeche, dal tramezzino al Bellini: cosa cercare e quando.",
      "description": "Cosa mangiare a Venezia: sarde in saor, baccalà mantecato, cicchetti, bigoli in salsa, risi e bisi, seppie al nero, moeche, castraure, fritole, bussolà e Bellini.",
      "imageAlt": "Cicchetti veneziani tradizionali: piccoli assaggi al banco",
      "badges": [
        [
          "Al banco",
          "Cicchetti e ombra"
        ],
        [
          "Primi",
          "Bigoli e risi"
        ],
        [
          "Stagioni",
          "Moeche e castraure"
        ],
        [
          "Dolci",
          "Fritole e bussolà"
        ]
      ],
      "introTitle": "Venezia ha una cucina molto più ampia dello Spritz",
      "intro": [
        "La tavola veneziana nasce dall'incontro tra laguna, orti delle isole e commerci. I cicchetti si mangiano spesso al banco dei bacari, ma la tradizione comprende primi di pasta e riso, pesce, ortaggi stagionali, dolci e aperitivi.",
        "Questa pagina è una mappa dei sapori. Per la storia dettagliata dei cicchetti e dello Spritz trovi gli articoli dedicati del Journal; per scegliere un locale e capire il conto usa la guida pratica ai ristoranti.",
        "Le ricette variano fra famiglie e trattorie. Alcuni ingredienti, come le moeche e le castraure, sono strettamente stagionali: non aspettarti di trovarli freschi tutto l'anno."
      ],
      "highlights": [
        [
          "Cicchetti e giro de ombre",
          "Piccoli assaggi al banco con un'ombra, tradizionalmente un bicchiere di vino. Ordina guardando cosa prepara il locale."
        ],
        [
          "Baccalà mantecato e sarde in saor",
          "Merluzzo essiccato lavorato in crema, e sardine con cipolle e sapori agrodolci: due classici con molte varianti."
        ],
        [
          "Bigoli in salsa · risi e bisi",
          "Pasta grossa con condimento di cipolle e pesce conservato; riso con piselli della stagione primaverile."
        ],
        [
          "Risotto di gò e seppie al nero",
          "Pesce tipico della laguna nel risotto; seppie preparate con il loro inchiostro, spesso con polenta o pasta."
        ],
        [
          "Schie con polenta · folpetti",
          "Piccoli gamberetti della laguna e polpetti, preparazioni molto legate alle osterie veneziane."
        ],
        [
          "Moeche · castraure",
          "Granchi durante la muta, stagionali soprattutto primavera/autunno; i primi carciofi violetti di Sant'Erasmo hanno stagione breve."
        ],
        [
          "Spritz e Bellini",
          "Spritz nelle varianti Select, Aperol, Campari o Cynar; Bellini con pesca bianca e vino frizzante, associato all'Harry's Bar di Giuseppe Cipriani."
        ],
        [
          "Tramezzino veneziano",
          "Pane soffice, farcitura generosa e forma spesso triangolare o curva. Lo spuntino non è nato necessariamente qui, ma fa parte della vita dei bar veneziani."
        ],
        [
          "Fritole, bussolà, baicoli",
          "Frittelle tipiche del Carnevale; biscotti ad anello di Burano e biscotti secchi della tradizione cittadina."
        ],
        [
          "Tiramisù: una storia contesa",
          "È molto presente in Veneto, ma la sua paternità è rivendicata da territori differenti, fra cui Treviso e il Friuli Venezia Giulia."
        ]
      ],
      "itinerary": [
        [
          "Colazione",
          "Un bar di quartiere",
          "Cappuccino, pasticceria locale o tramezzino per uno spuntino."
        ],
        [
          "Aperitivo",
          "Un bacaro",
          "Scegli due cicchetti e una bevanda; consulta il prezzo al banco."
        ],
        [
          "Pranzo",
          "Un piatto del territorio",
          "Bigoli in salsa, risotto di gò o seppie al nero se presenti sul menu."
        ],
        [
          "Nel pomeriggio",
          "Un dolce",
          "Baicoli, bussolà o fritole quando è stagione."
        ],
        [
          "Cena",
          "Pesce e prodotti stagionali",
          "Chiedi provenienza e preparazione senza dare per scontata la disponibilità di moeche e castraure."
        ],
        [
          "Prima di ordinare",
          "Leggi il menu",
          "Verifica prezzo al peso, coperto, servizio e allergeni secondo la guida pratica MVA."
        ]
      ],
      "adviceTitle": "Non ordinare la tradizione come una lista",
      "advice": "Due cicchetti ben fatti e un piatto di stagione valgono più di dieci 'specialità' servite fuori contesto. Le voci del menu cambiano con pesca, raccolto e cucina del locale.",
      "heartTitle": "Il sapore migliore può essere semplice",
      "heartText": "Una pausa in una buona osteria, un tramezzino al banco o un bicchiere d'ombra raccontano spesso Venezia quanto un grande piatto.",
      "faq": [
        [
          "Qual è il piatto più tipico di Venezia?",
          "Non ce n'è uno solo: sarde in saor, baccalà mantecato, bigoli in salsa e risi e bisi sono fra i più rappresentativi."
        ],
        [
          "Cosa sono le moeche?",
          "Granchi della laguna durante la muta, consumati in periodi stagionali limitati."
        ],
        [
          "Il Bellini è uno Spritz?",
          "No. È un cocktail a base di pesca bianca e vino frizzante, associato all'Harry's Bar veneziano."
        ],
        [
          "Il tiramisù è stato inventato a Venezia?",
          "L'origine è discussa fra diverse località; è più corretto descriverlo come dolce molto diffuso nel Veneto."
        ]
      ]
    },
    "en": {
      "title": "What to eat in Venice: local dishes, cicchetti and desserts",
      "kicker": "Venetian food · tasting guide",
      "subtitle": "From sarde in saor to moeche, soft tramezzini, fritole and Bellini.",
      "description": "Venice traditional food guide: cicchetti, baccalà mantecato, sarde in saor, bigoli, risi e bisi, squid ink, moeche, castraure, fritole and Bellini.",
      "imageAlt": "Venetian cicchetti and small bites",
      "badges": [
        [
          "At the bar",
          "Cicchetti and ombra"
        ],
        [
          "Pasta & rice",
          "Bigoli and risi"
        ],
        [
          "Seasonal",
          "Moeche and castraure"
        ],
        [
          "Sweets",
          "Fritole and bussolà"
        ]
      ],
      "introTitle": "Venetian cuisine is more than Spritz",
      "intro": [
        "Venice cooks from the lagoon, island gardens and trade routes. Cicchetti are small bar bites, but the tradition includes rice, fish, vegetables and sweets.",
        "This is the overview of flavours. The MVA Journal explores cicchetti and Spritz separately; our restaurant guide explains bills and menu prices.",
        "Recipes vary, and products such as moeche crabs and Sant'Erasmo castraure artichokes have short seasons."
      ],
      "highlights": [
        [
          "Cicchetti and ombre",
          "Small bites enjoyed with a small glass of wine."
        ],
        [
          "Baccalà and sarde in saor",
          "Creamed stockfish and sweet-sour sardines with onions."
        ],
        [
          "Bigoli and risi e bisi",
          "Thick pasta with onion and preserved fish sauce; rice and peas in season."
        ],
        [
          "Risotto di gò and squid ink",
          "Lagoon goby risotto and dark squid preparations."
        ],
        [
          "Schie and folpetti",
          "Tiny lagoon shrimps with polenta and little octopus."
        ],
        [
          "Moeche and castraure",
          "Soft-shell crabs mainly in spring/autumn and early Sant'Erasmo violet artichokes."
        ],
        [
          "Spritz and Bellini",
          "Select, Aperol, Campari or Cynar Spritz; peach and sparkling wine Bellini associated with Harry's Bar."
        ],
        [
          "Venetian tramezzini",
          "Soft, generously filled sandwiches, a favourite bar snack."
        ],
        [
          "Fritole, bussolà, baicoli",
          "Carnival fritters, Burano ring biscuits and crisp Venetian biscuits."
        ],
        [
          "Tiramisù origins debated",
          "A popular Veneto dessert whose origin is claimed in several areas."
        ]
      ],
      "itinerary": [
        [
          "Breakfast",
          "Local café",
          "Pastry or a tramezzino later in the morning."
        ],
        [
          "Aperitivo",
          "Bacaro",
          "Two cicchetti and a drink."
        ],
        [
          "Lunch",
          "One local dish",
          "Bigoli, gò risotto or squid ink if available."
        ],
        [
          "Afternoon",
          "Something sweet",
          "Baicoli, bussolà or fritole in season."
        ],
        [
          "Dinner",
          "Fish and seasonal produce",
          "Ask about availability and preparation."
        ],
        [
          "Before ordering",
          "Check prices",
          "Especially food by weight, cover fees and allergens."
        ]
      ],
      "adviceTitle": "Do not turn eating into a checklist",
      "advice": "Two well-made cicchetti and one seasonal dish can mean more than ten generic 'traditional specials'.",
      "heartTitle": "Simple flavours are often memorable",
      "heartText": "A tramezzino at the counter or an ombra in an osteria can tell a Venetian story.",
      "faq": [
        [
          "What is the most typical Venice dish?",
          "There is no single answer: sarde in saor, baccalà, bigoli and risi e bisi are all emblematic."
        ],
        [
          "What are moeche?",
          "Lagoon crabs in the soft-shell moulting phase, available in short seasons."
        ],
        [
          "Is Bellini a Spritz?",
          "No, it mixes white peach and sparkling wine."
        ],
        [
          "Was tiramisù invented in Venice?",
          "Its origin is debated among several places; avoid a single definitive claim."
        ]
      ]
    },
    "de": {
      "title": "Was essen in Venedig? Spezialitäten, Cicchetti und Süßes",
      "kicker": "Venezianische Küche · Genussführer",
      "subtitle": "Von sarde in saor über moeche bis Tramezzini, Fritole und Bellini.",
      "description": "Venedig Spezialitäten: Cicchetti, Baccalà, Sarde in saor, Bigoli, Risi e bisi, Tintenfisch, Moeche, Castraure, Fritole und Bellini.",
      "imageAlt": "Venezianische Cicchetti und kleine Häppchen",
      "badges": [
        [
          "An der Theke",
          "Cicchetti"
        ],
        [
          "Hauptgerichte",
          "Bigoli und Reis"
        ],
        [
          "Saison",
          "Moeche und Castraure"
        ],
        [
          "Gebäck",
          "Fritole und Bussolà"
        ]
      ],
      "introTitle": "Venezianisches Essen ist mehr als Spritz",
      "intro": [
        "Lagune, Inselgärten und Handel prägen die Küche. Cicchetti sind kleine Häppchen im Bacaro, doch Venedig hat auch Reisgerichte, Fisch, Gemüse und Süßigkeiten.",
        "Hier finden Sie eine Übersicht; Cicchetti und Spritz werden im MVA Journal separat erklärt. Die Restaurant-Guide hilft bei Preisen und Gebühren.",
        "Moeche und Castraure sind saisonal und nicht das ganze Jahr frisch verfügbar."
      ],
      "highlights": [
        [
          "Cicchetti und ombre",
          "Kleine Happen zum Glas Wein an der Theke."
        ],
        [
          "Baccalà und sarde in saor",
          "Cremiger Stockfisch und süß-sauer marinierte Sardinen."
        ],
        [
          "Bigoli und risi e bisi",
          "Dicke Pasta mit Zwiebel-Fisch-Sauce; Reis mit Erbsen."
        ],
        [
          "Risotto di gò und Sepia",
          "Lagunenfisch-Risotto und Tintenfisch mit schwarzer Tinte."
        ],
        [
          "Schie und folpetti",
          "Kleine Garnelen mit Polenta und kleiner Oktopus."
        ],
        [
          "Moeche und castraure",
          "Weichschalenkrabben in kurzen Saisonzeiten und frühe Artischocken von Sant'Erasmo."
        ],
        [
          "Spritz und Bellini",
          "Spritz mit Select/Aperol/Campari/Cynar; Bellini mit Pfirsich und Schaumwein."
        ],
        [
          "Tramezzini",
          "Weiche, reichlich gefüllte Bar-Sandwiches."
        ],
        [
          "Fritole, bussolà, baicoli",
          "Karnevals-Krapfen, Burano-Kringel und trockenes Gebäck."
        ],
        [
          "Tiramisù",
          "Die Herkunft ist umstritten, nicht eindeutig venezianisch."
        ]
      ],
      "itinerary": [
        [
          "Frühstück",
          "Café",
          "Gebäck oder später Tramezzino."
        ],
        [
          "Aperitivo",
          "Bacaro",
          "Zwei Cicchetti und ein Getränk."
        ],
        [
          "Mittag",
          "Regionalgericht",
          "Bigoli, Risotto oder Sepia."
        ],
        [
          "Nachmittag",
          "Süßigkeit",
          "Baicoli, Bussolà oder Fritole zur Saison."
        ],
        [
          "Abend",
          "Fisch und Gemüse",
          "Saison und Zubereitung erfragen."
        ],
        [
          "Vor der Bestellung",
          "Preise prüfen",
          "Gewichtsangaben, Coperto und Allergene."
        ]
      ],
      "adviceTitle": "Nicht alles abhaken",
      "advice": "Wenige gut zubereitete Gerichte der Saison sind besser als eine überladene Kostprobe.",
      "heartTitle": "Auch ein einfacher Snack zählt",
      "heartText": "Ein Tramezzino oder ein Glas Wein im Bacaro kann sehr venezianisch sein.",
      "faq": [
        [
          "Typischstes Gericht?",
          "Mehrere: Sarde in saor, Baccalà, Bigoli und Risi e bisi."
        ],
        [
          "Moeche?",
          "Krabben beim Häuten, nur zu bestimmten Zeiten verfügbar."
        ],
        [
          "Bellini gleich Spritz?",
          "Nein, weißer Pfirsich und Schaumwein."
        ],
        [
          "Tiramisù aus Venedig?",
          "Die Entstehung ist umstritten."
        ]
      ]
    },
    "fr": {
      "title": "Que manger à Venise : plats, cicchetti, douceurs et Bellini",
      "kicker": "Cuisine vénitienne · découverte",
      "subtitle": "Sarde in saor, moeche, tramezzini, fritole et saveurs de la lagune.",
      "description": "Spécialités de Venise : cicchetti, baccalà, sarde in saor, bigoli, risi e bisi, seiche, moeche, castraure, fritole et Bellini.",
      "imageAlt": "Cicchetti vénitiens et petites bouchées",
      "badges": [
        [
          "Au comptoir",
          "Cicchetti"
        ],
        [
          "Plats",
          "Bigoli et riz"
        ],
        [
          "Saison",
          "Moeche et castraure"
        ],
        [
          "Desserts",
          "Fritole et bussolà"
        ]
      ],
      "introTitle": "La gastronomie de Venise ne se limite pas au Spritz",
      "intro": [
        "La lagune, les jardins des îles et le commerce ont façonné la cuisine. Les cicchetti se dégustent au bacaro, mais on trouve aussi riz, poisson, légumes et douceurs.",
        "Cette page donne une vue d'ensemble ; le Journal détaille cicchetti et Spritz. La page Restaurants explique les prix et le menu.",
        "Moeche et castraure sont des produits de saison, pas disponibles toute l'année."
      ],
      "highlights": [
        [
          "Cicchetti et ombra",
          "Petites bouchées au comptoir avec un verre de vin."
        ],
        [
          "Baccalà et sarde in saor",
          "Poisson séché monté en crème et sardines aigres-douces aux oignons."
        ],
        [
          "Bigoli et risi e bisi",
          "Pâtes épaisses à la sauce et riz aux petits pois."
        ],
        [
          "Risotto di gò et seiche noire",
          "Risotto au poisson de lagune et plats à l'encre de seiche."
        ],
        [
          "Schie et folpetti",
          "Petites crevettes de lagune avec polenta, petits poulpes."
        ],
        [
          "Moeche et castraure",
          "Crabes à carapace molle et premiers artichauts de Sant'Erasmo, selon saison."
        ],
        [
          "Spritz et Bellini",
          "Spritz au Select/Aperol/Campari/Cynar ; Bellini à la pêche blanche et vin pétillant."
        ],
        [
          "Tramezzini",
          "Sandwichs moelleux et garnis, typiques des bars."
        ],
        [
          "Fritole, bussolà, baicoli",
          "Beignets de carnaval et biscuits traditionnels."
        ],
        [
          "Tiramisù",
          "L'origine est revendiquée par plusieurs régions."
        ]
      ],
      "itinerary": [
        [
          "Petit déjeuner",
          "Bar local",
          "Pâtisserie ou tramezzino."
        ],
        [
          "Apéritif",
          "Bacaro",
          "Deux cicchetti et un verre."
        ],
        [
          "Déjeuner",
          "Plat vénitien",
          "Bigoli ou risotto selon menu."
        ],
        [
          "Goûter",
          "Douceur",
          "Fritole en saison, baicoli ou bussolà."
        ],
        [
          "Dîner",
          "Poisson et légumes",
          "Vérifier saison et préparation."
        ],
        [
          "Avant commande",
          "Regarder les prix",
          "Poids, couvert et allergènes."
        ]
      ],
      "adviceTitle": "Pas une liste à cocher",
      "advice": "Deux bons cicchetti et un plat de saison sont souvent préférables à dix spécialités quelconques.",
      "heartTitle": "Les saveurs simples comptent",
      "heartText": "Un tramezzino au comptoir raconte aussi Venise.",
      "faq": [
        [
          "Plat le plus vénitien ?",
          "Sarde in saor, baccalà, bigoli et risi e bisi sont tous emblématiques."
        ],
        [
          "Moeche, c'est quoi ?",
          "Crabes pendant leur mue, très saisonniers."
        ],
        [
          "Bellini est un Spritz ?",
          "Non, pêche blanche et vin effervescent."
        ],
        [
          "Tiramisù inventé à Venise ?",
          "Son origine reste discutée."
        ]
      ]
    },
    "es": {
      "title": "Qué comer en Venecia: platos típicos, cicchetti y dulces",
      "kicker": "Gastronomía veneciana",
      "subtitle": "Desde sarde in saor hasta moeche, tramezzino, fritole y Bellini.",
      "description": "Comida típica Venecia: cicchetti, baccalà, sarde in saor, bigoli, risi e bisi, sepia negra, moeche, castraure, fritole y Bellini.",
      "imageAlt": "Cicchetti venecianos en un bar",
      "badges": [
        [
          "En barra",
          "Cicchetti y ombra"
        ],
        [
          "Platos",
          "Bigoli y arroz"
        ],
        [
          "Temporada",
          "Moeche y castraure"
        ],
        [
          "Dulces",
          "Fritole y bussolà"
        ]
      ],
      "introTitle": "La cocina veneciana es más que Spritz",
      "intro": [
        "La laguna, los huertos de las islas y el comercio han dado forma a la cocina. Los cicchetti son pequeños bocados de bacaro, pero también hay arroz, pescado, verduras y dulces.",
        "Aquí encontrarás un panorama. El Journal de MVA explica más sobre cicchetti y Spritz, mientras la guía de restaurantes trata menús y cargos.",
        "Moeche y castraure son de temporada y no siempre pueden encontrarse frescos."
      ],
      "highlights": [
        [
          "Cicchetti y ombra",
          "Pequeños bocados con una copa de vino."
        ],
        [
          "Baccalà y sarde in saor",
          "Bacalao seco en crema y sardinas agridulces con cebolla."
        ],
        [
          "Bigoli y risi e bisi",
          "Pasta gruesa y arroz con guisantes."
        ],
        [
          "Risotto di gò y sepia negra",
          "Arroz con pescado de laguna y tinta de sepia."
        ],
        [
          "Schie y folpetti",
          "Gambitas con polenta y pulpo pequeño."
        ],
        [
          "Moeche y castraure",
          "Cangrejos de caparazón blando y alcachofas tempranas de Sant'Erasmo."
        ],
        [
          "Spritz y Bellini",
          "Select, Aperol, Campari o Cynar; Bellini con melocotón blanco y espumoso."
        ],
        [
          "Tramezzini",
          "Sándwiches tiernos y abundantes en bares."
        ],
        [
          "Fritole, bussolà, baicoli",
          "Buñuelos de carnaval y galletas venecianas."
        ],
        [
          "Tiramisù",
          "Su origen es discutido entre varias localidades."
        ]
      ],
      "itinerary": [
        [
          "Desayuno",
          "Bar local",
          "Dulce o tramezzino."
        ],
        [
          "Aperitivo",
          "Bacaro",
          "Dos cicchetti y bebida."
        ],
        [
          "Comida",
          "Plato típico",
          "Bigoli, risotto o sepia si hay."
        ],
        [
          "Merienda",
          "Algo dulce",
          "Fritole en temporada, baicoli o bussolà."
        ],
        [
          "Cena",
          "Pescado y huerta",
          "Pregunta temporada y preparación."
        ],
        [
          "Antes de pedir",
          "Precios",
          "Peso, cubierto y alérgenos."
        ]
      ],
      "adviceTitle": "No conviertas la gastronomía en una lista",
      "advice": "Pocos platos bien preparados valen más que muchas especialidades sin contexto.",
      "heartTitle": "Lo sencillo puede ser lo mejor",
      "heartText": "Un tramezzino o una ombra en un bacaro también cuentan una historia.",
      "faq": [
        [
          "¿Plato más típico?",
          "Hay varios: sarde in saor, baccalà, bigoli y risi e bisi."
        ],
        [
          "¿Qué son moeche?",
          "Cangrejos durante la muda, de temporada breve."
        ],
        [
          "¿Bellini es Spritz?",
          "No, combina melocotón blanco y vino espumoso."
        ],
        [
          "¿Tiramisù nació en Venecia?",
          "La procedencia exacta se debate."
        ]
      ]
    },
    "zh": {
      "title": "威尼斯吃什么：传统菜、Cicchetti 小食与甜点",
      "kicker": "威尼斯美食指南",
      "subtitle": "从 sarde in saor 到 moeche、tramezzino、fritole 与 Bellini。",
      "description": "威尼斯传统美食：cicchetti、baccalà、sarde in saor、bigoli、risi e bisi、墨鱼汁、moeche、castraure、fritole 与 Bellini。",
      "imageAlt": "威尼斯小酒馆里的 cicchetti 小食",
      "badges": [
        [
          "吧台小食",
          "Cicchetti"
        ],
        [
          "主食",
          "Bigoli 与米饭"
        ],
        [
          "时令",
          "Moeche 与 castraure"
        ],
        [
          "甜点",
          "Fritole 与 bussolà"
        ]
      ],
      "introTitle": "威尼斯美食不只有 Spritz",
      "intro": [
        "潟湖海鲜、海岛菜园与历史贸易共同塑造了当地饮食。Cicchetti 是小酒馆吧台小食，此外还有米饭、鱼类、蔬菜与甜点。",
        "本页介绍整体风味；MVA Journal 已分别详细讲解 cicchetti 和 Spritz，餐厅消费指南则讨论价格和菜单。",
        "Moeche 软壳蟹、Sant'Erasmo 的 castraure 紫色朝鲜蓟都有特定季节，并非全年供应。"
      ],
      "highlights": [
        [
          "Cicchetti 与 ombra",
          "配一小杯葡萄酒的吧台小食。"
        ],
        [
          "Baccalà 与 sarde in saor",
          "搅打成奶油状的干鳕鱼泥和洋葱酸甜沙丁鱼。"
        ],
        [
          "Bigoli 与 risi e bisi",
          "粗面条与洋葱鱼酱；豌豆米饭。"
        ],
        [
          "Risotto di gò 与墨鱼汁",
          "潟湖小鱼烩饭及墨鱼汁菜肴。"
        ],
        [
          "Schie 与 folpetti",
          "潟湖小虾配玉米粥，以及小章鱼。"
        ],
        [
          "Moeche 与 castraure",
          "蜕壳期的软壳蟹和 Sant'Erasmo 初采的朝鲜蓟。"
        ],
        [
          "Spritz 与 Bellini",
          "Select/Aperol/Campari/Cynar 版本 Spritz；Bellini 为白桃配起泡酒。"
        ],
        [
          "Tramezzini",
          "柔软且馅料丰富的吧台三明治。"
        ],
        [
          "Fritole、bussolà、baicoli",
          "狂欢节炸甜点、Burano 环形饼干和传统薄脆饼干。"
        ],
        [
          "Tiramisù 的起源",
          "不同地区对其起源存在争议。"
        ]
      ],
      "itinerary": [
        [
          "早餐",
          "本地咖啡馆",
          "点心或三明治。"
        ],
        [
          "开胃酒时间",
          "Bacaro",
          "两份 cicchetti 加饮品。"
        ],
        [
          "午餐",
          "选择地方菜",
          "Bigoli、烩饭或墨鱼菜。"
        ],
        [
          "下午",
          "当地甜食",
          "当季 fritole 或 baicoli、bussolà。"
        ],
        [
          "晚餐",
          "海鲜与时令蔬菜",
          "先问季节和做法。"
        ],
        [
          "点单前",
          "确认价格",
          "尤其是重量价、餐位费与过敏原。"
        ]
      ],
      "adviceTitle": "不要把美食变成打卡清单",
      "advice": "两份认真制作的小食加一道时令菜，比匆忙尝十样特色更有价值。",
      "heartTitle": "简单的味道也值得记住",
      "heartText": "吧台三明治或一小杯葡萄酒，也是威尼斯的日常文化。",
      "faq": [
        [
          "最有代表性的威尼斯菜是什么？",
          "Sarde in saor、baccalà、bigoli 与 risi e bisi 都很经典。"
        ],
        [
          "Moeche 是什么？",
          "蜕壳期的潟湖软壳蟹，只在特定季节供应。"
        ],
        [
          "Bellini 属于 Spritz 吗？",
          "不是，主要由白桃和起泡酒调制。"
        ],
        [
          "提拉米苏起源于威尼斯吗？",
          "其确切起源存在争议，不能简单归于威尼斯。"
        ]
      ]
    }
  }
};
const langs:SiteLang[]=['it','en','de','fr','es','zh'];
const related:[string,string][]=[["Itinerari Venezia 1–7 giorni","/guide/itinerari-venezia-1-7-giorni"],["Venezia nascosta","/guide/venezia-nascosta"],["Dove mangiare: locali selezionati","/dove-mangiare"],["Cicchetti veneziani","/journal/cicchetti-veneziani"],["Spritz veneziano","/journal/spritz-veneziano"],["Venezia in un giorno","/guide/venezia-in-un-giorno"],["Lido di Venezia","/guide/lido-di-venezia"],["Curiosità dei nizioleti","/guide/venezia-nizioleti-calli-sestieri"],["Parole veneziane","/guide/parole-veneziane-glossario"],["Venezia da fotografare","/guide/venezia-da-fotografare"],["Come scegliere un ristorante","/guide/mangiare-a-venezia-senza-sorprese"],["Piatti tipici veneziani","/guide/cosa-mangiare-a-venezia"],["Venezia accessibile","/guide/venezia-accessibile"]];
const images:Record<CulturalBookSlug,string>={"venezia-nizioleti-calli-sestieri":"/images/venezia-nascosta-cover.png","parole-veneziane-glossario":"/images/scopri-venezia-michael-heise.webp","venezia-da-fotografare":"/images/home-rialto-vincenzo-landino.webp","mangiare-a-venezia-senza-sorprese":"/images/journal-cicchetti.webp","cosa-mangiare-a-venezia":"/images/journal-cicchetti.webp"};
const official:Record<CulturalBookSlug,[string,string][]>={"venezia-nizioleti-calli-sestieri":[["Venezia Unica · i sestieri","https://www.veneziaunica.it/it/cosa-fare-a-venezia/il-territorio-di-venezia/sestieri"],["VisitVenezia · nizioleti","https://www.visitvenezia.eu/venezianita/racconti-di-venezia/i-nizioleti-le-tipiche-indicazioni-stradali-di-venezia"]],"parole-veneziane-glossario":[["Venezia Unica · la città e i sestieri","https://www.veneziaunica.it/it/cosa-fare-a-venezia/il-territorio-di-venezia/sestieri"]],"venezia-da-fotografare":[["Comune · regole e rispetto della città","https://www.comune.venezia.it/it/content/sanzioni-comportamenti"],["ENAC · aree e regole per droni","https://www.enac.gov.it/sicurezza-aerea/droni/zone-geografiche-space/voli-con-droni-uas-limitazioni-riserve-dello/"],["D-Flight · cartografia ufficiale","https://www.d-flight.it/"]],"mangiare-a-venezia-senza-sorprese":[["Regione Veneto · art. 30 prezzi e menu","https://bur.regione.veneto.it/BurvServices/pubblica/DettaglioLegge.aspx?id=200297"],["Ministero Salute · allergeni","https://www.salute.gov.it/new/it/tema/nutrizione/allergie-alimentari/"]],"cosa-mangiare-a-venezia":[["Venezia Unica · guida città","https://www.veneziaunica.it/it/"],["Dove mangiare · MVA","https://www.margheraveniceapartments.com/dove-mangiare"]]};
export const culturalBookGuides:Record<CulturalBookSlug,Record<SiteLang,GuideData>>=Object.fromEntries(culturalBookSlugs.map(slug=>[slug,Object.fromEntries(langs.map(lang=>[lang,{slug,...source[slug][lang],image:images[slug],experiences:[],related:related.filter(x=>x[1]!==`/guide/${slug}`),officialLinks:official[slug]}]))])) as unknown as Record<CulturalBookSlug,Record<SiteLang,GuideData>>;
