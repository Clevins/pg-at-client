import React from 'react'
import { GetStaticProps } from 'next'
import Navbar from '@components/Navbar'
import Hero from '@components/Hero'
import AboutMe from '@components/AboutMe'
import Services from '@components/Services'
import Videos from '@components/Videos'
import Blogs from '@components/Blogs'
import Section from '@components/Section'

const env = process.env.NODE_ENV
const devApiUrl = 'http://localhost:1337'
const prodApiUrl = 'https://hidden-reef-22167.herokuapp.com'

console.log(process.env.NODE_ENV)

export default function Index({ data, videoShelves }: any) {
  return (
    <>
      <Navbar socialLinks={data.Home_SocialLinks} />
      <Hero
        deaktopHeroUrl={data.Home_Hero.desktopImage.url}
        mobileHeroUrl={data.Home_Hero.mobileImage.url}
      />
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
      <Blogs blogs={data.latest_blogs} />
      <Section title="Like What I Do?" subTitle="Sign Up To My Newsletter">
        <div className="flex flex-row mx-auto ">
          <input
            className="w-full px-4 py-2 mx-2 italic leading-tight text-gray-400 border-2 rounded appearance-none bg-bunker border-bunker focus:outline-none focus:bg-bunker focus:border-irisBlue"
            id="inline-full-name"
            type="email"
            value="Enter Your Email"
          />

          <button className="h-8 mx-2 my-1 text-white rounded w-36 lg:my-0 lg:h-10 bg-irisBlue hover:bg-darkTurquoise focus:outline-none">
            <p>Sign Up</p>
          </button>
        </div>
      </Section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let data,
    videoShelves = {}

  // try {
  const apiUrl = env === 'development' ? devApiUrl : prodApiUrl

  data = await getHomeData(apiUrl)

  videoShelves = await Promise.all(
    data.video_shelves.map(async (video_shelf: any) => {
      const videoData = await getVideos(video_shelf.videos, apiUrl)
      video_shelf.videos = videoData
      return video_shelf
    }),
  )

  // console.log(videoShelves)

  if (!data || !videoShelves) {
    return {
      notFound: true,
    }
  }
  // } catch (e) {
  //   return {
  //     notFound: true,
  //   }
  // }

  return {
    props: { data, videoShelves }, // will be passed to the page component as props
  }
}

//     `http://sub.peteguay-athletic-therapy.eu-west-1.elasticbeanstalk.com/home`,

async function getHomeData(apiUrl: string) {
  const res = await fetch(`${apiUrl}/home`)
  const data = await res.json()
  return data
}

async function getVideos(videoIds: string[], apiUrl: string) {
  const videos = await Promise.all(
    videoIds.map(async (videoId) => {
      const res = await fetch(`${apiUrl}/videos/${videoId}`)
      const json = await res.json()
      return json
    }),
  )

  return videos
}
