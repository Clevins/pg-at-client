import useSWR from 'swr'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import { FC } from 'react'
import { LayoutProps } from '@customTypes/LayoutProps'
import fetchData from 'lib/fetchData'

const env = process.env.NODE_ENV
const devApiUrl = process.env.DEV_API_URL
const prodApiUrl = process.env.PROD_API_URL

const Layout: FC<LayoutProps> = ({ children }) => {
  const apiUrl = env === 'development' ? devApiUrl : prodApiUrl

  const { data, error } = useSWR(`${apiUrl}/social-links`, async () => {
    const socialLinks = await fetchData(
      apiUrl,
      'social-links',
      'Error With Layout Request',
    )

    return socialLinks
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
