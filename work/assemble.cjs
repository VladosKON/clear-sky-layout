const fs=require('fs'),path=require('path'),{load}=require('./build/node_modules/cheerio');
const fragments=JSON.parse(fs.readFileSync(path.join(__dirname,'fragments.json'),'utf8').replace(/^\uFEFF/,''));
const icons=JSON.parse(fs.readFileSync(path.join(__dirname,'icons.json'),'utf8'));
const b64=(data,type)=>`data:${type};base64,${Buffer.from(data).toString('base64')}`;
let markup=`<div class="editor"><header id="toolbar">${fragments.toolbar}</header><div id="viewport"><div id="page-bg"><div id="workspace"><nav id="navigation">${fragments.nav}</nav><main id="dashboard"><div id="search">${fragments.search}</div><div id="tabs">${fragments.tabs}</div><section id="widgets">${fragments.dashboard}</section></main><aside id="rail"><span class="user-initials">СС</span><button title="Добавить">＋</button><div class="rail-bottom"><button title="Звонки">♧</button><button title="Сообщения">♧</button><button title="Помощь">?</button></div></aside><aside id="feed">${fragments.feed}</aside></div></div><aside id="tools">${fragments.tools}</aside></div></div><aside id="system"><div>ФОН ЦУ</div><fieldset><label><input type="radio" name="feed-bg" value="custom" checked>Настраивается отдельно</label><label><input type="radio" name="feed-bg" value="none">Всегда без фона</label></fieldset></aside><div id="popup" hidden role="dialog" aria-label="Настройки оформления"></div><template id="background-template">${fragments.background}</template><template id="palette-template">${fragments.palette}</template><input id="background-upload" type="file" accept="image/*" hidden><input id="logo-upload" type="file" accept="image/*" hidden><div id="status" role="status"></div>`;
markup=markup.replace(/<aside id="rail">[\s\S]*?<\/aside>/,'<aside id="rail">'+fragments.rail+'</aside>');
markup+='<template id="gradient-template">'+fragments.gradient+'</template><template id="custom-gradient-template">'+fragments.customgradient+'</template>';
for(const name of ['accent','marker','content'])markup+='<template id="'+name+'-palette-template">'+fragments[name+'Palette']+'</template>';
const $=load(markup,{decodeEntities:false});
$('link[rel=preload]').remove();
// Preserve every original image and mask locally, embedded for portable offline use.
markup=$('body').html();
markup=markup.replace(/https:\/\/www\.figma\.com\/api\/mcp\/asset\/([\w.-]+)/g,(url,name)=>{const p=path.join(__dirname,'assets',name);if(!fs.existsSync(p)||!fs.statSync(p).size)throw Error('Missing '+name);return b64(fs.readFileSync(p),name.endsWith('.svg')?'image/svg+xml':'image/png');});
const d=load(markup);
// Render each widget marker once, using the original Figma silhouette as a mask.
d('#widgets [data-name="Маркер"]').empty().addClass('widget-marker');
d('p').each((i,el)=>{const text=d(el).text();if(/[\uE000-\uF8FF]/.test(text)&&text.length<4){const family=(d(el).attr('class')||'').match(/font-\['([^:]+):/)?.[1];const icon=icons.find(x=>x.text===text&&x.svg&&x.key.startsWith(family+':'))||icons.find(x=>x.text===text&&x.svg);if(icon){const width=icon.svg.match(/width="([^"]+)"/)?.[1],height=icon.svg.match(/height="([^"]+)"/)?.[1];d(el).html(`<img class="glyph" width="${width}" height="${height}" src="${b64(icon.svg,'image/svg+xml')}" alt="">`);d(el).addClass('icon-text');}else d(el).text(text===''?'×':text===''?'✓':'');}});
const classes=new Set();d('[class]').each((i,x)=>(d(x).attr('class')||'').split(/\s+/).forEach(c=>classes.add(c)));
const plain={relative:'position:relative',absolute:'position:absolute',fixed:'position:fixed',flex:'display:flex','inline-flex':'display:inline-flex',block:'display:block',contents:'display:contents','inline-grid':'display:inline-grid',grid:'display:grid',hidden:'display:none','flex-col':'flex-direction:column','flex-row':'flex-direction:row','flex-wrap':'flex-wrap:wrap','flex-none':'flex:none','shrink-0':'flex-shrink:0','items-center':'align-items:center','items-start':'align-items:flex-start','items-end':'align-items:flex-end','justify-center':'justify-content:center','justify-between':'justify-content:space-between','justify-end':'justify-content:flex-end','content-stretch':'align-content:stretch',isolate:'isolation:isolate','place-items-start':'place-items:start','self-stretch':'align-self:stretch','overflow-clip':'overflow:clip','overflow-hidden':'overflow:hidden','overflow-auto':'overflow:auto','pointer-events-none':'pointer-events:none','cursor-pointer':'cursor:pointer','border-solid':'border-style:solid','border':'border-width:1px','border-t':'border-top-width:1px','border-b':'border-bottom-width:1px','font-normal':'font-weight:400','font-bold':'font-weight:700','font-medium':'font-weight:500','not-italic':'font-style:normal','text-left':'text-align:left','text-center':'text-align:center','text-right':'text-align:right','whitespace-nowrap':'white-space:nowrap',uppercase:'text-transform:uppercase',truncate:'overflow:hidden;text-overflow:ellipsis;white-space:nowrap','object-cover':'object-fit:cover','max-w-none':'max-width:none','col-1':'grid-column:1','row-1':'grid-row:1','bg-white':'background-color:white','bg-black':'background-color:black','leading-none':'line-height:1','rounded-full':'border-radius:999px'};
function val(s){if(s.startsWith('[')&&s.endsWith(']'))return s.slice(1,-1).replace(/\\\//g,'/').replace(/var\(--([^,\)]+)/g,(m,n)=>'var(--'+n.replace(/[^\p{L}\p{N}_-]/gu,'-')).replace(/_(?![\w-]*[,\)])/g,' ');if(s==='full')return'100%';if(s==='screen')return'100vh';if(s==='px')return'1px';if(s==='auto')return'auto';if(s==='none')return'none';if(s.includes('/')){let[a,b]=s.split('/').map(Number);return a/b*100+'%'}return Number(s)*4+'px';}
let unknown=[];
function rule(c){if(plain[c])return plain[c];if(c==='bg-clip-padding')return'background-clip:padding-box';if(c==='items-baseline')return'align-items:baseline';if(c==='content-start')return'align-content:flex-start';if(c==='justify-self-stretch')return'justify-self:stretch';if(c.startsWith('bg-gradient-to-'))return'background-image:linear-gradient(to '+({b:'bottom',t:'top',l:'left',r:'right'}[c.slice(-1)])+',var(--gradient-from) var(--gradient-from-position,0%),var(--gradient-to) var(--gradient-to-position,100%))';let neg=c[0]==='-';let raw=neg?c.slice(1):c;
if(raw[0]==='['&&raw.endsWith(']'))return raw.slice(1,-1).replace(/_/g,' ');
let split=raw.indexOf('-[');if(split<0)split=raw.lastIndexOf('-');if(split<0){unknown.push(c);return''}let p=raw.slice(0,split),s=raw.slice(split+1),v=val(s);if(neg)v='calc('+v+' * -1)';
let props={w:'width',h:'height','min-w':'min-width','min-h':'min-height','max-w':'max-width','max-h':'max-height',top:'top',bottom:'bottom',left:'left',right:'right',gap:'gap','gap-x':'column-gap','gap-y':'row-gap',rounded:'border-radius','rounded-tl':'border-top-left-radius','rounded-tr':'border-top-right-radius','rounded-bl':'border-bottom-left-radius','rounded-br':'border-bottom-right-radius',tracking:'letter-spacing',leading:'line-height',p:'padding',pt:'padding-top',pr:'padding-right',pb:'padding-bottom',pl:'padding-left',m:'margin',mt:'margin-top',mr:'margin-right',mb:'margin-bottom',ml:'margin-left'};
if(props[p])return props[p]+':'+v;
if(p==='size')return`width:${v};height:${v}`;
if(p==='indent')return'text-indent:'+v;
if(p==='from')return(v.endsWith('%')?'--gradient-from-position:':'--gradient-from:')+v;
if(p==='to')return(v.endsWith('%')?'--gradient-to-position:':'--gradient-to:')+v;
if(raw==='bg-gradient-to-b')return'background-image:linear-gradient(to bottom,var(--gradient-from) var(--gradient-from-position,0%),var(--gradient-to) var(--gradient-to-position,100%))';
if(['px','py','mx','my'].includes(p)){let z=p[0]==='p'?'padding':'margin',sides=p[1]==='x'?['left','right']:['top','bottom'];return sides.map(k=>z+'-'+k+':'+v).join(';')}
if(p==='inset')return'inset:'+v;
if(p==='z')return'z-index:'+s;
if(p==='opacity')return'opacity:'+Number(s)/100;
if(p==='flex')return'flex:'+v;
if(p==='text'){v=v.replace(/^(color|length):/,'');return (/^(#|var\(|black|white|rgba|rgb)/.test(v)&&!s.includes('length:')?'color:':'font-size:')+v;}
if(p==='font'){if(v.startsWith('family-name:'))return'font-family:Arial,sans-serif';if(v.includes('var('))return'font-weight:'+v;return'font-family:Arial,sans-serif';}
if(p==='bg')return'background:'+v;
if(p==='border'){return (/^\d.*(px|rem)$/.test(v)?'border-width:':'border-color:')+v;}
if(p==='shadow')return'box-shadow:'+v;
if(p==='drop-shadow')return'filter:drop-shadow('+v+')';
if(p==='grid-cols')return'grid-template-columns:'+v;
if(p==='grid-rows')return'grid-template-rows:'+v;
if(p==='mask-size')return'mask-size:'+v;
if(p==='mask-no')return s==='repeat'?'mask-repeat:no-repeat':'mask-clip:no-clip';
if(p==='mask')return s==='alpha'?'mask-mode:alpha':s==='intersect'?'mask-composite:intersect':'';
if(p==='rotate')return'rotate:'+(neg?'-':'')+s+'deg';
if(p==='translate-x')return'--tx:'+v+';transform:translate(var(--tx,0),var(--ty,0))';
if(p==='translate-y')return'--ty:'+v+';transform:translate(var(--tx,0),var(--ty,0))';
unknown.push(c);return'';
}
const escape=s=>s.replace(/[^a-zA-Z0-9_-]/g,ch=>'\\'+ch);
let css='*{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}body{margin:0;font:14px Arial,sans-serif;color:#333}p{margin:0}button,input,select{font:inherit;color:inherit}button{background:none;padding:0;cursor:pointer}img{display:block}button:focus-visible,[tabindex]:focus-visible{outline:2px solid #7b62f8;outline-offset:2px}[hidden]{display:none!important}';
for(const c of classes){let r=rule(c);if(r)css+='.'+escape(c)+'{'+r+'}\n';}
console.log('Unmapped utility classes:',unknown);
css=css.replaceAll('Arial,sans-serif','Inter,Arial,sans-serif');
for(const [weight,file] of [[400,'Regular'],[500,'Medium'],[600,'SemiBold'],[700,'SemiBold']])css+='@font-face{font-family:Inter;font-weight:'+weight+';src:url('+b64(fs.readFileSync(path.join(__dirname,'assets/fonts/Inter-'+file+'-hint.ttf')),'font/ttf')+') format("truetype");font-display:swap}';
css+=fs.readFileSync(path.join(__dirname,'page.css'),'utf8');
css+=':root{--transparency-grid:url("'+b64(fs.readFileSync(path.join(__dirname,'assets/transparency-grid.svg')),'image/svg+xml')+'");--widget-marker-shape:url("'+b64(fs.readFileSync(path.join(__dirname,'assets/widget-marker.svg')),'image/svg+xml')+'")}';
const script=fs.readFileSync(path.join(__dirname,'interactions.js'),'utf8');
const html='<!doctype html><html lang="ru"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Настройка оформления — Saby</title><style>'+css+'</style></head><body>'+d('body').html()+'<script>'+script+'</script></body></html>';
fs.writeFileSync(path.join(__dirname,'../outputs/index.html'),html);
fs.writeFileSync(path.join(__dirname,'classes.json'),JSON.stringify([...classes],null,2));
console.log('Created HTML',html.length,'bytes');
