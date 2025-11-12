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
  partnerOrSell: {
    path: '/get-started',
    label: 'Partner or Sell',
  },
} as const;

export type RouteKey = keyof typeof routes;

export function getRoute(key: RouteKey): string {
  return routes[key].path;
}

export const navigationLinks = [
  routes.home,
  routes.about,
  routes.partnerOrSell,
  routes.contact,
] as const;

