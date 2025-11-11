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
  minnesota: {
    path: '/minnesota',
    label: 'Minnesota',
  },
  minnesotaIndustries: {
    path: '/minnesota/industries',
    label: 'Industries',
  },
} as const;

export type RouteKey = keyof typeof routes;

export function getRoute(key: RouteKey): string {
  return routes[key].path;
}

export const navigationLinks = [
  routes.home,
  routes.about,
  routes.contact,
] as const;

