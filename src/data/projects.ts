export type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  highlight?: boolean;
};

export const projects: Project[] = [
  {
    title: "Sistema Clínico Web",
    description:
      "Sistema clínico web: Crud de pacientes, validación de formularios, UI clara y con enfoque en seguridad del usuario.",
    tags: ["React", "TypeScript","Tailwind", "Validaciones", "CRUD"],
    github: "https://github.com/xchalooyarzun/sistema-clinico-demo",
    demo: "https://sistema-clinico-demo.vercel.app/",
    highlight: true,
  },
  {
  title: "GAP Nutrition Ecommerce",
  description:
    "Ecommerce demo de suplementos deportivos con catálogo, búsqueda, filtros por categoría y carrito persistente.",
  tags: ["React", "TypeScript", "React Router", "Context API", "LocalStorage"],
  github: "https://github.com/xchalooyarzun/gap-nutrition-ecommerce",
  demo: "https://gap-nutrition-ecommerce.vercel.app/",
  highlight: true,
},
];
