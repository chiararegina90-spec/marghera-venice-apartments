// Curated, place-specific cultural highlights. A proper name or artwork title retains its original name on site signage.
import type {CultureLang,CulturePlace} from '@/data/culturePlaces';
const languageOrder=['en','de','fr','es','zh'] as const;
const raw={
  "Ponte dei Sospiri": [
    "Bridge of Sighs",
    "Seufzerbrücke",
    "Pont des Soupirs",
    "Puente de los Suspiros",
    "叹息桥"
  ],
  "Sale Istituzionali": [
    "Institutional rooms",
    "Institutionelle Säle",
    "Salles institutionnelles",
    "Salas institucionales",
    "政府议事厅"
  ],
  "Appartamento del Doge": [
    "Doge's apartments",
    "Dogenwohnung",
    "Appartements du Doge",
    "Apartamentos del Dux",
    "总督居所"
  ],
  "Sale Neoclassiche": [
    "Neoclassical rooms",
    "Neoklassizistische Säle",
    "Salles néoclassiques",
    "Salas neoclásicas",
    "新古典主义展厅"
  ],
  "Sale Reali": [
    "Royal rooms",
    "Königliche Säle",
    "Salles royales",
    "Salas reales",
    "王室厅"
  ],
  "sculture classiche": [
    "classical sculptures",
    "klassische Skulpturen",
    "sculptures classiques",
    "esculturas clásicas",
    "古典雕塑"
  ],
  "collezioni archeologiche": [
    "archaeological collections",
    "archäologische Sammlungen",
    "collections archéologiques",
    "colecciones arqueológicas",
    "考古藏品"
  ],
  "soffitti dipinti": [
    "painted ceilings",
    "bemalte Decken",
    "plafonds peints",
    "techos pintados",
    "彩绘天花板"
  ],
  "Sala della Libreria": [
    "Library Hall",
    "Bibliothekssaal",
    "Salle de la Bibliothèque",
    "Sala de la Biblioteca",
    "图书馆大厅"
  ],
  "facciata gotica": [
    "Gothic façade",
    "gotische Fassade",
    "façade gothique",
    "fachada gótica",
    "哥特式立面"
  ],
  "collezione Franchetti": [
    "Franchetti collection",
    "Sammlung Franchetti",
    "collection Franchetti",
    "colección Franchetti",
    "弗兰凯蒂收藏"
  ],
  "loggia sul Canal Grande": [
    "loggia overlooking the Grand Canal",
    "Loggia am Canal Grande",
    "loggia sur le Grand Canal",
    "logia frente al Gran Canal",
    "面向大运河的凉廊"
  ],
  "decorazioni manieriste": [
    "Mannerist decoration",
    "manieristische Dekoration",
    "décors maniéristes",
    "decoración manierista",
    "矫饰主义装饰"
  ],
  "collezioni Grimani": [
    "Grimani collections",
    "Sammlungen Grimani",
    "collections Grimani",
    "colecciones Grimani",
    "格里马尼收藏"
  ],
  "salone da ballo": [
    "ballroom",
    "Ballsaal",
    "salle de bal",
    "salón de baile",
    "舞厅"
  ],
  "arte moderna": [
    "modern art",
    "moderne Kunst",
    "art moderne",
    "arte moderno",
    "现代艺术"
  ],
  "palazzo barocco": [
    "Baroque palace",
    "Barockpalast",
    "palais baroque",
    "palacio barroco",
    "巴洛克宫殿"
  ],
  "arte giapponese": [
    "Japanese art",
    "japanische Kunst",
    "art japonais",
    "arte japonés",
    "日本艺术"
  ],
  "armature": [
    "armour",
    "Rüstungen",
    "armures",
    "armaduras",
    "盔甲"
  ],
  "lacche": [
    "lacquerware",
    "Lackarbeiten",
    "laques",
    "lacas",
    "漆器"
  ],
  "atelier di Mariano Fortuny": [
    "Mariano Fortuny's atelier",
    "Atelier von Mariano Fortuny",
    "atelier de Mariano Fortuny",
    "taller de Mariano Fortuny",
    "马里亚诺·福图尼工作室"
  ],
  "tessuti": [
    "textiles",
    "Textilien",
    "textiles",
    "tejidos",
    "织物"
  ],
  "fotografia": [
    "photography",
    "Fotografie",
    "photographie",
    "fotografía",
    "摄影"
  ],
  "costume veneziano": [
    "Venetian costume",
    "venezianische Kleidung",
    "costume vénitien",
    "indumentaria veneciana",
    "威尼斯传统服饰"
  ],
  "profumo": [
    "perfume",
    "Parfüm",
    "parfum",
    "perfume",
    "香水"
  ],
  "interni storici": [
    "historic interiors",
    "historische Innenräume",
    "intérieurs historiques",
    "interiores históricos",
    "历史室内空间"
  ],
  "teatro veneziano": [
    "Venetian theatre",
    "venezianisches Theater",
    "théâtre vénitien",
    "teatro veneciano",
    "威尼斯戏剧"
  ],
  "marionette": [
    "puppets",
    "Marionetten",
    "marionnettes",
    "marionetas",
    "木偶"
  ],
  "casa natale": [
    "birthplace",
    "Geburtshaus",
    "maison natale",
    "casa natal",
    "出生故居"
  ],
  "dinosauri": [
    "dinosaurs",
    "Dinosaurier",
    "dinosaures",
    "dinosaurios",
    "恐龙"
  ],
  "collezioni naturalistiche": [
    "natural history collections",
    "naturkundliche Sammlungen",
    "collections d'histoire naturelle",
    "colecciones de historia natural",
    "自然史藏品"
  ],
  "vetro romano": [
    "Roman glass",
    "römisches Glas",
    "verre romain",
    "vidrio romano",
    "古罗马玻璃"
  ],
  "Rinascimento": [
    "Renaissance",
    "Renaissance",
    "Renaissance",
    "Renacimiento",
    "文艺复兴"
  ],
  "design contemporaneo": [
    "contemporary design",
    "zeitgenössisches Design",
    "design contemporain",
    "diseño contemporáneo",
    "当代设计"
  ],
  "merletto ad ago": [
    "needle lace",
    "Nadelspitze",
    "dentelle à l'aiguille",
    "encaje de aguja",
    "针绣蕾丝"
  ],
  "Scuola del Merletto": [
    "Lace School",
    "Spitzenschule",
    "École de la Dentelle",
    "Escuela del Encaje",
    "蕾丝学校"
  ],
  "tradizione di Burano": [
    "Burano traditions",
    "Traditionen von Burano",
    "traditions de Burano",
    "tradiciones de Burano",
    "布拉诺传统"
  ],
  "archeologia lagunare": [
    "lagoon archaeology",
    "Lagunenarchäologie",
    "archéologie lagunaire",
    "arqueología lagunar",
    "潟湖考古"
  ],
  "medioevo": [
    "Middle Ages",
    "Mittelalter",
    "Moyen Âge",
    "Edad Media",
    "中世纪"
  ],
  "origini di Venezia": [
    "origins of Venice",
    "Ursprünge Venedigs",
    "origines de Venise",
    "orígenes de Venecia",
    "威尼斯起源"
  ],
  "arte dal 1948": [
    "art since 1948",
    "Kunst seit 1948",
    "art depuis 1948",
    "arte desde 1948",
    "1948年以来的艺术"
  ],
  "mostre contemporanee": [
    "contemporary exhibitions",
    "zeitgenössische Ausstellungen",
    "expositions contemporaines",
    "exposiciones contemporáneas",
    "当代展览"
  ],
  "modelli navali": [
    "ship models",
    "Schiffsmodelle",
    "maquettes navales",
    "maquetas navales",
    "舰船模型"
  ],
  "storia della Serenissima": [
    "history of the Venetian Republic",
    "Geschichte der Republik Venedig",
    "histoire de la République de Venise",
    "historia de la República de Venecia",
    "威尼斯共和国历史"
  ],
  "storia ebraica veneziana": [
    "Venetian Jewish history",
    "jüdische Geschichte Venedigs",
    "histoire juive de Venise",
    "historia judía de Venecia",
    "威尼斯犹太历史"
  ],
  "casa museo": [
    "house museum",
    "Museumshaus",
    "maison-musée",
    "casa museo",
    "故居博物馆"
  ],
  "biblioteca": [
    "library",
    "Bibliothek",
    "bibliothèque",
    "biblioteca",
    "图书馆"
  ],
  "mostre Pinault Collection": [
    "Pinault Collection exhibitions",
    "Ausstellungen der Pinault Collection",
    "expositions de la Collection Pinault",
    "exposiciones de la Colección Pinault",
    "皮诺收藏展览"
  ],
  "architettura": [
    "architecture",
    "Architektur",
    "architecture",
    "arquitectura",
    "建筑"
  ],
  "arte contemporanea": [
    "contemporary art",
    "zeitgenössische Kunst",
    "art contemporain",
    "arte contemporáneo",
    "当代艺术"
  ],
  "chiostri": [
    "cloisters",
    "Kreuzgänge",
    "cloîtres",
    "claustros",
    "回廊"
  ],
  "strumenti antichi": [
    "historical instruments",
    "historische Instrumente",
    "instruments anciens",
    "instrumentos antiguos",
    "古代乐器"
  ],
  "storia del Novecento": [
    "20th-century history",
    "Geschichte des 20. Jahrhunderts",
    "histoire du XXe siècle",
    "historia del siglo XX",
    "20世纪历史"
  ],
  "installazioni digitali": [
    "digital installations",
    "digitale Installationen",
    "installations numériques",
    "instalaciones digitales",
    "数字装置"
  ],
  "design Olivetti": [
    "Olivetti design",
    "Olivetti-Design",
    "design Olivetti",
    "diseño Olivetti",
    "奥利维蒂设计"
  ],
  "Sala Capitolare": [
    "Chapter Hall",
    "Kapitelsaal",
    "salle capitulaire",
    "sala capitular",
    "议事大厅"
  ],
  "Sala dell’Albergo": [
    "Albergo Hall",
    "Albergo-Saal",
    "salle de l'Albergo",
    "sala del Albergo",
    "阿尔贝尔戈厅"
  ],
  "facciata rinascimentale": [
    "Renaissance façade",
    "Renaissancefassade",
    "façade Renaissance",
    "fachada renacentista",
    "文艺复兴式立面"
  ],
  "biblioteca medica": [
    "medical library",
    "medizinische Bibliothek",
    "bibliothèque médicale",
    "biblioteca médica",
    "医学图书馆"
  ],
  "ciclo di San Giorgio": [
    "St George painting cycle",
    "Bilderzyklus des heiligen Georg",
    "cycle peint de saint Georges",
    "ciclo pictórico de San Jorge",
    "圣乔治绘画组画"
  ],
  "confraternita dalmata": [
    "Dalmatian confraternity",
    "dalmatinische Bruderschaft",
    "confrérie dalmate",
    "cofradía dálmata",
    "达尔马提亚兄弟会"
  ],
  "salone monumentale": [
    "monumental hall",
    "Monumentalsaal",
    "grande salle monumentale",
    "salón monumental",
    "宏伟大厅"
  ],
  "confraternita": [
    "confraternity",
    "Bruderschaft",
    "confrérie",
    "cofradía",
    "宗教兄弟会"
  ],
  "concerti": [
    "concerts",
    "Konzerte",
    "concerts",
    "conciertos",
    "音乐会"
  ],
  "sale confraternali": [
    "confraternity rooms",
    "Bruderschaftssäle",
    "salles de confrérie",
    "salas de cofradía",
    "兄弟会厅"
  ],
  "arte del Novecento": [
    "20th-century art",
    "Kunst des 20. Jahrhunderts",
    "art du XXe siècle",
    "arte del siglo XX",
    "20世纪艺术"
  ],
  "natura lagunare": [
    "lagoon nature",
    "Lagunenlandschaft",
    "nature lagunaire",
    "naturaleza lagunar",
    "潟湖自然风光"
  ],
  "arte sacra": [
    "sacred art",
    "sakrale Kunst",
    "art sacré",
    "arte sacro",
    "宗教艺术"
  ],
  "area della Salute": [
    "Salute district",
    "Umgebung der Salute",
    "quartier de la Salute",
    "zona de la Salute",
    "圣母安康教堂周边"
  ],
  "Padiglione Centrale": [
    "Central Pavilion",
    "Zentralpavillon",
    "Pavillon central",
    "Pabellón Central",
    "中央展馆"
  ],
  "padiglioni nazionali": [
    "national pavilions",
    "Länderpavillons",
    "pavillons nationaux",
    "pabellones nacionales",
    "各国展馆"
  ],
  "mostre internazionali": [
    "international exhibitions",
    "internationale Ausstellungen",
    "expositions internationales",
    "exposiciones internacionales",
    "国际展览"
  ],
  "musica": [
    "music",
    "Musik",
    "musique",
    "música",
    "音乐"
  ],
  "mostre e incontri": [
    "exhibitions and talks",
    "Ausstellungen und Gespräche",
    "expositions et rencontres",
    "exposiciones y encuentros",
    "展览与讲座"
  ],
  "musica romantica francese": [
    "French Romantic music",
    "französische Romantik",
    "musique romantique française",
    "música romántica francesa",
    "法国浪漫主义音乐"
  ],
  "palazzo storico": [
    "historic palace",
    "historischer Palast",
    "palais historique",
    "palacio histórico",
    "历史宫殿"
  ],
  "scala elicoidale": [
    "spiral staircase",
    "Wendeltreppe",
    "escalier en colimaçon",
    "escalera de caracol",
    "螺旋楼梯"
  ],
  "logge": [
    "loggias",
    "Loggien",
    "loggias",
    "logias",
    "凉廊"
  ],
  "belvedere": [
    "viewing terrace",
    "Aussichtspunkt",
    "belvédère",
    "mirador",
    "观景台"
  ],
  "Sala Teatrale": [
    "theatre auditorium",
    "Theatersaal",
    "salle de théâtre",
    "sala teatral",
    "剧院大厅"
  ],
  "Palco Reale": [
    "Royal Box",
    "Königsloge",
    "loge royale",
    "palco real",
    "皇家包厢"
  ],
  "storia dell’opera": [
    "history of opera",
    "Operngeschichte",
    "histoire de l'opéra",
    "historia de la ópera",
    "歌剧史"
  ],
  "macchina dell’orologio": [
    "clock mechanism",
    "Uhrwerk",
    "mécanisme de l'horloge",
    "mecanismo del reloj",
    "钟表机械装置"
  ],
  "terrazza": [
    "terrace",
    "Terrasse",
    "terrasse",
    "terraza",
    "露台"
  ],
  "ascensore": [
    "lift",
    "Aufzug",
    "ascenseur",
    "ascensor",
    "电梯"
  ],
  "vista sulla laguna": [
    "lagoon view",
    "Blick auf die Lagune",
    "vue sur la lagune",
    "vista a la laguna",
    "潟湖景观"
  ],
  "mura": [
    "walls",
    "Mauern",
    "remparts",
    "murallas",
    "城墙"
  ],
  "storia navale": [
    "naval history",
    "Seefahrtsgeschichte",
    "histoire navale",
    "historia naval",
    "海军史"
  ],
  "storia di Mestre": [
    "history of Mestre",
    "Geschichte von Mestre",
    "histoire de Mestre",
    "historia de Mestre",
    "梅斯特雷历史"
  ],
  "mosaici": [
    "mosaics",
    "Mosaiken",
    "mosaïques",
    "mosaicos",
    "马赛克"
  ],
  "cupola": [
    "dome",
    "Kuppel",
    "coupole",
    "cúpula",
    "穹顶"
  ],
  "sacrestia monumentale": [
    "monumental sacristy",
    "monumentale Sakristei",
    "sacristie monumentale",
    "sacristía monumental",
    "大型圣器室"
  ],
  "monumenti funebri": [
    "funerary monuments",
    "Grabdenkmäler",
    "monuments funéraires",
    "monumentos funerarios",
    "墓葬纪念物"
  ],
  "tombe dei dogi": [
    "doges' tombs",
    "Dogengräber",
    "tombes des doges",
    "tumbas de los dogos",
    "总督陵墓"
  ],
  "gotico veneziano": [
    "Venetian Gothic",
    "venezianische Gotik",
    "gothique vénitien",
    "gótico veneciano",
    "威尼斯哥特式"
  ],
  "campanile": [
    "bell tower",
    "Glockenturm",
    "campanile",
    "campanario",
    "钟楼"
  ],
  "cripta": [
    "crypt",
    "Krypta",
    "crypte",
    "cripta",
    "地下墓室"
  ],
  "museo": [
    "museum",
    "Museum",
    "musée",
    "museo",
    "博物馆"
  ],
  "marmi policromi": [
    "polychrome marble",
    "polychromer Marmor",
    "marbres polychromes",
    "mármoles policromados",
    "彩色大理石"
  ],
  "interno raccolto": [
    "intimate interior",
    "schlichter Innenraum",
    "intérieur intimiste",
    "interior íntimo",
    "精致紧凑的内部空间"
  ],
  "soffitto a carena": [
    "ship's-keel ceiling",
    "Schiffsrumpfdecke",
    "plafond en carène de navire",
    "techo de quilla de barco",
    "船底形天花板"
  ],
  "museo interno": [
    "on-site museum",
    "Museum vor Ort",
    "musée sur place",
    "museo interior",
    "馆内博物馆"
  ],
  "decorazione pittorica": [
    "painted decoration",
    "malerische Dekoration",
    "décor peint",
    "decoración pictórica",
    "绘画装饰"
  ],
  "cappella Martini": [
    "Martini chapel",
    "Martini-Kapelle",
    "chapelle Martini",
    "capilla Martini",
    "马尔蒂尼礼拜堂"
  ],
  "soffitto ligneo": [
    "wooden ceiling",
    "Holzdecke",
    "plafond en bois",
    "techo de madera",
    "木质天花板"
  ],
  "campo veneziano": [
    "Venetian campo square",
    "venezianischer Campo",
    "campo vénitien",
    "campo veneciano",
    "威尼斯社区广场"
  ],
  "facciata barocca": [
    "Baroque façade",
    "Barockfassade",
    "façade baroque",
    "fachada barroca",
    "巴洛克式立面"
  ],
  "facciata sul Canal Grande": [
    "Grand Canal façade",
    "Fassade am Canal Grande",
    "façade sur le Grand Canal",
    "fachada al Gran Canal",
    "面向大运河的立面"
  ],
  "barocco": [
    "Baroque",
    "Barock",
    "baroque",
    "barroco",
    "巴洛克"
  ],
  "antica cattedrale": [
    "former cathedral",
    "ehemalige Kathedrale",
    "ancienne cathédrale",
    "antigua catedral",
    "古老主教座堂"
  ],
  "squero vicino": [
    "nearby squero boatyard",
    "nahe gelegene Squero-Werft",
    "squero voisin",
    "astillero squero cercano",
    "附近的传统船坞"
  ],
  "area di Rialto": [
    "Rialto area",
    "Rialto-Viertel",
    "quartier du Rialto",
    "zona de Rialto",
    "里亚托区域"
  ],
  "soffitto dipinto": [
    "painted ceiling",
    "bemalte Decke",
    "plafond peint",
    "techo pintado",
    "彩绘天花板"
  ],
  "interno ligneo": [
    "wooden interior",
    "Innenraum aus Holz",
    "intérieur en bois",
    "interior de madera",
    "木质内部空间"
  ],
  "atmosfera locale": [
    "local atmosphere",
    "lokale Atmosphäre",
    "atmosphère locale",
    "ambiente local",
    "本地氛围"
  ],
  "facciata alle Zattere": [
    "façade facing Zattere",
    "Fassade an den Zattere",
    "façade sur les Zattere",
    "fachada a las Zattere",
    "面向扎泰雷步道的立面"
  ],
  "vista sul Bacino": [
    "St Mark's Basin view",
    "Blick auf das Markusbecken",
    "vue sur le bassin de Saint-Marc",
    "vistas a la cuenca de San Marcos",
    "圣马可湾景观"
  ],
  "interno barocco": [
    "Baroque interior",
    "Barockinnenraum",
    "intérieur baroque",
    "interior barroco",
    "巴洛克风格内部空间"
  ],
  "marmi verdi": [
    "green marble",
    "grüner Marmor",
    "marbres verts",
    "mármoles verdes",
    "绿色大理石"
  ],
  "architettura settecentesca": [
    "18th-century architecture",
    "Architektur des 18. Jahrhunderts",
    "architecture du XVIIIe siècle",
    "arquitectura del siglo XVIII",
    "18世纪建筑"
  ],
  "restauri": [
    "restorations",
    "Restaurierungen",
    "restaurations",
    "restauraciones",
    "修复工程"
  ],
  "reperti romani": [
    "Roman artefacts",
    "römische Fundstücke",
    "vestiges romains",
    "hallazgos romanos",
    "古罗马文物"
  ],
  "sale napoleoniche": [
    "Napoleonic rooms",
    "Säle aus napoleonischer Zeit",
    "salles napoléoniennes",
    "salas napoleónicas",
    "拿破仑时代展厅"
  ],
  "ambienti storici della Villa": [
    "historic rooms of the villa",
    "historische Villenräume",
    "salles historiques de la villa",
    "salas históricas de la villa",
    "别墅历史厅室"
  ],
  "affreschi": [
    "frescoes",
    "Fresken",
    "fresques",
    "frescos",
    "壁画"
  ],
  "giardino": [
    "garden",
    "Garten",
    "jardin",
    "jardín",
    "花园"
  ],
  "archeologia romana": [
    "Roman archaeology",
    "römische Archäologie",
    "archéologie romaine",
    "arqueología romana",
    "古罗马考古"
  ],
  "Giudizio Universale": [
    "Last Judgement",
    "Jüngstes Gericht",
    "Jugement dernier",
    "Juicio Final",
    "最后的审判"
  ],
  "ciclo di affreschi": [
    "fresco cycle",
    "Freskenzyklus",
    "cycle de fresques",
    "ciclo de frescos",
    "壁画组画"
  ],
  "archeologia": [
    "archaeology",
    "Archäologie",
    "archéologie",
    "arqueología",
    "考古"
  ],
  "pinacoteca": [
    "art gallery",
    "Gemäldegalerie",
    "pinacothèque",
    "pinacoteca",
    "绘画美术馆"
  ],
  "ciclo astrologico": [
    "astrological fresco cycle",
    "astrologischer Bilderzyklus",
    "cycle astrologique",
    "ciclo astrológico",
    "占星壁画组画"
  ],
  "piazze medievali": [
    "medieval squares",
    "mittelalterliche Plätze",
    "places médiévales",
    "plazas medievales",
    "中世纪广场"
  ],
  "Teatro Anatomico": [
    "Anatomical Theatre",
    "Anatomisches Theater",
    "Théâtre anatomique",
    "Teatro Anatómico",
    "解剖剧场"
  ],
  "Aula Magna": [
    "Great Hall",
    "Aula Magna",
    "Aula Magna",
    "Aula Magna",
    "主礼堂"
  ],
  "Università": [
    "university",
    "Universität",
    "université",
    "universidad",
    "大学"
  ],
  "Orto UNESCO": [
    "UNESCO Botanical Garden",
    "UNESCO-Botanischer Garten",
    "jardin botanique UNESCO",
    "jardín botánico UNESCO",
    "联合国教科文组织植物园"
  ],
  "Giardino della Biodiversità": [
    "Biodiversity Garden",
    "Garten der Biodiversität",
    "Jardin de la Biodiversité",
    "Jardín de la Biodiversidad",
    "生物多样性花园"
  ],
  "collezioni botaniche": [
    "botanical collections",
    "botanische Sammlungen",
    "collections botaniques",
    "colecciones botánicas",
    "植物藏品"
  ],
  "Tomba del Santo": [
    "tomb of Saint Anthony",
    "Grab des heiligen Antonius",
    "tombe de saint Antoine",
    "tumba de san Antonio",
    "圣安东尼墓"
  ],
  "cappelle": [
    "chapels",
    "Kapellen",
    "chapelles",
    "capillas",
    "礼拜堂"
  ],
  "medicina": [
    "medicine",
    "Medizin",
    "médecine",
    "medicina",
    "医学"
  ],
  "anatomia": [
    "anatomy",
    "Anatomie",
    "anatomie",
    "anatomía",
    "解剖学"
  ],
  "installazioni interattive": [
    "interactive installations",
    "interaktive Installationen",
    "installations interactives",
    "instalaciones interactivas",
    "互动装置"
  ],
  "lanterne magiche": [
    "magic lanterns",
    "Laterna-magica-Projektoren",
    "lanternes magiques",
    "linternas mágicas",
    "幻灯机"
  ],
  "immagini ottiche": [
    "optical imagery",
    "optische Bilder",
    "images optiques",
    "imágenes ópticas",
    "光学影像"
  ],
  "storia del cinema": [
    "history of cinema",
    "Filmgeschichte",
    "histoire du cinéma",
    "historia del cine",
    "电影史"
  ],
  "sale monumentali": [
    "monumental rooms",
    "Monumentalsäle",
    "salles monumentales",
    "salas monumentales",
    "宏伟展厅"
  ],
  "parco": [
    "park",
    "Park",
    "parc",
    "parque",
    "公园"
  ],
  "anfiteatro romano": [
    "Roman amphitheatre",
    "römisches Amphitheater",
    "amphithéâtre romain",
    "anfiteatro romano",
    "古罗马圆形剧场"
  ],
  "storia degli spettacoli": [
    "history of performances",
    "Geschichte der Aufführungen",
    "histoire des spectacles",
    "historia de los espectáculos",
    "演出历史"
  ],
  "balcone": [
    "balcony",
    "Balkon",
    "balcon",
    "balcón",
    "阳台"
  ],
  "cortile": [
    "courtyard",
    "Innenhof",
    "cour",
    "patio",
    "庭院"
  ],
  "pittura veneta": [
    "Veneto painting",
    "Malerei aus Venetien",
    "peinture vénitienne de Vénétie",
    "pintura véneta",
    "威尼托绘画"
  ],
  "castello scaligero": [
    "Scaliger castle",
    "Scaligerburg",
    "château des Scaliger",
    "castillo de los Scalígeros",
    "斯卡利杰里城堡"
  ],
  "vista sui tetti": [
    "rooftop view",
    "Blick über die Dächer",
    "vue sur les toits",
    "vista a los tejados",
    "屋顶景观"
  ],
  "teatro romano": [
    "Roman theatre",
    "römisches Theater",
    "théâtre romain",
    "teatro romano",
    "古罗马剧场"
  ],
  "panorama sull’Adige": [
    "Adige River panorama",
    "Panorama an der Etsch",
    "vue panoramique sur l'Adige",
    "panorama del Adigio",
    "阿迪杰河景观"
  ],
  "portale bronzeo": [
    "bronze portal",
    "Bronzeportal",
    "portail en bronze",
    "portada de bronce",
    "青铜门"
  ],
  "romanico": [
    "Romanesque architecture",
    "Romanik",
    "art roman",
    "románico",
    "罗曼式建筑"
  ],
  "battistero": [
    "baptistery",
    "Baptisterium",
    "baptistère",
    "baptisterio",
    "洗礼堂"
  ],
  "complesso del Duomo": [
    "cathedral complex",
    "Domkomplex",
    "ensemble de la cathédrale",
    "conjunto de la catedral",
    "主教座堂建筑群"
  ],
  "arte antica e moderna": [
    "ancient and modern art",
    "alte und moderne Kunst",
    "art ancien et moderne",
    "arte antiguo y moderno",
    "古代与现代艺术"
  ],
  "collezione privata": [
    "private collection",
    "Privatsammlung",
    "collection privée",
    "colección privada",
    "私人收藏"
  ],
  "scene prospettiche": [
    "perspective stage scenery",
    "perspektivische Bühnenbilder",
    "décors en perspective",
    "escenarios en perspectiva",
    "透视布景"
  ],
  "logge palladiane": [
    "Palladian loggias",
    "palladianische Loggien",
    "loggias palladiennes",
    "logias palladianas",
    "帕拉第奥式凉廊"
  ],
  "arte veneta": [
    "Veneto art",
    "Kunst aus Venetien",
    "art de Vénétie",
    "arte del Véneto",
    "威尼托艺术"
  ],
  "sala centrale": [
    "central hall",
    "Zentralsaal",
    "salle centrale",
    "sala central",
    "中央大厅"
  ],
  "paesaggio": [
    "landscape",
    "Landschaft",
    "paysage",
    "paisaje",
    "景观"
  ],
  "giardino storico": [
    "historic garden",
    "historischer Garten",
    "jardin historique",
    "jardín histórico",
    "历史花园"
  ],
  "icone russe": [
    "Russian icons",
    "russische Ikonen",
    "icônes russes",
    "iconos rusos",
    "俄罗斯圣像"
  ],
  "modelli": [
    "models",
    "Modelle",
    "maquettes",
    "maquetas",
    "模型"
  ],
  "complesso conventuale": [
    "monastic complex",
    "Klosteranlage",
    "ensemble conventuel",
    "conjunto conventual",
    "修道院建筑群"
  ],
  "collezioni civiche": [
    "municipal collections",
    "städtische Sammlungen",
    "collections municipales",
    "colecciones municipales",
    "市政收藏"
  ],
  "gotico": [
    "Gothic",
    "Gotik",
    "gothique",
    "gótico",
    "哥特式"
  ],
  "seminario": [
    "seminary",
    "Priesterseminar",
    "séminaire",
    "seminario",
    "神学院"
  ],
  "affreschi Zelotti": [
    "Zelotti frescoes",
    "Fresken von Zelotti",
    "fresques de Zelotti",
    "frescos de Zelotti",
    "泽洛蒂壁画"
  ],
  "villa agricola": [
    "agricultural villa",
    "Landvilla",
    "villa agricole",
    "villa agrícola",
    "乡村农庄别墅"
  ],
  "tempietto": [
    "small temple",
    "Tempietto",
    "petit temple",
    "templete",
    "小神庙"
  ],
  "panorama": [
    "panoramic view",
    "Panorama",
    "panorama",
    "panorama",
    "全景"
  ],
  "mura medievali": [
    "medieval walls",
    "mittelalterliche Mauern",
    "remparts médiévaux",
    "murallas medievales",
    "中世纪城墙"
  ],
  "colli asolani": [
    "Asolo hills",
    "Hügel von Asolo",
    "collines d'Asolo",
    "colinas de Asolo",
    "阿索洛丘陵"
  ],
  "gessi di Canova": [
    "Canova plaster casts",
    "Gipsabgüsse von Canova",
    "plâtres de Canova",
    "yesos de Canova",
    "卡诺瓦石膏塑像"
  ],
  "ala Scarpa": [
    "Scarpa wing",
    "Scarpa-Flügel",
    "aile Scarpa",
    "ala Scarpa",
    "斯卡帕设计翼楼"
  ],
  "arte bellunese": [
    "art from Belluno",
    "Kunst aus Belluno",
    "art de Belluno",
    "arte de Belluno",
    "贝卢诺艺术"
  ],
  "palazzo settecentesco": [
    "18th-century palace",
    "Palast des 18. Jahrhunderts",
    "palais du XVIIIe siècle",
    "palacio del siglo XVIII",
    "18世纪宫殿"
  ],
  "panorama Dolomiti": [
    "Dolomites panorama",
    "Dolomitenpanorama",
    "panorama sur les Dolomites",
    "panorama de los Dolomitas",
    "多洛米蒂山景"
  ],
  "cultura rurale": [
    "rural culture",
    "ländliche Kultur",
    "culture rurale",
    "cultura rural",
    "乡村文化"
  ],
  "tradizioni": [
    "traditions",
    "Traditionen",
    "traditions",
    "tradiciones",
    "传统"
  ],
  "casa storica": [
    "historic house",
    "historisches Haus",
    "maison historique",
    "casa histórica",
    "历史故居"
  ],
  "occhialeria": [
    "eyewear industry",
    "Brillenindustrie",
    "lunetterie",
    "industria óptica",
    "眼镜制造业"
  ],
  "design": [
    "design",
    "Design",
    "design",
    "diseño",
    "设计"
  ],
  "distretto del Cadore": [
    "Cadore district",
    "Region Cadore",
    "région du Cadore",
    "distrito del Cadore",
    "卡多雷地区"
  ],
  "geologia": [
    "geology",
    "Geologie",
    "géologie",
    "geología",
    "地质"
  ],
  "grandi mostre": [
    "major exhibitions",
    "große Ausstellungen",
    "grandes expositions",
    "grandes exposiciones",
    "大型展览"
  ],
  "centro storico": [
    "historic centre",
    "Altstadt",
    "centre historique",
    "centro histórico",
    "历史中心"
  ],
  "archeologia polesana": [
    "Polesine archaeology",
    "Archäologie des Polesine",
    "archéologie du Polesine",
    "arqueología del Polesine",
    "波莱西内考古"
  ],
  "storia del territorio": [
    "regional history",
    "Regionalgeschichte",
    "histoire du territoire",
    "historia del territorio",
    "地区历史"
  ],
  "ambra": [
    "amber",
    "Bernstein",
    "ambre",
    "ámbar",
    "琥珀"
  ],
  "Adria antica": [
    "ancient Adria",
    "antikes Adria",
    "Adria antique",
    "Adria antigua",
    "古代阿德里亚"
  ],
  "barchesse": [
    "villa service wings",
    "Wirtschaftsflügel der Villen",
    "dépendances des villas",
    "dependencias de villas",
    "别墅附属翼楼"
  ],
  "pittura seicentesca": [
    "17th-century painting",
    "Malerei des 17. Jahrhunderts",
    "peinture du XVIIe siècle",
    "pintura del siglo XVII",
    "17世纪绘画"
  ],
  "campanile Longhena": [
    "Longhena bell tower",
    "Glockenturm von Longhena",
    "campanile de Longhena",
    "campanario de Longhena",
    "隆盖纳钟楼"
  ],
  "mosaico absidale della Madonna orante": [
    "apse mosaic of the praying Virgin",
    "Apsismosaik der betenden Madonna",
    "mosaïque absidiale de la Vierge orante",
    "mosaico absidal de la Virgen orante",
    "后殿祈祷圣母马赛克"
  ],
  "pavimento musivo medievale": [
    "medieval mosaic floor",
    "mittelalterlicher Mosaikboden",
    "pavement de mosaïques médiéval",
    "suelo de mosaico medieval",
    "中世纪马赛克地面"
  ],
  "abside romanica affacciata sul canale": [
    "Romanesque apse overlooking the canal",
    "romanische Apsis am Kanal",
    "abside romane sur le canal",
    "ábside románico junto al canal",
    "临运河的罗曼式后殿"
  ],
  "mosaici bizantini": [
    "Byzantine mosaics",
    "byzantinische Mosaiken",
    "mosaïques byzantines",
    "mosaicos bizantinos",
    "拜占庭马赛克"
  ],
  "campanile e panorama sulla Laguna Nord": [
    "bell tower and northern lagoon views",
    "Glockenturm und Blick auf die nördliche Lagune",
    "campanile et panorama sur la lagune nord",
    "campanario y vistas de la laguna norte",
    "钟楼与潟湖北部景观"
  ]
} satisfies Record<string,string[]>;
export function cultureFactHighlight(value:string,lang:CultureLang):string{
 if(lang==='it')return value;
 const translated=raw[value]?.[languageOrder.indexOf(lang)];
 return translated || value; // Preserve the exact named artwork/site, never replace it with generic boilerplate.
}
export function culturePlaceHighlights(place:CulturePlace,lang:CultureLang){return place.highlights.map(item=>cultureFactHighlight(item,lang));}
export const localizedFactCount=Object.keys(raw).length;
