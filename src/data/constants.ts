// Configuración general del sitio
export const SITE_CONFIG = {
  name: 'IMPULSA Digital',
  tagline: 'Tu negocio, amplificado.',
  whatsapp: {
    number: '+573106495249',
    countryCode: '57',
    localNumber: '3106495249',
    defaultMessage: 'Hola! Quiero más información sobre sus servicios.',
  },
  email: 'hola@impulsadigital.co',
  social: {
    facebook: '#', // TODO: Agregar URL real
    instagram: '#', // TODO: Agregar URL real
    whatsapp: 'https://wa.me/573106495249',
  },
} as const;

// Helper para generar el link de WhatsApp
export function getWhatsAppLink(customMessage?: string): string {
  const message = customMessage || SITE_CONFIG.whatsapp.defaultMessage;
  return `https://wa.me/${SITE_CONFIG.whatsapp.number.replace('+', '')}?text=${encodeURIComponent(message)}`;
}
