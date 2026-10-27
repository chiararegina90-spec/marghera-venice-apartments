import type {EventArticle,EventLang,EventDetailBlock} from './journal-events-2026';

const m=(lang:EventLang,values:Record<EventLang,string>)=>values[lang];

function addSectionLink(item:EventArticle,section:number,href:string,text:string,label:string,tail='.'){
 if(!item.sectionLinks?.some(x=>x.section===section&&x.href===href)){
  item.sectionLinks=[...(item.sectionLinks||[]),{section,href,text,label,tail}];
 }
}

function resultBlocks(lang:EventLang):EventDetailBlock[]{
 return [
  {
   title:m(lang,{it:'42K · Uomini',en:'42K · Men',de:'42K · Männer',fr:'42K · Hommes',es:'42K · Hombres',zh:'42K · 男子'}),
   lines:[
    '1. Peter Kwemoi Ndorobo (Kenya) · 2h07\'31\"',
    '2. Yatede Tarto Berhanu (Etiopia) · 2h07\'47\"',
    '3. Dikson Simba Nyakundi (Kenya) · 2h07\'56\"',
    m(lang,{it:'Migliore italiano: Umberto Persi · 14° · 2h22\'39\"',en:'Best Italian: Umberto Persi · 14th · 2h22\'39\"',de:'Bester Italiener: Umberto Persi · 14. · 2h22\'39\"',fr:'Meilleur Italien : Umberto Persi · 14e · 2h22\'39\"',es:'Mejor italiano: Umberto Persi · 14.º · 2h22\'39\"',zh:'最佳意大利选手：Umberto Persi · 第14名 · 2h22\'39\"'})
   ]
  },
  {
   title:m(lang,{it:'42K · Donne',en:'42K · Women',de:'42K · Frauen',fr:'42K · Femmes',es:'42K · Mujeres',zh:'42K · 女子'}),
   lines:[
    '1. Jackline Jerono (Kenya) · 2h26\'16\"',
    '2. Alemaz Samuel Teshale (Etiopia) · 2h26\'23\"',
    '3. Worknesh Alemu Mola (Etiopia) · 2h28\'46\"',
    m(lang,{it:'Migliore italiana: Federica Moroni · 7ª · 2h49\'39\"',en:'Best Italian: Federica Moroni · 7th · 2h49\'39\"',de:'Beste Italienerin: Federica Moroni · 7. · 2h49\'39\"',fr:'Meilleure Italienne : Federica Moroni · 7e · 2h49\'39\"',es:'Mejor italiana: Federica Moroni · 7.ª · 2h49\'39\"',zh:'最佳意大利女选手：Federica Moroni · 第7名 · 2h49\'39\"'})
   ]
  },
  {
   title:'21K',
   lines:[
    m(lang,{it:'Uomini: Hicham Boufars · 1h05\'34\" · nuovo record del percorso',en:'Men: Hicham Boufars · 1h05\'34\" · new course record',de:'Männer: Hicham Boufars · 1h05\'34\" · neuer Streckenrekord',fr:'Hommes : Hicham Boufars · 1h05\'34\" · nouveau record du parcours',es:'Hombres: Hicham Boufars · 1h05\'34\" · nuevo récord del recorrido',zh:'男子：Hicham Boufars · 1h05\'34\" · 新赛道纪录'}),
    m(lang,{it:'Donne: Lucia Mitidieri · 1h20\'24\"',en:'Women: Lucia Mitidieri · 1h20\'24\"',de:'Frauen: Lucia Mitidieri · 1h20\'24\"',fr:'Femmes : Lucia Mitidieri · 1h20\'24\"',es:'Mujeres: Lucia Mitidieri · 1h20\'24\"',zh:'女子：Lucia Mitidieri · 1h20\'24\"'})
   ]
  },
  {
   title:'10K',
   lines:[
    m(lang,{it:'Uomini: Riccardo Mugnosso · 32\'00\" · nuovo record del percorso',en:'Men: Riccardo Mugnosso · 32\'00\" · new course record',de:'Männer: Riccardo Mugnosso · 32\'00\" · neuer Streckenrekord',fr:'Hommes : Riccardo Mugnosso · 32\'00\" · nouveau record du parcours',es:'Hombres: Riccardo Mugnosso · 32\'00\" · nuevo récord del recorrido',zh:'男子：Riccardo Mugnosso · 32\'00\" · 新赛道纪录'}),
    m(lang,{it:'Donne: Diletta Moressa · 36\'52\" · quarta vittoria nella manifestazione',en:'Women: Diletta Moressa · 36\'52\" · fourth win at the event',de:'Frauen: Diletta Moressa · 36\'52\" · vierter Sieg bei der Veranstaltung',fr:'Femmes : Diletta Moressa · 36\'52\" · quatrième victoire dans l’épreuve',es:'Mujeres: Diletta Moressa · 36\'52\" · cuarta victoria en la prueba',zh:'女子：Diletta Moressa · 36\'52\" · 第四次赢得该项目'})
   ]
  }
 ];
}

