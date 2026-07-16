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
const gallery = (slug: string, count = 5) =>
  Array.from({ length: count }, (_, i) =>
    img(slug, `doc-${String(i + 1).padStart(2, '0')}.svg`),
  );

export const projects: Project[] = [
  {
    slug: 'invoice-saas',
    title: 'Invoice SaaS',
    summary: 'Full-stack SaaS for streamlined invoice management.',
    description:
      'A full-stack SaaS application developed as a personal project to streamline invoice management for businesses. It includes authentication, business profiles, client and product management, tax configuration, invoice generation, PDF export, printing, reporting, and a subscription-ready architecture with a secure REST API.',
    emoji: '🧾',
    color: 'from-emerald-500/20 to-teal-500/20',
    category: 'Full-Stack SaaS',
    year: '2024',
    role: 'Solo Developer',
    technologies: ['Next.js', 'Go', 'PostgreSQL', 'Docker', 'Tailwind CSS', 'TypeScript'],
    cover: img('invoice-saas', 'cover.svg'),
    gallery: gallery('invoice-saas'),
    liveUrl: 'https://jualin-invoices.vercel.app/',
    // sourceUrl omitted — source is private.
  },
  {
    slug: 'pos-system',
    title: 'Point of Sale (POS) System',
    summary: 'Multi-platform, offline-first POS built with Flutter.',
    description:
      'Professional project developed at PT Sadavir Utama Nusamedia. A multi-platform POS solution built with Flutter for Android, iOS, macOS, and Linux. Features include offline-first transactions using SQLite, real-time synchronization via WebSocket, inventory management, receipt printing, cashier operations, QR/barcode scanning, and POS hardware integration. Currently in final development and preparing for production release.',
    emoji: '🛒',
    color: 'from-blue-500/20 to-cyan-500/20',
    category: 'Cross-Platform App',
    year: '2024',
    role: 'Mobile Developer',
    technologies: ['Flutter', 'Go', 'SQLite', 'WebSocket', 'MySQL', 'Firebase'],
    cover: img('pos-system', 'cover.svg'),
    gallery: gallery('pos-system', 6),
    // liveUrl & sourceUrl omitted — proprietary company project.
  },
  {
    slug: 'infusion-monitoring',
    title: 'Infusion Monitoring System',
    summary: 'Real-time healthcare monitoring with live alerts.',
    description:
      'A real-time healthcare monitoring application developed for client operations. Built using Flutter and Go with WebSocket technology to provide live infusion status updates, device identification, event monitoring, and critical alert notifications. Successfully deployed and actively used in operational environments.',
    emoji: '🏥',
    color: 'from-red-500/20 to-orange-500/20',
    category: 'Healthcare',
    year: '2023',
    role: 'Mobile Developer',
    technologies: ['Flutter', 'Go', 'WebSocket', 'Bloc', 'REST API', 'VPS'],
    cover: img('infusion-monitoring', 'cover.svg'),
    gallery: gallery('infusion-monitoring'),
    liveUrl: 'https://github.com/Pravasta/health_reminder',
    sourceUrl: 'https://github.com/Pravasta/health_reminder',
  },
  {
    slug: 'qobiltu-indonesia',
    title: 'Qobiltu Indonesia',
    summary: 'Mobile app supporting the Islamic marriage process.',
    description:
      'Mobile application developed for Qobiltu Indonesia, a platform supporting the Islamic marriage process including ta’aruf, nadzhor, and khitbah. Responsible for Flutter development, REST API integration, Firebase Authentication, analytics, push notifications, and implementation of the design system from Figma.',
    emoji: '💍',
    color: 'from-purple-500/20 to-pink-500/20',
    category: 'Mobile App',
    year: '2023',
    role: 'Flutter Developer',
    technologies: ['Flutter', 'Firebase', 'REST API', 'Figma', 'Analytics'],
    cover: img('qobiltu-indonesia', 'cover.svg'),
    gallery: gallery('qobiltu-indonesia'),
    liveUrl: 'https://qobiltu.id/',
  },
  {
    slug: 'recycle-management',
    title: 'Recycle Management System',
    summary: 'Internal enterprise app for recycling operations.',
    description:
      'An internal enterprise application developed for recycling operations management. Built with Flutter to support cross-platform workflows, order management, material tracking, and operational reporting. Focused on responsive user interfaces, maintainable architecture, and seamless backend integration.',
    emoji: '♻️',
    color: 'from-green-500/20 to-emerald-500/20',
    category: 'Enterprise',
    year: '2023',
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
    cover: img('madang-app', 'cover.svg'),
    gallery: gallery('madang-app'),
    liveUrl: 'https://github.com/Pravasta/MadangApp',
    sourceUrl: 'https://github.com/Pravasta/MadangApp',
  },
];

/** Projects shown on the home page (the rest live on /projects). */
export const FEATURED_COUNT = 5;
export const featuredProjects = projects.slice(0, FEATURED_COUNT);

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);

/** True when a project has neither a live nor a source link. */
export const hasNoLinks = (p: Project) => !p.liveUrl && !p.sourceUrl;
