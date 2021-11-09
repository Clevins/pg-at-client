import React from 'react'
import { GetStaticProps } from 'next'
import Navbar from '@components/Navbar'
import Hero from '@components/Hero'
import AboutMe from '@components/AboutMe'
import Services from '@components/Services'
import Videos from '@components/Videos'
import Blogs from '@components/Blogs'
import Section from '@components/Section'
import Footer from '@components/Footer'

const env = process.env.NODE_ENV
const devApiUrl = 'http://localhost:1337'
const prodApiUrl = 'https://hidden-reef-22167.herokuapp.com'

console.log(process.env.NODE_ENV)

export default function Index({ data }: any) {
  return (
    <>
      {/* <Navbar socialLinks={data.Home_SocialLinks} /> */}
      <Hero
        deaktopHeroUrl={data.Blogs_Hero.desktopImage.url}
        mobileHeroUrl={data.Blogs_Hero.mobileImage.url}
      />
      {/* <Footer socialLinks={data.Home_SocialLinks} /> */}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let data = {}

  const apiUrl = env === 'development' ? devApiUrl : prodApiUrl

  data = await getBlogsData(apiUrl)

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data },
  }
}

async function getBlogsData(apiUrl: string) {
  const res = await fetch(`${apiUrl}/all-blogs`)
  const data = await res.json()
  return data
}
