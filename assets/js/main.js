(function(){
var COL={energy:'#D8F43C',sleep:'#9A86FF',focus:'#FF7A33',nad:'#2CD5E8'},NAME={energy:'Energy',sleep:'Sleep',focus:'Focus',nad:'NAD+'};
var DESC={energy:'B12, L-theanine and caffeine for a clean start. 30 strips per pack.',sleep:'L-theanine and melatonin to wind down. 30 strips per pack.',focus:'Alpha-GPC and L-theanine for deep work. 30 strips per pack.',nad:'NAD+ with a B-vitamin complex, once a day. 30 strips per pack.'};
var cur='energy',view='f',root=document.documentElement;
var main=document.getElementById('main'),mainSvg=document.getElementById('mainSvg');
function sync(){
  document.querySelectorAll('use[data-sym]').forEach(function(u){u.setAttribute('href','#'+u.dataset.sym+'-'+cur)});
}
function showMain(){
  var th=document.querySelector('.th[data-v="'+view+'"]');
  var slot=th&&th.querySelector('.slot');
  main.querySelectorAll('.slot').forEach(function(s){s.remove()});
  if(view==='f'||view==='b'||view==='x'){
    mainSvg.style.display='';mainSvg.setAttribute('viewBox',view==='x'?'0 0 760 300':'0 0 620 950');
    mainSvg.firstElementChild.setAttribute('href','#'+view+'-'+cur);mainSvg.firstElementChild.dataset.sym=view;
    mainSvg.style.width=view==='x'?'100%':'auto';mainSvg.style.height=view==='x'?'auto':'100%';
  }else{mainSvg.style.display='none';var c=slot.cloneNode(true);c.style.cssText='position:absolute;inset:0;border-radius:0';main.style.position='relative';main.appendChild(c);if(window.zSlot)window.zSlot(c)}
}
function setFlavour(k){cur=k;root.style.setProperty('--c',COL[k]);
  document.querySelectorAll('.fl').forEach(function(c){c.setAttribute('aria-pressed',c.dataset.k===k?'true':'false')});
  document.getElementById('pName').textContent=NAME[k];document.getElementById('pDesc').textContent=DESC[k];sync();showMain()}
document.querySelectorAll('.fl').forEach(function(c){c.addEventListener('click',function(){setFlavour(c.dataset.k)})});
document.querySelectorAll('.th').forEach(function(t){t.addEventListener('click',function(){view=t.dataset.v;document.querySelectorAll('.th').forEach(function(x){x.setAttribute('aria-pressed',x===t?'true':'false')});showMain()})});
var P={sub:34,one:40};function price(){var v=document.querySelector('input[name=plan]:checked').value;return P[v]}
var toast=document.getElementById('toast'),tt;function say(m){toast.textContent=m;toast.classList.add('on');clearTimeout(tt);tt=setTimeout(function(){toast.classList.remove('on')},2600)}


window.zSlot=function(s){
  var src=s.dataset.src,kind=s.dataset.kind;if(!src||s.dataset.done)return;s.dataset.done=1;
  if(kind==='video'){s.classList.add('vid');
    var v=document.createElement('video');v.preload='auto';v.poster='assets/hero-poster.jpg';v.autoplay=true;v.playsInline=true;v.muted=true;v.loop=true;v.setAttribute('playsinline','');
    v.onloadeddata=function(){s.classList.add('has');s.prepend(v);v.play&&v.play().catch(function(){})};v.onerror=function(){};v.src=src;
    var b=document.createElement('button');b.className='play';b.setAttribute('aria-label','Play video');b.hidden=false;
    b.onclick=function(){var vv=s.querySelector('video');if(!vv)return;vv.muted=false;vv.controls=true;vv.play();b.hidden=true};s.appendChild(b);
    var chk=new Image();
  }else{var i=new Image();i.alt='';i.onload=function(){s.classList.add('has');s.prepend(i)};i.src=src}
};
document.querySelectorAll('.slot').forEach(window.zSlot);
document.querySelectorAll('.slot.vid').forEach(function(s){var b=s.querySelector('.play');if(b&&!s.classList.contains('has'))b.style.opacity='.55'});

var tr=document.getElementById('track');
document.getElementById('prev').onclick=function(){tr.scrollBy({left:-340,behavior:'smooth'})};
document.getElementById('next').onclick=function(){tr.scrollBy({left:340,behavior:'smooth'})};
document.getElementById('form').addEventListener('submit',function(e){e.preventDefault();var v=document.getElementById('email').value.trim(),m=document.getElementById('msg');
  m.textContent=/^\S+@\S+\.\S+$/.test(v)?'Thanks. This is a concept page, so your address was not sent anywhere.':'Enter a valid email address.'});
var rv=[].slice.call(document.querySelectorAll('.rv'));
if('IntersectionObserver' in window){rv.forEach(function(el){if(el.getBoundingClientRect().top>innerHeight*.92)el.classList.add('pre')});
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.remove('pre');io.unobserve(e.target)}})},{threshold:.1});rv.forEach(function(el){io.observe(el)})}
})();
(function(){
var bms=[].slice.call(document.querySelectorAll('.bm')),bi=0;if(bms.length>1)setInterval(function(){bms[bi].classList.remove('on');bi=(bi+1)%bms.length;bms[bi].classList.add('on')},3200);
document.querySelectorAll('.acBtn').forEach(function(b){b.addEventListener('click',function(){var k=b.dataset.k;var chip=document.querySelector('.fl[data-k="'+k+'"]');if(chip)chip.click();document.getElementById('shop').scrollIntoView({behavior:'smooth'})})});
var hv=document.querySelector('.howSlot'),st=document.querySelectorAll('#hsteps button');
function setOn(i){st.forEach(function(b,j){b.classList.toggle('on',j===i)})}
st.forEach(function(b){b.addEventListener('click',function(){var v=hv&&hv.querySelector('video');if(v){v.currentTime=parseFloat(b.dataset.t);v.play&&v.play().catch(function(){})}})});
function bind(){var v=hv&&hv.querySelector('video');if(!v)return setTimeout(bind,600);v.addEventListener('timeupdate',function(){var t=v.currentTime;setOn(t<4.4?0:t<7.2?1:2)})}
bind();
})();

