import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EditorialHero from '@/components/EditorialHero';
import type {BiennaleArte2026Data,BiennaleArte2026Lang} from '@/data/biennaleArte2026';
import EditorialStayCta from '@/components/EditorialStayCta';
import {localePath} from '@/lib/i18n';

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
    title:'Orari autunnali e Padiglione Austria',
    text:'Dal 29 settembre al 22 novembre Giardini e Arsenale sono aperti dalle 10:00 alle 18:00, con ultimo ingresso alle 17:45. La mostra è chiusa il lunedì, tranne l’apertura straordinaria di lunedì 16 novembre. Domenica 22 novembre è l’ultimo giorno della Biennale Arte 2026. Il Padiglione Austria segue invece un orario specifico dal 30 settembre al 22 novembre: mercoledì–domenica 10:00–17:00, ultimo ingresso 16:45, chiuso lunedì e martedì.',
    ticketText:'Il biglietto standard costa €30, con ridotto €20 per over 65 e residenti del Comune di Venezia e €16 per studenti e under 26. Il biglietto singolo consente un ingresso ai Giardini e un ingresso all’Arsenale anche in giorni diversi e non consecutivi. Sono disponibili anche un pass di 3 giorni consecutivi a €40 e un pass settimanale di 7 giorni consecutivi a €50. La formula Arte + Musica è collegata al Festival Biennale Musica e non va considerata utilizzabile oltre la sua conclusione del 24 ottobre.',
    finalTitle:'Gli ultimi dieci giorni della Biennale Arte 2026',
    finalText:'La Biennale Arte 2026 si conclude il 22 novembre, ma dal 13 al 22 novembre l’Arsenale ospita anche un programma speciale di performance, conferenze, dibattiti e incontri. Tra gli appuntamenti conclusivi figura In This World di Laurie Anderson, domenica 22 novembre alle 16:00 alle Tese dei Soppalchi. Per partecipare agli appuntamenti è generalmente necessario un biglietto valido Biennale Arte 2026; gli incontri al Teatro Piccolo sono invece gratuiti fino a esaurimento posti. Disponibilità, prenotazioni e condizioni vanno sempre verificate sulla singola scheda ufficiale.',
    programLink:'Programma ufficiale 13–22 novembre',
    lionsTitle:'22 novembre: i Leoni dei Visitatori',
    lionsText:'Il 22 novembre sarà anche la giornata della premiazione della 61ª Biennale Arte. La cerimonia, inizialmente prevista il 9 maggio, è stata spostata alla conclusione della mostra. L’edizione 2026 introduce due Leoni dei Visitatori assegnati attraverso il voto del pubblico: uno al miglior Partecipante della mostra internazionale In Minor Keys e uno alla migliore Partecipazione Nazionale. La Biennale non indica in questa comunicazione orario, sede o accesso pubblico della cerimonia, quindi non li anticipiamo. Per partecipare alla votazione è necessario aver visitato sia i Giardini sia l’Arsenale con un biglietto valido della Biennale Arte 2026: il sistema di biglietteria deve attestare il passaggio nelle due sedi. Ogni avente diritto può esprimere un voto per ciascuno dei due riconoscimenti, in un’unica sessione.',
    lionsLink:'Informazioni ufficiali sui Leoni dei Visitatori'
  },
  en:{
    title:'Autumn hours and the Austrian Pavilion',
    text:'From 29 September to 22 November, Giardini and Arsenale are open 10am–6pm, with last admission at 5:45pm. The exhibition is closed on Mondays except for the special opening on Monday 16 November. Sunday 22 November is the final day of Biennale Arte 2026. The Austrian Pavilion follows a separate schedule from 30 September to 22 November: Wednesday–Sunday 10am–5pm, last admission 4:45pm, closed Monday and Tuesday.',
    ticketText:'Standard admission is €30, with a €20 reduced ticket for over-65s and residents of the Municipality of Venice, and €16 for students and under-26s. A standard ticket includes one admission to Giardini and one to Arsenale, also on different non-consecutive days. A 3-day pass costs €40 and a 7-day weekly pass €50. The Art + Music formula is tied to the Biennale Musica Festival and should not be treated as available after the festival ends on 24 October.',
    finalTitle:'The final ten days of Biennale Arte 2026',
    finalText:'Biennale Arte 2026 closes on 22 November, but from 13 to 22 November the Arsenale also hosts a special programme of performances, conferences, debates and encounters. Among the closing events is Laurie Anderson’s In This World on Sunday 22 November at 4pm at the Tese dei Soppalchi. A valid Biennale Arte 2026 ticket is generally required for the programme; events at Teatro Piccolo are free until capacity is reached. Availability, booking and access conditions should always be checked on the individual official listing.',
    programLink:'Official programme, 13–22 November',
    lionsTitle:'22 November: the Visitors’ Lions',
    lionsText:'22 November will also be the awards day of the 61st Biennale Arte. The ceremony, originally scheduled for 9 May, was moved to the closing day of the exhibition. The 2026 edition introduces two Visitors’ Lions decided through public voting: one for the best participant in the International Exhibition In Minor Keys and one for the best National Participation. The Biennale announcement does not specify the ceremony time, venue or public access, so we do not anticipate them. To take part in the vote, ticket holders must have visited both Giardini and Arsenale with a valid Biennale Arte 2026 ticket; the ticketing system must record attendance at both venues. Each eligible visitor may cast one vote for each of the two awards in a single voting session.',
    lionsLink:'Official information on the Visitors’ Lions'
  },
  de:{
    title:'Herbstöffnungszeiten und Österreich-Pavillon',
    text:'Vom 29. September bis 22. November sind Giardini und Arsenale von 10:00 bis 18:00 Uhr geöffnet, letzter Einlass ist um 17:45 Uhr. Montags ist die Ausstellung geschlossen, mit Ausnahme der Sonderöffnung am Montag, 16. November. Sonntag, 22. November, ist der letzte Tag der Biennale Arte 2026. Der Österreich-Pavillon hat vom 30. September bis 22. November einen eigenen Zeitplan: Mittwoch–Sonntag 10:00–17:00 Uhr, letzter Einlass 16:45 Uhr, Montag und Dienstag geschlossen.',
    ticketText:'Der Standard-Eintritt kostet 30 €, ermäßigt 20 € für Personen über 65 und Einwohner der Stadt Venedig sowie 16 € für Studierende und Personen unter 26. Das Einzelticket umfasst je einen Eintritt in Giardini und Arsenale, auch an unterschiedlichen, nicht aufeinanderfolgenden Tagen. Der 3-Tage-Pass kostet 40 €, der Wochenpass 50 €. Die Formel Kunst + Musik ist an das Festival Biennale Musica gebunden und darf nicht als nach dessen Ende am 24. Oktober verfügbar dargestellt werden.',
    finalTitle:'Die letzten zehn Tage der Biennale Arte 2026',
    finalText:'Die Biennale Arte 2026 endet am 22. November. Vom 13. bis 22. November findet im Arsenale zusätzlich ein besonderes Programm mit Performances, Konferenzen, Debatten und Begegnungen statt. Zu den abschließenden Terminen gehört Laurie Andersons In This World am Sonntag, 22. November, um 16:00 Uhr in den Tese dei Soppalchi. Für das Programm ist in der Regel ein gültiges Ticket der Biennale Arte 2026 erforderlich; die Veranstaltungen im Teatro Piccolo sind bis zur Kapazitätsgrenze kostenlos. Verfügbarkeit, Reservierung und Zugangsbedingungen bitte jeweils im offiziellen Eintrag prüfen.',
    programLink:'Offizielles Programm 13.–22. November',
    lionsTitle:'22. November: die Besucher-Löwen',
    lionsText:'Am 22. November findet auch die Preisverleihung der 61. Biennale Arte statt. Die ursprünglich für den 9. Mai vorgesehene Zeremonie wurde auf den letzten Ausstellungstag verschoben. 2026 werden zwei neue Besucher-Löwen durch Publikumsabstimmung vergeben: einer an den besten Teilnehmenden der internationalen Ausstellung In Minor Keys und einer an die beste Nationale Teilnahme. In der Mitteilung der Biennale werden Uhrzeit, Ort und öffentlicher Zugang der Zeremonie nicht genannt; deshalb machen wir dazu keine Angaben. Für die Abstimmung müssen Ticketinhaber mit einem gültigen Ticket der Biennale Arte 2026 sowohl Giardini als auch Arsenale besucht haben; das Ticketsystem muss den Besuch beider Standorte bestätigen. Jede berechtigte Person kann in einer einzigen Abstimmungssitzung je eine Stimme für beide Auszeichnungen abgeben.',
    lionsLink:'Offizielle Informationen zu den Besucher-Löwen'
  },
  fr:{
    title:'Horaires d’automne et Pavillon autrichien',
    text:'Du 29 septembre au 22 novembre, les Giardini et l’Arsenale sont ouverts de 10:00 à 18:00, dernière entrée à 17:45. L’exposition est fermée le lundi, sauf ouverture exceptionnelle le lundi 16 novembre. Le dimanche 22 novembre est le dernier jour de la Biennale Arte 2026. Le Pavillon autrichien suit un horaire distinct du 30 septembre au 22 novembre : mercredi–dimanche 10:00–17:00, dernière entrée 16:45, fermé lundi et mardi.',
    ticketText:'Le billet standard coûte 30 €, avec tarif réduit à 20 € pour les plus de 65 ans et les résidents de la commune de Venise, et 16 € pour les étudiants et moins de 26 ans. Le billet simple comprend une entrée aux Giardini et une à l’Arsenale, y compris à des jours différents et non consécutifs. Le pass 3 jours coûte 40 € et le pass hebdomadaire 50 €. La formule Art + Musique est liée au Festival Biennale Musica et ne doit pas être présentée comme disponible après sa clôture le 24 octobre.',
    finalTitle:'Les dix derniers jours de la Biennale Arte 2026',
    finalText:'La Biennale Arte 2026 se termine le 22 novembre, mais du 13 au 22 novembre l’Arsenale accueille également un programme spécial de performances, conférences, débats et rencontres. Parmi les rendez-vous de clôture figure In This World de Laurie Anderson, dimanche 22 novembre à 16:00 aux Tese dei Soppalchi. Un billet valable pour la Biennale Arte 2026 est généralement nécessaire ; les rendez-vous du Teatro Piccolo sont gratuits dans la limite des places disponibles. Disponibilités, réservations et conditions d’accès doivent toujours être vérifiées sur chaque fiche officielle.',
    programLink:'Programme officiel du 13 au 22 novembre',
    lionsTitle:'22 novembre : les Lions des Visiteurs',
    lionsText:'Le 22 novembre sera également le jour de la remise des prix de la 61e Biennale Arte. La cérémonie, initialement prévue le 9 mai, a été déplacée à la clôture de l’exposition. L’édition 2026 introduit deux Lions des Visiteurs attribués par le vote du public : l’un au meilleur participant de l’exposition internationale In Minor Keys et l’autre à la meilleure Participation Nationale. Le communiqué de la Biennale ne précise ni l’heure, ni le lieu, ni l’accès public à la cérémonie ; nous ne les anticipons donc pas. Pour participer au vote, les titulaires d’un billet valable pour la Biennale Arte 2026 doivent avoir visité à la fois les Giardini et l’Arsenale ; le système de billetterie doit attester le passage dans les deux sites. Chaque personne éligible peut exprimer un vote pour chacun des deux prix, au cours d’une seule session.',
    lionsLink:'Informations officielles sur les Lions des Visiteurs'
  },
  es:{
    title:'Horarios de otoño y Pabellón de Austria',
    text:'Del 29 de septiembre al 22 de noviembre, Giardini y Arsenale abren de 10:00 a 18:00, con última entrada a las 17:45. La exposición cierra los lunes, salvo la apertura extraordinaria del lunes 16 de noviembre. El domingo 22 de noviembre es el último día de la Biennale Arte 2026. El Pabellón de Austria tiene un horario propio del 30 de septiembre al 22 de noviembre: miércoles–domingo 10:00–17:00, última entrada 16:45, cerrado lunes y martes.',
    ticketText:'La entrada estándar cuesta 30 €, con tarifa reducida de 20 € para mayores de 65 años y residentes del municipio de Venecia, y 16 € para estudiantes y menores de 26 años. La entrada simple permite un acceso a Giardini y otro a Arsenale, incluso en días distintos y no consecutivos. El pase de 3 días cuesta 40 € y el semanal 50 €. La fórmula Arte + Música está vinculada al Festival Biennale Musica y no debe considerarse disponible después de su finalización el 24 de octubre.',
    finalTitle:'Los últimos diez días de la Biennale Arte 2026',
    finalText:'La Biennale Arte 2026 termina el 22 de noviembre, pero del 13 al 22 de noviembre el Arsenale acoge además un programa especial de performances, conferencias, debates y encuentros. Entre las citas finales figura In This World de Laurie Anderson, el domingo 22 de noviembre a las 16:00 en las Tese dei Soppalchi. Por lo general se necesita una entrada válida de Biennale Arte 2026; las actividades del Teatro Piccolo son gratuitas hasta completar aforo. Disponibilidad, reservas y condiciones de acceso deben verificarse siempre en la ficha oficial de cada cita.',
    programLink:'Programa oficial del 13 al 22 de noviembre',
    lionsTitle:'22 de noviembre: los Leones de los Visitantes',
    lionsText:'El 22 de noviembre será también el día de la ceremonia de premios de la 61.ª Biennale Arte. La ceremonia, inicialmente prevista para el 9 de mayo, se trasladó al cierre de la exposición. La edición 2026 introduce dos Leones de los Visitantes decididos mediante el voto del público: uno para el mejor participante de la exposición internacional In Minor Keys y otro para la mejor Participación Nacional. El comunicado de la Biennale no indica hora, sede ni acceso público de la ceremonia, por lo que no los anticipamos. Para participar en la votación es necesario haber visitado tanto los Giardini como el Arsenale con una entrada válida de la Biennale Arte 2026; el sistema de venta de entradas debe acreditar el paso por ambas sedes. Cada persona con derecho puede emitir un voto para cada uno de los dos premios en una única sesión.',
    lionsLink:'Información oficial sobre los Leones de los Visitantes'
  },
  zh:{
    title:'秋季开放时间与奥地利馆',
    text:'9月29日至11月22日，Giardini 与 Arsenale 开放时间为10:00–18:00，最后入场17:45。通常周一闭馆，但11月16日星期一特别开放。11月22日星期日是 Biennale Arte 2026 最后一天。奥地利馆在9月30日至11月22日期间采用单独时间：周三至周日10:00–17:00，最后入场16:45，周一和周二关闭。',
    ticketText:'标准票30欧元；65岁以上及威尼斯市居民优惠票20欧元，学生和26岁以下为16欧元。单次票包含 Giardini 一次入场和 Arsenale 一次入场，两次可以安排在不同且不连续的日期。连续3日票40欧元，连续7日票50欧元。Arte + Musica 组合票与 Biennale Musica 音乐节相关，不应被视为在音乐节于10月24日结束后仍可使用。',
    finalTitle:'Biennale Arte 2026 最后十天',
    finalText:'Biennale Arte 2026 将于11月22日闭幕，但11月13日至22日，Arsenale 还将举行特别的表演、讲座、讨论与交流活动。收官节目包括 Laurie Anderson 的 In This World，时间为11月22日星期日16:00，地点为 Tese dei Soppalchi。参加这些活动通常需要有效的 Biennale Arte 2026 门票；Teatro Piccolo 的活动则免费入场，直至座位满额。具体名额、预约和入场条件请以每项活动的官方页面为准。',
    programLink:'11月13日至22日官方活动安排',
    lionsTitle:'11月22日：Leoni dei Visitatori',
    lionsText:'11月22日也是第61届 Biennale Arte 的颁奖日。原定5月9日举行的颁奖仪式已推迟至展览闭幕日。2026年新增两个由观众投票决定的 Leoni dei Visitatori：一个授予 In Minor Keys 国际展览的最佳参展者，另一个授予最佳国家参与项目。Biennale 的公告没有说明颁奖仪式的具体时间、地点或是否对公众开放，因此这里不作推断。 参加投票者必须持有效的 Biennale Arte 2026 门票，并已参观 Giardini 与 Arsenale 两个主要展区；票务系统需记录其已进入两处展区。每位符合资格的观众可在同一次投票过程中分别为两个奖项各投一票。',
    lionsLink:'Leoni dei Visitatori 官方说明'
  }
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
  const articleJsonLd={
    '@context':'https://schema.org','@type':'Article',headline:data.heroTitle,description:data.metaDescription,
    author:{'@type':'Organization',name:'Marghera Venice Apartments'},
    publisher:{'@type':'Organization',name:'Marghera Venice Apartments'},dateModified:'2026-10-30',
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
    startDate:'2026-05-09',endDate:'2026-11-22',eventStatus:'https://schema.org/EventScheduled',eventAttendanceMode:'https://schema.org/OfflineEventAttendanceMode',
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

    <section className="bg-cream py-8"><div className="mx-auto max-w-4xl px-5 lg:px-8"><div className="rounded-[1.6rem] border border-navy/10 bg-white p-6 shadow-soft sm:flex sm:items-center sm:justify-between sm:gap-8"><div><p className="text-xs font-black uppercase tracking-[.18em] text-gold">{next.eyebrow}</p><h2 className="mt-2 font-serif text-3xl text-navy">{next.title}</h2><p className="mt-3 max-w-2xl text-slate-600">{next.text}</p></div><Link href={localePath('/journal/biennale-architettura-2027',lang)} className="mt-5 inline-flex shrink-0 rounded-full bg-navy px-6 py-3 font-bold text-white sm:mt-0">{next.cta} →</Link></div></div></section>

    <section className="py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8">
      <p className="font-serif text-3xl leading-relaxed text-navy">{data.lead}</p>
      <div className="mt-14 space-y-12">{[
        ...data.sections.map(([title,text])=>{
          if(/orari|opening hours|öffnungszeiten|horaires|horarios|开放时间/i.test(title))return [autumnUpdate[lang].title,autumnUpdate[lang].text] as const;
          if(/biglietti|tickets|eintritt|billets|entradas|门票/i.test(title))return [title,autumnUpdate[lang].ticketText] as const;
          return [title,text] as const;
        }),
        [autumnUpdate[lang].finalTitle,autumnUpdate[lang].finalText] as const,
        [autumnUpdate[lang].lionsTitle,autumnUpdate[lang].lionsText] as const
      ].map(([title,text],i)=><section key={title} className="editorial-section-row grid grid-cols-[34px_1fr] gap-3 sm:grid-cols-[42px_1fr] sm:gap-4"><div className="font-serif text-5xl text-gold">{String(i+1).padStart(2,'0')}</div><div><h2 className="font-serif text-4xl text-navy">{title}</h2><p className="mt-4 text-lg leading-8 text-slate-600">{text}</p>{title===autumnUpdate[lang].finalTitle&&<p className="mt-4"><a href={closingProgrammeUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-navy underline decoration-gold decoration-2 underline-offset-4">{autumnUpdate[lang].programLink} ↗</a></p>}{title===autumnUpdate[lang].lionsTitle&&<p className="mt-4"><a href={visitorLionsUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-navy underline decoration-gold decoration-2 underline-offset-4">{autumnUpdate[lang].lionsLink} ↗</a></p>}</div></section>)}</div>
    </div></section>

    <section className="bg-cream py-16"><div className="mx-auto max-w-4xl px-5 lg:px-8">
      <div className="rounded-[2rem] bg-gold p-8 text-navy"><p className="text-xs font-black uppercase tracking-[.22em]">{data.tipLabel}</p><p className="mt-4 font-serif text-3xl">{data.tip}</p></div>
      <div className="mt-8 rounded-[2rem] bg-white p-8 shadow-soft"><p className="text-xs font-black uppercase tracking-[.18em] text-gold">{data.officialBoxLabel}</p><p className="mt-3 text-slate-600">{data.sourceNote}</p><a href={data.officialUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">{data.officialLabel} ↗</a></div>
    </div></section>

    <EditorialStayCta lang={lang} context="journal"/>
<section className="py-20"><div className="mx-auto max-w-5xl px-5 lg:px-8"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">Journal</p><h2 className="mt-3 font-serif text-4xl text-navy">{data.moreLabel}</h2><div className="mt-7 grid gap-4 md:grid-cols-2">{data.related.map(([title,href])=>{const displayTitle=href.endsWith('/mostra-del-cinema')?filmFestival2027[lang]:title;return <Link key={href} href={href} className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">{displayTitle} <span className="text-gold">→</span></Link>})}</div><div className="mt-10 text-center"><Link href={`${base(lang)}/journal`} className="inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">{data.backLabel}</Link></div></div></section>
  </article></main><Footer lang={lang}/></>;
}
