/**
 * Stylized VR target crosshair mockup. A dual-eye headset viewport with a
 * targeting reticle, hand-tracking dots, and a comfort-mode indicator.
 */
export default function VRMockup() {
  return (
    <div className="relative rounded-2xl glass p-3 shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 px-2 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
        <span className="ml-2 font-mono text-[11px] text-gray-500">xr_session.live</span>
      </div>

      <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-base grid place-items-center">
        {/* Dual-eye split */}
        <div className="absolute inset-0 flex">
          <div className="flex-1 border-r border-white/5" />
          <div className="flex-1" />
        </div>

        {/* Center glow */}
        <div className="absolute h-44 w-44 rounded-full blur-2xl opacity-40" style={{ background: 'radial-gradient(circle, rgba(58,186,194,0.4), transparent 70%)' }} />

        {/* Crosshair */}
        <svg className="relative" width="170" height="170" viewBox="0 0 170 170" aria-hidden>
          <defs>
            <linearGradient id="reticle" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3ABAC2" />
              <stop offset="100%" stopColor="#186785" />
            </linearGradient>
          </defs>
          <circle cx="85" cy="85" r="66" fill="none" stroke="url(#reticle)" strokeWidth="1.5" strokeOpacity="0.5" />
          <circle cx="85" cy="85" r="52" fill="none" stroke="url(#reticle)" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 6" />
          <line x1="85" y1="9" x2="85" y2="38" stroke="#3ABAC2" strokeWidth="1.5" />
          <line x1="85" y1="132" x2="85" y2="161" stroke="#3ABAC2" strokeWidth="1.5" />
          <line x1="9" y1="85" x2="38" y2="85" stroke="#3ABAC2" strokeWidth="1.5" />
          <line x1="132" y1="85" x2="161" y2="85" stroke="#3ABAC2" strokeWidth="1.5" />
          {[
            [38, 38], [132, 38], [38, 132], [132, 132],
          ].map(([x, y], i) => (
            <path
              key={i}
              d={`M ${x} ${y} l ${x < 85 ? 9 : -9} 0 M ${x} ${y} l 0 ${y < 85 ? 9 : -9}`}
              stroke="#3ABAC2"
              strokeWidth="2"
              strokeLinecap="round"
            />
          ))}
          <circle cx="85" cy="85" r="3" fill="#3ABAC2" />
        </svg>

        {/* Hand tracking dots */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 opacity-60">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="h-1.5 w-1.5 rounded-full bg-neon-from animate-pulse" style={{ animationDelay: `${i * 0.15}s` }} />
          ))}
        </div>
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 opacity-60">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="h-1.5 w-1.5 rounded-full bg-neon-from animate-pulse" style={{ animationDelay: `${i * 0.15 + 0.3}s` }} />
          ))}
        </div>

        {/* HUD */}
        <div className="absolute top-3 left-3 font-mono text-[10px] text-neon-from/80">XR · IMMERSIVE</div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 font-mono text-[10px] text-gray-400">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          COMFORT · 90Hz
        </div>
      </div>
    </div>
  );
}