(function(){
var NAME={energy:'Energy',sleep:'Sleep',focus:'Focus',nad:'NAD+'},COL={energy:'#D8F43C',sleep:'#9A86FF',focus:'#FF7A33',nad:'#2CD5E8'};
var PR={sub:34,one:40},cart=[];
try{cart=JSON.parse(localStorage.getItem('zolvCart')||'[]')||[]}catch(e){cart=[]}
function save(){try{localStorage.setItem('zolvCart',JSON.stringify(cart))}catch(e){}}
var cn=document.getElementById('cartN'),home=document.getElementById('viewHome'),pg=document.getElementById('viewCart'),list=document.getElementById('cartList');
var toast=document.getElementById('toast'),tt;function say(m,link){toast.innerHTML='';toast.appendChild(document.createTextNode(m+' '));if(link){var a=document.createElement('a');a.href='#cart';a.textContent='View cart';a.style.color='#D8F43C';toast.appendChild(a)}toast.classList.add('on');clearTimeout(tt);tt=setTimeout(function(){toast.classList.remove('on')},3200)}
function count(){return cart.reduce(function(s,i){return s+i.q},0)}
function add(k,plan){var f=cart.filter(function(i){return i.k===k&&i.p===plan})[0];if(f)f.q++;else cart.push({k:k,p:plan,q:1});save();render();var c=document.querySelector('.cart');c.classList.remove('bump');void c.offsetWidth;c.classList.add('bump')}
function money(n){return '$'+n.toFixed(2)}
function render(){
  cn.textContent=count();
  var sub=0,hasSub=false;
  list.innerHTML='';
  if(!cart.length){list.innerHTML='<div class="empty"><p>Your cart is empty.</p><a class="btn dark" href="#range">Shop the range</a></div>'}
  cart.forEach(function(it,idx){
    var price=PR[it.p]*it.q;sub+=price;if(it.p==='sub')hasSub=true;
    var d=document.createElement('div');d.className='ci';d.style.setProperty('--cc',COL[it.k]);
    d.innerHTML='<div class="ciArt"><svg viewBox="0 0 620 950"><use href="#f-'+it.k+'"/></svg></div><div class="ciInfo"><h3>'+NAME[it.k]+'</h3><p>30 oral dissolving strips</p><label class="sr" for="pl'+idx+'">Purchase option</label><select class="plan" id="pl'+idx+'"><option value="sub">Subscribe and save, every 3 months</option><option value="one">One time</option></select></div><div class="ciR"><span class="ciP">'+money(price)+'</span><div class="qty"><button aria-label="Decrease">&minus;</button><span>'+it.q+'</span><button aria-label="Increase">+</button></div><button class="rm">Remove</button></div>';
    d.querySelector('select').value=it.p;
    d.querySelector('select').onchange=function(e){it.p=e.target.value;merge();save();render()};
    var bs=d.querySelectorAll('.qty button');bs[0].onclick=function(){it.q--;if(it.q<1)cart.splice(idx,1);save();render()};bs[1].onclick=function(){it.q++;save();render()};
    d.querySelector('.rm').onclick=function(){cart.splice(idx,1);save();render()};
    list.appendChild(d)});
  var ship=!cart.length?0:(hasSub||sub>=60)?0:5;
  document.getElementById('sSub').textContent=money(sub);document.getElementById('sShip').textContent=ship?money(ship):'Free';document.getElementById('sTot').textContent=money(sub+ship);
  document.getElementById('shipNote').textContent=!cart.length?'':ship?'Free shipping on subscriptions or orders over $60.':'Free shipping applied.';
}
function merge(){var out=[];cart.forEach(function(i){var f=out.filter(function(o){return o.k===i.k&&o.p===i.p})[0];if(f)f.q+=i.q;else out.push(i)});cart=out}
document.getElementById('addBtn').addEventListener('click',function(){var k=document.querySelector('.fl[aria-pressed=true]').dataset.k,p=document.querySelector('input[name=plan]:checked').value;add(k,p);say(NAME[k]+' added.',true)});
document.querySelectorAll('.acBtn').forEach(function(b){b.textContent=b.textContent.replace('Shop','Add')+' to cart';b.onclick=null;b.replaceWith(b.cloneNode(true))});
document.querySelectorAll('.acBtn').forEach(function(b){b.addEventListener('click',function(){add(b.dataset.k,'sub');say(NAME[b.dataset.k]+' added.',true)})});
function route(){var cartView=location.hash==='#cart';home.hidden=cartView;pg.hidden=!cartView;if(cartView){window.scrollTo(0,0);render()}else if(location.hash.length>1){var el=document.getElementById(location.hash.slice(1));if(el)setTimeout(function(){el.scrollIntoView()},30)}}
window.addEventListener('hashchange',route);
document.getElementById('co').addEventListener('submit',function(e){e.preventDefault();var m=document.getElementById('coMsg'),ok=true;
  ['coName','coMail','coAddr','coCity','coZip'].forEach(function(id){var i=document.getElementById(id),v=i.value.trim(),good=v&&(id!=='coMail'||/^\S+@\S+\.\S+$/.test(v));i.classList.toggle('bad',!good);if(!good)ok=false});
  if(!cart.length){m.textContent='Add a strip pack first.';return}
  if(!ok){m.textContent='Check the highlighted fields.';return}
  m.textContent='Order received. This is a concept page, so nothing was charged or sent.';cart=[];save();render()});
render();route();
})();

