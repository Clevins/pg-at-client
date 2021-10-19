import React, { FC } from 'react'
import { VideoShelfProps, IVideo } from '@customTypes/VideoProps'
import VideoCard from '@components/Videos/VideoCard'
import ArrowIcon from '@icons/arrow.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper/core'

import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'

// install Swiper modules
SwiperCore.use([Pagination, Navigation])

const VideoShelf: FC<VideoShelfProps> = ({ videoShelfData }) => {
  const { id, title, videos } = videoShelfData
  return (
    <div className="w-10/12 mx-auto mt-8 mb-8 lg:mt-16 lg:mb-16" key={id}>
      <div className="flex flex-row flex-wrap items-center justify-between w-full mb-4 lg:mb-8">
        <div className="text-2xl font-normal text-center lg:text-3xl text-cloudBurst lg:text-left">
          <h3 className="">{title}</h3>
        </div>
        <div className="flex flex-row items-center justify-around outline-none text-darkTurquoise">
          <a
            href="/"
            className="text-xl font-light font-Montserrat text-darkTurquoise"
          >
            <h3>View All</h3>
          </a>
          <div className={`ml-4 hidden sm:block swiper-button-prev-${id}`}>
            <button className="w-8 h-8 mt-1 outline-none fill-current focus:outline-none">
              <ArrowIcon />
            </button>
          </div>
          <div className={`ml-4 hidden sm:block swiper-button-next-${id}`}>
            <button className="w-8 h-8 mt-1 transform rotate-180 fill-current focus:outline-none ">
              <ArrowIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            200: {
              slidesPerView: 1.25,
              spaceBetween: 15,
            },
          }}
          loop={false}
          loopFillGroupWithBlank={true}
          navigation={{
            nextEl: `.swiper-button-next-${id}`,
            prevEl: `.swiper-button-prev-${id}`,
          }}
        >
          {videos.map((video: IVideo) => {
            return (
              <SwiperSlide key={video.id}>
                <VideoCard videoData={video} />
              </SwiperSlide>
            )
          })}
        </Swiper>
        <div className="relative w-full h-px mx-auto mt-10 opacity-30 bg-thunder rounded-xl" />
      </div>
    </div>
  )
}

export default VideoShelf
