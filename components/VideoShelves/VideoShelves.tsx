import React, { FC } from 'react'
import { VideoShelvesProps } from '@customTypes/VideoProps'
import VideoShelf from '@components/VideoShelves/VideoShelf'

const VideoShelves: FC<VideoShelvesProps> = ({
  videoShelves,
  showViewAllBtn,
}) => {
  return (
    <div className="w-full">
      <div className="pt-4 pb-2 mx-auto text-2xl font-bold text-center lg:pt-8 font-Montserrat text-thunder lg:text-4xl">
        <h2>Popular Videos</h2>
      </div>
      <div className="relative w-36 lg:w-80 h-0.5 mx-auto bg-thunder rounded-xl" />
      <div className="w-full">
        {videoShelves.map((videoShelf) => {
          return (
            <VideoShelf
              videoShelfData={videoShelf}
              key={videoShelf.id}
              showViewAllBtn={showViewAllBtn}
            />
          )
        })}
      </div>
    </div>
  )
}
export default VideoShelves
