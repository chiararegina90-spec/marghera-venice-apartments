(()=>{
  const mq=window.matchMedia('(max-width:980px)');
  const labels={it:'Vai a una sezione',en:'Jump to a section',de:'Zu einem Abschnitt',fr:'Aller à une section',es:'Ir a una sección',zh:'跳转到章节'};

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

  function setup(){
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
      const keepOpen=section.closest('.wifi-help')!==null;
      if(!keepOpen) section.classList.add('is-collapsed');
      h.setAttribute('role','button');h.setAttribute('tabindex','0');h.setAttribute('aria-expanded',String(!section.classList.contains('is-collapsed')));
      const toggle=()=>{section.classList.toggle('is-collapsed');h.setAttribute('aria-expanded',String(!section.classList.contains('is-collapsed')))};
      h.addEventListener('click',toggle); h.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();toggle()}});
    });
  }
  document.addEventListener('DOMContentLoaded',setup); mq.addEventListener?.('change',()=>location.reload());
})();
