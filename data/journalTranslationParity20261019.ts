import type {JournalArticleData} from '@/components/LocalizedRich';
import type {SiteLang} from '@/lib/i18n';

type Lang=Extract<SiteLang,'de'|'fr'|'es'|'zh'>;
type Section=[string,string];

const carnivalAdditions:Record<Lang,{dinner:Section;access:Section;faq:Section}>={
  de:{
    dinner:['Anreise zur Dinner Show','Für Ca’ Vendramin Calergi nennt der Veranstalter einen kostenlosen Wasser-Shuttle ab Piazzale Roma. Alternativ fährt die ACTV-Linie 1 ab Piazzale Roma oder Ferrovia bis San Marcuola. Zu Fuß nennt die offizielle Quelle etwa 15 Minuten ab Piazzale Roma und etwa 10 Minuten ab Bahnhof. Die Abende am 1., 2. und 3. Februar sind als Corporate Exclusive Nights ausgewiesen und gehören nicht zum normalen öffentlichen Kalender.'],
    access:['Zugangsbeitrag Venedig 2027','Der offizielle Kalender für den Zugangsbeitrag 2027 ist inzwischen veröffentlicht: Die 72 Anwendungstage beginnen am 26. März und enden am 15. August. Der Karneval vom 23. Januar bis 9. Februar liegt damit nach dem derzeit offiziellen Kalender außerhalb der Anwendungstage. Operative Regeln, Befreiungen und Verfahren können noch ergänzt werden; vor der Reise bitte den speziellen MVA-Guide und das Portal der Stadt Venedig prüfen.'],
    faq:['Häufige Fragen zum Karneval 2027','Wann findet der Karneval statt? Vom 23. Januar bis 9. Februar 2027; Faschingsdienstag ist der 9. Februar. Ist das vollständige Programm verfügbar? Noch nicht vollständig: einige Termine sind bestätigt, weitere Details werden ergänzt. Ist der Karneval für Kinder geeignet? Ja, besonders mit Pausen und ruhigeren Routen zwischen den stark besuchten Bereichen. Sollte man mit dem Auto bis Venedig fahren? Von Marghera ist es meist einfacher, das Auto an der Unterkunft zu lassen und Bus oder Bahn zu nutzen. Gilt während des Karnevals der Zugangsbeitrag? Nach dem aktuell veröffentlichten Kalender liegen die Karnevalstage außerhalb der 72 Anwendungstage 2027.']
  },
  fr:{
    dinner:['Comment rejoindre le Dinner Show','Pour rejoindre Ca’ Vendramin Calergi, l’organisateur indique une navette fluviale gratuite au départ de Piazzale Roma. Il est aussi possible de prendre la ligne ACTV 1 depuis Piazzale Roma ou Ferrovia jusqu’à San Marcuola. À pied, la source officielle indique environ 15 minutes depuis Piazzale Roma et 10 minutes depuis la gare. Les soirées des 1er, 2 et 3 février sont indiquées comme Corporate Exclusive Nights et ne font pas partie du calendrier public normal.'],
    access:['Contribution d’accès à Venise en 2027','Le calendrier officiel 2027 est désormais publié : les 72 journées d’application commencent le 26 mars et se terminent le 15 août. Le Carnaval, du 23 janvier au 9 février, se situe donc en dehors des journées d’application prévues par le calendrier officiel actuel. Les modalités opérationnelles et les exonérations peuvent encore être précisées ; avant le voyage, consultez le guide MVA dédié et le portail de la Ville de Venise.'],
    faq:['Questions fréquentes sur le Carnaval 2027','Quand a lieu le Carnaval ? Du 23 janvier au 9 février 2027 ; Mardi Gras tombe le 9 février. Le programme complet est-il disponible ? Pas encore dans sa forme définitive : certains rendez-vous sont confirmés et d’autres détails seront ajoutés. Le Carnaval convient-il aux enfants ? Oui, surtout en alternant les zones très fréquentées avec des pauses et des parcours plus calmes. Faut-il venir en voiture jusqu’à Venise ? Depuis Marghera, il est généralement plus simple de laisser la voiture au logement et de prendre le bus ou le train. La Contribution d’accès s’applique-t-elle pendant le Carnaval ? D’après le calendrier actuellement publié, les dates du Carnaval sont en dehors des 72 journées d’application 2027.']
  },
  es:{
    dinner:['Cómo llegar al Dinner Show','Para llegar a Ca’ Vendramin Calergi, la organización indica un servicio gratuito de lanzadera acuática desde Piazzale Roma. Como alternativa, se puede utilizar la línea ACTV 1 desde Piazzale Roma o Ferrovia hasta San Marcuola. A pie, la fuente oficial indica unos 15 minutos desde Piazzale Roma y unos 10 minutos desde la estación. Las noches del 1, 2 y 3 de febrero figuran como Corporate Exclusive Nights y no forman parte del calendario público habitual.'],
    access:['Tarifa de Acceso a Venecia en 2027','El calendario oficial de 2027 ya está publicado: las 72 jornadas de aplicación comienzan el 26 de marzo y terminan el 15 de agosto. Por tanto, el Carnaval, del 23 de enero al 9 de febrero, queda fuera de las jornadas de aplicación del calendario oficial actual. Las reglas operativas, exenciones y procedimientos todavía pueden concretarse; antes del viaje consulta la guía específica de MVA y el portal del Ayuntamiento de Venecia.'],
    faq:['Preguntas frecuentes sobre el Carnaval 2027','¿Cuándo es el Carnaval? Del 23 de enero al 9 de febrero de 2027; Martes de Carnaval cae el 9 de febrero. ¿Está disponible el programa completo? Todavía no en su versión definitiva: ya hay citas confirmadas y se añadirán más detalles. ¿Es adecuado para niños? Sí, sobre todo alternando las zonas más concurridas con pausas y recorridos tranquilos. ¿Conviene llegar en coche hasta Venecia? Desde Marghera suele ser más sencillo dejar el coche en el alojamiento y utilizar autobús o tren. ¿Se aplica la Tarifa de Acceso durante el Carnaval? Según el calendario publicado actualmente, las fechas del Carnaval quedan fuera de las 72 jornadas de aplicación de 2027.']
  },
  zh:{
    dinner:['如何前往 Dinner Show','前往 Ca’ Vendramin Calergi 时，主办方提供从 Piazzale Roma 出发的免费水上接驳。也可以从 Piazzale Roma 或 Ferrovia 乘 ACTV 1 号线到 San Marcuola。根据官方信息，步行约需15分钟从 Piazzale Roma 出发，或约10分钟从火车站出发。2月1日、2日和3日晚被列为 Corporate Exclusive Nights，不属于通常面向公众的活动日程。'],
    access:['2027年威尼斯入城费','2027年官方日历现已公布：共72个实施日，从3月26日开始至8月15日结束。因此，1月23日至2月9日举行的威尼斯狂欢节不在目前官方公布的2027实施日期内。具体操作规则、豁免和办理方式仍可能进一步完善；出发前请查看 MVA 的专门指南以及威尼斯市政府官方平台。'],
    faq:['2027年威尼斯狂欢节常见问题','狂欢节什么时候举行？2027年1月23日至2月9日，忏悔星期二为2月9日。完整节目已经公布了吗？尚未完全定稿：部分活动已经确认，其他细节仍会陆续补充。适合带孩子参加吗？适合，建议在热门区域之间安排休息和较安静的路线。需要开车进入威尼斯吗？如果住在 Marghera，通常把车留在住宿停车位再乘公交或火车更方便。狂欢节期间需要缴纳入城费吗？根据目前公布的日历，狂欢节日期不在2027年的72个实施日内。']
  }
};

