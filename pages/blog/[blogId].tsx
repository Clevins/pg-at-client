import React, { ReactElement } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from '@components/Layout'
import Hero from '@components/Hero'
import fetchData from 'lib/fetchData'
import { BlogProps, IBlog } from '@customTypes/BlogsProps'
import ReactMarkdown from 'react-markdown'

const env = process.env.NODE_ENV
const devApiUrl = process.env.DEV_API_URL
const prodApiUrl = process.env.PROD_API_URL
const apiUrl: string | undefined =
  env === 'development' ? devApiUrl : prodApiUrl

export default function Blog({ blog }: BlogProps) {
  console.log(blog)
  return (
    <>
      <Hero deaktopHeroUrl={blog.Hero.url} mobileHeroUrl={blog.Hero.url}>
        <div className="w-10/12 text-center text-white lg:w-3/4 font-Montserrat lg:absoulte_center_top absoulte_center">
          <div className="text-lg font-semibold lg:text-5xl text-shadow">
            <h1 className="">{blog.title}</h1>
          </div>

          <div className="mt-2 font-normal break-words text-md lg:mt-5 lg:text-3xl ">
            <h2 className="">
              By <span className="text-darkTurquoise">{blog.author}</span> -{' '}
              {blog.upload_date}
            </h2>
          </div>
        </div>
        <div className="mb-10 mr-5 text-sm font-light text-center text-white lg:text-2xl absoulte_center_bottom w-52 opacity-80 font-Montserrat">
          <div className="">
            <p>READ IN {blog.read_time} MINS</p>
          </div>
        </div>
      </Hero>

      <div>
        {' '}
        <ReactMarkdown className="w-10/12 mx-auto my-20 text-sm text-justify lg:text-base font-Montserrat">
          {blog.content}
        </ReactMarkdown>
      </div>
    </>
  )
}

Blog.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = await fetchData(apiUrl, 'blogs', 'Error With Blogs Request')

  const paths = blogs.map((blog: IBlog) => ({
    params: { blogId: blog.id },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let blog = {}

  const apiUrl = env === 'development' ? devApiUrl : prodApiUrl

  if (!apiUrl) {
    return {
      notFound: true,
    }
  }

  if (params) {
    blog = await fetchData(
      apiUrl,
      `blogs/${params.blogId}`,
      'Error With Blog Request',
    )
  }

  return {
    props: { blog },
  }
}
