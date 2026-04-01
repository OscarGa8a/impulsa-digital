export interface ProcessStep {
  id: string;
  number: string;
  icon: string;
  title: string;
  description: string;
  highlighted?: boolean;
}

export const processSteps: ProcessStep[] = [
  {
    id: 'reunion',
    number: '01',
    icon: 'message-circle',
    title: 'Reunión inicial',
    description: 'Nos contás tu idea y tu negocio. Sin tecnicismos ni rodeos.',
  },
  {
    id: 'estrategia',
    number: '02',
    icon: 'lightbulb',
    title: 'Estrategia',
    description: 'Plan claro con objetivos, plazos y costos. Vos aprobás antes de empezar.',
  },
  {
    id: 'ejecucion',
    number: '03',
    icon: 'zap',
    title: 'Ejecución',
    description: 'Diseñamos y entregamos con actualizaciones constantes para que veas el avance.',
  },
  {
    id: 'resultados',
    number: '04',
    icon: 'trophy',
    title: 'Resultados',
    description: 'Lanzamos y medimos juntos. Si hay que ajustar algo, lo ajustamos sin drama.',
    highlighted: true,
  },
];