const redentoreExtra:Record<Lang,Section>={
  de:['Was vor der Reise noch zu prüfen ist','Zugangsregeln für einzelne Bereiche, reservierbare Plätze und konkrete Betriebszeiten sind nicht jedes Jahr gleich. Sobald die Stadt Venedig den Plan für 2027 veröffentlicht, sollten Sie Zugänge, mögliche Reservierungen, die Uhrzeit des Feuerwerks und die Organisation der Votivbrücke prüfen.'],
  fr:['Ce qu’il faudra vérifier avant le voyage','Les modalités d’accès à certaines zones, les places éventuellement réservables et les horaires opérationnels ne sont pas fixes d’une année à l’autre. Dès que la Ville de Venise publiera le plan 2027, vérifiez les accès, les réservations éventuelles, l’horaire des feux d’artifice et l’organisation du pont votif.'],
  es:['Qué habrá que comprobar antes del viaje','Las modalidades de acceso a determinadas zonas, las plazas que puedan requerir reserva y los horarios operativos no son datos fijos de un año a otro. Cuando el Ayuntamiento de Venecia publique el plan de 2027, conviene comprobar accesos, posibles reservas, horario de los fuegos artificiales y organización del puente votivo.'],
  zh:['出发前还需要确认什么','部分区域的进入方式、可预约位置和具体运行时间每年都可能变化。威尼斯市政府公布2027年方案后，请再次确认进入规则、是否需要预约、烟花时间以及临时许愿桥的安排。']
};

export function applyJournalTranslationParity20261019(data:JournalArticleData,lang:Lang):JournalArticleData{
  if(data.slug==='carnevale-di-venezia'){
    const sections=[...data.sections];
    const a=carnivalAdditions[lang];
    if(!sections.some(([t])=>t===a.dinner[0])){
      const confirmed=Math.max(0,sections.findIndex(([t])=>/bestätigt|confirm|confirmad|确认/i.test(t)));
      sections.splice(confirmed+1,0,a.dinner);
    }
    if(!sections.some(([t])=>t===a.access[0])){
      const transport=sections.findIndex(([t])=>/anreise|venir|llegar|marghera|出发|停车|parken/i.test(t));
      sections.splice(transport>=0?transport+1:sections.length,0,a.access);
    }
    if(!sections.some(([t])=>t===a.faq[0])) sections.push(a.faq);
    return {...data,sections};
  }
  if(data.slug==='festa-del-redentore'){
    const sections=[...data.sections];
    const extra=redentoreExtra[lang];
    if(!sections.some(([t])=>t===extra[0]))sections.push(extra);
    return {...data,sections};
  }
  return data;
}
