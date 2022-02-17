import React, { FunctionComponent } from 'react'
import { AllVideosProps } from '@customTypes/VideoProps'
import VideoShelf from './VideoShelf'

const AllVideos: FunctionComponent<AllVideosProps> = ({ all_videos }) => {
  console.log(all_videos)

  const allVideoShelf = {
    id: 'all_video_shelf',
    title: 'All Videos',
    videos: all_videos,
  }

  return (
    <div className="w-full">
      <div className="pt-4 pb-2 mx-auto text-2xl font-bold text-center lg:pt-8 font-Montserrat text-thunder lg:text-4xl">
        <h2>All Videos</h2>
      </div>
      <div className="relative w-36 lg:w-80 h-0.5 mx-auto bg-thunder rounded-xl" />
      <div className="w-full">
        <VideoShelf
          videoShelfData={allVideoShelf}
          key={allVideoShelf.id}
          showViewAllBtn={false}
        />
      </div>
    </div>
  )
}
export default AllVideos
