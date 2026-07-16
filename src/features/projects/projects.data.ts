// Single source of truth for portfolio projects.
//
// Images live in `public/projects/<slug>/` so you can swap them without touching
// code. Drop your files there using the same names referenced below
// (cover.svg / doc-01.svg ...) or update the paths here. Missing files fall back
// to a gradient + emoji placeholder automatically (see ProjectImage).
//
// Links are optional. When `liveUrl` / `sourceUrl` are omitted, the UI shows a
// "code is private / cannot be shared" dialog instead of a dead link.

export interface Project {
  slug: string;
  title: string;
  /** One-line summary shown on cards and the detail hero. */
  summary: string;
  /** Full description shown on the detail page. */
  description: string;
  /** Emoji used for the gradient placeholder fallback. */
  emoji: string;
  /** Tailwind gradient classes for the placeholder / accent. */
  color: string;
  category: string;
  year: string;
  role: string;
  /** Aspect of the screenshots — controls how the gallery frames them. Defaults to landscape. */
  orientation?: 'landscape' | 'portrait';
  technologies: string[];
  /** Cover image (card thumbnail + detail hero). */
  cover: string;
  /** Documentation screenshots shown in the detail gallery. */
  gallery: string[];
  /** Live demo / product URL. Omit for private projects. */
  liveUrl?: string;
  /** Source code URL. Omit for private / closed-source projects. */
  sourceUrl?: string;
}

const img = (slug: string, name: string) => `/projects/${slug}/${name}`;
const gallery = (slug: string, count = 5, ext: 'svg' | 'png' | 'jpg' | 'webp' = 'svg') =>
  Array.from({ length: count }, (_, i) =>
    img(slug, `doc-${String(i + 1).padStart(2, '0')}.${ext}`),
  );

/** Tag appended to every project — all were built with AI pair programming. */
const AI_PAIR = 'Claude (AI Pair Programming)';

