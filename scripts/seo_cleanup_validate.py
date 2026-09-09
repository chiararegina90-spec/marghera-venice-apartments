from pathlib import Path
import re,sys,subprocess
errors=[]; routes=set()
for p in Path('app').rglob('page.tsx'):
    parts=p.relative_to('app').parts[:-1]; routes.add('/'+'/'.join(parts) if parts else '/')
def exists(route):
    route=route.rstrip('/') or '/'; return route in routes or re.sub(r'/[^/]+$','/[eventSlug]',route) in routes
for p in list(Path('app').rglob('*.tsx'))+list(Path('components').rglob('*.tsx')):
    text=p.read_text(errors='ignore')
    for href in re.findall(r'href=["\'](/[^"\'#?{}$`]+)["\']',text):
        if href.startswith(('/api/','/images/')): continue
        if not exists(href): errors.append(f'broken internal href {href} in {p}')
    for key,href in re.findall(r"'(it-IT|en-GB|de-DE|fr-FR|es-ES|zh-CN|x-default)'\s*:\s*'([^']+)'",text):
        if href.startswith('/') and not exists(href): errors.append(f'broken hreflang {key}={href} in {p}')
alltext='\n'.join(p.read_text(errors='ignore') for p in list(Path('app').rglob('*.tsx'))+list(Path('components').rglob('*.tsx'))+list(Path('data').glob('*.ts')))
if "['2026-01-01','2026-01-01']" in alltext: errors.append('fake Event schema date fallback still present')
if 'journal-event-summaries' in alltext: errors.append('deprecated manual journal event summaries still referenced')
for t in ['Appartamenti vicino a Venezia con parcheggio privato | Marghera','Apartments Near Venice with Free Private Parking | Marghera','Ferienwohnungen bei Venedig mit Privatparkplatz | Marghera','Marghera to Venice: Bus, Train, Tickets & Parking','Murano Guide: Glass, Things to Do & How to Visit']:
    if t not in alltext: errors.append(f'missing SEO title: {t}')
if Path('data/journal-event-summaries.ts').exists(): errors.append('deprecated file still exists: data/journal-event-summaries.ts')
for target in ['public','app/globals.css']:
    r=subprocess.run(['git','diff','--exit-code','HEAD','--',target],capture_output=True,text=True)
    if r.returncode: errors.append(f'unexpected visual asset/CSS change under {target}')
if errors: print('\n'.join(errors)); sys.exit(1)
print(f'SEO validation OK: {len(routes)} routes, internal links and literal hreflang targets resolved.')
