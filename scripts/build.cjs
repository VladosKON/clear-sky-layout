const fs=require('fs'),path=require('path'),{spawnSync}=require('child_process');
const root=path.resolve(__dirname,'..');
function run(relative,capture=false){const r=spawnSync(process.execPath,[path.join(root,relative)],{cwd:root,encoding:'utf8',maxBuffer:128*1024*1024});if(r.status!==0){process.stderr.write(r.stderr||r.error?.message||'Build failed');process.exit(r.status||1)}if(r.stderr)process.stderr.write(r.stderr);if(!capture&&r.stdout)process.stdout.write(r.stdout);return r.stdout;}
run('work/render.cjs');
fs.writeFileSync(path.join(root,'work/fragments.json'),run('work/build/entry.js',true));
run('work/optimize-assets.cjs');
run('work/assemble.cjs');
