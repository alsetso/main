export const routes = {
  home: {
    path: '/',
    label: 'Home',
  },
  about: {
    path: '/about',
    label: 'Manifesto',
  },
  contact: {
    path: '/contact',
    label: 'Contact',
  },
  invest: {
    path: '/invest',
    label: 'Invest',
  },
  acquisition: {
    path: '/services/acquisition',
    label: 'Acquisition',
    description: 'Acquire your business',
  },
  lending: {
    path: '/services/lending',
    label: 'Lending',
    description: 'Business financing',
  },
  scale: {
    path: '/services/scale',
    label: 'Scale',
    description: 'Growth partnership',
  },
  equity: {
    path: '/services/equity',
    label: 'Equity',
    description: 'Equity investment',
  },
  transition: {
    path: '/services/transition',
    label: 'Transition',
    description: 'Business transition',
  },
  services: {
    path: '/services',
    label: 'Services',
    description: 'Our services',
  },
  howItWorks: {
    path: '/how-it-works',
    label: 'How It Works',
    description: 'How it works',
  },
} as const;

export type RouteKey = keyof typeof routes;

export function getRoute(key: RouteKey): string {
  return routes[key].path;
}

// Organized navigation structure
export const navigationGroups = {
  main: [
    routes.home,
    routes.about,
  ],
  services: [
    routes.acquisition,
    routes.lending,
    routes.scale,
    routes.equity,
    routes.transition,
  ],
  actions: [
    routes.invest,
    routes.contact,
  ],
} as const;

// Flat navigation for simple menus
export const navigationLinks = [
  routes.home,
  routes.about,
  routes.services,
  routes.howItWorks,
  routes.acquisition,
  routes.lending,
  routes.scale,
  routes.equity,
  routes.transition,
  routes.invest,
  routes.contact,
] as const;

