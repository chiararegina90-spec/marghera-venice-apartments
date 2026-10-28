import type {EventArticle,EventLang} from './journal-events-2026';

const m=(lang:EventLang,v:Record<EventLang,string>)=>v[lang];

function insertSection(item:EventArticle,index:number,title:string,text:string,link:{text:string;label:string;href:string}){
  item.sectionLinks=(item.sectionLinks||[]).map(x=>x.section>=index?{...x,section:x.section+1}:x);
  item.sections=[...(item.sections||[]).slice(0,index),[title,text],...(item.sections||[]).slice(index)];
  item.sectionLinks=[...(item.sectionLinks||[]),{section:index,...link,tail:'.'}];
}

export function applyJournalCatchup20261020(item:EventArticle,lang:EventLang,slug:string){
  if(!item)return;

  if(slug==='halloween-venezia-2026'){
    const title=m(lang,{
      it:'30 ottobre: servizi ACTV regolari dopo la precettazione',
      en:'30 October: ACTV services operating normally after the injunction',
      de:'30. Oktober: ACTV-Verkehr nach Anordnung regulär',
      fr:'30 octobre : services ACTV réguliers après la réquisition',
      es:'30 de octubre: servicios ACTV regulares tras la orden ministerial',
      zh:'10月30日：经政府命令后 ACTV 公共交通按正常计划运行'
    });
    const text=m(lang,{
      it:'Aggiornamento del 28 ottobre 2026: AVM/Actv comunica che, dopo l’intervento della Commissione di Garanzia e l’ordinanza di precettazione del Ministero delle Infrastrutture e dei Trasporti, i servizi di trasporto pubblico locale di navigazione, autobus, tram e People Mover sono confermati come regolari per venerdì 30 ottobre. Non valgono quindi più le precedenti fasce di garanzia pubblicate per lo sciopero. AVM/Actv precisa però che non si possono escludere disservizi legati a eventuali adesioni individuali. Rimane invece confermato lo sciopero del personale AVM e VeLa. Per chi partecipa agli eventi di Halloween del 30 ottobre, il trasporto pubblico di linea è dunque previsto con servizio ordinario, ma conviene comunque controllare gli aggiornamenti AVM/Actv poco prima di partire.',
      en:'Update of 28 October 2026: AVM/Actv states that, following action by the Strike Guarantee Commission and the Ministry of Infrastructure and Transport injunction, local public transport services — waterbuses, buses, trams and the People Mover — are confirmed to operate normally on Friday 30 October. The previously published strike guarantee windows therefore no longer apply. AVM/Actv nevertheless warns that some disruption cannot be ruled out if individual staff members decide to join the protest. The strike remains confirmed for AVM and VeLa staff. For Halloween events on 30 October, scheduled public transport is therefore expected to run normally, but checking the latest AVM/Actv updates shortly before travelling is still advisable.',
      de:'Aktualisierung vom 28. Oktober 2026: AVM/Actv teilt mit, dass nach dem Eingreifen der Streikgarantie-Kommission und der Anordnung des Ministeriums für Infrastruktur und Verkehr der öffentliche Nahverkehr am Freitag, 30. Oktober, regulär verkehren soll. Dies gilt für Schifffahrt, Busse, Straßenbahnen und People Mover; die zuvor veröffentlichten Garantiezeiten für den Streik sind damit nicht mehr maßgeblich. AVM/Actv weist jedoch darauf hin, dass einzelne Beeinträchtigungen durch individuelle Streikteilnahme nicht ausgeschlossen werden können. Der Streik des Personals von AVM und VeLa bleibt hingegen bestätigt. Für Halloween-Veranstaltungen am 30. Oktober ist der Linienverkehr somit regulär vorgesehen; kurz vor der Fahrt sollten dennoch die aktuellen AVM/Actv-Hinweise geprüft werden.',
      fr:'Mise à jour du 28 octobre 2026 : AVM/Actv indique qu’après l’intervention de la Commission de garantie et l’ordonnance de réquisition du ministère des Infrastructures et des Transports, les services de transport public local — navigation, bus, tramways et People Mover — sont confirmés comme réguliers pour le vendredi 30 octobre. Les anciennes plages de service garanti publiées pour la grève ne s’appliquent donc plus. AVM/Actv précise toutefois que des perturbations liées à d’éventuelles adhésions individuelles ne peuvent être totalement exclues. La grève reste en revanche confirmée pour le personnel AVM et VeLa. Pour les événements d’Halloween du 30 octobre, le transport public régulier est donc prévu normalement, mais il reste prudent de consulter les dernières informations AVM/Actv avant de partir.',
      es:'Actualización del 28 de octubre de 2026: AVM/Actv informa de que, tras la intervención de la Comisión de Garantía y la orden ministerial de servicios obligatorios del Ministerio de Infraestructuras y Transportes, los servicios de transporte público local — navegación, autobuses, tranvías y People Mover — quedan confirmados como regulares para el viernes 30 de octubre. Por tanto, ya no se aplican las anteriores franjas de garantía publicadas para la huelga. AVM/Actv advierte, no obstante, de que no pueden descartarse incidencias debidas a posibles adhesiones individuales. La huelga sí permanece confirmada para el personal de AVM y VeLa. Para los eventos de Halloween del 30 de octubre, el transporte público de línea está previsto con servicio normal, aunque sigue siendo recomendable consultar las últimas actualizaciones de AVM/Actv antes de salir.',
      zh:'2026年10月28日更新：AVM/Actv 表示，在罢工保障委员会介入以及意大利基础设施与交通部发布强制维持服务命令后，10月30日星期五的公共交通将按正常计划运行，包括水上巴士、公交车、有轨电车和 People Mover。因此，之前针对罢工公布的保障时段已不再适用。不过 AVM/Actv 同时提醒，若个别员工自行参加抗议，仍不能完全排除临时服务受影响的可能。AVM 和 VeLa 员工的罢工则仍然确认。参加10月30日万圣节活动时，可按正常公共交通计划出行，但出发前仍建议查看 AVM/Actv 的最新通知。'
    });
    if(!(item.sections||[]).some(([a])=>a===title)){
      const target=m(lang,{it:'Come muoversi e dove soggiornare a Marghera',en:'Getting around and staying in Marghera',de:'Anreise und Unterkunft in Marghera',fr:'Se déplacer et séjourner à Marghera',es:'Cómo moverse y dónde alojarse en Marghera',zh:'从 Marghera 出发与住宿安排'});
      const found=(item.sections||[]).findIndex(([a])=>a===target);
      const index=found>=0?found:(item.sections||[]).length;
      insertSection(item,index,title,text,{
        text:m(lang,{it:'Aggiornamenti ufficiali: ',en:'Official updates: ',de:'Offizielle Updates: ',fr:'Mises à jour officielles : ',es:'Actualizaciones oficiales: ',zh:'官方更新：'}),
        label:'AVM/Actv Venezia',
        href:'https://x.com/muoversivenezia'
      });
    }
    item.dateModified='2026-10-28';
  }

  if(slug==='venicemarathon-2026'){
    const title=m(lang,{
      it:'25 ottobre: attenzione al cambio dell’ora',
      en:'25 October: remember the clock change',
      de:'25. Oktober: Zeitumstellung beachten',
      fr:'25 octobre : attention au changement d’heure',
      es:'25 de octubre: atención al cambio de hora',
      zh:'10月25日：请注意冬令时切换'
    });
    const text=m(lang,{
      it:'La Venicemarathon 2026 si svolge domenica 25 ottobre, nella notte in cui termina l’ora legale. Tra sabato 24 e domenica 25 ottobre, alle 03:00, gli orologi tornano alle 02:00: la notte dura un’ora in più. Se devi partire molto presto, controlla sveglia, telefono e orari dei trasferimenti. Il cambio dell’ora non modifica gli orari ufficiali di partenza delle gare. ACTV comunica che le corse previste tra le 02:00 e le 03:00 vengono ripetute sulle linee di navigazione N, 11, 14, Notturno Murano e Notturno Laguna Nord; nella stessa fascia vengono ripetute anche le partenze del servizio automobilistico del Lido. L’avviso non riguarda automaticamente tutte le linee ACTV e non implica modifiche agli autobus 6 e 6L di Marghera. Per i collegamenti notturni consulta l’avviso ufficiale ACTV.',
      en:'Venicemarathon 2026 takes place on Sunday 25 October, on the night daylight saving time ends. Between Saturday 24 and Sunday 25 October, at 03:00 the clocks go back to 02:00, making the night one hour longer. If you need to leave very early, check your alarm, phone and transfer times. The clock change does not alter the official race start times. ACTV states that scheduled runs between 02:00 and 03:00 will be repeated on waterbus lines N, 11 and 14, Notturno Murano and Notturno Laguna Nord; departures on the Lido road service are also repeated in the same period. The notice does not automatically apply to every ACTV line and does not imply changes to Marghera buses 6 or 6L. Check the official ACTV notice for overnight connections.',
      de:'Der Venicemarathon 2026 findet am Sonntag, 25. Oktober, in der Nacht der Umstellung von Sommer- auf Winterzeit statt. In der Nacht von Samstag, 24., auf Sonntag, 25. Oktober, werden die Uhren um 03:00 Uhr auf 02:00 Uhr zurückgestellt; die Nacht ist dadurch eine Stunde länger. Wer sehr früh aufbrechen muss, sollte Wecker, Telefon und Transferzeiten prüfen. Die Zeitumstellung ändert die offiziellen Startzeiten der Rennen nicht. ACTV teilt mit, dass die zwischen 02:00 und 03:00 Uhr vorgesehenen Fahrten der Schifffahrtslinien N, 11 und 14 sowie Notturno Murano und Notturno Laguna Nord wiederholt werden; auch die Abfahrten des Straßenverkehrs auf dem Lido werden in diesem Zeitraum wiederholt. Der Hinweis gilt nicht automatisch für alle ACTV-Linien und bedeutet keine Änderung der Buslinien 6 und 6L in Marghera. Für Nachtverbindungen bitte den offiziellen ACTV-Hinweis prüfen.',
      fr:'La Venicemarathon 2026 a lieu le dimanche 25 octobre, dans la nuit où se termine l’heure d’été. Dans la nuit du samedi 24 au dimanche 25 octobre, à 03:00, les horloges reviennent à 02:00 : la nuit dure donc une heure de plus. Si vous devez partir très tôt, vérifiez réveil, téléphone et horaires des transferts. Le changement d’heure ne modifie pas les heures officielles de départ des courses. ACTV indique que les courses prévues entre 02:00 et 03:00 sont répétées sur les lignes de navigation N, 11 et 14, Notturno Murano et Notturno Laguna Nord ; les départs du service routier du Lido sont eux aussi répétés dans cette même plage. Cet avis ne s’applique pas automatiquement à toutes les lignes ACTV et n’implique aucune modification des bus 6 et 6L de Marghera. Pour les liaisons nocturnes, consultez l’avis officiel ACTV.',
      es:'La Venicemarathon 2026 se celebra el domingo 25 de octubre, la noche en que termina el horario de verano. Entre el sábado 24 y el domingo 25 de octubre, a las 03:00 los relojes vuelven a las 02:00, por lo que la noche dura una hora más. Si tienes que salir muy temprano, comprueba la alarma, el teléfono y los horarios de los traslados. El cambio de hora no modifica los horarios oficiales de salida de las carreras. ACTV comunica que se repetirán las salidas previstas entre las 02:00 y las 03:00 de las líneas de navegación N, 11 y 14, Notturno Murano y Notturno Laguna Nord; también se repetirán las salidas del servicio de autobuses del Lido en la misma franja. El aviso no se aplica automáticamente a todas las líneas ACTV ni implica cambios en los autobuses 6 y 6L de Marghera. Para los enlaces nocturnos, consulta el aviso oficial de ACTV.',
      zh:'2026 Venicemarathon 于10月25日星期日举行，恰逢夏令时结束的夜晚。10月24日星期六至25日星期日之间，03:00 时钟将拨回 02:00，因此这一夜会多出一小时。如果需要很早出发，请检查闹钟、手机和接驳时间。时钟调整并不意味着比赛官方出发时间发生变化。ACTV 公告说明，水上交通 N、11、14、Notturno Murano 和 Notturno Laguna Nord 线路原定 02:00–03:00 之间的班次会重复运行；Lido 的道路公交服务在同一时段内的班次也会重复。该公告并不自动适用于所有 ACTV 线路，也不表示 Marghera 的 6 路和 6L 路公交有变化。夜间出行请以 ACTV 官方公告为准。'
    });
    if(!(item.sections||[]).some(([a])=>a===title)){
      const practical=m(lang,{it:'Informazioni pratiche per il weekend di gara',en:'Practical information for race weekend',de:'Praktische Hinweise für das Rennwochenende',fr:'Informations pratiques pour le week-end de course',es:'Información práctica para el fin de semana de carrera',zh:'比赛周末实用信息'});
      const found=(item.sections||[]).findIndex(([a])=>a===practical);
      const index=found>=0?found+1:(item.sections||[]).length;
      insertSection(item,index,title,text,{
        text:m(lang,{it:'Avviso ACTV: ',en:'ACTV notice: ',de:'ACTV-Hinweis: ',fr:'Avis ACTV : ',es:'Aviso ACTV: ',zh:'ACTV 公告：'}),
        label:m(lang,{it:'introduzione dell’ora solare',en:'switch to standard time',de:'Umstellung auf Winterzeit',fr:'passage à l’heure d’hiver',es:'introducción del horario de invierno',zh:'切换至冬令时'}),
        href:'https://actv.avmspa.it/it/content/servizio-di-navigazione-introduzione-ora-solare'
      });
    }
    item.dateModified='2026-10-20';
  }
}
