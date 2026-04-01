export interface Testimonial {
  id: string;
  name: string;
  role: string;
  initials: string;
  avatarColor: 'green' | 'blue' | 'orange';
  quote: string;
  rating: 5;
}

export const testimonials: Testimonial[] = [
  {
    id: 'maria',
    name: 'María Castro',
    role: 'Dueña, Restaurante El Sabor',
    initials: 'MC',
    avatarColor: 'green',
    quote: 'Impulsa Digital transformó nuestra presencia online. En 2 semanas teníamos la web lista y ya recibimos consultas por WhatsApp.',
    rating: 5,
  },
  {
    id: 'luis',
    name: 'Luis Rodríguez',
    role: 'Fundador, ModaX',
    initials: 'LR',
    avatarColor: 'blue',
    quote: 'El bot de WhatsApp fue un antes y un después. Mis clientes tienen respuesta inmediata a cualquier hora del día.',
    rating: 5,
  },
  {
    id: 'andrea',
    name: 'Andrea Pérez',
    role: 'Directora, Centro Bella',
    initials: 'AP',
    avatarColor: 'orange',
    quote: 'Las campañas de Meta Ads me triplicaron las consultas en el primer mes. Súper recomendado para cualquier emprendedor.',
    rating: 5,
  },
];
