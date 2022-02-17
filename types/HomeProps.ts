import { IVideoShelf } from './VideoProps'
import { IBlog } from './BlogsProps'
import { IHeroImage, BgImage } from './HeroProps'
import { IServiceBgImage, IHomeService } from './ServiceProps'
import { ISocialLink } from './SocialsProps'
import { IAboutMeSection, IProfileImage } from './AboutMeSectionProps'

interface IHomeData {
  video_shelves: IVideoShelf[]
  latest_blogs: IBlog[]
  _id: string
  published_at: Date
  createdAt: Date
  updatedAt: Date
  Home_Hero: IHeroImage
  Home_Services: IHomeService[]
  Home_SocialLinks: ISocialLink[]
  Home_ServiceBgImage: IServiceBgImage
  Home_AboutMe: IAboutMeSection[]
  Home_ProfileImage: IProfileImage
  id: string
}
export type HomeProps = {
  data: IHomeData
  videoShelvesData: IVideoShelf[]
}
