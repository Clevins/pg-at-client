interface INavItems {
  name: string
  url: string
  active: boolean
}

export default function getNavItems(path: string) {
  const navItems: INavItems[] = [
    { name: 'Home', url: '/', active: path === '/' },
    {
      name: 'About Me',
      url: '/about',
      active: path === '/about',
    },
    {
      name: 'Contact',
      url: '/contact',
      active: false,
    },
    {
      name: 'Videos',
      url: '/',
      active: false,
    },
    {
      name: 'Blogs',
      url: '/',
      active: false,
    },
  ]

  return navItems
}
