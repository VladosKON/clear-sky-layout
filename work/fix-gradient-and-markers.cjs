const fs=require('fs'),path=require('path');const file=path.join(__dirname,'interactions.js');let s=fs.readFileSync(file,'utf8');
const at=s.indexOf('function change(k,v)');
s=s.slice(0,at)+`function softPageGradient(value){
if(!/linear-gradient\\(/.test(value))return value;
const colours=value.match(/rgba?\\([^)]+\\)|#[0-9a-f]{3,8}/gi)||[];
let top=colours.find(c=>{const rgb=parseColour(c).rgb;return rgb.slice(0,3).some(n=>Math.abs(n-248)>2)})||'#F2F9FF';
const parsed=parseColour(top),c=parsed.rgb;
if(c[2]>c[0]&&c[2]>c[1])top='#F2F9FF';
else if(Math.max(...c.slice(0,3))-Math.min(...c.slice(0,3))>35)top='rgb('+c.slice(0,3).map(n=>Math.round(255*.95+n*.05)).join(',')+')';
return 'linear-gradient(to bottom,'+top+' 0%,#F8F8F8 27.546%)';
}
function syncBackgroundPreview(){const swatch=$('#toolbar [data-name="Цвет фона"] [data-name="Цвет"]');if(swatch){swatch.style.background=effectiveColour('background');swatch.style.backgroundSize='cover';swatch.style.backgroundPosition='center';}}
`+s.slice(at);
s=s.replace("function change(k,v){state[k]=v;", "function change(k,v){if(k==='background'&&/linear-gradient\\(/.test(v))v=softPageGradient(v);state[k]=v;");
s=s.replace("function apply(){syncAlignment();applyNavTokens();", "function apply(){syncAlignment();applyNavTokens();syncBackgroundPreview();");
s=s.replace("const style=getComputedStyle(el);el.setAttribute", "const style=getComputedStyle(el);if(parseColour(style.backgroundColor).alpha<100&&parseColour(style.backgroundColor).alpha>0)el.parentElement.classList.add('transparency-swatch');el.setAttribute");
s=s.replace("if(state.align==='right')state.align='full';", "if(state.align==='right')state.align='full';if(/linear-gradient\\(/.test(state.background))state.background=softPageGradient(state.background);");
fs.writeFileSync(file,s);
