const fs=require('fs'),p=require('path');
let f=p.join(__dirname,'assemble.cjs'),s=fs.readFileSync(f,'utf8');
s=s.replaceAll(',var(--gradient-from),var(--gradient-to))',',var(--gradient-from) var(--gradient-from-position,0%),var(--gradient-to) var(--gradient-to-position,100%))');fs.writeFileSync(f,s);
