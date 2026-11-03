const fs=require('fs'),path=require('path');const file=path.join(__dirname,'interactions.js');let s=fs.readFileSync(file,'utf8');
s=s.replace("feedMode:'custom',align:","feedMode:'custom',feedCustom:false,align:");
s=s.replace("state.feedMode==='none'?'transparent':effectiveColour('feed')","state.feedMode==='none'||!state.feedCustom?'transparent':effectiveColour('feed')");
s=s.replace('function change(k,v){state[k]=v;commit()}','function change(k,v){state[k]=v;if(k===\'feed\'||k===\'feedAlpha\')state.feedCustom=true;commit()}');
s=s.replace("state[target]=hex.toUpperCase();","state[target]=hex.toUpperCase();if(target==='feed')state.feedCustom=true;");
s=s.replace("state[target+'Alpha']=n;apply();","state[target+'Alpha']=n;if(target==='feed')state.feedCustom=true;apply();");
s=s.replace("open($(background?'#background-template':'#palette-template').innerHTML,anchor,background?362:290);", "const template=background?'#background-template':['accent','marker','content'].includes(target)?'#'+target+'-palette-template':'#palette-template';open($(template).innerHTML,anchor,background?362:366);");
s=s.replace("if(title)title.textContent={nav:'Меню навигации',accent:'Акценты',marker:'Маркер',feed:'Фон ЦУ',content:'Фон контента',background:'Фон'}[target];", "if(title&&!['accent','marker','content'].includes(target))title.textContent={nav:'Меню навигации',feed:'Фон ЦУ',background:'Фон'}[target];");
const alignmentStart=s.indexOf('const alignment='),alignmentEnd=s.indexOf("['2149:56267'",alignmentStart);
s=s.slice(0,alignmentStart)+`const alignment=$('#toolbar [data-name="Выравнивание02"]');
function syncAlignment(){if(!alignment)return;[...alignment.children].forEach((el,i)=>{const selected=['left','center','right'][i]===state.align;el.classList.toggle('toolbar-active',selected);el.setAttribute('aria-checked',String(selected));el.tabIndex=selected?0:-1;});}
if(alignment){alignment.setAttribute('role','radiogroup');alignment.setAttribute('aria-label','Выравнивание контента');[...alignment.children].forEach((el,i)=>{el.setAttribute('role','radio');el.setAttribute('aria-label',['По левому краю','По центру','По правому краю'][i]);el.onclick=()=>change('align',['left','center','right'][i]);el.onkeydown=e=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){e.preventDefault();const next=e.key==='Home'?0:e.key==='End'?2:(i+(e.key==='ArrowRight'?1:2))%3;change('align',['left','center','right'][next]);alignment.children[next].focus()}if(e.key===' '||e.key==='Enter'){e.preventDefault();el.click()}};});}
`+s.slice(alignmentEnd);
// Synchronize selected appearance after every update, including undo and reload.
s=s.replace("function apply(){for", "function apply(){syncAlignment();for");
s=s.replace("state={...defaults,...stored};saved", "state={...defaults,...stored};if(stored.feedCustom===undefined)state.feedCustom=stored.feed!==undefined&&stored.feed!==defaults.feed||stored.feedAlpha!==undefined;saved");
fs.writeFileSync(file,s);
