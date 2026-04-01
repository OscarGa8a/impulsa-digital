export interface PortfolioItem {
  id: string;
  title: string;
  tag: string;
  imageUrl: string;
  imageAlt: string;
}

export const portfolio: PortfolioItem[] = [
  {
    id: 'restaurante',
    title: 'Restaurante El Sabor',
    tag: 'Web + Marketing',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    imageAlt: 'Restaurante moderno',
  },
  {
    id: 'estetica',
    title: 'Centro de Estética Bella',
    tag: 'Publicidad Online',
    imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800',
    imageAlt: 'Centro de estética',
  },
  {
    id: 'tienda',
    title: 'Tienda Online ModaX',
    tag: 'E-commerce + Ads',
    imageUrl: 'https://images.unsplash.com/photo-1661870139279-95fecab7c53a?w=800',
    imageAlt: 'Tienda online',
  },
];
