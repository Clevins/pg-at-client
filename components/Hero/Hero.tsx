import React, { FunctionComponent } from 'react'
import { HeroProps } from '@customTypes/HeroProps'
import useWindowDimensions from '../../lib/getWindowDimensions'

const Hero: FunctionComponent<HeroProps> = ({
  deaktopHeroUrl,
  mobileHeroUrl,
  children,
}) => {
  const windowDimensions = useWindowDimensions()
  const heroImageUrl =
    windowDimensions.width! >= 768 ? deaktopHeroUrl : mobileHeroUrl

  return (
    <div className="relative w-full bg-black ">
      <img src={heroImageUrl} className="z-0 w-screen opacity-50" />
      {children}
    </div>
  )
}

export default Hero
