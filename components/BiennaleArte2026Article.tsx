import JournalVisitorNotices from '@/components/JournalVisitorNotices';
import {journalNoticeModifiedDates} from '@/data/journalVisitorNotices';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EditorialHero from '@/components/EditorialHero';
import type {BiennaleArte2026Data,BiennaleArte2026Lang} from '@/data/biennaleArte2026';
import EditorialStayCta from '@/components/EditorialStayCta';
import {localePath} from '@/lib/i18n';
import {eventSchemaStatus} from '@/lib/romeDate';

function base(lang:BiennaleArte2026Lang){return lang==='it'?'':`/${lang}`;}
const architecture2027:Record<BiennaleArte2026Lang,{eyebrow:string;title:string;text:string;cta:string}>={
  it:{eyebrow:'Prossima grande edizione',title:'Biennale Architettura Venezia 2027',text:'Le date sono già ufficiali: 8 maggio–21 novembre 2027, con Wang Shu e Lu Wenyu come curatori. La nostra nuova guida è già online e verrà aggiornata progressivamente.',cta:'Scopri la Biennale Architettura 2027'},
  en:{eyebrow:'Next major edition',title:'Venice Architecture Biennale 2027',text:'The dates are already official: 8 May–21 November 2027, curated by Wang Shu and Lu Wenyu. Our new guide is online and will be updated progressively.',cta:'Explore the 2027 Architecture Biennale'},
  de:{eyebrow:'Nächste große Ausgabe',title:'Architekturbiennale Venedig 2027',text:'Die Termine stehen fest: 8. Mai–21. November 2027, kuratiert von Wang Shu und Lu Wenyu. Unser neuer Guide ist bereits online und wird laufend aktualisiert.',cta:'Architekturbiennale 2027 entdecken'},
  fr:{eyebrow:'Prochaine grande édition',title:'Biennale d’Architecture de Venise 2027',text:'Les dates sont déjà officielles : 8 mai–21 novembre 2027, sous le commissariat de Wang Shu et Lu Wenyu. Notre nouveau guide est en ligne et sera enrichi progressivement.',cta:'Découvrir la Biennale Architecture 2027'},
  es:{eyebrow:'Próxima gran edición',title:'Bienal de Arquitectura de Venecia 2027',text:'Las fechas ya son oficiales: 8 de mayo–21 de noviembre de 2027, con Wang Shu y Lu Wenyu como comisarios. La nueva guía ya está online y se actualizará progresivamente.',cta:'Descubrir la Bienal de Arquitectura 2027'},
  zh:{eyebrow:'下一届重点展览',title:'2027 威尼斯建筑双年展',text:'日期已经正式公布：2027年5月8日至11月21日，策展人为王澍与陆文宇。新指南现已上线，并会持续更新。',cta:'查看2027建筑双年展指南'}
};
const closingProgrammeUrl='https://www.labiennale.org/it/news/biennale-arte-2026-performance-conferenze-dibattiti-tavole-rotonde';
const visitorLionsUrl='https://www.labiennale.org/it/news/istituiti-due-leoni-dei-visitatori-la-biennale-arte-2026';
const autumnUpdate:Record<BiennaleArte2026Lang,{title:string;text:string;ticketText:string;finalTitle:string;finalText:string;programLink:string;lionsTitle:string;lionsText:string;lionsLink:string}>={
  it:{
    title:'Orari storici del 2026 e Padiglione Austria',
    text:'Durante l’edizione 2026, ormai conclusa, dal 29 settembre al 22 novembre Giardini e Arsenale erano aperti dalle 10:00 alle 18:00, con ultimo ingresso alle 17:45. La mostra è chiusa il lunedì, tranne l’apertura straordinaria di lunedì 16 novembre. Domenica 22 novembre è l’ultimo giorno della Biennale Arte 2026. Il Padiglione Austria è rimasto accessibile fino a sabato 21 novembre: dal 18 al 21 novembre ha osservato l’orario ridotto 10:00–15:00. Domenica 22 novembre il padiglione è chiuso al pubblico; la presentazione finale di SEAWORLD VENICE è prevista davanti alla sede.',
    ticketText:'Per l’edizione 2026, ormai conclusa, il biglietto standard costava €30, con ridotto €20 per over 65 e residenti del Comune di Venezia e €16 per studenti e under 26. Il biglietto singolo consente un ingresso ai Giardini e un ingresso all’Arsenale anche in giorni diversi e non consecutivi. Erano disponibili anche un pass di 3 giorni consecutivi a €40 e un pass settimanale di 7 giorni consecutivi a €50. La formula Arte + Musica è collegata al Festival Biennale Musica e non va considerata utilizzabile oltre la sua conclusione del 24 ottobre.',
    finalTitle:'Gli ultimi dieci giorni della Biennale Arte 2026',
    finalText:'La Biennale Arte 2026 si è conclusa il 22 novembre: dal 13 al 22 novembre l’Arsenale ha ospitato anche un programma speciale di performance, conferenze, dibattiti e incontri. Tra gli appuntamenti conclusivi figura In This World di Laurie Anderson, domenica 22 novembre alle 16:00 alle Tese dei Soppalchi. Per partecipare agli appuntamenti è generalmente necessario un biglietto valido Biennale Arte 2026; gli incontri al Teatro Piccolo sono invece gratuiti fino a esaurimento posti. Disponibilità, prenotazioni e condizioni vanno sempre verificate sulla singola scheda ufficiale.',
    programLink:'Programma ufficiale 13–22 novembre',
    lionsTitle:'22 novembre: i Leoni dei Visitatori',
    lionsText:'Il 22 novembre è stata anche la giornata prevista per la premiazione della 61ª Biennale Arte. La cerimonia, inizialmente prevista il 9 maggio, è stata spostata alla conclusione della mostra. L’edizione 2026 introduce due Leoni dei Visitatori assegnati attraverso il voto del pubblico: uno al miglior Partecipante della mostra internazionale In Minor Keys e uno alla migliore Partecipazione Nazionale. La Biennale non indica in questa comunicazione orario, sede o accesso pubblico della cerimonia, quindi non li anticipiamo. Per partecipare alla votazione è necessario aver visitato sia i Giardini sia l’Arsenale con un biglietto valido della Biennale Arte 2026: il sistema di biglietteria deve attestare il passaggio nelle due sedi. Ogni avente diritto può esprimere un voto per ciascuno dei due riconoscimenti, in un’unica sessione.',
    lionsLink:'Informazioni ufficiali sui Leoni dei Visitatori'
  },
  en:{
    title:'2026 opening hours (archive) and the Austrian Pavilion',
    text:'During the now-closed 2026 edition, Giardini and Arsenale were open 10am–6pm from 29 September to 22 November, with last admission at 5:45pm. The exhibition is closed on Mondays except for the special opening on Monday 16 November. Sunday 22 November is the final day of Biennale Arte 2026. The Austrian Pavilion was open to visitors only through Saturday 21 November, with reduced hours of 10am–3pm from 18 to 21 November. It is closed to the public on Sunday 22 November, when the final SEAWORLD VENICE presentation takes place outside the pavilion.',
    ticketText:'For the now-closed 2026 edition, standard admission was €30, with a €20 reduced ticket for over-65s and residents of the Municipality of Venice, and €16 for students and under-26s. A standard ticket includes one admission to Giardini and one to Arsenale, also on different non-consecutive days. A 3-day pass cost €40 and a 7-day weekly pass €50. The Art + Music formula is tied to the Biennale Musica Festival and should not be treated as available after the festival ends on 24 October.',
    finalTitle:'The final ten days of Biennale Arte 2026',
    finalText:'Biennale Arte 2026 closed on 22 November; from 13 to 22 November the Arsenale also hosted a special programme of performances, conferences, debates and encounters. Among the closing events is Laurie Anderson’s In This World on Sunday 22 November at 4pm at the Tese dei Soppalchi. A valid Biennale Arte 2026 ticket is generally required for the programme; events at Teatro Piccolo are free until capacity is reached. Availability, booking and access conditions should always be checked on the individual official listing.',
    programLink:'Official programme, 13–22 November',
    lionsTitle:'22 November: the Visitors’ Lions',
    lionsText:'22 November was also scheduled as the awards day of the 61st Biennale Arte. The ceremony, originally scheduled for 9 May, was moved to the closing day of the exhibition. The 2026 edition introduces two Visitors’ Lions decided through public voting: one for the best participant in the International Exhibition In Minor Keys and one for the best National Participation. The Biennale announcement does not specify the ceremony time, venue or public access, so we do not anticipate them. To take part in the vote, ticket holders must have visited both Giardini and Arsenale with a valid Biennale Arte 2026 ticket; the ticketing system must record attendance at both venues. Each eligible visitor may cast one vote for each of the two awards in a single voting session.',
    lionsLink:'Official information on the Visitors’ Lions'
  },
  de:{
    title:'Öffnungszeiten 2026 (Archiv) und Österreich-Pavillon',
    text:'Während der inzwischen beendeten Ausgabe 2026 waren Giardini und Arsenale vom 29. September bis 22. November von 10:00 bis 18:00 Uhr geöffnet, letzter Einlass ist um 17:45 Uhr. Montags ist die Ausstellung geschlossen, mit Ausnahme der Sonderöffnung am Montag, 16. November. Sonntag, 22. November, ist der letzte Tag der Biennale Arte 2026. Der Österreich-Pavillon war nur bis Samstag, 21. November, für Besucher zugänglich; vom 18. bis 21. November galten verkürzte Öffnungszeiten von 10:00–15:00 Uhr. Am Sonntag, 22. November, bleibt er für Besucher geschlossen; die Abschlusspräsentation von SEAWORLD VENICE findet vor dem Pavillon statt.',
    ticketText:'Für die inzwischen beendete Ausgabe 2026 kostete der Standard-Eintritt 30 €, ermäßigt 20 € für Personen über 65 und Einwohner der Stadt Venedig sowie 16 € für Studierende und Personen unter 26. Das Einzelticket umfasst je einen Eintritt in Giardini und Arsenale, auch an unterschiedlichen, nicht aufeinanderfolgenden Tagen. Der 3-Tage-Pass kostete 40 €, der Wochenpass 50 €. Die Formel Kunst + Musik ist an das Festival Biennale Musica gebunden und darf nicht als nach dessen Ende am 24. Oktober verfügbar dargestellt werden.',
    finalTitle:'Die letzten zehn Tage der Biennale Arte 2026',
    finalText:'Die Biennale Arte 2026 endete am 22. November. Vom 13. bis 22. November fand im Arsenale zusätzlich ein besonderes Programm mit Performances, Konferenzen, Debatten und Begegnungen statt. Zu den abschließenden Terminen gehört Laurie Andersons In This World am Sonntag, 22. November, um 16:00 Uhr in den Tese dei Soppalchi. Für das Programm ist in der Regel ein gültiges Ticket der Biennale Arte 2026 erforderlich; die Veranstaltungen im Teatro Piccolo sind bis zur Kapazitätsgrenze kostenlos. Verfügbarkeit, Reservierung und Zugangsbedingungen bitte jeweils im offiziellen Eintrag prüfen.',
    programLink:'Offizielles Programm 13.–22. November',
    lionsTitle:'22. November: die Besucher-Löwen',
    lionsText:'Für den 22. November war auch die Preisverleihung der 61. Biennale Arte statt. Die ursprünglich für den 9. Mai vorgesehene Zeremonie wurde auf den letzten Ausstellungstag verschoben. 2026 werden zwei neue Besucher-Löwen durch Publikumsabstimmung vergeben: einer an den besten Teilnehmenden der internationalen Ausstellung In Minor Keys und einer an die beste Nationale Teilnahme. In der Mitteilung der Biennale werden Uhrzeit, Ort und öffentlicher Zugang der Zeremonie nicht genannt; deshalb machen wir dazu keine Angaben. Für die Abstimmung müssen Ticketinhaber mit einem gültigen Ticket der Biennale Arte 2026 sowohl Giardini als auch Arsenale besucht haben; das Ticketsystem muss den Besuch beider Standorte bestätigen. Jede berechtigte Person kann in einer einzigen Abstimmungssitzung je eine Stimme für beide Auszeichnungen abgeben.',
    lionsLink:'Offizielle Informationen zu den Besucher-Löwen'
  },
  fr:{
    title:'Horaires de l’édition 2026 (archives) et Pavillon autrichien',
    text:'Pendant l’édition 2026 aujourd’hui terminée, les Giardini et l’Arsenale étaient ouverts du 29 septembre au 22 novembre de 10:00 à 18:00, dernière entrée à 17:45. L’exposition est fermée le lundi, sauf ouverture exceptionnelle le lundi 16 novembre. Le dimanche 22 novembre est le dernier jour de la Biennale Arte 2026. Le Pavillon autrichien était accessible aux visiteurs jusqu’au samedi 21 novembre, avec des horaires réduits de 10:00 à 15:00 du 18 au 21 novembre. Il est fermé au public le dimanche 22 novembre ; la présentation finale de SEAWORLD VENICE a lieu devant le pavillon.',
    ticketText:'Pour l’édition 2026 désormais terminée, le billet standard coûtait 30 €, avec tarif réduit à 20 € pour les plus de 65 ans et les résidents de la commune de Venise, et 16 € pour les étudiants et moins de 26 ans. Le billet simple comprend une entrée aux Giardini et une à l’Arsenale, y compris à des jours différents et non consécutifs. Le pass 3 jours coûtait 40 € et le pass hebdomadaire 50 €. La formule Art + Musique est liée au Festival Biennale Musica et ne doit pas être présentée comme disponible après sa clôture le 24 octobre.',
    finalTitle:'Les dix derniers jours de la Biennale Arte 2026',
    finalText:'La Biennale Arte 2026 s’est achevée le 22 novembre ; du 13 au 22 novembre l’Arsenale a également accueilli un programme spécial de performances, conférences, débats et rencontres. Parmi les rendez-vous de clôture figure In This World de Laurie Anderson, dimanche 22 novembre à 16:00 aux Tese dei Soppalchi. Un billet valable pour la Biennale Arte 2026 est généralement nécessaire ; les rendez-vous du Teatro Piccolo sont gratuits dans la limite des places disponibles. Disponibilités, réservations et conditions d’accès doivent toujours être vérifiées sur chaque fiche officielle.',
    programLink:'Programme officiel du 13 au 22 novembre',
    lionsTitle:'22 novembre : les Lions des Visiteurs',
    lionsText:'La remise des prix était également prévue le 22 novembre de la 61e Biennale Arte. La cérémonie, initialement prévue le 9 mai, a été déplacée à la clôture de l’exposition. L’édition 2026 introduit deux Lions des Visiteurs attribués par le vote du public : l’un au meilleur participant de l’exposition internationale In Minor Keys et l’autre à la meilleure Participation Nationale. Le communiqué de la Biennale ne précise ni l’heure, ni le lieu, ni l’accès public à la cérémonie ; nous ne les anticipons donc pas. Pour participer au vote, les titulaires d’un billet valable pour la Biennale Arte 2026 doivent avoir visité à la fois les Giardini et l’Arsenale ; le système de billetterie doit attester le passage dans les deux sites. Chaque personne éligible peut exprimer un vote pour chacun des deux prix, au cours d’une seule session.',
    lionsLink:'Informations officielles sur les Lions des Visiteurs'
  },
  es:{
    title:'Horarios de la edición 2026 (archivo) y Pabellón de Austria',
    text:'Durante la edición 2026 ya finalizada, Giardini y Arsenale abrían del 29 de septiembre al 22 de noviembre de 10:00 a 18:00, con última entrada a las 17:45. La exposición cierra los lunes, salvo la apertura extraordinaria del lunes 16 de noviembre. El domingo 22 de noviembre es el último día de la Biennale Arte 2026. El Pabellón de Austria estuvo abierto a los visitantes solo hasta el sábado 21 de noviembre, con horario reducido de 10:00 a 15:00 del 18 al 21 de noviembre. El domingo 22 de noviembre permanece cerrado al público; la presentación final de SEAWORLD VENICE se celebra delante del pabellón.',
    ticketText:'En la edición 2026 ya finalizada, la entrada estándar costaba 30 €, con tarifa reducida de 20 € para mayores de 65 años y residentes del municipio de Venecia, y 16 € para estudiantes y menores de 26 años. La entrada simple permite un acceso a Giardini y otro a Arsenale, incluso en días distintos y no consecutivos. El pase de 3 días costaba 40 € y el semanal 50 €. La fórmula Arte + Música está vinculada al Festival Biennale Musica y no debe considerarse disponible después de su finalización el 24 de octubre.',
    finalTitle:'Los últimos diez días de la Biennale Arte 2026',
    finalText:'La Biennale Arte 2026 terminó el 22 de noviembre ; del 13 al 22 de noviembre el Arsenale acogió además un programa especial de performances, conferencias, debates y encuentros. Entre las citas finales figura In This World de Laurie Anderson, el domingo 22 de noviembre a las 16:00 en las Tese dei Soppalchi. Por lo general se necesita una entrada válida de Biennale Arte 2026; las actividades del Teatro Piccolo son gratuitas hasta completar aforo. Disponibilidad, reservas y condiciones de acceso deben verificarse siempre en la ficha oficial de cada cita.',
    programLink:'Programa oficial del 13 al 22 de noviembre',
    lionsTitle:'22 de noviembre: los Leones de los Visitantes',
    lionsText:'La ceremonia de premios también estaba prevista para el 22 de noviembre de la 61.ª Biennale Arte. La ceremonia, inicialmente prevista para el 9 de mayo, se trasladó al cierre de la exposición. La edición 2026 introduce dos Leones de los Visitantes decididos mediante el voto del público: uno para el mejor participante de la exposición internacional In Minor Keys y otro para la mejor Participación Nacional. El comunicado de la Biennale no indica hora, sede ni acceso público de la ceremonia, por lo que no los anticipamos. Para participar en la votación es necesario haber visitado tanto los Giardini como el Arsenale con una entrada válida de la Biennale Arte 2026; el sistema de venta de entradas debe acreditar el paso por ambas sedes. Cada persona con derecho puede emitir un voto para cada uno de los dos premios en una única sesión.',
    lionsLink:'Información oficial sobre los Leones de los Visitantes'
  },
  zh:{
    title:'2026年展期开放时间（历史资料）与奥地利馆',
    text:'已经结束的2026年展期内（9月29日至11月22日），Giardini 与 Arsenale 当时的开放时间为10:00–18:00，最后入场17:45。通常周一闭馆，但11月16日星期一特别开放。11月22日星期日是 Biennale Arte 2026 最后一天。奥地利馆仅开放至11月21日星期六，11月18日至21日临时缩短开放时间为10:00–15:00。11月22日星期日该馆不对公众开放，SEAWORLD VENICE 项目的收官展示安排在馆外举行。',
    ticketText:'2026年已经结束的展览期间，标准票为30欧元；65岁以上及威尼斯市居民优惠票20欧元，学生和26岁以下为16欧元。单次票包含 Giardini 一次入场和 Arsenale 一次入场，两次可以安排在不同且不连续的日期。连续3日票40欧元，连续7日票50欧元。Arte + Musica 组合票与 Biennale Musica 音乐节相关，不应被视为在音乐节于10月24日结束后仍可使用。',
    finalTitle:'Biennale Arte 2026 最后十天',
    finalText:'Biennale Arte 2026 已于11月22日闭幕；11月13日至22日，Arsenale 举办了特别的表演、讲座、讨论与交流活动。收官节目包括 Laurie Anderson 的 In This World，时间为11月22日星期日16:00，地点为 Tese dei Soppalchi。参加这些活动通常需要有效的 Biennale Arte 2026 门票；Teatro Piccolo 的活动则免费入场，直至座位满额。具体名额、预约和入场条件请以每项活动的官方页面为准。',
    programLink:'11月13日至22日官方活动安排',
    lionsTitle:'11月22日：Leoni dei Visitatori',
    lionsText:'第61届 Biennale Arte 的颁奖典礼原定于11月22日举行。原定5月9日举行的颁奖仪式已推迟至展览闭幕日。2026年新增两个由观众投票决定的 Leoni dei Visitatori：一个授予 In Minor Keys 国际展览的最佳参展者，另一个授予最佳国家参与项目。Biennale 的公告没有说明颁奖仪式的具体时间、地点或是否对公众开放，因此这里不作推断。 参加投票者必须持有效的 Biennale Arte 2026 门票，并已参观 Giardini 与 Arsenale 两个主要展区；票务系统需记录其已进入两处展区。每位符合资格的观众可在同一次投票过程中分别为两个奖项各投一票。',
    lionsLink:'Leoni dei Visitatori 官方说明'
  }
};

