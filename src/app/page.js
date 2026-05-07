export default function SrogerEditsPortfolio() {
  const reels = [
    {
      title: "+4M Views",
      description:
        "Hook de alto contraste + narrativa inmediata + tensión sostenida cada pocos segundos.",
      url: "https://www.instagram.com/reel/DU21763DKt1/",
    },
    {
      title: "Strategic Storytelling",
      description:
        "Contenido pensado para retención, percepción y posicionamiento digital.",
      url: "https://www.instagram.com/reel/DX18QhdAmyA/",
    },
    {
      title: "Attention Engineering",
      description:
        "Cada segundo del video tiene una función específica dentro de la estructura de atención.",
      url: "https://www.instagram.com/reel/DVOOQOfimp3/",
    },
    {
      title: "Content Systems",
      description:
        "Transformamos pocas horas de grabación en un sistema completo de contenido.",
      url: "https://www.instagram.com/reel/DXMdC8LlLpM/",
    },
    {
      title: "Perception & Authority",
      description:
        "No se trata solo de vistas. Se trata de construir percepción digital.",
      url: "https://www.instagram.com/reel/DXxEYbbnJNM/",
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden font-sans selection:bg-white selection:text-black">
      {/* BACKGROUND */}
      <div className="fixed inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />

        <div className="max-w-5xl mx-auto text-center z-10">
          <p className="uppercase tracking-[0.5em] text-xs text-white/40 mb-6">
            Attention is engineered
          </p>

          <h1 className="text-6xl md:text-8xl font-semibold tracking-tight leading-none mb-8">
            SROGEREDITS
          </h1>

          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Content systems designed for attention.
          </p>

          <div className="mt-20 flex flex-col md:flex-row gap-8 justify-center text-left">
            <div className="border border-white/10 rounded-3xl p-6 backdrop-blur-sm bg-white/[0.02] max-w-sm">
              <p className="text-white/40 text-sm mb-3 uppercase tracking-widest">
                Strategy
              </p>
              <p className="text-white/80 leading-relaxed">
                Hooks, storytelling, retention, perception and content systems built to dominate attention.
              </p>
            </div>

            <div className="border border-white/10 rounded-3xl p-6 backdrop-blur-sm bg-white/[0.02] max-w-sm">
              <p className="text-white/40 text-sm mb-3 uppercase tracking-widest">
                System
              </p>
              <p className="text-white/80 leading-relaxed">
                Most clients only dedicate 2-3 hours monthly to recording. Everything else is handled strategically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-40 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="uppercase tracking-[0.4em] text-xs text-white/40 mb-8">
              Philosophy
            </p>

            <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-10">
              People don’t follow content.
              <br />
              They follow perception.
            </h2>
          </div>

          <div className="space-y-8 text-white/70 leading-relaxed text-lg">
            <p>
              Most creators post randomly.
            </p>

            <p>
              We build systems engineered to retain attention, create authority and position personal brands correctly online.
            </p>

            <p>
              Every edit, every subtitle, every cut and every hook exists for a reason.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT SYSTEM */}
      <section className="py-40 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.4em] text-xs text-white/40 mb-8">
            Content System
          </p>

          <h2 className="text-4xl md:text-7xl font-semibold max-w-4xl leading-tight mb-24">
            You record.
            <br />
            We build the system.
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              "2-3 Hours Recording",
              "Strategic Extraction",
              "Storytelling",
              "Editing & Distribution",
              "Daily Content Output",
            ].map((item, index) => (
              <div
                key={index}
                className="border border-white/10 rounded-3xl p-8 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500"
              >
                <div className="text-white/30 text-sm mb-6">
                  0{index + 1}
                </div>

                <div className="text-xl leading-snug font-medium text-white/90">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REELS */}
      <section className="py-40 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <p className="uppercase tracking-[0.4em] text-xs text-white/40 mb-8">
              Selected Work
            </p>

            <h2 className="text-4xl md:text-7xl font-semibold leading-tight max-w-5xl">
              Content engineered for retention, positioning and perception.
            </h2>
          </div>

          <div className="space-y-10">
            {reels.map((reel, index) => (
              <a
                key={index}
                href={reel.url}
                target="_blank"
                className="group border border-white/10 rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row justify-between gap-10 hover:bg-white/[0.03] transition-all duration-500 block"
              >
                <div className="max-w-2xl">
                  <p className="text-white/30 text-sm mb-6 uppercase tracking-[0.3em]">
                    Case Study 0{index + 1}
                  </p>

                  <h3 className="text-3xl md:text-5xl font-semibold mb-8 group-hover:translate-x-2 transition-transform duration-500">
                    {reel.title}
                  </h3>

                  <p className="text-white/60 text-lg leading-relaxed">
                    {reel.description}
                  </p>
                </div>

                <div className="md:max-w-md text-white/50 leading-relaxed text-base border-l border-white/10 pl-0 md:pl-10">
                  <p className="mb-5 text-white/80 font-medium">
                    Why it worked:
                  </p>

                  <ul className="space-y-4">
                    <li>• Strong visual interruption in the first seconds.</li>
                    <li>• Fast pacing designed for retention.</li>
                    <li>• Emotional tension every few moments.</li>
                    <li>• Strategic subtitles and rhythm control.</li>
                    <li>• Built to create authority, not only views.</li>
                  </ul>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-40 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.4em] text-xs text-white/40 mb-8">
            Clients
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="https://www.instagram.com/alvarodaygame/"
              target="_blank"
              className="border border-white/10 rounded-[32px] p-10 hover:bg-white/[0.03] transition-all duration-500"
            >
              <h3 className="text-4xl font-semibold mb-8">Álvaro Reyes</h3>

              <p className="text-white/60 leading-relaxed text-lg">
                Strategic storytelling focused on authority, perception and audience retention.
              </p>
            </a>

            <a
              href="https://www.instagram.com/rubenlopezreyes/reels/"
              target="_blank"
              className="border border-white/10 rounded-[32px] p-10 hover:bg-white/[0.03] transition-all duration-500"
            >
              <h3 className="text-4xl font-semibold mb-8">Rubén López</h3>

              <p className="text-white/60 leading-relaxed text-lg">
                High-retention content systems designed to increase attention and positioning.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* FINAL */}
      <section className="py-52 px-6 border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.5em] text-xs text-white/40 mb-10">
            SROGEREDITS
          </p>

          <h2 className="text-4xl md:text-7xl font-semibold leading-tight mb-10">
            Editing is psychology.
          </h2>

          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Content systems built for creators, brands and entrepreneurs who want attention, authority and perception.
          </p>
        </div>
      </section>
    </main>
  );
}
