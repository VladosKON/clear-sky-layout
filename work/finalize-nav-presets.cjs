const fs=require('fs'),path=require('path');const file=path.join(__dirname,'interactions.js');let s=fs.readFileSync(file,'utf8');
s=s.replace("if(target==='nav')selectNavPreset('transparent');change(target+'Alpha',0)","if(target==='nav'){state.nav='#2c3e50';selectNavPreset('transparent')}change(target+'Alpha',0)");
s=s.replace("if(state.align==='right')state.align='full';", "if(state.align==='right')state.align='full';if(stored.navPreset===undefined&&(stored.navAlpha===0||parseColour(state.nav).alpha===0))state.navPreset='transparent';");
fs.writeFileSync(file,s);
