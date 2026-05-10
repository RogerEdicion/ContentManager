"use client"

import { motion } from "framer-motion"
import {
  Sparkles,
  Rocket,
  PlaySquare,
  BadgeDollarSign,
  CalendarDays,
} from "lucide-react"

export default function SantiAmatProposal() {
  const calendar = [
    {
      day: "LUNES",
      content: ["Story CTA / Venta", "Reel Orgánico"],
    },
    {
      day: "MARTES",
      content: ["Video fuerte YouTube", "Clip extraído YouTube"],
    },
    {
      day: "MIÉRCOLES",
      content: ["Story CTA / Venta", "Reel Orgánico"],
    },
    {
      day: "JUEVES",
      content: ["Clip extraído YouTube"],
    },
    {
      day: "VIERNES",
      content: ["Story CTA / Venta", "Reel Orgánico"],
    },
    {
      day: "SÁBADO",
      content: ["Clip extraído YouTube"],
    },
  ]

  return (
    <main className="bg-black text-white overflow-hidden relative">

      {/* BACKGROUND */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
          }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"
        />

      </div>

      {/* HERO */}

      <section className="relative min-h-screen flex items-center border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10 w-full">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-3 border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 rounded-full text-cyan-300 mb-10 backdrop-blur-sm"
          >
            <Sparkles size={16} />
            <span className="tracking-wide text-sm">
              PROPUESTA EXCLUSIVA PARA SANTI AMAT
            </span>
          </motion.div>

          <div className="max-w-5xl">

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-5xl md:text-7xl font-black leading-none tracking-tight"
            >
              Transformemos tu contenido en un sistema de
              <span className="text-cyan-400"> autoridad, monetización y crecimiento.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-zinc-400 text-xl mt-10 leading-relaxed"
            >
              Santi, ya tenés algo que muchísima gente nunca consigue:
              autoridad real y una audiencia que ya conecta con vos.
              <br />
              <br />
              El problema no es el contenido.
              El problema es que Instagram hoy no está capitalizando todo el potencial que ya generás en YouTube.
              <br />
              <br />
              Mi objetivo es convertir tu contenido en un sistema completo:
              distribución, branding, posicionamiento premium y monetización.
            </motion.p>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6 py-24 relative z-10">

        <div className="grid md:grid-cols-4 gap-6">

          {[
            ["24+", "Piezas mensuales"],
            ["12", "Reels orgánicos"],
            ["12", "Clips extraídos YouTube"],
            ["100%", "Foco en monetización"],
          ].map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white/[0.03] border border-white/10 rounded-[28px] p-8 text-center"
            >

              <h3 className="text-5xl font-black text-cyan-400">
                {item[0]}
              </h3>

              <p className="text-zinc-400 mt-4">
                {item[1]}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* PERFIL */}

      <section className="border-y border-white/10 bg-zinc-950/40 relative z-10">

        <div className="max-w-7xl mx-auto px-6 py-28">

          <div className="text-center max-w-5xl mx-auto mb-20">

            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-5">
              Reestructuración visual
            </p>

            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-10">
              Pasar de un perfil improvisado
              a una marca personal premium.
            </h2>

            <p className="text-zinc-400 text-xl leading-relaxed">
              El objetivo es construir una identidad muchísimo más profesional,
              más clara y mucho más monetizable.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            <motion.div
              whileHover={{ y: -5 }}
              className="border border-red-500/20 rounded-[32px] overflow-hidden bg-black"
            >

              <div className="p-6 border-b border-white/10">

                <p className="text-red-400 font-bold tracking-wide">
                  PERFIL ACTUAL
                </p>

              </div>

              <div className="aspect-[4/5] overflow-hidden">

                <img
                  src="/imagen1.png"
                  className="w-full h-full object-cover"
                />

              </div>

              <div className="p-8 space-y-4 text-zinc-400">

                <p>• Feed sin estructura premium</p>
                <p>• No comunica autoridad rápidamente</p>
                <p>• Lifestyle mezclado con contenido profesional</p>
                <p>• Falta branding fuerte</p>
                <p>• Reels sin sistema visual consistente</p>

              </div>

            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="border border-cyan-500/30 rounded-[32px] overflow-hidden bg-black shadow-2xl shadow-cyan-500/10"
            >

              <div className="p-6 border-b border-white/10">

                <p className="text-cyan-400 font-bold tracking-wide">
                  NUEVO SISTEMA PROPUESTO
                </p>

              </div>

              <div className="aspect-[4/5] overflow-hidden">

                <img
                  src="/imagen2.png"
                  className="w-full h-full object-cover"
                />

              </div>

              <div className="p-8 space-y-4 text-zinc-300">

                <p>• Branding premium consistente</p>
                <p>• Sistema pensado para monetizar</p>
                <p>• Posicionamiento mucho más fuerte</p>
                <p>• Hooks y reels optimizados</p>
                <p>• Feed profesional y estructurado</p>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* VIDEOS */}

      <section className="max-w-7xl mx-auto px-6 py-28 relative z-10">

        <div className="text-center max-w-4xl mx-auto mb-20">

          <h2 className="text-5xl font-black mb-8">
            Comparativa de edición y retención
          </h2>

          <p className="text-zinc-400 text-xl leading-relaxed">
            La idea es aumentar muchísimo la retención,
            el impacto visual y la percepción premium del contenido.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-[32px] overflow-hidden border border-white/10 bg-black"
          >

            <div className="p-5 border-b border-white/10">

              <p className="text-zinc-300 font-bold">
                Reel actual
              </p>

            </div>

            <video
              src="/video5.mp4"
              controls
              className="w-full"
            />

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-[32px] overflow-hidden border border-cyan-500/30 bg-black shadow-2xl shadow-cyan-500/10"
          >

            <div className="p-5 border-b border-white/10">

              <p className="text-cyan-400 font-bold">
                Nueva edición propuesta
              </p>

            </div>

            <video
              src="/video6.mp4"
              controls
              className="w-full"
            />

          </motion.div>

        </div>

      </section>

      {/* CALENDARIO */}

      <section className="border-y border-white/10 bg-zinc-950/40 relative z-10">

        <div className="max-w-7xl mx-auto px-6 py-28">

          <div className="text-center max-w-5xl mx-auto mb-20">

            <div className="flex justify-center mb-6">
              <CalendarDays size={40} className="text-cyan-400" />
            </div>

            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-5">
              Planificación estratégica
            </p>

            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-10">
              Sistema semanal de contenido.
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {calendar.map((item, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-black border border-white/10 rounded-[28px] p-8"
              >

                <h3 className="text-2xl font-black text-cyan-400 mb-6">
                  {item.day}
                </h3>

                <div className="space-y-4">

                  {item.content.map((content, i) => (

                    <div
                      key={i}
                      className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 text-zinc-300"
                    >
                      {content}
                    </div>

                  ))}

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* RESUMEN */}

      <section className="max-w-7xl mx-auto px-6 py-28 relative z-10">

        <div className="text-center max-w-5xl mx-auto mb-20">

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-5">
            Sistema completo
          </p>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-10">
            Todo lo que voy a gestionar para potenciar tu marca personal.
          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-zinc-950 border border-white/10 rounded-[32px] p-8"
          >

            <PlaySquare className="text-cyan-400 mb-6" size={40} />

            <h3 className="text-3xl font-black mb-6">
              Reels orgánicos
            </h3>

            <ul className="space-y-4 text-zinc-400">

              <li>• 12 reels orgánicos mensuales</li>
              <li>• Guiones completos</li>
              <li>• Hooks virales</li>
              <li>• Storytelling</li>
              <li>• CTA estratégicos</li>
              <li>• Edición premium</li>

            </ul>

          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-zinc-950 border border-white/10 rounded-[32px] p-8"
          >

            <Rocket className="text-cyan-400 mb-6" size={40} />

            <h3 className="text-3xl font-black mb-6">
              Sistema YouTube
            </h3>

            <ul className="space-y-4 text-zinc-400">

              <li>• 4 videos fuertes YouTube</li>
              <li>• Brief estratégico semanal</li>
              <li>• Optimización de narrativa</li>
              <li>• Portadas premium</li>
              <li>• Extracción de clips virales</li>

            </ul>

          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-zinc-950 border border-white/10 rounded-[32px] p-8"
          >

            <BadgeDollarSign className="text-cyan-400 mb-6" size={40} />

            <h3 className="text-3xl font-black mb-6">
              Monetización
            </h3>

            <ul className="space-y-4 text-zinc-400">

              <li>• Stories CTA semanales</li>
              <li>• Branding premium</li>
              <li>• Optimización visual</li>
              <li>• Distribución y posteo</li>
              <li>• Setter opcional</li>

            </ul>

          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 bg-cyan-400 text-black rounded-[40px] p-10 md:p-14"
        >

          <h3 className="text-4xl font-black mb-8">
            Resumen mensual total
          </h3>

          <div className="grid md:grid-cols-2 gap-10 text-lg font-semibold">

            <div className="space-y-4">

              <p>• 12 reels orgánicos mensuales</p>
              <p>• 12 clips extraídos YouTube</p>
              <p>• 4 videos fuertes YouTube</p>
              <p>• Stories estratégicas de venta</p>

            </div>

            <div className="space-y-4">

              <p>• Planificación mensual</p>
              <p>• Guionización completa</p>
              <p>• Edición premium</p>
              <p>• Distribución y branding</p>

            </div>

          </div>

        </motion.div>

      </section>

      {/* PRECIO */}

      <section className="border-t border-white/10 relative z-10">

        <div className="max-w-5xl mx-auto px-6 py-28 text-center">

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-5">
            Inversión
          </p>

          <h2 className="text-7xl font-black mb-8">
            400 USD / MES
          </h2>

          <p className="text-zinc-400 text-xl leading-relaxed max-w-4xl mx-auto mb-16">
            Incluye planificación, guiones, edición, clipping,
            branding, portadas, distribución y soporte estratégico completo.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-14">

            <div className="bg-zinc-950 border border-white/10 rounded-[32px] p-8 text-left">

              <h3 className="text-2xl font-black mb-6">
                Condiciones
              </h3>

              <ul className="space-y-4 text-zinc-400">

                <li>• 50% al iniciar</li>
                <li>• 50% al finalizar el primer mes</li>
                <li>• Luego modalidad mes vencido</li>
                <li>• Posibilidad de comenzar inmediatamente</li>

              </ul>

            </div>

            <div className="bg-cyan-400 text-black rounded-[32px] p-8 text-left">

              <h3 className="text-2xl font-black mb-6">
                Objetivo final
              </h3>

              <p className="text-lg font-semibold leading-relaxed">
                Convertir Instagram en una máquina de autoridad,
                distribución y monetización alrededor de tu marca personal.
              </p>

            </div>

          </div>

        </div>

      </section>

      <footer className="border-t border-white/10 py-10 text-center text-zinc-500 text-sm relative z-10">
        STRATEGY PRODUCED BY SROGEREDITS — Content Systems • Distribution • Monetization
      </footer>

    </main>
  )
}