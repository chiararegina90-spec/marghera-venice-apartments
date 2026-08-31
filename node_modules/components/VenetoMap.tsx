const places = [
  { name: "Valdobbiadene", x: 39, y: 16, kind: "wine" },
  { name: "Treviso", x: 58, y: 20, kind: "city" },
  { name: "Jesolo", x: 84, y: 24, kind: "sea" },
  { name: "Mestre", x: 58, y: 37, kind: "train" },
  { name: "Riviera del Brenta", x: 38, y: 49, kind: "villa" },
  { name: "Marghera", x: 63, y: 50, kind: "home" },
  { name: "Venezia", x: 72, y: 52, kind: "venice" },
  { name: "Padova", x: 43, y: 70, kind: "city" },
  { name: "Verona", x: 24, y: 72, kind: "arena" },
  { name: "Pellestrina", x: 79, y: 70, kind: "island" },
  { name: "Chioggia", x: 69, y: 84, kind: "port" },
] as const;

export function VenetoMap() {
  return (
    <div className="map-card" role="img" aria-label="Mappa illustrata delle principali destinazioni raggiungibili da Marghera">
      <svg viewBox="0 0 1000 560" className="map-svg" aria-hidden="true">
        <defs>
          <linearGradient id="land" x1="0" x2="1"><stop offset="0" stopColor="#f4ead5"/><stop offset="1" stopColor="#e7ead7"/></linearGradient>
          <linearGradient id="water" x1="0" x2="1"><stop offset="0" stopColor="#cfe4e6"/><stop offset="1" stopColor="#93c5cf"/></linearGradient>
          <filter id="paper"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" result="noise"/><feColorMatrix in="noise" type="saturate" values="0"/><feComponentTransfer><feFuncA type="table" tableValues="0 .055"/></feComponentTransfer></filter>
        </defs>
        <rect width="1000" height="560" rx="30" fill="#f7f3ea"/>
        <path d="M0 0H1000V560H0Z" fill="url(#land)"/>
        <path d="M670 0C715 85 672 137 707 205C750 289 690 344 740 412C781 469 785 520 770 560H1000V0Z" fill="url(#water)"/>
        <path d="M730 174c45 18 90 8 125 30s32 55 8 85-84 30-125 9-54-69-8-124Z" fill="#d9eef0" opacity=".8"/>
        <path d="M760 324c55-15 112-9 167 12" fill="none" stroke="#f6f0d9" strokeWidth="11" strokeLinecap="round"/>
        <path d="M739 390c50 10 103 28 154 62" fill="none" stroke="#efe8c9" strokeWidth="9" strokeLinecap="round"/>
        <path d="M0 110C150 80 250 110 365 70S545 34 700 75" fill="none" stroke="#d5dfc2" strokeWidth="32" opacity=".45"/>
        <path d="M0 176C120 145 210 176 310 138S490 120 620 150" fill="none" stroke="#d9e3c7" strokeWidth="21" opacity=".4"/>
        <path d="M195 492C300 430 410 428 523 457" fill="none" stroke="#bfd8dc" strokeWidth="9" opacity=".75"/>
        <path d="M401 310C480 284 562 287 641 316" fill="none" stroke="#bad5d8" strokeWidth="8" opacity=".7"/>
        <g stroke="#c99d52" strokeWidth="2.2" strokeDasharray="8 8" opacity=".9">
          {places.filter(p => p.name !== "Marghera").map(p => <line key={p.name} x1="630" y1="280" x2={p.x*10} y2={p.y*5.6}/>) }
        </g>
        <g filter="url(#paper)"><rect width="1000" height="560" fill="#fff"/></g>
        {places.map((p) => (
          <g key={p.name} transform={`translate(${p.x*10} ${p.y*5.6})`}>
            <circle r={p.name === "Marghera" ? 15 : 9} fill={p.name === "Marghera" ? "#c79f55" : "#0b2c44"} stroke="#fff" strokeWidth="4"/>
            <rect x={p.x > 72 ? -134 : 16} y={-18} rx="9" width={p.name.length*8.3+26} height="35" fill="#fff" stroke="#dfd6c5"/>
            <text x={p.x > 72 ? -122 : 28} y="6" fontSize="17" fontFamily="Arial, sans-serif" fontWeight="700" fill="#173248">{p.name}</text>
          </g>
        ))}
        <g fill="#638b76" opacity=".7">
          <circle cx="140" cy="150" r="8"/><circle cx="182" cy="165" r="6"/><circle cx="240" cy="130" r="9"/><circle cx="308" cy="164" r="7"/><circle cx="358" cy="106" r="8"/><circle cx="470" cy="134" r="6"/>
        </g>
        <g fill="none" stroke="#ffffff" strokeWidth="2" opacity=".48">
          <path d="M716 45c52 24 82 50 112 91"/><path d="M746 70c60 23 96 56 124 102"/><path d="M735 465c61 10 116 31 175 69"/>
        </g>
      </svg>
      <div className="map-copy">
        <p className="eyebrow">Tutto a portata di mano</p>
        <h2>Venezia, laguna e Veneto</h2>
        <p>Marghera è il punto di partenza: Venezia H24, la Riviera del Brenta in auto e molte destinazioni per una gita in giornata.</p>
        <a className="text-link" href="#journal">Scopri gli itinerari <span>→</span></a>
      </div>
    </div>
  );
}
