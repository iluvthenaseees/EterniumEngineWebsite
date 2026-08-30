/**
 * Stylized visual editor mockup: scene hierarchy, a node-graph viewport,
 * and an inspector panel — all rendered with CSS + SVG.
 */
export default function EditorMockup() {
  return (
    <div className="relative rounded-2xl glass p-3 shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 px-2 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
        <span className="ml-2 font-mono text-[11px] text-gray-500">visual_editor.workspace</span>
      </div>

      <div className="grid grid-cols-12 gap-2 rounded-xl overflow-hidden bg-base h-[260px] sm:h-[300px]">
        {/* Scene hierarchy */}
        <div className="col-span-4 sm:col-span-3 border-r border-white/5 p-3">
          <div className="text-[9px] font-semibold uppercase tracking-wider text-gray-500 mb-2.5">Hierarchy</div>
          <div className="space-y-1 font-mono text-[10px]">
            {[
              { label: 'Scene', depth: 0, active: false },
              { label: 'Player', depth: 1, active: true },
              { label: 'Camera', depth: 2, active: false },
              { label: 'Rig', depth: 2, active: false },
              { label: 'World', depth: 1, active: false },
              { label: 'Terrain', depth: 2, active: false },
              { label: 'Lights', depth: 2, active: false },
            ].map((n) => (
              <div
                key={n.label}
                className={`flex items-center gap-1.5 rounded px-1.5 py-1 ${
                  n.active ? 'bg-neon-from/15 text-neon-from' : 'text-gray-400'
                }`}
                style={{ paddingLeft: `${n.depth * 9 + 6}px` }}
              >
                <span className="h-1 w-1 rounded-full bg-current opacity-60" />
                {n.label}
              </div>
            ))}
          </div>
        </div>

        {/* Node graph viewport */}
        <div className="col-span-8 sm:col-span-5 relative grid place-items-center border-r border-white/5">
          <div className="absolute inset-0 grid-pattern opacity-40" />
          <svg width="180" height="120" viewBox="0 0 180 120" aria-hidden>
            <path d="M 40 30 Q 80 30 90 60" fill="none" stroke="#3ABAC2" strokeWidth="1.5" strokeOpacity="0.5" />
            <path d="M 90 60 Q 130 60 140 90" fill="none" stroke="#3ABAC2" strokeWidth="1.5" strokeOpacity="0.5" />
            <path d="M 40 30 Q 40 60 90 60" fill="none" stroke="#186785" strokeWidth="1.5" strokeOpacity="0.4" />
            <g>
              <rect x="14" y="18" width="52" height="24" rx="6" fill="#1C1A22" stroke="#3ABAC2" strokeOpacity="0.4" />
              <text x="40" y="33" textAnchor="middle" fill="#9CA3AF" fontSize="8" fontFamily="monospace">Input</text>
            </g>
            <g>
              <rect x="64" y="48" width="52" height="24" rx="6" fill="#1C1A22" stroke="#3ABAC2" strokeOpacity="0.6" />
              <text x="90" y="63" textAnchor="middle" fill="#3ABAC2" fontSize="8" fontFamily="monospace">Transform</text>
            </g>
            <g>
              <rect x="114" y="78" width="52" height="24" rx="6" fill="#1C1A22" stroke="#186785" strokeOpacity="0.5" />
              <text x="140" y="93" textAnchor="middle" fill="#9CA3AF" fontSize="8" fontFamily="monospace">Render</text>
            </g>
          </svg>
          <div className="absolute top-2 left-2 font-mono text-[9px] text-gray-500">NODE GRAPH</div>
        </div>

        {/* Inspector */}
        <div className="hidden sm:block col-span-4 p-3 font-mono text-[10px] leading-relaxed overflow-hidden">
          <div className="text-[9px] font-semibold uppercase tracking-wider text-gray-500 mb-2.5">Inspector</div>
          <div className="space-y-1.5">
            <div className="flex justify-between text-gray-400">
              <span>position</span>
              <span className="text-neon-from">0,1,0</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>rotation</span>
              <span className="text-neon-from">0,90,0</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>scale</span>
              <span className="text-neon-from">1,1,1</span>
            </div>
            <div className="mt-3 pt-3 border-t border-white/5">
              <div className="text-gray-500">{'// player.ts'}</div>
              <div className="text-purple-300">import</div>
              <div className="text-gray-500">{'{ Engine } from'}</div>
              <div className="text-neon-from">{'"eternium"'}</div>
              <div className="text-gray-500 mt-1">{'// hot-reloaded'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
