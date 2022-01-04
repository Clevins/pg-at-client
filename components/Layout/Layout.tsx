import useSWR from 'swr'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import { FC } from 'react'
import { LayoutProps } from '@customTypes/LayoutProps'

//ToDO
// Add better loading spinner

const env = process.env.NODE_ENV
const devApiUrl = process.env.DEV_API_URL
const prodApiUrl = process.env.PROD_API_URL

const apiUrl: string | undefined =
  env === 'development' ? devApiUrl : prodApiUrl

const Layout: FC<LayoutProps> = ({ children }) => {
  const { data, error } = useSWR(`${apiUrl}/social-links`, async () => {
    const res = await fetch(`${apiUrl}/social-links`)
    return res.json()
  })

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
