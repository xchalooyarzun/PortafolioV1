import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Item = {
  label: string;
  hint: string;
  href: string;
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");

  const items: Item[] = useMemo(
    () => [
      { label: "Inicio", hint: "Ir al hero", href: "#inicio" },
      { label: "Proyectos", hint: "Ver mis proyectos", href: "#proyectos" },
      {
        label: "Habilidades",
        hint: "Stack y herramientas",
        href: "#habilidades",
      },
      { label: "Contacto", hint: "Links y correo", href: "#contacto" },
    ],
    [],
  );

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return items;
    return items.filter((it) =>
      (it.label + " " + it.hint).toLowerCase().includes(s),
    );
  }, [q, items]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      // Ctrl+K (o Cmd+K en Mac) abre/cierra
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
        return;
      }
      // Escape cierra
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    setQ("");
    // navegación suave
    const id = href.startsWith("#") ? href.slice(1) : href;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.location.hash = href;
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-start justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Fondo oscuro */}
          <button
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
            aria-label="Cerrar"
          />

          {/* Caja */}
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl"
          >
            <div className="border-b border-zinc-800 p-3">
              <div className="flex items-center gap-2">
                <span className="rounded-lg border border-zinc-800 bg-zinc-900 px-2 py-1 text-xs text-zinc-200">
                  Ctrl + K
                </span>
                <span className="text-xs text-zinc-500">Navega rápido</span>
              </div>

              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Escribe: proyectos, contacto…"
                className="mt-3 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-blue-500"
              />
            </div>

            <div className="max-h-80 overflow-auto p-2">
              {filtered.length === 0 ? (
                <div className="p-4 text-sm text-zinc-400">
                  No encontré nada. Prueba “proyectos” o “contacto”.
                </div>
              ) : (
                filtered.map((it) => (
                  <button
                    key={it.href}
                    onClick={() => go(it.href)}
                    className="group flex w-full items-center justify-between rounded-xl px-3 py-3 text-left hover:bg-zinc-900"
                  >
                    <div>
                      <div className="text-sm font-semibold text-zinc-100 group-hover:text-white">
                        {it.label}
                      </div>
                      <div className="text-xs text-zinc-500">{it.hint}</div>
                    </div>
                    <span className="text-xs text-zinc-500">{it.href}</span>
                  </button>
                ))
              )}
            </div>

            <div className="border-t border-zinc-800 p-3 text-xs text-zinc-500">
              Tip: Enter no es necesario — clic y listo. Esc para cerrar.
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
