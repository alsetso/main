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
  assessment: {
    path: '/assessment',
    label: 'Assessment',
    description: 'Assess your business',
  },
  lending: {
    path: '/lending',
    label: 'Lending',
    description: 'Business financing',
  },
  scale: {
    path: '/scale',
    label: 'Scale',
    description: 'Growth partnership',
  },
  equity: {
    path: '/equity',
    label: 'Equity',
    description: 'Equity investment',
  },
  transition: {
    path: '/transition',
    label: 'Transition',
    description: 'Business transition',
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
    routes.assessment,
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
  routes.assessment,
  routes.lending,
  routes.scale,
  routes.equity,
  routes.transition,
  routes.invest,
  routes.contact,
] as const;

