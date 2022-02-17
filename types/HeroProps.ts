export type HeroProps = {
  desktopImage: BgImage
  mobileImage: BgImage
  children: React.ReactNode
}

export interface IHeroImage {
  desktopImage: BgImage
  mobileImage: BgImage
  id: string
}

export interface BgImage {
  name: string
  alternativeText: string
  size: number
  width: number | null
  height: number | null
  url: string
  related: string[]
  createdAt: Date
  updatedAt: Date
  id: string
}
