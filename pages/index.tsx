import React, { ReactElement } from 'react'
import { GetStaticProps } from 'next'
import Layout from '@components/Layout'
import Hero from '@components/Hero'
import AboutMe from '@components/AboutMe'
import Services from '@components/Services'
import Videos from '@components/Videos'
import { LatestBlogs } from '@components/Blogs'
import Section from '@components/Section'
import handleFetchError from 'lib/handleFetchError'

const env = process.env.NODE_ENV
const devApiUrl = process.env.DEV_API_URL
const prodApiUrl = process.env.PROD_API_URL

console.log(process.env.NODE_ENV)

export default function Index({ data, videoShelves }: any) {
  console.log(data)
  return (
    <>
      <Hero
        deaktopHeroUrl={data.Home_Hero.desktopImage.url}
        mobileHeroUrl={data.Home_Hero.mobileImage.url}
      >
        <div className="absolute text-center text-white transform -translate-x-1/2 font-Montserrat whitespace-nowrap -translate-y-1/3 top-1/3 left-1/2 ">
          <div className="text-4xl font-semibold lg:text-5xl text-shadow ">
            <h1>Pete Guay</h1>
          </div>
          <div className="mt-1 text-3xl font-normal lg:text-4xl text-darkTurquoise">
            <h2>Atletic Therapy</h2>
          </div>
        </div>
      </Hero>
      <AboutMe
        profileImage={data.Home_ProfileImage}
        aboutMeSections={data.Home_AboutMe}
      />
      <Services
        servicesBgImage={data.Home_ServiceBgImage}
        homeServices={data.Home_Services}
      />
      <Videos videoShelves={videoShelves} />
      <Section
        title="Read My Thesis"
        subTitle="The Role of Sports Psychologists in Treating Injuried Athletes"
      >
        <button className="w-24 h-8 mx-auto my-1 text-white rounded-lg lg:my-0 lg:h-10 bg-irisBlue hover:bg-darkTurquoise focus:outline-none">
          <p>Read More</p>
        </button>
      </Section>
      <LatestBlogs blogs={data.latest_blogs} showViewAllBtn={true} />
      <Section title="Like What I Do?" subTitle="Sign Up To My Newsletter">
        <div className="flex flex-row mx-auto ">
          <input
            className="w-full px-4 py-2 mx-2 italic leading-tight text-gray-400 border-2 rounded appearance-none bg-bunker border-bunker focus:outline-none focus:bg-bunker focus:border-irisBlue"
            id="inline-full-name"
            type="email"
            placeholder="Enter Your Email"
          />

          <button className="h-8 mx-2 my-1 text-white rounded w-36 lg:my-0 lg:h-10 bg-irisBlue hover:bg-darkTurquoise focus:outline-none">
            <p>Sign Up</p>
          </button>
        </div>
      </Section>
    </>
  )
}

Index.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export const getStaticProps: GetStaticProps = async () => {
  let data,
    videoShelves = {}

  const apiUrl = env === 'development' ? devApiUrl : prodApiUrl

  if (!apiUrl) {
    return {
      notFound: true,
    }
  }

  data = await getHomeData(apiUrl)

  videoShelves = await Promise.all(
    data.video_shelves.map(async (video_shelf: any) => {
      const videoData = await getVideos(video_shelf.videos, apiUrl)
      video_shelf.videos = videoData
      return video_shelf
    }),
  )

  return {
    props: { data, videoShelves },
  }
}

async function getHomeData(apiUrl: string) {
  const res = await fetch(`${apiUrl}/home`)
  const data = await res.json()
  handleFetchError(data, 'Error with Homepage request')
  return data
}

async function getVideos(videoIds: string[], apiUrl: string) {
  const videos = await Promise.all(
    videoIds.map(async (videoId) => {
      const res = await fetch(`${apiUrl}/videos/${videoId}`)
      const data = await res.json()
      handleFetchError(data, 'Error with Homepage videos request')
      return data
    }),
  )

  return videos
}
