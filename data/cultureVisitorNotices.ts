import type {CultureLang} from '@/data/culturePlaces';
import {romeToday} from '@/lib/romeDate';

export type CultureVisitorNoticeKind='closure'|'artwork-loan'|'restoration'|'visitor-info'|'programme';
export type CultureVisitorNoticeStatus='current'|'upcoming';

type Localized=Record<CultureLang,string>;

export type CultureVisitorNotice={
 key:string;
 placeSlug:string;
 kind:CultureVisitorNoticeKind;
 title:Localized;
 summary:Localized;
 officialUrl:string;
 internalHref?:string;
 start?:string;
 end?:string;
 status?:CultureVisitorNoticeStatus;
 period?:Localized;
 lastVerified:string;
};

export const cultureVisitorNotices:CultureVisitorNotice[]=[
 {
  key:'ca-pesaro-rooms-6-7',
  placeSlug:'ca-pesaro',
  kind:'closure',
  start:'2026-08-25',
  end:'2026-11-05',
  title:{
   it:'Sale 6 e 7 temporaneamente chiuse',
   en:'Rooms 6 and 7 temporarily closed',
   de:'Säle 6 und 7 vorübergehend geschlossen',
   fr:'Salles 6 et 7 temporairement fermées',
   es:'Salas 6 y 7 temporalmente cerradas',
   zh:'6号和7号展厅暂时关闭'
  },
  summary:{
   it:'Fino al 5 novembre 2026 le sale 6 e 7 sono chiuse per lavori di riallestimento e manutenzione. Il resto di Ca’ Pesaro rimane visitabile.',
   en:'Until 5 November 2026, rooms 6 and 7 are closed for refitting and maintenance. The rest of Ca’ Pesaro remains open to visitors.',
   de:'Bis 5. November 2026 sind die Säle 6 und 7 wegen Neueinrichtung und Wartung geschlossen. Der übrige Museumsrundgang von Ca’ Pesaro bleibt zugänglich.',
   fr:'Jusqu’au 5 novembre 2026, les salles 6 et 7 sont fermées pour réaménagement et maintenance. Le reste de Ca’ Pesaro reste accessible.',
   es:'Hasta el 5 de noviembre de 2026, las salas 6 y 7 están cerradas por trabajos de renovación y mantenimiento. El resto de Ca’ Pesaro permanece abierto.',
   zh:'截至2026年11月5日，6号和7号展厅因重新布展和维护暂时关闭；Ca’ Pesaro 其余参观区域仍正常开放。'
  },
  officialUrl:'https://capesaro.visitmuve.it/informazioni-pratiche/',
  lastVerified:'2026-10-25'
 },
 {
  key:'ca-pesaro-judith-ii-muvec',
  placeSlug:'ca-pesaro',
  kind:'artwork-loan',
  start:'2026-09-26',
  end:'2027-02-14',
  title:{
   it:'Cerchi Giuditta II di Gustav Klimt?',
   en:'Looking for Gustav Klimt’s Judith II?',
   de:'Suchen Sie Gustav Klimts Judith II?',
   fr:'Vous cherchez Judith II de Gustav Klimt ?',
   es:'¿Buscas Judith II de Gustav Klimt?',
   zh:'想看 Gustav Klimt 的 Judith II？'
  },
  summary:{
   it:'Il dipinto, normalmente conservato a Ca’ Pesaro, è temporaneamente esposto al MUVEC di Mestre nella mostra “Klimt, Schiele, Kokoschka e il corpo nell’arte contemporanea” fino al 14 febbraio 2027. MUVE segnala inoltre un’agevolazione sul biglietto MUVEC per i visitatori di Ca’ Pesaro, secondo le condizioni ufficiali.',
   en:'The painting, normally held at Ca’ Pesaro, is temporarily on display at MUVEC Mestre in “Klimt, Schiele, Kokoschka e il corpo nell’arte contemporanea” until 14 February 2027. MUVE also lists a MUVEC ticket concession for Ca’ Pesaro visitors, subject to the official conditions.',
   de:'Das Gemälde, das normalerweise in Ca’ Pesaro gezeigt wird, ist bis 14. Februar 2027 vorübergehend im MUVEC Mestre in der Ausstellung „Klimt, Schiele, Kokoschka e il corpo nell’arte contemporanea“ zu sehen. MUVE weist außerdem auf eine MUVEC-Ticketvergünstigung für Besucher von Ca’ Pesaro hin; maßgeblich sind die offiziellen Bedingungen.',
   fr:'Le tableau, habituellement conservé à Ca’ Pesaro, est temporairement exposé au MUVEC de Mestre dans « Klimt, Schiele, Kokoschka e il corpo nell’arte contemporanea » jusqu’au 14 février 2027. MUVE signale également un tarif avantageux au MUVEC pour les visiteurs de Ca’ Pesaro, selon les conditions officielles.',
   es:'La obra, normalmente conservada en Ca’ Pesaro, se expone temporalmente en MUVEC Mestre dentro de “Klimt, Schiele, Kokoschka e il corpo nell’arte contemporanea” hasta el 14 de febrero de 2027. MUVE indica además una ventaja en la entrada de MUVEC para visitantes de Ca’ Pesaro, según las condiciones oficiales.',
   zh:'这幅通常收藏于 Ca’ Pesaro 的作品，目前暂时在 Mestre 的 MUVEC 展出，属于“Klimt, Schiele, Kokoschka e il corpo nell’arte contemporanea”展览，展至2027年2月14日。MUVE 还说明 Ca’ Pesaro 访客可按官方条件享受 MUVEC 门票优惠。'
  },
  officialUrl:'https://capesaro.visitmuve.it/informazioni-pratiche/',
  internalHref:'/journal/klimt-schiele-kokoschka-muvec-mestre',
  lastVerified:'2026-10-25'
 },
 {
  key:'ca-pesaro-bonnard-nudo-specchio',
  placeSlug:'ca-pesaro',
  kind:'artwork-loan',
  start:'2026-06-27',
  end:'2026-10-31',
  title:{
   it:'Nudo allo specchio di Pierre Bonnard è in prestito',
   en:'Pierre Bonnard’s Nudo allo specchio is on loan',
   de:'Pierre Bonnards Nudo allo specchio ist ausgeliehen',
   fr:'Nudo allo specchio de Pierre Bonnard est en prêt',
   es:'Nudo allo specchio de Pierre Bonnard está en préstamo',
   zh:'Pierre Bonnard 的 Nudo allo specchio 正在外借'
  },
  summary:{
   it:'Il dipinto Nudo allo specchio (1931) di Pierre Bonnard è temporaneamente in prestito al Musée Bonnard di Le Cannet, in Francia, per la mostra BONNARD INTIME – LES TOILETTES DE MARTHE, in programma fino al 31 ottobre 2026. La fine della mostra ospitante non implica automaticamente il ritorno immediato dell’opera in esposizione a Venezia.',
   en:'Pierre Bonnard’s Nudo allo specchio (1931) is temporarily on loan to the Musée Bonnard in Le Cannet, France, for BONNARD INTIME – LES TOILETTES DE MARTHE, running until 31 October 2026. The end of the host exhibition does not automatically mean the painting will immediately return to display in Venice.',
   de:'Pierre Bonnards Nudo allo specchio (1931) ist vorübergehend an das Musée Bonnard in Le Cannet, Frankreich, für die Ausstellung BONNARD INTIME – LES TOILETTES DE MARTHE ausgeliehen, die bis 31. Oktober 2026 läuft. Das Ende der Gastausstellung bedeutet nicht automatisch, dass das Gemälde sofort wieder in Venedig ausgestellt wird.',
   fr:'Nudo allo specchio (1931) de Pierre Bonnard est temporairement prêté au Musée Bonnard du Cannet, en France, pour l’exposition BONNARD INTIME – LES TOILETTES DE MARTHE, jusqu’au 31 octobre 2026. La fin de l’exposition d’accueil ne signifie pas automatiquement que l’œuvre sera immédiatement de nouveau visible à Venise.',
   es:'Nudo allo specchio (1931), de Pierre Bonnard, está temporalmente prestado al Musée Bonnard de Le Cannet, Francia, para la exposición BONNARD INTIME – LES TOILETTES DE MARTHE, hasta el 31 de octubre de 2026. El final de la exposición anfitriona no implica automáticamente que la obra vuelva a exponerse de inmediato en Venecia.',
   zh:'Pierre Bonnard 的 Nudo allo specchio（1931）目前外借至法国 Le Cannet 的 Musée Bonnard，参加 BONNARD INTIME – LES TOILETTES DE MARTHE 展览，展期至2026年10月31日。客展结束并不表示作品会在次日自动重新回到威尼斯展出。'
  },
  officialUrl:'https://capesaro.visitmuve.it/informazioni-pratiche/',
  lastVerified:'2026-10-26'
 },
 {
  key:'ca-rezzonico-ballroom-restoration',
  placeSlug:'ca-rezzonico',
  kind:'restoration',
  status:'current',
  title:{
   it:'Restauro del Salone da Ballo',
   en:'Ballroom restoration',
   de:'Restaurierung des Ballsaals',
   fr:'Restauration du Salon de Bal',
   es:'Restauración del Salón de Baile',
   zh:'舞厅修复工程'
  },
  summary:{
   it:'Il Salone da Ballo è interessato da lavori di restauro. Il percorso rimane accessibile attraverso un passaggio protetto, ma gli affreschi del soffitto e delle pareti non sono temporaneamente visibili. Le altre sale del museo restano aperte.',
   en:'The Ballroom is undergoing restoration. Visitors can still pass through on a protected route, but the ceiling and wall frescoes are temporarily not visible. The museum’s other rooms remain open.',
   de:'Im Ballsaal finden Restaurierungsarbeiten statt. Der Durchgang bleibt über einen geschützten Weg möglich, die Fresken an Decke und Wänden sind vorübergehend jedoch nicht sichtbar. Die übrigen Museumsräume bleiben geöffnet.',
   fr:'Le Salon de Bal fait l’objet de travaux de restauration. Le passage des visiteurs reste possible par un parcours protégé, mais les fresques du plafond et des murs ne sont temporairement pas visibles. Les autres salles restent ouvertes.',
   es:'El Salón de Baile está siendo restaurado. El paso de visitantes sigue siendo posible por un recorrido protegido, pero los frescos del techo y las paredes no son visibles temporalmente. Las demás salas permanecen abiertas.',
   zh:'舞厅正在进行修复。游客仍可通过受保护通道穿行，但天花板和墙面的壁画暂时无法观看；博物馆其他展厅仍正常开放。'
  },
  officialUrl:'https://carezzonico.visitmuve.it/informazioni-pratiche/restauro-ca-rezzonico/',
  lastVerified:'2026-10-25'
 },
 {
  key:'palazzo-mocenigo-tarbouche-disassembly',
  placeSlug:'palazzo-mocenigo',
  kind:'closure',
  start:'2026-11-09',
  end:'2026-11-11',
  title:{
   it:'9–11 novembre: disallestimento Le Tarbouche',
   en:'9–11 November: Le Tarbouche dismantling',
   de:'9.–11. November: Abbau von Le Tarbouche',
   fr:'9–11 novembre : démontage de Le Tarbouche',
   es:'9–11 de noviembre: desmontaje de Le Tarbouche',
   zh:'11月9–11日：Le Tarbouche 撤展'
  },
  summary:{
   it:'Durante il disallestimento della mostra Le Tarbouche sono temporaneamente interessati il portego e le sale 6, 7, 8, 9, 11, 12, 13 e 18 del primo piano nobile. Prima della visita verifica l’avviso MUVE aggiornato.',
   en:'During the dismantling of Le Tarbouche, the portego and rooms 6, 7, 8, 9, 11, 12, 13 and 18 on the first piano nobile are temporarily affected. Check the latest MUVE notice before visiting.',
   de:'Während des Abbaus von Le Tarbouche sind der Portego sowie die Räume 6, 7, 8, 9, 11, 12, 13 und 18 im ersten Piano Nobile vorübergehend betroffen. Prüfen Sie vor dem Besuch die aktuelle MUVE-Mitteilung.',
   fr:'Pendant le démontage de Le Tarbouche, le portego et les salles 6, 7, 8, 9, 11, 12, 13 et 18 du premier piano nobile sont temporairement concernés. Vérifiez l’avis MUVE actualisé avant la visite.',
   es:'Durante el desmontaje de Le Tarbouche, el portego y las salas 6, 7, 8, 9, 11, 12, 13 y 18 de la primera planta noble se ven temporalmente afectados. Consulta el aviso MUVE actualizado antes de la visita.',
   zh:'Le Tarbouche 撤展期间，一层主楼层的 portego 以及6、7、8、9、11、12、13和18号展厅会暂时受到影响。参观前请再次查看 MUVE 最新公告。'
  },
  officialUrl:'https://mocenigo.visitmuve.it/informazioni-pratiche/',
  lastVerified:'2026-10-25'
 },
 {
  key:'palazzo-mocenigo-portego-restoration',
  placeSlug:'palazzo-mocenigo',
  kind:'restoration',
  start:'2026-11-16',
  end:'2026-12-31',
  title:{
   it:'Dal 16 novembre: restauro di due dipinti nel portego',
   en:'From 16 November: two paintings restored in the portego',
   de:'Ab 16. November: Restaurierung zweier Gemälde im Portego',
   fr:'À partir du 16 novembre : restauration de deux tableaux dans le portego',
   es:'Desde el 16 de noviembre: restauración de dos pinturas en el portego',
   zh:'11月16日起：portego 内两幅画作修复'
  },
  summary:{
   it:'Dal 16 novembre 2026 MUVE prevede il restauro in situ, nel portego, del Ritratto di papa Clemente X e del Ritratto dell’imperatore Leopoldo I d’Asburgo, entrambi di ambito veneziano. I lavori non modificano il percorso di visita e la conclusione è prevista entro la fine del 2026.',
   en:'From 16 November 2026, MUVE plans in-situ restoration in the portego of the Portrait of Pope Clement X and the Portrait of Emperor Leopold I of Habsburg, both from the Venetian school. The work does not alter the visitor route and is expected to finish by the end of 2026.',
   de:'Ab 16. November 2026 lässt MUVE im Portego das Porträt von Papst Clemens X. und das Porträt von Kaiser Leopold I. von Habsburg, beide aus venezianischem Umfeld, vor Ort restaurieren. Die Arbeiten verändern den Besucherweg nicht und sollen bis Ende 2026 abgeschlossen sein.',
   fr:'À partir du 16 novembre 2026, MUVE prévoit la restauration sur place, dans le portego, du Portrait du pape Clément X et du Portrait de l’empereur Léopold Ier de Habsbourg, tous deux de milieu vénitien. Les travaux ne modifient pas le parcours de visite et devraient s’achever d’ici la fin de 2026.',
   es:'Desde el 16 de noviembre de 2026, MUVE prevé restaurar in situ, en el portego, el Retrato del papa Clemente X y el Retrato del emperador Leopoldo I de Habsburgo, ambos de ámbito veneciano. Los trabajos no modifican el recorrido de visita y se espera que terminen antes de finalizar 2026.',
   zh:'自2026年11月16日起，MUVE 将在 portego 现场修复《教皇克莱孟十世肖像》和《哈布斯堡皇帝利奥波德一世肖像》，两件作品均属威尼斯艺术语境。施工不会改变参观路线，预计于2026年底前完成。'
  },
  officialUrl:'https://mocenigo.visitmuve.it/informazioni-pratiche/',
  lastVerified:'2026-10-26'
 },
 {
  key:'palazzo-mocenigo-accessibility',
  placeSlug:'palazzo-mocenigo',
  kind:'visitor-info',
  status:'current',
  title:{
   it:'Accessibilità: verifica prima della visita',
   en:'Accessibility: check before visiting',
   de:'Barrierefreiheit: vor dem Besuch prüfen',
   fr:'Accessibilité : vérifier avant la visite',
   es:'Accesibilidad: comprobar antes de la visita',
   zh:'无障碍信息：参观前请确认'
  },
  summary:{
   it:'Il museo si trova in un edificio storico. MUVE segnala una scala per raggiungere il piano nobile e servizi igienici non a norma. Per esigenze di mobilità specifiche è consigliato contattare il museo prima della visita al +39 041 721798.',
   en:'The museum is housed in a historic building. MUVE notes a staircase to reach the piano nobile and toilets that are not fully accessible. Visitors with specific mobility needs are advised to contact the museum before visiting on +39 041 721798.',
   de:'Das Museum befindet sich in einem historischen Gebäude. MUVE weist auf eine Treppe zum Piano Nobile und nicht vollständig barrierefreie Toiletten hin. Bei besonderen Mobilitätsbedürfnissen empfiehlt sich vor dem Besuch eine Kontaktaufnahme unter +39 041 721798.',
   fr:'Le musée occupe un bâtiment historique. MUVE signale un escalier pour accéder au piano nobile et des toilettes non entièrement accessibles. Pour des besoins de mobilité spécifiques, il est conseillé de contacter le musée avant la visite au +39 041 721798.',
   es:'El museo se encuentra en un edificio histórico. MUVE señala una escalera para acceder al piano nobile y aseos que no son totalmente accesibles. Para necesidades específicas de movilidad se aconseja contactar con el museo antes de la visita en el +39 041 721798.',
   zh:'博物馆位于历史建筑内。MUVE 提醒，前往 piano nobile 需走楼梯，卫生间也并非完全无障碍。如有特定行动需求，建议参观前致电 +39 041 721798 咨询。'
  },
  officialUrl:'https://mocenigo.visitmuve.it/informazioni-pratiche/servizi-e-accessibilita/',
  lastVerified:'2026-10-26'
 },
 {
  key:'palazzo-roverella-pinacoteca-free',
  placeSlug:'palazzo-roverella',
  kind:'visitor-info',
  start:'2026-11-13',
  end:'2027-01-31',
  title:{
   it:'Pinacoteca: ingresso gratuito dal 13 novembre',
   en:'Picture Gallery: free admission from 13 November',
   de:'Pinakothek: freier Eintritt ab 13. November',
   fr:'Pinacothèque : entrée gratuite à partir du 13 novembre',
   es:'Pinacoteca: entrada gratuita desde el 13 de noviembre',
   zh:'画廊：11月13日起免费入场'
  },
  summary:{
   it:'Dal 13 novembre 2026 al 31 gennaio 2027 la Pinacoteca di Palazzo Roverella è visitabile gratuitamente: lunedì–venerdì 09:00–19:00, sabato, domenica e festivi 09:00–20:00. La gratuità riguarda la Pinacoteca e non la mostra Man Ray.',
   en:'From 13 November 2026 to 31 January 2027, admission to Palazzo Roverella’s Picture Gallery is free: Monday–Friday 09:00–19:00; Saturdays, Sundays and holidays 09:00–20:00. Free admission applies to the Picture Gallery, not to the Man Ray exhibition.',
   de:'Vom 13. November 2026 bis 31. Januar 2027 ist der Eintritt in die Pinakothek von Palazzo Roverella frei: Montag–Freitag 09:00–19:00 Uhr, Samstag, Sonntag und Feiertage 09:00–20:00 Uhr. Der freie Eintritt gilt für die Pinakothek, nicht für die Ausstellung Man Ray.',
   fr:'Du 13 novembre 2026 au 31 janvier 2027, l’entrée à la Pinacothèque de Palazzo Roverella est gratuite : lundi–vendredi 09:00–19:00 ; samedi, dimanche et jours fériés 09:00–20:00. La gratuité concerne la Pinacothèque, pas l’exposition Man Ray.',
   es:'Del 13 de noviembre de 2026 al 31 de enero de 2027, la Pinacoteca de Palazzo Roverella tiene entrada gratuita: lunes–viernes 09:00–19:00; sábados, domingos y festivos 09:00–20:00. La gratuidad se refiere a la Pinacoteca, no a la exposición Man Ray.',
   zh:'2026年11月13日至2027年1月31日，Palazzo Roverella 画廊免费开放：周一至周五09:00–19:00，周六、周日及节假日09:00–20:00。免费政策仅适用于画廊，不适用于 Man Ray 展览。'
  },
  officialUrl:'https://www.palazzoroverella.com/la-pinacoteca/',
  lastVerified:'2026-10-25'
 },
 {
  key:'palazzo-roverella-cubism-2027',
  placeSlug:'palazzo-roverella',
  kind:'programme',
  status:'upcoming',
  period:{
   it:'Febbraio 2027',en:'February 2027',de:'Februar 2027',fr:'Février 2027',es:'Febrero de 2027',zh:'2027年2月'
  },
  title:{
   it:'Cubismo: annunciato il progetto 2027',
   en:'Cubism: 2027 exhibition announced',
   de:'Kubismus: Ausstellung für 2027 angekündigt',
   fr:'Cubisme : exposition 2027 annoncée',
   es:'Cubismo: exposición anunciada para 2027',
   zh:'立体主义：已公布2027年展览计划'
  },
  summary:{
   it:'Per febbraio 2027 Palazzo Roverella ha annunciato una mostra dedicata al Cubismo con opere dalle collezioni del Centre Pompidou di Parigi, tra cui lavori di Picasso, Braque e Léger. Date esatte, biglietti e dettagli saranno aggiornati dopo le comunicazioni ufficiali.',
   en:'For February 2027, Palazzo Roverella has announced an exhibition devoted to Cubism with works from the Centre Pompidou collections in Paris, including Picasso, Braque and Léger. Exact dates, tickets and further details will be updated when officially announced.',
   de:'Für Februar 2027 hat Palazzo Roverella eine Kubismus-Ausstellung mit Werken aus den Sammlungen des Centre Pompidou in Paris angekündigt, darunter Picasso, Braque und Léger. Genaue Termine, Tickets und weitere Details werden nach offizieller Veröffentlichung ergänzt.',
   fr:'Pour février 2027, Palazzo Roverella annonce une exposition consacrée au Cubisme avec des œuvres des collections du Centre Pompidou à Paris, notamment Picasso, Braque et Léger. Les dates exactes, billets et autres détails seront ajoutés après communication officielle.',
   es:'Para febrero de 2027, Palazzo Roverella ha anunciado una exposición dedicada al Cubismo con obras de las colecciones del Centre Pompidou de París, entre ellas trabajos de Picasso, Braque y Léger. Las fechas exactas, entradas y demás detalles se actualizarán cuando sean oficiales.',
   zh:'Palazzo Roverella 已宣布于2027年2月推出立体主义专题展，作品来自巴黎 Centre Pompidou 馆藏，包括 Picasso、Braque 和 Léger。确切日期、门票及其他细节将在官方公布后更新。'
  },
  officialUrl:'https://www.palazzoroverella.com/man-ray-cubismo-miro-palazzo-roverella-grandi-mostre-2/',
  lastVerified:'2026-10-25'
 },
 {
  key:'palazzo-grassi-permanent-collection-2027',
  placeSlug:'palazzo-grassi',
  kind:'programme',
  start:'2027-03-21',
  status:'upcoming',
  title:{
   it:'Palazzo Grassi dal 2027: esposizione permanente della Collezione Pinault',
   en:'Palazzo Grassi from 2027: permanent Pinault Collection display',
   de:'Palazzo Grassi ab 2027: permanente Präsentation der Pinault Collection',
   fr:'Palazzo Grassi dès 2027 : présentation permanente de la Collection Pinault',
   es:'Palazzo Grassi desde 2027: exposición permanente de la Colección Pinault',
   zh:'Palazzo Grassi 2027年起：Pinault Collection 常设展'
  },
  summary:{
   it:'Dal 21 marzo 2027 Palazzo Grassi inaugura una nuova fase: gli spazi veneziani ospiteranno un’esposizione permanente della Collezione Pinault. Il nuovo percorso riunirà oltre cento opere significative dell’arte contemporanea e segna un cambiamento importante rispetto alla programmazione tradizionale basata sulle mostre temporanee.',
   en:'From 21 March 2027, Palazzo Grassi begins a new chapter as the Venice venue hosts a permanent exhibition of the Pinault Collection. The new itinerary will bring together more than one hundred major works of contemporary art, marking an important shift from the venue’s traditional programme of temporary exhibitions.',
   de:'Ab 21. März 2027 beginnt für Palazzo Grassi eine neue Phase: Die venezianischen Räume beherbergen eine permanente Präsentation der Pinault Collection. Der neue Rundgang vereint mehr als hundert bedeutende Werke zeitgenössischer Kunst und markiert einen wichtigen Wandel gegenüber dem bisherigen Schwerpunkt auf Wechselausstellungen.',
   fr:'À partir du 21 mars 2027, Palazzo Grassi ouvre une nouvelle étape de son histoire en accueillant une présentation permanente de la Collection Pinault. Le nouveau parcours réunira plus de cent œuvres majeures de l’art contemporain et marque un changement important par rapport à la programmation traditionnellement fondée sur des expositions temporaires.',
   es:'A partir del 21 de marzo de 2027, Palazzo Grassi inicia una nueva etapa con una exposición permanente de la Colección Pinault. El nuevo recorrido reunirá más de cien obras relevantes de arte contemporáneo y supone un cambio importante respecto a la programación tradicional basada en exposiciones temporales.',
   zh:'自2027年3月21日起，Palazzo Grassi 将进入新的阶段，长期展示 Pinault Collection。新的参观路线将汇集一百余件重要当代艺术作品，这标志着该馆从以临时展览为主的传统模式迈向新的常设展示方式。'
  },
  officialUrl:'https://www.pinaultcollection.com/palazzograssi/it',
  lastVerified:'2026-10-27'
 },
 {
  key:'palazzo-grassi-current-practical-info',
  placeSlug:'palazzo-grassi',
  kind:'visitor-info',
  status:'current',
  title:{it:'Orari e biglietti delle mostre attuali',en:'Opening hours and tickets for the current exhibitions',de:'Öffnungszeiten und Tickets der aktuellen Ausstellungen',fr:'Horaires et billets des expositions actuelles',es:'Horarios y entradas de las exposiciones actuales',zh:'当前展览开放时间与门票'},
  summary:{it:'Durante le mostre attuali Palazzo Grassi è aperto 10:00–18:00, con ultimo ingresso alle 17:00; chiuso martedì e 25 dicembre. Il biglietto unico per le due sedi costa €20 intero, €15 ridotto e €7 per i 20–26 anni; i visitatori singoli fino a 19 anni entrano gratuitamente secondo le condizioni ufficiali. Orari e tariffe vanno ricontrollati con il programma 2027 e non sono attribuiti automaticamente alla nuova esposizione permanente.',en:'During the current exhibitions, Palazzo Grassi is open 10:00–18:00, with last admission at 17:00; closed Tuesday and 25 December. The joint ticket for the two venues is €20 full, €15 reduced and €7 for ages 20–26; individual visitors up to age 19 enter free under the official conditions. Recheck hours and prices for the 2027 programme: these current terms are not automatically applied to the new permanent display.',de:'Während der aktuellen Ausstellungen ist Palazzo Grassi von 10:00 bis 18:00 Uhr geöffnet, letzter Einlass 17:00 Uhr; dienstags und am 25. Dezember geschlossen. Das Kombiticket für beide Häuser kostet 20 € regulär, 15 € ermäßigt und 7 € für 20–26-Jährige; Einzelbesucher bis 19 Jahre haben nach den offiziellen Bedingungen freien Eintritt. Für das Programm 2027 sind Öffnungszeiten und Tarife erneut zu prüfen und gelten nicht automatisch für die neue Dauerausstellung.',fr:'Pendant les expositions actuelles, Palazzo Grassi est ouvert de 10:00 à 18:00, dernière entrée à 17:00 ; fermé le mardi et le 25 décembre. Le billet commun aux deux sites coûte 20 € plein tarif, 15 € réduit et 7 € pour les 20–26 ans ; les visiteurs individuels jusqu’à 19 ans entrent gratuitement selon les conditions officielles. Les horaires et tarifs devront être revérifiés pour le programme 2027 et ne s’appliquent pas automatiquement à la nouvelle présentation permanente.',es:'Durante las exposiciones actuales, Palazzo Grassi abre de 10:00 a 18:00, con última entrada a las 17:00; cerrado los martes y el 25 de diciembre. La entrada conjunta para las dos sedes cuesta 20 € general, 15 € reducida y 7 € para personas de 20 a 26 años; los visitantes individuales de hasta 19 años entran gratis según las condiciones oficiales. Los horarios y tarifas deben volver a comprobarse para el programa de 2027 y no se aplican automáticamente a la nueva exposición permanente.',zh:'当前展览期间，Palazzo Grassi 开放时间为10:00–18:00，最后入场17:00；周二及12月25日闭馆。两馆通票全价20欧元、优惠票15欧元、20–26岁7欧元；19岁及以下个人访客按官方条件免费。2027年项目的开放时间和票价需再次核实，不能自动沿用到新的常设展。'},
  officialUrl:'https://www.pinaultcollection.com/palazzograssi/it/informazioni-pratiche',
  lastVerified:'2026-10-27'
 },
 {
  key:'punta-dogana-current-practical-info',
  placeSlug:'punta-della-dogana',
  kind:'visitor-info',
  status:'current',
  title:{it:'Orari e biglietti delle mostre attuali',en:'Opening hours and tickets for the current exhibitions',de:'Öffnungszeiten und Tickets der aktuellen Ausstellungen',fr:'Horaires et billets des expositions actuelles',es:'Horarios y entradas de las exposiciones actuales',zh:'当前展览开放时间与门票'},
  summary:{it:'Durante le mostre attuali Punta della Dogana è aperta 10:00–18:00, con ultimo ingresso alle 17:00; chiusa martedì e 25 dicembre. Il biglietto unico per le due sedi costa €20 intero, €15 ridotto e €7 per i 20–26 anni; i visitatori singoli fino a 19 anni entrano gratuitamente secondo le condizioni ufficiali. Orari e tariffe devono essere ricontrollati quando cambia la programmazione, compresa la mostra 2027.',en:'During the current exhibitions, Punta della Dogana is open 10:00–18:00, with last admission at 17:00; closed Tuesday and 25 December. The joint ticket for the two venues is €20 full, €15 reduced and €7 for ages 20–26; individual visitors up to age 19 enter free under the official conditions. Recheck hours and prices whenever the programme changes, including for the 2027 exhibition.',de:'Während der aktuellen Ausstellungen ist Punta della Dogana von 10:00 bis 18:00 Uhr geöffnet, letzter Einlass 17:00 Uhr; dienstags und am 25. Dezember geschlossen. Das Kombiticket für beide Häuser kostet 20 € regulär, 15 € ermäßigt und 7 € für 20–26-Jährige; Einzelbesucher bis 19 Jahre haben nach den offiziellen Bedingungen freien Eintritt. Öffnungszeiten und Tarife sind bei Programmwechseln, auch für die Ausstellung 2027, erneut zu prüfen.',fr:'Pendant les expositions actuelles, Punta della Dogana est ouverte de 10:00 à 18:00, dernière entrée à 17:00 ; fermée le mardi et le 25 décembre. Le billet commun aux deux sites coûte 20 € plein tarif, 15 € réduit et 7 € pour les 20–26 ans ; les visiteurs individuels jusqu’à 19 ans entrent gratuitement selon les conditions officielles. Les horaires et tarifs doivent être revérifiés à chaque changement de programmation, y compris pour l’exposition 2027.',es:'Durante las exposiciones actuales, Punta della Dogana abre de 10:00 a 18:00, con última entrada a las 17:00; cerrada los martes y el 25 de diciembre. La entrada conjunta para las dos sedes cuesta 20 € general, 15 € reducida y 7 € para personas de 20 a 26 años; los visitantes individuales de hasta 19 años entran gratis según las condiciones oficiales. Los horarios y tarifas deben comprobarse de nuevo cuando cambie la programación, incluida la exposición de 2027.',zh:'当前展览期间，Punta della Dogana 开放时间为10:00–18:00，最后入场17:00；周二及12月25日闭馆。两馆通票全价20欧元、优惠票15欧元、20–26岁7欧元；19岁及以下个人访客按官方条件免费。每次展览计划变化时都应重新确认开放时间和票价，包括2027年的新展。'},
  officialUrl:'https://www.pinaultcollection.com/palazzograssi/it/informazioni-pratiche',
  lastVerified:'2026-10-27'
 },
 {
  key:'querini-practical-info-20261027',
  placeSlug:'querini-stampalia',
  kind:'visitor-info',
  status:'current',
  title:{it:'Orari, biglietti e acquisto',en:'Hours, tickets and purchase',de:'Öffnungszeiten, Tickets und Kauf',fr:'Horaires, billets et achat',es:'Horarios, entradas y compra',zh:'开放时间、门票与购票'},
  summary:{it:'Collezioni e mostre sono visitabili da martedì a domenica 10:00–18:00, con biglietteria fino alle 17:30; lunedì chiuso. Il biglietto intero costa €15, ridotto €12, universitari under 26 €10 e family €24; gli under 18 entrano gratuitamente secondo le condizioni ufficiali. Un unico biglietto comprende collezioni, Area Scarpa con il giardino e mostre in corso. L’acquisto online è consigliato, ma è possibile comprare il biglietto anche in sede; per i gruppi valgono condizioni specifiche.',en:'Collections and exhibitions are open Tuesday–Sunday 10:00–18:00, with the ticket office open until 17:30; closed Monday. Tickets are €15 full, €12 reduced, €10 for university students under 26 and €24 family; under-18s enter free under the official conditions. One ticket includes the collections, the Scarpa Area and garden, and current exhibitions. Online purchase is recommended, but tickets can also be bought on site; groups have specific booking conditions.',de:'Sammlungen und Ausstellungen sind Dienstag–Sonntag 10:00–18:00 Uhr geöffnet, die Kasse bis 17:30 Uhr; Montag geschlossen. Tickets kosten 15 € regulär, 12 € ermäßigt, 10 € für Studierende unter 26 und 24 € als Familienticket; unter 18 Jahren ist der Eintritt nach den offiziellen Bedingungen frei. Ein Ticket umfasst Sammlungen, Scarpa-Bereich mit Garten und laufende Ausstellungen. Online-Kauf wird empfohlen, ist aber nicht verpflichtend; Tickets sind auch vor Ort erhältlich, für Gruppen gelten besondere Bedingungen.',fr:'Les collections et expositions sont ouvertes du mardi au dimanche de 10:00 à 18:00, billetterie jusqu’à 17:30 ; fermé le lundi. Billets : 15 € plein tarif, 12 € réduit, 10 € pour les étudiants de moins de 26 ans et 24 € famille ; gratuit pour les moins de 18 ans selon les conditions officielles. Un seul billet comprend les collections, l’Area Scarpa avec le jardin et les expositions en cours. L’achat en ligne est conseillé mais les billets peuvent aussi être achetés sur place ; des conditions spécifiques s’appliquent aux groupes.',es:'Las colecciones y exposiciones abren de martes a domingo de 10:00 a 18:00, con taquilla hasta las 17:30; cerrado los lunes. Entradas: 15 € general, 12 € reducida, 10 € para universitarios menores de 26 y 24 € familiar; menores de 18 gratis según las condiciones oficiales. Una sola entrada incluye las colecciones, el Área Scarpa con el jardín y las exposiciones en curso. Se recomienda comprar online, pero también es posible comprar en taquilla; los grupos tienen condiciones específicas.',zh:'馆藏与展览周二至周日10:00–18:00开放，售票处至17:30；周一闭馆。全价15欧元、优惠票12欧元、26岁以下大学生10欧元、家庭票24欧元；18岁以下按官方条件免费。一张门票包含馆藏、Scarpa 区域及花园和当前展览。官方建议线上购票，但也可现场购买；团体参观适用专门预约条件。'},
  officialUrl:'https://www.querinistampalia.org/it/acquista-biglietto/',
  lastVerified:'2026-10-27'
 },
 {
  key:'peggy-free-week-venetians-2026',
  placeSlug:'peggy-guggenheim',
  kind:'visitor-info',
  start:'2026-11-18',
  end:'2026-11-22',
  title:{
   it:'18–22 novembre 2026: Settimana gratuita dei veneziani',
   en:'18–22 November 2026: Free Week for Venetians',
   de:'18.–22. November 2026: Kostenfreie Woche für Venezianer',
   fr:'18–22 novembre 2026 : semaine gratuite pour les Vénitiens',
   es:'18–22 de noviembre de 2026: semana gratuita para venecianos',
   zh:'2026年11月18–22日：威尼斯居民免费周'
  },
  summary:{
   it:'In occasione della Festa della Madonna della Salute, la Collezione Peggy Guggenheim offre cinque giornate di ingresso gratuito ai residenti del Comune di Venezia e dei 44 comuni della Città Metropolitana, alle persone nate a Venezia e agli studenti degli atenei veneziani ammessi. La prenotazione è obbligatoria e soggetta a disponibilità; occorre presentare un documento valido o una tessera universitaria. Durante la settimana è visitabile anche Fucina degli Angeli. Il 21 e 22 novembre alle 15:00 sono inoltre previsti laboratori creativi gratuiti per bambini di 4–10 anni, con prenotazione dedicata disponibile dall’8 novembre alle 10:00.',
   en:'For the Festa della Madonna della Salute, the Peggy Guggenheim Collection offers five days of free admission to residents of the City of Venice and the 44 municipalities of the Metropolitan City, people born in Venice, and eligible students at Venetian universities. Booking is required and subject to availability; visitors must show valid ID or a student card. Fucina degli Angeli can also be visited during the week. Free creative workshops for children aged 4–10 are scheduled at 3 pm on 21 and 22 November, with dedicated booking opening on 8 November at 10 am.',
   de:'Anlässlich der Festa della Madonna della Salute bietet die Peggy Guggenheim Collection fünf Tage freien Eintritt für Einwohner der Stadt Venedig und der 44 Gemeinden der Metropolitanstadt, in Venedig Geborene sowie berechtigte Studierende venezianischer Hochschulen. Eine Reservierung ist verpflichtend und nur nach Verfügbarkeit möglich; ein gültiger Ausweis oder Studierendenausweis ist erforderlich. Auch Fucina degli Angeli kann in dieser Woche besucht werden. Am 21. und 22. November um 15:00 Uhr finden außerdem kostenlose Kreativworkshops für Kinder von 4–10 Jahren statt; die separate Reservierung öffnet am 8. November um 10:00 Uhr.',
   fr:'À l’occasion de la Festa della Madonna della Salute, la Collection Peggy Guggenheim propose cinq jours d’entrée gratuite aux résidents de la commune de Venise et des 44 communes de la Ville métropolitaine, aux personnes nées à Venise et aux étudiants éligibles des universités vénitiennes. La réservation est obligatoire et soumise aux disponibilités ; une pièce d’identité valide ou une carte d’étudiant est requise. Fucina degli Angeli reste également accessible pendant cette semaine. Des ateliers créatifs gratuits pour les enfants de 4 à 10 ans sont prévus les 21 et 22 novembre à 15 h, avec réservation dédiée à partir du 8 novembre à 10 h.',
   es:'Con motivo de la Festa della Madonna della Salute, la Colección Peggy Guggenheim ofrece cinco días de entrada gratuita a residentes del municipio de Venecia y de los 44 municipios de la Ciudad Metropolitana, personas nacidas en Venecia y estudiantes admitidos de universidades venecianas. La reserva es obligatoria y está sujeta a disponibilidad; hay que presentar un documento válido o carné universitario. Durante esos días también puede visitarse Fucina degli Angeli. Los días 21 y 22 de noviembre a las 15:00 habrá además talleres creativos gratuitos para niños de 4 a 10 años, con reserva específica disponible desde el 8 de noviembre a las 10:00.',
   zh:'值 Festa della Madonna della Salute 期间，Peggy Guggenheim Collection 连续五天向威尼斯市居民、威尼斯都会城44个市镇居民、出生于威尼斯者及符合条件的威尼斯高校学生提供免费入场。必须提前预约且名额有限，入场时需出示有效身份证件或学生证。活动期间也可参观 Fucina degli Angeli。11月21日和22日15:00还安排面向4–10岁儿童的免费创意工作坊，专门预约自11月8日10:00开放。'
  },
  officialUrl:'https://www.guggenheim-venice.it/en/whats-on/events/free-week-for-venetians-2026/',
  lastVerified:'2026-10-28'
 },
 {
  key:'querini-sunday-free-venice-residents',
  placeSlug:'querini-stampalia',
  kind:'visitor-info',
  status:'current',
  title:{
   it:'Domenica gratuita per i residenti nel Comune di Venezia',
   en:'Free Sundays for City of Venice residents',
   de:'Sonntags freier Eintritt für Einwohner der Stadt Venedig',
   fr:'Entrée gratuite le dimanche pour les résidents de la commune de Venise',
   es:'Domingos gratuitos para residentes del municipio de Venecia',
   zh:'威尼斯市居民周日免费入场'
  },
  summary:{
   it:'La domenica l’ingresso alla Fondazione è gratuito per i residenti nel Comune di Venezia. Restano inoltre valide le gratuità per i minori di 18 anni, le persone con disabilità e accompagnatore e le altre categorie previste dalle condizioni ufficiali. La gratuità domenicale non si estende automaticamente a tutti i residenti della Città Metropolitana: porta un documento idoneo a dimostrare il requisito.',
   en:'On Sundays, admission to the Foundation is free for residents of the City of Venice. Free admission also applies to under-18s, visitors with disabilities and one companion, and the other categories listed in the official conditions. The Sunday concession does not automatically extend to all residents of the Metropolitan City: bring suitable proof of eligibility.',
   de:'Sonntags ist der Eintritt in die Fondazione für Einwohner der Stadt Venedig kostenlos. Freier Eintritt gilt außerdem für unter 18-Jährige, Menschen mit Behinderung und eine Begleitperson sowie weitere in den offiziellen Bedingungen genannte Kategorien. Die Sonntagsregelung gilt nicht automatisch für alle Einwohner der Metropolitanstadt; ein geeigneter Nachweis ist mitzubringen.',
   fr:'Le dimanche, l’entrée à la Fondation est gratuite pour les résidents de la commune de Venise. La gratuité s’applique également aux moins de 18 ans, aux personnes en situation de handicap avec un accompagnateur et aux autres catégories prévues par les conditions officielles. Cette gratuité dominicale ne s’étend pas automatiquement à tous les résidents de la Ville métropolitaine : prévoyez un justificatif adapté.',
   es:'Los domingos, la entrada a la Fundación es gratuita para los residentes del municipio de Venecia. También se mantienen las gratuidades para menores de 18 años, personas con discapacidad y un acompañante, y las demás categorías previstas oficialmente. La gratuidad dominical no se extiende automáticamente a todos los residentes de la Ciudad Metropolitana: conviene llevar un documento que acredite el requisito.',
   zh:'每逢周日，威尼斯市居民可免费进入 Fondazione Querini Stampalia。18岁以下人士、残障人士及一名陪同者，以及官方规定的其他类别同样享有免费入场。周日优惠不会自动扩大到整个威尼斯都会城的所有居民，入场时请携带可证明资格的有效证件。'
  },
  officialUrl:'https://www.querinistampalia.org/it/acquista-biglietto/',
  lastVerified:'2026-10-28'
 },
 {
  key:'palazzo-grassi-accessibility-20261028',
  placeSlug:'palazzo-grassi',
  kind:'visitor-info',
  status:'current',
  title:{it:'Accessibilità a Palazzo Grassi',en:'Accessibility at Palazzo Grassi',de:'Barrierefreiheit im Palazzo Grassi',fr:'Accessibilité à Palazzo Grassi',es:'Accesibilidad en Palazzo Grassi',zh:'Palazzo Grassi 无障碍信息'},
  summary:{
   it:'Palazzo Grassi è accessibile alle persone con difficoltà motorie, con ascensori, rampe mobili e sedie a rotelle disponibili su richiesta. L’accesso dall’imbarcadero San Samuele è privo di barriere architettoniche. Le biglietterie dispongono di amplificazione della voce e hearing loop; per visite guidate e attività didattiche è possibile richiedere gratuitamente una guida o un interprete LIS con almeno una settimana di preavviso.',
   en:'Palazzo Grassi is accessible to visitors with mobility difficulties, with lifts, mobile ramps and wheelchairs available on request. The route from the San Samuele vaporetto stop is barrier-free. Ticket offices have voice amplification and hearing loops; a LIS guide or interpreter can be requested free of charge for guided tours and educational activities with at least one week’s notice.',
   de:'Palazzo Grassi ist für Menschen mit eingeschränkter Mobilität zugänglich und verfügt über Aufzüge, mobile Rampen und Rollstühle auf Anfrage. Der Weg von der Vaporetto-Haltestelle San Samuele ist barrierefrei. Die Kassen sind mit Sprachverstärkung und Hörschleifen ausgestattet; für Führungen und Bildungsangebote kann mit mindestens einer Woche Vorlauf kostenlos eine LIS-Führung oder ein LIS-Dolmetscher angefragt werden.',
   fr:'Palazzo Grassi est accessible aux personnes à mobilité réduite grâce aux ascenseurs, rampes mobiles et fauteuils roulants disponibles sur demande. L’accès depuis l’arrêt de vaporetto San Samuele est sans barrières architecturales. Les billetteries disposent d’un système d’amplification vocale et de boucles auditives ; une guide ou un interprète LIS peut être demandé gratuitement pour les visites guidées et activités pédagogiques avec au moins une semaine de préavis.',
   es:'Palazzo Grassi es accesible para personas con movilidad reducida, con ascensores, rampas móviles y sillas de ruedas disponibles bajo petición. El acceso desde la parada de vaporetto San Samuele no presenta barreras arquitectónicas. Las taquillas cuentan con amplificación de voz y bucle de inducción; para visitas guiadas y actividades educativas puede solicitarse gratuitamente guía o intérprete LIS con al menos una semana de antelación.',
   zh:'Palazzo Grassi 对行动不便人士开放，馆内配有电梯、移动坡道，并可按需提供轮椅。从 San Samuele 水上巴士站前往场馆的路线无建筑障碍。售票处配有语音放大设备和助听环；参加导览或教育活动时，可至少提前一周免费申请 LIS 意大利手语导览或口译支持。'
  },
  officialUrl:'https://www.pinaultcollection.com/palazzograssi/it/informazioni-pratiche',
  lastVerified:'2026-10-28'
 },
 {
  key:'punta-dogana-accessibility-20261028',
  placeSlug:'punta-della-dogana',
  kind:'visitor-info',
  status:'current',
  title:{it:'Accessibilità a Punta della Dogana',en:'Accessibility at Punta della Dogana',de:'Barrierefreiheit in Punta della Dogana',fr:'Accessibilité à Punta della Dogana',es:'Accesibilidad en Punta della Dogana',zh:'Punta della Dogana 无障碍信息'},
  summary:{
   it:'Punta della Dogana è accessibile alle persone con difficoltà motorie. L’accesso dall’imbarcadero Salute è privo di barriere e gli spazi interni dispongono di ascensori, rampe mobili e sedie a rotelle su richiesta. Le biglietterie sono dotate di hearing loop e amplificazione della voce; per visite guidate e attività didattiche è possibile richiedere gratuitamente supporto LIS con una settimana di preavviso.',
   en:'Punta della Dogana is accessible to visitors with mobility difficulties. The route from the Salute vaporetto stop is barrier-free, and the interior has lifts, mobile ramps and wheelchairs available on request. Ticket offices have hearing loops and voice amplification; free LIS support can be requested for guided tours and educational activities with one week’s notice.',
   de:'Punta della Dogana ist für Menschen mit eingeschränkter Mobilität zugänglich. Der Weg von der Vaporetto-Haltestelle Salute ist barrierefrei; im Inneren gibt es Aufzüge, mobile Rampen und Rollstühle auf Anfrage. Die Kassen verfügen über Hörschleifen und Sprachverstärkung; für Führungen und Bildungsangebote kann mit einer Woche Vorlauf kostenlos LIS-Unterstützung angefragt werden.',
   fr:'Punta della Dogana est accessible aux personnes à mobilité réduite. L’accès depuis l’arrêt de vaporetto Salute est sans barrières ; les espaces intérieurs disposent d’ascenseurs, de rampes mobiles et de fauteuils roulants sur demande. Les billetteries sont équipées de boucles auditives et d’un système d’amplification vocale ; un accompagnement LIS gratuit peut être demandé une semaine à l’avance pour les visites guidées et activités pédagogiques.',
   es:'Punta della Dogana es accesible para personas con movilidad reducida. El acceso desde la parada de vaporetto Salute no presenta barreras y los espacios interiores cuentan con ascensores, rampas móviles y sillas de ruedas bajo petición. Las taquillas disponen de bucle de inducción y amplificación de voz; para visitas guiadas y actividades educativas puede solicitarse gratuitamente apoyo LIS con una semana de antelación.',
   zh:'Punta della Dogana 对行动不便人士开放。从 Salute 水上巴士站前往场馆的路线无障碍，馆内设有电梯、移动坡道，并可按需提供轮椅。售票处配有助听环和语音放大设备；导览及教育活动可至少提前一周免费申请 LIS 意大利手语支持。'
  },
  officialUrl:'https://www.pinaultcollection.com/palazzograssi/it/informazioni-pratiche',
  lastVerified:'2026-10-28'
 }
];