(function(){
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
var NAME={energy:'Energy',sleep:'Sleep',focus:'Focus',nad:'NAD+'},COL={energy:'#D8F43C',sleep:'#9A86FF',focus:'#FF7A33',nad:'#2CD5E8'};
var DESC={energy:'B12, L-theanine and caffeine for a clean start. Ready before the kettle is.',sleep:'L-theanine and melatonin on your tongue. Keep a pack by the bed.',focus:'Alpha-GPC and L-theanine for long stretches at the desk.',nad:'NAD+ with a B-vitamin complex. One strip, same time each day.'};
// progress bar
var pr=document.getElementById('prog');
function sc(){var h=document.documentElement.scrollHeight-innerHeight;pr.style.width=(h>0?scrollY/h*100:0)+'%'}addEventListener('scroll',sc,{passive:true});sc();
// rotating word
var words=['mornings','late nights','deep work','every day'],wi=0,rot=document.getElementById('rot');
if(rot)setInterval(function(){rot.classList.add('out');setTimeout(function(){wi=(wi+1)%words.length;rot.textContent=words[wi];rot.classList.remove('out')},350)},2600);
// hero parallax
var hv=document.querySelector('.hv'),pk=document.querySelector('.hpack'),hs=document.querySelector('.hsach');
if(hv&&!reduce)document.getElementById('hero').addEventListener('pointermove',function(e){var r=this.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;pk.style.translate=(x*-26)+'px '+(y*-18)+'px';hs.style.translate=(x*30)+'px '+(y*20)+'px'});
// tilt cards
if(!reduce&&matchMedia('(hover:hover)').matches)document.querySelectorAll('.ac').forEach(function(c){
  c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform='perspective(900px) rotateY('+(x*10)+'deg) rotateX('+(-y*10)+'deg) translateY(-6px)'});
  c.addEventListener('pointerleave',function(){c.style.transform=''})});
