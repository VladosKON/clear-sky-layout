const fs=require('fs'),path=require('path');
const file=path.join(__dirname,'interactions.js');let source=fs.readFileSync(file,'utf8');
const original="function apply(){syncAlignment();";
const replacement="function apply(){const feedColour=$('#toolbar [data-name=\"ЦУ\"]');if(feedColour)feedColour.hidden=state.feedMode==='none';if(state.feedMode==='none'&&currentTarget==='feed'&&!popup.hidden)close();syncAlignment();";
if(!source.includes(original))throw Error('Could not locate appearance update');
source=source.replace(original,replacement);fs.writeFileSync(file,source);
