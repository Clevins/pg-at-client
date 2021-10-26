import React, { FunctionComponent } from 'react'
import { SectionProps } from '@customTypes/SectionProps'

const Section: FunctionComponent<SectionProps> = ({
  title,
  subTitle,
  children,
}) => {
  return (
    <div className="w-full pt-20 pb-24 bg-cloudBurst">
      <h1 className="pb-4 text-2xl font-bold text-center text-white font-Montserrat lg:text-4xl">
        {title}
      </h1>
      <h2 className="pb-5 text-lg font-semibold text-center text-irisBlue font-Montserrat lg:text-xl">
        {subTitle}
      </h2>
      <div className="flex">{children}</div>
    </div>
  )
}

export default Section
