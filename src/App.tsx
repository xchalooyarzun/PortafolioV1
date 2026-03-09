/*import { Navbar } from "./components/Navbar"; */
import { motion } from "framer-motion";
import { Section } from "./components/Section";
import { projects } from "./data/projects";
import { ProjectCard } from "./components/ProjectCard";
import { BackToTop } from "./components/BackToTop";
import { CommandPalette } from "./components/CommandPalette";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Fondo oscuro elegante */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-zinc-950 via-zinc-950 to-black" />

      {/* HERO */}

      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-5xl px-4 py-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl"
        >
          <p className="inline-flex rounded-full bg-zinc-800 px-3 py-1 text-xs font-semibold text-zinc-300">
            Frontend React Developer • Salud + Software
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Hola, soy Gonzalo 👋
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-300">
            Desarrollador Frontend con React + TypeScript. Vengo del área de
            salud, por eso construyo interfaces claras, con validaciones y foco
            en seguridad del usuario.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#proyectos"
              className="rounded-xl border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-200 hover:bg-zinc-800 transition"
            >
              Ver proyectos
            </a>

            <a
              href="#contacto"
              className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500 transition"
            >
              Contacto
            </a>

            <a
              href="/Gonzalo_Oyarzun_Frontend_React_CV.pdf"
              className="rounded-xl border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-200 hover:bg-zinc-800 transition"
            >
              Descagar CV
            </a>
          </div>
        </motion.div>
      </motion.section>

      {/* SOBRE */}
      <Section
        id="sobre"
        title="Sobre mí"
        subtitle="Estudiante de Técnico en Enfermería + Titulado Analista programador. Mi Fuerte: Construyo software con mentalidad clínica
        y enfoque en desarrollo web moderno y aplicaciones clínicas. Actualmente estoy construyendo 
        sistemas reales con React, TypeScript y python, orientados en la seguridad del paciente
        y validación de datos clínicos."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            ["Enfoque", "Seguridad del paciente aplicada al software"],
            ["Stack", "React + TypeScript + UI limpia"],
            ["Meta", "Trabajo como Frontend Developer"],
          ].map(([k, v]) => (
            <div
              key={k}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5"
            >
              <p className="text-sm font-semibold text-zinc-400">{k}</p>
              <p className="mt-2 font-semibold">{v}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="skills"
        title="Skills"
        subtitle="Stack y herramientas que uso para construir interfaces modernas."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            ["Frontend", ["React", "TypeScript", "Tailwind", "HTML", "CSS"]],
            [
              "Calidad",
              [
                "Componentes",
                "Validaciones",
                "UX/UI",
                "Accesibilidad",
                "Clean UI",
              ],
            ],
            [
              "Herramientas",
              ["Git/GitHub", "Vite", "VS Code", "Node", "Deploy (Vercel)"],
            ],
          ].map(([title, items]) => (
            <div
              key={title as string}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5"
            >
              <p className="text-sm font-semibold text-zinc-400">
                {title as string}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {(items as string[]).map((t) => (
                  <span
                    key={t}
                    className="rounded-lg bg-zinc-800 px-2.5 py-1 text-xs font-semibold text-zinc-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* PROYECTOS */}
      <Section
        id="proyectos"
        title="Proyectos"
        subtitle="Trabajos reales y en progreso."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </Section>

      {/* CONTACTO */}
      <Section
        id="contacto"
        title="Contacto"
        subtitle="Disponible para oportunidades."
      >
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
          <div className="flex flex-wrap gap-3">
            <a
              className="rounded-xl border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-200 hover:bg-zinc-800 transition"
              href="https://github.com/xchalooyarzun"
              target="_blank"
            >
              GitHub
            </a>

            <a
              className="rounded-xl border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-200 hover:bg-zinc-800 transition"
              href="https://www.linkedin.com/in/gonzalo-alejandro-oyarzun-panes/"
              target="_blank"
            >
              LinkedIn
            </a>

            <a
              className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 transition"
              href="mailto:goyarzunpanes@gmail.com"
            >
              Email
            </a>
          </div>
        </div>

        <footer className="pt-10 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Gonzalo — CoreReset-GAP
        </footer>
      </Section>
      <BackToTop />
      <CommandPalette />
    </div>
  );
}
