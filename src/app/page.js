"use client";

export default function SrogerEditsPortfolio() {
  const reels = [
    {
      title: "+4M Views",
      description:
        "Este contenido funcionó gracias a una estructura de atención agresiva desde el primer segundo. Se utilizó un hook de alto contraste, cortes rápidos y una narrativa diseñada para mantener la curiosidad constantemente activa. Cada transición, subtítulo y cambio visual tuvo un propósito específico dentro de la retención.",
      video: "/videos/video1.mp4",
    },
    {
      title: "Storytelling Estratégico",
      description:
        "El objetivo de este contenido no era solamente generar vistas, sino construir percepción digital. La edición, el ritmo y la narrativa fueron diseñados para posicionar autoridad y hacer que la audiencia perciba al creador como alguien diferente al promedio.",
      video: "/videos/video2.mp4",
    },
    {
      title: "Ingeniería de Atención",
      description:
        "Cada segundo del video cumple una función psicológica dentro de la estructura de atención. Se trabajó sobre micro estímulos visuales, pausas estratégicas y cambios de energía para evitar caídas de retención y aumentar el tiempo de visualización.",
      video: "/videos/video3.mp4",
    },
    {
      title: "Sistema de Contenido",
      description:
        "No trabajamos videos aislados. Transformamos horas de grabación en un sistema completo de contenido pensado para redes sociales. La idea es multiplicar piezas, mantener consistencia y construir presencia digital constante.",
      video: "/videos/video4.mp4",
    },
    {
      title: "Percepción & Autoridad",
      description:
        "Las redes no se tratan solamente de views. Se trata de construir percepción, autoridad y posicionamiento. La edición, el branding visual y la narrativa hacen que el creador transmita más valor y destaque dentro de su nicho.",
      video: "/videos/video5.mp4",
    },
  ];

  const services = [
    {
      title: "Content Manager",
      text: "Planificación estratégica de contenido orientada al crecimiento, posicionamiento y construcción de marca personal.",
    },
    {
      title: "Planificación de Contenido",
      text: "Organización de ideas, calendario de publicaciones y estrategia adaptada al tipo de audiencia y objetivo.",
    },
    {
      title: "Creación de Guiones",
      text: "Guiones optimizados para retención, hooks virales y storytelling enfocado en captar atención.",
    },
    {
      title: "Grabación Asistida",
      text: "Acompañamiento por videollamada durante la grabación para mejorar presencia, delivery y estructura.",
    },
    {
      title: "Edición Profesional",
      text: "Edición enfocada en retención, percepción premium y construcción de autoridad digital.",
    },
    {
      title: "Plan de Stories",
      text: "Estrategias de historias para mantener presencia diaria y fortalecer conexión con la audiencia.",
    },
    {
      title: "Posteo en Redes",
      text: "Organización y subida de contenido optimizando formatos, horarios y consistencia.",
    },
    {
      title: "Setter de Cuenta",
      text: "Servicio extra orientado a mejorar respuestas, gestión de mensajes y conversión de potenciales clientes.",
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden font-sans selection:bg-white selection:text-black">

      {/* BACKGROUND */}
      <div className="fixed inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center px-5 sm:px-6 relative">

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />

        <div className="max-w-5xl mx-auto text-center z-10 w-full">

          <p className="uppercase tracking-[0.35em] sm:tracking-[0.5em] text-[10px] sm:text-xs text-white/40 mb-5 sm:mb-6">
            La atención se diseña
          </p>

          <h1 className="text-[42px] sm:text-6xl md:text-8xl font-semibold tracking-tight leading-[0.9] mb-6 sm:mb-8 break-words">
            SROGEREDITS
          </h1>

          <p className="text-white/60 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-2">
            Sistemas de contenido diseñados para generar atención, percepción y posicionamiento digital.
          </p>

        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 sm:py-40 px-5 sm:px-6 border-t border-white/10">

        <div className="max-w-6xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-[10px] sm:text-xs text-white/40 mb-8">
            Enfoque
          </p>

          <h2 className="text-3xl sm:text-5xl md:text-7xl font-semibold leading-tight max-w-5xl mb-12">
            No editamos videos.
            <br />
            Construimos percepción digital.
          </h2>

          <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-4xl">
            Cada pieza de contenido tiene un objetivo específico dentro de la estrategia.
            Desde el hook inicial hasta el último segundo del video, todo está pensado
            para maximizar retención, generar autoridad y aumentar el impacto de la marca personal.
            El contenido ya no compite solamente por vistas; compite por atención.
          </p>

        </div>
      </section>

      {/* REELS */}
      <section className="py-24 sm:py-40 px-5 sm:px-6 border-t border-white/10">

        <div className="max-w-7xl mx-auto">

          <div className="mb-20 sm:mb-24">

            <p className="uppercase tracking-[0.35em] text-[10px] sm:text-xs text-white/40 mb-8">
              Trabajos Seleccionados
            </p>

            <h2 className="text-3xl sm:text-5xl md:text-7xl font-semibold leading-tight max-w-5xl">
              Contenido diseñado para retención, posicionamiento y percepción.
            </h2>

          </div>

          <div className="space-y-10">

            {reels.map((reel, index) => (
              <div
                key={index}
                className="group border border-white/10 rounded-[28px] sm:rounded-[32px] p-5 sm:p-8 md:p-12 flex flex-col lg:flex-row gap-8 sm:gap-10 hover:bg-white/[0.03] transition-all duration-500"
              >

                {/* VIDEO */}
                <div className="w-full lg:w-[400px] shrink-0">

                  <video
                    src={reel.video}
                    controls
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="w-full rounded-2xl border border-white/10"
                  />

                </div>

                {/* TEXT */}
                <div className="flex-1 flex flex-col justify-center">

                  <p className="text-white/30 text-xs sm:text-sm mb-5 uppercase tracking-[0.25em]">
                    Caso de Estudio 0{index + 1}
                  </p>

                  <h3 className="text-2xl sm:text-4xl md:text-5xl font-semibold mb-6 sm:mb-8 leading-tight">
                    {reel.title}
                  </h3>

                  <p className="text-white/60 text-base sm:text-lg leading-relaxed">
                    {reel.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 sm:py-40 px-5 sm:px-6 border-t border-white/10">

        <div className="max-w-7xl mx-auto">

          <div className="mb-20">

            <p className="uppercase tracking-[0.35em] text-[10px] sm:text-xs text-white/40 mb-8">
              Servicios
            </p>

            <h2 className="text-3xl sm:text-5xl md:text-7xl font-semibold leading-tight max-w-5xl">
              Todo lo necesario para construir una presencia digital fuerte.
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {services.map((service, index) => (
              <div
                key={index}
                className="border border-white/10 rounded-[28px] p-7 sm:p-10 hover:bg-white/[0.03] transition-all duration-500"
              >

                <h3 className="text-2xl sm:text-3xl font-semibold mb-5">
                  {service.title}
                </h3>

                <p className="text-white/60 leading-relaxed text-base sm:text-lg">
                  {service.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-24 sm:py-40 px-5 sm:px-6 border-t border-white/10">

        <div className="max-w-6xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-[10px] sm:text-xs text-white/40 mb-8">
            Clientes
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            <a
              href="https://www.instagram.com/alvarodaygame/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/10 rounded-[28px] sm:rounded-[32px] p-8 sm:p-10 hover:bg-white/[0.03] transition-all duration-500"
            >

              <h3 className="text-3xl sm:text-4xl font-semibold mb-4">
                Álvaro Reyes
              </h3>

              <p className="text-white/60 mb-4 text-base sm:text-lg">
                Storytelling estratégico y posicionamiento de autoridad digital.
              </p>

              <p className="text-white/40 text-sm">
                Perfil de Instagram • creador de alto impacto
              </p>

            </a>

            <a
              href="https://www.instagram.com/rubenlopezreyes/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/10 rounded-[28px] sm:rounded-[32px] p-8 sm:p-10 hover:bg-white/[0.03] transition-all duration-500"
            >

              <h3 className="text-3xl sm:text-4xl font-semibold mb-4">
                Rubén López
              </h3>

              <p className="text-white/60 mb-4 text-base sm:text-lg">
                Sistemas de contenido de alta retención y estrategia de crecimiento.
              </p>

              <p className="text-white/40 text-sm">
                Perfil de Instagram • creador de contenido
              </p>

            </a>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-40 px-5 sm:px-6 border-t border-white/10">

        <div className="max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-[0.35em] text-[10px] sm:text-xs text-white/40 mb-8">
            Contacto
          </p>

          <h2 className="text-3xl sm:text-5xl md:text-7xl font-semibold leading-tight mb-10">
            Tu contenido puede verse bien.
            <br />
            O puede generar impacto.
          </h2>

          <p className="text-white/60 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto mb-12">
            La diferencia está en la estrategia, la percepción y cómo se construye la atención.
          </p>

          <a
            href="https://www.instagram.com/srogeredits/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-white/20 rounded-full px-8 py-4 text-sm sm:text-base hover:bg-white hover:text-black transition-all duration-500"
          >
            Contactar por Instagram
          </a>

        </div>
      </section>

    </main>
  );
}