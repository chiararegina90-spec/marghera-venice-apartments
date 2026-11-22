import {cultureVisitorNotices,type CultureVisitorNotice} from './cultureVisitorNotices';

// Notices are visible through 20 November, expiring on 21 November in Europe/Rome.
export const journalNoticeModifiedDates:Record<string,string>={'venezia-a-novembre':'2026-11-18','biennale-di-venezia':'2026-11-22'};
const caPesaro=cultureVisitorNotices.find(n=>n.key==='ca-pesaro-strike-2026-11-20');
export const journalVisitorNotices:CultureVisitorNotice[]=[
{
  "key": "avm-strike-2026-11-20",
  "placeSlug": "venezia-a-novembre",
  "kind": "visitor-info",
  "start": "2026-11-18",
  "end": "2026-11-20",
  "status": "current",
  "title": {
    "it": "20 novembre: sciopero dei trasporti",
    "en": "20 November: transport strike",
    "de": "20. November: Streik im Nahverkehr",
    "fr": "20 novembre : grève des transports",
    "es": "20 de noviembre: huelga de transporte",
    "zh": "11月20日：公共交通罢工"
  },
  "summary": {
    "it": "Venerdì 20 novembre 2026 è previsto uno sciopero generale nazionale di 24 ore che potrà interessare autobus, tram, vaporetti e altri servizi del gruppo AVM. Sono previsti servizi minimi garantiti. Prima di partire consulta gli orari e i collegamenti garantiti sul sito ufficiale AVM/ACTV.",
    "en": "A 24-hour nationwide general strike is planned for Friday 20 November 2026 and may affect buses, trams, water buses and other AVM Group services. Minimum services are guaranteed. Before travelling, check the timetables and guaranteed connections on the official AVM/ACTV website.",
    "de": "Für Freitag, den 20. November 2026, ist ein landesweiter 24-stündiger Generalstreik angekündigt. Busse, Straßenbahnen, Vaporetti und weitere Dienste der AVM-Gruppe können betroffen sein. Ein Mindestangebot ist gewährleistet. Prüfen Sie vor der Fahrt die Fahrpläne und garantierten Verbindungen auf der offiziellen AVM/ACTV-Website.",
    "fr": "Une grève générale nationale de 24 heures est prévue le vendredi 20 novembre 2026. Elle pourrait affecter les bus, les tramways, les vaporetti et d’autres services du groupe AVM. Un service minimum est garanti. Avant votre départ, consultez les horaires et les liaisons garanties sur le site officiel AVM/ACTV.",
    "es": "El viernes 20 de noviembre de 2026 está prevista una huelga general nacional de 24 horas que podría afectar a autobuses, tranvías, vaporetti y otros servicios del grupo AVM. Se garantizan servicios mínimos. Antes de salir, consulta los horarios y las conexiones garantizadas en la web oficial de AVM/ACTV.",
    "zh": "2026年11月20日星期五计划举行全国性24小时总罢工，可能影响公交车、有轨电车、水上巴士和 AVM 集团的其他服务。最低限度的交通服务仍有保障。出发前请在 AVM/ACTV 官方网站核实班次及保障运行的线路。"
  },
  "officialUrl": "https://avm.avmspa.it/it/content/avmactv-informa-sciopero-generale-nazionale-24h-20-novembre-2026",
  "lastVerified": "2026-11-18",
  "period": {
    "it": "20 novembre 2026",
    "en": "20 November 2026",
    "de": "20. November 2026",
    "fr": "20 novembre 2026",
    "es": "20 de noviembre de 2026",
    "zh": "2026年11月20日"
  }
},
{
  "key": "japan-pavilion-strike-2026-11-20",
  "placeSlug": "biennale-di-venezia",
  "kind": "visitor-info",
  "start": "2026-11-18",
  "end": "2026-11-20",
  "status": "current",
  "title": {
    "it": "Padiglione Giappone: avviso per il 20 novembre",
    "en": "Japan Pavilion: notice for 20 November",
    "de": "Japanischer Pavillon: Hinweis für den 20. November",
    "fr": "Pavillon du Japon : avis pour le 20 novembre",
    "es": "Pabellón de Japón: aviso para el 20 de noviembre",
    "zh": "日本馆：11月20日活动提示"
  },
  "summary": {
    "it": "A causa dello sciopero generale del 20 novembre, alcuni appuntamenti del Padiglione Giappone potrebbero subire variazioni o essere annullati. Tra questi, l’evento di ascolto Cloud Babies, Night Babies, previsto alle 16:30. Anche il Kids’ Tour 2 di Ei Arakawa-Nash, riservato ai partecipanti, è interessato. Consultare le comunicazioni ufficiali del Padiglione prima della visita.",
    "en": "Due to the general strike on 20 November, some events at the Japan Pavilion may be changed or cancelled, including the listening event Cloud Babies, Night Babies, scheduled for 16:30. Ei Arakawa-Nash’s Kids’ Tour 2, a closed event, is also affected. Check the pavilion’s official announcements before visiting.",
    "de": "Wegen des Generalstreiks am 20. November können einzelne Veranstaltungen im japanischen Pavillon geändert oder abgesagt werden, darunter das für 16:30 Uhr geplante Hörereignis Cloud Babies, Night Babies. Auch Ei Arakawa-Nashs Kids’ Tour 2, eine geschlossene Veranstaltung, ist betroffen. Bitte vor dem Besuch die offiziellen Mitteilungen des Pavillons prüfen.",
    "fr": "En raison de la grève générale du 20 novembre, certaines activités du Pavillon du Japon pourraient être modifiées ou annulées, notamment la séance d’écoute Cloud Babies, Night Babies, prévue à 16 h 30. Le Kids’ Tour 2 d’Ei Arakawa-Nash, réservé aux participants, est également concerné. Consultez les annonces officielles du pavillon avant votre visite.",
    "es": "Debido a la huelga general del 20 de noviembre, algunas actividades del Pabellón de Japón podrían modificarse o cancelarse, entre ellas la sesión de escucha Cloud Babies, Night Babies, prevista a las 16:30. También está afectado el Kids’ Tour 2 de Ei Arakawa-Nash, una actividad cerrada. Consulta los avisos oficiales del pabellón antes de la visita.",
    "zh": "受11月20日总罢工影响，日本馆部分活动可能调整或取消，包括原定16:30开始的聆听活动 Cloud Babies, Night Babies。Ei Arakawa-Nash 的 Kids’ Tour 2（非公开活动）也可能受到影响。参观前请查看日本馆官方通知。"
  },
  "officialUrl": "https://venezia-biennale-japan.jpf.go.jp/e/news/notice-regarding-events-at-the-japan-pavilion-on-20-november-the-61st-international-art-exhibition-la-biennale-di-venezia",
  "lastVerified": "2026-11-18",
  "period": {
    "it": "20 novembre 2026",
    "en": "20 November 2026",
    "de": "20. November 2026",
    "fr": "20 novembre 2026",
    "es": "20 de noviembre de 2026",
    "zh": "2026年11月20日"
  }
},
 ...(caPesaro?[{...caPesaro,key:'journal-ca-pesaro-strike-2026-11-20',placeSlug:'venezia-a-novembre',lastVerified:'2026-11-18',internalHref:'/guide/musei-venezia/ca-pesaro'}]:[])
];
