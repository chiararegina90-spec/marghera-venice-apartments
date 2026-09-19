import type {VespucciAuditLang} from './amerigoVespucci2026Audit';

type VespucciUpdate={
  description:string;
  subtitle:string;
  lead:string;
  sections:[string,string][];
  practical:[string,string][];
  faq:[string,string][];
  tip:string;
};

export const amerigoVespucci2026Update:Record<VespucciAuditLang,VespucciUpdate>={
  it:{
    description:'Amerigo Vespucci a Venezia dal 2 al 7 ottobre 2026: ormeggio a Riva di San Biasio davanti al Museo Storico Navale, visite e aggiornamenti.',
    subtitle:'La tappa ufficiale di Venezia è confermata dal 2 al 7 ottobre 2026, con ormeggio a Riva di San Biasio davanti al Museo Storico Navale. Orari e modalità delle visite a bordo saranno comunicati progressivamente.',
    lead:'Il ritorno dell’Amerigo Vespucci a Venezia è confermato dal 2 al 7 ottobre 2026. È ora noto anche l’ormeggio previsto: Riva di San Biasio, nelle acque antistanti il Museo Storico Navale di Venezia. Restano invece da pubblicare gli orari e le modalità operative delle visite a bordo.',
    sections:[
      ['Le date ufficiali corrette: 2–7 ottobre','Il Tour Vespucci indica Venezia dal 2 al 7 ottobre 2026. La tappa successiva è Trieste dall’8 al 12 ottobre, con partenza verso Trieste prevista l’8 ottobre.'],
      ['Il 6 e 7 ottobre il Trans-Regional Seapower Symposium','Durante la tappa veneziana, l’Arsenale della Marina Militare ospita il XV Trans-Regional Seapower Symposium. È un appuntamento internazionale dedicato alla sicurezza e cooperazione marittima, distinto dalle visite pubbliche alla nave.'],
      ['Visite a bordo: cosa sappiamo davvero','Al 19 settembre 2026 non risulta ancora pubblicata una pagina operativa specifica per Venezia con i giorni esatti delle visite pubbliche, le fasce orarie, la disponibilità degli slot o le modalità definitive di accesso e prenotazione. Non estendiamo quindi a Venezia le regole applicate in altre tappe.'],
      ['Dove sarà ormeggiata?','L’ormeggio veneziano previsto è a Riva di San Biasio, nelle acque antistanti il Museo Storico Navale di Venezia, nell’area di Castello vicina all’Arsenale. Il luogo è quindi noto; punto di accesso operativo e modalità delle visite saranno aggiornati quando verranno pubblicati.'],
      ['Come organizzarsi da Marghera','Lasciare l’auto al parcheggio dell’appartamento e raggiungere Venezia in autobus o treno resta una soluzione pratica. Ora che l’ormeggio è noto è possibile individuare l’area della visita, ma per il giorno effettivo conviene attendere le indicazioni ufficiali su accesso, orari e possibili variazioni dei trasporti.'],
      ['Una nave scuola ancora operativa','Varata nel 1931 a Castellammare di Stabia, l’Amerigo Vespucci compie 95 anni nel 2026 ed è ancora una nave scuola operativa della Marina Militare. La Campagna 2026 è partita da Genova il 9 maggio e si conclude a Trieste il 12 ottobre.']
    ],
    practical:[
      ['Date ufficiali','2–7 ottobre 2026'],
      ['Ormeggio','Riva di San Biasio, davanti al Museo Storico Navale'],
      ['Orari visite','Non ancora pubblicati'],
      ['Accesso/prenotazione','In aggiornamento: in attesa delle informazioni operative della tappa Venezia'],
      ['Evento collegato','6–7 ottobre: XV Trans-Regional Seapower Symposium all’Arsenale'],
      ['Tappa successiva','Trieste, 8–12 ottobre 2026']
    ],
    faq:[
      ['Serve prenotare la visita a bordo?','Al 19 settembre 2026 non sono ancora pubblicate le modalità operative della tappa veneziana. Non diamo quindi per certa né la prenotazione né l’entrata diretta finché non saranno comunicate ufficialmente.'],
      ['Dove sarà ormeggiata la Vespucci a Venezia?','L’ormeggio previsto è a Riva di San Biasio, davanti al Museo Storico Navale di Venezia, nell’area di Castello vicina all’Arsenale.'],
      ['Le visite saranno gratuite?','Le condizioni specifiche delle visite a Venezia non sono ancora state pubblicate. Per evitare informazioni sbagliate, controlla il portale ufficiale quando sarà disponibile la pagina operativa della tappa.'],
      ['Quando devo ricontrollare?','Se vuoi visitare la nave, verifica il sito ufficiale nei giorni e nelle settimane precedenti al 2 ottobre: orari, accesso ed eventuali prenotazioni possono essere pubblicati o aggiornati progressivamente.']
    ],
    tip:'L’ormeggio veneziano è previsto a Riva di San Biasio, davanti al Museo Storico Navale. Orari e modalità delle visite a bordo saranno invece aggiornati non appena pubblicati ufficialmente.'
  },
  en:{
    description:'Amerigo Vespucci in Venice 2–7 October 2026: berth at Riva di San Biasio by the Naval History Museum of Venice, onboard visits and updates.',
    subtitle:'The official Venice stop is confirmed for 2–7 October 2026, with the ship due to berth at Riva di San Biasio in front of the Naval History Museum of Venice. Public visiting hours and access arrangements are still to be released.',
    lead:'Amerigo Vespucci’s return to Venice is confirmed for 2–7 October 2026. The expected berth is now known: Riva di San Biasio, in the waters in front of the Naval History Museum of Venice. Public visiting times and operational access details have not yet been published.',
    sections:[
      ['Confirmed Venice dates: 2–7 October','Tour Vespucci lists Venice from 2 to 7 October 2026, followed by Trieste from 8 to 12 October. Departure towards Trieste is expected on 8 October.'],
      ['The Trans-Regional Seapower Symposium on 6–7 October','During the Venice stop, the Italian Navy Arsenal hosts the XV Trans-Regional Seapower Symposium, an international maritime-security forum. It is separate from public onboard-visit arrangements.'],
      ['Onboard visits: what is actually confirmed','As of 19 September 2026, no Venice-specific operational page has been published with exact public visiting days, time slots, slot availability or final access and booking procedures. Rules used at other Italian stops should therefore not be assumed for Venice.'],
      ['Where will the ship berth?','The expected Venice berth is Riva di San Biasio, in the waters in front of the Naval History Museum of Venice, in the Castello area near the Arsenal. The berth is now known; the operational entrance and visit procedures will be updated when published.'],
      ['Planning from Marghera','Leaving the car at the apartment and travelling to Venice by bus or train remains a practical option. The berth area can now be identified, but visitors should wait for official access, timetable and transport information before fixing the final route.'],
      ['A working training ship at 95','Launched in 1931 in Castellammare di Stabia, Amerigo Vespucci turns 95 in 2026 and remains an operational Italian Navy training ship. The 2026 campaign left Genoa on 9 May and is scheduled to finish in Trieste on 12 October.']
    ],
    practical:[
      ['Confirmed dates','2–7 October 2026'],
      ['Berth','Riva di San Biasio, in front of the Naval History Museum of Venice'],
      ['Visiting hours','Not yet published'],
      ['Access/booking','Updating: awaiting operational information for the Venice stop'],
      ['Related naval event','6–7 October: XV Trans-Regional Seapower Symposium at the Arsenal'],
      ['Next stop','Trieste, 8–12 October 2026']
    ],
    faq:[
      ['Do I need to book an onboard visit?','As of 19 September 2026, Venice public-access arrangements have not yet been published, so neither booking nor walk-up entry should be assumed until officially confirmed.'],
      ['Where will Vespucci berth in Venice?','The expected berth is Riva di San Biasio, in front of the Naval History Museum of Venice, in the Castello area near the Arsenal.'],
      ['Will visits be free?','Venice-specific visit conditions have not yet been published. Check the official Tour Vespucci information when the operational page for the stop becomes available.'],
      ['When should I check again?','If you want to visit the ship, check the official site in the days and weeks before 2 October, as visiting hours, access and any booking arrangements may be released progressively.']
    ],
    tip:'The Venice berth is expected at Riva di San Biasio, in front of the Naval History Museum of Venice. Public visiting hours and access arrangements will be updated as soon as they are officially published.'
  },
  de:{
    description:'Amerigo Vespucci in Venedig vom 2.–7. Oktober 2026: Liegeplatz an der Riva di San Biasio vor dem Marinemuseum, Bordbesichtigungen und Updates.',
    subtitle:'Der offizielle Aufenthalt in Venedig ist für 2.–7. Oktober 2026 bestätigt. Das Schiff soll an der Riva di San Biasio vor dem Museo Storico Navale di Venezia liegen. Besuchszeiten und Zugangsregeln sind noch nicht veröffentlicht.',
    lead:'Die Rückkehr der Amerigo Vespucci nach Venedig ist für den 2. bis 7. Oktober 2026 bestätigt. Auch der vorgesehene Liegeplatz ist nun bekannt: Riva di San Biasio, in den Gewässern vor dem Museo Storico Navale di Venezia. Besuchszeiten und operative Zugangsdetails stehen noch aus.',
    sections:[
      ['Bestätigte Termine: 2.–7. Oktober','Der offizielle Tourplan nennt Venedig vom 2. bis 7. Oktober 2026 und Triest vom 8. bis 12. Oktober. Die Abfahrt in Richtung Triest ist für den 8. Oktober vorgesehen.'],
      ['Seapower Symposium am 6.–7. Oktober','Während der Venedig-Station findet im Arsenal der italienischen Marine das XV Trans-Regional Seapower Symposium statt. Dieses internationale Forum ist von den Publikumsbesuchen an Bord zu unterscheiden.'],
      ['Bordbesichtigungen: aktueller Stand','Am 19. September 2026 gibt es noch keine operative Seite für Venedig mit genauen Besuchstagen, Zeitfenstern, Verfügbarkeit oder endgültigen Zugangs- und Reservierungsregeln. Die Regeln anderer Stationen werden daher nicht automatisch auf Venedig übertragen.'],
      ['Wo wird das Schiff liegen?','Der vorgesehene Liegeplatz ist die Riva di San Biasio, vor dem Museo Storico Navale di Venezia, im Stadtteil Castello nahe dem Arsenal. Der Liegeplatz ist damit bekannt; Eingang und Besuchsablauf werden ergänzt, sobald sie offiziell veröffentlicht sind.'],
      ['Planung ab Marghera','Das Auto am Apartment zu lassen und mit Bus oder Zug nach Venedig zu fahren bleibt praktisch. Die Lage des Schiffes ist nun bekannt, für die endgültige Route sollten jedoch die offiziellen Angaben zu Zugang, Zeiten und möglichen Verkehrsänderungen abgewartet werden.'],
      ['95 Jahre und weiterhin im Dienst','Die 1931 in Castellammare di Stabia vom Stapel gelaufene Amerigo Vespucci wird 2026 95 Jahre alt und bleibt ein aktives Schulschiff der italienischen Marine. Die Kampagne begann am 9. Mai in Genua und endet planmäßig am 12. Oktober in Triest.']
    ],
    practical:[
      ['Bestätigter Zeitraum','2.–7. Oktober 2026'],
      ['Liegeplatz','Riva di San Biasio, vor dem Museo Storico Navale di Venezia'],
      ['Besuchszeiten','Noch nicht veröffentlicht'],
      ['Zugang/Reservierung','In Aktualisierung: operative Informationen für Venedig stehen noch aus'],
      ['Marineveranstaltung','6.–7. Oktober: XV Trans-Regional Seapower Symposium im Arsenal'],
      ['Nächste Station','Triest, 8.–12. Oktober 2026']
    ],
    faq:[
      ['Muss eine Bordbesichtigung reserviert werden?','Am 19. September 2026 sind die Zugangsregeln für Venedig noch nicht veröffentlicht. Weder Reservierung noch direkter Zugang sollten daher vorausgesetzt werden.'],
      ['Wo liegt die Vespucci in Venedig?','Der vorgesehene Liegeplatz ist die Riva di San Biasio vor dem Museo Storico Navale di Venezia, im Stadtteil Castello nahe dem Arsenal.'],
      ['Sind die Besuche kostenlos?','Die Bedingungen für die Venedig-Station sind noch nicht veröffentlicht. Maßgeblich sind die offiziellen Informationen, sobald die operative Seite verfügbar ist.'],
      ['Wann sollte ich erneut prüfen?','Wer an Bord möchte, sollte die offizielle Seite in den Tagen und Wochen vor dem 2. Oktober erneut prüfen, da Zeiten, Zugang und mögliche Reservierungen schrittweise veröffentlicht werden können.']
    ],
    tip:'Der vorgesehene Liegeplatz in Venedig ist die Riva di San Biasio vor dem Museo Storico Navale di Venezia. Besuchszeiten und Zugangsmodalitäten werden ergänzt, sobald sie offiziell veröffentlicht sind.'
  },
  fr:{
    description:'Amerigo Vespucci à Venise du 2 au 7 octobre 2026 : amarrage à Riva di San Biasio devant le Musée historique naval, visites et mises à jour.',
    subtitle:'L’escale officielle à Venise est confirmée du 2 au 7 octobre 2026, avec un amarrage prévu à Riva di San Biasio devant le Museo Storico Navale di Venezia. Les horaires et modalités des visites restent à publier.',
    lead:'Le retour de l’Amerigo Vespucci à Venise est confirmé du 2 au 7 octobre 2026. Le lieu d’amarrage prévu est désormais connu : Riva di San Biasio, dans les eaux devant le Museo Storico Navale di Venezia. Les horaires et modalités opérationnelles des visites à bord ne sont pas encore publiés.',
    sections:[
      ['Dates confirmées : 2–7 octobre','Tour Vespucci indique Venise du 2 au 7 octobre 2026, puis Trieste du 8 au 12 octobre. Le départ vers Trieste est prévu le 8 octobre.'],
      ['Le Seapower Symposium les 6–7 octobre','Pendant l’escale vénitienne, l’Arsenal de la Marine italienne accueille le XV Trans-Regional Seapower Symposium. Cet événement international est distinct des modalités de visite du navire par le public.'],
      ['Visites à bord : ce qui est confirmé','Au 19 septembre 2026, aucune page opérationnelle propre à Venise ne précise encore les jours exacts, créneaux horaires, disponibilités ou modalités définitives d’accès et de réservation. Les règles des autres escales ne sont donc pas appliquées automatiquement à Venise.'],
      ['Où le navire sera-t-il amarré ?','L’amarrage prévu est à Riva di San Biasio, devant le Museo Storico Navale di Venezia, dans le secteur de Castello près de l’Arsenal. Le lieu est donc connu ; le point d’accès et les modalités de visite seront ajoutés dès leur publication officielle.'],
      ['Venir depuis Marghera','Laisser la voiture à l’appartement et rejoindre Venise en bus ou en train reste pratique. La zone d’amarrage est désormais connue, mais il convient d’attendre les indications officielles sur l’accès, les horaires et les éventuelles modifications des transports avant de fixer le trajet final.'],
      ['Un navire-école toujours en service à 95 ans','Mis à l’eau en 1931 à Castellammare di Stabia, l’Amerigo Vespucci fête ses 95 ans en 2026 et reste un navire-école opérationnel de la Marine italienne. La campagne 2026 a quitté Gênes le 9 mai et doit s’achever à Trieste le 12 octobre.']
    ],
    practical:[
      ['Dates confirmées','2–7 octobre 2026'],
      ['Amarrage','Riva di San Biasio, devant le Museo Storico Navale di Venezia'],
      ['Horaires de visite','Pas encore publiés'],
      ['Accès/réservation','En cours de mise à jour : informations opérationnelles de l’escale de Venise attendues'],
      ['Événement naval','6–7 octobre : XV Trans-Regional Seapower Symposium à l’Arsenal'],
      ['Escale suivante','Trieste, 8–12 octobre 2026']
    ],
    faq:[
      ['Faut-il réserver une visite à bord ?','Au 19 septembre 2026, les modalités d’accès du public à Venise ne sont pas encore publiées. Il ne faut donc supposer ni réservation ni accès direct avant confirmation officielle.'],
      ['Où sera amarré le Vespucci à Venise ?','L’amarrage prévu est à Riva di San Biasio, devant le Museo Storico Navale di Venezia, dans le secteur de Castello près de l’Arsenal.'],
      ['Les visites seront-elles gratuites ?','Les conditions propres à Venise ne sont pas encore publiées. Consultez les informations officielles dès que la page opérationnelle de l’escale sera disponible.'],
      ['Quand vérifier à nouveau ?','Si vous souhaitez monter à bord, consultez le site officiel dans les jours et semaines précédant le 2 octobre : horaires, accès et éventuelles réservations peuvent être publiés progressivement.']
    ],
    tip:'L’amarrage vénitien est prévu à Riva di San Biasio, devant le Museo Storico Navale di Venezia. Les horaires et modalités des visites à bord seront ajoutés dès leur publication officielle.'
  },
  es:{
    description:'Amerigo Vespucci en Venecia del 2 al 7 de octubre de 2026: atraque en Riva di San Biasio frente al Museo Histórico Naval, visitas y novedades.',
    subtitle:'La escala oficial de Venecia está confirmada del 2 al 7 de octubre de 2026, con atraque previsto en Riva di San Biasio frente al Museo Storico Navale di Venezia. Los horarios y modalidades de visita aún no se han publicado.',
    lead:'El regreso del Amerigo Vespucci a Venecia está confirmado del 2 al 7 de octubre de 2026. Ya se conoce también el atraque previsto: Riva di San Biasio, en las aguas frente al Museo Storico Navale di Venezia. Los horarios y detalles operativos de las visitas a bordo siguen pendientes de publicación.',
    sections:[
      ['Fechas confirmadas: 2–7 de octubre','Tour Vespucci indica Venecia del 2 al 7 de octubre de 2026 y, después, Trieste del 8 al 12. La salida hacia Trieste está prevista para el 8 de octubre.'],
      ['Seapower Symposium los días 6–7','Durante la escala veneciana, el Arsenal de la Marina italiana acoge el XV Trans-Regional Seapower Symposium. Es un evento internacional distinto de las modalidades de visita pública al barco.'],
      ['Visitas a bordo: lo que sabemos','A 19 de septiembre de 2026 todavía no se ha publicado una página operativa específica de Venecia con días exactos, franjas horarias, disponibilidad de plazas o normas definitivas de acceso y reserva. Por tanto, no aplicamos automáticamente a Venecia las reglas de otras escalas.'],
      ['¿Dónde atracará?','El atraque previsto es Riva di San Biasio, frente al Museo Storico Navale di Venezia, en la zona de Castello próxima al Arsenal. El lugar ya se conoce; la entrada operativa y las modalidades de visita se añadirán cuando se publiquen oficialmente.'],
      ['Cómo organizarse desde Marghera','Dejar el coche en el apartamento y entrar en Venecia en autobús o tren sigue siendo una opción práctica. Ya se puede identificar la zona del atraque, pero conviene esperar la información oficial sobre acceso, horarios y posibles cambios de transporte antes de fijar la ruta definitiva.'],
      ['Un buque escuela en activo a los 95 años','Botado en 1931 en Castellammare di Stabia, el Amerigo Vespucci cumple 95 años en 2026 y sigue siendo un buque escuela operativo de la Marina italiana. La campaña salió de Génova el 9 de mayo y termina en Trieste el 12 de octubre.']
    ],
    practical:[
      ['Fechas confirmadas','2–7 de octubre de 2026'],
      ['Atraque','Riva di San Biasio, frente al Museo Storico Navale di Venezia'],
      ['Horarios de visita','Todavía no publicados'],
      ['Acceso/reserva','En actualización: a la espera de la información operativa de la escala de Venecia'],
      ['Evento naval','6–7 de octubre: XV Trans-Regional Seapower Symposium en el Arsenal'],
      ['Siguiente escala','Trieste, 8–12 de octubre de 2026']
    ],
    faq:[
      ['¿Hay que reservar la visita a bordo?','A 19 de septiembre de 2026 todavía no se han publicado las modalidades de acceso al público en Venecia, así que no conviene dar por hecha ni la reserva ni la entrada directa hasta que exista confirmación oficial.'],
      ['¿Dónde atracará el Vespucci en Venecia?','El atraque previsto es Riva di San Biasio, frente al Museo Storico Navale di Venezia, en la zona de Castello próxima al Arsenal.'],
      ['¿Las visitas serán gratuitas?','Las condiciones específicas de Venecia todavía no se han publicado. Consulta la información oficial cuando esté disponible la página operativa de la escala.'],
      ['¿Cuándo conviene volver a comprobarlo?','Si quieres subir a bordo, consulta el sitio oficial en los días y semanas anteriores al 2 de octubre: horarios, acceso y posibles reservas pueden publicarse progresivamente.']
    ],
    tip:'El atraque en Venecia está previsto en Riva di San Biasio, frente al Museo Storico Navale di Venezia. Los horarios y modalidades de las visitas a bordo se actualizarán en cuanto se publiquen oficialmente.'
  },
  zh:{
    description:'Amerigo Vespucci 将于2026年10月2日至7日停靠威尼斯：停泊于 Riva di San Biasio、威尼斯海军历史博物馆前方，含登船参观最新信息。',
    subtitle:'官方行程确认威尼斯站为2026年10月2日至7日，预计停泊于 Riva di San Biasio、Museo Storico Navale di Venezia 前方水域。登船参观时间和具体入场方式尚未公布。',
    lead:'Amerigo Vespucci 重返威尼斯的日期已确认：2026年10月2日至7日。预计停泊地点也已明确，为 Riva di San Biasio，位于威尼斯海军历史博物馆（Museo Storico Navale di Venezia）前方水域。公众登船的具体时间和操作方式仍待官方发布。',
    sections:[
      ['官方日期：10月2–7日','Tour Vespucci 确认威尼斯站为2026年10月2日至7日，下一站的里雅斯特为10月8日至12日，预计10月8日启程前往的里雅斯特。'],
      ['10月6–7日海军专题会议','威尼斯停靠期间，意大利海军兵工厂将举行第十五届 Trans-Regional Seapower Symposium。这一国际海事论坛与公众登船参观安排是两项不同的活动。'],
      ['登船参观：目前确认到哪一步','截至2026年9月19日，威尼斯站尚未发布列明公众参观具体日期、时间段、名额以及最终入场或预约方式的操作页面。因此不会把其他城市停靠站的规则直接套用到威尼斯。'],
      ['具体停在哪里？','预计停泊于 Riva di San Biasio，位于 Museo Storico Navale di Venezia 前方水域，属于 Castello、靠近 Arsenale 的区域。停泊地点现已明确；具体公众入口及参观流程将在官方公布后更新。'],
      ['从 Marghera 如何安排','把车停在公寓，再乘公交或火车进入威尼斯仍然是实用的方式。现在已经可以确定船舶所在区域，但最终路线仍应等官方公布入口、参观时间以及可能的交通调整后再安排。'],
      ['95岁仍在服役的训练舰','Amerigo Vespucci 于1931年在 Castellammare di Stabia 下水，2026年迎来95岁生日，目前仍是意大利海军现役训练舰。2026年航程于5月9日从热那亚出发，计划10月12日在的里雅斯特结束。']
    ],
    practical:[
      ['官方日期','2026年10月2–7日'],
      ['停泊地点','Riva di San Biasio，Museo Storico Navale di Venezia 前方'],
      ['参观时间','尚未公布'],
      ['入场/预约','持续更新：等待威尼斯站官方操作信息'],
      ['相关海军活动','10月6–7日：海军兵工厂举行 XV Trans-Regional Seapower Symposium'],
      ['下一站','的里雅斯特，2026年10月8–12日']
    ],
    faq:[
      ['登船参观需要预约吗？','截至2026年9月19日，威尼斯站面向公众的入场方式尚未公布，因此目前不能确定是否需要预约，也不能假设可以直接现场入场。'],
      ['Vespucci 在威尼斯具体停哪里？','预计停泊于 Riva di San Biasio，位于威尼斯海军历史博物馆（Museo Storico Navale di Venezia）前方水域，靠近 Arsenale。'],
      ['参观免费吗？','威尼斯站的具体参观条件尚未公布。请在官方操作页面上线后，以 Tour Vespucci 的最新信息为准。'],
      ['什么时候再次查询最好？','如果希望登船，建议在10月2日前几天和几周持续查看官方网站，因为参观时间、入口和可能的预约方式会逐步发布。']
    ],
    tip:'威尼斯预计停泊地点为 Riva di San Biasio，位于 Museo Storico Navale di Venezia 前方。登船参观时间和入场方式将在官方发布后立即更新。'
  }
};
