interface INavItems {
  name: string
  url: string
  active: boolean
}

enum PageUrls {
  Home = '/',
  About = '/about',
  Contact = '/contact',
  Videos = '/videos',
  Blogs = '/blogs',
}

export function getNavItems(path: string) {
  const navItems: INavItems[] = [
    { name: 'Home', url: PageUrls.Home, active: path === PageUrls.Home },
    {
      name: 'About Me',
      url: PageUrls.About,
      active: path === PageUrls.About,
    },
    {
      name: 'Contact',
      url: PageUrls.Contact,
      active: path === PageUrls.Contact,
    },
    {
      name: 'Videos',
      url: PageUrls.Videos,
      active: path === PageUrls.Videos,
    },
    {
      name: 'Blogs',
      url: PageUrls.Blogs,
      active: path === PageUrls.Blogs,
    },
  ]

  return navItems
}

export function isNavSolid(path: string) {
  switch (path) {
    case PageUrls.Home:
      return false
    case PageUrls.About:
      return true
    case PageUrls.Contact:
      return true
    case PageUrls.Videos:
      return false
    case PageUrls.Blogs:
      return false
  }
}
