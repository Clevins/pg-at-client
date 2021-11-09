import useSWR from 'swr'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import { FC } from 'react'
import { LayoutProps } from '@customTypes/LayoutProps'

const Layout: FC<LayoutProps> = ({ children }) => {
  const { data, error } = useSWR(
    'http://localhost:1337/social-links',
    async () => {
      const res = await fetch('http://localhost:1337/social-links')
      return res.json()
    },
  )

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <Navbar socialLinks={data} />
      <main>{children}</main>
      <Footer socialLinks={data} />
    </>
  )
}

export default Layout