export function applyJournalCatchup20261026(item:EventArticle,lang:EventLang,slug:string){
 if(!item||slug!=='venicemarathon-2026')return;

 item.lead=m(lang,{
  it:'La 40ª Venicemarathon si è disputata domenica 25 ottobre 2026 con 24.000 iscritti nelle tre distanze 42K, 21K e 10K. L’edizione del quarantennale si è chiusa con un nuovo record della manifestazione nella maratona maschile: il keniano Peter Kwemoi Ndorobo ha vinto in 2h07\'31\". Il dato dei 24.000 riguarda gli iscritti alle tre gare; il comunicato del 26 ottobre distingue questo numero dagli oltre 40.000 partecipanti complessivi alle iniziative del mese, che includono anche le Family Run. Questa pagina conserva anche percorso, Expo, trasporti e logistica dell’edizione 2026 come documentazione utile.',
  en:'The 40th Venicemarathon took place on Sunday 25 October 2026 with 24,000 registered runners across the 42K, 21K and 10K. The anniversary edition ended with a new men’s marathon event record: Kenya’s Peter Kwemoi Ndorobo won in 2h07\'31\". The 24,000 figure refers to registered runners in the three races; the 26 October release distinguishes it from the more than 40,000 people involved across the month-long programme, including the Family Runs. This page also keeps the 2026 route, Expo, transport and race logistics as useful documentation.',
  de:'Die 40. Venicemarathon fand am Sonntag, 25. Oktober 2026, mit 24.000 gemeldeten Läuferinnen und Läufern über 42K, 21K und 10K statt. Die Jubiläumsausgabe endete mit einem neuen Veranstaltungsrekord im Männer-Marathon: Der Kenianer Peter Kwemoi Ndorobo gewann in 2h07\'31\". Die Zahl von 24.000 bezieht sich auf die Meldungen für die drei Rennen; die Mitteilung vom 26. Oktober unterscheidet sie von den mehr als 40.000 Teilnehmenden am gesamten Veranstaltungsmonat einschließlich der Family Runs. Diese Seite dokumentiert außerdem Strecke, Expo, Verkehr und Logistik der Ausgabe 2026.',
  fr:'La 40e Venicemarathon s’est disputée le dimanche 25 octobre 2026 avec 24 000 inscrits sur les formats 42K, 21K et 10K. L’édition anniversaire s’est conclue par un nouveau record de l’épreuve masculine : le Kényan Peter Kwemoi Ndorobo s’est imposé en 2h07\'31\". Le chiffre de 24 000 correspond aux inscrits des trois courses ; le communiqué du 26 octobre le distingue des plus de 40 000 participants à l’ensemble du programme du mois, Family Run comprises. Cette page conserve également le parcours, l’Expo, les transports et la logistique de l’édition 2026 à titre documentaire.',
  es:'La 40.ª Venicemarathon se disputó el domingo 25 de octubre de 2026 con 24.000 inscritos entre las pruebas 42K, 21K y 10K. La edición del aniversario terminó con un nuevo récord de la prueba masculina: el keniano Peter Kwemoi Ndorobo ganó en 2h07\'31\". La cifra de 24.000 corresponde a las inscripciones de las tres carreras; el comunicado del 26 de octubre la distingue de las más de 40.000 personas participantes en el programa completo del mes, incluidas las Family Run. Esta página conserva además el recorrido, la Expo, los transportes y la logística de la edición 2026 como documentación útil.',
  zh:'第40届 Venicemarathon 已于2026年10月25日星期日举行，42K、21K和10K三项赛事共有24,000名报名者。周年赛事诞生了新的男子全程赛事纪录：肯尼亚选手 Peter Kwemoi Ndorobo 以2h07\'31\"夺冠。24,000人的数据指三项正式比赛的报名人数；10月26日的官方通报将其与整个月活动中超过40,000人的参与规模明确区分，后者还包括 Family Run 系列。本页同时保留2026年赛道、Expo、交通与赛事组织信息，作为该届赛事的实用记录。'
 });

 item.description=m(lang,{
  it:'Venicemarathon 2026: risultati ufficiali della 40ª edizione, record di Peter Kwemoi in 2h07\'31\", 42K, 21K, 10K, percorso, logistica e soggiorno a Marghera.',
  en:'Venice Marathon 2026 official results: Peter Kwemoi’s 2h07\'31\" record, 42K, 21K and 10K winners, route, race logistics and staying in Marghera.',
  de:'Venicemarathon 2026: offizielle Ergebnisse, Peter Kwemois Rekord von 2h07\'31\", Sieger über 42K, 21K und 10K, Strecke, Logistik und Unterkunft in Marghera.',
  fr:'Marathon de Venise 2026 : résultats officiels, record de Peter Kwemoi en 2h07\'31\", vainqueurs 42K, 21K et 10K, parcours, logistique et séjour à Marghera.',
  es:'Maratón de Venecia 2026: resultados oficiales, récord de Peter Kwemoi en 2h07\'31\", ganadores 42K, 21K y 10K, recorrido, logística y alojamiento en Marghera.',
  zh:'2026威尼斯马拉松官方成绩：Peter Kwemoi 以2h07\'31\"创赛事纪录，42K、21K、10K冠军，以及赛道、交通与 Marghera 住宿信息。'
 });

 item.cardDescription=m(lang,{
  it:'40ª Venicemarathon conclusa: 24.000 iscritti, Peter Kwemoi record in 2h07\'31\" e risultati ufficiali di 42K, 21K e 10K.',
  en:'40th Venice Marathon completed: 24,000 entrants, Peter Kwemoi’s 2h07\'31\" event record and official 42K, 21K and 10K results.',
  de:'40. Venicemarathon beendet: 24.000 Gemeldete, Peter Kwemois Veranstaltungsrekord von 2h07\'31\" sowie offizielle 42K-, 21K- und 10K-Ergebnisse.',
  fr:'40e Marathon de Venise terminé : 24 000 inscrits, record de Peter Kwemoi en 2h07\'31\" et résultats officiels des 42K, 21K et 10K.',
  es:'40.ª Venicemarathon finalizada: 24.000 inscritos, récord de Peter Kwemoi en 2h07\'31\" y resultados oficiales de 42K, 21K y 10K.',
  zh:'第40届威尼斯马拉松已结束：24,000人报名，Peter Kwemoi 以2h07\'31\"创赛事纪录，并公布42K、21K、10K官方成绩。'
 });

 const resultTitle=m(lang,{
  it:'Venicemarathon 2026: i risultati e il nuovo record',
  en:'Venice Marathon 2026: results and the new record',
  de:'Venicemarathon 2026: Ergebnisse und neuer Rekord',
  fr:'Marathon de Venise 2026 : résultats et nouveau record',
  es:'Maratón de Venecia 2026: resultados y nuevo récord',
  zh:'2026威尼斯马拉松：官方成绩与新纪录'
 });
 const resultText=m(lang,{
  it:'La 40ª Venicemarathon, disputata il 25 ottobre 2026, entra nella storia con il nuovo record maschile: Peter Kwemoi Ndorobo ha vinto in 2h07\'31\", davanti a Yatede Tarto Berhanu (2h07\'47\") e Dikson Simba Nyakundi (2h07\'56\"). Per la prima volta tre atleti hanno chiuso sotto le 2h08. Tra le donne ha vinto Jackline Jerono in 2h26\'16\", terzo miglior tempo femminile nella storia della manifestazione. I migliori italiani sono stati Umberto Persi, 14° in 2h22\'39\", e Federica Moroni, 7ª in 2h49\'39\". Nella 21K Hicham Boufars ha stabilito il record del percorso in 1h05\'34\" e Lucia Mitidieri ha vinto in 1h20\'24\"; nella 10K Riccardo Mugnosso ha firmato il nuovo primato in 32\'00\" e Diletta Moressa ha vinto in 36\'52\".',
  en:'The 40th Venicemarathon, held on 25 October 2026, entered the record books with a new men’s event record: Peter Kwemoi Ndorobo won in 2h07\'31\", ahead of Yatede Tarto Berhanu (2h07\'47\") and Dikson Simba Nyakundi (2h07\'56\"). For the first time, three runners finished under 2h08. Jackline Jerono won the women’s race in 2h26\'16\", the third-fastest women’s time in event history. The leading Italians were Umberto Persi, 14th in 2h22\'39\", and Federica Moroni, 7th in 2h49\'39\". Hicham Boufars set the 21K course record in 1h05\'34\" and Lucia Mitidieri won in 1h20\'24\"; in the 10K, Riccardo Mugnosso set a new course record of 32\'00\" and Diletta Moressa won in 36\'52\".',
  de:'Die 40. Venicemarathon am 25. Oktober 2026 schrieb mit einem neuen Männer-Rekord Geschichte: Peter Kwemoi Ndorobo gewann in 2h07\'31\" vor Yatede Tarto Berhanu (2h07\'47\") und Dikson Simba Nyakundi (2h07\'56\"). Erstmals blieben drei Läufer unter 2h08. Bei den Frauen siegte Jackline Jerono in 2h26\'16\", der drittbesten Frauenzeit der Veranstaltungsgeschichte. Beste Italiener waren Umberto Persi als 14. in 2h22\'39\" und Federica Moroni als 7. in 2h49\'39\". Hicham Boufars stellte über 21K mit 1h05\'34\" einen Streckenrekord auf, Lucia Mitidieri gewann in 1h20\'24\"; über 10K erzielte Riccardo Mugnosso mit 32\'00\" einen neuen Streckenrekord, Diletta Moressa gewann in 36\'52\".',
  fr:'La 40e Venicemarathon, disputée le 25 octobre 2026, entre dans l’histoire avec un nouveau record masculin : Peter Kwemoi Ndorobo s’impose en 2h07\'31\" devant Yatede Tarto Berhanu (2h07\'47\") et Dikson Simba Nyakundi (2h07\'56\"). Pour la première fois, trois coureurs passent sous les 2h08. Jackline Jerono remporte la course féminine en 2h26\'16\", troisième meilleur chrono féminin de l’histoire de l’épreuve. Les meilleurs Italiens sont Umberto Persi, 14e en 2h22\'39\", et Federica Moroni, 7e en 2h49\'39\". Sur 21K, Hicham Boufars établit le record du parcours en 1h05\'34\" et Lucia Mitidieri gagne en 1h20\'24\" ; sur 10K, Riccardo Mugnosso signe un nouveau record en 32\'00\" et Diletta Moressa s’impose en 36\'52\".',
  es:'La 40.ª Venicemarathon, disputada el 25 de octubre de 2026, entra en la historia con un nuevo récord masculino: Peter Kwemoi Ndorobo ganó en 2h07\'31\", por delante de Yatede Tarto Berhanu (2h07\'47\") y Dikson Simba Nyakundi (2h07\'56\"). Por primera vez, tres corredores bajaron de 2h08. Jackline Jerono ganó la carrera femenina en 2h26\'16\", tercer mejor tiempo femenino de la historia del evento. Los mejores italianos fueron Umberto Persi, 14.º en 2h22\'39\", y Federica Moroni, 7.ª en 2h49\'39\". En la 21K, Hicham Boufars batió el récord del recorrido con 1h05\'34\" y Lucia Mitidieri ganó en 1h20\'24\"; en la 10K, Riccardo Mugnosso firmó un nuevo récord con 32\'00\" y Diletta Moressa venció en 36\'52\".',
  zh:'2026年10月25日举行的第40届 Venicemarathon 创下新的男子赛事纪录：Peter Kwemoi Ndorobo 以2h07\'31\"夺冠，Yatede Tarto Berhanu（2h07\'47\"）和 Dikson Simba Nyakundi（2h07\'56\"）分列第二、第三，这是赛事首次有三名选手跑进2小时08分。女子组由 Jackline Jerono 以2h26\'16\"夺冠，这是赛事历史第三快的女子成绩。最佳意大利选手分别是 Umberto Persi（男子第14名，2h22\'39\"）和 Federica Moroni（女子第7名，2h49\'39\"）。21K 中 Hicham Boufars 以1h05\'34\"刷新赛道纪录，Lucia Mitidieri 以1h20\'24\"夺冠；10K 中 Riccardo Mugnosso 以32\'00\"刷新纪录，Diletta Moressa 以36\'52\"夺冠。'
 });
 const sections=[...(item.sections||[])];
 if(sections.length){
  sections[0]=[resultTitle,resultText];
 }
 if(sections[4]){
  sections[4]=[sections[4][0],m(lang,{
   it:'L’Exposport Venicemarathon Village si è svolto al Parco San Giuliano di Mestre, vicino a Porta Blu, venerdì 23 e sabato 24 ottobre 2026 dalle 09:00 alle 20:00. Per la 42K il ritiro del pettorale era previsto esclusivamente in quelle giornate e fasce orarie. Restano utili come riferimento storico anche le indicazioni di accesso con tram T1/T2, bus ACTV 9 e 15 e i parcheggi dell’evento Porta Gialla e Porta Rossa.',
   en:'The Exposport Venicemarathon Village took place at Parco San Giuliano in Mestre, near Porta Blu, on Friday 23 and Saturday 24 October 2026 from 09:00 to 20:00. For the 42K, bib collection was available only on those days and during those hours. Access information via trams T1/T2, ACTV buses 9 and 15, and the event parking areas Porta Gialla and Porta Rossa remains useful as documentation of the 2026 edition.',
   de:'Das Exposport Venicemarathon Village fand am Freitag, 23., und Samstag, 24. Oktober 2026 jeweils von 09:00 bis 20:00 Uhr im Parco San Giuliano in Mestre nahe Porta Blu statt. Für den 42K war die Startnummernausgabe ausschließlich an diesen Tagen und zu diesen Zeiten vorgesehen. Die Angaben zu T1/T2, ACTV-Bussen 9 und 15 sowie den Veranstaltungsparkplätzen Porta Gialla und Porta Rossa bleiben als Dokumentation der Ausgabe 2026 erhalten.',
   fr:'L’Exposport Venicemarathon Village s’est tenu au Parco San Giuliano de Mestre, près de Porta Blu, le vendredi 23 et le samedi 24 octobre 2026 de 09:00 à 20:00. Pour le 42K, le retrait du dossard était prévu uniquement pendant ces journées et horaires. Les indications d’accès par les trams T1/T2, les bus ACTV 9 et 15 et les parkings de l’événement Porta Gialla et Porta Rossa restent utiles comme documentation de l’édition 2026.',
   es:'El Exposport Venicemarathon Village se celebró en el Parco San Giuliano de Mestre, cerca de Porta Blu, el viernes 23 y el sábado 24 de octubre de 2026 de 09:00 a 20:00. Para la 42K, la recogida del dorsal estaba prevista exclusivamente en esos días y horarios. Se conservan como documentación de la edición 2026 las indicaciones de acceso con los tranvías T1/T2, los autobuses ACTV 9 y 15 y los aparcamientos Porta Gialla y Porta Rossa.',
   zh:'2026年 Exposport Venicemarathon Village 于10月23日星期五和24日星期六09:00–20:00在 Mestre 的 Parco San Giuliano（靠近 Porta Blu）举行。42K 号码布仅在这两天和规定时间领取。T1/T2 电车、ACTV 9路和15路公交，以及 Porta Gialla、Porta Rossa 赛事停车区的信息作为2026届赛事记录予以保留。'
  })];
 }
 if(sections[5]){
  sections[5]=[sections[5][0],m(lang,{
   it:'Per l’edizione 2026 le indicazioni su navette, deposito borse, accessi, chiusure stradali e trasporto pubblico erano riferite alla giornata di domenica 25 ottobre. Questi dettagli restano nell’articolo come documentazione del weekend di gara e non vanno interpretati come servizi ancora attivi o come istruzioni per il 2027.',
   en:'For the 2026 edition, shuttle, bag-drop, access, road-closure and public-transport information referred specifically to Sunday 25 October. These details remain in the article as documentation of race weekend and should not be read as services still operating or as instructions for 2027.',
   de:'Für die Ausgabe 2026 bezogen sich Angaben zu Shuttles, Gepäckabgabe, Zugang, Straßensperren und öffentlichem Verkehr ausdrücklich auf Sonntag, den 25. Oktober. Diese Informationen bleiben als Dokumentation des Rennwochenendes erhalten und sind weder als aktuell aktive Services noch als Hinweise für 2027 zu verstehen.',
   fr:'Pour l’édition 2026, les informations sur les navettes, la consigne des sacs, les accès, les fermetures de routes et les transports publics concernaient précisément le dimanche 25 octobre. Elles restent dans l’article comme documentation du week-end de course et ne doivent pas être comprises comme des services encore actifs ni comme des consignes pour 2027.',
   es:'Para la edición 2026, la información sobre lanzaderas, consigna, accesos, cortes de tráfico y transporte público se refería específicamente al domingo 25 de octubre. Estos datos se mantienen como documentación del fin de semana de carrera y no deben interpretarse como servicios todavía activos ni como instrucciones para 2027.',
   zh:'2026届赛事有关接驳车、存包、入场、道路封闭和公共交通的信息均特指10月25日星期日。本文保留这些内容作为赛事周末记录，不应理解为目前仍在运行的服务，也不代表2027年的安排。'
  })];
 }
 const cultureTitle=m(lang,{
  it:'Agevolazioni culturali collegate alla Venicemarathon 2026',
  en:'Culture offers linked to the 2026 Venice Marathon',
  de:'Kulturangebote zur Venicemarathon 2026',
  fr:'Offres culturelles liées au Marathon de Venise 2026',
  es:'Ventajas culturales vinculadas a la Venicemarathon 2026',
  zh:'2026威尼斯马拉松相关文化优惠'
 });
 if(!sections.some(([t])=>t===cultureTitle)){
  sections.push([cultureTitle,m(lang,{
   it:'Per gli iscritti alla Venicemarathon l’organizzatore conferma l’ingresso gratuito a Villa Pisani di Stra dal 22 ottobre al 4 novembre 2026, previa attestazione dell’iscrizione; per gli accompagnatori è previsto il ridotto. Nei Musei Civici di Venezia aderenti, invece, iscritti e accompagnatori possono usufruire di una tariffa ridotta dal 24 al 26 ottobre mostrando pettorale o lettera di conferma. Gli importi delle riduzioni non vengono indicati perché dipendono dalle condizioni ufficiali delle singole sedi.',
   en:'For registered Venicemarathon participants, the organiser confirms free admission to Villa Pisani in Stra from 22 October to 4 November 2026 on proof of registration, with reduced admission for companions. At participating Venice Civic Museums, registered runners and companions receive reduced admission from 24 to 26 October by showing a race bib or confirmation letter. Discount amounts are not stated because the official conditions vary by venue.',
   de:'Für registrierte Venicemarathon-Teilnehmer bestätigt der Veranstalter vom 22. Oktober bis 4. November 2026 freien Eintritt in die Villa Pisani in Stra gegen Nachweis der Anmeldung; Begleitpersonen erhalten ermäßigten Eintritt. In teilnehmenden städtischen Museen Venedigs gilt vom 24. bis 26. Oktober für Teilnehmer und Begleitpersonen eine Ermäßigung gegen Vorlage von Startnummer oder Bestätigungsschreiben. Konkrete Rabattbeträge werden nicht genannt, da die offiziellen Bedingungen je nach Standort variieren.',
   fr:'Pour les participants inscrits à la Venicemarathon, l’organisateur confirme l’entrée gratuite à Villa Pisani de Stra du 22 octobre au 4 novembre 2026 sur présentation d’un justificatif d’inscription, avec tarif réduit pour les accompagnants. Dans les musées civiques de Venise participants, coureurs inscrits et accompagnants bénéficient d’un tarif réduit du 24 au 26 octobre sur présentation du dossard ou de la lettre de confirmation. Les montants des réductions ne sont pas indiqués car les conditions officielles varient selon les sites.',
   es:'Para los participantes inscritos en la Venicemarathon, el organizador confirma entrada gratuita a Villa Pisani de Stra del 22 de octubre al 4 de noviembre de 2026 presentando la acreditación de inscripción, con tarifa reducida para acompañantes. En los Museos Cívicos de Venecia adheridos, inscritos y acompañantes tienen tarifa reducida del 24 al 26 de octubre mostrando dorsal o carta de confirmación. No se indican importes concretos porque las condiciones oficiales varían según la sede.',
   zh:'Venicemarathon 官方确认：参赛者凭报名证明可于2026年10月22日至11月4日免费进入 Stra 的 Villa Pisani，陪同人员可享优惠票价。参加活动的威尼斯市立博物馆则在10月24日至26日期间向参赛者及陪同人员提供优惠票价，需出示号码布或报名确认信。由于各场馆官方条件不同，本文不列出具体折扣金额。'
  })]);
 }
 item.sections=sections;

 item.detailBlockSection={
  eyebrow:m(lang,{it:'RISULTATI UFFICIALI · 25 OTTOBRE 2026',en:'OFFICIAL RESULTS · 25 OCTOBER 2026',de:'OFFIZIELLE ERGEBNISSE · 25. OKTOBER 2026',fr:'RÉSULTATS OFFICIELS · 25 OCTOBRE 2026',es:'RESULTADOS OFICIALES · 25 DE OCTUBRE DE 2026',zh:'官方成绩 · 2026年10月25日'}),
  title:m(lang,{it:'Podii e record della 40ª edizione',en:'Podiums and records from the 40th edition',de:'Podien und Rekorde der 40. Ausgabe',fr:'Podiums et records de la 40e édition',es:'Podios y récords de la 40.ª edición',zh:'第40届赛事领奖台与纪录'}),
  intro:m(lang,{it:'I principali risultati pubblicati dall’organizzatore per 42K, 21K e 10K.',en:'Key results published by the organiser for the 42K, 21K and 10K.',de:'Die wichtigsten vom Veranstalter veröffentlichten Ergebnisse über 42K, 21K und 10K.',fr:'Les principaux résultats publiés par l’organisateur pour les 42K, 21K et 10K.',es:'Principales resultados publicados por el organizador para 42K, 21K y 10K.',zh:'赛事主办方公布的42K、21K和10K主要成绩。'}),
  blocks:resultBlocks(lang),
  note:m(lang,{it:'Peter Kwemoi Ndorobo ha stabilito il nuovo record della Venicemarathon; Hicham Boufars e Riccardo Mugnosso hanno firmato nuovi record di percorso rispettivamente nella 21K e nella 10K.',en:'Peter Kwemoi Ndorobo set a new Venicemarathon event record; Hicham Boufars and Riccardo Mugnosso set new course records in the 21K and 10K respectively.',de:'Peter Kwemoi Ndorobo stellte einen neuen Venicemarathon-Veranstaltungsrekord auf; Hicham Boufars und Riccardo Mugnosso erzielten neue Streckenrekorde über 21K beziehungsweise 10K.',fr:'Peter Kwemoi Ndorobo a établi un nouveau record de la Venicemarathon ; Hicham Boufars et Riccardo Mugnosso ont signé de nouveaux records de parcours respectivement sur 21K et 10K.',es:'Peter Kwemoi Ndorobo estableció un nuevo récord de la Venicemarathon; Hicham Boufars y Riccardo Mugnosso lograron nuevos récords de recorrido en 21K y 10K respectivamente.',zh:'Peter Kwemoi Ndorobo 刷新 Venicemarathon 赛事纪录；Hicham Boufars 与 Riccardo Mugnosso 分别刷新21K和10K赛道纪录。'})
 };

 item.tip=m(lang,{
  it:'Archivio 2026: percorso, Expo, navette e modifiche alla viabilità riportati in questa pagina si riferiscono all’edizione del 25 ottobre 2026. Per una futura edizione usa sempre le comunicazioni aggiornate dell’organizzatore.',
  en:'2026 archive: route, Expo, shuttles and traffic information on this page refer to the 25 October 2026 edition. For a future edition, always use the organiser’s latest information.',
  de:'Archiv 2026: Strecke, Expo, Shuttle- und Verkehrsinformationen auf dieser Seite beziehen sich auf die Ausgabe vom 25. Oktober 2026. Für künftige Ausgaben gelten immer die aktuellen Veranstalterangaben.',
  fr:'Archive 2026 : le parcours, l’Expo, les navettes et les informations de circulation de cette page concernent l’édition du 25 octobre 2026. Pour une prochaine édition, consultez toujours les informations actualisées de l’organisateur.',
  es:'Archivo 2026: el recorrido, la Expo, las lanzaderas y la información de tráfico de esta página corresponden a la edición del 25 de octubre de 2026. Para futuras ediciones, consulta siempre la información actualizada del organizador.',
  zh:'2026赛事存档：本页的赛道、Expo、接驳车和交通调整均对应2026年10月25日这一届。未来赛事请始终以主办方最新公告为准。'
 });

 addSectionLink(item,0,'https://www.venicemarathon.it/it/rassegna-stampa/156-b-2026/157-a-2026/1990-peter-kwemoi-vince-la-40-wizz-air-venicemarathon-con-il-nuovo-record-di-2h0731',
  m(lang,{it:'Risultati completi: ',en:'Full results: ',de:'Vollständige Ergebnisse: ',fr:'Résultats complets : ',es:'Resultados completos: ',zh:'完整成绩：'}),
  m(lang,{it:'comunicato ufficiale Venicemarathon',en:'official Venicemarathon report',de:'offizieller Venicemarathon-Bericht',fr:'communiqué officiel Venicemarathon',es:'comunicado oficial de Venicemarathon',zh:'Venicemarathon 官方赛后公告'})
 );
 addSectionLink(item,sections.length-1,'https://www.venicemarathon.it/it/rassegna-stampa/156-b-2026/157-a-2026/1986-inaugurato-il-35-exposport-venicemarathon-village-al-parco-san-giuliano-di-mestre',
  m(lang,{it:'Condizioni comunicate dall’organizzatore: ',en:'Organiser’s published conditions: ',de:'Vom Veranstalter veröffentlichte Bedingungen: ',fr:'Conditions publiées par l’organisateur : ',es:'Condiciones publicadas por el organizador: ',zh:'主办方公布的条件：'}),
  'Exposport Venicemarathon Village'
 );

 item.dateModified='2026-10-27';
}