const lastDayTicketUrl='https://www.labiennale.org/it/news/sabato-21-e-domenica-22-ingresso-ridotto-alla-biennale-arte';
const lastDayTicket:Record<BiennaleArte2026Lang,{title:string;historical:string;source:string}>={
  it:{
    title:'Ultimo giorno della Biennale Arte 2026: ingresso speciale a 5 €',
    historical:'La Biennale Arte 2026 si è conclusa domenica 22 novembre. Nell’ultima giornata tutti i visitatori hanno potuto acquistare un biglietto speciale a 5 €, valido per un ingresso ai Giardini e uno all’Arsenale. La promozione è terminata insieme alla mostra e non è più disponibile.',
    source:'Comunicazione ufficiale della Biennale'
  },
  en:{
    title:'Biennale Arte 2026 final day: special €5 admission',
    historical:'Biennale Arte 2026 ended on Sunday 22 November. On its final day, every visitor could purchase a special €5 ticket for one admission to Giardini and one to Arsenale. The offer ended with the exhibition and is no longer available.',
    source:'Official Biennale announcement'
  },
  de:{
    title:'Letzter Tag der Biennale Arte 2026: Sonderticket für 5 €',
    historical:'Die Biennale Arte 2026 endete am Sonntag, 22. November. Am letzten Ausstellungstag konnten alle Besucher ein Sonderticket für 5 € kaufen, das je einen Eintritt in Giardini und Arsenale ermöglichte. Die Aktion endete mit der Ausstellung und ist nicht mehr verfügbar.',
    source:'Offizielle Mitteilung der Biennale'
  },
  fr:{
    title:'Dernier jour de la Biennale Arte 2026 : billet spécial à 5 €',
    historical:'La Biennale Arte 2026 s’est achevée le dimanche 22 novembre. Le dernier jour, tous les visiteurs ont pu acheter un billet spécial à 5 €, valable pour une entrée aux Giardini et une à l’Arsenale. L’offre a pris fin avec l’exposition et n’est plus disponible.',
    source:'Annonce officielle de la Biennale'
  },
  es:{
    title:'Último día de la Biennale Arte 2026: entrada especial de 5 €',
    historical:'La Biennale Arte 2026 concluyó el domingo 22 de noviembre. Durante la última jornada, todos los visitantes pudieron comprar una entrada especial de 5 €, válida para un acceso a Giardini y otro a Arsenale. La promoción terminó con la exposición y ya no está disponible.',
    source:'Comunicado oficial de la Biennale'
  },
  zh:{
    title:'Biennale Arte 2026 最后一天：5欧元特别门票',
    historical:'Biennale Arte 2026 已于11月22日星期日闭幕。闭幕当天，所有参观者均可购买5欧元特别门票，凭票可分别进入 Giardini 和 Arsenale 一次。优惠随展览结束而终止，目前已无法购买。',
    source:'Biennale 官方公告'
  }
};
const isTicketSection=(title:string)=>/biglietti|tickets|eintritt|billets|entradas|门票/i.test(title);


