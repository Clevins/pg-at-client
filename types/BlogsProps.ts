import { BgImage, IHeroImage } from './HeroProps'

export interface IBlog {
  id: string
  title: string
  author: string
  upload_date: string
  description: string
  content: string
  read_time: string
  Hero: BgImage
  thumbnail: {
    url: string
  }
}

export interface IBlogsPageData {
  Blogs_Hero: IHeroImage
  latest_blogs: IBlog[]
  all_blogs: IBlog[]
}

export type BlogsProps = {
  blogs: IBlog[]
  showViewAllBtn?: boolean
}

export type BlogProps = {
  blog: IBlog
}

export type BlogsPageProps = {
  data: IBlogsPageData
}
