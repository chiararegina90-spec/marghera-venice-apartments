import type {EventArticle,EventLang} from './journal-events-2026';

const m=(lang:EventLang,v:Record<EventLang,string>)=>v[lang];

function insertSection(item:EventArticle,index:number,title:string,text:string){
  item.sectionLinks=(item.sectionLinks||[]).map(link=>link.section>=index?{...link,section:link.section+1}:link);
  item.sections=[...(item.sections||[]).slice(0,index),[title,text],...(item.sections||[]).slice(index)];
}

const trainNotice='https://www.venicemarathon.it/it/rassegna-stampa/156-b-2026/157-a-2026/1976-modifiche-alla-viabilita-e-orari-dei-treni';
const info42='https://venicemarathon.it/it/42k/informazioni42k';
const info21='https://venicemarathon.it/it/21k/informazioni21k';
const info10='https://venicemarathon.it/it/10k/informazioni10k';

export function applyJournalCatchup20261023(item:EventArticle,lang:EventLang,slug:string){
  if(!item||slug!=='venicemarathon-2026')return;

  const expoIndex=(item.sections||[]).findIndex(([title])=>title.toLowerCase().includes('exposport'));
  if(expoIndex>=0){
    const expoExtra=m(lang,{
      it:' Per raggiungere Exposport venerdì 23 e sabato 24 ottobre, l’organizzazione segnala inoltre un servizio navetta nella fascia 09:00–19:30. Da Mestre il riferimento è il Leonardo Royal Hotel Mestre, circa 100 metri dalla stazione ferroviaria; da Venezia la partenza è presso l’Hotel Hampton by Hilton, di fronte alla fermata ACTV Tronchetto. La fonte indica la fascia di servizio, non una frequenza delle singole corse: verifica le modalità operative sul sito ufficiale. Per chi arriva in auto, nelle pagine pratiche della gara l’organizzazione indica i parcheggi Porta Gialla e MARIVE. Segui la segnaletica e le indicazioni del personale presente.',
      en:' To reach Exposport on Friday 23 and Saturday 24 October, the organiser also lists a shuttle service operating in the 09:00–19:30 time window. From Mestre, the reference point is Leonardo Royal Hotel Mestre, about 100 metres from the railway station; from Venice, departure is from Hotel Hampton by Hilton, opposite the ACTV Tronchetto stop. The source gives the service window, not a frequency for individual departures, so check the official website for operating details. For visitors arriving by car, the race practical-information pages indicate Porta Gialla and MARIVE car parks. Follow on-site signs and staff instructions.',
      de:' Für die Anfahrt zum Exposport am Freitag, 23., und Samstag, 24. Oktober nennt der Veranstalter außerdem einen Shuttle-Service im Zeitfenster 09:00–19:30 Uhr. In Mestre ist der Bezugspunkt das Leonardo Royal Hotel Mestre, etwa 100 Meter vom Bahnhof entfernt; in Venedig startet der Shuttle beim Hotel Hampton by Hilton gegenüber der ACTV-Haltestelle Tronchetto. Die Quelle nennt das Service-Zeitfenster, nicht die Frequenz einzelner Fahrten; prüfen Sie daher die aktuellen Hinweise auf der offiziellen Website. Für die Anreise mit dem Auto nennen die praktischen Renninformationen die Parkplätze Porta Gialla und MARIVE. Folgen Sie der Beschilderung und den Anweisungen des Personals vor Ort.',
      fr:' Pour rejoindre Exposport le vendredi 23 et le samedi 24 octobre, l’organisateur indique également un service de navette dans la plage 09:00–19:30. Depuis Mestre, le point de référence est le Leonardo Royal Hotel Mestre, à environ 100 mètres de la gare ; depuis Venise, le départ se fait à l’Hotel Hampton by Hilton, en face de l’arrêt ACTV Tronchetto. La source indique une plage de service, pas la fréquence des départs : vérifiez les modalités sur le site officiel. Pour les visiteurs arrivant en voiture, les pages pratiques de la course indiquent les parkings Porta Gialla et MARIVE. Suivez la signalétique et les indications du personnel sur place.',
      es:' Para llegar a Exposport el viernes 23 y el sábado 24 de octubre, la organización indica además un servicio de lanzadera en la franja 09:00–19:30. Desde Mestre, el punto de referencia es el Leonardo Royal Hotel Mestre, a unos 100 metros de la estación ferroviaria; desde Venecia, la salida es desde el Hotel Hampton by Hilton, frente a la parada ACTV Tronchetto. La fuente indica la franja de servicio, no la frecuencia de cada salida: consulta las instrucciones operativas en la web oficial. Para quienes lleguen en coche, las páginas prácticas de la carrera indican los aparcamientos Porta Gialla y MARIVE. Sigue la señalización y las indicaciones del personal.',
      zh:' 10月23日星期五和24日星期六前往 Exposport 时，主办方还提供09:00–19:30时段的接驳服务。Mestre 的参考上车点为 Leonardo Royal Hotel Mestre，距离 Venezia Mestre 火车站约100米；从威尼斯出发的参考点为 Hotel Hampton by Hilton，位于 ACTV Tronchetto 站对面。官方页面公布的是服务时段，并未说明每班车的固定频率，因此出发前请查看官网的实际运营说明。驾车前往时，赛事实用信息页面目前指向 Porta Gialla 和 MARIVE 停车场，请遵循现场标识和工作人员指引。'
    });
    const [title,text]=item.sections[expoIndex];
    const cleaned=text
      .replace(/Porta Gialla e Porta Rossa/g,'Porta Gialla e MARIVE')
      .replace(/Porta Gialla and Porta Rossa/g,'Porta Gialla and MARIVE')
      .replace(/Porta Gialla und Porta Rossa/g,'Porta Gialla und MARIVE')
      .replace(/Porta Gialla oder Porta Rossa/g,'Porta Gialla und MARIVE')
      .replace(/Porta Gialla et Porta Rossa/g,'Porta Gialla et MARIVE')
      .replace(/Porta Gialla ou Porta Rossa/g,'Porta Gialla et MARIVE')
      .replace(/Porta Gialla y Porta Rossa/g,'Porta Gialla y MARIVE')
      .replace(/Porta Gialla o Porta Rossa/g,'Porta Gialla y MARIVE')
      .replace(/Porta Gialla 和 Porta Rossa/g,'Porta Gialla 和 MARIVE')
      .replace(/Porta Gialla 或 Porta Rossa/g,'Porta Gialla 和 MARIVE');
    if(!cleaned.includes('Leonardo Royal Hotel Mestre')){
      item.sections=item.sections.map(([sectionTitle,sectionText],i)=>i===expoIndex?[sectionTitle,cleaned+expoExtra] as const:[sectionTitle,sectionText] as const);
    }else if(cleaned!==text){
      item.sections=item.sections.map(([sectionTitle,sectionText],i)=>i===expoIndex?[sectionTitle,cleaned] as const:[sectionTitle,sectionText] as const);
    }
  }

  const roadTitle=m(lang,{
    it:'25 ottobre: chiusure stradali e accessi a Venezia',
    en:'25 October: road closures and access to Venice',
    de:'25. Oktober: Straßensperren und Zufahrt nach Venedig',
    fr:'25 octobre : fermetures de routes et accès à Venise',
    es:'25 de octubre: cierres de carreteras y accesos a Venecia',
    zh:'10月25日：道路封闭与前往威尼斯的交通限制'
  });

  const trainTitle=m(lang,{
    it:'25 ottobre: treni regionali con orari modificati',
    en:'25 October: revised regional train times',
    de:'25. Oktober: geänderte Regionalzugzeiten',
    fr:'25 octobre : horaires modifiés de trains régionaux',
    es:'25 de octubre: horarios modificados de trenes regionales',
    zh:'10月25日：部分区域列车调整时刻'
  });
  const trainText=m(lang,{
    it:'Per facilitare l’arrivo degli atleti alla 40ª Venicemarathon, Trenitalia Direzione Regionale Veneto ha modificato gli orari di tre treni regionali diretti a Venezia Mestre per domenica 25 ottobre 2026. Il Regionale 23017 parte da Vicenza alle 05:59 e arriva a Venezia Mestre alle 06:56; il Regionale 23015 parte da Conegliano alle 06:21 e arriva a Venezia Mestre alle 07:06; il Regionale 23026 parte da Portogruaro alle 06:03 e arriva a Venezia Mestre alle 07:02. Sono modifiche specifiche per il giorno della gara e non orari ferroviari permanenti. Prima di partire verifica comunque il collegamento sui canali ferroviari ufficiali e considera il tempo necessario per raggiungere le navette.',
    en:'To help athletes reach the 40th Venicemarathon, Trenitalia Veneto Regional Directorate has adjusted three regional trains to Venezia Mestre for Sunday 25 October 2026. Regional 23017 leaves Vicenza at 05:59 and arrives at Venezia Mestre at 06:56; Regional 23015 leaves Conegliano at 06:21 and arrives at Venezia Mestre at 07:06; Regional 23026 leaves Portogruaro at 06:03 and arrives at Venezia Mestre at 07:02. These are race-day-specific changes, not permanent railway times. Check your connection again through official railway channels before travelling and allow enough time to reach the race shuttles.',
    de:'Um die Anreise der Athleten zur 40. Venicemarathon zu erleichtern, hat Trenitalia Direzione Regionale Veneto am Sonntag, 25. Oktober 2026, die Zeiten von drei Regionalzügen nach Venezia Mestre angepasst. Regionale 23017 fährt um 05:59 Uhr in Vicenza ab und erreicht Venezia Mestre um 06:56 Uhr; Regionale 23015 fährt um 06:21 Uhr in Conegliano ab und kommt um 07:06 Uhr in Venezia Mestre an; Regionale 23026 fährt um 06:03 Uhr in Portogruaro ab und erreicht Venezia Mestre um 07:02 Uhr. Diese Änderungen gelten speziell für den Renntag und sind keine dauerhaften Fahrplanzeiten. Prüfen Sie Ihre Verbindung vor der Abfahrt nochmals über die offiziellen Bahnkanäle und planen Sie genügend Zeit für den Weg zu den Renn-Shuttles ein.',
    fr:'Pour faciliter l’arrivée des athlètes à la 40e Venicemarathon, Trenitalia Direzione Regionale Veneto a modifié les horaires de trois trains régionaux vers Venezia Mestre le dimanche 25 octobre 2026. Le Regionale 23017 part de Vicenza à 05:59 et arrive à Venezia Mestre à 06:56 ; le Regionale 23015 part de Conegliano à 06:21 et arrive à Venezia Mestre à 07:06 ; le Regionale 23026 part de Portogruaro à 06:03 et arrive à Venezia Mestre à 07:02. Ces modifications sont propres au jour de la course et ne constituent pas des horaires ferroviaires permanents. Vérifiez votre liaison sur les canaux ferroviaires officiels avant le départ et prévoyez le temps nécessaire pour rejoindre les navettes de la course.',
    es:'Para facilitar la llegada de los atletas a la 40.ª Venicemarathon, Trenitalia Direzione Regionale Veneto ha modificado los horarios de tres trenes regionales con destino Venezia Mestre para el domingo 25 de octubre de 2026. El Regionale 23017 sale de Vicenza a las 05:59 y llega a Venezia Mestre a las 06:56; el Regionale 23015 sale de Conegliano a las 06:21 y llega a Venezia Mestre a las 07:06; el Regionale 23026 sale de Portogruaro a las 06:03 y llega a Venezia Mestre a las 07:02. Son modificaciones específicas del día de la carrera, no horarios ferroviarios permanentes. Antes de viajar, comprueba de nuevo tu conexión en los canales ferroviarios oficiales y deja tiempo suficiente para llegar a las lanzaderas.',
    zh:'为方便运动员参加第40届 Venicemarathon，Trenitalia Direzione Regionale Veneto 对2026年10月25日星期日前往 Venezia Mestre 的三趟区域列车时刻进行了调整。Regionale 23017 于05:59从 Vicenza 出发，06:56到达 Venezia Mestre；Regionale 23015 于06:21从 Conegliano 出发，07:06到达 Venezia Mestre；Regionale 23026 于06:03从 Portogruaro 出发，07:02到达 Venezia Mestre。这些调整仅适用于比赛日，并非长期列车时刻。出发前请再次通过铁路官方渠道确认车次，并预留前往赛事接驳车上车点的时间。'
  });

  let roadIndex=(item.sections||[]).findIndex(([title])=>title===roadTitle);
  if(roadIndex>=0&&!item.sections.some(([title])=>title===trainTitle)){
    insertSection(item,roadIndex+1,trainTitle,trainText);
  }
  const trainIndex=(item.sections||[]).findIndex(([title])=>title===trainTitle);
  if(trainIndex>=0&&!item.sectionLinks?.some(link=>link.section===trainIndex&&link.href===trainNotice)){
    item.sectionLinks=[...(item.sectionLinks||[]),{
      section:trainIndex,
      text:m(lang,{
        it:'Fonte: ',
        en:'Source: ',
        de:'Quelle: ',
        fr:'Source : ',
        es:'Fuente: ',
        zh:'官方来源：'
      }),
      label:m(lang,{
        it:'comunicato Venicemarathon sugli orari dei treni',
        en:'Venicemarathon notice on revised train times',
        de:'Venicemarathon-Mitteilung zu den geänderten Zugzeiten',
        fr:'communiqué Venicemarathon sur les horaires des trains',
        es:'comunicado Venicemarathon sobre los horarios de los trenes',
        zh:'Venicemarathon 列车时刻调整通知'
      }),
      href:trainNotice,
      tail:'.'
    }];
  }

  const shuttleTitle=m(lang,{
    it:'Navette ufficiali per raggiungere le partenze',
    en:'Official shuttles to the race starts',
    de:'Offizielle Shuttles zu den Startbereichen',
    fr:'Navettes officielles vers les départs',
    es:'Lanzaderas oficiales hacia las salidas',
    zh:'前往各组别起点的官方接驳车'
  });
  const shuttleText=m(lang,{
    it:'Le tre distanze hanno punti di partenza e fasce navetta differenti. Gli autobus sono riservati agli atleti iscritti alla rispettiva gara e sono identificati con cartelli che riportano la distanza. Controlla sempre le istruzioni specifiche della tua gara.',
    en:'The three distances have different start areas and shuttle windows. Buses are reserved for athletes registered for the relevant race and are identified by signs showing the race distance. Always check the instructions for your own race.',
    de:'Für die drei Distanzen gelten unterschiedliche Startorte und Shuttle-Zeitfenster. Die Busse sind den für die jeweilige Distanz angemeldeten Athleten vorbehalten und mit Schildern zur Renndistanz gekennzeichnet. Prüfen Sie immer die Hinweise für Ihre eigene Distanz.',
    fr:'Les trois distances ont des zones de départ et des créneaux de navette différents. Les bus sont réservés aux athlètes inscrits à la course correspondante et portent des panneaux indiquant la distance. Vérifiez toujours les consignes propres à votre course.',
    es:'Las tres distancias tienen zonas de salida y franjas de lanzadera diferentes. Los autobuses están reservados a los atletas inscritos en la carrera correspondiente y llevan carteles con la distancia. Consulta siempre las instrucciones específicas de tu prueba.',
    zh:'三个组别的起点和接驳时段不同。接驳巴士仅供相应组别的已报名运动员使用，车辆会通过标牌注明比赛距离。请始终查看自己所参加组别的官方说明。'
  });

  const currentTrainIndex=(item.sections||[]).findIndex(([title])=>title===trainTitle);
  if(currentTrainIndex>=0&&!item.sections.some(([title])=>title===shuttleTitle)){
    insertSection(item,currentTrainIndex+1,shuttleTitle,shuttleText);
  }
  const shuttleIndex=(item.sections||[]).findIndex(([title])=>title===shuttleTitle);
  if(shuttleIndex>=0){
    item.sectionLinks=(item.sectionLinks||[]).filter(link=>!(link.section===shuttleIndex&&[info42,info21,info10].includes(link.href)));
    item.sectionLinks=[
      ...(item.sectionLinks||[]),
      {
        section:shuttleIndex,
        text:m(lang,{
          it:'42K — Villa Pisani, Stra. Da Venezia Mestre: stazione ferroviaria, subito a destra dell’uscita, 06:40–07:20. Da Venezia: Tronchetto, davanti alla fermata del vaporetto, 06:50–07:20. ',
          en:'42K — Villa Pisani, Stra. From Venezia Mestre: railway station, immediately to the right after exiting, 06:40–07:20. From Venice: Tronchetto, in front of the waterbus stop, 06:50–07:20. ',
          de:'42K — Villa Pisani, Stra. Ab Venezia Mestre: Bahnhof, direkt rechts nach dem Ausgang, 06:40–07:20 Uhr. Ab Venedig: Tronchetto, vor der Vaporetto-Haltestelle, 06:50–07:20 Uhr. ',
          fr:'42K — Villa Pisani, Stra. Depuis Venezia Mestre : gare ferroviaire, immédiatement à droite en sortant, 06:40–07:20. Depuis Venise : Tronchetto, devant l’arrêt du vaporetto, 06:50–07:20. ',
          es:'42K — Villa Pisani, Stra. Desde Venezia Mestre: estación ferroviaria, justo a la derecha al salir, 06:40–07:20. Desde Venecia: Tronchetto, frente a la parada del vaporetto, 06:50–07:20. ',
          zh:'42K — 起点为 Villa Pisani, Stra。Venezia Mestre 上车点：火车站出口后立即右转，06:40–07:20；威尼斯上车点：Tronchetto，vaporetto 站前，06:50–07:20。'
        }),
        label:m(lang,{it:'Istruzioni ufficiali 42K',en:'Official 42K instructions',de:'Offizielle 42K-Hinweise',fr:'Instructions officielles 42K',es:'Instrucciones oficiales 42K',zh:'42K 官方说明'}),
        href:info42,
        tail:'.'
      },
      {
        section:shuttleIndex,
        text:m(lang,{
          it:'21K — zona partenza Piazza Ferretto, via San Rocco, Mestre. Da Venezia: Tronchetto, davanti alla fermata del vaporetto, 06:20–07:00. Da Mestre: stazione ferroviaria, zona ex Poste, circa 50 metri a destra uscendo dalla stazione, 06:35–07:15. ',
          en:'21K — start area at Piazza Ferretto, via San Rocco, Mestre. From Venice: Tronchetto, in front of the waterbus stop, 06:20–07:00. From Mestre: railway station, former Post Office area, about 50 metres to the right after exiting, 06:35–07:15. ',
          de:'21K — Startbereich Piazza Ferretto, via San Rocco, Mestre. Ab Venedig: Tronchetto, vor der Vaporetto-Haltestelle, 06:20–07:00 Uhr. Ab Mestre: Bahnhof, Bereich ehemalige Post, etwa 50 Meter rechts nach dem Ausgang, 06:35–07:15 Uhr. ',
          fr:'21K — zone de départ Piazza Ferretto, via San Rocco, Mestre. Depuis Venise : Tronchetto, devant l’arrêt du vaporetto, 06:20–07:00. Depuis Mestre : gare ferroviaire, zone ex Poste, environ 50 mètres à droite en sortant, 06:35–07:15. ',
          es:'21K — zona de salida Piazza Ferretto, via San Rocco, Mestre. Desde Venecia: Tronchetto, frente a la parada del vaporetto, 06:20–07:00. Desde Mestre: estación ferroviaria, zona ex Poste, unos 50 metros a la derecha al salir, 06:35–07:15. ',
          zh:'21K — 起点位于 Mestre 的 Piazza Ferretto / via San Rocco。威尼斯上车点：Tronchetto，vaporetto 站前，06:20–07:00；Mestre 上车点：火车站 ex Poste 区域，出站后右侧约50米，06:35–07:15。'
        }),
        label:m(lang,{it:'Istruzioni ufficiali 21K',en:'Official 21K instructions',de:'Offizielle 21K-Hinweise',fr:'Instructions officielles 21K',es:'Instrucciones oficiales 21K',zh:'21K 官方说明'}),
        href:info21,
        tail:'.'
      },
      {
        section:shuttleIndex,
        text:m(lang,{
          it:'10K — Parco San Giuliano, ingresso Porta Blu. Da Venezia: Tronchetto, davanti alla fermata del vaporetto, 05:50–06:40. Da Mestre: Piazzale Favretti, zona stazione ferroviaria, circa 150 metri a destra uscendo dalla stazione, 05:50–06:50. ',
          en:'10K — San Giuliano Park, Porta Blu entrance. From Venice: Tronchetto, in front of the waterbus stop, 05:50–06:40. From Mestre: Piazzale Favretti, railway-station area, about 150 metres to the right after exiting the station, 05:50–06:50. ',
          de:'10K — Parco San Giuliano, Eingang Porta Blu. Ab Venedig: Tronchetto, vor der Vaporetto-Haltestelle, 05:50–06:40 Uhr. Ab Mestre: Piazzale Favretti im Bahnhofsbereich, etwa 150 Meter rechts nach dem Ausgang, 05:50–06:50 Uhr. ',
          fr:'10K — Parco San Giuliano, entrée Porta Blu. Depuis Venise : Tronchetto, devant l’arrêt du vaporetto, 05:50–06:40. Depuis Mestre : Piazzale Favretti, secteur de la gare, environ 150 mètres à droite en sortant, 05:50–06:50. ',
          es:'10K — Parco San Giuliano, entrada Porta Blu. Desde Venecia: Tronchetto, frente a la parada del vaporetto, 05:50–06:40. Desde Mestre: Piazzale Favretti, zona de la estación ferroviaria, unos 150 metros a la derecha al salir, 05:50–06:50. ',
          zh:'10K — 起点位于 Parco San Giuliano 的 Porta Blu。威尼斯上车点：Tronchetto，vaporetto 站前，05:50–06:40；Mestre 上车点：火车站区域 Piazzale Favretti，出站后右侧约150米，05:50–06:50。'
        }),
        label:m(lang,{it:'Istruzioni ufficiali 10K',en:'Official 10K instructions',de:'Offizielle 10K-Hinweise',fr:'Instructions officielles 10K',es:'Instrucciones oficiales 10K',zh:'10K 官方说明'}),
        href:info10,
        tail:'.'
      }
    ];
  }

  if(item.faq){
    const faqAnswer=m(lang,{
      it:'Venicemarathon prevede navette gratuite riservate agli atleti iscritti alla 42K verso Villa Pisani a Stra. Da Venezia Mestre partono dalla stazione ferroviaria, subito a destra dell’uscita, dalle 06:40 alle 07:20; da Venezia partono da Tronchetto, davanti alla fermata del vaporetto, dalle 06:50 alle 07:20. Gli autobus sono identificati con cartelli 42K. Verifica sempre le istruzioni ufficiali prima della partenza.',
      en:'Venicemarathon provides free shuttles reserved for athletes registered for the 42K to Villa Pisani in Stra. From Venezia Mestre they leave from the railway station, immediately to the right after exiting, from 06:40 to 07:20; from Venice they leave from Tronchetto, in front of the waterbus stop, from 06:50 to 07:20. Buses are marked with 42K signs. Always check the official instructions before leaving.',
      de:'Venicemarathon bietet kostenlose Shuttles ausschließlich für zur 42K angemeldete Athleten nach Villa Pisani in Stra. Ab Venezia Mestre fahren sie vom Bahnhof, direkt rechts nach dem Ausgang, von 06:40 bis 07:20 Uhr; ab Venedig starten sie am Tronchetto vor der Vaporetto-Haltestelle von 06:50 bis 07:20 Uhr. Die Busse sind mit 42K-Schildern gekennzeichnet. Prüfen Sie vor der Abfahrt immer die offiziellen Hinweise.',
      fr:'Venicemarathon prévoit des navettes gratuites réservées aux athlètes inscrits au 42K vers Villa Pisani à Stra. Depuis Venezia Mestre, elles partent de la gare ferroviaire, immédiatement à droite en sortant, de 06:40 à 07:20 ; depuis Venise, elles partent de Tronchetto, devant l’arrêt du vaporetto, de 06:50 à 07:20. Les bus portent des panneaux 42K. Vérifiez toujours les instructions officielles avant de partir.',
      es:'Venicemarathon ofrece lanzaderas gratuitas reservadas a los atletas inscritos en la 42K hacia Villa Pisani, en Stra. Desde Venezia Mestre salen de la estación ferroviaria, justo a la derecha al salir, de 06:40 a 07:20; desde Venecia salen de Tronchetto, frente a la parada del vaporetto, de 06:50 a 07:20. Los autobuses están señalizados con carteles 42K. Consulta siempre las instrucciones oficiales antes de salir.',
      zh:'Venicemarathon 为已报名42K的运动员提供前往 Stra 的 Villa Pisani 的免费接驳车。Venezia Mestre 上车点在火车站出口后立即右转处，运行时段06:40–07:20；威尼斯上车点在 Tronchetto 的 vaporetto 站前，运行时段06:50–07:20。车辆会标有42K标识。出发前请再次查看官方说明。'
    });
    item.faq=item.faq.map(faq=>faq.question.includes('42K')?{...faq,answer:faqAnswer}:faq);
  }

  item.dateModified='2026-10-23';
}
