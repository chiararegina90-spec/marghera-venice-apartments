import type {EventArticle,EventLang} from './journal-events-2026';

const m=(lang:EventLang,v:Record<EventLang,string>)=>v[lang];

export function applyJournalCatchup20261030(item:EventArticle,lang:EventLang,slug:string){
 if(!item)return;
 if(slug==='halloween-venezia-2026'){
  item.detailBlockSection={
   eyebrow:m(lang,{it:'AVVISO ACTV · 30 OTTOBRE',en:'ACTV NOTICE · 30 OCTOBER',de:'ACTV-HINWEIS · 30. OKTOBER',fr:'AVIS ACTV · 30 OCTOBRE',es:'AVISO ACTV · 30 DE OCTUBRE',zh:'ACTV 提醒 · 10月30日'}),
   title:m(lang,{it:'Possibili deviazioni nel centro di Mestre',en:'Possible diversions in central Mestre',de:'Mögliche Umleitungen im Zentrum von Mestre',fr:'Déviations possibles dans le centre de Mestre',es:'Posibles desvíos en el centro de Mestre',zh:'Mestre 市中心可能临时改道'}),
   intro:m(lang,{
    it:'Venerdì 30 ottobre, dalle 08:30 fino al termine di una manifestazione, ACTV segnala possibili rallentamenti e deviazioni di autobus e tram nel centro di Mestre. Il corteo interessa Piazza XXVII Ottobre, via Forte Marghera, Corso del Popolo, via Gozzi, via Cappuccina, via Carducci e Piazzale Donatori di Sangue. Il trasporto pubblico resta previsto come regolare dopo la precettazione dello sciopero: questo è un avviso distinto, legato esclusivamente alle modifiche locali per il corteo.',
    en:'On Friday 30 October, from about 8:30 am until the end of a demonstration, ACTV warns that buses and trams may be delayed or diverted in central Mestre. The route involves Piazza XXVII Ottobre, Via Forte Marghera, Corso del Popolo, Via Gozzi, Via Cappuccina, Via Carducci and Piazzale Donatori di Sangue. Public transport remains scheduled to operate normally following the strike injunction: this is a separate notice concerning local route changes for the demonstration.',
    de:'Am Freitag, 30. Oktober, kann es ab etwa 8:30 Uhr bis zum Ende einer Demonstration im Zentrum von Mestre zu Verspätungen und Umleitungen bei Bussen und Straßenbahnen kommen. Die Route führt über Piazza XXVII Ottobre, Via Forte Marghera, Corso del Popolo, Via Gozzi, Via Cappuccina, Via Carducci und Piazzale Donatori di Sangue. Nach der behördlichen Streikverfügung ist der reguläre Verkehr weiterhin vorgesehen; dieser Hinweis betrifft ausschließlich örtliche Änderungen wegen der Demonstration.',
    fr:'Le vendredi 30 octobre, à partir d’environ 8 h 30 et jusqu’à la fin d’une manifestation, ACTV signale de possibles retards et déviations de bus et de tram dans le centre de Mestre. Le parcours concerne Piazza XXVII Ottobre, Via Forte Marghera, Corso del Popolo, Via Gozzi, Via Cappuccina, Via Carducci et Piazzale Donatori di Sangue. Le service ordinaire reste prévu après la réquisition liée à la grève : cet avis distinct concerne uniquement les modifications locales dues au cortège.',
    es:'El viernes 30 de octubre, desde aproximadamente las 08:30 y hasta el final de una manifestación, ACTV advierte de posibles retrasos y desvíos de autobuses y tranvías en el centro de Mestre. El recorrido afecta Piazza XXVII Ottobre, Via Forte Marghera, Corso del Popolo, Via Gozzi, Via Cappuccina, Via Carducci y Piazzale Donatori di Sangue. El transporte público sigue previsto con servicio ordinario tras la orden relativa a la huelga: este aviso es distinto y se refiere solo a cambios locales por la manifestación.',
    zh:'2026年10月30日星期五，自约08:30起至游行结束，ACTV提醒Mestre市中心部分公交车和有轨电车可能出现延误或临时改道。游行路线涉及 Piazza XXVII Ottobre、Via Forte Marghera、Corso del Popolo、Via Gozzi、Via Cappuccina、Via Carducci 和 Piazzale Donatori di Sangue。罢工限制令发布后，公共交通仍预计按正常计划运行；本提醒是另一项独立通知，仅针对游行造成的局部线路调整。'
   }),
   blocks:[{
    title:m(lang,{it:'Prima di partire',en:'Before travelling',de:'Vor der Fahrt',fr:'Avant de partir',es:'Antes de salir',zh:'出发前'}),
    lines:[m(lang,{
     it:'Controlla gli aggiornamenti ACTV prima di raggiungere gli eventi di Halloween a Mestre o Marghera. L’avviso non indica la sospensione specifica delle linee 6 o 6L.',
     en:'Check ACTV updates before travelling to Halloween events in Mestre or Marghera. The notice does not state that lines 6 or 6L are specifically suspended.',
     de:'Prüfen Sie vor Halloween-Veranstaltungen in Mestre oder Marghera die aktuellen ACTV-Meldungen. Die Mitteilung nennt keine ausdrückliche Einstellung der Linien 6 oder 6L.',
     fr:'Consultez ACTV avant de rejoindre les événements d’Halloween à Mestre ou Marghera. L’avis n’indique pas de suspension spécifique des lignes 6 ou 6L.',
     es:'Consulta ACTV antes de acudir a eventos de Halloween en Mestre o Marghera. El aviso no indica la suspensión específica de las líneas 6 o 6L.',
     zh:'前往Mestre或Marghera的万圣节活动前，请查看ACTV最新通知。该公告并未说明6路或6L路公交被明确停运。'
    })]
   }],
   note:m(lang,{it:'Fonte: comunicato ACTV del 29 ottobre 2026. L’avviso viene mostrato solo il 30 ottobre.',en:'Source: ACTV notice of 29 October 2026. This notice is shown only on 30 October.',de:'Quelle: ACTV-Mitteilung vom 29. Oktober 2026. Der Hinweis wird nur am 30. Oktober angezeigt.',fr:'Source : avis ACTV du 29 octobre 2026. Cet avis est affiché uniquement le 30 octobre.',es:'Fuente: aviso ACTV del 29 de octubre de 2026. Este aviso se muestra solo el 30 de octubre.',zh:'来源：ACTV 2026年10月29日公告。本提醒仅在10月30日显示。'}),
   visibleUntil:'2026-10-30'
  };
  item.dateModified='2026-10-30';
 }
}
