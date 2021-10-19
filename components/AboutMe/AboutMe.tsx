import React, { FunctionComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import { AboutMeProps } from '@customTypes/AboutMeProps';

/* ToDo
 * Fix text placement on lg screens
 */

const AboutMe: FunctionComponent<AboutMeProps> = ({
  profileImage,
  aboutMeSections,
}) => {
  return (
    <div className="w-full">
      <div className="pt-4 pb-2 mx-auto text-2xl font-bold text-center font-Montserrat text-thunder lg:text-4xl">
        <h2>About Me</h2>
      </div>
      <div className="relative w-36 lg:w-48 h-0.5 mx-auto bg-thunder rounded-xl" />
      <div className="grid w-10/12 grid-cols-1 mx-auto mt-8 mb-8 lg:mt-16 lg:mb-16 lg:gap-y-10 lg:grid-cols-3 font-Montserrat">
        <div className="order-last w-4/5 max-w-sm mx-auto mt-10 lg:order-first lg:mx-0 lg:mt-0">
          <img className="shadow-2xl rounded-3xl" src={profileImage.url}></img>
        </div>

        <div className="space-y-4 lg:col-span-2">
          <h3 className="text-2xl font-semibold text-center lg:text-3xl text-irisBlue lg:text-left">
            {aboutMeSections[0].title}
          </h3>
          <ReactMarkdown className="text-sm text-justify lg:text-base">
            {aboutMeSections[0].descption}
          </ReactMarkdown>
        </div>

        <div className="mt-10 space-y-4 lg:col-span-3 lg:-mt-2 ">
          <h3 className="text-2xl font-semibold text-center lg:text-3xl text-irisBlue lg:text-left">
            {aboutMeSections[1].title}
          </h3>
          <ReactMarkdown className="text-sm text-justify lg:text-base">
            {aboutMeSections[1].descption}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