const closingBalanceUrl='https://www.labiennale.org/it/news/la-biennale-arte-2026-numeri';
const closingBalance:Record<BiennaleArte2026Lang,{title:string;text:string;link:string}>={
  it:{title:'Biennale Arte 2026: il bilancio finale',text:'La 61ª Esposizione Internazionale d’Arte, In Minor Keys, ideata da Koyo Kouoh, si è conclusa il 22 novembre 2026. Secondo il bilancio ufficiale della Biennale, l’edizione ha registrato 714.015 visitatori complessivi, comprese 29.387 presenze durante la pre-apertura, e ha coinvolto 100 partecipazioni nazionali.',link:'Bilancio ufficiale della Biennale'},
  en:{title:'Biennale Arte 2026: final figures',text:'The 61st International Art Exhibition, In Minor Keys, conceived by Koyo Kouoh, closed on 22 November 2026. According to the Biennale’s official figures, the edition welcomed 714,015 visitors, including 29,387 during the pre-opening, and featured 100 National Participations.',link:'Official Biennale figures'},
  de:{title:'Biennale Arte 2026: Abschlussbilanz',text:'Die 61. Internationale Kunstausstellung In Minor Keys, konzipiert von Koyo Kouoh, endete am 22. November 2026. Laut der offiziellen Bilanz der Biennale verzeichnete die Ausgabe insgesamt 714.015 Besucher, darunter 29.387 in der Vorbesichtigung, und 100 nationale Beteiligungen.',link:'Offizielle Abschlusszahlen der Biennale'},
  fr:{title:'Biennale Arte 2026 : bilan final',text:'La 61e Exposition internationale d’art, In Minor Keys, conçue par Koyo Kouoh, s’est achevée le 22 novembre 2026. Selon le bilan officiel de la Biennale, cette édition a accueilli 714 015 visiteurs au total, dont 29 387 pendant la préouverture, et compté 100 participations nationales.',link:'Bilan officiel de la Biennale'},
  es:{title:'Biennale Arte 2026: balance final',text:'La 61.ª Exposición Internacional de Arte, In Minor Keys, concebida por Koyo Kouoh, concluyó el 22 de noviembre de 2026. Según el balance oficial de la Biennale, la edición recibió 714.015 visitantes en total, incluidos 29.387 durante la preapertura, y reunió 100 participaciones nacionales.',link:'Balance oficial de la Biennale'},
  zh:{title:'Biennale Arte 2026：最终数据',text:'第61届国际艺术展 In Minor Keys 由 Koyo Kouoh 构思，已于2026年11月22日闭幕。根据 Biennale 官方总结，本届共接待714,015名观众，其中29,387人为预展期间入场，共有100个国家参展项目。',link:'Biennale 官方最终统计'}
};

