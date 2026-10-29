import type {EventArticle,EventLang} from './journal-events-2026';

const m=(lang:EventLang,v:Record<EventLang,string>)=>v[lang];

function insertSection(item:EventArticle,index:number,title:string,text:string){
 item.sectionLinks=(item.sectionLinks||[]).map(link=>link.section>=index?{...link,section:link.section+1}:link);
 item.sections=[...(item.sections||[]).slice(0,index),[title,text],...(item.sections||[]).slice(index)];
}
function addLink(item:EventArticle,section:number,href:string,text:string,label:string,tail='.'){
 if(!item.sectionLinks?.some(x=>x.section===section&&x.href===href)){
  item.sectionLinks=[...(item.sectionLinks||[]),{section,href,text,label,tail}];
 }
}

export function applyJournalCatchup20261029(item:EventArticle,lang:EventLang,slug:string){
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
   it:'Al 29 ottobre 2026 non risulta ancora una conferma ufficiale dell’allestimento del collegamento pedonale temporaneo dalle Fondamente Nove al Cimitero di San Michele. Le ordinanze e le comunicazioni disponibili che confermano il ponte riguardano il 2025 e non possono essere trasferite al 2026. Sono invece confermati i collegamenti speciali ACTV per la Commemorazione dei Defunti dal 31 ottobre al 2 novembre 2026.',
   en:'As of 29 October 2026, there is still no official confirmation that the temporary pedestrian bridge from Fondamente Nove to San Michele Cemetery will be installed this year. The available ordinances and announcements confirming the bridge refer to 2025 and cannot be carried over to 2026. ACTV’s special services for the Commemoration of the Dead from 31 October to 2 November 2026 are confirmed.',
   de:'Mit Stand vom 29. Oktober 2026 gibt es weiterhin keine offizielle Bestätigung, dass die temporäre Fußgängerbrücke von den Fondamente Nove zum Friedhof San Michele 2026 aufgebaut wird. Die verfügbaren Verordnungen und Mitteilungen, die die Brücke bestätigen, beziehen sich auf 2025 und dürfen nicht auf 2026 übertragen werden. Bestätigt sind dagegen die ACTV-Sonderverbindungen vom 31. Oktober bis 2. November 2026.',
   fr:'Au 29 octobre 2026, aucune confirmation officielle ne signale encore l’installation du pont piéton temporaire entre Fondamente Nove et le cimetière de San Michele. Les ordonnances et communications disponibles qui confirment le pont concernent 2025 et ne peuvent pas être transposées à 2026. Les liaisons spéciales ACTV du 31 octobre au 2 novembre 2026 sont en revanche confirmées.',
   es:'A 29 de octubre de 2026 todavía no existe una confirmación oficial de la instalación del puente peatonal temporal entre Fondamente Nove y el Cementerio de San Michele. Las ordenanzas y comunicaciones disponibles que confirman el puente corresponden a 2025 y no pueden trasladarse a 2026. Sí están confirmados los servicios especiales de ACTV del 31 de octubre al 2 de noviembre de 2026.',
   zh:'截至2026年10月29日，官方仍未确认今年会搭设从 Fondamente Nove 通往 San Michele 公墓的临时步行浮桥。现有确认该桥的法令和公告均属于2025年，不能直接沿用到2026年。目前已确认的是 ACTV 将于2026年10月31日至11月2日提供特别交通服务。'
  });
  item.sections=(item.sections||[]).map(([t,b])=>t===bridgeTitle?[t,bridgeText] as const:[t,b] as const);

  const ceremonyTitle=m(lang,{
   it:'2 novembre: commemorazioni ufficiali a San Michele',
   en:'2 November: official remembrance ceremonies at San Michele',
   de:'2. November: offizielle Gedenkfeiern auf San Michele',
   fr:'2 novembre : cérémonies officielles à San Michele',
   es:'2 de noviembre: ceremonias oficiales en San Michele',
   zh:'11月2日：San Michele 官方追思仪式'
  });
  const ceremonyText=m(lang,{
   it:'Lunedì 2 novembre 2026 il Cimitero di San Michele ospiterà le commemorazioni ufficiali dei Defunti e dei Caduti. Alle 09:40 è prevista la deposizione delle corone d’alloro al Monumento ai Caduti del Riquadro Militare, a cura del Comune, della Prefettura e del Presidio delle Forze Armate di Venezia; seguiranno ulteriori commemorazioni nei luoghi della memoria del cimitero. Alle 10:00 il patriarca di Venezia Francesco Moraglia presiederà la Santa Messa in suffragio dei Defunti. Durante le cerimonie si raccomanda il massimo rispetto per il luogo e per i partecipanti.',
   en:'On Monday, 2 November 2026, San Michele Cemetery will host official remembrance ceremonies. At 9:40 am, wreaths will be laid at the Military Section’s War Memorial by the City, Prefecture and Venice Armed Forces Command, followed by further commemorations at memorial sites within the cemetery. At 10 am, Patriarch Francesco Moraglia will celebrate Mass in remembrance of the departed. Visitors should respect the solemn nature of the ceremonies.',
   de:'Am Montag, dem 2. November 2026, finden auf dem Friedhof San Michele offizielle Gedenkfeiern statt. Um 9:40 Uhr werden am Kriegerdenkmal des Militärbereichs durch Stadt, Präfektur und das Kommando der Streitkräfte in Venedig Kränze niedergelegt; weitere Gedenkmomente folgen an den Erinnerungsorten des Friedhofs. Um 10:00 Uhr zelebriert Patriarch Francesco Moraglia eine Messe zum Gedenken an die Verstorbenen. Besucher werden um Rücksichtnahme auf den Ort und die Teilnehmenden gebeten.',
   fr:'Le lundi 2 novembre 2026, le cimetière de San Michele accueillera les cérémonies officielles du souvenir. À 9 h 40, des couronnes seront déposées au monument aux morts du secteur militaire par la Ville, la Préfecture et le commandement des Forces armées de Venise, puis d’autres commémorations auront lieu sur les sites mémoriels du cimetière. À 10 h, le patriarche Francesco Moraglia présidera la messe pour les défunts. Les visiteurs sont invités à respecter le caractère solennel des cérémonies.',
   es:'El lunes 2 de noviembre de 2026, el cementerio de San Michele acogerá las ceremonias oficiales de conmemoración. A las 09:40 se depositarán coronas en el monumento a los caídos del sector militar por parte del Ayuntamiento, la Prefectura y el Mando de las Fuerzas Armadas de Venecia; después continuarán los homenajes en otros lugares de memoria del cementerio. A las 10:00, el patriarca Francesco Moraglia presidirá una misa en memoria de los difuntos. Se ruega respetar el carácter solemne de los actos.',
   zh:'2026年11月2日星期一，San Michele 公墓将举行官方追思仪式。09:40，威尼斯市政府、威尼斯省政府及驻威尼斯武装部队将在军人墓区阵亡者纪念碑前敬献花圈，随后还将在公墓内其他纪念地点举行追思活动；10:00由威尼斯宗主教 Francesco Moraglia 主持追思弥撒。参观者请尊重仪式的庄严性及现场悼念人士。'
  });
  if(!(item.sections||[]).some(([t])=>t===ceremonyTitle)){
   const actvIndex=(item.sections||[]).findIndex(([t])=>/ACTV|collegamenti gratuiti|free ACTV|kostenlose ACTV|liaisons spéciales ACTV|servicios especiales gratuitos|ACTV 免费/.test(t));
   insertSection(item,actvIndex>=0?actvIndex+1:(item.sections||[]).length,ceremonyTitle,ceremonyText);
  }
  const idx=(item.sections||[]).findIndex(([t])=>t===ceremonyTitle);
  addLink(item,idx,'https://live.comune.venezia.it/it/2026/10/commemorazione-dei-defunti-e-dei-caduti-di-tutte-le-guerre-e-festa-dellunita-nazionale-il',
   m(lang,{it:'Programma ufficiale: ',en:'Official programme: ',de:'Offizielles Programm: ',fr:'Programme officiel : ',es:'Programa oficial: ',zh:'官方安排：'}),
   m(lang,{it:'Comune di Venezia',en:'City of Venice',de:'Stadt Venedig',fr:'Ville de Venise',es:'Ayuntamiento de Venecia',zh:'威尼斯市政府'}));
  item.description=m(lang,{
   it:'Cimitero di San Michele a Venezia: ponte 2026 non confermato al 29 ottobre, servizi ACTV gratuiti 31 ottobre–2 novembre, cerimonie ufficiali del 2 novembre, storia e informazioni di visita.',
   en:'San Michele Cemetery in Venice: 2026 bridge still unconfirmed as of 29 October, free ACTV services 31 October–2 November, official 2 November ceremonies, history and visitor information.',
   de:'Friedhof San Michele in Venedig: Brücke 2026 am 29. Oktober noch nicht bestätigt, kostenlose ACTV-Verbindungen 31. Oktober–2. November, offizielle Gedenkfeiern am 2. November und Besuchsinfos.',
   fr:'Cimetière San Michele à Venise : pont 2026 toujours non confirmé au 29 octobre, services ACTV gratuits du 31 octobre au 2 novembre, cérémonies officielles du 2 novembre et infos visite.',
   es:'Cementerio de San Michele en Venecia: puente 2026 aún no confirmado a 29 de octubre, servicios ACTV gratuitos del 31 de octubre al 2 de noviembre, ceremonias oficiales del 2 de noviembre e información de visita.',
   zh:'威尼斯 San Michele 公墓：截至10月29日，2026年临时步行桥仍未获官方确认；ACTV 于10月31日至11月2日提供免费特别交通，并补充11月2日官方追思仪式与参观信息。'
  });
  item.dateModified='2026-10-29';
 }

 if(slug==='venezia-a-novembre'){
  const sanIndex=(item.sections||[]).findIndex(([t])=>/San Michele/.test(t));
  if(sanIndex>=0){
   const sections=[...(item.sections||[])];
   const [title,body]=sections[sanIndex];
   const extra=m(lang,{
    it:' Il 2 novembre, alle 09:40, sono previste le commemorazioni ufficiali al Monumento ai Caduti del Riquadro Militare del Cimitero di San Michele, seguite alle 10:00 dalla Messa presieduta dal patriarca di Venezia Francesco Moraglia.',
    en:' On 2 November at 9:40 am, official commemorations are scheduled at the Military Section’s War Memorial in San Michele Cemetery, followed at 10 am by Mass celebrated by Venice Patriarch Francesco Moraglia.',
    de:' Am 2. November finden um 9:40 Uhr offizielle Gedenkfeiern am Kriegerdenkmal des Militärbereichs auf San Michele statt; um 10:00 Uhr folgt die von Venedigs Patriarch Francesco Moraglia zelebrierte Messe.',
    fr:' Le 2 novembre à 9 h 40, des commémorations officielles sont prévues au monument aux morts du secteur militaire du cimetière de San Michele, suivies à 10 h de la messe présidée par le patriarche de Venise Francesco Moraglia.',
    es:' El 2 de noviembre, a las 09:40, están previstas las conmemoraciones oficiales en el monumento a los caídos del sector militar del Cementerio de San Michele, seguidas a las 10:00 por la misa presidida por el patriarca de Venecia Francesco Moraglia.',
    zh:' 11月2日09:40，San Michele 公墓军人墓区阵亡者纪念碑将举行官方追思仪式；10:00由威尼斯宗主教 Francesco Moraglia 主持追思弥撒。'
   });
   if(!body.includes('09:40')&&!body.includes('9:40')){
    sections[sanIndex]=[title,body+extra] as const;
    item.sections=sections;
   }
  }

  const peggyIndex=(item.sections||[]).findIndex(([t])=>/Fucina degli Angeli|Peggy Guggenheim/.test(t));
  if(peggyIndex>=0){
   const sections=[...(item.sections||[])];
   const [title,body]=sections[peggyIndex];
   const extra=m(lang,{
    it:' Per le famiglie, domenica 1 novembre dalle 15:00 alle 16:30 è inoltre previsto Kids Day: Composizioni in movimento, laboratorio gratuito per bambini dai 4 ai 10 anni con prenotazione online obbligatoria.',
    en:' For families, Kids Day: Composizioni in movimento is also scheduled on Sunday 1 November from 3 pm to 4:30 pm: a free workshop for children aged 4–10 with compulsory online booking.',
    de:' Für Familien findet außerdem am Sonntag, 1. November, von 15:00 bis 16:30 Uhr Kids Day: Composizioni in movimento statt, ein kostenloser Workshop für Kinder von 4 bis 10 Jahren mit verpflichtender Online-Reservierung.',
    fr:' Pour les familles, Kids Day: Composizioni in movimento est également prévu le dimanche 1er novembre de 15 h à 16 h 30 : atelier gratuit pour les enfants de 4 à 10 ans, sur réservation en ligne obligatoire.',
    es:' Para familias, el domingo 1 de noviembre de 15:00 a 16:30 está previsto además Kids Day: Composizioni in movimento, un taller gratuito para niños de 4 a 10 años con reserva online obligatoria.',
    zh:' 对家庭游客而言，11月1日星期日15:00–16:30还将举办 Kids Day: Composizioni in movimento，为4–10岁儿童提供免费工作坊，必须在线预约。'
   });
   if(!body.includes('Kids Day: Composizioni in movimento')){
    sections[peggyIndex]=[title,body+extra] as const;
    item.sections=sections;
   }
   addLink(item,peggyIndex,'/guide/musei-venezia/peggy-guggenheim',
    m(lang,{it:'Scheda MVA: ',en:'MVA guide: ',de:'MVA-Guide: ',fr:'Guide MVA : ',es:'Guía MVA: ',zh:'MVA 指南：'}),
    m(lang,{it:'Collezione Peggy Guggenheim',en:'Peggy Guggenheim Collection',de:'Peggy Guggenheim Collection',fr:'Collection Peggy Guggenheim',es:'Colección Peggy Guggenheim',zh:'Peggy Guggenheim Collection'}));
  }
  item.dateModified='2026-10-29';
 }
}
