import React, { FC, ReactElement } from 'react'
import { GetStaticProps } from 'next'
import Hero from '@components/Hero'
import VideoShelves from '@components/VideoShelves'
import Layout from '@components/Layout'
import handleFetchError from 'lib/handleFetchError'
import { VideoPageProps } from '@customTypes/VideoProps'
import AllVideos from '@components/VideoShelves/AllVideos'

const env = process.env.NODE_ENV
const devApiUrl = 'http://localhost:1337'
const prodApiUrl = 'https://hidden-reef-22167.herokuapp.com'

console.log(process.env.NODE_ENV)

const Videos: FC<VideoPageProps> = ({ data, videoShelvesData }) => {
  console.log(data)
  return (
    <>
      <Hero
        desktopImage={data.Videos_Hero.desktopImage}
        mobileImage={data.Videos_Hero.mobileImage}
      >
        <div className="absolute text-center text-white transform -translate-x-1/2 font-Montserrat whitespace-nowrap -translate-y-1/3 top-2/4 left-1/2 ">
          <div className="text-4xl font-semibold lg:text-5xl text-shadow ">
            <h1>Videos</h1>
          </div>
        </div>
      </Hero>

      <VideoShelves videoShelves={videoShelvesData} showViewAllBtn={false} />

      <AllVideos all_videos={data.all_videos} />
    </>
  )
}

;(Videos as any).getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export const getStaticProps: GetStaticProps = async () => {
  let data,
    videoShelvesData = {}

  const apiUrl = env === 'development' ? devApiUrl : prodApiUrl

  data = await getAllVideoData(apiUrl)

  if (!data) {
    return {
      notFound: true,
    }
  }

  videoShelvesData = await Promise.all(
    data.video_shelves.map(async (video_shelf: any) => {
      const videoData = await getVideos(video_shelf.videos, apiUrl)
      video_shelf.videos = videoData
      return video_shelf
    }),
  )

  return {
    props: { data, videoShelvesData },
  }
}

async function getAllVideoData(apiUrl: string) {
  const res = await fetch(`${apiUrl}/all-videos`)
  const data = await res.json()
  handleFetchError(data, 'Error With All Videos Request')
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

export default Videos
