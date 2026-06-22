export interface Content {
  es: LocaleContent;
  en: LocaleContent;
}

export interface LocaleContent {
  nav: { services: string; work: string; process: string; pricing: string; about: string; contact: string };
  cta: { start: string; see: string };
  hero: {
    eyebrow: string;
    h1a: string;
    h1b: string;
    h1c: string;
    h1d: string;
    h1e: string;
    sub: string;
    stats: { n: string; l: string }[];
    codeTitle: string;
    codeLines: [string, string?][][];
  };
  ticker: string[];
  services: {
    eyebrow: string;
    title: string;
    titleI: string;
    titleEnd: string;
    desc: string;
    items: ServiceItem[];
  };
  portfolio: {
    eyebrow: string;
    title: string;
    titleI: string;
    titleEnd: string;
    desc: string;
    filters: string[];
    items: PortfolioItem[];
  };
  process: {
    eyebrow: string;
    title: string;
    titleI: string;
    titleEnd: string;
    desc: string;
    steps: ProcessStep[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    titleI: string;
    titleEnd: string;
    desc: string;
    plans: Plan[];
    cta: string;
  };
  about: {
    eyebrow: string;
    title: string;
    titleI: string;
    titleEnd: string;
    desc: string;
    body: string;
    signature: string;
  };
  quotes: {
    eyebrow: string;
    title: string;
    titleI: string;
    titleEnd: string;
    desc: string;
    items: QuoteItem[];
  };
  faq: {
    eyebrow: string;
    title: string;
    titleI: string;
    titleEnd: string;
    desc: string;
    items: FAQItem[];
  };
  ctaEnd: {
    title1: string;
    titleI: string;
    sub: string;
    primary: string;
    secondary: string;
  };
  footer: {
    bigline: string;
    cols: FooterCol[];
    rights: string;
    loc: string;
  };
}

export interface ServiceItem {
  n: string;
  icon: string;
  t: string;
  d: string;
  tags: string[];
  wide?: boolean;
}

export interface PortfolioItem {
  t: string;
  c: string;
  yr: string;
  tag: string;
  ph: string;
  icon: string;
}

export interface ProcessStep {
  k: string;
  t: string;
  d: string;
  dur: string;
}

export interface Plan {
  name: string;
  desc: string;
  price: string;
  unit: string;
  feat: string[];
  featured?: boolean;
}

export interface QuoteItem {
  q: string;
  n: string;
  r: string;
  a: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface FooterCol {
  h: string;
  items: string[];
}

export const content: Content = {
  es: {
    nav: { services: "Servicios", work: "Proyectos", process: "Proceso", pricing: "Planes", about: "Estudio", contact: "Contacto" },
    cta: { start: "Empezar proyecto", see: "Ver trabajo" },
    hero: {
      eyebrow: "Estudio de diseño & marketing — Remoto, desde 2022",
      h1a: "Sitios web", h1b: "que", h1c: "convierten", h1d: "marcas que", h1e: "crecen",
      sub: "Diseñamos, desarrollamos y hacemos crecer presencias digitales para emprendedores, tiendas y empresas. Código limpio, diseño intencional, resultados medibles.",
      stats: [{ n: "47", l: "Proyectos entregados" },{ n: "12", l: "Países alcanzados" }],
      codeTitle: "impulsa.config.ts",
      codeLines: [
        [["// stack","c"]],
        [["const","k"],[" studio ","s"],["= {"]],
        [["  design","s"],[": "],["\"Figma · Framer\"","k"],[","]],
        [["  build","s"],[":  "],["\"Next · Astro · Webflow\"","k"],[","]],
        [["  grow","s"],[":   "],["\"SEO · Ads · Social\"","k"]],
        [["}"]],
      ],
    },
    ticker: ["Desarrollo Web","Tiendas Online","Branding","SEO","Meta Ads","TikTok Ads","Social Media","Email Marketing","Landing Pages","Webflow"],
    services: {
      eyebrow: "01 — Servicios",
      title: "Todo lo que necesitas para", titleI: "impulsar", titleEnd: " tu negocio digital.",
      desc: "Del dominio a la primera venta. Trabajamos como partner estratégico — no como proveedor — cuidando cada pieza del ecosistema digital.",
      items: [
        { n:"01", icon:"◆", t:"Desarrollo Web", d:"Landings, sitios corporativos, tiendas online y dashboards a medida. Rápidos, accesibles y optimizados para conversión.", tags:["Next.js","Astro","Webflow","Shopify","WordPress"], wide:true },
        { n:"02", icon:"●", t:"Marketing Digital", d:"Campañas en Meta, Google y TikTok Ads con reportes claros. Cada peso invertido rastreado hasta la venta.", tags:["Meta Ads","Google Ads","Analytics"] },
        { n:"03", icon:"▲", t:"Redes Sociales", d:"Manejo mensual de contenido orgánico: estrategia, feed, reels, respuesta a comunidad.", tags:["Instagram","TikTok","LinkedIn"] },
        { n:"04", icon:"✦", t:"Branding & Identidad", d:"Logo, paleta, tipografía y manual de marca para que tu negocio se vea tan bien como funciona.", tags:["Logo","Manual","Naming"] },
        { n:"05", icon:"⬡", t:"SEO & Contenido", d:"Posicionamiento orgánico que trae tráfico sostenido sin pagar por cada clic.", tags:["Técnico","On-page","Blog"] },
      ],
    },
    portfolio: {
      eyebrow: "02 — Proyectos", title: "Trabajo", titleI: "reciente", titleEnd: ".",
      desc: "Una selección de los últimos lanzamientos — tiendas, sitios corporativos y productos digitales.",
      filters: ["Todo","Web","Tiendas","Branding","Marketing"],
      items: [
        { t:"Manso Café", c:"E-commerce · Shopify", yr:"'25", tag:"Tiendas", ph:"v1", icon:"cup" },
        { t:"Estudio Norte", c:"Sitio corporativo", yr:"'25", tag:"Web", ph:"v2", icon:"grid" },
        { t:"Clínica Sana", c:"Landing + CRM", yr:"'25", tag:"Web", ph:"v3", icon:"cross" },
        { t:"Raíz Botánica", c:"E-commerce", yr:"'24", tag:"Tiendas", ph:"v6", icon:"leaf" },
        { t:"Nova Legal", c:"Firma · Sitio", yr:"'24", tag:"Web", ph:"v4", icon:"tri" },
        { t:"Solar MX", c:"Campaña + Landing", yr:"'24", tag:"Marketing", ph:"v5", icon:"sun" },
      ],
    },
    process: {
      eyebrow: "03 — Proceso", title: "Simple, claro,", titleI: "medible", titleEnd: ".",
      desc: "Cuatro fases, tiempos acordados, cero sorpresas. Te acompañamos antes, durante y después del lanzamiento.",
      steps: [
        { k:"01", t:"Descubrir", d:"Entrevistas, análisis de competencia y definición de objetivos de negocio.", dur:"3–5 días" },
        { k:"02", t:"Diseñar", d:"Wireframes, dirección visual y prototipos de alta fidelidad aprobados por ti.", dur:"1–2 semanas" },
        { k:"03", t:"Construir", d:"Desarrollo, integración de herramientas, SEO técnico y pruebas en dispositivos reales.", dur:"2–4 semanas" },
        { k:"04", t:"Crecer", d:"Lanzamiento, campañas, contenido mensual y reportes de resultados.", dur:"Ongoing" },
      ],
    },
    pricing: {
      eyebrow: "04 — Planes", title: "Presupuesto", titleI: "honesto", titleEnd: ".",
      desc: "Desde una landing de una página hasta un ecosistema completo. Cotizamos sobre alcance, no sobre quién pregunta.",
      plans: [
        { name:"Landing", desc:"Una página de alto impacto para lanzar o validar.", price:"$890", unit:"USD · único", feat:["Diseño a medida","1 página","CMS básico","Formulario + WhatsApp","SEO técnico","Entrega en 10 días"] },
        { name:"Sitio Completo", desc:"Presencia corporativa completa con blog y analítica.", price:"$2,400", unit:"USD · único", feat:["Hasta 8 páginas","CMS editable","Blog + SEO","Integraciones","2 rondas de cambios","Entrega en 4 semanas"], featured:true },
        { name:"Growth Mensual", desc:"Marketing + contenido + soporte continuo.", price:"$690", unit:"USD / mes", feat:["12 piezas de contenido","Campañas Meta/Google","Reporte mensual","Soporte del sitio","Mejoras continuas","Sin plazo forzoso"] },
      ],
      cta: "Empezar",
    },
    about: {
      eyebrow: "05 — Estudio", title: "Un estudio pequeño,", titleI: "enfocado", titleEnd: ".",
      desc: "Somos un equipo reducido por elección. Eso significa que hablas directo con quien diseña y construye tu proyecto — sin intermediarios, sin juniors aprendiendo con tu dinero.",
      body: "Empezamos como un proyecto independiente en 2022 y crecimos con cada cliente que confió en nosotros. Hoy trabajamos con negocios en México, Colombia, España y Estados Unidos, y seguimos prefiriendo calidad sobre cantidad.",
      signature: "— Equipo Impulsa",
    },
    quotes: {
      eyebrow: "06 — Testimonios", title: "Lo que dicen", titleI: "nuestros clientes", titleEnd: ".", desc: "",
      items: [
        { q:"Pasamos de cero ventas online a facturar $8K al mes en el primer trimestre. La tienda se siente premium y convierte.", n:"Laura M.", r:"Fundadora · Manso Café", a:"LM" },
        { q:"Entendieron el negocio antes de tocar Figma. El sitio nuevo refleja exactamente a quién queremos atraer.", n:"Diego R.", r:"Director · Estudio Norte", a:"DR" },
        { q:"El manejo de redes y las campañas duplicaron las consultas en dos meses. Reportes claros, sin humo.", n:"Ana P.", r:"Dra. · Clínica Sana", a:"AP" },
      ],
    },
    faq: {
      eyebrow: "07 — Preguntas", title: "Dudas", titleI: "frecuentes", titleEnd: ".", desc: "",
      items: [
        { q:"¿Cuánto tarda un sitio?", a:"Una landing sale en 10 días, un sitio corporativo completo entre 3 y 5 semanas, dependiendo del alcance y la rapidez con la que nos pasas contenido." },
        { q:"¿Me entregan el código y los accesos?", a:"Siempre. El sitio es tuyo, los dominios y hostings quedan a tu nombre, y puedes llevarte el proyecto cuando quieras." },
        { q:"¿Trabajan con negocios fuera de México?", a:"Sí. Tenemos clientes en Colombia, España, EE.UU. y Chile. Todo es 100% remoto por Notion, Figma y videollamada." },
        { q:"¿Ofrecen mantenimiento después del lanzamiento?", a:"Sí, con planes mensuales de soporte y mejoras, o por hora si prefieres bajo demanda." },
        { q:"¿Qué pasa si no me gusta el diseño?", a:"Cada proyecto incluye rondas de revisión. Si algo no funciona lo ajustamos sin costo hasta que estés conforme — está en nuestro proceso." },
      ],
    },
    ctaEnd: {
      title1: "Hagamos algo", titleI: "real.",
      sub: "Cuéntanos en qué estás trabajando y te respondemos en menos de 24 horas con una primera propuesta.",
      primary: "Agendar llamada", secondary: "Escribir por WhatsApp",
    },
    footer: {
      bigline: "¿Listo para crecer?",
      cols: [
        { h:"Servicios", items:["Desarrollo Web","Tiendas Online","Marketing","Redes Sociales","SEO"] },
        { h:"Estudio", items:["Sobre","Proyectos","Proceso","Contacto"] },
        { h:"Contacto", items:["hola@impulsadigital.co","+52 55 1234 5678","@impulsadigital","WhatsApp"] },
      ],
      rights: "© 2026 Impulsa Digital · Hecho con atención",
      loc: "CDMX · Remoto global",
    },
  },
  en: {
    nav: { services: "Services", work: "Work", process: "Process", pricing: "Plans", about: "Studio", contact: "Contact" },
    cta: { start: "Start a project", see: "See work" },
    hero: {
      eyebrow: "Design & marketing studio — Remote, since 2022",
      h1a: "Websites", h1b: "that", h1c: "convert", h1d: "brands that", h1e: "grow",
      sub: "We design, build and grow digital presences for founders, stores and companies. Clean code, intentional design, measurable outcomes.",
      stats: [{ n: "47", l: "Projects shipped" },{ n: "12", l: "Countries reached" }],
      codeTitle: "impulsa.config.ts",
      codeLines: [
        [["// stack","c"]],
        [["const","k"],[" studio ","s"],["= {"]],
        [["  design","s"],[": "],["\"Figma · Framer\"","k"],[","]],
        [["  build","s"],[":  "],["\"Next · Astro · Webflow\"","k"],[","]],
        [["  grow","s"],[":   "],["\"SEO · Ads · Social\"","k"]],
        [["}"]],
      ],
    },
    ticker: ["Web Development","Online Stores","Branding","SEO","Meta Ads","TikTok Ads","Social Media","Email Marketing","Landing Pages","Webflow"],
    services: {
      eyebrow: "01 — Services",
      title: "Everything you need to", titleI: "grow", titleEnd: " your digital business.",
      desc: "From the domain to the first sale. We work as a strategic partner — not a vendor — caring for every piece of your digital ecosystem.",
      items: [
        { n:"01", icon:"◆", t:"Web Development", d:"Landings, corporate sites, online stores and custom dashboards. Fast, accessible and conversion-focused.", tags:["Next.js","Astro","Webflow","Shopify","WordPress"], wide:true },
        { n:"02", icon:"●", t:"Digital Marketing", d:"Meta, Google and TikTok Ads campaigns with clean reports. Every dollar tracked to the sale.", tags:["Meta Ads","Google Ads","Analytics"] },
        { n:"03", icon:"▲", t:"Social Media", d:"Monthly organic content: strategy, feed, reels, community management.", tags:["Instagram","TikTok","LinkedIn"] },
        { n:"04", icon:"✦", t:"Branding & Identity", d:"Logo, palette, type and brand book so your business looks as good as it works.", tags:["Logo","Guidelines","Naming"] },
        { n:"05", icon:"⬡", t:"SEO & Content", d:"Organic ranking that brings sustained traffic without paying for every click.", tags:["Technical","On-page","Blog"] },
      ],
    },
    portfolio: {
      eyebrow: "02 — Work", title: "Recent", titleI: "work", titleEnd: ".",
      desc: "A selection of recent launches — stores, corporate sites and digital products.",
      filters: ["All","Web","Stores","Branding","Marketing"],
      items: [
        { t:"Manso Café", c:"E-commerce · Shopify", yr:"'25", tag:"Stores", ph:"v1", icon:"cup" },
        { t:"Estudio Norte", c:"Corporate site", yr:"'25", tag:"Web", ph:"v2", icon:"grid" },
        { t:"Clínica Sana", c:"Landing + CRM", yr:"'25", tag:"Web", ph:"v3", icon:"cross" },
        { t:"Raíz Botánica", c:"E-commerce", yr:"'24", tag:"Stores", ph:"v6", icon:"leaf" },
        { t:"Nova Legal", c:"Law firm · Site", yr:"'24", tag:"Web", ph:"v4", icon:"tri" },
        { t:"Solar MX", c:"Campaign + Landing", yr:"'24", tag:"Marketing", ph:"v5", icon:"sun" },
      ],
    },
    process: {
      eyebrow: "03 — Process", title: "Simple, clear,", titleI: "measurable", titleEnd: ".",
      desc: "Four phases, agreed timelines, zero surprises. We walk with you before, during and after launch.",
      steps: [
        { k:"01", t:"Discover", d:"Interviews, competitor analysis and definition of business goals.", dur:"3–5 days" },
        { k:"02", t:"Design", d:"Wireframes, visual direction and high-fidelity prototypes approved by you.", dur:"1–2 weeks" },
        { k:"03", t:"Build", d:"Development, tool integrations, technical SEO and real-device testing.", dur:"2–4 weeks" },
        { k:"04", t:"Grow", d:"Launch, campaigns, monthly content and results reports.", dur:"Ongoing" },
      ],
    },
    pricing: {
      eyebrow: "04 — Plans", title: "Honest", titleI: "pricing", titleEnd: ".",
      desc: "From a single landing to a full ecosystem. We price by scope, not by who is asking.",
      plans: [
        { name:"Landing", desc:"A high-impact single page to launch or validate.", price:"$890", unit:"USD · one-off", feat:["Tailored design","1 page","Basic CMS","Form + WhatsApp","Technical SEO","Delivered in 10 days"] },
        { name:"Full Site", desc:"Full corporate presence with blog and analytics.", price:"$2,400", unit:"USD · one-off", feat:["Up to 8 pages","Editable CMS","Blog + SEO","Integrations","2 revision rounds","Delivered in 4 weeks"], featured:true },
        { name:"Monthly Growth", desc:"Marketing + content + ongoing support.", price:"$690", unit:"USD / month", feat:["12 content pieces","Meta/Google campaigns","Monthly report","Site support","Continuous improvements","No forced commitment"] },
      ],
      cta: "Get started",
    },
    about: {
      eyebrow: "05 — Studio", title: "A small,", titleI: "focused", titleEnd: " studio.",
      desc: "We are a small team by choice. That means you talk directly to whoever designs and builds your project — no middlemen, no juniors learning on your dime.",
      body: "We started as an independent project in 2022 and grew with every client who trusted us. Today we work with businesses in Mexico, Colombia, Spain and the US, and we still prefer quality over quantity.",
      signature: "— Team Impulsa",
    },
    quotes: {
      eyebrow: "06 — Testimonials", title: "What our", titleI: "clients say", titleEnd: ".", desc: "",
      items: [
        { q:"We went from zero online sales to $8K/month in the first quarter. The store feels premium and converts.", n:"Laura M.", r:"Founder · Manso Café", a:"LM" },
        { q:"They understood the business before opening Figma. The new site reflects exactly who we want to attract.", n:"Diego R.", r:"Director · Estudio Norte", a:"DR" },
        { q:"Social handling and campaigns doubled inquiries in two months. Clear reports, no fluff.", n:"Ana P.", r:"Dr. · Clínica Sana", a:"AP" },
      ],
    },
    faq: {
      eyebrow: "07 — FAQ", title: "Frequent", titleI: "questions", titleEnd: ".", desc: "",
      items: [
        { q:"How long does a site take?", a:"A landing ships in 10 days, a full corporate site between 3 and 5 weeks, depending on scope and how fast you send content." },
        { q:"Do you hand over the code and accounts?", a:"Always. The site is yours — domains and hostings in your name, and you can take the project wherever you want." },
        { q:"Do you work with businesses outside Mexico?", a:"Yes. We have clients in Colombia, Spain, US and Chile. 100% remote via Notion, Figma and video calls." },
        { q:"Do you offer post-launch maintenance?", a:"Yes, via monthly support and improvement plans, or hourly on-demand." },
        { q:"What if I don't like the design?", a:"Every project includes revision rounds. If something isn't working we adjust at no cost until you are happy — it's baked into our process." },
      ],
    },
    ctaEnd: {
      title1: "Let's make something", titleI: "real.",
      sub: "Tell us what you're working on and we'll reply within 24 hours with a first proposal.",
      primary: "Book a call", secondary: "WhatsApp us",
    },
    footer: {
      bigline: "Ready to grow?",
      cols: [
        { h:"Services", items:["Web Development","Online Stores","Marketing","Social Media","SEO"] },
        { h:"Studio", items:["About","Work","Process","Contact"] },
        { h:"Contact", items:["hi@impulsadigital.co","+52 55 1234 5678","@impulsadigital","WhatsApp"] },
      ],
      rights: "© 2026 Impulsa Digital · Crafted with care",
      loc: "CDMX · Remote global",
    },
  },
};
