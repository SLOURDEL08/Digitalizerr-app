export const NAVIGATION_LINKS = {
  mainLinks: [
    { label: 'Accueil', href: '/' },
    { label: 'Nos services', href: '#', isDropdown: true },
    { label: 'Nos projets', href: '/nos-projets' },
    { label: 'Contact', href: '/#contact', isButton: true, isAnchor: true }
  ],
  servicesLinks: [
    { label: 'Développement Web', href: '/#developpement', isAnchor: true },
    { label: 'Design UX/UI', href: '/design' },
    { label: 'Marketing', href: '/marketing', isAnchor: true },
    { label: 'Référencement', href: '/referencement', isAnchor: true },
    { label: 'Maintenance', href: '/maintenance', isAnchor: true }
  ]
};

// Offset pour le défilement (hauteur de la navbar + padding)
export const SCROLL_OFFSET = 200;