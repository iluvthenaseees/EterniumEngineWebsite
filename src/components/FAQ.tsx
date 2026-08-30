interface QA {
  q: string;
  a: string;
}

const faqs: QA[] = [
  {
    q: 'Is Eternium Engine really free?',
    a: 'Yes. The core engine and all official modules are MIT licensed and free for both personal and commercial projects. There are no royalties, runtime fees, or watermarks — ever.',
  },
  {
    q: 'What platforms can I deploy to?',
    a: 'A single project compiles to the web (WebGL/WebGPU), desktop (Windows, macOS, Linux via Tauri), and mobile (iOS, Android via Capacitor). VR builds target WebXR-compatible headsets including Meta Quest and Apple Vision Pro.',
  },
  {
    q: 'Do I need to know TypeScript?',
    a: 'TypeScript is the primary language, but plain JavaScript works too. The visual editor lets designers build scenes and logic without writing code, and engineers can extend anything through the module API.',
  },
  {
    q: 'How does the module system work?',
    a: 'Each module is an independently versioned package with a defined interface. You install only what you need via the CLI or visual editor, and modules can be swapped or upgraded without touching the rest of your project. Custom modules follow the same spec.',
  },
  {
    q: 'Can I use my existing assets?',
    a: 'Absolutely. Eternium imports glTF, FBX, OBJ, PNG, KTX2, OGG, MP3, and more. The asset pipeline handles compression, LOD generation, and streaming automatically.',
  },
  {
    q: 'What hardware do I need for VR?',
    a: 'Any WebXR-compatible headset works. For development we recommend a Meta Quest 2 or newer, or a PCVR headset connected to a desktop browser. The engine includes automatic fallbacks for lower-end devices.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center mb-14">
          <span className="eyebrow reveal">Questions</span>
          <h2 className="section-title reveal mt-4" data-delay="80">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              className="reveal group rounded-xl glass overflow-hidden"
              data-delay={String((i % 3) * 80)}
            >
              <summary
                className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-base font-medium text-gray-100 list-none transition-colors hover:text-neon-from"
              >
                <span>{f.q}</span>
                <span
                  className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/5 text-neon-from transition-transform duration-300 group-open:rotate-45"
                  aria-hidden
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-sm text-gray-400 leading-relaxed">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
