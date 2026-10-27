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
  officialUrl:'https://www.pinaultcollection.com/en/pinault-collection-permanent-exhibition',
  lastVerified:'2026-10-27'
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
