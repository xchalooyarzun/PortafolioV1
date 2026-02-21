import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function Section({ id, title, subtitle, children }: Props) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-4 py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight">{title}</h2>
          {subtitle ? (
            <p className="mt-2 max-w-3xl text-zinc-600">{subtitle}</p>
          ) : null}
        </div>
      </div>

      <div className="mt-6">{children}</div>
    </section>
  );
}
