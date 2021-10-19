import React, { FunctionComponent } from 'react';
import classes from './Services.module.css';
import type { ServicesProps, IHomeService } from '@customTypes/ServiceProps';

/* ToDo
 * Add in Mobile Image
 */

const Services: FunctionComponent<ServicesProps> = ({
  servicesBgImage,
  homeServices,
}) => {
  return (
    <div
      className={classes.service__background}
      style={{ backgroundImage: `url(${servicesBgImage.url})` }}
    >
      <div className="relative pt-4 pb-2 mx-auto text-2xl font-semibold text-center text-white font-Montserrat lg:text-4xl">
        <h2>Services</h2>
      </div>
      <div className="relative w-32 lg:w-48 h-0.5 mx-auto bg-white rounded-xl" />
      <div className="relative flex flex-row flex-wrap pt-5 pb-5 mx-auto justify-evenly">
        {homeServices.map((service: IHomeService) => {
          return (
            <div
              key={service.id}
              className="flex flex-row items-center w-5/6 my-4 font-light text-white lg:flex-col lg:justify-start lg:w-56 font-Montserrat justify-evenly"
            >
              <img src={service.icon.url} className="w-20 " />
              <p className="w-full px-4 text-center lg:py-8 ">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