const projectList: Project[] = [
  {
    slug: 'payment-service',
    title: 'Payment Service',
    summary: 'Centralized payment service powering multiple SaaS applications.',
    description:
      'A centralized payment service built with Golang and PostgreSQL to serve multiple SaaS applications.\n\n' +
      '• Designed with Clean Architecture — clear separation between domain, use cases, infrastructure, and external adapters\n' +
      '• RESTful APIs for payment processing, transaction lifecycle, and webhook handling\n' +
      '• DOKU Payment Gateway integration through an extensible gateway abstraction, ready for multiple payment providers\n' +
      '• PostgreSQL schemas and a payment state machine for reliable transaction processing\n' +
      '• Secure cryptographic signature generation and verification for DOKU API communication\n' +
      '• Containerized with Docker and Docker Compose for consistent development environments\n' +
      '• APIs documented and tested with Swagger/OpenAPI',
    emoji: '💳',
    color: 'from-indigo-500/20 to-violet-500/20',
    category: 'Backend Service',
    year: '2026',
    role: 'Backend Developer',
    technologies: [
      'Go',
      'PostgreSQL',
      'Docker',
      'Docker Compose',
      'REST API',
      'Clean Architecture',
      'DOKU Payment Gateway',
      'Swagger/OpenAPI',
    ],
    cover: img('payment-service', 'cover.jpg'),
    gallery: gallery('payment-service', 2, 'jpg'),
    liveUrl: 'https://pravasta.github.io/payment-service/api-documentation/',
    // sourceUrl omitted — source is private.
  },
  {
    slug: 'invoice-saas',
    title: 'Invoice SaaS',
    summary: 'Full-stack SaaS for streamlined invoice management.',
    description:
      'A multi-tenant invoicing SaaS platform for small and medium businesses.\n\n' +
      '• Built mobile applications using Flutter and the web dashboard using Next.js\n' +
      '• Designed and implemented RESTful APIs using Golang\n' +
      '• Developed invoice, client, item, and tax management modules\n' +
      '• Designed PostgreSQL database schemas and optimized backend performance\n' +
      '• Containerized services using Docker for development and deployment\n' +
      '• Collaborated using Git workflow, pull requests, and code reviews',
    emoji: '🧾',
    color: 'from-emerald-500/20 to-teal-500/20',
    category: 'Full-Stack SaaS',
    year: '2026',
    role: 'Solo Developer',
    technologies: [
      'Next.js',
      'Go',
      'PostgreSQL',
      'Docker',
      'Tailwind CSS',
      'TypeScript',
      'Railway',
      'Cloudflare R2',
      'Vercel',
    ],
    cover: img('invoice-saas', 'cover.png'),
    gallery: gallery('invoice-saas', 6, 'png'),
    liveUrl: 'https://jualin-invoices.vercel.app/',
    // sourceUrl omitted — source is private.
  },
  {
    slug: 'pos-system',
    title: 'Point of Sale (POS) System',
    summary: 'Multi-platform, offline-first POS built with Flutter.',
    description:
      'Professional project developed at PT Sadavir Utama Nusamedia — a multi-platform POS system built with Flutter and Node.js, currently preparing for release.\n\n' +
      '• Implemented an offline-first system using SQLite\n' +
      '• Real-time synchronization using WebSocket\n' +
      '• Integrated POS hardware devices (receipt printers, QR/barcode scanners)',
    emoji: '🛒',
    color: 'from-blue-500/20 to-cyan-500/20',
    category: 'Cross-Platform App',
    year: '2025-2026',
    role: 'Mobile Developer',
    technologies: ['Flutter', 'Node.js', 'SQLite', 'WebSocket', 'MySQL', 'Firebase'],
    cover: img('pos-system', 'cover.png'),
    gallery: gallery('pos-system', 8, 'png'),
    // liveUrl & sourceUrl omitted — proprietary company project.
  },
  {
    slug: 'infusion-monitoring',
    title: 'Infusion Monitoring System',
    summary: 'Real-time healthcare monitoring with live alerts.',
    description:
      'A real-time infusion monitoring application that helps healthcare workers track infusion status efficiently — deployed and actively used in operational environments.\n\n' +
      '• Implemented WebSocket for real-time event updates, integrated with Flutter Bloc for state management\n' +
      '• Designed a scalable backend system in Go to handle multiple device connections and API requests\n' +
      '• Utilized device identification to manage user sessions and ensure accurate notification delivery\n' +
      '• Implemented an audio-based notification system for critical alerts',
    emoji: '🏥',
    color: 'from-red-500/20 to-orange-500/20',
    category: 'Healthcare',
    year: '2025',
    role: 'Mobile Developer',
    technologies: ['Flutter', 'Go', 'WebSocket', 'Bloc', 'REST API', 'VPS'],
    cover: img('infusion-monitoring', 'cover.jpg'),
    gallery: gallery('infusion-monitoring', 2, 'jpg'),
    liveUrl: 'https://github.com/Pravasta/health_reminder',
    sourceUrl: 'https://github.com/Pravasta/health_reminder',
  },
  {
    slug: 'qobiltu-indonesia',
    title: 'Qobiltu Indonesia',
    summary: 'Mobile app supporting the Islamic marriage process.',
    description:
      'Mobile application for Qobiltu Indonesia, a platform supporting the Islamic marriage process including ta’aruf, nadzhor, and khitbah — built with Flutter.\n\n' +
      '• Implemented responsive and reusable user interfaces based on the Figma design system\n' +
      '• Integrated RESTful APIs to connect the mobile application with backend services\n' +
      '• Integrated Firebase Authentication for user login and registration\n' +
      '• Implemented Firebase Cloud Messaging (FCM) for push notifications\n' +
      '• Configured Firebase Analytics to track user engagement and application events\n' +
      '• Applied Clean Architecture and the BLoC pattern to improve maintainability and scalability\n' +
      '• Collaborated with designers and backend developers using Trello and Git',
    emoji: '💍',
    color: 'from-purple-500/20 to-pink-500/20',
    category: 'Mobile App',
    year: '2025',
    role: 'Flutter Developer',
    orientation: 'portrait',
    technologies: ['Flutter', 'Firebase', 'REST API', 'Figma', 'Analytics'],
    cover: img('qobiltu-indonesia', 'cover.png'),
    gallery: gallery('qobiltu-indonesia', 5, 'png'),
    liveUrl: 'https://play.google.com/store/apps/details?id=id.qobiltu.mobileqobiltu&hl=id',
  },
  {
    slug: 'recycle-management',
    title: 'Recycle App (Renewit MDA)',
    summary: 'Cross-platform recycling application for internal company use.',
    description:
      'Renewit MDA — a cross-platform recycling application built with Flutter, targeting mobile, desktop, and Linux environments.\n\n' +
      '• Built scalable and maintainable UI components following clean architecture principles\n' +
      '• Optimized performance and layout adaptability for multiple screen sizes and operating systems\n' +
      '• Collaborated on system integration and smooth communication between frontend and backend services\n' +
      '• Deployed and published to Google Play Store and Apple App Store for internal company use (private distribution)',
    emoji: '♻️',
    color: 'from-green-500/20 to-emerald-500/20',
    category: 'Enterprise',
    year: '2025',
    role: 'Mobile Developer',
    technologies: ['Flutter', 'REST API', 'Linux', 'Android', 'Cross Platform'],
    cover: img('recycle-management', 'cover.svg'),
    gallery: gallery('recycle-management'),
    // Private internal project — no public links.
  },
  {
    slug: 'madang-app',
    title: 'Madang App',
    summary: 'Meal planning app for daily food organization.',
    description:
      'A meal planning application that helps users organize daily meals, save favorite foods, and create personalized eating schedules. Built as a personal project to explore mobile application development and user-centered design.',
    emoji: '🍜',
    color: 'from-orange-500/20 to-yellow-500/20',
    category: 'Mobile App',
    year: '2022',
    role: 'Solo Developer',
    technologies: ['Flutter', 'Dart', 'REST API'],
    cover: img('madang-app', 'cover.jpg'),
    gallery: gallery('madang-app', 5, 'jpg'),
    liveUrl: 'https://github.com/Pravasta/MadangApp',
    sourceUrl: 'https://github.com/Pravasta/MadangApp',
  },
];

export const projects: Project[] = projectList.map((p) => ({
  ...p,
  technologies: [...p.technologies, AI_PAIR],
}));

/** Projects shown on the home page (the rest live on /projects). */
export const FEATURED_COUNT = 5;
export const featuredProjects = projects.slice(0, FEATURED_COUNT);

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);

/** True when a project has neither a live nor a source link. */
export const hasNoLinks = (p: Project) => !p.liveUrl && !p.sourceUrl;
