const fs=require('fs'),path=require('path');const file=path.join(__dirname,'interactions.js');let s=fs.readFileSync(file,'utf8');
s=s.replace('p.replaceWith(input);hexInputs.push(input);','p.replaceWith(input);$$(\'p\',container).forEach(x=>x.remove());hexInputs.push(input);');
s=s.replaceAll("$('[data-name=\"Component 99\"]',popup)","$('[data-name=\"Component 99\"],[data-name=\"Выбранный цвет\"]',popup)");
s=s.replace("change(target,value);close()", "if(!/gradient\\(|url\\(/.test(value))state[target+'Alpha']=parseColour(value).alpha;change(target,value);close()");
s=s.replace("const picker=inlineColourFields(target);", "const picker=inlineColourFields(target);$$('[data-name=\"нет фона\"]',popup).forEach(el=>{el.setAttribute('role','button');el.tabIndex=0;el.setAttribute('aria-label','Без фона');el.onclick=()=>{change(target+'Alpha',0);close()}});const reset=$('[data-name=\"ghost\"]',popup);if(reset){reset.setAttribute('aria-label','Сбросить цвет');reset.setAttribute('role','button');reset.tabIndex=0;reset.onclick=()=>{state[target+'Alpha']=100;change(target,defaults[target]);close()}};");
fs.writeFileSync(file,s);
