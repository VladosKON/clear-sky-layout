import re,pathlib,requests,concurrent.futures,urllib3,json
urllib3.disable_warnings()
root=pathlib.Path(__file__).parent
urls=set()
for p in root.glob('*.tsx'):
 urls.update(re.findall(r'https://www.figma.com/api/mcp/asset/[\w.-]+',p.read_text(encoding='utf-8')))
assets=root/'assets';assets.mkdir(exist_ok=True)
def download(url):
 p=assets/url.rsplit('/',1)[1]
 if p.exists() and p.stat().st_size:return
 r=requests.get(url,verify=False,timeout=60);r.raise_for_status()
 if not r.content:raise Exception('empty '+url)
 p.write_bytes(r.content)
with concurrent.futures.ThreadPoolExecutor(max_workers=10) as pool:list(pool.map(download,urls))
print('Downloaded',len(urls),'original assets')
