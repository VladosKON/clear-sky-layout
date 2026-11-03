const fs=require('fs'),path=require('path');const file=path.join(__dirname,'interactions.js');let s=fs.readFileSync(file,'utf8');
s=s.split("$('p',container).forEach").join("$$('p',container).forEach");
s=s.split("$('[data-name=\"нет фона\"]',popup).forEach").join("$$('[data-name=\"нет фона\"]',popup).forEach");
s=s.replace("const closeButton=$('[data-name=\"close/closeButton\"]',popup)","const closeButton=$('[data-name=\"closeButton\"]',popup)||$('[data-name=\"close/closeButton\"]',popup)");
fs.writeFileSync(file,s);
