const fs=require('fs'),path=require('path');const file=path.join(__dirname,'interactions.js');let s=fs.readFileSync(file,'utf8');
s=s.replace("el.setAttribute('aria-label','Без фона');el.onclick=()=>{change(target+'Alpha',0);close()}","el.removeAttribute('role');el.removeAttribute('tabindex');const button=el.closest('button')||el;button.setAttribute('role','button');button.tabIndex=0;button.setAttribute('aria-label','Без фона');button.onclick=()=>{change(target+'Alpha',0);close()}");
fs.writeFileSync(file,s);
