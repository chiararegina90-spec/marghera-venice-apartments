type Lang='it'|'en'|'de'|'fr'|'es'|'zh';
type Article={slug:string;title:string;metaTitle:string;category:string;description:string;image:string;fallbackImage:string;imageAlt:string;commonsQuery:string;eventDate:string;lead:string;sections:readonly (readonly [string,string])[];tip:string;official:readonly [string,string];relatedSlugs:readonly string[];relatedLinks:readonly (readonly [string,string])[];datePublished:string;dateModified:string};

const slug='cimitero-san-michele-venezia';
const card='/images/journal-events/cimitero-san-michele-venezia-card.webp';
const cover='/images/journal-events/cimitero-san-michele-venezia-cover.webp';
const official='https://www.comune.venezia.it/it/content/cimitero-smichele';

export const sanMicheleJournal:Record<Lang,Article>={
  it:{
    slug,title:'Cimitero di San Michele a Venezia: ponte votivo, storia e tombe celebri',
    metaTitle:'Cimitero San Michele Venezia: ponte votivo e tombe celebri',
    category:'Venezia insolita & tradizioni',
    description:'Scopri il Cimitero di San Michele a Venezia, il ponte votivo dalle Fondamente Nove, la tradizione dei Defunti, la storia dell’isola e le tombe celebri.',
    image:card,fallbackImage:cover,imageAlt:'Ponte votivo temporaneo tra le Fondamente Nove e il Cimitero di San Michele in Isola a Venezia',commonsQuery:'',eventDate:'PONTE VOTIVO · QUANDO CONFERMATO',
    lead:'Tra Venezia e Murano c’è un’isola che molti visitatori vedono solo dal vaporetto: San Michele, il cimitero monumentale della città. In occasione della Commemorazione dei Defunti, Venezia ha ritrovato anche un’antica tradizione: un ponte galleggiante dalle Fondamente Nove che, quando viene allestito, permette di raggiungere il cimitero a piedi attraversando la laguna.',
    sections:[
      ['Perché Venezia ha un cimitero su un’isola','La nascita del cimitero moderno è legata alle norme napoleoniche che portarono i luoghi di sepoltura fuori dai centri abitati. Nel 1807 venne scelta l’isola di San Cristoforo della Pace; nel 1836 il canale che la separava da San Michele fu interrato, unendo le due isole e ampliando il camposanto. Oggi San Michele è ancora il principale cimitero monumentale di Venezia e il Comune lo descrive come un vero museo a cielo aperto.'],
      ['Il ponte votivo dalle Fondamente Nove','Il ponte di San Michele è un collegamento pedonale temporaneo che parte dalle Fondamente Nove e arriva all’ingresso monumentale del cimitero. Nella versione riproposta nel 2025 superava i 400 metri ed era formato da moduli galleggianti. Non è però un ponte permanente né un appuntamento automaticamente annuale: la tradizione del ponte di barche era proseguita fino al 1950, è stata recuperata nel 2019 e nuovamente nel 2025.'],
      ['Il ponte di San Michele nel 2026: cosa sappiamo','Al 13 settembre 2026 non risulta ancora pubblicata dal Comune di Venezia una conferma ufficiale del ponte per la Commemorazione dei Defunti 2026. Per questo non indichiamo date o orari non verificati. Come riferimento storico, nel 2025 il passaggio fu aperto dal 30 ottobre al 9 novembre; fino al 2 novembre l’accesso era riservato a residenti e possessori di Venezia Unica, mentre dal 3 novembre era consentito a tutti. Se il ponte verrà riproposto nel 2026, aggiorneremo questa pagina con le disposizioni ufficiali.'],
      ['San Michele, un museo a cielo aperto','Tra cipressi, chiostri e monumenti funerari riposano figure che appartengono alla storia culturale internazionale. Il Comune segnala, tra gli altri, il poeta Ezra Pound, la violinista Olga Rudge, il compositore Igor Stravinskij e il poeta Joseph Brodsky. La visita può quindi essere anche un percorso di storia e arte, ma senza dimenticare che San Michele è prima di tutto un cimitero ancora in uso.'],
      ['Come visitarlo con rispetto','San Michele non va vissuta come una curiosità macabra o una normale attrazione turistica. È un luogo in cui famiglie e cittadini vengono a salutare i propri defunti. Mantenete un tono di voce basso, rispettate cerimonie e sepolture, seguite la segnaletica e le indicazioni del personale. Il Comune mette a disposizione una mappa e materiali dedicati alle tombe e ai monumenti di interesse storico-artistico; le visite organizzate di gruppi, scuole o università devono essere autorizzate.'],
      ['Come arrivare da Marghera','Dai nostri appartamenti potete lasciare l’auto nel parcheggio privato e raggiungere Venezia in autobus o in treno. Normalmente San Michele si raggiunge in vaporetto; quando il ponte votivo viene ufficialmente allestito, diventa invece possibile arrivare a piedi dalle Fondamente Nove. Prima di partire controllate sempre gli avvisi del Comune, perché accesso, durata del ponte e possibili chiusure dipendono dall’edizione e dalle condizioni della laguna.']
    ],
    tip:'Se il ponte verrà confermato, attraversarlo a piedi è probabilmente il modo più particolare per capire quanto Venezia riesca a trasformare anche un gesto di memoria in un rapporto fisico con la laguna. Andate con calma e con lo stesso rispetto con cui entrereste nel cimitero della vostra città.',
    official:['Comune di Venezia — Cimitero di San Michele',official],relatedSlugs:[],
    relatedLinks:[['Festa della Madonna della Salute e ponte votivo','/journal/festa-madonna-salute-venezia'],['Come vivere Venezia con rispetto','/journal/buone-maniere-a-venezia']],datePublished:'2026-09-13',dateModified:'2026-09-13'
  },
  en:{
    slug,title:'San Michele Cemetery in Venice: the votive bridge, history and famous graves',
    metaTitle:'San Michele Cemetery Venice: votive bridge & famous graves',
    category:'Hidden Venice & traditions',
    description:'Discover San Michele Cemetery in Venice, the temporary votive bridge from Fondamente Nove, the All Souls tradition, island history and famous graves.',
    image:card,fallbackImage:cover,imageAlt:'Temporary votive bridge from Fondamente Nove to San Michele Cemetery in Venice',commonsQuery:'',eventDate:'VOTIVE BRIDGE · WHEN CONFIRMED',
    lead:'Between Venice and Murano lies an island many visitors only notice from the vaporetto: San Michele, Venice’s monumental cemetery. Around the Commemoration of the Dead, the city has also revived an old tradition: a floating bridge from Fondamente Nove that, when installed, lets people walk across the lagoon directly to the cemetery.',
    sections:[
      ['Why Venice has a cemetery on an island','The modern cemetery grew out of Napoleonic rules that moved burials away from densely inhabited centres. In 1807 San Cristoforo della Pace was selected; in 1836 the canal separating it from San Michele was filled in, joining the two islands and enlarging the burial ground. Today San Michele remains Venice’s main monumental cemetery, described by the Municipality as an open-air museum.'],
      ['The votive bridge from Fondamente Nove','The San Michele bridge is a temporary pedestrian link between Fondamente Nove and the cemetery’s monumental entrance. In the version reinstated in 2025 it was more than 400 metres long and built from floating modules. It is neither permanent nor automatically erected every year: the traditional bridge of boats continued until 1950, returned in 2019 and was installed again in 2025.'],
      ['San Michele bridge in 2026: what is confirmed','As of 13 September 2026, the Municipality of Venice has not yet published an official confirmation that the bridge will return for the 2026 Commemoration of the Dead. We therefore do not publish unverified dates or opening times. For context, in 2025 the bridge was open from 30 October to 9 November; access was initially limited to residents and Venezia Unica cardholders through 2 November, then opened to everyone from 3 November. If a 2026 bridge is announced, this page will be updated with the official rules.'],
      ['San Michele as an open-air museum','Among cypresses, cloisters and funerary monuments are graves connected with international cultural history. The Municipality highlights figures including poet Ezra Pound, violinist Olga Rudge, composer Igor Stravinsky and poet Joseph Brodsky. A visit can therefore be a journey through art and history, but San Michele is first and foremost an active cemetery.'],
      ['How to visit respectfully','San Michele should not be treated as a macabre curiosity or an ordinary sightseeing attraction. Families and local residents come here to remember their dead. Keep voices low, respect ceremonies and graves, follow signs and staff instructions. The Municipality provides maps and material on historically and artistically important graves; organised group, school and university visits require prior authorisation.'],
      ['How to get there from Marghera','From our apartments you can leave the car in the private parking area and reach Venice by bus or train. Normally San Michele is reached by vaporetto; when the votive bridge is officially installed, you can instead walk from Fondamente Nove. Always check current municipal notices before setting out, because access rules, bridge dates and weather-related closures depend on each edition.']
    ],
    tip:'If the bridge is confirmed, walking across it is an extraordinary way to understand how Venice turns even an act of remembrance into a physical relationship with the lagoon. Take your time and enter San Michele with the same respect you would show in a cemetery in your own city.',
    official:['Municipality of Venice — San Michele Cemetery',official],relatedSlugs:[],
    relatedLinks:[['Madonna della Salute and its votive bridge','/en/journal/festa-madonna-salute-venezia'],['How to enjoy Venice respectfully','/en/journal/buone-maniere-a-venezia']],datePublished:'2026-09-13',dateModified:'2026-09-13'
  },
  de:{
    slug,title:'Friedhof San Michele in Venedig: Votivbrücke, Geschichte und berühmte Gräber',
    metaTitle:'Friedhof San Michele Venedig: Votivbrücke & berühmte Gräber',
    category:'Unbekanntes Venedig & Traditionen',
    description:'San Michele in Venedig: Geschichte des Inselfriedhofs, Votivbrücke ab Fondamente Nove, Totengedenken und berühmte Gräber.',
    image:card,fallbackImage:cover,imageAlt:'Temporäre Votivbrücke von Fondamente Nove zum Friedhof San Michele in Venedig',commonsQuery:'',eventDate:'VOTIVBRÜCKE · WENN BESTÄTIGT',
    lead:'Zwischen Venedig und Murano liegt eine Insel, die viele Besucher nur vom Vaporetto aus sehen: San Michele, der monumentale Friedhof der Stadt. Rund um das Totengedenken hat Venedig außerdem eine alte Tradition wiederbelebt: eine schwimmende Brücke von den Fondamente Nove, über die man – wenn sie aufgebaut wird – zu Fuß durch die Lagune bis zum Friedhof gelangt.',
    sections:[
      ['Warum Venedig einen Friedhof auf einer Insel hat','Der moderne Friedhof entstand im Zusammenhang mit napoleonischen Bestimmungen, nach denen Begräbnisstätten aus dicht besiedelten Zentren verlegt wurden. 1807 fiel die Wahl auf San Cristoforo della Pace; 1836 wurde der Kanal zwischen dieser Insel und San Michele zugeschüttet, wodurch beide Inseln zu einem größeren Friedhofsgelände verbunden wurden. Heute bezeichnet die Stadt San Michele als ein Freilichtmuseum.'],
      ['Die Votivbrücke von den Fondamente Nove','Die Brücke von San Michele ist eine temporäre Fußgängerverbindung zwischen den Fondamente Nove und dem monumentalen Eingang des Friedhofs. Die 2025 erneut aufgebaute Version war mehr als 400 Meter lang und bestand aus schwimmenden Modulen. Sie ist weder dauerhaft noch automatisch jedes Jahr vorhanden: Die traditionelle Bootsbrücke bestand bis 1950, wurde 2019 wiederbelebt und 2025 erneut aufgebaut.'],
      ['San Michele 2026: Was ist bestätigt?','Mit Stand vom 13. September 2026 hat die Stadt Venedig noch nicht offiziell bestätigt, dass die Brücke zum Totengedenken 2026 wieder aufgebaut wird. Deshalb nennen wir keine unbestätigten Termine oder Uhrzeiten. Zum Vergleich: 2025 war der Übergang vom 30. Oktober bis 9. November geöffnet; bis 2. November galten Zugangsbeschränkungen, ab 3. November war der Übergang für alle möglich. Sobald es offizielle Angaben für 2026 gibt, wird diese Seite aktualisiert.'],
      ['San Michele als Freilichtmuseum','Zwischen Zypressen, Kreuzgängen und Grabdenkmälern befinden sich Gräber bedeutender Persönlichkeiten der internationalen Kulturgeschichte. Die Stadt nennt unter anderem den Dichter Ezra Pound, die Violinistin Olga Rudge, den Komponisten Igor Stravinsky und den Dichter Joseph Brodsky. Dennoch bleibt San Michele in erster Linie ein aktiver Friedhof.'],
      ['Ein Besuch mit Respekt','San Michele ist keine makabre Kuriosität und keine gewöhnliche Sehenswürdigkeit. Familien und Venezianer besuchen hier ihre Verstorbenen. Sprechen Sie leise, respektieren Sie Zeremonien und Grabstätten und beachten Sie Hinweise und Anweisungen des Personals. Die Stadt stellt Karten zu historischen und künstlerisch bedeutenden Grabmälern bereit; organisierte Gruppenbesuche müssen vorab genehmigt werden.'],
      ['Von Marghera nach San Michele','Von unseren Apartments können Sie das Auto auf dem privaten Parkplatz lassen und Venedig mit Bus oder Zug erreichen. Normalerweise fährt man mit dem Vaporetto nach San Michele; wenn die Votivbrücke offiziell aufgebaut ist, kann man stattdessen von den Fondamente Nove zu Fuß hinübergehen. Prüfen Sie vorher immer die aktuellen Mitteilungen der Stadt.']
    ],
    tip:'Falls die Brücke bestätigt wird, ist die Überquerung zu Fuß eine außergewöhnliche Gelegenheit, den Zusammenhang zwischen venezianischer Erinnerungskultur und Lagune zu erleben. Nehmen Sie sich Zeit und betreten Sie San Michele mit dem gleichen Respekt wie einen Friedhof in Ihrer Heimat.',
    official:['Stadt Venedig — Friedhof San Michele',official],relatedSlugs:[],
    relatedLinks:[['Madonna della Salute und ihre Votivbrücke','/de/journal/festa-madonna-salute-venezia'],['Venedig respektvoll erleben','/de/journal/buone-maniere-a-venezia']],datePublished:'2026-09-13',dateModified:'2026-09-13'
  },
  fr:{
    slug,title:'Cimetière San Michele à Venise : pont votif, histoire et tombes célèbres',
    metaTitle:'Cimetière San Michele Venise : pont votif et tombes célèbres',
    category:'Venise insolite & traditions',
    description:'Découvrez le cimetière San Michele à Venise, le pont votif depuis Fondamente Nove, la commémoration des défunts, l’histoire de l’île et les tombes célèbres.',
    image:card,fallbackImage:cover,imageAlt:'Pont votif temporaire entre Fondamente Nove et le cimetière San Michele à Venise',commonsQuery:'',eventDate:'PONT VOTIF · SI CONFIRMÉ',
    lead:'Entre Venise et Murano se trouve une île que beaucoup de visiteurs n’aperçoivent que depuis le vaporetto : San Michele, le cimetière monumental de la ville. À l’occasion de la commémoration des défunts, Venise a aussi fait revivre une ancienne tradition : un pont flottant depuis les Fondamente Nove qui, lorsqu’il est installé, permet de rejoindre le cimetière à pied à travers la lagune.',
    sections:[
      ['Pourquoi Venise possède un cimetière sur une île','Le cimetière moderne est lié aux dispositions napoléoniennes qui éloignèrent les lieux de sépulture des centres habités. En 1807, l’île de San Cristoforo della Pace fut choisie ; en 1836, le canal qui la séparait de San Michele fut comblé, réunissant les deux îles et agrandissant le cimetière. Aujourd’hui, la Ville présente San Michele comme un véritable musée à ciel ouvert.'],
      ['Le pont votif depuis les Fondamente Nove','Le pont de San Michele est une liaison piétonne temporaire entre les Fondamente Nove et l’entrée monumentale du cimetière. Dans sa version réinstallée en 2025, il dépassait 400 mètres et reposait sur des modules flottants. Il n’est ni permanent ni automatiquement monté chaque année : l’ancien pont de bateaux exista jusqu’en 1950, fut rétabli en 2019 puis à nouveau en 2025.'],
      ['Pont de San Michele 2026 : ce qui est confirmé','Au 13 septembre 2026, la Ville de Venise n’a pas encore publié de confirmation officielle du retour du pont pour la commémoration des défunts 2026. Nous ne donnons donc aucune date ni aucun horaire non vérifié. À titre de repère, en 2025 le passage fut ouvert du 30 octobre au 9 novembre, avec un accès initialement réservé puis ouvert à tous à partir du 3 novembre. Cette page sera mise à jour dès la publication d’informations officielles pour 2026.'],
      ['San Michele, un musée à ciel ouvert','Cyprès, cloîtres et monuments funéraires composent un patrimoine lié à l’histoire culturelle internationale. La Ville cite notamment le poète Ezra Pound, la violoniste Olga Rudge, le compositeur Igor Stravinsky et le poète Joseph Brodsky. La visite peut être un parcours d’art et d’histoire, mais San Michele reste avant tout un cimetière en activité.'],
      ['Visiter avec respect','San Michele ne doit pas être abordé comme une curiosité macabre ou une attraction touristique ordinaire. Des familles viennent ici se recueillir. Parlez doucement, respectez cérémonies et sépultures et suivez la signalétique et les indications du personnel. La Ville propose des cartes des tombes et monuments d’intérêt historique ou artistique ; les visites organisées doivent être autorisées au préalable.'],
      ['Depuis Marghera','Depuis nos appartements, laissez la voiture sur le parking privé et rejoignez Venise en bus ou en train. En temps normal, San Michele se rejoint en vaporetto ; lorsque le pont votif est officiellement installé, il devient possible d’y aller à pied depuis les Fondamente Nove. Vérifiez toujours les communications municipales avant de partir.']
    ],
    tip:'Si le pont est confirmé, le traverser à pied offre une perspective rare sur la relation entre la mémoire vénitienne et la lagune. Prenez votre temps et entrez à San Michele avec le même respect que dans le cimetière de votre propre ville.',
    official:['Ville de Venise — Cimetière San Michele',official],relatedSlugs:[],
    relatedLinks:[['Madonna della Salute et son pont votif','/fr/journal/festa-madonna-salute-venezia'],['Profiter de Venise avec respect','/fr/journal/buone-maniere-a-venezia']],datePublished:'2026-09-13',dateModified:'2026-09-13'
  },
  es:{
    slug,title:'Cementerio de San Michele en Venecia: puente votivo, historia y tumbas célebres',
    metaTitle:'Cementerio San Michele Venecia: puente votivo y tumbas célebres',
    category:'Venecia insólita y tradiciones',
    description:'Descubre el cementerio de San Michele en Venecia, el puente votivo desde Fondamente Nove, la conmemoración de los difuntos, la historia de la isla y sus tumbas célebres.',
    image:card,fallbackImage:cover,imageAlt:'Puente votivo temporal entre Fondamente Nove y el cementerio de San Michele en Venecia',commonsQuery:'',eventDate:'PUENTE VOTIVO · SI SE CONFIRMA',
    lead:'Entre Venecia y Murano hay una isla que muchos visitantes solo ven desde el vaporetto: San Michele, el cementerio monumental de la ciudad. Coincidiendo con la conmemoración de los difuntos, Venecia también ha recuperado una antigua tradición: un puente flotante desde Fondamente Nove que, cuando se instala, permite llegar caminando al cementerio a través de la laguna.',
    sections:[
      ['Por qué Venecia tiene un cementerio en una isla','El cementerio moderno nació a raíz de las disposiciones napoleónicas que trasladaron los enterramientos fuera de los núcleos habitados. En 1807 se eligió San Cristoforo della Pace; en 1836 se rellenó el canal que la separaba de San Michele, uniendo ambas islas y ampliando el camposanto. Hoy el Ayuntamiento describe San Michele como un auténtico museo al aire libre.'],
      ['El puente votivo desde Fondamente Nove','El puente de San Michele es una conexión peatonal temporal entre Fondamente Nove y la entrada monumental del cementerio. La versión instalada de nuevo en 2025 superaba los 400 metros y estaba formada por módulos flotantes. No es permanente ni se monta automáticamente todos los años: el antiguo puente de barcas se mantuvo hasta 1950, volvió en 2019 y fue instalado otra vez en 2025.'],
      ['Puente de San Michele 2026: qué está confirmado','A 13 de septiembre de 2026, el Ayuntamiento de Venecia todavía no ha publicado una confirmación oficial del puente para la conmemoración de los difuntos de 2026. Por eso no indicamos fechas ni horarios sin verificar. Como referencia, en 2025 estuvo abierto del 30 de octubre al 9 de noviembre, con acceso restringido los primeros días y abierto a todos desde el 3 de noviembre. Actualizaremos esta página en cuanto haya información oficial para 2026.'],
      ['San Michele, un museo al aire libre','Entre cipreses, claustros y monumentos funerarios descansan figuras de la cultura internacional. El Ayuntamiento destaca, entre otras, las tumbas del poeta Ezra Pound, la violinista Olga Rudge, el compositor Igor Stravinsky y el poeta Joseph Brodsky. Puede ser una visita de arte e historia, pero San Michele sigue siendo ante todo un cementerio en uso.'],
      ['Cómo visitarlo con respeto','San Michele no debe tratarse como una curiosidad macabra ni como una atracción turística convencional. Familias y vecinos vienen a recordar a sus difuntos. Habla en voz baja, respeta ceremonias y sepulturas y sigue la señalización y las indicaciones del personal. El Ayuntamiento ofrece mapas de las tumbas y monumentos de interés histórico y artístico; las visitas organizadas necesitan autorización previa.'],
      ['Cómo llegar desde Marghera','Desde nuestros apartamentos puedes dejar el coche en el aparcamiento privado y llegar a Venecia en autobús o tren. Normalmente San Michele se alcanza en vaporetto; cuando el puente votivo está oficialmente instalado, se puede llegar a pie desde Fondamente Nove. Consulta siempre los avisos municipales antes de salir.']
    ],
    tip:'Si el puente llega a confirmarse, cruzarlo a pie es una forma excepcional de entender la relación entre la memoria veneciana y la laguna. Hazlo sin prisas y entra en San Michele con el mismo respeto con el que visitarías el cementerio de tu propia ciudad.',
    official:['Ayuntamiento de Venecia — Cementerio San Michele',official],relatedSlugs:[],
    relatedLinks:[['Madonna della Salute y su puente votivo','/es/journal/festa-madonna-salute-venezia'],['Cómo disfrutar Venecia con respeto','/es/journal/buone-maniere-a-venezia']],datePublished:'2026-09-13',dateModified:'2026-09-13'
  },
  zh:{
    slug,title:'威尼斯圣米凯莱公墓：还愿浮桥、岛屿历史与名人墓地',
    metaTitle:'威尼斯圣米凯莱公墓：还愿浮桥、历史与名人墓地',
    category:'小众威尼斯与传统',
    description:'了解威尼斯圣米凯莱岛公墓、从 Fondamente Nove 通往墓园的临时还愿浮桥、亡者纪念传统、岛屿历史与名人墓地。',
    image:card,fallbackImage:cover,imageAlt:'从威尼斯 Fondamente Nove 通往圣米凯莱岛公墓的临时还愿浮桥',commonsQuery:'',eventDate:'还愿浮桥 · 以官方确认为准',
    lead:'威尼斯与穆拉诺之间有一座许多游客只在水上巴士上远远看见的岛——圣米凯莱岛，这里是威尼斯的纪念性公墓。每逢亡者纪念时期，威尼斯还曾恢复一项古老传统：从 Fondamente Nove 搭建临时浮桥；在浮桥开放的年份，人们可以步行穿过泻湖直接抵达墓园。',
    sections:[
      ['为什么威尼斯的公墓在岛上','现代圣米凯莱公墓的形成与拿破仑时期将墓葬迁出人口密集城区的规定有关。1807年，San Cristoforo della Pace 岛被选为墓地；1836年，两岛之间的水道被填平，San Cristoforo 与 San Michele 合为一体并扩大墓园。今天，威尼斯市政府将这里称为一座“露天博物馆”。'],
      ['从 Fondamente Nove 出发的还愿浮桥','圣米凯莱浮桥是一条临时步行通道，从 Fondamente Nove 连接到公墓的纪念性入口。2025年恢复搭建时，桥长超过400米，由浮动模块组成。它不是永久设施，也并非每年自动搭建：传统的船桥一直延续到1950年，2019年曾恢复，2025年又再次搭建。'],
      ['2026年会有圣米凯莱浮桥吗？','截至2026年9月13日，威尼斯市政府尚未正式确认2026年亡者纪念期间会再次搭建浮桥，因此我们不会发布未经证实的日期或开放时间。作为参考，2025年的浮桥从10月30日开放至11月9日，前几天有通行资格限制，11月3日起向所有人开放。如果2026年得到官方确认，我们会及时更新本页。'],
      ['一座露天博物馆','柏树、回廊与墓碑之间，安葬着多位国际文化人物。威尼斯市政府特别提到诗人 Ezra Pound、小提琴家 Olga Rudge、作曲家 Igor Stravinsky 以及诗人 Joseph Brodsky。这里可以是一段艺术与历史之旅，但首先仍是一座正在使用的公墓。'],
      ['如何尊重地参观','请不要把圣米凯莱当作猎奇景点。当地家庭会来这里悼念亲人。保持低声交谈，尊重仪式与墓地，遵守现场标识和工作人员指引。市政府提供历史和艺术价值墓葬的地图资料；学校、大学或其他有组织的团体参观需要提前获得许可。'],
      ['从 Marghera 如何前往','入住我们的公寓时，可以把汽车留在私人停车位，然后乘公交或火车进入威尼斯。通常前往圣米凯莱岛需要乘坐水上巴士；如果官方确认并搭建还愿浮桥，则可以从 Fondamente Nove 步行抵达。出发前请查看威尼斯市政府的最新公告。']
    ],
    tip:'如果浮桥得到官方确认，步行穿越它会是一种非常特别的体验：你会直观感受到威尼斯如何把纪念传统与泻湖空间联系在一起。请放慢脚步，并以参观自己城市公墓时同样的尊重进入圣米凯莱。',
    official:['威尼斯市政府 — 圣米凯莱公墓',official],relatedSlugs:[],
    relatedLinks:[['Madonna della Salute 圣母健康节与还愿桥','/zh/journal/festa-madonna-salute-venezia'],['如何尊重地游览威尼斯','/zh/journal/buone-maniere-a-venezia']],datePublished:'2026-09-13',dateModified:'2026-09-13'
  }
};
