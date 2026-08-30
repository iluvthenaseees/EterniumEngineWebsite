/**
 * Stylized 3D rendering viewport mockup built with SVG + CSS.
 * A wireframe cube on a perspective grid floor with render-stats overlay.
 */
export default function RenderingMockup() {
  return (
    <div className="relative rounded-2xl glass p-3 shadow-2xl shadow-black/40">
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-2 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
        <span className="ml-2 font-mono text-[11px] text-gray-500">render_viewport.scene</span>
      </div>

      <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-base">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden>
          <defs>
            <linearGradient id="floorGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#141218" />
              <stop offset="100%" stopColor="#0B0A0D" />
            </linearGradient>
            <linearGradient id="cubeFace" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3ABAC2" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#186785" stopOpacity="0.06" />
            </linearGradient>
          </defs>
          <rect width="400" height="300" fill="url(#floorGrad)" />

          {/* Perspective grid */}
          {Array.from({ length: 8 }).map((_, i) => {
            const y = 155 + i * 19;
            const inset = i * 16;
            return <line key={`h${i}`} x1={inset} y1={y} x2={400 - inset} y2={y} stroke="#3ABAC2" strokeOpacity="0.13" strokeWidth="1" />;
          })}
          {Array.from({ length: 11 }).map((_, i) => {
            const x = 40 + i * 32;
            return <line key={`v${i}`} x1={x} y1={155} x2={200 + (x - 200) * 2.4} y2={300} stroke="#3ABAC2" strokeOpacity="0.1" strokeWidth="1" />;
          })}

          {/* Wireframe cube */}
          <g transform="translate(200, 130)">
            <polygon points="-45,-30 45,-30 45,30 -45,30" fill="url(#cubeFace)" stroke="#3ABAC2" strokeOpacity="0.55" strokeWidth="1.5" />
            <polygon points="-45,-30 0,-60 90,-60 45,-30" fill="#3ABAC2" fillOpacity="0.1" stroke="#3ABAC2" strokeOpacity="0.65" strokeWidth="1.5" />
            <polygon points="45,-30 90,-60 90,0 45,30" fill="#186785" fillOpacity="0.14" stroke="#3ABAC2" strokeOpacity="0.65" strokeWidth="1.5" />
            <line x1="-45" y1="-30" x2="0" y2="-60" stroke="#3ABAC2" strokeOpacity="0.4" strokeWidth="1.5" />
            <line x1="45" y1="30" x2="90" y2="0" stroke="#3ABAC2" strokeOpacity="0.4" strokeWidth="1.5" />
            <line x1="-45" y1="30" x2="0" y2="0" stroke="#3ABAC2" strokeOpacity="0.3" strokeWidth="1.5" />
            <line x1="0" y1="-60" x2="0" y2="0" stroke="#3ABAC2" strokeOpacity="0.3" strokeWidth="1.5" />
          </g>

          {/* Light source */}
          <circle cx="320" cy="55" r="36" fill="#3ABAC2" fillOpacity="0.06" />
          <circle cx="320" cy="55" r="5" fill="#3ABAC2" fillOpacity="0.55" />
        </svg>

        {/* Scanline */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-x-0 h-14 bg-gradient-to-b from-transparent via-neon-from/5 to-transparent animate-scan" />
        </div>

        {/* Stats overlay */}
        <div className="absolute top-3 left-3 font-mono text-[10px] text-neon-from/80 leading-relaxed">
          <div>FPS 60.0</div>
          <div>DRAW 1,284</div>
          <div>TRIS 42.1k</div>
        </div>
        <div className="absolute bottom-3 right-3 rounded-md bg-black/40 px-2 py-1 font-mono text-[10px] text-gray-400">
          PBR · Deferred
        </div>
      </div>
    </div>
  );
}
