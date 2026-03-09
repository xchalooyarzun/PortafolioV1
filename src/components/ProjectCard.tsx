import type { Project } from "../data/projects";

export function ProjectCard(p: Project) {
  return (
    <article
      className={[
        "group rounded-2xl border bg-white p-5 shadow-sm transition",
        "hover:-translate-y-0.5 hover:shadow-md",
        p.highlight ? "border-zinc-300" : "border-zinc-200",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
       <h3 className="text-lg font-bold text-zinc-900">{p.title}</h3>

        {p.highlight ? (
          <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-semibold text-white">
            Destacado
          </span>
        ) : null}
      </div>

      <p className="mt-2 text-zinc-600 leading-relaxed">{p.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span
            key={t}
            className="rounded-lg bg-zinc-100 px-2.5 py-1 text-xs font-semibold text-zinc-700"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        {p.github ? (
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
          >
            GitHub
          </a>
        ) : null}

        {p.demo ? (
          <a
            href={p.demo}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800"
          >
            Demo
          </a>
        ) : null}
      </div>
    </article>
  );
}
