import { IAboutMeSection, IProfileImage } from './AboutMeSectionProps'

export interface IAboutMeData {
  Home_ProfileImage: IProfileImage
  Home_AboutMe: IAboutMeSection[]
}

export type AboutMeProps = {
  data: IAboutMeData
}
