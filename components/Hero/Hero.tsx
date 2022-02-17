import React, { FunctionComponent } from 'react'
import { HeroProps } from '@customTypes/HeroProps'
import useWindowDimensions from '../../lib/getWindowDimensions'

const Hero: FunctionComponent<HeroProps> = ({
  desktopImage,
  mobileImage,
  children,
}) => {
  const windowDimensions = useWindowDimensions()
  const heroImageUrl =
    windowDimensions.width! >= 768 ? desktopImage.url : mobileImage.url
  return (
    <div className="relative w-full bg-black ">
      <img src={heroImageUrl} className="z-0 w-screen opacity-50" />
      {children}
    </div>
  )
}

export default Hero
