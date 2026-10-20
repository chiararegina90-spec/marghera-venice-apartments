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
      it:'30 ottobre: attenzione allo sciopero ACTV',
      en:'30 October: ACTV strike notice',
      de:'30. Oktober: Hinweis zum ACTV-Streik',
      fr:'30 octobre : attention à la grève ACTV',
      es:'30 de octubre: atención a la huelga de ACTV',
      zh:'10月30日：请注意 ACTV 罢工'
    });
    const text=m(lang,{
      it:'Venerdì 30 ottobre 2026 AVM/ACTV aderisce allo sciopero generale nazionale USB di 24 ore. Potranno essere interessati autobus, tram, vaporetti, People Mover, parcheggi in struttura AVM, rete vendita Venezia Unica e servizi di supporto. Per autobus e tram sono garantite le corse in partenza dai capolinea dalle 06:00 alle 08:59 e dalle 16:30 alle 19:29: le fasce riguardano la partenza dal capolinea e non garantiscono automaticamente ogni passaggio alla singola fermata. Per la navigazione valgono servizi minimi specifici; alcune corse di nave traghetto linea 17 sono riservate ai possessori di tessera IMOB con prenotazione obbligatoria. Lo sciopero non significa che tutte le corse saranno cancellate: la riduzione effettiva dipenderà dall’adesione del personale. “Questo è Halloween” resta annunciato alle 17:00, ma la fascia garantita non permette di promettere ogni collegamento né il ritorno dopo il laboratorio; per le iniziative serali del 30 ottobre verifica in anticipo anche il viaggio di ritorno. I parcheggi privati MVA non sono parcheggi AVM e non sono coinvolti nello sciopero. L’avviso riguarda il 30 ottobre e non va esteso automaticamente agli eventi del 31.',
      en:'On Friday 30 October 2026 AVM/ACTV is taking part in the 24-hour national general strike called by USB. Buses, trams, waterbuses, the People Mover, AVM-managed car parks, the Venezia Unica sales network and support services may be affected. For buses and trams, departures from terminals are guaranteed from 06:00 to 08:59 and from 16:30 to 19:29; these windows refer to departures from the terminal and do not automatically guarantee every vehicle at every stop. Navigation has separate minimum-service arrangements; some line 17 ferry runs are reserved for IMOB card holders with compulsory booking. The strike does not mean every service will be cancelled: the actual reduction depends on staff participation. “Questo è Halloween” remains scheduled for 5:00 pm, but the guarantee window does not promise every connection or the return trip after the workshop; for evening events on 30 October, check the return journey in advance. MVA private parking is not managed by AVM and is not involved in the strike. This notice applies to 30 October and should not automatically be extended to events on the 31st.',
      de:'Am Freitag, 30. Oktober 2026, beteiligt sich AVM/ACTV am 24-stündigen landesweiten Generalstreik der USB. Betroffen sein können Busse, Straßenbahnen, Vaporetti, People Mover, von AVM betriebene Parkhäuser, das Venezia-Unica-Verkaufsnetz und unterstützende Dienste. Bei Bus und Tram sind Abfahrten von den Endhaltestellen von 06:00 bis 08:59 Uhr und von 16:30 bis 19:29 Uhr garantiert; diese Zeiten beziehen sich auf die Abfahrt am Endpunkt und garantieren nicht automatisch jede Fahrt an jeder Haltestelle. Für die Schifffahrt gelten eigene Mindestdienste; einige Fährfahrten der Linie 17 sind Inhabern einer IMOB-Karte vorbehalten und reservierungspflichtig. Der Streik bedeutet nicht, dass alle Fahrten ausfallen: Die tatsächlichen Einschränkungen hängen von der Beteiligung des Personals ab. „Questo è Halloween“ bleibt für 17:00 Uhr angekündigt, doch die Garantiezeit verspricht weder jede Verbindung noch die Rückfahrt nach dem Workshop. Für Abendveranstaltungen am 30. Oktober sollte auch die Rückfahrt vorab geprüft werden. Die privaten MVA-Parkplätze werden nicht von AVM betrieben und sind nicht vom Streik betroffen. Der Hinweis gilt für den 30. Oktober und nicht automatisch für Veranstaltungen am 31.',
      fr:'Vendredi 30 octobre 2026, AVM/ACTV participe à la grève générale nationale de 24 heures appelée par USB. Bus, tramways, vaporetti, People Mover, parkings en ouvrage gérés par AVM, réseau de vente Venezia Unica et services d’assistance peuvent être concernés. Pour les bus et tramways, les départs depuis les terminus sont garantis de 06:00 à 08:59 et de 16:30 à 19:29 ; ces créneaux concernent les départs des terminus et ne garantissent pas automatiquement chaque passage à chaque arrêt. Pour la navigation, des services minimums spécifiques s’appliquent ; certaines traversées de la ligne ferry 17 sont réservées aux titulaires d’une carte IMOB avec réservation obligatoire. La grève ne signifie pas que toutes les courses seront supprimées : les réductions dépendront de la participation du personnel. « Questo è Halloween » reste annoncé à 17:00, mais la plage garantie ne permet pas de promettre chaque liaison ni le retour après l’atelier. Pour les événements du soir du 30 octobre, vérifiez aussi le trajet retour à l’avance. Les parkings privés MVA ne sont pas gérés par AVM et ne sont pas concernés par la grève. L’avis concerne le 30 octobre et ne doit pas être automatiquement étendu aux événements du 31.',
      es:'El viernes 30 de octubre de 2026 AVM/ACTV se adhiere a la huelga general nacional de 24 horas convocada por USB. Pueden verse afectados autobuses, tranvías, vaporetti, People Mover, aparcamientos en estructura gestionados por AVM, la red de venta Venezia Unica y servicios de apoyo. Para autobuses y tranvías se garantizan las salidas desde las terminales entre las 06:00 y las 08:59 y entre las 16:30 y las 19:29; estas franjas se refieren a la salida desde la terminal y no garantizan automáticamente cada paso por cada parada. Para la navegación se aplican servicios mínimos específicos; algunas salidas del ferry de la línea 17 están reservadas a titulares de tarjeta IMOB con reserva obligatoria. La huelga no significa que se cancelen todos los servicios: la reducción real dependerá de la adhesión del personal. “Questo è Halloween” sigue anunciado a las 17:00, pero la franja garantizada no asegura todas las conexiones ni el regreso después del taller. Para eventos nocturnos del 30 de octubre conviene comprobar también el viaje de vuelta. Los aparcamientos privados MVA no son aparcamientos AVM y no están afectados por la huelga. El aviso se refiere al 30 de octubre y no debe extenderse automáticamente a los eventos del 31.',
      zh:'2026年10月30日星期五，AVM/ACTV 将参加 USB 发起的24小时全国总罢工。公交车、有轨电车、水上巴士、People Mover、AVM 管理的停车楼、Venezia Unica 售票网络及相关支持服务都可能受到影响。公交和有轨电车保证从总站发出的班次时间为 06:00–08:59 和 16:30–19:29；这些时段指车辆从总站出发的时间，并不自动保证每一站都有所有班次通过。水上交通采用单独的最低保障服务；17号渡轮的部分班次仅供持 IMOB 卡并提前预约的乘客使用。罢工并不等于所有班次都会取消，实际减班程度取决于员工参与情况。“Questo è Halloween”目前仍安排在17:00，但保障时段不能保证每一条连接或活动结束后的返程；参加10月30日晚间活动时，也应提前核对回程交通。MVA 的私人停车位不属于 AVM 停车设施，不受此次罢工影响。本提示仅针对10月30日，不应自动延伸到31日的活动。'
    });
    if(!(item.sections||[]).some(([a])=>a===title)){
      const target=m(lang,{it:'Come muoversi e dove soggiornare a Marghera',en:'Getting around and staying in Marghera',de:'Anreise und Unterkunft in Marghera',fr:'Se déplacer et séjourner à Marghera',es:'Cómo moverse y dónde alojarse en Marghera',zh:'从 Marghera 出发与住宿安排'});
      const found=(item.sections||[]).findIndex(([a])=>a===target);
      const index=found>=0?found:(item.sections||[]).length;
      insertSection(item,index,title,text,{
        text:m(lang,{it:'Avviso ufficiale: ',en:'Official notice: ',de:'Offizieller Hinweis: ',fr:'Avis officiel : ',es:'Aviso oficial: ',zh:'官方通知：'}),
        label:'AVM/ACTV – 30 ottobre 2026',
        href:'https://actv.avmspa.it/it/content/avmactv-informa-sciopero-generale-nazionale-24h-30-ottobre-2026'
      });
    }
    item.dateModified='2026-10-20';
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
