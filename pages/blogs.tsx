import React, { FC, ReactElement } from 'react'
import { GetStaticProps } from 'next'
import Hero from '@components/Hero'
import { LatestBlogs, AllBlogs } from '@components/Blogs'
import Layout from '@components/Layout'
import handleFetchError from 'lib/handleFetchError'
import { BlogsPageProps } from '@customTypes/BlogsProps'

const env = process.env.NODE_ENV
const devApiUrl = 'http://localhost:1337'
const prodApiUrl = 'https://hidden-reef-22167.herokuapp.com'

console.log(process.env.NODE_ENV)

const Blogs: FC<BlogsPageProps> = ({ data }) => {
  console.log(data)
  return (
    <>
      <Hero
        desktopImage={data.Blogs_Hero.desktopImage}
        mobileImage={data.Blogs_Hero.mobileImage}
      >
        <div className="absolute text-center text-white transform -translate-x-1/2 font-Montserrat whitespace-nowrap -translate-y-1/3 top-2/4 left-1/2 ">
          <div className="text-4xl font-semibold lg:text-5xl text-shadow ">
            <h1>Blogs</h1>
          </div>
        </div>
      </Hero>

      <LatestBlogs blogs={data.latest_blogs} showViewAllBtn={false} />
      <AllBlogs blogs={data.all_blogs} />
    </>
  )
}

;(Blogs as any).getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
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
  handleFetchError(data, 'Error With All Blogs Request')
  return data
}

export default Blogs
