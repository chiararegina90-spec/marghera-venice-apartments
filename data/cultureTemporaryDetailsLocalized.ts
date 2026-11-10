// Event-specific descriptions translated into each supported language.
// Titles use the exhibition's published name; descriptions preserve the curatorial topic.
import type {CultureLang} from '@/data/culturePlaces';
const details:Record<string,Partial<Record<CultureLang,string>>> =
{
  "SPIRAL ECONOMY. Charrière and Canova": {
    "en": "Julian Charrière's contemporary work enters into dialogue with Antonio Canova throughout Museo Correr.",
    "de": "Julian Charrières Gegenwartskunst tritt im Museo Correr in Dialog mit Antonio Canova.",
    "fr": "L'œuvre contemporaine de Julian Charrière dialogue avec Antonio Canova dans les salles du Museo Correr.",
    "es": "La obra contemporánea de Julian Charrière dialoga con Antonio Canova en las salas del Museo Correr.",
    "zh": "朱利安·夏里埃的当代艺术在科雷尔博物馆与安东尼奥·卡诺瓦的作品展开对话。"
  },
  "BIZHAN BASSIRI": {
    "en": "Bizhan Bassiri's contemporary research is presented alongside Museo Correr's historic rooms and collections.",
    "de": "Bizhan Bassiris zeitgenössische Arbeiten begegnen den historischen Sälen und Sammlungen des Museo Correr.",
    "fr": "Les recherches contemporaines de Bizhan Bassiri dialoguent avec les salles historiques et collections du Museo Correr.",
    "es": "Las obras contemporáneas de Bizhan Bassiri dialogan con las salas y colecciones históricas del Museo Correr.",
    "zh": "比詹·巴西里的当代创作与科雷尔博物馆的历史展厅和馆藏相互呼应。"
  },
  "Leiko Ikemura. TransLucent — La forma della luce": {
    "en": "Leiko Ikemura's glass sculptures create a dialogue with historical masterpieces at the Accademia Galleries.",
    "de": "Leiko Ikemuras Glasskulpturen treten in den Gallerie dell'Accademia in Dialog mit historischen Meisterwerken.",
    "fr": "Les sculptures en verre de Leiko Ikemura dialoguent avec les chefs-d'œuvre anciens des Gallerie dell'Accademia.",
    "es": "Las esculturas de vidrio de Leiko Ikemura dialogan con las obras maestras históricas de las Gallerie dell'Accademia.",
    "zh": "莱科·池村的玻璃雕塑与学院美术馆的历史名作展开对话。"
  },
  "Fucina degli Angeli. Peggy Guggenheim e il vetro artistico del Novecento": {
    "en": "The exhibition explores Fucina degli Angeli's creative history and Peggy Guggenheim's role in its international recognition.",
    "de": "Die Ausstellung zeigt die Geschichte der Fucina degli Angeli und Peggy Guggenheims Rolle für ihre internationale Bekanntheit.",
    "fr": "L'exposition retrace l'histoire de la Fucina degli Angeli et le rôle de Peggy Guggenheim dans son rayonnement international.",
    "es": "La exposición reconstruye la historia de Fucina degli Angeli y la contribución de Peggy Guggenheim a su proyección internacional.",
    "zh": "展览回顾“天使熔炉”的创作历程及佩姬·古根海姆推动其国际声誉的作用。"
  },
  "Jenny Saville a Ca’ Pesaro": {
    "en": "A major Jenny Saville exhibition traces the artist's work from her earliest pieces to more recent creations.",
    "de": "Eine große Ausstellung über Jenny Saville zeigt die Entwicklung ihres Werks von den Anfängen bis heute.",
    "fr": "Une grande exposition retrace le parcours de Jenny Saville, de ses débuts à ses œuvres récentes.",
    "es": "Una gran exposición recorre la trayectoria de Jenny Saville desde sus primeras obras hasta las más recientes.",
    "zh": "一场珍妮·萨维尔大型展览回顾她从早期到近期的艺术创作。"
  },
  "Corpus serialis": {
    "en": "A contemporary exhibition explores connections between objects, science, nature and culture.",
    "de": "Die zeitgenössische Ausstellung erforscht Beziehungen zwischen Objekten, Wissenschaft, Natur und Kultur.",
    "fr": "Cette exposition contemporaine explore les liens entre objets, science, nature et culture.",
    "es": "Una exposición contemporánea explora las relaciones entre objetos, ciencia, naturaleza y cultura.",
    "zh": "这场当代展览探索物件、科学、自然与文化之间的联系。"
  },
  "Gianmaria Potenza. Io, Venezia": {
    "en": "Ca' Pesaro honours Gianmaria Potenza with bronze, mosaics, painting and previously unseen works about Venice.",
    "de": "Ca' Pesaro würdigt Gianmaria Potenza mit Bronzen, Mosaiken, Gemälden und bisher unveröffentlichten Werken über Venedig.",
    "fr": "Ca' Pesaro rend hommage à Gianmaria Potenza : bronzes, mosaïques, peintures et œuvres inédites sur Venise.",
    "es": "Ca' Pesaro homenajea a Gianmaria Potenza con bronces, mosaicos, pinturas y obras inéditas vinculadas a Venecia.",
    "zh": "佩萨罗宫通过青铜、马赛克、绘画及未曾展出的作品展现詹马里亚·波滕扎与威尼斯的联系。"
  },
  "Livio Ceschin. Nel solco del tempo": {
    "en": "At Ca’ Pesaro until 9 February 2027, 15 etchings and drypoints in Room 1 on the first floor explore Livio Ceschin's 35 years of printmaking; admission follows the museum's normal ticket.",
    "de": "In Saal 1 im ersten Stock von Ca’ Pesaro sind bis 9. Februar 2027 fünfzehn Radierungen und Kaltnadelarbeiten von Livio Ceschin zu sehen, die 35 Jahre Druckgrafik zeigen. Eintritt mit dem Museumsticket.",
    "fr": "Jusqu'au 9 février 2027 à Ca’ Pesaro (salle 1, premier étage), quinze eaux-fortes et pointes sèches retracent trente-cinq ans de gravure de Livio Ceschin ; billet ordinaire du musée.",
    "es": "En la sala 1 del primer piso de Ca’ Pesaro, hasta el 9 de febrero de 2027, quince aguafuertes y puntas secas resumen 35 años de trabajo gráfico de Livio Ceschin. Se visita con la entrada del museo.",
    "zh": "佩萨罗宫一层第1展厅展出利维奥·切斯钦15件蚀刻画与干刻版画，回顾35年的版画实践，持续至2027年2月9日；使用博物馆普通门票参观。"
  },
  "Erwin Wurm. Dreamers": {
    "en": "Museo Fortuny hosts Italy's first major retrospective dedicated to Austrian sculptor Erwin Wurm.",
    "de": "Im Museo Fortuny ist die erste große italienische Retrospektive des österreichischen Bildhauers Erwin Wurm zu sehen.",
    "fr": "Le Museo Fortuny accueille la première grande rétrospective italienne du sculpteur autrichien Erwin Wurm.",
    "es": "El Museo Fortuny acoge la primera gran retrospectiva italiana del escultor austríaco Erwin Wurm.",
    "zh": "福图尼博物馆举办奥地利雕塑家埃尔温·沃姆在意大利的首次大型回顾展。"
  },
  "LE TARBOUCHE. Quando un accessorio diventa simbolo": {
    "en": "The tarbouche is examined as an accessory reflecting identity, fashion and changing cultures.",
    "de": "Der Tarbusch wird als Accessoire betrachtet, das Identität, Mode und kulturellen Wandel widerspiegelt.",
    "fr": "Le tarbouche est présenté comme un accessoire révélateur d'identité, de mode et de mutations culturelles.",
    "es": "El tarbush se presenta como accesorio que habla de identidad, moda y transformaciones culturales.",
    "zh": "展览通过传统毡帽 tarbouche 探讨身份、时尚与文化变迁。"
  },
  "Le sete di Lucio Andrich": {
    "en": "A selection of Lucio Andrich's silk textiles and artworks temporarily enriches the displays at Palazzo Mocenigo.",
    "de": "Seidentextilien und Arbeiten von Lucio Andrich ergänzen vorübergehend die Ausstellung im Palazzo Mocenigo.",
    "fr": "Une sélection de soieries et d'œuvres de Lucio Andrich enrichit temporairement le parcours du Palazzo Mocenigo.",
    "es": "Una selección de sedas y obras de Lucio Andrich completa temporalmente la visita al Palazzo Mocenigo.",
    "zh": "卢乔·安德里奇的丝绸织物与作品暂时加入莫切尼戈宫的展览内容。"
  },
  "Un merletto per Venezia 2026": {
    "en": "The project brings Venetian lace traditions into dialogue with contemporary works and techniques.",
    "de": "Das Projekt verbindet die venezianische Spitzentradition mit zeitgenössischen Werken und Techniken.",
    "fr": "Le projet fait dialoguer la dentelle vénitienne traditionnelle et les créations contemporaines.",
    "es": "El proyecto relaciona el encaje tradicional veneciano con obras y técnicas contemporáneas.",
    "zh": "项目通过当代作品与工艺重新呈现威尼斯蕾丝传统。"
  },
  "Klimt, Schiele, Kokoschka e il corpo nell’arte contemporanea": {
    "en": "An exhibition on the human body in art, from Viennese Secession to contemporary approaches, beginning with Klimt, Schiele and Kokoschka.",
    "de": "Die Ausstellung untersucht den Körper in der Kunst von der Wiener Secession bis heute, ausgehend von Klimt, Schiele und Kokoschka.",
    "fr": "Un parcours autour du corps dans l'art, de la Sécession viennoise à aujourd'hui, à partir de Klimt, Schiele et Kokoschka.",
    "es": "Un recorrido por el cuerpo en el arte desde la Secesión vienesa hasta hoy, con Klimt, Schiele y Kokoschka como referentes.",
    "zh": "展览以克里姆特、席勒和柯克西卡为起点，探索维也纳分离派至当代艺术中的人体表达。"
  },
  "Pellestrina isola sottile": {
    "en": "Anton Giulio Onofri's photographs portray Pellestrina as a narrow landscape of lagoon, light and silence.",
    "de": "Anton Giulio Onofris Fotografien zeigen Pellestrina als schmalen Landstreifen zwischen Lagune, Licht und Stille.",
    "fr": "Les photographies d'Anton Giulio Onofri montrent Pellestrina, île étroite entre lagune, lumière et silence.",
    "es": "Las fotografías de Anton Giulio Onofri muestran Pellestrina entre laguna, luz y silencio.",
    "zh": "安东·朱利奥·奥诺弗里的摄影捕捉佩莱斯特里纳在潟湖、光线与宁静之间的狭长岛屿景观。"
  },
  "Luca Rento. Prima che tutto svanisca": {
    "en": "At Fondazione Querini Stampalia until 17 January 2027, Alfredo Cramerotti curates Luca Rento's solo exhibition of video works exploring time, change and disappearance across 25 years.",
    "de": "Bis 17. Januar 2027 zeigt die Fondazione Querini Stampalia eine von Alfredo Cramerotti kuratierte Einzelausstellung mit Videoarbeiten von Luca Rento über Zeit, Wandel und Verschwinden aus 25 Jahren.",
    "fr": "Jusqu'au 17 janvier 2027, la Fondazione Querini Stampalia présente l'exposition personnelle de Luca Rento, conçue par Alfredo Cramerotti : vingt-cinq années de vidéo sur le temps et la disparition.",
    "es": "Hasta el 17 de enero de 2027, la Fondazione Querini Stampalia presenta la exposición de vídeo de Luca Rento, comisariada por Alfredo Cramerotti, sobre tiempo, cambio y desaparición durante 25 años.",
    "zh": "奎里尼·斯坦帕利亚基金会展出由 Alfredo Cramerotti 策展的卢卡·伦托个展，涵盖25年以时间、变化与消逝为主题的视频作品，至2027年1月17日。"
  },
  "Cosmotechnics: Ding Yi as a Planetary Code": {
    "en": "Ding Yi's abstract artworks transform the Scarpa area with imagery, signs and stone stelae.",
    "de": "Ding Yis abstrakte Kunst verwandelt den Scarpa-Bereich mit Bildern, Zeichen und steinernen Stelen.",
    "fr": "L'œuvre abstraite de Ding Yi transforme l'espace Scarpa en parcours d'images, de signes et de stèles de pierre.",
    "es": "El arte abstracto de Ding Yi transforma el espacio Scarpa en un recorrido de imágenes, signos y estelas de piedra.",
    "zh": "丁乙的抽象艺术以图像、符号和石碑重新诠释斯卡帕展区。"
  },
  "Nigel Cooke: Bad Habits": {
    "en": "Nigel Cooke brings contemporary painting into dialogue with the historic spaces of Querini Stampalia.",
    "de": "Nigel Cookes zeitgenössische Malerei tritt mit den historischen Räumen der Querini Stampalia in Dialog.",
    "fr": "La peinture contemporaine de Nigel Cooke dialogue avec les espaces historiques de la Querini Stampalia.",
    "es": "La pintura contemporánea de Nigel Cooke dialoga con los espacios históricos de la Querini Stampalia.",
    "zh": "奈杰尔·库克的当代绘画与奎里尼·斯坦帕利亚基金会的历史空间对话。"
  },
  "Michael Armitage. The Promise of Change": {
    "en": "At Palazzo Grassi until 10 January 2027, Michael Armitage's paintings connect memory, social tensions and migration. Curated by Jean-Marie Gallais with Hans-Ulrich Obrist and collaborators.",
    "de": "Im Palazzo Grassi sind bis 10. Januar 2027 Gemälde von Michael Armitage über Erinnerung, soziale Konflikte und Migration zu sehen. Kuratiert von Jean-Marie Gallais mit Hans-Ulrich Obrist und weiteren Mitwirkenden.",
    "fr": "Au Palazzo Grassi jusqu'au 10 janvier 2027, les peintures de Michael Armitage interrogent mémoire, tensions sociales et migrations. Commissariat de Jean-Marie Gallais avec Hans-Ulrich Obrist et collaborateurs.",
    "es": "Hasta el 10 de enero de 2027 en Palazzo Grassi, la pintura de Michael Armitage aborda memoria, tensiones sociales y migración. Comisariada por Jean-Marie Gallais con Hans-Ulrich Obrist y colaboradores.",
    "zh": "《The Promise of Change》在 Palazzo Grassi 展至2027年1月10日，迈克尔·阿米蒂奇以绘画探索记忆、社会冲突与迁徙；策展由 Jean-Marie Gallais 与 Hans-Ulrich Obrist 等人参与。"
  },
  "Amar Kanwar. Co-travellers": {
    "en": "At Palazzo Grassi until 10 January 2027, two multimedia installations by Amar Kanwar on the upper floor link cinema, documentary testimony and reflections on resistance; curated by Jean-Marie Gallais.",
    "de": "Bis 10. Januar 2027 zeigt der Palazzo Grassi im Obergeschoss zwei multimediale Installationen von Amar Kanwar, die Film, Zeugnisse und Widerstand verknüpfen; Kurator Jean-Marie Gallais.",
    "fr": "Au Palazzo Grassi jusqu'au 10 janvier 2027, deux installations multimédias d'Amar Kanwar à l'étage mêlent cinéma, témoignage et résistance ; commissariat de Jean-Marie Gallais.",
    "es": "Hasta el 10 de enero de 2027, Palazzo Grassi presenta en la planta superior dos instalaciones multimedia de Amar Kanwar sobre cine, testimonio y resistencia, con comisariado de Jean-Marie Gallais.",
    "zh": "Amar Kanwar 的两件多媒体装置在 Palazzo Grassi 上层展至2027年1月10日，结合电影、纪实见证与抵抗主题，策展人为 Jean-Marie Gallais。"
  },
  "Lorna Simpson. Third Person": {
    "en": "A major exhibition of Lorna Simpson explores more than a decade of painting and photography.",
    "de": "Eine große Ausstellung über Lorna Simpson zeigt mehr als ein Jahrzehnt Malerei und Fotografie.",
    "fr": "Une grande exposition de Lorna Simpson présente plus de dix ans de peinture et de photographie.",
    "es": "Una gran exposición de Lorna Simpson presenta más de una década de pintura y fotografía.",
    "zh": "洛娜·辛普森大型展览呈现其十余年来的绘画与摄影探索。"
  },
  "Paulo Nazareth. Algebra": {
    "en": "Paulo Nazareth uses travel, performance and colonial geographies to question modernity's landscapes.",
    "de": "Paulo Nazareth nutzt Reisen, Performance und koloniale Geografien, um moderne Landschaften zu hinterfragen.",
    "fr": "Paulo Nazareth interroge la modernité à travers voyage, performance et géographies coloniales.",
    "es": "Paulo Nazareth cuestiona la modernidad a través del viaje, la performance y las geografías coloniales.",
    "zh": "保罗·纳扎雷斯通过旅行、行为艺术与殖民地理重新审视现代性。"
  },
  "1948–1958. Il vetro di Murano e la Biennale di Venezia": {
    "en": "Le Stanze del Vetro examines Murano glassmaking and its relationship with the Venice Biennale from 1948 to 1958.",
    "de": "Le Stanze del Vetro zeigt die Verbindung zwischen Murano-Glas und der Biennale von Venedig in den Jahren 1948–1958.",
    "fr": "Le Stanze del Vetro explore les liens entre le verre de Murano et la Biennale de Venise de 1948 à 1958.",
    "es": "Le Stanze del Vetro explora los vínculos entre el vidrio de Murano y la Bienal de Venecia entre 1948 y 1958.",
    "zh": "“玻璃展厅”聚焦1948至1958年穆拉诺玻璃工艺与威尼斯双年展之间的关系。"
  },
  "Helter Skelter: Arthur Jafa and Richard Prince": {
    "en": "Arthur Jafa and Richard Prince meet in an exhibition on images, appropriation and contemporary visual media.",
    "de": "Arthur Jafa und Richard Prince begegnen sich in einer Ausstellung über Bilder, Aneignung und zeitgenössische Medien.",
    "fr": "Arthur Jafa et Richard Prince sont réunis autour des images, de l'appropriation et des médias visuels contemporains.",
    "es": "Arthur Jafa y Richard Prince se relacionan en una muestra sobre imágenes, apropiación y medios visuales actuales.",
    "zh": "展览将亚瑟·贾法与理查德·普林斯的作品并置，讨论图像、挪用与当代视觉媒介。"
  },
  "Giocare all’italiana": {
    "en": "Italian 20th-century toys provide a lens on the country's history, customs and society.",
    "de": "Spielzeug des 20. Jahrhunderts erzählt italienische Geschichte, Alltagskultur und Gesellschaft.",
    "fr": "Les jouets du XXe siècle racontent l'histoire, les coutumes et la société italiennes.",
    "es": "Los juguetes del siglo XX permiten recorrer la historia, las costumbres y la sociedad italianas.",
    "zh": "通过20世纪意大利玩具了解国家历史、风俗与社会。"
  },
  "PLAYERS. Giochi, Videogiochi, Cultura e Società": {
    "en": "PLAYERS at M9 in Mestre (14 October 2026–14 February 2027) explores video games through PLAY, WATCH and CREATE, with playable arcade and console stations. Separate family activities require date-specific booking.",
    "de": "PLAYERS im M9 in Mestre (14. Oktober 2026 bis 14. Februar 2027) zeigt Spielgeschichte in den Bereichen PLAY, WATCH und CREATE mit spielbaren Arcade- und Konsolenstationen. Familienworkshops erfordern eigene Termine und Buchungen.",
    "fr": "PLAYERS au M9 de Mestre (14 octobre 2026–14 février 2027) explore le jeu vidéo dans les espaces PLAY, WATCH et CREATE avec bornes et consoles jouables. Les activités familiales ont leurs propres dates et réservations.",
    "es": "PLAYERS en el M9 de Mestre (14 de octubre de 2026–14 de febrero de 2027) recorre PLAY, WATCH y CREATE con arcades y consolas jugables. Las actividades familiares tienen fechas y reservas específicas.",
    "zh": "梅斯特雷 M9 的 PLAYERS 展览（2026年10月14日至2027年2月14日）设有 PLAY、WATCH、CREATE 三个主题区，包含可操作的街机与主机。亲子活动另有日期及预约规定。"
  },
  "Noir time. Pietro Finelli": {
    "en": "Pietro Finelli's paintings at Sala Orizzonti draw on the visual world of film noir.",
    "de": "Pietro Finellis Gemälde in der Sala Orizzonti greifen Bildwelten des Film noir auf.",
    "fr": "Les peintures de Pietro Finelli dans la Sala Orizzonti s'inspirent du cinéma noir.",
    "es": "La pintura de Pietro Finelli en Sala Orizzonti se inspira en el imaginario del cine negro.",
    "zh": "彼得罗·菲内利在 Sala Orizzonti 展示受黑色电影美学影响的绘画。"
  },
  "Matite in Viaggio. Carnets Disegni Parole": {
    "en": "The 16th edition brings together travel sketchbooks, drawings, writing, walks and music.",
    "de": "Die 16. Ausgabe vereint Reiseskizzenbücher, Zeichnungen, Texte, Wanderungen und Musik.",
    "fr": "La 16e édition réunit carnets de voyage, dessins, textes, itinéraires et musique.",
    "es": "La 16.ª edición reúne cuadernos de viaje, dibujos, textos, recorridos y música.",
    "zh": "第16届展览汇聚旅行手账、素描、文字、徒步与音乐。"
  },
  "Biennale Arte 2026 – In Minor Keys": {
    "en": "The 61st International Art Exhibition is presented at the Giardini, Arsenale and other Venice venues until 22 November.",
    "de": "Die 61. Internationale Kunstausstellung ist bis 22. November in den Giardini, im Arsenale und an weiteren Orten in Venedig zu sehen.",
    "fr": "La 61e Exposition internationale d'art se tient aux Giardini, à l'Arsenale et dans d'autres lieux vénitiens jusqu'au 22 novembre.",
    "es": "La 61.ª Exposición Internacional de Arte se celebra en los Giardini, el Arsenale y otras sedes hasta el 22 de noviembre.",
    "zh": "第61届国际艺术展在威尼斯双年展花园、军械库及其他场馆举行，持续至11月22日。"
  },
  "Trame temporali": {
    "en": "Works by Martín Soto Climént and Herta Ottolenghi Wedekind explore fabric, flexible matter, folds and memory.",
    "de": "Werke von Martín Soto Climént und Herta Ottolenghi Wedekind erforschen Stoff, flexible Materialien, Falten und Erinnerung.",
    "fr": "Les œuvres de Martín Soto Climént et Herta Ottolenghi Wedekind explorent tissu, matière souple, plis et mémoire.",
    "es": "Las obras de Martín Soto Climént y Herta Ottolenghi Wedekind exploran tejido, materia flexible, pliegues y memoria.",
    "zh": "马丁·索托·克利门特与赫尔塔·奥托伦吉·韦德金德的作品以织物、柔性材料、褶皱和记忆展开对话。"
  },
  "Giandomenico Tiepolo (1727–1804). Un mondo nuovo": {
    "en": "Painting, drawings and prints celebrate Giandomenico Tiepolo on the 300th anniversary of his birth.",
    "de": "Gemälde, Zeichnungen und Grafiken würdigen Giandomenico Tiepolo zum 300. Geburtstag.",
    "fr": "Peintures, dessins et gravures rendent hommage à Giandomenico Tiepolo pour le tricentenaire de sa naissance.",
    "es": "Pinturas, dibujos y grabados homenajean a Giandomenico Tiepolo con motivo del tricentenario de su nacimiento.",
    "zh": "展览以绘画、素描与版画纪念詹多梅尼科·提埃波罗诞辰300周年。"
  },
  "La materia dei sogni. Radici dell’arte africana contemporanea": {
    "en": "More than 120 works by 23 artists trace the roots and development of contemporary art from sub-Saharan Africa.",
    "de": "Über 120 Werke von 23 Künstlern beleuchten die Wurzeln und Entwicklung zeitgenössischer Kunst aus Afrika südlich der Sahara.",
    "fr": "Plus de 120 œuvres de 23 artistes retracent les racines et l'évolution de l'art contemporain d'Afrique subsaharienne.",
    "es": "Más de 120 obras de 23 artistas muestran las raíces y la evolución del arte contemporáneo del África subsahariana.",
    "zh": "23位艺术家的120余件作品展现撒哈拉以南非洲当代艺术的起源与发展。"
  },
  "Antonio Canova e il Monumento a Horatio Nelson": {
    "en": "The exhibition examines Antonio Canova's design for a monument honouring Admiral Horatio Nelson.",
    "de": "Die Ausstellung beleuchtet Antonio Canovas Entwurf für ein Denkmal zu Ehren von Admiral Horatio Nelson.",
    "fr": "L'exposition étudie le projet d'Antonio Canova pour un monument dédié à l'amiral Horatio Nelson.",
    "es": "La exposición analiza el proyecto de Antonio Canova para un monumento dedicado al almirante Horatio Nelson.",
    "zh": "展览深入研究安东尼奥·卡诺瓦为霍雷肖·纳尔逊海军上将设计的纪念碑方案。"
  },
  "Aperture straordinarie legate alla mostra Klimt a Villa Freya": {
    "en": "Museo Civico extends opening opportunities during the Klimt at Villa Freya exhibition of prints and nature imagery.",
    "de": "Das Museo Civico bietet zusätzliche Öffnungen zur Ausstellung Klimt in der Villa Freya über Grafik und Natur.",
    "fr": "Le Museo Civico propose des ouvertures supplémentaires liées à l'exposition Klimt à Villa Freya sur l'estampe et la nature.",
    "es": "El Museo Civico amplía sus aperturas con motivo de la muestra Klimt en Villa Freya sobre gráfica y naturaleza.",
    "zh": "市民博物馆为配合 Villa Freya 的克里姆特版画与自然主题展览增加开放时段。"
  },
  "Sebastiano Ricci a Belluno. Dal disegno alla pittura": {
    "en": "Palazzo Fulcis presents Sebastiano Ricci through drawings, paintings and loans exploring his artistic process.",
    "de": "Palazzo Fulcis zeigt Sebastiano Ricci mit Zeichnungen, Gemälden und Leihgaben über seinen Schaffensprozess.",
    "fr": "Palazzo Fulcis présente Sebastiano Ricci à travers dessins, peintures et prêts retraçant sa démarche artistique.",
    "es": "Palazzo Fulcis presenta a Sebastiano Ricci mediante dibujos, pinturas y préstamos sobre su proceso artístico.",
    "zh": "富尔奇斯宫通过素描、绘画及借展作品呈现塞巴斯蒂亚诺·里奇的创作过程。"
  },
  "Man Ray": {
    "en": "A major Palazzo Roverella exhibition explores Man Ray's photography and experimental artistic practice.",
    "de": "Eine große Ausstellung im Palazzo Roverella zeigt Man Rays Fotografie und experimentelles Schaffen.",
    "fr": "Une grande exposition au Palazzo Roverella explore la photographie et les expériences artistiques de Man Ray.",
    "es": "Una gran exposición en Palazzo Roverella recorre la fotografía y la experimentación artística de Man Ray.",
    "zh": "罗韦雷拉宫大型展览聚焦曼·雷的摄影与实验性艺术实践。"
  },
  "…E l’immagine prese vita…": {
    "en": "A pre-cinema exhibition presents objects and optical techniques that preceded the invention of film.",
    "de": "Die Ausstellung zur Vorgeschichte des Kinos zeigt Geräte und optische Techniken vor der Erfindung des Films.",
    "fr": "Une exposition sur le précinéma réunit objets et techniques optiques antérieurs à l'invention du cinéma.",
    "es": "Una muestra sobre el precine presenta objetos y técnicas ópticas anteriores a la invención del cine.",
    "zh": "前电影展览呈现电影诞生前的光学设备和成像技术。"
  },
  "PADVSA incontri – Tutte le vie dell’archeologia": {
    "en": "A programme of talks on archaeology, history and new research into the human past at Museo dei Grandi Fiumi.",
    "de": "Eine Vortragsreihe im Museo dei Grandi Fiumi behandelt Archäologie, Geschichte und neue Forschungen zur Menschheitsvergangenheit.",
    "fr": "Un cycle de rencontres au Museo dei Grandi Fiumi traite d'archéologie, d'histoire et de recherches sur le passé humain.",
    "es": "Un ciclo de conferencias en el Museo dei Grandi Fiumi trata arqueología, historia y nuevas investigaciones del pasado humano.",
    "zh": "大河博物馆系列讲座讨论考古学、历史与人类过去的新研究。"
  },
  "Nummos Cudere – Coniare una moneta in età romana": {
    "en": "A special event at Museo Nazionale Concordiese explores how coins were produced in Roman times.",
    "de": "Ein Sondertermin im Museo Nazionale Concordiese erklärt die Münzherstellung in römischer Zeit.",
    "fr": "Un événement spécial au Museo Nazionale Concordiese explique la fabrication de monnaies à l'époque romaine.",
    "es": "Un evento especial en el Museo Nazionale Concordiese explica cómo se acuñaban monedas en época romana.",
    "zh": "孔科尔迪耶国家博物馆特别活动介绍古罗马时期的铸币工艺。"
  }
};
export function localizedTemporaryEventDetail(title:string,lang:CultureLang):string|undefined{
 return details[title]?.[lang];
}
export const localizedTemporaryEventCount=Object.keys(details).length;
