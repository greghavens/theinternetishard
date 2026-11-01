'use strict';
const catalog=window.PROJECTS;
const grid=document.getElementById('project-grid');
const input=document.getElementById('search');
let filter='all';
const labels={github:'GITHUB',model:'HF / MODEL',dataset:'HF / DATASET',space:'HF / SPACE'};
const icons={github:'⌘',model:'◇',dataset:'≡',space:'↗'};
function element(tag,className,text){const e=document.createElement(tag);if(className)e.className=className;if(text)e.textContent=text;return e;}
function render(){
 const q=input.value.trim().toLowerCase();
 const matches=catalog.filter(p=>(filter==='all'||p.kind===filter)&&[p.name,p.id,p.tag,p.description,p.detail].join(' ').toLowerCase().includes(q));
 grid.replaceChildren();
 for(const p of matches){
  const card=element('article','project-card');
  const meta=element('div','card-meta');meta.append(element('span','project-icon',icons[p.kind]),element('span','',labels[p.kind]));
  const title=element('h3');const titleLink=element('a','',p.name);titleLink.href='./projects/'+p.id+'/index.html';title.append(titleLink);card.append(meta,title,element('p','',p.description));
  const bottom=element('div','card-bottom');const a=element('a','','Explore project ↗');a.href='./projects/'+p.id+'/index.html';a.setAttribute('aria-label','Explore '+p.name);bottom.append(element('span','',p.tag),a);card.append(bottom);grid.append(card);
  if(p.id==='triggerfish'){const web=element('a','website-link','Visit trigger.fish ↗');web.href='https://trigger.fish/';card.append(web);}

 }
 document.getElementById('result-count').textContent=`${matches.length} OF ${catalog.length} REPOSITORIES`;
 document.getElementById('empty').hidden=matches.length!==0;
}
function selectFilter(value){filter=value;document.querySelectorAll('[data-filter]').forEach(b=>{const active=b.dataset.filter===value;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});render();}
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>selectFilter(b.dataset.filter)));
document.querySelectorAll('[data-jump-filter]').forEach(a=>a.addEventListener('click',()=>{input.value='';selectFilter(a.dataset.jumpFilter);}));
input.addEventListener('input',render);
document.getElementById('all-count').textContent=catalog.length;
const demos={choice:{question:'Which team should handle this ticket?',rows:[['Billing',91],['Technical',7],['Sales',2]]},score:{question:'How urgent is the problem?',rows:[['Low',3],['Medium',12],['High',85]]},condition:{question:'Does the ticket ask for a refund?',rows:[['Yes',4],['No',96]]}};
function showDemo(type){
 const panel=document.getElementById('demo-content');panel.replaceChildren();panel.append(element('div','demo-kicker','STATE / SUPPORT TICKET'),element('div','ticket','“My payouts have failed for three days and support has not answered.”'),element('div','demo-kicker',demos[type].question));
 for(const [label,value]of demos[type].rows){const row=element('div','bar-row');const track=element('div','track');const fill=element('div','fill');fill.style.width=value+'%';track.append(fill);row.append(element('span','',label),track,element('span','',value+'%'));panel.append(row);}
 document.querySelectorAll('[data-demo]').forEach(b=>{const selected=b.dataset.demo===type;b.setAttribute('aria-selected',String(selected));b.tabIndex=selected?0:-1;});
}
const demoButtons=[...document.querySelectorAll('[data-demo]')];demoButtons.forEach((b,i)=>{b.addEventListener('click',()=>showDemo(b.dataset.demo));b.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();const n=e.key==='Home'?0:e.key==='End'?demoButtons.length-1:(i+(e.key==='ArrowRight'?1:-1)+demoButtons.length)%demoButtons.length;demoButtons[n].focus();showDemo(demoButtons[n].dataset.demo);});});
render();showDemo('choice');
