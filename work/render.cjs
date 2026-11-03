const fs=require('fs'),path=require('path'),esbuild=require('./build/node_modules/esbuild');
const parts={toolbar:'2149_56254',nav:'I2149_56252_2149_56928',feed:'I2149_56252_2149_57201',tools:'2149_56253',dashboard:'dashboard',search:'search',tabs:'tabs',background:'2149_59525',palette:'2149_59659',rail:'rail',gradient:'gradient',customgradient:'customgradient'};
Object.assign(parts,{accentPalette:'accent-palette',markerPalette:'marker-palette',contentPalette:'content-palette'});
let entry="import React from 'react';import {renderToStaticMarkup} from 'react-dom/server';\n";
for(const [name,file]of Object.entries(parts)){
let src=fs.readFileSync(path.join(__dirname,file+'.tsx'),'utf8');
src="import React from 'react';\n"+src;
if(name==='gradient')src+='\nexport default function GradientScreen(){return <Window state="градиент"/>;}';
if(name==='customgradient')src+='\nexport default function GradientEditor(){return <Window state="gradient start"/>;}';
fs.writeFileSync(path.join(__dirname,'build',name+'.tsx'),src);
entry+=`import ${name} from './${name}';\n`;
}
entry+='process.stdout.write(JSON.stringify({'+Object.keys(parts).map(n=>`${n}:renderToStaticMarkup(React.createElement(${n}))`).join(',')+'}));';
fs.writeFileSync(path.join(__dirname,'build','entry.tsx'),entry);
for(const file of [...Object.keys(parts),'entry']){const p=path.join(__dirname,'build',file+'.tsx');const result=esbuild.transformSync(fs.readFileSync(p,'utf8'),{loader:'tsx',format:'cjs'});fs.writeFileSync(path.join(__dirname,'build',file+'.js'),result.code);}
