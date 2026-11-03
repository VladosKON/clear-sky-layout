// Build smaller copies; original Figma exports remain untouched.
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const sharp = require('./build/node_modules/sharp');
async function main() {
  const fragments = fs.readFileSync(path.join(__dirname, 'fragments.json'), 'utf8');
  const names = [...new Set([...fragments.matchAll(/https:\/\/www\.figma\.com\/api\/mcp\/asset\/([\w.-]+\.png)/g)].map(m => m[1]))];
  const output = path.join(__dirname, 'optimized');
  fs.mkdirSync(output, {recursive:true});
  const manifest = {};
  for (const name of names) {
    const input = fs.readFileSync(path.join(__dirname, 'assets', name));
    if (input.length < 16384) continue;
    // Screenshots supply cropped UI details: preserve their pixels exactly.
    // Photos use high quality WebP at their original resolution.
    const screenshot = ['ed19ad2a-c92f-4e3e-90eb-216a7b4fc8c7.png', '055d562f-47ce-434e-adf3-5a2ac7a04aaa.png'].includes(name);
    const options = screenshot ? {lossless:true, effort:6} : {quality:92, effort:6};
    const hash = crypto.createHash('sha256').update(input).update(JSON.stringify(options)).digest('hex');
    const file = hash + '.webp';
    const target = path.join(output, file);
    if (!fs.existsSync(target)) await sharp(input).webp(options).toFile(target);
    if (fs.statSync(target).size < input.length) manifest[name] = file;
  }
  fs.writeFileSync(path.join(output, 'manifest.json'), JSON.stringify(manifest));
  console.log('Optimized raster assets:', Object.keys(manifest).length);
}
main().catch(error => {console.error(error); process.exit(1);});
