import type {EventArticle,EventLang} from './journal-events-2026';

const m=(lang:EventLang,values:Record<EventLang,string>)=>values[lang];

function addSectionIfMissing(item:EventArticle,title:string,text:string){
 if(!(item.sections||[]).some(([t])=>t===title)) item.sections=[...(item.sections||[]),[title,text]];
}
function addLinkIfMissing(item:EventArticle,section:number,href:string,text:string,label:string,tail='.'){
 if(!item.sectionLinks?.some(link=>link.href===href&&link.section===section)){
  item.sectionLinks=[...(item.sectionLinks||[]),{section,text,label,href,tail}];
 }
}

export function applyJournalCatchup20261025(item:EventArticle,lang:EventLang,slug:string){
 if(!item)return;

 if(slug==='cimitero-san-michele-venezia'){
  const bridgeTitle=m(lang,{
   it:'Il ponte di San Michele nel 2026: cosa sappiamo',
   en:'San Michele bridge in 2026: what is confirmed',
   de:'San Michele 2026: Was ist bestätigt?',
   fr:'Pont de San Michele 2026 : ce qui est confirmé',
   es:'Puente de San Michele 2026: qué está confirmado',
   zh:'2026年 San Michele 临时步行桥：目前已确认的信息'
  });
  const bridgeText=m(lang,{
   it:'Al 26 ottobre 2026 non risulta ancora una conferma ufficiale dell’allestimento del collegamento pedonale temporaneo dalle Fondamente Nove al Cimitero di San Michele. Il ponte è stato riproposto nel 2025, ma date, orari e modalità di accesso di quell’edizione non possono essere considerati validi per il 2026. Sono invece confermati i collegamenti speciali ACTV per la Commemorazione dei Defunti dal 31 ottobre al 2 novembre 2026.',
   en:'As of 26 October 2026, there is still no official confirmation that the temporary pedestrian bridge from Fondamente Nove to San Michele Cemetery will be installed this year. The bridge returned in 2025, but its dates, opening times and access rules cannot be carried over to 2026. What is confirmed are ACTV’s special services for the Commemoration of the Dead from 31 October to 2 November 2026.',
   de:'Mit Stand vom 26. Oktober 2026 gibt es noch keine offizielle Bestätigung, dass die temporäre Fußgängerbrücke von den Fondamente Nove zum Friedhof San Michele 2026 aufgebaut wird. Die Brücke wurde 2025 erneut eingerichtet, doch Termine, Öffnungszeiten und Zugangsregeln dieser Ausgabe dürfen nicht auf 2026 übertragen werden. Bestätigt sind dagegen die ACTV-Sonderverbindungen zum Totengedenken vom 31. Oktober bis 2. November 2026.',
   fr:'Au 26 octobre 2026, aucune confirmation officielle ne signale encore l’installation du pont piéton temporaire entre Fondamente Nove et le cimetière de San Michele. Le pont a été réinstallé en 2025, mais les dates, horaires et conditions d’accès de cette édition ne peuvent pas être transposés à 2026. En revanche, les liaisons spéciales ACTV pour la Commémoration des Défunts sont confirmées du 31 octobre au 2 novembre 2026.',
   es:'A 26 de octubre de 2026 todavía no existe una confirmación oficial de la instalación del puente peatonal temporal entre Fondamente Nove y el Cementerio de San Michele. El puente volvió en 2025, pero las fechas, horarios y condiciones de acceso de aquella edición no pueden trasladarse a 2026. Sí están confirmados los servicios especiales de ACTV para la Conmemoración de los Difuntos del 31 de octubre al 2 de noviembre de 2026.',
   zh:'截至2026年10月26日，官方尚未确认今年会搭设从 Fondamente Nove 通往 San Michele 公墓的临时步行浮桥。该桥曾在2025年恢复，但2025年的日期、开放时间和通行规则不能直接沿用到2026年。目前已经确认的是 ACTV 将于2026年10月31日至11月2日为亡者纪念日提供特别交通服务。'
  });
  item.sections=(item.sections||[]).map(([title,text])=>/ponte di san michele nel 2026|San Michele bridge in 2026|San Michele 2026:|Pont de San Michele 2026|Puente de San Michele 2026|2026年 San Michele/i.test(title)?[bridgeTitle,bridgeText] as const:[title,text] as const);

  const actvTitle=m(lang,{
   it:'31 ottobre–2 novembre: collegamenti gratuiti ACTV',
   en:'31 October–2 November: free ACTV special services',
   de:'31. Oktober–2. November: kostenlose ACTV-Sonderverbindungen',
   fr:'31 octobre–2 novembre : liaisons spéciales ACTV gratuites',
   es:'31 de octubre–2 de noviembre: servicios especiales gratuitos de ACTV',
   zh:'10月31日–11月2日：ACTV 免费特别交通服务'
  });
  const actvText=m(lang,{
   it:'Per la Commemorazione dei Defunti ACTV attiva collegamenti acquei speciali gratuiti verso San Michele dalle Fondamente Nove, da Piazzale Roma passando per Venezia Santa Lucia e dal Lido. Alcune corse della linea 13 effettuano inoltre una fermata straordinaria al Cimitero: questo non significa che l’intera linea 13 sia gratuita. Per gli ospiti MVA che arrivano dalla terraferma è particolarmente utile il servizio da Piazzale Roma e Ferrovia. Prima di partire verifica comunque l’avviso ACTV aggiornato.',
   en:'For the Commemoration of the Dead, ACTV is operating special free waterbus services to San Michele from Fondamente Nove, from Piazzale Roma via Venezia Santa Lucia railway station, and from the Lido. Selected line 13 services also make an extraordinary stop at the cemetery; this does not mean the entire line 13 is free. For MVA guests travelling from the mainland, the Piazzale Roma and railway-station service is especially useful. Re-check the current ACTV notice before travelling.',
   de:'Zum Totengedenken richtet ACTV kostenlose Sonderverbindungen nach San Michele von den Fondamente Nove, von Piazzale Roma über den Bahnhof Venezia Santa Lucia und vom Lido ein. Ausgewählte Fahrten der Linie 13 halten zusätzlich am Friedhof; das bedeutet nicht, dass die gesamte Linie 13 kostenlos ist. Für MVA-Gäste vom Festland ist besonders die Verbindung über Piazzale Roma und den Bahnhof praktisch. Prüfen Sie vor der Fahrt nochmals die aktuelle ACTV-Mitteilung.',
   fr:'Pour la Commémoration des Défunts, ACTV met en place des liaisons spéciales gratuites vers San Michele depuis Fondamente Nove, depuis Piazzale Roma via la gare Venezia Santa Lucia et depuis le Lido. Certaines courses de la ligne 13 desservent aussi exceptionnellement le cimetière ; cela ne signifie pas que toute la ligne 13 soit gratuite. Pour les hôtes MVA venant de la terre ferme, la liaison par Piazzale Roma et la gare est particulièrement pratique. Vérifiez l’avis ACTV avant le départ.',
   es:'Para la Conmemoración de los Difuntos, ACTV ofrece servicios acuáticos especiales gratuitos hacia San Michele desde Fondamente Nove, desde Piazzale Roma pasando por la estación Venezia Santa Lucia y desde el Lido. Algunas expediciones de la línea 13 realizan además una parada extraordinaria en el cementerio; esto no significa que toda la línea 13 sea gratuita. Para huéspedes MVA que llegan desde tierra firme resulta especialmente útil el servicio de Piazzale Roma y Ferrovia. Consulta de nuevo el aviso ACTV antes de salir.',
   zh:'亡者纪念日期间，ACTV 将提供前往 San Michele 的免费特别水上交通：从 Fondamente Nove、从 Piazzale Roma 经 Venezia Santa Lucia 火车站，以及从 Lido 出发。13号线的部分班次也会临时停靠公墓，但这并不表示整条13号线免费。对于从陆地区域出发的 MVA 住客，Piazzale Roma 和火车站方向的服务尤其方便。出发前仍请再次查看 ACTV 最新公告。'
  });
  addSectionIfMissing(item,actvTitle,actvText);
  const actvIndex=(item.sections||[]).findIndex(([t])=>t===actvTitle);
  addLinkIfMissing(item,actvIndex,'https://actv.avmspa.it/it/content/commemorazione-dei-defunti-servizi-gratuiti-e-fermata-straordinaria-di-linea-13',
   m(lang,{it:'Orari ufficiali: ',en:'Official timetable: ',de:'Offizieller Fahrplan: ',fr:'Horaires officiels : ',es:'Horarios oficiales: ',zh:'官方时刻：'}),
   'ACTV');
  addLinkIfMissing(item,Math.max(0,(item.sections||[]).findIndex(([t])=>t===bridgeTitle)),'https://www.comune.venezia.it/it/content/cimitero-smichele',
   m(lang,{it:'Aggiornamenti sul cimitero: ',en:'Cemetery updates: ',de:'Aktuelle Hinweise zum Friedhof: ',fr:'Mises à jour du cimetière : ',es:'Actualizaciones del cementerio: ',zh:'公墓最新信息：'}),
   m(lang,{it:'Comune di Venezia',en:'City of Venice',de:'Stadt Venedig',fr:'Ville de Venise',es:'Ayuntamiento de Venecia',zh:'威尼斯市政府'}));

  item.detailBlockSection={
   eyebrow:m(lang,{it:'SERVIZI SPECIALI · 31/10–02/11',en:'SPECIAL SERVICES · 31 OCT–2 NOV',de:'SONDERVERKEHR · 31.10.–02.11.',fr:'SERVICES SPÉCIAUX · 31/10–02/11',es:'SERVICIOS ESPECIALES · 31/10–02/11',zh:'特别交通 · 10月31日–11月2日'}),
   title:m(lang,{it:'Orari ACTV per San Michele',en:'ACTV times for San Michele',de:'ACTV-Zeiten für San Michele',fr:'Horaires ACTV pour San Michele',es:'Horarios ACTV para San Michele',zh:'前往 San Michele 的 ACTV 时刻'}),
   intro:m(lang,{it:'I servizi sotto sono quelli annunciati da ACTV per il 31 ottobre, 1 e 2 novembre 2026.',en:'These are the services announced by ACTV for 31 October, 1 November and 2 November 2026.',de:'Diese Verbindungen gelten laut ACTV am 31. Oktober sowie 1. und 2. November 2026.',fr:'Ces services sont ceux annoncés par ACTV pour les 31 octobre, 1er et 2 novembre 2026.',es:'Estos son los servicios anunciados por ACTV para el 31 de octubre y el 1 y 2 de noviembre de 2026.',zh:'以下为 ACTV 公布的2026年10月31日、11月1日和2日特别班次。'}),
   blocks:[
    {title:'Fondamente Nove ↔ Cimitero',lines:[
     m(lang,{it:'Fondamente Nove B: 09:05–17:05, minuti 05 · 25 · 45.',en:'Fondamente Nove B: 09:05–17:05, at 05 · 25 · 45 minutes past the hour.',de:'Fondamente Nove B: 09:05–17:05, jeweils Minute 05 · 25 · 45.',fr:'Fondamente Nove B : 09:05–17:05, aux minutes 05 · 25 · 45.',es:'Fondamente Nove B: 09:05–17:05, minutos 05 · 25 · 45.',zh:'Fondamente Nove B：09:05–17:05，每小时05、25、45分发船。'}),
     m(lang,{it:'Cimitero B: 09:15–17:15, minuti 15 · 35 · 55.',en:'Cimitero B: 09:15–17:15, at 15 · 35 · 55 minutes past the hour.',de:'Cimitero B: 09:15–17:15, jeweils Minute 15 · 35 · 55.',fr:'Cimitero B : 09:15–17:15, aux minutes 15 · 35 · 55.',es:'Cimitero B: 09:15–17:15, minutos 15 · 35 · 55.',zh:'Cimitero B：09:15–17:15，每小时15、35、55分返程。'})
    ]},
    {title:'Piazzale Roma / Ferrovia ↔ Cimitero',lines:[
     m(lang,{it:'Piazzale Roma D: 09:09–16:49, minuti 09 · 29 · 49.',en:'Piazzale Roma D: 09:09–16:49, at 09 · 29 · 49 minutes past the hour.',de:'Piazzale Roma D: 09:09–16:49, jeweils Minute 09 · 29 · 49.',fr:'Piazzale Roma D : 09:09–16:49, aux minutes 09 · 29 · 49.',es:'Piazzale Roma D: 09:09–16:49, minutos 09 · 29 · 49.',zh:'Piazzale Roma D：09:09–16:49，每小时09、29、49分。'}),
     m(lang,{it:'Ferrovia D: 09:13–16:53, minuti 13 · 33 · 53.',en:'Ferrovia D: 09:13–16:53, at 13 · 33 · 53 minutes past the hour.',de:'Ferrovia D: 09:13–16:53, jeweils Minute 13 · 33 · 53.',fr:'Ferrovia D : 09:13–16:53, aux minutes 13 · 33 · 53.',es:'Ferrovia D: 09:13–16:53, minutos 13 · 33 · 53.',zh:'Ferrovia D：09:13–16:53，每小时13、33、53分。'}),
     m(lang,{it:'Cimitero A: 09:35–17:15, minuti 15 · 35 · 55.',en:'Cimitero A: 09:35–17:15, at 15 · 35 · 55 minutes past the hour.',de:'Cimitero A: 09:35–17:15, jeweils Minute 15 · 35 · 55.',fr:'Cimitero A : 09:35–17:15, aux minutes 15 · 35 · 55.',es:'Cimitero A: 09:35–17:15, minutos 15 · 35 · 55.',zh:'Cimitero A：09:35–17:15，每小时15、35、55分返程。'})
    ]},
    {title:'Lido S.M.E. ↔ Cimitero',lines:[
     m(lang,{it:'Lido S.M.E. E: 10:10 · 11:10 · 12:10 · 14:10 · 15:10 · 16:10.',en:'Lido S.M.E. E: 10:10 · 11:10 · 12:10 · 14:10 · 15:10 · 16:10.',de:'Lido S.M.E. E: 10:10 · 11:10 · 12:10 · 14:10 · 15:10 · 16:10.',fr:'Lido S.M.E. E : 10:10 · 11:10 · 12:10 · 14:10 · 15:10 · 16:10.',es:'Lido S.M.E. E: 10:10 · 11:10 · 12:10 · 14:10 · 15:10 · 16:10.',zh:'Lido S.M.E. E：10:10 · 11:10 · 12:10 · 14:10 · 15:10 · 16:10。'}),
     m(lang,{it:'Cimitero A: 10:40 · 11:40 · 12:40 · 14:40 · 15:40 · 16:40.',en:'Cimitero A: 10:40 · 11:40 · 12:40 · 14:40 · 15:40 · 16:40.',de:'Cimitero A: 10:40 · 11:40 · 12:40 · 14:40 · 15:40 · 16:40.',fr:'Cimitero A : 10:40 · 11:40 · 12:40 · 14:40 · 15:40 · 16:40.',es:'Cimitero A: 10:40 · 11:40 · 12:40 · 14:40 · 15:40 · 16:40.',zh:'Cimitero A：10:40 · 11:40 · 12:40 · 14:40 · 15:40 · 16:40。'})
    ]},
    {title:'Linea 13',lines:[
     m(lang,{it:'Alcune corse effettuano una fermata straordinaria al Cimitero.',en:'Selected services make an extraordinary stop at the cemetery.',de:'Ausgewählte Fahrten halten zusätzlich am Friedhof.',fr:'Certaines courses effectuent un arrêt exceptionnel au cimetière.',es:'Algunas expediciones realizan una parada extraordinaria en el cementerio.',zh:'部分班次会临时停靠公墓。'}),
     m(lang,{it:'La gratuità non riguarda l’intera linea 13.',en:'The whole of line 13 is not free.',de:'Die gesamte Linie 13 ist nicht kostenlos.',fr:'La gratuité ne s’applique pas à toute la ligne 13.',es:'La gratuidad no se aplica a toda la línea 13.',zh:'并非整条13号线都免费。'})
    ]}
   ],
   note:m(lang,{it:'Dopo il 2 novembre questo riquadro non viene più mostrato come informazione operativa.',en:'After 2 November this panel is no longer shown as active visitor information.',de:'Nach dem 2. November wird dieser Hinweis nicht mehr als aktuelle Besucherinformation angezeigt.',fr:'Après le 2 novembre, ce bloc n’est plus affiché comme information opérationnelle.',es:'Después del 2 de noviembre este bloque deja de mostrarse como información operativa.',zh:'11月2日之后，该模块将不再作为当前出行信息显示。'}),
   visibleUntil:'2026-11-02'
  };
  item.eventDate=m(lang,{it:'SERVIZI ACTV · 31 OTTOBRE–2 NOVEMBRE 2026',en:'ACTV SERVICES · 31 OCTOBER–2 NOVEMBER 2026',de:'ACTV-VERKEHR · 31. OKTOBER–2. NOVEMBER 2026',fr:'SERVICES ACTV · 31 OCTOBRE–2 NOVEMBRE 2026',es:'SERVICIOS ACTV · 31 OCTUBRE–2 NOVIEMBRE 2026',zh:'ACTV 特别服务 · 2026年10月31日–11月2日'});
  item.description=m(lang,{
   it:'Cimitero di San Michele a Venezia: ponte 2026 non ancora confermato al 26 ottobre, servizi ACTV gratuiti 31 ottobre–2 novembre, storia e informazioni di visita.',
   en:'San Michele Cemetery in Venice: 2026 bridge not yet officially confirmed as of 26 October, free ACTV services 31 October–2 November, history and visitor information.',
   de:'Friedhof San Michele in Venedig: Brücke 2026 am 26. Oktober noch nicht offiziell bestätigt, kostenlose ACTV-Verbindungen 31. Oktober–2. November und Besuchsinfos.',
   fr:'Cimetière San Michele à Venise : pont 2026 non encore confirmé officiellement au 26 octobre, services ACTV gratuits du 31 octobre au 2 novembre et infos visite.',
   es:'Cementerio de San Michele en Venecia: puente 2026 aún no confirmado oficialmente a 26 de octubre, servicios ACTV gratuitos del 31 de octubre al 2 de noviembre e información de visita.',
   zh:'威尼斯 San Michele 公墓：截至10月26日，2026年临时步行桥尚未获官方确认；ACTV 于10月31日至11月2日提供免费特别交通，并附参观信息。'
  });
  item.relatedSlugs=Array.from(new Set([...(item.relatedSlugs||[]),'venezia-a-novembre']));
  item.dateModified='2026-10-26';
 }

 if(slug==='venezia-a-novembre'){
  const title=m(lang,{
   it:'31 ottobre–2 novembre: San Michele e la Commemorazione dei Defunti',
   en:'31 October–2 November: San Michele and the Commemoration of the Dead',
   de:'31. Oktober–2. November: San Michele und das Totengedenken',
   fr:'31 octobre–2 novembre : San Michele et la Commémoration des Défunts',
   es:'31 de octubre–2 de noviembre: San Michele y la Conmemoración de los Difuntos',
   zh:'10月31日–11月2日：San Michele 与亡者纪念日'
  });
  const text=m(lang,{
   it:'Dal 31 ottobre al 2 novembre ACTV prevede collegamenti acquei speciali gratuiti per il Cimitero di San Michele dalle Fondamente Nove, da Piazzale Roma/Ferrovia e dal Lido. Al 26 ottobre il Comune non ha invece ancora confermato l’eventuale ponte pedonale temporaneo dalle Fondamente Nove: le informazioni sul ponte vanno quindi verificate separatamente e non vanno ricavate dall’edizione 2025.',
   en:'From 31 October to 2 November, ACTV is operating special free waterbus services to San Michele Cemetery from Fondamente Nove, Piazzale Roma/railway station and the Lido. As of 26 October, the City has not yet confirmed whether the temporary pedestrian bridge from Fondamente Nove will return, so bridge information must be checked separately and must not be copied from the 2025 edition.',
   de:'Vom 31. Oktober bis 2. November bietet ACTV kostenlose Sonderverbindungen zum Friedhof San Michele von den Fondamente Nove, von Piazzale Roma/Bahnhof und vom Lido an. Mit Stand vom 26. Oktober hat die Stadt dagegen noch nicht bestätigt, ob die temporäre Fußgängerbrücke von den Fondamente Nove aufgebaut wird; Angaben zur Brücke müssen daher separat geprüft werden und dürfen nicht aus 2025 übernommen werden.',
   fr:'Du 31 octobre au 2 novembre, ACTV assure des liaisons spéciales gratuites vers le cimetière de San Michele depuis Fondamente Nove, Piazzale Roma/gare et le Lido. Au 26 octobre, la Ville n’a en revanche pas encore confirmé le retour du pont piéton temporaire depuis Fondamente Nove : les informations sur le pont doivent donc être vérifiées séparément et non reprises de l’édition 2025.',
   es:'Del 31 de octubre al 2 de noviembre, ACTV ofrece servicios acuáticos especiales gratuitos hacia el Cementerio de San Michele desde Fondamente Nove, Piazzale Roma/estación y el Lido. A 26 de octubre, el Ayuntamiento aún no ha confirmado el posible puente peatonal temporal desde Fondamente Nove; la información sobre el puente debe verificarse por separado y no copiarse de la edición 2025.',
   zh:'10月31日至11月2日，ACTV 将从 Fondamente Nove、Piazzale Roma/火车站以及 Lido 提供前往 San Michele 公墓的免费特别水上交通。截至10月26日，市政府尚未确认是否会恢复从 Fondamente Nove 出发的临时步行桥，因此关于桥的信息必须单独核实，不能沿用2025年的安排。'
  });
  addSectionIfMissing(item,title,text);
  const idx=(item.sections||[]).findIndex(([t])=>t===title);
  addLinkIfMissing(item,idx,'/journal/cimitero-san-michele-venezia',
    m(lang,{it:'Guida MVA: ',en:'MVA guide: ',de:'MVA-Guide: ',fr:'Guide MVA : ',es:'Guía MVA: ',zh:'MVA 指南：'}),
    m(lang,{it:'Cimitero di San Michele',en:'San Michele Cemetery',de:'Friedhof San Michele',fr:'Cimetière San Michele',es:'Cementerio de San Michele',zh:'San Michele 公墓'}));
  item.dateModified='2026-10-26';
 }

 if(slug==='biennale-musica-2026'){
  item.description=m(lang,{
   it:'La Biennale Musica 2026 si è svolta dal 10 al 24 ottobre: 130 artisti, oltre 40 appuntamenti, nuove opere, Leoni 2026 e serata conclusiva al Teatro alle Tese.',
   en:'Biennale Musica 2026 ran from 10 to 24 October with 130 artists, 40+ events, new works, the 2026 Lions and a closing night at Teatro alle Tese.',
   de:'Die Biennale Musica 2026 fand vom 10. bis 24. Oktober statt: 130 Künstler, über 40 Veranstaltungen, neue Werke, die Löwen 2026 und der Abschlussabend im Teatro alle Tese.',
   fr:'La Biennale Musica 2026 s’est déroulée du 10 au 24 octobre : 130 artistes, plus de 40 rendez-vous, nouvelles œuvres, Lions 2026 et soirée finale au Teatro alle Tese.',
   es:'La Biennale Musica 2026 se celebró del 10 al 24 de octubre: 130 artistas, más de 40 citas, nuevas obras, Leones 2026 y noche de clausura en el Teatro alle Tese.',
   zh:'2026 Biennale Musica 已于10月10日至24日举行，共有130位艺术家、40多场活动、新作、2026年狮奖以及 Teatro alle Tese 的闭幕之夜。'
  });
  const title=m(lang,{it:'24 ottobre: la serata conclusiva',en:'24 October: the closing night',de:'24. Oktober: der Abschlussabend',fr:'24 octobre : la soirée de clôture',es:'24 de octubre: la noche de clausura',zh:'10月24日：闭幕之夜'});
  const text=m(lang,{
   it:'La 70ª Biennale Musica si è conclusa il 24 ottobre 2026. Il programma finale al Teatro alle Tese ha riunito, tra gli altri, Clarissa Connelly, ONCEIM e Jay Mitta, chiudendo il festival A Child of Sound diretto da Caterina Barbieri. La pagina resta come guida e archivio dell’edizione 2026.',
   en:'The 70th Biennale Musica concluded on 24 October 2026. The final programme at Teatro alle Tese included Clarissa Connelly, ONCEIM and Jay Mitta, closing the A Child of Sound festival directed by Caterina Barbieri. This page now remains as a guide and archive of the 2026 edition.',
   de:'Die 70. Biennale Musica endete am 24. Oktober 2026. Zum Abschlussprogramm im Teatro alle Tese gehörten unter anderem Clarissa Connelly, ONCEIM und Jay Mitta; damit ging das von Caterina Barbieri geleitete Festival A Child of Sound zu Ende. Die Seite bleibt als Guide und Archiv der Ausgabe 2026 erhalten.',
   fr:'La 70e Biennale Musica s’est achevée le 24 octobre 2026. Le programme final au Teatro alle Tese réunissait notamment Clarissa Connelly, ONCEIM et Jay Mitta et a clôturé le festival A Child of Sound dirigé par Caterina Barbieri. Cette page reste désormais comme guide et archive de l’édition 2026.',
   es:'La 70.ª Biennale Musica terminó el 24 de octubre de 2026. El programa final en el Teatro alle Tese reunió, entre otros, a Clarissa Connelly, ONCEIM y Jay Mitta, cerrando el festival A Child of Sound dirigido por Caterina Barbieri. La página queda como guía y archivo de la edición 2026.',
   zh:'第70届 Biennale Musica 已于2026年10月24日结束。Teatro alle Tese 的最终节目包括 Clarissa Connelly、ONCEIM 和 Jay Mitta 等艺术家，为 Caterina Barbieri 执导的 A Child of Sound 画下句号。本页继续作为2026届的指南与档案保留。'
  });
  addSectionIfMissing(item,title,text);
  item.dateModified='2026-10-25';
 }

 if(slug==='salone-alto-artigianato-italiano-2026'){
  const title=m(lang,{it:'Bilancio 2026: oltre 15.000 visitatori',en:'2026 recap: more than 15,000 visitors',de:'Bilanz 2026: mehr als 15.000 Besucher',fr:'Bilan 2026 : plus de 15 000 visiteurs',es:'Balance 2026: más de 15.000 visitantes',zh:'2026回顾：超过15,000名访客'});
  const text=m(lang,{
   it:'La quarta edizione si è chiusa il 4 ottobre con oltre 15.000 visitatori. Il Salone ha riunito 163 maestri artigiani e circa 100 dimostrazioni dal vivo. Gli organizzatori hanno già annunciato la quinta edizione, dal 30 settembre al 3 ottobre 2027: programma, espositori, orari e biglietti 2027 saranno da verificare sulle comunicazioni dedicate alla nuova edizione.',
   en:'The fourth edition closed on 4 October with more than 15,000 visitors. The Salone brought together 163 master artisans and around 100 live demonstrations. The organisers have already announced the fifth edition for 30 September–3 October 2027; the 2027 programme, exhibitors, hours and tickets must be checked against the new edition’s official information.',
   de:'Die vierte Ausgabe endete am 4. Oktober mit mehr als 15.000 Besuchern. Der Salone vereinte 163 Handwerksmeister und rund 100 Live-Demonstrationen. Die fünfte Ausgabe ist bereits für den 30. September bis 3. Oktober 2027 angekündigt; Programm, Aussteller, Öffnungszeiten und Tickets 2027 müssen in den offiziellen Informationen zur neuen Ausgabe geprüft werden.',
   fr:'La quatrième édition s’est achevée le 4 octobre avec plus de 15 000 visiteurs. Le Salone a réuni 163 maîtres artisans et environ 100 démonstrations en direct. La cinquième édition est déjà annoncée du 30 septembre au 3 octobre 2027 ; programme, exposants, horaires et billets 2027 devront être vérifiés dans les communications de la nouvelle édition.',
   es:'La cuarta edición terminó el 4 de octubre con más de 15.000 visitantes. El Salone reunió a 163 maestros artesanos y unas 100 demostraciones en directo. La quinta edición ya está anunciada del 30 de septiembre al 3 de octubre de 2027; programa, expositores, horarios y entradas de 2027 deberán comprobarse en la información oficial de la nueva edición.',
   zh:'第四届活动于10月4日结束，访客超过15,000人，共有163位工艺大师和约100场现场演示。主办方已经公布第五届将于2027年9月30日至10月3日举行；2027年的节目、参展者、开放时间和门票仍需以新一届官方信息为准。'
  });
  addSectionIfMissing(item,title,text);
  item.dateModified='2026-10-25';
 }

 if(slug==='venice-design-week-2026'){
  const title=m(lang,{it:'L’edizione 2026 è conclusa, alcune mostre continuano',en:'The 2026 edition is over, while some exhibitions continue',de:'Die Ausgabe 2026 ist beendet, einige Ausstellungen laufen weiter',fr:'L’édition 2026 est terminée, certaines expositions continuent',es:'La edición 2026 ha terminado, algunas exposiciones continúan',zh:'2026主活动已结束，部分展览仍在继续'});
  const text=m(lang,{
   it:'La settimana principale di Venice Design Week si è svolta dal 9 al 18 ottobre 2026. Il calendario ufficiale comprende però anche alcune esposizioni collegate con date più lunghe, in alcuni casi fino al 25 ottobre o all’8 novembre. Prima di visitare una mostra specifica verifica quindi la sua singola scheda ufficiale: le date del festival non coincidono necessariamente con quelle di tutti i progetti espositivi.',
   en:'The main Venice Design Week programme ran from 9 to 18 October 2026. The official calendar also includes connected exhibitions with longer dates, in some cases continuing to 25 October or 8 November. Check the individual official listing before visiting a specific exhibition: the festival dates do not necessarily match every exhibition project.',
   de:'Das Hauptprogramm der Venice Design Week lief vom 9. bis 18. Oktober 2026. Der offizielle Kalender enthält jedoch auch verbundene Ausstellungen mit längerer Laufzeit, teilweise bis 25. Oktober oder 8. November. Prüfen Sie deshalb vor dem Besuch einer bestimmten Ausstellung deren eigene offizielle Seite; Festival- und Ausstellungsdaten sind nicht immer identisch.',
   fr:'Le programme principal de Venice Design Week s’est déroulé du 9 au 18 octobre 2026. Le calendrier officiel comprend toutefois des expositions associées aux dates plus longues, certaines jusqu’au 25 octobre ou au 8 novembre. Avant de visiter une exposition précise, consultez sa fiche officielle : les dates du festival ne coïncident pas forcément avec celles de tous les projets.',
   es:'El programa principal de Venice Design Week se celebró del 9 al 18 de octubre de 2026. El calendario oficial incluye también exposiciones asociadas con fechas más largas, algunas hasta el 25 de octubre o el 8 de noviembre. Antes de visitar una exposición concreta, consulta su ficha oficial: las fechas del festival no siempre coinciden con las de todos los proyectos.',
   zh:'Venice Design Week 的主要活动周已于2026年10月9日至18日举行。不过官方日历还包含展期更长的关联展览，部分项目持续至10月25日或11月8日。若要参观某个具体展览，请查看该项目自己的官方页面；设计周日期并不一定等于所有展览的展期。'
  });
  addSectionIfMissing(item,title,text);
  item.dateModified='2026-10-25';
 }

 if(slug==='venice-fashion-week-2026'){
  const title=m(lang,{it:'Radar Venezia 2026 si è conclusa il 24 ottobre',en:'Radar Venezia 2026 concluded on 24 October',de:'Radar Venezia 2026 endete am 24. Oktober',fr:'Radar Venezia 2026 s’est achevé le 24 octobre',es:'Radar Venezia 2026 terminó el 24 de octubre',zh:'Radar Venezia 2026 已于10月24日结束'});
  const text=m(lang,{
   it:'La settimana Radar Venezia 2026, evoluzione di Venice Fashion Week, si è svolta dal 19 al 24 ottobre e si è conclusa con Radar Night. Manteniamo programma, sedi e collegamenti come archivio dell’edizione 2026: non vanno considerati automaticamente validi per appuntamenti futuri.',
   en:'Radar Venezia 2026, the evolution of Venice Fashion Week, ran from 19 to 24 October and concluded with Radar Night. Programme details, venues and links remain here as an archive of the 2026 edition and should not be assumed to apply to future editions.',
   de:'Radar Venezia 2026, die Weiterentwicklung der Venice Fashion Week, fand vom 19. bis 24. Oktober statt und endete mit der Radar Night. Programm, Orte und Links bleiben als Archiv der Ausgabe 2026 erhalten und dürfen nicht automatisch auf künftige Ausgaben übertragen werden.',
   fr:'Radar Venezia 2026, évolution de Venice Fashion Week, s’est déroulé du 19 au 24 octobre et s’est conclu par Radar Night. Programme, lieux et liens sont conservés comme archive de l’édition 2026 et ne doivent pas être considérés comme valables automatiquement pour de futures éditions.',
   es:'Radar Venezia 2026, evolución de Venice Fashion Week, se celebró del 19 al 24 de octubre y terminó con Radar Night. Programa, sedes y enlaces se conservan como archivo de la edición 2026 y no deben darse por válidos automáticamente para futuras ediciones.',
   zh:'由 Venice Fashion Week 发展而来的 Radar Venezia 2026 已于10月19日至24日举行，并以 Radar Night 收官。本文保留节目、地点和链接作为2026届档案，不能自动视为未来届次仍然有效。'
  });
  addSectionIfMissing(item,title,text);
  item.dateModified='2026-10-25';
 }

 if(slug==='halloween-venezia-2026'){
  const title=m(lang,{
   it:'31 ottobre: due nuove feste per famiglie a Burano e Favaro',
   en:'31 October: two new family events in Burano and Favaro',
   de:'31. Oktober: zwei neue Familienfeste in Burano und Favaro',
   fr:'31 octobre : deux nouvelles fêtes familiales à Burano et Favaro',
   es:'31 de octubre: dos nuevas fiestas familiares en Burano y Favaro',
   zh:'10月31日：Burano 与 Favaro 新增两场亲子活动'
  });
  const text=m(lang,{
   it:'Il calendario comunale si è arricchito di due appuntamenti per sabato 31 ottobre. A Burano BuranEventi organizza una festa dalle 16:00 davanti al Ristorante Da Romano, con iniziative per i più piccoli, cioccolata calda e dolcetti. A Favaro Veneto “Halloween in Piazza”, al centro commerciale La Piazza, propone giochi e attività a tema per bambini e famiglie. Sono eventi distinti dalle attività già segnalate nelle biblioteche e ludoteche.',
   en:'The City calendar now includes two more events for Saturday 31 October. In Burano, BuranEventi is organising a party from 16:00 in front of Ristorante Da Romano, with children’s activities, hot chocolate and sweets. In Favaro Veneto, “Halloween in Piazza” at La Piazza shopping centre offers themed games and activities for children and families. These are separate from the library and play-centre activities already listed in this guide.',
   de:'Der städtische Kalender enthält nun zwei weitere Termine für Samstag, den 31. Oktober. In Burano organisiert BuranEventi ab 16:00 Uhr vor dem Ristorante Da Romano ein Fest mit Angeboten für Kinder, heißer Schokolade und Süßigkeiten. In Favaro Veneto bietet „Halloween in Piazza“ im Einkaufszentrum La Piazza Spiele und Themenaktivitäten für Kinder und Familien. Diese Termine ergänzen die bereits im Guide genannten Bibliotheks- und Spielangebote.',
   fr:'Le calendrier municipal comprend désormais deux rendez-vous supplémentaires pour le samedi 31 octobre. À Burano, BuranEventi organise une fête dès 16:00 devant le Ristorante Da Romano, avec animations pour les enfants, chocolat chaud et friandises. À Favaro Veneto, « Halloween in Piazza », au centre commercial La Piazza, propose jeux et activités thématiques pour enfants et familles. Ces rendez-vous s’ajoutent aux activités déjà signalées dans les bibliothèques et ludothèques.',
   es:'El calendario municipal incorpora dos citas más para el sábado 31 de octubre. En Burano, BuranEventi organiza una fiesta desde las 16:00 frente al Ristorante Da Romano, con actividades infantiles, chocolate caliente y dulces. En Favaro Veneto, “Halloween in Piazza”, en el centro comercial La Piazza, ofrece juegos y actividades temáticas para niños y familias. Son eventos distintos de las actividades de bibliotecas y ludotecas ya incluidas en esta guía.',
   zh:'市政府活动日历又增加了两项10月31日星期六的活动。Burano 的 BuranEventi 将于16:00起在 Ristorante Da Romano 前举办儿童活动，并提供热巧克力和甜点；Favaro Veneto 的 La Piazza 商业中心则举办“Halloween in Piazza”，为儿童和家庭安排主题游戏与活动。这两项活动与本文已经列出的图书馆和儿童活动中心项目不同。'
  });
  addSectionIfMissing(item,title,text);
  const idx=(item.sections||[]).findIndex(([t])=>t===title);
  addLinkIfMissing(item,idx,'https://www.comune.venezia.it/content/festa-halloween-burano',
   m(lang,{it:'Dettagli ufficiali Burano: ',en:'Official Burano details: ',de:'Offizielle Details zu Burano: ',fr:'Détails officiels Burano : ',es:'Detalles oficiales de Burano: ',zh:'Burano 官方信息：'}),
   m(lang,{it:'Comune di Venezia',en:'City of Venice',de:'Stadt Venedig',fr:'Ville de Venise',es:'Ayuntamiento de Venecia',zh:'威尼斯市政府'}));
  addLinkIfMissing(item,idx,'https://www.comune.venezia.it/it/categorie-eventi/feste',
   m(lang,{it:'Calendario comunale delle feste: ',en:'City festival calendar: ',de:'Städtischer Festkalender: ',fr:'Calendrier municipal des fêtes : ',es:'Calendario municipal de fiestas: ',zh:'市政府节庆日历：'}),
   m(lang,{it:'Le Città in Festa',en:'Le Città in Festa',de:'Le Città in Festa',fr:'Le Città in Festa',es:'Le Città in Festa',zh:'Le Città in Festa'}));
  item.dateModified='2026-10-25';
 }


 if(slug==='natale-capodanno-venezia'){
  item.lead=m(lang,{
   it:'Venezia tra Natale e Capodanno cambia ritmo, ma al 25 ottobre 2026 non è ancora pubblicato un programma comunale completo per le festività 2026–27. Questa guida separa ciò che puoi già pianificare da ciò che va ricontrollato quando arriveranno le comunicazioni ufficiali, senza riutilizzare automaticamente eventi, fuochi o orari dell’edizione precedente.',
   en:'Venice changes pace between Christmas and New Year, but as of 25 October 2026 a complete City programme for the 2026–27 holidays has not yet been published. This guide separates what you can already plan from details that need to be checked when official announcements arrive, without automatically reusing events, fireworks or times from the previous edition.',
   de:'Zwischen Weihnachten und Neujahr verändert Venedig seinen Rhythmus, doch mit Stand vom 25. Oktober 2026 ist noch kein vollständiges städtisches Programm für die Feiertage 2026–27 veröffentlicht. Dieser Guide trennt bereits planbare Punkte von Angaben, die nach den offiziellen Mitteilungen erneut geprüft werden müssen, ohne Veranstaltungen, Feuerwerk oder Zeiten der Vorjahresausgabe zu übernehmen.',
   fr:'Entre Noël et le Nouvel An, Venise change de rythme, mais au 25 octobre 2026 aucun programme municipal complet des fêtes 2026–27 n’est encore publié. Ce guide distingue ce qui peut déjà être planifié de ce qui devra être revérifié après les annonces officielles, sans reprendre automatiquement événements, feux d’artifice ou horaires de l’édition précédente.',
   es:'Entre Navidad y Año Nuevo, Venecia cambia de ritmo, pero a 25 de octubre de 2026 todavía no se ha publicado un programa municipal completo para las fiestas 2026–27. Esta guía separa lo que ya puede planificarse de lo que habrá que comprobar cuando lleguen los anuncios oficiales, sin reutilizar automáticamente eventos, fuegos artificiales u horarios de la edición anterior.',
   zh:'圣诞至新年期间，威尼斯的节奏会发生变化，但截至2026年10月25日，市政府尚未公布2026–27节日期间的完整官方计划。本指南只保留目前可以提前规划的信息，烟花、活动和特殊交通等内容将在官方发布后再更新，不会直接沿用上一届安排。'
  });
  if(item.sections?.length){
   const title=item.sections[0][0];
   const text=m(lang,{
    it:'Al 26 ottobre 2026 non risulta ancora pubblicato un calendario comunale completo per Natale 2026 e la notte del 31 dicembre 2026. Le pagine ufficiali facilmente reperibili sul Capodanno descrivono ancora l’edizione precedente: per questo non consideriamo automaticamente confermati fuochi, concerti, aree di visione o orari finché il Comune e Vela non pubblicheranno il nuovo programma.',
    en:'As of 25 October 2026, a complete City calendar for Christmas 2026 and New Year’s Eve on 31 December has not yet been published. The readily available official New Year pages still describe the previous edition, so fireworks, concerts, viewing areas and special times are not treated as confirmed until the City and Vela publish the new programme.',
    de:'Mit Stand vom 25. Oktober 2026 ist noch kein vollständiger städtischer Kalender für Weihnachten 2026 und Silvester am 31. Dezember veröffentlicht. Die leicht auffindbaren offiziellen Silvesterseiten beschreiben weiterhin die vorherige Ausgabe; Feuerwerk, Konzerte, Zuschauerbereiche und Sonderzeiten gelten daher erst nach Veröffentlichung des neuen Programms durch Stadt und Vela als bestätigt.',
    fr:'Au 25 octobre 2026, aucun calendrier municipal complet pour Noël 2026 et la nuit du 31 décembre n’est encore publié. Les pages officielles du Nouvel An facilement accessibles décrivent toujours l’édition précédente : feux d’artifice, concerts, zones d’observation et horaires spéciaux ne sont donc pas considérés comme confirmés avant publication du nouveau programme par la Ville et Vela.',
    es:'A 25 de octubre de 2026 todavía no se ha publicado un calendario municipal completo para Navidad 2026 y la noche del 31 de diciembre. Las páginas oficiales de Año Nuevo fácilmente accesibles siguen describiendo la edición anterior, por lo que fuegos artificiales, conciertos, zonas de observación y horarios especiales no se consideran confirmados hasta que el Ayuntamiento y Vela publiquen el nuevo programa.',
    zh:'截至2026年10月25日，圣诞节以及12月31日晚的完整市政活动日历尚未发布。目前容易查到的官方跨年页面仍介绍上一届活动，因此在威尼斯市政府与 Vela 发布新计划前，不把烟花、音乐会、观赏区域或特殊时间表视为2026–27已确认安排。'
   });
   item.sections=[[title,text],...item.sections.slice(1)];
  }
  item.dateModified='2026-10-25';
 }

 if(slug==='festa-madonna-salute-venezia'){
  const title=m(lang,{
   it:'2026: ponte votivo e piano operativo ancora da confermare',
   en:'2026: votive bridge and operational plan still to be confirmed',
   de:'2026: Votivbrücke und Einsatzplan noch zu bestätigen',
   fr:'2026 : pont votif et dispositif pratique encore à confirmer',
   es:'2026: puente votivo y plan operativo todavía por confirmar',
   zh:'2026年：还需确认临时还愿桥与实际通行安排'
  });
  const text=m(lang,{
   it:'La Festa della Salute ricorre il 21 novembre e il ponte votivo è una tradizione consolidata della ricorrenza. Al controllo del 25 ottobre 2026, però, non abbiamo individuato una comunicazione comunale con date e orari operativi del ponte per l’edizione 2026. Per organizzare la visita non utilizzare automaticamente orari o modalità degli anni precedenti: aggiorneremo questa sezione quando saranno pubblicate le disposizioni ufficiali.',
   en:'The Festa della Salute is celebrated on 21 November and the votive bridge is a well-established part of the tradition. However, as of our 25 October 2026 check, we have not found a City notice with the operational dates and opening times for the 2026 bridge. Do not automatically use timings or arrangements from previous years when planning your visit; this section will be updated when official instructions are published.',
   de:'Die Festa della Salute findet jedes Jahr am 21. November statt, und die Votivbrücke gehört traditionell zur Feier. Bei der Prüfung am 25. Oktober 2026 haben wir jedoch noch keine städtische Mitteilung mit den konkreten Betriebszeiten der Brücke 2026 gefunden. Für die Besuchsplanung dürfen daher Zeiten und Regeln früherer Jahre nicht automatisch übernommen werden; dieser Abschnitt wird nach Veröffentlichung der offiziellen Vorgaben aktualisiert.',
   fr:'La Festa della Salute a lieu le 21 novembre et le pont votif fait traditionnellement partie de la célébration. Toutefois, lors de notre contrôle du 25 octobre 2026, nous n’avons pas trouvé de communication municipale précisant les dates et horaires opérationnels du pont pour 2026. N’utilisez donc pas automatiquement les horaires ou modalités des années précédentes ; cette section sera mise à jour après publication des dispositions officielles.',
   es:'La Festa della Salute se celebra el 21 de noviembre y el puente votivo forma parte consolidada de la tradición. Sin embargo, en la revisión del 25 de octubre de 2026 no hemos encontrado una comunicación municipal con fechas y horarios operativos del puente para 2026. No utilices automáticamente horarios o condiciones de años anteriores al organizar la visita; esta sección se actualizará cuando se publiquen las disposiciones oficiales.',
   zh:'Madonna della Salute 节固定在11月21日举行，临时还愿桥也是这一传统的重要组成部分。但截至2026年10月25日的核查，我们尚未找到市政府公布2026年桥梁具体开放日期和时间的通知。规划参观时请不要直接沿用往年时刻与通行方式；官方安排发布后，本段将继续更新。'
  });
  addSectionIfMissing(item,title,text);
  item.dateModified='2026-10-25';
 }

}
