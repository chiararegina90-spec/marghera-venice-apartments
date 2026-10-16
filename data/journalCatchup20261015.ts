import type {EventArticle,EventLang} from './journal-events-2026';

type Patch=Partial<EventArticle>;
const m=(lang:EventLang,values:Record<EventLang,string>)=>values[lang];

export function applyJournalCatchup20261015(item:EventArticle,lang:EventLang,slug:string){
  if(!item)return;

  if(slug==='venice-hospitality-challenge-2026'){
    const title=m(lang,{it:'Informazioni pratiche aggiornate',en:'Updated practical information',de:'Aktualisierte praktische Informationen',fr:'Informations pratiques mises à jour',es:'Información práctica actualizada',zh:'最新实用信息'});
    const text=m(lang,{
      it:'La XIII Venice Hospitality Challenge si disputa sabato 17 ottobre 2026. La partenza unica dell’intera flotta è fissata alle 14:30 nel Bacino di San Marco: l’ultima comunicazione ufficiale parla di 16 maxi yacht. Il percorso si sviluppa davanti a Piazza San Marco e Punta della Dogana, prosegue nel Canale della Giudecca e lungo le Zattere. La premiazione è indicata indicativamente dalle 17:30 nell’area delle Galeazze all’Arsenale. ACTV ha inoltre annunciato modifiche temporanee alle linee di navigazione 14, 15 e 17 nella stessa giornata: conviene controllare l’avviso ufficiale prima di muoversi in vaporetto.',
      en:'The 13th Venice Hospitality Challenge takes place on Saturday 17 October 2026. The whole fleet starts together at 2:30 pm in St Mark’s Basin, and the latest official update lists 16 maxi yachts. The course runs past St Mark’s, Punta della Dogana, the Giudecca Canal and the Zattere. The awards ceremony is scheduled approximately from 5:30 pm in the Galeazze area of the Arsenale. ACTV has also announced temporary changes to navigation lines 14, 15 and 17 that day, so check the official notice before travelling by vaporetto.',
      de:'Die 13. Venice Hospitality Challenge findet am Samstag, 17. Oktober 2026 statt. Die gesamte Flotte startet gemeinsam um 14:30 Uhr im Bacino di San Marco; die jüngste offizielle Mitteilung nennt 16 Maxi-Yachten. Der Kurs führt an San Marco und Punta della Dogana vorbei in den Canale della Giudecca und entlang der Zattere. Die Preisverleihung ist ungefähr ab 17:30 Uhr im Bereich der Galeazze im Arsenale vorgesehen. ACTV kündigt außerdem vorübergehende Änderungen der Schifffahrtslinien 14, 15 und 17 an.',
      fr:'La 13e Venice Hospitality Challenge se déroule le samedi 17 octobre 2026. Toute la flotte part simultanément à 14 h 30 dans le bassin de Saint-Marc ; la dernière communication officielle annonce 16 maxi-yachts. Le parcours passe devant Saint-Marc et Punta della Dogana, puis par le canal de la Giudecca et les Zattere. La remise des prix est annoncée vers 17 h 30 dans la zone des Galeazze à l’Arsenale. ACTV prévoit aussi des modifications temporaires des lignes de navigation 14, 15 et 17.',
      es:'La XIII Venice Hospitality Challenge se celebra el sábado 17 de octubre de 2026. Toda la flota saldrá a la vez a las 14:30 en la cuenca de San Marcos; la última comunicación oficial habla de 16 maxi yates. El recorrido pasa por San Marcos y Punta della Dogana, continúa por el canal de la Giudecca y las Zattere. La entrega de premios está prevista aproximadamente desde las 17:30 en la zona de las Galeazze del Arsenale. ACTV también ha anunciado cambios temporales en las líneas de navegación 14, 15 y 17.',
      zh:'第13届 Venice Hospitality Challenge 将于2026年10月17日星期六举行。全部船队于14:30在圣马可水域同时起航；最新官方通报确认共有16艘 maxi yacht。赛道经过圣马可、Punta della Dogana、Giudecca 水道和 Zattere。颁奖仪式预计约17:30起在 Arsenale 的 Galeazze 区域举行。ACTV 同日还将临时调整水上交通14、15和17号线，出行前请查看官方公告。'
    });
    item.sections=[...(item.sections||[]).filter(([a,b])=>!/informazioni pratiche|practical information|praktische information|informations pratiques|información práctica|实用信息/i.test(a+' '+b)),[title,text]];
    item.dateModified='2026-10-15';
  }

  if(slug==='venice-fashion-week-2026'){
    const title=m(lang,{it:'Programma Radar Venezia 2026',en:'Radar Venezia 2026 programme',de:'Programm Radar Venezia 2026',fr:'Programme Radar Venezia 2026',es:'Programa Radar Venezia 2026',zh:'Radar Venezia 2026 主要日程'});
    const text=m(lang,{
      it:'Il programma principale è pubblicato. 19 ottobre: cultura dell’ambra con Venice Design Week, libro di Marina Spadafora al JW Marriott Venice e sfilata Always in Venice. 20 ottobre: CreativeMornings, PerindossArti e The Very Last Layer. 21 ottobre: incontro a Casa Flora su ospitalità, sostenibilità e creatività. 22 ottobre: Venezia Produce Futuro, IUAV Fashion, Designskolen Kolding da Orsoni e workshop Lunardelli Venezia con Venice Cocktail Week. 23 ottobre: Antonio Marras con Angela Vettese e Sara Sozzani Maino e Quadreria Futura Venezia di Jacopo Ascari. 22–24 ottobre: Atelier Aperti. 24 ottobre: Radar Night. Per orari, accessi e prenotazioni fanno fede le singole schede ufficiali.',
      en:'The main programme is published. 19 October: amber culture with Venice Design Week, Marina Spadafora at JW Marriott Venice and Always in Venice. 20 October: CreativeMornings, PerindossArti and The Very Last Layer. 21 October: Casa Flora on hospitality, sustainability and creativity. 22 October: Venezia Produce Futuro, IUAV Fashion, Designskolen Kolding at Orsoni and a Lunardelli Venezia workshop with Venice Cocktail Week. 23 October: Antonio Marras with Angela Vettese and Sara Sozzani Maino, plus Jacopo Ascari’s Quadreria Futura Venezia. Atelier Aperti runs 22–24 October and Radar Night closes on the 24th. Check each official listing for exact times, access and booking.',
      de:'Das Hauptprogramm ist veröffentlicht. Am 19. Oktober stehen Bernsteinkultur mit Venice Design Week, Marina Spadafora im JW Marriott Venice und Always in Venice auf dem Programm; am 20. Oktober CreativeMornings, PerindossArti und The Very Last Layer; am 21. Oktober Casa Flora; am 22. Oktober Venezia Produce Futuro, IUAV Fashion, Designskolen Kolding bei Orsoni und ein Lunardelli-Venezia-Workshop mit Venice Cocktail Week; am 23. Oktober Antonio Marras mit Angela Vettese und Sara Sozzani Maino sowie Quadreria Futura Venezia. Atelier Aperti läuft vom 22.–24. Oktober, Radar Night am 24. Oktober. Genaue Zeiten und Zugangsregeln stehen in den offiziellen Einträgen.',
      fr:'Le programme principal est publié. 19 octobre : culture de l’ambre avec Venice Design Week, Marina Spadafora au JW Marriott Venice et Always in Venice. 20 octobre : CreativeMornings, PerindossArti et The Very Last Layer. 21 octobre : Casa Flora. 22 octobre : Venezia Produce Futuro, IUAV Fashion, Designskolen Kolding chez Orsoni et atelier Lunardelli Venezia avec Venice Cocktail Week. 23 octobre : Antonio Marras avec Angela Vettese et Sara Sozzani Maino, puis Quadreria Futura Venezia. Atelier Aperti du 22 au 24 octobre et Radar Night le 24. Vérifiez chaque fiche officielle pour les horaires, l’accès et les réservations.',
      es:'El programa principal ya está publicado. 19 de octubre: cultura del ámbar con Venice Design Week, Marina Spadafora en JW Marriott Venice y Always in Venice. 20 de octubre: CreativeMornings, PerindossArti y The Very Last Layer. 21 de octubre: Casa Flora. 22 de octubre: Venezia Produce Futuro, IUAV Fashion, Designskolen Kolding en Orsoni y workshop Lunardelli Venezia con Venice Cocktail Week. 23 de octubre: Antonio Marras con Angela Vettese y Sara Sozzani Maino, y Quadreria Futura Venezia. Atelier Aperti del 22 al 24 y Radar Night el 24. Consulta cada ficha oficial para horarios, acceso y reservas.',
      zh:'主要日程已经公布。10月19日包括与 Venice Design Week 合作的琥珀文化活动、Marina Spadafora 新书活动和 Always in Venice；20日为 CreativeMornings、PerindossArti 和 The Very Last Layer；21日为 Casa Flora；22日包括 Venezia Produce Futuro、IUAV Fashion、Designskolen Kolding 与 Venice Cocktail Week 相关工作坊；23日包括 Antonio Marras 对谈和 Quadreria Futura Venezia。Atelier Aperti 为10月22–24日，24日举行 Radar Night。具体时间、入场和预约请查看各官方活动页面。'
    });
    const stale=/non.{0,35}(pubblic|disponib)|not.{0,35}(publish|available)|noch.{0,35}(veröffentlicht|vollständig)|pas encore.{0,35}(publi|disponible)|no.{0,35}(publicad|disponible)|尚未.{0,20}(公布|发布)|attend.{0,25}(programma|programme)|wait.{0,25}(programme|schedule)/i;
    const programTitle=/programma|programme|programm|programa|日程|节目/i;
    item.sections=(item.sections||[]).filter(([a,b])=>!stale.test(a+' '+b)&&!programTitle.test(a));
    item.sections=[...(item.sections||[]),[title,text]];
    item.tip=m(lang,{
      it:'Radar Venezia è diffuso in più sedi: scegli gli appuntamenti che ti interessano e controlla sulle singole schede ufficiali orario, accesso ed eventuale prenotazione prima di partire.',
      en:'Radar Venezia is spread across multiple venues: choose the events that interest you and check each official listing for time, access and any booking requirement before setting out.',
      de:'Radar Venezia findet an mehreren Orten statt. Wählen Sie Ihre Termine aus und prüfen Sie vorab Uhrzeit, Zugang und mögliche Reservierung in der jeweiligen offiziellen Veranstaltungsseite.',
      fr:'Radar Venezia se déroule dans plusieurs lieux : choisissez vos rendez-vous et vérifiez sur chaque fiche officielle l’horaire, l’accès et les éventuelles réservations.',
      es:'Radar Venezia se reparte por varios espacios: elige las citas que te interesan y comprueba en cada ficha oficial horario, acceso y posibles reservas.',
      zh:'Radar Venezia 分布在多个场地。请先选择感兴趣的活动，并在出发前查看各官方页面的时间、入场方式与预约要求。'
    });
    item.faq=(item.faq||[]).map(f=>programTitle.test(f.question)?{...f,answer:m(lang,{it:'Sì. Il Comune di Venezia ha pubblicato il programma principale; orari, accessi e prenotazioni vanno verificati sulle singole schede ufficiali.',en:'Yes. The City of Venice has published the main programme; check each official listing for exact times, access and booking.',de:'Ja. Die Stadt Venedig hat das Hauptprogramm veröffentlicht; genaue Zeiten, Zugang und Reservierungen stehen in den jeweiligen offiziellen Einträgen.',fr:'Oui. La Ville de Venise a publié le programme principal ; vérifiez chaque fiche officielle pour les horaires, l’accès et les réservations.',es:'Sí. El Ayuntamiento de Venecia ha publicado el programa principal; consulta cada ficha oficial para horarios, acceso y reservas.',zh:'是的。威尼斯市政府已公布主要日程；具体时间、入场和预约请查看各官方活动页面。'})}:f);
    item.relatedSlugs=Array.from(new Set([...(item.relatedSlugs||[]),'venice-design-week-2026','venice-cocktail-week-2026']));
    item.dateModified='2026-10-15';
  }

  if(slug==='biennale-musica-2026'){
    item.sections=[...(item.sections||[]),
      [m(lang,{it:'Forte Marghera: due notti da segnare',en:'Forte Marghera: two nights to note',de:'Forte Marghera: zwei wichtige Nächte',fr:'Forte Marghera : deux soirées à retenir',es:'Forte Marghera: dos noches clave',zh:'Forte Marghera：两场重要夜间活动'}),
       m(lang,{it:'Sabato 17 ottobre alle 23:00, al Padiglione 30 di Forte Marghera, Polygonia suona insieme a Surgeon, alias Antony Child, che sostituisce DJ Nobu. L’ingresso è con biglietto. Venerdì 23 ottobre alle 23:00 torna il programma notturno con Nídia, Helviofox e DJ Firmeza in Celebração Príncipe, sempre a Forte Marghera e con ingresso a pagamento.',en:'On Saturday 17 October at 11 pm, Padiglione 30 at Forte Marghera hosts Polygonia and Surgeon, alias Antony Child, who replaces DJ Nobu. Admission is ticketed. On Friday 23 October at 11 pm, Nídia, Helviofox and DJ Firmeza return to Forte Marghera with Celebração Príncipe, also ticketed.',de:'Am Samstag, 17. Oktober um 23:00 Uhr treten im Padiglione 30 von Forte Marghera Polygonia und Surgeon alias Antony Child auf; Surgeon ersetzt DJ Nobu. Eintritt mit Ticket. Am Freitag, 23. Oktober um 23:00 Uhr folgen Nídia, Helviofox und DJ Firmeza mit Celebração Príncipe, ebenfalls in Forte Marghera und mit Ticket.',fr:'Samedi 17 octobre à 23 h, le Padiglione 30 de Forte Marghera accueille Polygonia et Surgeon, alias Antony Child, qui remplace DJ Nobu. Entrée avec billet. Vendredi 23 octobre à 23 h, Nídia, Helviofox et DJ Firmeza présentent Celebração Príncipe, toujours à Forte Marghera et avec billet.',es:'El sábado 17 de octubre a las 23:00, el Padiglione 30 de Forte Marghera acoge a Polygonia y Surgeon, alias Antony Child, que sustituye a DJ Nobu. Entrada con billete. El viernes 23 a las 23:00 actúan Nídia, Helviofox y DJ Firmeza con Celebração Príncipe, también en Forte Marghera y con entrada.',zh:'10月17日星期六23:00，Forte Marghera 的 Padiglione 30 将由 Polygonia 与 Surgeon（Antony Child）演出，Surgeon 取代此前公布的 DJ Nobu，需购票入场。10月23日星期五23:00，Nídia、Helviofox 与 DJ Firmeza 带来 Celebração Príncipe，同样在 Forte Marghera 举行并需购票。'})],
      [m(lang,{it:'I Leoni 2026: cerimonia già conclusa',en:'The 2026 Lions: ceremony already held',de:'Die Löwen 2026: Preisverleihung bereits vorbei',fr:'Les Lions 2026 : cérémonie déjà passée',es:'Los Leones 2026: ceremonia ya celebrada',zh:'2026狮奖：颁奖典礼已举行'}),
       m(lang,{it:'La cerimonia si è svolta il 12 ottobre alle 12:00 a Ca’ Giustinian. Il Leone d’Oro alla carriera è andato a Keiji Haino e il Leone d’Argento a Sarah Davachi. L’evento prevedeva ingresso su prenotazione; essendo già trascorso, lo riportiamo qui come parte storica del programma, non come appuntamento ancora prenotabile.',en:'The ceremony took place on 12 October at noon at Ca’ Giustinian. Keiji Haino received the Golden Lion for Lifetime Achievement and Sarah Davachi the Silver Lion. Admission was by reservation; as the event has already taken place, it is listed here as part of the programme history rather than something still bookable.',de:'Die Preisverleihung fand am 12. Oktober um 12:00 Uhr in Ca’ Giustinian statt. Keiji Haino erhielt den Goldenen Löwen für sein Lebenswerk, Sarah Davachi den Silbernen Löwen. Der Zugang war reservierungspflichtig; der Termin ist bereits vorbei.',fr:'La cérémonie a eu lieu le 12 octobre à 12 h à Ca’ Giustinian. Keiji Haino a reçu le Lion d’Or pour l’ensemble de sa carrière et Sarah Davachi le Lion d’Argent. L’accès était sur réservation ; l’événement est désormais mentionné comme élément historique du programme.',es:'La ceremonia se celebró el 12 de octubre a las 12:00 en Ca’ Giustinian. Keiji Haino recibió el León de Oro a la trayectoria y Sarah Davachi el León de Plata. El acceso era con reserva; el acto ya ha pasado.',zh:'颁奖典礼已于10月12日12:00在 Ca’ Giustinian 举行。Keiji Haino 获终身成就金狮奖，Sarah Davachi 获银狮奖。活动当时需要预约，如今仅作为节目历史信息保留。'})]
    ];
    item.sections=item.sections.map(([a,b])=>/Musica Libera/.test(a)?[a,b.replace(/al 24 settembre 2026[^.]*./i,m(lang,{it:'La Biennale indica ora ingresso su prenotazione per entrambe le date.',en:'La Biennale now lists admission by reservation for both dates.',de:'La Biennale nennt nun für beide Termine Eintritt mit Reservierung.',fr:'La Biennale indique désormais un accès sur réservation pour les deux dates.',es:'La Biennale indica ahora acceso con reserva para ambas fechas.',zh:'La Biennale 现已明确两场活动均需预约入场。'}))]:[a,b]);
    item.dateModified='2026-10-15';
  }

  if(slug==='veleziana-2026'){
    item.sections=[...(item.sections||[]),
      [m(lang,{it:'17 ottobre: Regate Sprint all’Arsenale',en:'17 October: Regate Sprint at the Arsenale',de:'17. Oktober: Regate Sprint im Arsenale',fr:'17 octobre : Regate Sprint à l’Arsenale',es:'17 de octubre: Regate Sprint en el Arsenale',zh:'10月17日：Arsenale 短程划船赛'}),
       m(lang,{it:'Nel Bacino dell’Arsenale il programma ufficiale delle Regate Sprint prevede: Schie 15:20–15:40, Maciarelle Junior 15:40–16:00, Maciarelle Senior 16:00–16:20 e Venete a 4 16:20–16:40. La Veleziana Opti del 10–11 ottobre è invece già conclusa. La regata Veleziana finale resta in programma domenica 18 ottobre.',en:'In the Arsenale basin, the official Regate Sprint timetable is: Schie 3:20–3:40 pm, Maciarelle Junior 3:40–4:00 pm, Maciarelle Senior 4:00–4:20 pm and Venete a 4 4:20–4:40 pm. Veleziana Opti on 10–11 October has already taken place, while the final Veleziana race remains scheduled for Sunday 18 October.',de:'Im Arsenale-Becken sieht das offizielle Sprintprogramm vor: Schie 15:20–15:40, Maciarelle Junior 15:40–16:00, Maciarelle Senior 16:00–16:20 und Venete a 4 16:20–16:40. Die Veleziana Opti vom 10.–11. Oktober ist bereits vorbei; die Abschlussregatta bleibt für Sonntag, 18. Oktober geplant.',fr:'Dans le bassin de l’Arsenale, le programme officiel prévoit : Schie 15 h 20–15 h 40, Maciarelle Junior 15 h 40–16 h, Maciarelle Senior 16 h–16 h 20 et Venete a 4 16 h 20–16 h 40. La Veleziana Opti des 10–11 octobre est déjà terminée ; la régate finale reste prévue dimanche 18 octobre.',es:'En la dársena del Arsenale, el programa oficial de Regate Sprint es: Schie 15:20–15:40, Maciarelle Junior 15:40–16:00, Maciarelle Senior 16:00–16:20 y Venete a 4 16:20–16:40. La Veleziana Opti del 10–11 de octubre ya ha terminado; la regata final sigue prevista para el domingo 18.',zh:'Arsenale 水域的官方短程赛安排为：Schie 15:20–15:40、Maciarelle Junior 15:40–16:00、Maciarelle Senior 16:00–16:20、Venete a 4 16:20–16:40。10月10–11日的 Veleziana Opti 已结束；最终 Veleziana 大赛仍定于10月18日星期日。'})]
    ];
    item.dateModified='2026-10-15';
  }


  if(slug==='veleziana-2026'){
    const actvIndex=(item.sections||[]).length;
    item.sections=[...(item.sections||[]),
      [m(lang,{it:'18 ottobre: attenzione alle modifiche ACTV',en:'18 October: ACTV service changes',de:'18. Oktober: Änderungen im ACTV-Schiffsverkehr',fr:'18 octobre : modifications des services ACTV',es:'18 de octubre: cambios en los servicios ACTV',zh:'10月18日：ACTV 水上交通临时调整'}),
       m(lang,{
         it:'Per la Regata Veleziana di domenica 18 ottobre ACTV modifica temporaneamente alcune linee di navigazione interessate dal passaggio della regata nel Canale di San Nicolò e dall’arrivo nel Bacino di San Marco. Sulla linea 5.1 da Lido S.M.E., tra le 10:20 e le 13:40 circa, non vengono effettuate le fermate San Zaccaria, Giardini e Sant’Elena. Sulla 5.2 da Lido S.M.E., tra le 11:12 e le 14:32 circa, sono omesse Sant’Elena, Giardini e San Zaccaria. La linea 6 di navigazione, da Lido S.M.E. verso Piazzale Roma, tra le 11:02 e le 14:22 omette Sant’Elena e Giardini; da Piazzale Roma verso Lido S.M.E., tra le 10:41 e le 14:21 circa, omette Giardini e Sant’Elena. Tra le 11:00 e le 16:00 sono inoltre possibili ritardi sulle linee di navigazione interessate. ACTV precisa che la ripresa regolare dipenderà dall’effettivo svolgimento della manifestazione: controlla l’avviso ufficiale prima di partire. Attenzione: la linea 6 indicata qui è un vaporetto e non va confusa con gli autobus 6 e 6L tra Marghera e Venezia.',
         en:'For the Veleziana Regatta on Sunday 18 October, ACTV will temporarily change several waterbus services affected by the race through the San Nicolò Canal and its finish in St Mark’s Basin. On line 5.1 from Lido S.M.E., between about 10:20 am and 1:40 pm, San Zaccaria, Giardini and Sant’Elena will be skipped. On line 5.2 from Lido S.M.E., between about 11:12 am and 2:32 pm, Sant’Elena, Giardini and San Zaccaria will be skipped. Navigation line 6 from Lido S.M.E. to Piazzale Roma will skip Sant’Elena and Giardini between 11:02 am and 2:22 pm; in the opposite direction from Piazzale Roma, Giardini and Sant’Elena will be skipped between about 10:41 am and 2:21 pm. Delays are also possible between 11:00 am and 4:00 pm on the affected navigation services. ACTV states that the return to normal service depends on how the event actually unfolds, so check the official notice before travelling. Note that line 6 here is a waterbus service, not the 6 and 6L buses between Marghera and Venice.',
         de:'Für die Regata Veleziana am Sonntag, 18. Oktober, ändert ACTV vorübergehend mehrere Schifffahrtslinien, die durch den Regattaverlauf im Canale di San Nicolò und das Ziel im Markusbecken betroffen sind. Auf Linie 5.1 ab Lido S.M.E. entfallen zwischen etwa 10:20 und 13:40 Uhr die Haltestellen San Zaccaria, Giardini und Sant’Elena. Auf Linie 5.2 ab Lido S.M.E. entfallen zwischen etwa 11:12 und 14:32 Uhr Sant’Elena, Giardini und San Zaccaria. Die Schifffahrtslinie 6 ab Lido S.M.E. Richtung Piazzale Roma lässt zwischen 11:02 und 14:22 Uhr Sant’Elena und Giardini aus; in Gegenrichtung ab Piazzale Roma entfallen zwischen etwa 10:41 und 14:21 Uhr Giardini und Sant’Elena. Zwischen 11:00 und 16:00 Uhr sind auf den betroffenen Schifffahrtslinien außerdem Verspätungen möglich. ACTV weist darauf hin, dass die Rückkehr zum regulären Betrieb vom tatsächlichen Verlauf der Veranstaltung abhängt. Prüfen Sie daher vor der Fahrt den offiziellen Hinweis. Linie 6 bezeichnet hier ein Vaporetto und darf nicht mit den Buslinien 6 und 6L zwischen Marghera und Venedig verwechselt werden.',
         fr:'Pour la Regata Veleziana du dimanche 18 octobre, ACTV modifie temporairement plusieurs lignes de navigation concernées par le passage de la régate dans le canal de San Nicolò et son arrivée dans le bassin de Saint-Marc. Sur la ligne 5.1 au départ de Lido S.M.E., entre environ 10 h 20 et 13 h 40, les arrêts San Zaccaria, Giardini et Sant’Elena ne sont pas desservis. Sur la ligne 5.2 depuis Lido S.M.E., entre environ 11 h 12 et 14 h 32, Sant’Elena, Giardini et San Zaccaria sont supprimés. La ligne de navigation 6 de Lido S.M.E. vers Piazzale Roma ne dessert pas Sant’Elena et Giardini entre 11 h 02 et 14 h 22 ; dans le sens Piazzale Roma–Lido S.M.E., Giardini et Sant’Elena sont supprimés entre environ 10 h 41 et 14 h 21. Des retards sont également possibles entre 11 h et 16 h sur les lignes de navigation concernées. ACTV précise que le retour au service normal dépendra du déroulement effectif de la manifestation : consultez l’avis officiel avant de partir. La ligne 6 mentionnée ici est un vaporetto, à ne pas confondre avec les bus 6 et 6L entre Marghera et Venise.',
         es:'Para la Regata Veleziana del domingo 18 de octubre, ACTV modifica temporalmente varias líneas de navegación afectadas por el paso de la regata por el canal de San Nicolò y su llegada a la cuenca de San Marcos. En la línea 5.1 desde Lido S.M.E., entre aproximadamente las 10:20 y las 13:40, no se efectuarán las paradas San Zaccaria, Giardini y Sant’Elena. En la 5.2 desde Lido S.M.E., entre aproximadamente las 11:12 y las 14:32, se omitirán Sant’Elena, Giardini y San Zaccaria. La línea 6 de navegación desde Lido S.M.E. hacia Piazzale Roma omitirá Sant’Elena y Giardini entre las 11:02 y las 14:22; en sentido contrario, desde Piazzale Roma, Giardini y Sant’Elena se omitirán entre aproximadamente las 10:41 y las 14:21. Entre las 11:00 y las 16:00 también pueden producirse retrasos en las líneas de navegación afectadas. ACTV indica que la recuperación del servicio regular dependerá del desarrollo real de la prueba, así que consulta el aviso oficial antes de salir. La línea 6 citada aquí es un vaporetto y no debe confundirse con los autobuses 6 y 6L entre Marghera y Venecia.',
         zh:'2026年10月18日星期日举行 Veleziana 帆船赛期间，ACTV 将临时调整部分水上交通线路，原因是比赛将经过 San Nicolò 水道并在圣马可湾结束。5.1号水上巴士从 Lido S.M.E. 出发的班次约在10:20–13:40期间不停靠 San Zaccaria、Giardini 和 Sant’Elena；5.2号线从 Lido S.M.E. 出发约在11:12–14:32期间不停靠 Sant’Elena、Giardini 和 San Zaccaria。水上交通6号线从 Lido S.M.E. 前往 Piazzale Roma 时，11:02–14:22期间不停靠 Sant’Elena 和 Giardini；从 Piazzale Roma 前往 Lido S.M.E. 时，约10:41–14:21期间不停靠 Giardini 和 Sant’Elena。11:00–16:00期间，受比赛影响的水上线路还可能出现延误。ACTV 明确说明，恢复正常服务的时间取决于比赛实际进程，因此出发前请查看官方公告。这里的6号线是水上巴士，不要与 Marghera 往返威尼斯的6路和6L路公交车混淆。'
       })]
    ];
    item.sectionLinks=[...(item.sectionLinks||[]),{
      section:actvIndex,
      text:m(lang,{it:'Avviso ufficiale: ',en:'Official notice: ',de:'Offizieller Hinweis: ',fr:'Avis officiel : ',es:'Aviso oficial: ',zh:'官方公告：'}),
      label:'ACTV',
      href:'https://actv.avmspa.it/it/content/regata-la-veleziana-modifiche-ai-servizi-di-navigazione',
      tail:'.'
    }];
    item.dateModified='2026-10-16';
  }

  if(slug==='salone-alto-artigianato-italiano-2026'){
    const nextEditionIndex=(item.sections||[]).length;
    item.sections=[...(item.sections||[]),
      [m(lang,{it:'Salone dell’Alto Artigianato 2027: le prossime date',en:'Salone dell’Alto Artigianato 2027: next dates',de:'Salone dell’Alto Artigianato 2027: die nächsten Termine',fr:'Salone dell’Alto Artigianato 2027 : les prochaines dates',es:'Salone dell’Alto Artigianato 2027: próximas fechas',zh:'2027年 Salone dell’Alto Artigianato：下一届日期'}),
       m(lang,{
         it:'Stai organizzando un viaggio a Venezia per l’autunno 2027? Gli organizzatori hanno già annunciato la quinta edizione del Salone dell’Alto Artigianato Italiano, in programma all’Arsenale di Venezia da giovedì 30 settembre a domenica 3 ottobre 2027. Programma, espositori, biglietti e orari della nuova edizione saranno da verificare sul sito ufficiale dell’organizzazione: i dati pratici riportati sopra restano riferiti esclusivamente all’edizione 2026.',
         en:'Planning a trip to Venice for autumn 2027? The organisers have already announced the fifth edition of the Salone dell’Alto Artigianato Italiano, scheduled at the Venice Arsenal from Thursday 30 September to Sunday 3 October 2027. The new edition’s programme, exhibitors, tickets and opening hours still need to be checked on the official website: the practical details above refer only to the 2026 edition.',
         de:'Planen Sie eine Reise nach Venedig im Herbst 2027? Die Veranstalter haben bereits die fünfte Ausgabe des Salone dell’Alto Artigianato Italiano angekündigt. Sie findet von Donnerstag, 30. September, bis Sonntag, 3. Oktober 2027 im Arsenale di Venezia statt. Programm, Aussteller, Tickets und Öffnungszeiten der neuen Ausgabe müssen auf der offiziellen Website geprüft werden; die oben genannten praktischen Angaben beziehen sich ausschließlich auf 2026.',
         fr:'Vous préparez un voyage à Venise pour l’automne 2027 ? Les organisateurs ont déjà annoncé la cinquième édition du Salone dell’Alto Artigianato Italiano, prévue à l’Arsenale di Venezia du jeudi 30 septembre au dimanche 3 octobre 2027. Le programme, les exposants, les billets et les horaires de la nouvelle édition devront être vérifiés sur le site officiel ; les informations pratiques ci-dessus concernent uniquement l’édition 2026.',
         es:'¿Estás organizando un viaje a Venecia para el otoño de 2027? Los organizadores ya han anunciado la quinta edición del Salone dell’Alto Artigianato Italiano, prevista en el Arsenale di Venezia del jueves 30 de septiembre al domingo 3 de octubre de 2027. El programa, los expositores, las entradas y los horarios de la nueva edición deberán comprobarse en la web oficial; los datos prácticos anteriores se refieren exclusivamente a la edición de 2026.',
         zh:'计划在2027年秋季前往威尼斯吗？主办方已经公布第五届 Salone dell’Alto Artigianato Italiano，将于2027年9月30日星期四至10月3日星期日在威尼斯 Arsenale 举行。新一届的活动安排、参展商、门票和开放时间仍需以主办方官网后续公布的信息为准；本文上方的具体实用信息仅适用于2026年版本。'
       })]
    ];
    item.sectionLinks=[...(item.sectionLinks||[]),{
      section:nextEditionIndex,
      text:m(lang,{it:'Prossima edizione: ',en:'Next edition: ',de:'Nächste Ausgabe: ',fr:'Prochaine édition : ',es:'Próxima edición: ',zh:'下一届官方信息：'}),
      label:m(lang,{it:'sito ufficiale del Salone',en:'official Salone website',de:'offizielle Website des Salone',fr:'site officiel du Salone',es:'web oficial del Salone',zh:'Salone 官方网站'}),
      href:'https://saloneartigianato.venezia.it/',
      tail:'.'
    }];
    item.dateModified='2026-10-16';
  }

  if(slug==='venicemarathon-2026'){
    const familyTitle=m(lang,{it:'Family Run Mestre: 23 ottobre',en:'Mestre Family Run: 23 October',de:'Family Run Mestre: 23. Oktober',fr:'Family Run Mestre : 23 octobre',es:'Family Run Mestre: 23 de octubre',zh:'Mestre Family Run：10月23日'});
    const familyText=m(lang,{
      it:'La Alì Family Run di Mestre si svolge venerdì 23 ottobre al Parco San Giuliano, Porta Blu. Ritrovo alle 09:00 e partenza alle 10:00, su un percorso ludico-motorio non competitivo di circa 4 km. Le iscrizioni seguono le modalità ufficiali della Family Run e non vanno confuse con le gare competitive della Venicemarathon.',
      en:'The Mestre Alì Family Run takes place on Friday 23 October at Parco San Giuliano, Porta Blu. Meeting time is 9:00 am and the non-competitive roughly 4 km run starts at 10:00 am. Registration follows the official Family Run process and is separate from the competitive Venicemarathon races.',
      de:'Der Alì Family Run Mestre findet am Freitag, 23. Oktober im Parco San Giuliano, Porta Blu statt. Treffpunkt ist um 09:00 Uhr, Start um 10:00 Uhr; die nicht wettkampforientierte Strecke ist etwa 4 km lang. Die Anmeldung läuft getrennt von den Venicemarathon-Wettkämpfen.',
      fr:'L’Alì Family Run de Mestre a lieu vendredi 23 octobre au Parco San Giuliano, Porta Blu. Rendez-vous à 9 h, départ à 10 h, sur un parcours non compétitif d’environ 4 km. Les inscriptions sont distinctes des courses compétitives de la Venicemarathon.',
      es:'La Alì Family Run de Mestre se celebra el viernes 23 de octubre en Parco San Giuliano, Porta Blu. Encuentro a las 09:00 y salida a las 10:00, con un recorrido no competitivo de unos 4 km. La inscripción es independiente de las pruebas competitivas.',
      zh:'Mestre 的 Alì Family Run 将于10月23日星期五在 Parco San Giuliano 的 Porta Blu 举行。09:00集合，10:00出发，路线约4公里，为非竞技活动；报名与 Venicemarathon 竞技项目分开。'
    });
    item.sections=(item.sections||[]).filter(([a])=>!(/family run/i.test(a)||/Family Run/.test(a)));
    item.sections=[...(item.sections||[]),[familyTitle,familyText]];
    item.dateModified='2026-10-15';
  }

  if(slug==='arte-laguna-prize-2026'){
    const practical=m(lang,{it:'Orari e appuntamenti già pubblicati',en:'Published opening hours and key events',de:'Veröffentlichte Öffnungszeiten und Termine',fr:'Horaires et rendez-vous déjà publiés',es:'Horarios y citas ya publicados',zh:'已公布的开放时间与重要活动'});
    const practicalText=m(lang,{
      it:'La mostra dei finalisti è all’Arsenale Nord, Tese 89–90–91, dal 6 al 29 novembre 2026 ed è aperta ogni giorno dalle 10:00 alle 18:00. Il calendario dettagliato del 6 novembre distingue: conferenza stampa alle 12:00, inaugurazione alle 17:00 e cerimonia di premiazione alle 19:00. L’organizzatore ha inoltre pubblicato su Eventbrite il collegamento per prenotare la visita. Non deduciamo da questo né gratuità generalizzata né obbligo di prenotazione: per le condizioni effettive fa fede la pagina di prenotazione aggiornata.',
      en:'The finalists’ exhibition runs at Arsenale Nord, Tese 89–90–91, from 6 to 29 November 2026 and is open daily from 10 am to 6 pm. The detailed schedule for 6 November separates the press conference at noon, opening at 5 pm and awards ceremony at 7 pm. The organiser has also published an Eventbrite link for booking a visit. This does not by itself mean that booking is mandatory or that all access is free; check the current booking page for the applicable conditions.',
      de:'Die Finalistenausstellung läuft vom 6. bis 29. November 2026 im Arsenale Nord, Tese 89–90–91, täglich von 10:00 bis 18:00 Uhr. Der detaillierte Ablauf am 6. November nennt die Pressekonferenz um 12:00 Uhr, die Eröffnung um 17:00 Uhr und die Preisverleihung um 19:00 Uhr. Der Veranstalter hat außerdem einen Eventbrite-Link zur Besuchsreservierung veröffentlicht. Daraus leiten wir weder eine allgemeine Reservierungspflicht noch kostenlose Teilnahme ab; maßgeblich sind die aktuellen Buchungsbedingungen.',
      fr:'L’exposition des finalistes se tient à l’Arsenale Nord, Tese 89–90–91, du 6 au 29 novembre 2026, tous les jours de 10 h à 18 h. Le programme détaillé du 6 novembre distingue la conférence de presse à 12 h, l’inauguration à 17 h et la remise des prix à 19 h. L’organisateur a également publié un lien Eventbrite pour réserver une visite. Cela ne permet pas d’affirmer que la réservation est obligatoire ni que tout accès est gratuit : vérifiez les conditions à jour.',
      es:'La exposición de finalistas se celebra en Arsenale Nord, Tese 89–90–91, del 6 al 29 de noviembre de 2026, todos los días de 10:00 a 18:00. El programa detallado del 6 de noviembre distingue rueda de prensa a las 12:00, inauguración a las 17:00 y ceremonia de entrega de premios a las 19:00. El organizador también ha publicado un enlace de Eventbrite para reservar la visita. Esto no implica por sí solo reserva obligatoria ni gratuidad general: consulta las condiciones actualizadas.',
      zh:'入围艺术家展将于2026年11月6日至29日在 Arsenale Nord 的 Tese 89–90–91 举行，每天10:00–18:00开放。11月6日详细日程分别为：12:00新闻发布会、17:00开幕、19:00颁奖典礼。主办方还发布了 Eventbrite 参观预约链接。这里不据此推断所有时段必须预约或一律免费，实际条件请以最新预约页面为准。'
    });
    const arrivalText=m(lang,{
      it:'Da Marghera raggiungi Venezia con bus o treno e prosegui verso Arsenale Nord. ACTV linea 5.2 serve la fermata Bacini–Arsenale Nord; alcune corse possono effettuare la fermata a richiesta, quindi verifica l’orario ACTV aggiornato per il giorno della visita. Dalla fermata prosegui seguendo la segnaletica per le Tese 89–90–91.',
      en:'From Marghera, travel into Venice by bus or train and continue towards Arsenale Nord. ACTV line 5.2 serves Bacini–Arsenale Nord; on some services the stop may be on request, so check the current ACTV timetable for your visit date. From the stop, follow signs for Tese 89–90–91.',
      de:'Von Marghera fahren Sie mit Bus oder Bahn nach Venedig und weiter zum Arsenale Nord. Die ACTV-Linie 5.2 bedient Bacini–Arsenale Nord; bei einzelnen Verbindungen kann es sich um eine Bedarfshaltestelle handeln. Prüfen Sie daher den aktuellen ACTV-Fahrplan und folgen Sie vor Ort der Beschilderung zu den Tese 89–90–91.',
      fr:'Depuis Marghera, rejoignez Venise en bus ou en train puis continuez vers l’Arsenale Nord. La ligne ACTV 5.2 dessert Bacini–Arsenale Nord ; selon les services, l’arrêt peut être à la demande. Vérifiez donc l’horaire ACTV du jour, puis suivez la signalétique vers les Tese 89–90–91.',
      es:'Desde Marghera, llega a Venecia en autobús o tren y continúa hacia Arsenale Nord. La línea ACTV 5.2 para en Bacini–Arsenale Nord; en algunos servicios la parada puede ser bajo petición. Comprueba el horario ACTV actualizado y sigue después las indicaciones hacia Tese 89–90–91.',
      zh:'从 Marghera 可乘巴士或火车进入威尼斯，再前往 Arsenale Nord。ACTV 5.2号线停靠 Bacini–Arsenale Nord；部分班次可能为按需停靠，因此请查看参观当天的最新 ACTV 时刻表。下船后按照指示前往 Tese 89–90–91。'
    });
    const arrival=/come arrivare|getting there|anreise|comment arriver|cómo llegar|如何.*到|前往/i;
    const stale=/in aggiornamento|updating|aktualisierung|mise à jour|actualizando|尚未|non pubblic|not yet|noch nicht|pas encore|no .*public/i;
    item.sections=(item.sections||[])
      .filter(([a,b])=>arrival.test(a)||!(stale.test(a+' '+b)&&(/orari|hours|öffnungs|horaires|horarios|时间|access|zugang|accès|acceso|入场/i.test(a+' '+b))))
      .map(([a,b])=>arrival.test(a)?[a,arrivalText] as const:[a,b]);
    item.sections=item.sections.filter(([a])=>a!==practical);
    const practicalIndex=item.sections.length;
    item.sections=[...item.sections,[practical,practicalText]];
    item.tip=m(lang,{
      it:'Orari e sede sono pubblicati. Per la visita usa il collegamento Eventbrite indicato dall’organizzatore e verifica lì le condizioni aggiornate; per il vaporetto controlla l’orario ACTV della linea 5.2.',
      en:'Opening hours and venue are published. Use the organiser’s Eventbrite link for current visit conditions, and check the ACTV line 5.2 timetable before travelling.',
      de:'Öffnungszeiten und Ort sind veröffentlicht. Prüfen Sie die aktuellen Besuchsbedingungen über den Eventbrite-Link des Veranstalters und den Fahrplan der ACTV-Linie 5.2.',
      fr:'Les horaires et le lieu sont publiés. Consultez le lien Eventbrite de l’organisateur pour les conditions de visite et l’horaire ACTV de la ligne 5.2.',
      es:'Los horarios y la sede están publicados. Consulta el enlace Eventbrite del organizador para las condiciones de visita y el horario ACTV de la línea 5.2.',
      zh:'开放时间与地点已经公布。参观条件请查看主办方 Eventbrite 链接；乘船前请核对 ACTV 5.2号线最新时刻。'
    });
    const bookingQ=/bigliett|ticket|reserv|buch|billet|entrada|预.*约|门票/i;
    const reachQ=/raggiung|reach|erreich|rejoindre|lleg|到达|前往/i;
    item.faq=(item.faq||[]).map(f=>bookingQ.test(f.question)?{...f,answer:m(lang,{
      it:'L’organizzatore ha pubblicato un collegamento Eventbrite per prenotare la visita. Le condizioni possono variare: non consideriamo automaticamente la prenotazione obbligatoria né l’ingresso gratuito; verifica la pagina Eventbrite aggiornata.',
      en:'The organiser has published an Eventbrite link for booking a visit. Conditions may vary, so do not assume booking is mandatory or admission is free; check the current Eventbrite page.',
      de:'Der Veranstalter hat einen Eventbrite-Link zur Besuchsreservierung veröffentlicht. Die Bedingungen können variieren; weder Reservierungspflicht noch kostenloser Eintritt werden hier pauschal angenommen.',
      fr:'L’organisateur a publié un lien Eventbrite pour réserver une visite. Les conditions peuvent varier : ne supposez ni réservation obligatoire ni gratuité générale et vérifiez la page Eventbrite actuelle.',
      es:'El organizador ha publicado un enlace de Eventbrite para reservar la visita. Las condiciones pueden variar: no damos por supuesta ni la reserva obligatoria ni la gratuidad general.',
      zh:'主办方已发布 Eventbrite 参观预约链接。具体条件可能变化，因此不应默认必须预约或一律免费，请查看最新 Eventbrite 页面。'
    })}:reachQ.test(f.question)?{...f,answer:arrivalText}:f);
    const eventbrite='https://www.eventbrite.it/e/biglietti-arte-laguna-prize-finalists-exhibition-arsenale-nord-venice-2026-1999483058653';
    item.sectionLinks=[...(item.sectionLinks||[]).filter(l=>!l.href.includes('eventbrite')),{
      section:practicalIndex,
      text:m(lang,{it:'Prenotazione visita: ',en:'Visit booking: ',de:'Besuchsreservierung: ',fr:'Réservation de visite : ',es:'Reserva de visita: ',zh:'参观预约：'}),
      label:'Eventbrite',
      href:eventbrite,
      tail:'.'
    }];
    item.official=[m(lang,{it:'Arte Laguna Prize 2026 – mostra ufficiale',en:'Arte Laguna Prize 2026 – official exhibition',de:'Arte Laguna Prize 2026 – offizielle Ausstellung',fr:'Arte Laguna Prize 2026 – exposition officielle',es:'Arte Laguna Prize 2026 – exposición oficial',zh:'Arte Laguna Prize 2026 – 官方展览'}),'https://artelagunaprize.com/it/mostra-2026/'];
    item.dateModified='2026-10-15';
  }

  if(slug==='venice-cocktail-week-2026'){
    const practicalTitle=m(lang,{it:'Informazioni pratiche',en:'Practical information',de:'Praktische Informationen',fr:'Informations pratiques',es:'Información práctica',zh:'实用信息'});
    const practicalText=m(lang,{
      it:'Venice Cocktail Week si svolge dal 21 al 25 ottobre 2026. L’organizzazione indica 31 Selected Bars — 21 hotel bar e 10 cocktail bar — oltre a 12 Event Partner. Il calendario comprende guest shift, masterclass, degustazioni e appuntamenti speciali; accesso, orari, prezzi e prenotazioni cambiano da evento a evento, quindi va consultato il programma ufficiale aggiornato.',
      en:'Venice Cocktail Week runs from 21 to 25 October 2026. The organisers list 31 Selected Bars — 21 hotel bars and 10 cocktail bars — plus 12 Event Partners. The calendar includes guest shifts, masterclasses, tastings and special events; access, times, prices and booking rules vary by event, so check the current official programme.',
      de:'Die Venice Cocktail Week findet vom 21. bis 25. Oktober 2026 statt. Genannt werden 31 Selected Bars — 21 Hotelbars und 10 Cocktailbars — sowie 12 Event Partner. Guest Shifts, Masterclasses, Tastings und Sonderveranstaltungen haben jeweils eigene Zeiten, Preise und Reservierungsregeln; maßgeblich ist das aktuelle offizielle Programm.',
      fr:'Venice Cocktail Week se tient du 21 au 25 octobre 2026 avec 31 Selected Bars — 21 bars d’hôtel et 10 cocktail bars — ainsi que 12 Event Partners. Guest shifts, masterclasses, dégustations et rendez-vous spéciaux ont chacun leurs horaires, tarifs et règles de réservation : consultez le programme officiel à jour.',
      es:'Venice Cocktail Week se celebra del 21 al 25 de octubre de 2026 con 31 Selected Bars — 21 bares de hotel y 10 cocktail bars — y 12 Event Partners. Guest shifts, masterclasses, catas y eventos especiales tienen horarios, precios y reservas propios: consulta el programa oficial actualizado.',
      zh:'Venice Cocktail Week 于2026年10月21日至25日举行，共有31家 Selected Bars（21家酒店酒吧、10家鸡尾酒吧）以及12个 Event Partner。活动包括客座调酒、masterclass、品鉴和特别活动；不同项目的时间、价格与预约规则各不相同，请查看最新官方日程。'
    });
    const practical=/informazioni pratiche|practical information|praktische information|informations pratiques|información práctica|实用信息/i;
    const added=/programma 2026|2026 programme|programm 2026|programme 2026|programa 2026|2026年活动日程/i;
    let replaced=false;
    item.sections=(item.sections||[]).filter(([a])=>!added.test(a)).map(([a,b])=>{
      if(practical.test(a)){replaced=true;return [practicalTitle,practicalText] as const;}
      return [a,b] as const;
    });
    if(!replaced)item.sections=[...(item.sections||[]),[practicalTitle,practicalText]];
    item.dateModified='2026-10-15';
  }

  if(slug==='venezia-a-novembre'){
    const title=m(lang,{it:'Tre appuntamenti da tenere d’occhio a novembre',en:'Three November dates worth noting',de:'Drei wichtige November-Termine',fr:'Trois rendez-vous à retenir en novembre',es:'Tres citas de noviembre para tener en cuenta',zh:'11月值得留意的三个重点'});
    const text=m(lang,{
      it:'Novembre 2026 riunisce tre appuntamenti internazionali molto diversi. Arte Laguna Prize porta la mostra dei finalisti all’Arsenale Nord dal 6 al 29 novembre, ogni giorno 10:00–18:00. Venice Noir anima la città dal 12 al 15 novembre con il suo programma internazionale dedicato al crime e al noir. Dal 13 al 22 novembre, infine, Biennale Arte affianca agli ultimi giorni di In Minor Keys un programma conclusivo di performance, conferenze e incontri. Per orari e accessi fa sempre fede la pagina ufficiale del singolo evento.',
      en:'November 2026 brings together three very different international events. Arte Laguna Prize presents its finalists at Arsenale Nord from 6 to 29 November, daily 10am–6pm. Venice Noir runs from 12 to 15 November with its international crime and noir programme. From 13 to 22 November, the final days of Biennale Arte are accompanied by a closing programme of performances, talks and discussions. Check each event’s official page for access and exact times.',
      de:'Im November 2026 treffen drei sehr unterschiedliche internationale Veranstaltungen zusammen. Arte Laguna Prize zeigt seine Finalisten vom 6. bis 29. November täglich 10:00–18:00 Uhr im Arsenale Nord. Venice Noir findet vom 12. bis 15. November mit internationalem Krimi- und Noir-Programm statt. Vom 13. bis 22. November ergänzt die Biennale Arte ihre letzten Ausstellungstage mit Performances, Gesprächen und Konferenzen. Für Zeiten und Zugang gilt jeweils die offizielle Veranstaltungsseite.',
      fr:'Novembre 2026 réunit trois rendez-vous internationaux très différents. Arte Laguna Prize présente les finalistes à l’Arsenale Nord du 6 au 29 novembre, tous les jours de 10 h à 18 h. Venice Noir se déroule du 12 au 15 novembre avec son programme international consacré au polar et au noir. Du 13 au 22 novembre, les derniers jours de Biennale Arte s’accompagnent d’un programme de clôture de performances, rencontres et conférences. Vérifiez chaque source officielle pour les accès et horaires.',
      es:'Noviembre de 2026 reúne tres citas internacionales muy distintas. Arte Laguna Prize presenta a sus finalistas en Arsenale Nord del 6 al 29 de noviembre, todos los días de 10:00 a 18:00. Venice Noir se celebra del 12 al 15 de noviembre con su programa internacional de novela negra. Del 13 al 22 de noviembre, los últimos días de Biennale Arte incluyen un programa final de performances, encuentros y conferencias. Consulta cada fuente oficial para horarios y acceso.',
      zh:'2026年11月有三个值得关注的国际活动。Arte Laguna Prize 入围作品展于11月6日至29日在 Arsenale Nord 举行，每天10:00–18:00；Venice Noir 于11月12日至15日带来国际犯罪与 noir 文学活动；11月13日至22日，Biennale Arte 在 In Minor Keys 最后阶段加入表演、讲座与讨论等闭幕特别节目。具体入场与时间请查看各活动官方页面。'
    });
    item.sections=[...(item.sections||[]),[title,text]];
    item.relatedSlugs=Array.from(new Set([...(item.relatedSlugs||[]),'arte-laguna-prize-2026','venice-noir-2026']));
    item.dateModified='2026-10-15';
  }

}
