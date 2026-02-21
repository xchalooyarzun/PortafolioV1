const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a href="#inicio" className="text-lg font-extrabold tracking-tight">
          Gonzalo<span className="text-zinc-400">.dev</span>
        </a>

        <div className="hidden items-center gap-1 sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-xl px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800"
        >
          Hablemos
        </a>
      </nav>
    </header>
  );
}
