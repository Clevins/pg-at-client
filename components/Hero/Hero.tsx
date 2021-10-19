import React, { FunctionComponent } from 'react';

import useWindowDimensions from '../../lib/getWindowDimensions';

type HeroProps = {
  deaktopHeroUrl: string;
  mobileHeroUrl: string;
};

const Hero: FunctionComponent<HeroProps> = ({
  deaktopHeroUrl,
  mobileHeroUrl,
}) => {
  const windowDimensions = useWindowDimensions();
  const heroImageUrl =
    windowDimensions.width! >= 768 ? deaktopHeroUrl : mobileHeroUrl;

  return (
    <div className="relative w-full bg-black ">
      <img src={heroImageUrl} className="z-0 w-screen opacity-50" />

      <div className="absolute text-center text-white transform -translate-x-1/2 font-Montserrat whitespace-nowrap -translate-y-1/3 top-1/3 left-1/2 ">
        <div className="text-4xl font-semibold lg:text-5xl text-shadow ">
          <h1>Pete Guay</h1>
        </div>
        <div className="mt-1 text-3xl font-normal lg:text-4xl text-darkTurquoise">
          <h2>Atletic Therapy</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
