const fs=require('fs'),path=require('path');const file=path.join(__dirname,'interactions.js');let s=fs.readFileSync(file,'utf8');
s=s.replace("nav:'#2c3e50',accent:","nav:'#2c3e50',navPreset:'dark',accent:");
s=s.replace("function apply(){syncAlignment();", "function apply(){syncAlignment();applyNavTokens();");
s=s.replace("$('#workspace').style.margin=state.align==='left'?'0 auto 0 0':state.align==='right'?'0 0 0 auto':'0 auto';", "$('#workspace').style.margin=state.align==='left'?'0 auto 0 0':state.align==='full'?'0':'0 auto';$('#workspace').style.width=state.align==='full'?'100%':'1238px';");
s=s.replace("$('#workspace').style.maxWidth=state.device===1024?'958px':state.device===1366?'1100px':'100%';", "$('#workspace').style.maxWidth=state.align==='full'?'100%':state.device===1024?'958px':state.device===1366?'1100px':'100%';");
s=s.split("['left','center','right']").join("['left','center','full']");s=s.split("'По правому краю'").join("'Во всю ширину'");
s=s.replace("state={...defaults,...stored};", "state={...defaults,...stored};if(state.align==='right')state.align='full';");
const marker='function change(k,v)';const at=s.indexOf(marker);if(at<0)throw Error('Missing state update');
s=s.slice(0,at)+`const navPresets={
dark:{hover:'#3E5266',bird:'#273748',icon:'#9CB1C7',text:'#E9EBEC',aux:'#8991A9'},
transparent:{hover:'#F0F0F0',bird:'rgba(39,55,72,0)',icon:'#333333',text:'#333333',aux:'#8991A9'},
light:{hover:'#F9F9F9',bird:'#E9E9E9',icon:'#333333',text:'#333333',aux:'#8991A9'}
};
function applyNavTokens(){const profile=navPresets[state.navPreset]||navPresets.dark;for(const [key,name]of Object.entries({hover:'пункт-аккордеона-по-ховеру',bird:'фон-птички',icon:'цвет-иконки',text:'текст-пункта',aux:'доп-цвета'}))root.style.setProperty('--цвета-аккордеона-'+name,profile[key]);}
function selectNavPreset(kind){state.navPreset=kind;}
function prepareNavIcons(){
$$('#navigation [data-name="_bricks/item/calendarIcon"] .glyph,#navigation [data-name="burger"] .glyph').forEach(img=>{if(img.parentElement.classList.contains('nav-icon-ink'))return;const ink=document.createElement('span');ink.className='nav-icon-ink';ink.style.width=img.getAttribute('width')+'px';ink.style.height=img.getAttribute('height')+'px';ink.style.setProperty('--nav-glyph','url("'+img.src+'")');img.replaceWith(ink);ink.append(img);});
}
`+s.slice(at);
s=s.replace("function change(k,v){state[k]=v;", "function change(k,v){state[k]=v;if(k==='navAlpha'&&Number(v)===0)selectNavPreset('transparent');");
s=s.replace("if(target==='feed')state.feedCustom=true;apply();", "if(target==='feed')state.feedCustom=true;if(target==='nav'&&n===0)selectNavPreset('transparent');apply();");
s=s.replace("button.onclick=()=>{change(target+'Alpha',0);close()}","button.onclick=()=>{if(target==='nav')selectNavPreset('transparent');change(target+'Alpha',0);close()}");
s=s.replace("reset.onclick=()=>{state[target+'Alpha']=100;", "reset.onclick=()=>{if(target==='nav')selectNavPreset('dark');state[target+'Alpha']=100;");
s=s.replace("el.onclick=e=>{e.stopPropagation();let value=style.backgroundImage", "el.onclick=e=>{e.stopPropagation();if(target==='nav'){const id=el.getAttribute('data-node-id')||'';selectNavPreset(/2149:5955[4-7](?:;|$)/.test(id)?'light':'dark')}let value=style.backgroundImage");
s=s.replace("try{const stored=JSON.parse(localStorage.getItem('saby-appearance'));", "prepareNavIcons();try{const stored=JSON.parse(localStorage.getItem('saby-appearance'));");
fs.writeFileSync(file,s);
