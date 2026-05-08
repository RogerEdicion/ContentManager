import { useEffect } from "react";

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

  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

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
              <div
                key={index}
                className="group border border-white/10 rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row justify-between gap-10 hover:bg-white/[0.03] transition-all duration-500"
              >

                {/* VIDEO */}
                <div className="w-full md:w-[400px]">
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={reel.url}
                    data-instgrm-version="14"
                    style={{
                      background: "#000",
                      border: 0,
                      margin: 0,
                      width: "100%",
                    }}
                  />
                </div>

                {/* TEXTO */}
                <div className="max-w-2xl">
                  <p className="text-white/30 text-sm mb-6 uppercase tracking-[0.3em]">
                    Case Study 0{index + 1}
                  </p>

                  <h3 className="text-3xl md:text-5xl font-semibold mb-8">
                    {reel.title}
                  </h3>

                  <p className="text-white/60 text-lg leading-relaxed">
                    {reel.description}
                  </p>
                </div>

              </div>
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
              <h3 className="text-4xl font-semibold mb-4">Álvaro Reyes</h3>
              <p className="text-white/60 mb-4">
                Strategic storytelling & authority positioning.
              </p>
              <p className="text-white/40 text-sm">
                Instagram profile • high authority creator
              </p>
            </a>

            <a
              href="https://www.instagram.com/rubenlopezreyes/"
              target="_blank"
              className="border border-white/10 rounded-[32px] p-10 hover:bg-white/[0.03] transition-all duration-500"
            >
              <h3 className="text-4xl font-semibold mb-4">Rubén López</h3>
              <p className="text-white/60 mb-4">
                High retention content systems & growth strategy.
              </p>
              <p className="text-white/40 text-sm">
                Instagram profile • content creator
              </p>
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}