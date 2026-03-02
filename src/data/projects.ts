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
    title: "Chequeo Médico Python",
    description:
      "Evaluación de signos vitales con alertas y registro básico. Enfoque clínico y reglas simples.",
    tags: ["Python", "Reglas clínicas", "Consola"],
    github: "#",
  },
];
