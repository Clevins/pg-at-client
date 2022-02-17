export interface IAboutMeSection {
  id: string
  title: string
  descption: string
}

export interface IProfileImage {
  url: string
}

export type AboutMeSectionProps = {
  profileImage: IProfileImage
  aboutMeSections: IAboutMeSection[]
}
