import { useEffect, useState } from "react";
import { motion } from "framer-motion";

//componente boton volver arriba//
export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileTap={{ scale: 0.96 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm font-semibold text-zinc-100 shadow-xl hover:border-blue-500"
      aria-label="Volver arriba"
      title="Volver arriba"
    >
      ↑ Arriba
    </motion.button>
  );
}
