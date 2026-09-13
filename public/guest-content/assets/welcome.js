(()=>{
  const mq=window.matchMedia('(max-width:980px)');
  const labels={it:'Vai a una sezione',en:'Jump to a section',de:'Zu einem Abschnitt',fr:'Aller à une section',es:'Ir a una sección',zh:'跳转到章节'};
  const dateLocales={it:'it-IT',en:'en-GB',de:'de-DE',fr:'fr-FR',es:'es-ES',zh:'zh-CN'};
  const stayUi={
    it:{nav:'📅 Eventi nelle tue date',title:'✨ Cosa succede durante il tuo soggiorno?',intro:'Inserisci check-in e check-out: ti mostriamo gli eventi di Venezia che coincidono con le tue date. Consideriamo anche il giorno della partenza, così puoi sfruttare l’ultima giornata lasciando qui auto o bagagli.',checkin:'Check-in',checkout:'Check-out',discover:'Scopri gli eventi',loading:'Cerco gli eventi nelle tue date…',heading:'Durante il tuo soggiorno',read:'Leggi l’articolo',departure:'Il giorno della partenza',more:'Mostra tutti gli eventi',none:'Nessun evento con date confermate coincide con il tuo soggiorno. Puoi comunque trovare idee, tradizioni e consigli nel Journal.',journal:'Apri il Journal',invalid:'Controlla le date: il check-out non può precedere il check-in.',error:'Non riesco a caricare gli eventi in questo momento. Puoi comunque aprire il Journal.'},
    en:{nav:'📅 Events for your dates',title:'✨ What’s happening during your stay?',intro:'Enter your check-in and check-out dates to see Venice events that overlap your stay. We include departure day too, so you can enjoy a final half-day after leaving your car or luggage here.',checkin:'Check-in',checkout:'Check-out',discover:'Find events',loading:'Finding events for your dates…',heading:'During your stay',read:'Read the article',departure:'On departure day',more:'Show all events',none:'No confirmed-date events overlap your stay. You can still find ideas, traditions and practical tips in the Journal.',journal:'Open the Journal',invalid:'Please check the dates: check-out cannot be before check-in.',error:'Events cannot be loaded right now. You can still open the Journal.'},
    de:{nav:'📅 Events zu Ihren Reisedaten',title:'✨ Was ist während Ihres Aufenthalts los?',intro:'Geben Sie Check-in und Check-out ein. Wir zeigen Veranstaltungen in Venedig, die in Ihren Aufenthalt fallen. Auch der Abreisetag zählt, damit Sie nach dem Check-out noch einen halben Tag in Venedig nutzen können.',checkin:'Check-in',checkout:'Check-out',discover:'Events entdecken',loading:'Veranstaltungen für Ihre Reisedaten werden gesucht…',heading:'Während Ihres Aufenthalts',read:'Artikel lesen',departure:'Am Abreisetag',more:'Alle Events anzeigen',none:'Für Ihren Aufenthalt gibt es derzeit keine Veranstaltung mit bestätigtem Datum. Im Journal finden Sie trotzdem Ideen, Traditionen und praktische Tipps.',journal:'Journal öffnen',invalid:'Bitte prüfen Sie die Daten: Der Check-out darf nicht vor dem Check-in liegen.',error:'Die Veranstaltungen können gerade nicht geladen werden. Sie können trotzdem das Journal öffnen.'},
    fr:{nav:'📅 Événements à vos dates',title:'✨ Que se passe-t-il pendant votre séjour ?',intro:'Indiquez vos dates d’arrivée et de départ pour voir les événements vénitiens qui coïncident avec votre séjour. Le jour du départ est inclus afin de profiter aussi de votre dernière demi-journée après avoir laissé voiture ou bagages ici.',checkin:'Arrivée',checkout:'Départ',discover:'Découvrir les événements',loading:'Recherche des événements à vos dates…',heading:'Pendant votre séjour',read:'Lire l’article',departure:'Le jour du départ',more:'Afficher tous les événements',none:'Aucun événement aux dates confirmées ne coïncide avec votre séjour. Le Journal propose tout de même des idées, traditions et conseils pratiques.',journal:'Ouvrir le Journal',invalid:'Vérifiez les dates : le départ ne peut pas précéder l’arrivée.',error:'Impossible de charger les événements pour le moment. Vous pouvez tout de même ouvrir le Journal.'},
    es:{nav:'📅 Eventos en tus fechas',title:'✨ ¿Qué ocurre durante tu estancia?',intro:'Introduce las fechas de entrada y salida para descubrir los eventos de Venecia que coinciden con tu estancia. También incluimos el día de salida, para que puedas aprovechar esa última media jornada dejando aquí el coche o el equipaje.',checkin:'Entrada',checkout:'Salida',discover:'Descubrir eventos',loading:'Buscando eventos para tus fechas…',heading:'Durante tu estancia',read:'Leer el artículo',departure:'El día de salida',more:'Mostrar todos los eventos',none:'Ningún evento con fechas confirmadas coincide con tu estancia. En el Journal encontrarás igualmente ideas, tradiciones y consejos prácticos.',journal:'Abrir el Journal',invalid:'Revisa las fechas: la salida no puede ser anterior a la entrada.',error:'Ahora mismo no se pueden cargar los eventos. Puedes abrir el Journal igualmente.'},
    zh:{nav:'📅 入住期间活动',title:'✨ 入住期间威尼斯有什么活动？',intro:'输入入住和退房日期，即可查看与您行程重合的威尼斯活动。退房当天也会计算在内，方便您寄存行李或把车留在这里后，再享受半天威尼斯时光。',checkin:'入住日期',checkout:'退房日期',discover:'查看活动',loading:'正在查找您入住期间的活动…',heading:'入住期间的活动',read:'查看文章',departure:'退房当天',more:'显示全部活动',none:'目前没有日期已确认且与您的住宿重合的活动。您仍可在旅行日志中查看威尼斯灵感、传统和实用建议。',journal:'打开旅行日志',invalid:'请检查日期：退房日期不能早于入住日期。',error:'暂时无法加载活动信息，您仍可打开旅行日志查看。'}
  };
  const STORAGE_KEY='mva-stay-dates-v1';
  let eventRequest;

  function secureExternalLinks(){
    document.querySelectorAll('a[target="_blank"]').forEach(link=>link.setAttribute('rel','noopener noreferrer'));
  }

  function localizeChineseGuestContact(){
    const lang=(document.documentElement.lang||'it').toLowerCase();
    if(lang!=='zh') return;

    // Chinese guests use the already approved WeChat QR instead of WhatsApp.
    document.querySelectorAll('a[href^="https://wa.me/"]').forEach(link=>{
      link.setAttribute('href','/images/wechat-qr-only.png');
      link.setAttribute('target','_blank');
      link.setAttribute('rel','noopener noreferrer');
      link.setAttribute('aria-label','打开 Marghera Venice Apartments 微信二维码');
      link.textContent='💬 微信二维码';
    });

    // Remove the last small English labels from the Chinese public-links block.
    const smallLabels={'Events & updates':'活动与更新','Veneto':'威尼托','Guides':'旅行指南','Local':'本地体验'};
    document.querySelectorAll('.public small').forEach(node=>{
      const key=(node.textContent||'').trim();
      if(smallLabels[key]) node.textContent=smallLabels[key];
    });
  }

  function getStayEvents(lang){
    if(!eventRequest)eventRequest=fetch(`/api/event-calendar?lang=${encodeURIComponent(lang)}`).then(r=>{if(!r.ok)throw new Error(String(r.status));return r.json()}).then(x=>x.events||[]);
    return eventRequest;
  }
  function displayDate(start,end,lang){
    const fmt=new Intl.DateTimeFormat(dateLocales[lang]||dateLocales.it,{day:'numeric',month:'short',year:'numeric'});
    const s=fmt.format(new Date(`${start}T12:00:00Z`));
    if(start===end)return s;
    return `${s} – ${fmt.format(new Date(`${end}T12:00:00Z`))}`;
  }
  function durationDays(event){return Math.round((Date.parse(`${event.endDate}T00:00:00Z`)-Date.parse(`${event.startDate}T00:00:00Z`))/86400000)+1;}
  function eventPriority(event){const days=durationDays(event);return days<=2?0:days<=14?1:2;}
  function journalHref(lang){return lang==='it'?'/journal':`/${lang}/journal`;}

  function insertStayEvents(){
    if(document.getElementById('stay-events'))return;
    const lang=(document.documentElement.lang||'it').toLowerCase();
    const t=stayUi[lang]||stayUi.it;
    const main=document.querySelector('main');if(!main)return;
    const section=document.createElement('section');section.className='section stay-events';section.id='stay-events';
    section.innerHTML=`<h2>${t.title}</h2><p class="stay-events-intro">${t.intro}</p><form class="stay-events-form"><label>${t.checkin}<input name="checkin" type="date" required></label><label>${t.checkout}<input name="checkout" type="date" required></label><button class="btn stay-events-submit" type="submit">${t.discover}</button></form><div class="stay-events-status" aria-live="polite"></div><div class="stay-events-results"></div>`;
    const anchor=document.querySelector('.wifi-help');
    if(anchor)anchor.insertAdjacentElement('afterend',section);else main.querySelector('.hero')?.insertAdjacentElement('afterend',section);

    const nav=document.querySelector('.sidebar .nav');
    if(nav&&!nav.querySelector('a[href="#stay-events"]')){
      const link=document.createElement('a');link.href='#stay-events';link.textContent=t.nav;
      const wifi=nav.querySelector('a[href="#wifi"]');if(wifi)wifi.insertAdjacentElement('afterend',link);else nav.prepend(link);
    }

    const form=section.querySelector('.stay-events-form');
    const checkin=form.querySelector('[name="checkin"]');const checkout=form.querySelector('[name="checkout"]');
    const status=section.querySelector('.stay-events-status');const results=section.querySelector('.stay-events-results');
    try{const saved=JSON.parse(localStorage.getItem(STORAGE_KEY)||'null');if(saved?.checkin&&saved?.checkout){checkin.value=saved.checkin;checkout.value=saved.checkout;}}catch{}

    function renderCards(events,checkOut,showAll=false){
      results.innerHTML='';
      const heading=document.createElement('h3');heading.className='stay-events-heading';heading.textContent=t.heading;results.appendChild(heading);
      const list=document.createElement('div');list.className='stay-event-list';results.appendChild(list);
      const shown=showAll?events:events.slice(0,5);
      shown.forEach(event=>{
        const card=document.createElement('a');card.className='stay-event-card';card.href=event.href;
        const img=document.createElement('img');img.src=event.image;img.alt=event.alt||event.title;img.loading='lazy';
        const body=document.createElement('div');body.className='stay-event-body';
        const meta=document.createElement('div');meta.className='stay-event-meta';meta.textContent=displayDate(event.startDate,event.endDate,lang);
        if(event.startDate===checkOut){const badge=document.createElement('span');badge.className='stay-event-departure';badge.textContent=t.departure;meta.append(' ',badge);}
        const title=document.createElement('h3');title.textContent=event.title;
        const text=document.createElement('p');text.textContent=event.description;
        const read=document.createElement('span');read.className='stay-event-read';read.textContent=`${t.read} →`;
        body.append(meta,title,text,read);card.append(img,body);list.appendChild(card);
      });
      if(!showAll&&events.length>5){const more=document.createElement('button');more.type='button';more.className='btn stay-events-more';more.textContent=`${t.more} (${events.length})`;more.addEventListener('click',()=>renderCards(events,checkOut,true));results.appendChild(more);}
    }

    async function showMatches(){
      const start=checkin.value,end=checkout.value;results.innerHTML='';status.textContent='';
      if(!start||!end)return;
      if(end<start){status.textContent=t.invalid;status.className='stay-events-status is-error';return;}
      try{localStorage.setItem(STORAGE_KEY,JSON.stringify({checkin:start,checkout:end}));}catch{}
      status.className='stay-events-status';status.textContent=t.loading;
      try{
        const events=await getStayEvents(lang);
        const matches=events.filter(event=>event.startDate<=end&&event.endDate>=start).sort((a,b)=>eventPriority(a)-eventPriority(b)||a.startDate.localeCompare(b.startDate)||a.endDate.localeCompare(b.endDate));
        status.textContent='';
        if(matches.length){renderCards(matches,end);return;}
        const empty=document.createElement('div');empty.className='stay-events-empty';
        const p=document.createElement('p');p.textContent=t.none;
        const link=document.createElement('a');link.className='btn';link.href=journalHref(lang);link.textContent=t.journal;
        empty.append(p,link);results.appendChild(empty);
      }catch{
        status.className='stay-events-status is-error';status.textContent=t.error;
        const link=document.createElement('a');link.className='btn stay-events-fallback';link.href=journalHref(lang);link.textContent=t.journal;results.appendChild(link);
      }
    }
    form.addEventListener('submit',e=>{e.preventDefault();showMatches();});
    if(checkin.value&&checkout.value)showMatches();
  }

  function setup(){
    insertStayEvents();
    localizeChineseGuestContact();
    secureExternalLinks();
    if(!mq.matches) return;
    const lang=(document.documentElement.lang||'it').toLowerCase();
    const main=document.querySelector('main');
    const top=document.querySelector('.toplangs');
    const nav=document.querySelector('.sidebar .nav');
    if(main&&nav&&!document.querySelector('.mobile-jump')){
      const details=document.createElement('details'); details.className='mobile-jump';
      const summary=document.createElement('summary'); summary.textContent='☰ '+(labels[lang]||labels.it); details.appendChild(summary);
      const links=document.createElement('div'); links.className='mobile-jump-links';
      nav.querySelectorAll('a[href^="#"]').forEach(a=>{const clone=a.cloneNode(true);clone.addEventListener('click',()=>{const id=clone.getAttribute('href');const target=id&&document.querySelector(id);if(target&&target.classList.contains('wb-collapsible')) target.classList.remove('is-collapsed');details.open=false;});links.appendChild(clone)});
      details.appendChild(links); (top?.parentNode||main).insertBefore(details,top?top.nextSibling:main.firstChild);
    }
    document.querySelectorAll('.section').forEach(section=>{
      const h=section.querySelector(':scope > h2'); if(!h||section.classList.contains('wb-collapsible')) return;
      section.classList.add('wb-collapsible');
      const keepOpen=section.closest('.wifi-help')!==null||section.classList.contains('stay-events');
      if(!keepOpen) section.classList.add('is-collapsed');
      h.setAttribute('role','button');h.setAttribute('tabindex','0');h.setAttribute('aria-expanded',String(!section.classList.contains('is-collapsed')));
      const toggle=()=>{section.classList.toggle('is-collapsed');h.setAttribute('aria-expanded',String(!section.classList.contains('is-collapsed')))};
      h.addEventListener('click',toggle); h.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();toggle()}});
    });
  }
  // The script is loaded with defer, so the document is already parsed here.
  setup();
  mq.addEventListener?.('change',()=>location.reload());
})();
