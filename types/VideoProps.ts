import { IHeroImage } from './HeroProps'

export interface IVideoShelf {
  id: string
  title: string
  videos: IVideo[]
}

export interface IVideo {
  author: string
  id: string
  title: string
  uploadDate: string
  video: {
    url: string
  }
  thumbnail: {
    url: string
  }
}

export interface IVideoPageData {
  Videos_Hero: IHeroImage
  video_shelves: IVideoShelf[]
  all_videos: IVideo[]
}

export type VideoShelvesProps = {
  videoShelves: IVideoShelf[]
  showViewAllBtn: boolean
}

export type VideoCardProps = {
  videoData: IVideo
}

export type VideoShelfProps = {
  videoShelfData: IVideoShelf
  showViewAllBtn: boolean
}

export type VideoPageProps = {
  data: IVideoPageData
  videoShelvesData: IVideoShelf[]
}

export type AllVideosProps = {
  all_videos: IVideo[]
}
