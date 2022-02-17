import React, { FC } from 'react'
import ReactPlayer from 'react-player/lazy'
import { VideoCardProps } from '@customTypes/VideoProps'
import PlayIcon from '@icons/play.svg'

const VideoCard: FC<VideoCardProps> = ({ videoData }) => {
  const { video, thumbnail, title, author, uploadDate } = videoData

  const PlayBtn = () => {
    return (
      <div className="relative">
        <button className="w-16 h-16 text-white transition duration-300 ease-in-out outline-none fill-current cursor focus:outline-none hover:text-darkTurquoise">
          <PlayIcon />
        </button>
      </div>
    )
  }

  return (
    <div>
      <div className="aspect-w-16 aspect-h-9">
        <ReactPlayer
          url={video.url}
          controls
          width="100%"
          height="100%"
          light={thumbnail.url}
          playIcon={PlayBtn()}
          playing
        />
        {console.log(videoData)}
      </div>
      <div className="flex flex-col font-Montserrat">
        <h4 className="text-base font-semibold lg:text-lg">{title}</h4>
        <h2 className="text-sm italic font-medium lg:text-base text-irisBlue">
          By {author} - {uploadDate}
        </h2>
      </div>
    </div>
  )
}

export default VideoCard