export function cultureVisitorNoticesFor(placeSlug:string,referenceDate=romeToday()){
 return cultureVisitorNotices.filter(n=>{
  if(n.placeSlug!==placeSlug)return false;
  if(n.end&&n.end<referenceDate)return false;
  return true;
 });
}

export function cultureVisitorNoticeStatus(notice:CultureVisitorNotice,referenceDate=romeToday()):CultureVisitorNoticeStatus{
 if(notice.status)return notice.status;
 return notice.start&&notice.start>referenceDate?'upcoming':'current';
}

export const cultureVisitorNoticeLabels:Record<CultureLang,{
 eyebrow:string;section:string;current:string;upcoming:string;official:string;internal:string;verified:string;
 kinds:Record<CultureVisitorNoticeKind,string>
}>={
 it:{eyebrow:'Da sapere prima della visita',section:'Avvisi e aggiornamenti',current:'Attuale',upcoming:'Prossimamente',official:'Fonte ufficiale',internal:'Approfondisci su MVA',verified:'Verificato',kinds:{closure:'Accesso temporaneo','artwork-loan':'Opera in prestito',restoration:'Restauro','visitor-info':'Informazione di visita',programme:'Prossima programmazione'}},
 en:{eyebrow:'Know before you visit',section:'Visitor updates',current:'Current',upcoming:'Coming soon',official:'Official source',internal:'Read more on MVA',verified:'Checked',kinds:{closure:'Temporary access','artwork-loan':'Artwork on loan',restoration:'Restoration','visitor-info':'Visitor information',programme:'Upcoming programme'}},
 de:{eyebrow:'Vor dem Besuch wissen',section:'Hinweise für den Besuch',current:'Aktuell',upcoming:'Demnächst',official:'Offizielle Quelle',internal:'Mehr bei MVA',verified:'Geprüft',kinds:{closure:'Vorübergehender Zugang','artwork-loan':'Leihgabe',restoration:'Restaurierung','visitor-info':'Besucherinformation',programme:'Kommendes Programm'}},
 fr:{eyebrow:'À savoir avant la visite',section:'Informations de visite',current:'Actuel',upcoming:'Prochainement',official:'Source officielle',internal:'En savoir plus sur MVA',verified:'Vérifié',kinds:{closure:'Accès temporaire','artwork-loan':'Œuvre en prêt',restoration:'Restauration','visitor-info':'Information de visite',programme:'Programmation à venir'}},
 es:{eyebrow:'Antes de la visita',section:'Avisos para la visita',current:'Actual',upcoming:'Próximamente',official:'Fuente oficial',internal:'Más información en MVA',verified:'Verificado',kinds:{closure:'Acceso temporal','artwork-loan':'Obra en préstamo',restoration:'Restauración','visitor-info':'Información de visita',programme:'Próxima programación'}},
 zh:{eyebrow:'参观前须知',section:'参观更新',current:'当前',upcoming:'即将更新',official:'官方来源',internal:'在 MVA 了解更多',verified:'已核查',kinds:{closure:'临时通行信息','artwork-loan':'外借作品',restoration:'修复工程','visitor-info':'参观信息',programme:'后续计划'}}
};
