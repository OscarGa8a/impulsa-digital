export interface Service {
  id: string;
  emoji: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  highlighted?: boolean;
}

export const services: Service[] = [
  {
    id: 'web',
    emoji: '🌐',
    title: 'Páginas Web',
    description: 'Diseñamos tu sitio web desde cero. Rápido, moderno y listo para conseguir clientes.',
    imageUrl: 'https://images.unsplash.com/photo-1631891373714-1aca8e0f0b3c?w=800',
    imageAlt: 'Workspace moderno con laptop',
  },
  {
    id: 'marketing',
    emoji: '📣',
    title: 'Marketing Digital',
    description: 'Redes sociales, email y contenido para que tu marca se destaque y genere ventas.',
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800',
    imageAlt: 'Marketing analytics dashboard',
  },
  {
    id: 'publicidad',
    emoji: '🎯',
    title: 'Publicidad Online',
    description: 'Campañas en Meta Ads y Google Ads. Cada peso invertido, medido y optimizado.',
    imageUrl: 'https://images.unsplash.com/photo-1567641091594-71640a68f847?w=800',
    imageAlt: 'Online advertising',
  },
  {
    id: 'bots',
    emoji: '🤖',
    title: 'Bots & Automatización',
    description: 'Automatizamos tu WhatsApp e Instagram con bots inteligentes. Respondé clientes 24/7 sin esfuerzo.',
    imageUrl: 'https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?w=800',
    imageAlt: 'Automation and bots',
    highlighted: true,
  },
];