// magnetic buttons
if(!reduce&&matchMedia('(hover:hover)').matches)document.querySelectorAll('.btn.dark,.btn.line').forEach(function(b){
  b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect();b.style.transform='translate('+((e.clientX-r.left-r.width/2)*.12)+'px,'+((e.clientY-r.top-r.height/2)*.2)+'px)'});
  b.addEventListener('pointerleave',function(){b.style.transform=''})});
// stagger reveal
document.querySelectorAll('.cards,.acs,.bg4,.track,.ug,.docs,.stp').forEach(function(p){[].forEach.call(p.children,function(c,i){c.classList.add('rv');c.style.setProperty('--d',i)})});
// quiz
var qa=document.getElementById('qa'),qr=document.getElementById('qr'),pick='energy';
qa.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;pick=b.dataset.k;
  [].forEach.call(qa.children,function(x){x.setAttribute('aria-pressed',x===b?'true':'false')});
  document.getElementById('qrUse').setAttribute('href','#f-'+pick);document.getElementById('qrName').textContent=NAME[pick];document.getElementById('qrDesc').textContent=DESC[pick];
  qr.style.setProperty('--cc',COL[pick]);qr.hidden=false;qr.style.animation='none';void qr.offsetWidth;qr.style.animation='';
  document.documentElement.style.setProperty('--c',COL[pick]);var chip=document.querySelector('.fl[data-k="'+pick+'"]');if(chip)chip.click()});
document.getElementById('qrAdd').addEventListener('click',function(){var a=document.getElementById('addBtn');a.click()});
document.getElementById('qrSee').addEventListener('click',function(e){e.preventDefault();document.getElementById('shop').scrollIntoView({behavior:'smooth'})});
// sticky buy bar
var shop=document.getElementById('shop'),sb=document.getElementById('sbar'),sbN=document.getElementById('sbName');
function sbTick(){var r=shop.getBoundingClientRect(),home=!document.getElementById('viewHome').hidden;sb.classList.toggle('on',home&&r.top<innerHeight*.5&&r.bottom>innerHeight*.4);var f=document.querySelector('.fl[aria-pressed=true]');if(f)sbN.textContent=NAME[f.dataset.k]+' · 30 strips';var p=document.querySelector('input[name=plan]:checked').value;document.getElementById('sbPrice').textContent=p==='sub'?'$34.00 · subscribe and save':'$40.00 · one time'}
addEventListener('scroll',sbTick,{passive:true});document.addEventListener('click',function(){setTimeout(sbTick,30)});
document.getElementById('sbAdd').addEventListener('click',function(){document.getElementById('addBtn').click()});
})();

/* --------------------------------------------------------------------------
   UX enhancements — navigation state and accessible review controls
   -------------------------------------------------------------------------- */
(function () {
  'use strict';

  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll('.nav nav a[href^="#"]')
  );
  var sections = navLinks
    .map(function (link) {
      return document.querySelector(link.getAttribute('href'));
    })
    .filter(Boolean);

  // Highlight the section currently occupying the main viewport.
  if ('IntersectionObserver' in window && sections.length) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        navLinks.forEach(function (link) {
          var isCurrent = link.getAttribute('href') === '#' + entry.target.id;
          if (isCurrent) {
            link.setAttribute('aria-current', 'location');
          } else {
            link.removeAttribute('aria-current');
          }
        });
      });
    }, { rootMargin: '-22% 0px -62% 0px', threshold: 0 });

    sections.forEach(function (section) { sectionObserver.observe(section); });
  }

  // Let keyboard users move through the horizontal testimonial track.
  var reviewTrack = document.getElementById('track');
  if (reviewTrack) {
    reviewTrack.addEventListener('keydown', function (event) {
      if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
      event.preventDefault();
      reviewTrack.scrollBy({
        left: event.key === 'ArrowRight' ? 340 : -340,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'auto'
          : 'smooth'
      });
    });
  }
})();


/* --------------------------------------------------------------------------
   Branded entry sequence — Atik Masud
   Runs once per browser tab; gracefully skips when motion is reduced.
   -------------------------------------------------------------------------- */
(function () {
  'use strict';

  var intro = document.getElementById('brandIntro');
  if (!intro) return;

  var storageKey = 'zolv-intro-seen';
  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  try {
    if (window.sessionStorage.getItem(storageKey) === '1') {
      intro.remove();
      return;
    }
    window.sessionStorage.setItem(storageKey, '1');
  } catch (error) {
    // Continue without session storage if browser privacy settings block it.
  }

  // Keep the entry moment brief so returning visitors reach the page quickly.
  window.setTimeout(function () {
    intro.classList.add('is-leaving');
    window.setTimeout(function () { intro.remove(); }, 460);
  }, reduceMotion ? 420 : 1420);
})();