const filmFestival2027:Record<BiennaleArte2026Lang,string>={
  it:'Mostra del Cinema di Venezia 2027',
  en:'Venice Film Festival 2027',
  de:'Filmfestspiele von Venedig 2027',
  fr:'Mostra de Venise 2027',
  es:'Festival de Cine de Venecia 2027',
  zh:'2027 威尼斯电影节'
};

export default function BiennaleArte2026Article({lang,data}:{lang:BiennaleArte2026Lang;data:BiennaleArte2026Data}){
  const path=`${base(lang)}/journal/biennale-di-venezia`;
  const url=`https://www.margheraveniceapartments.com${path}`;
  const next=architecture2027[lang];
  const specialTicket=lastDayTicket[lang];
  const balance=closingBalance[lang];
  const biennaleEventStatus=eventSchemaStatus('2026-11-22');
  const articleJsonLd={
    '@context':'https://schema.org','@type':'Article',headline:data.heroTitle,description:data.metaDescription,
    author:{'@type':'Organization',name:'Marghera Venice Apartments'},
    publisher:{'@type':'Organization',name:'Marghera Venice Apartments'},dateModified:journalNoticeModifiedDates['biennale-di-venezia'],
    mainEntityOfPage:url,url
  };
  const breadcrumbJsonLd={
    '@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[
      {'@type':'ListItem',position:1,name:lang==='de'?'Startseite':lang==='fr'?'Accueil':lang==='es'?'Inicio':lang==='zh'?'首页':'Home',item:`https://www.margheraveniceapartments.com${base(lang)||''}`},
      {'@type':'ListItem',position:2,name:lang==='zh'?'旅行日志':'Journal',item:`https://www.margheraveniceapartments.com${base(lang)}/journal`},
      {'@type':'ListItem',position:3,name:data.breadcrumb,item:url}
    ]
  };
  const eventJsonLd={
    '@context':'https://schema.org','@type':'Event',name:'Biennale Arte 2026 – In Minor Keys',description:data.metaDescription,
    startDate:'2026-05-09',endDate:'2026-11-22',...(biennaleEventStatus?{eventStatus:biennaleEventStatus}:{}),eventAttendanceMode:'https://schema.org/OfflineEventAttendanceMode',
    location:[
      {'@type':'Place',name:'Giardini della Biennale',address:{'@type':'PostalAddress',addressLocality:'Venezia',addressCountry:'IT'}},
      {'@type':'Place',name:'Arsenale di Venezia',address:{'@type':'PostalAddress',addressLocality:'Venezia',addressCountry:'IT'}},
      {'@type':'Place',name:'Forte Marghera',address:{'@type':'PostalAddress',addressLocality:'Venezia',addressCountry:'IT'}}
    ],url
  };
  return <><Header lang={lang}/><main><article className="editorial-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(articleJsonLd)}}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumbJsonLd)}}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(eventJsonLd)}}/>
    {(lang==='it'||lang==='en')?<section className="relative min-h-[64svh] overflow-hidden pt-20 sm:min-h-[72vh]">
      <Image src="/images/journal-biennale.webp" alt={data.imageAlt} fill priority sizes="100vw" className="object-cover"/>
      <div className="absolute inset-0 editorial-cover-shade"/>
      <div className="relative mx-auto flex min-h-[calc(64svh-5rem)] max-w-7xl items-end px-5 pb-16 pt-20 sm:min-h-[calc(72vh-5rem)] lg:px-8">
        <div className="max-w-4xl text-white">
          <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-sm text-white/70"><Link href={base(lang)||'/'}>Home</Link><span>›</span><Link href={`${base(lang)}/journal`}>Journal</Link><span>›</span><span className="text-gold">{data.breadcrumb}</span></nav>
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">{data.category} • {data.eventDate}</p>
          <h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">{data.heroTitle}</h1>
          <p className="mt-6 max-w-3xl text-xl text-white/80">{data.heroSubtitle}</p>
        </div>
      </div>
    </section>:<EditorialHero
      image="/images/journal-biennale.webp"
      imageAlt={data.imageAlt}
      crumbs={[{label:lang==='de'?'Startseite':lang==='fr'?'Accueil':lang==='es'?'Inicio':'首页',href:base(lang)||'/'},{label:lang==='zh'?'旅行日志':'Journal',href:`${base(lang)}/journal`},{label:data.breadcrumb}]}
      eyebrow={`${data.category} • ${data.eventDate}`}
      title={data.heroTitle}
      subtitle={data.heroSubtitle}
    />}

    <JournalVisitorNotices slug="biennale-di-venezia" lang={lang}/>
    <section className="bg-cream py-8"><div className="mx-auto max-w-4xl px-5 lg:px-8"><div className="rounded-[1.6rem] border border-navy/10 bg-white p-6 shadow-soft sm:flex sm:items-center sm:justify-between sm:gap-8"><div><p className="text-xs font-black uppercase tracking-[.18em] text-gold">{next.eyebrow}</p><h2 className="mt-2 font-serif text-3xl text-navy">{next.title}</h2><p className="mt-3 max-w-2xl text-slate-600">{next.text}</p></div><Link href={localePath('/journal/biennale-architettura-2027',lang)} className="mt-5 inline-flex shrink-0 rounded-full bg-navy px-6 py-3 font-bold text-white sm:mt-0">{next.cta} →</Link></div></div></section>

    <section className="py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8">
      <p className="font-serif text-3xl leading-relaxed text-navy">{data.lead}</p>
      <div className="mt-14 space-y-12">{[
        ...data.sections.map(([title,text])=>{
          if(/orari|opening hours|öffnungszeiten|horaires|horarios|开放时间/i.test(title))return [autumnUpdate[lang].title,autumnUpdate[lang].text] as const;
          if(isTicketSection(title))return [title,autumnUpdate[lang].ticketText] as const;
          return [title,text] as const;
        }),
        [autumnUpdate[lang].finalTitle,autumnUpdate[lang].finalText] as const,
        [autumnUpdate[lang].lionsTitle,autumnUpdate[lang].lionsText] as const,
        [balance.title,balance.text] as const
      ].map(([title,text],i)=><section key={title} className="editorial-section-row grid grid-cols-[34px_1fr] gap-3 sm:grid-cols-[42px_1fr] sm:gap-4"><div className="font-serif text-5xl text-gold">{String(i+1).padStart(2,'0')}</div><div><h2 className="font-serif text-4xl text-navy">{title}</h2><p className="mt-4 text-lg leading-8 text-slate-600">{text}</p>{isTicketSection(title)&&<aside className="mt-6 rounded-2xl border border-gold/30 bg-cream p-5 sm:p-6"><h3 className="font-serif text-2xl text-navy">{specialTicket.title}</h3><p className="mt-3 leading-7 text-slate-700">{specialTicket.historical}</p><a href={lastDayTicketUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-bold text-navy underline decoration-gold decoration-2 underline-offset-4">{specialTicket.source} ↗</a></aside>}{title===autumnUpdate[lang].finalTitle&&<p className="mt-4"><a href={closingProgrammeUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-navy underline decoration-gold decoration-2 underline-offset-4">{autumnUpdate[lang].programLink} ↗</a></p>}{title===autumnUpdate[lang].lionsTitle&&<p className="mt-4"><a href={visitorLionsUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-navy underline decoration-gold decoration-2 underline-offset-4">{autumnUpdate[lang].lionsLink} ↗</a></p>}{title===balance.title&&<p className="mt-4"><a href={closingBalanceUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-navy underline decoration-gold decoration-2 underline-offset-4">{balance.link} ↗</a></p>}</div></section>)}</div>
    </div></section>

    <section className="bg-cream py-16"><div className="mx-auto max-w-4xl px-5 lg:px-8">
      <div className="rounded-[2rem] bg-gold p-8 text-navy"><p className="text-xs font-black uppercase tracking-[.22em]">{data.tipLabel}</p><p className="mt-4 font-serif text-3xl">{data.tip}</p></div>
      <div className="mt-8 rounded-[2rem] bg-white p-8 shadow-soft"><p className="text-xs font-black uppercase tracking-[.18em] text-gold">{data.officialBoxLabel}</p><p className="mt-3 text-slate-600">{data.sourceNote}</p><a href={data.officialUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">{data.officialLabel} ↗</a></div>
    </div></section>

    <EditorialStayCta lang={lang} context="journal"/>
<section className="py-20"><div className="mx-auto max-w-5xl px-5 lg:px-8"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">Journal</p><h2 className="mt-3 font-serif text-4xl text-navy">{data.moreLabel}</h2><div className="mt-7 grid gap-4 md:grid-cols-2">{data.related.map(([title,href])=>{const displayTitle=href.endsWith('/mostra-del-cinema')?filmFestival2027[lang]:title;return <Link key={href} href={href} className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">{displayTitle} <span className="text-gold">→</span></Link>})}</div><div className="mt-10 text-center"><Link href={`${base(lang)}/journal`} className="inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">{data.backLabel}</Link></div></div></section>
  </article></main><Footer lang={lang}/></>;
}
