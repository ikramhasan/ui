import sys, os, asyncio
from playwright.async_api import async_playwright
HERE=os.path.dirname(os.path.abspath(__file__))
EXPORT=os.path.join(HERE,'export')
# Playwright's own Chromium by default; set CHROMIUM_PATH to use another build.
CHROMIUM=os.environ.get('CHROMIUM_PATH')
async def main(mode, out, times=None):
    os.makedirs(out, exist_ok=True)
    async with async_playwright() as p:
        br=await p.chromium.launch(**({'executable_path':os.path.expanduser(CHROMIUM)} if CHROMIUM else {}))
        pg=await br.new_page(viewport={'width':1440,'height':1440}, device_scale_factor=1)
        await pg.goto('file://'+HERE+'/index.html')
        await pg.evaluate('window.ready')
        await pg.wait_for_timeout(300)
        if mode=='times':
            for name,t in times:
                await pg.evaluate(f'seek({t})')
                await pg.screenshot(path=f'{out}/{name}.png')
        else:
            FPS=60; N=1680; SUB=4; SHUT=0.75
            k=0
            for f in range(N):
                for s in range(SUB):
                    t=(f + (s-(SUB-1)/2)*SHUT/SUB)/FPS
                    await pg.evaluate(f'seek({t})')
                    await pg.screenshot(path=f'{out}/{k:05d}.png')
                    k+=1
                if f%60==0: print('frame',f,flush=True)
        await br.close()
# python3 render.py full              → export/sub (subframes for encode.sh)
# python3 render.py beats [offset]     → export/beats (one frame per event)
# python3 render.py at <t> [<t> ...]   → export/at
if __name__=='__main__':
    mode=sys.argv[1]
    if mode=='beats':
        off=float(sys.argv[2]) if len(sys.argv)>2 else 0.0
        ts=[(f'b{n:02d}', n*1.0+off) for n in range(28)]
        asyncio.run(main('times', os.path.join(EXPORT,'beats'), ts))
    elif mode=='at':
        ts=[(f't{float(x):06.3f}', float(x)) for x in sys.argv[2:]]
        asyncio.run(main('times', os.path.join(EXPORT,'at'), ts))
    else:
        asyncio.run(main('full', os.path.join(EXPORT,'sub')))
