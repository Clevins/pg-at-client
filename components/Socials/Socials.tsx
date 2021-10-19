import React, { FunctionComponent } from 'react';
import type { SocialsProps, ISocialLink } from '@customTypes/SocialsProps';

/* ToDo
 * Fix Youtube Icon
 */

const Socials: FunctionComponent<SocialsProps> = ({ socialLinks }) => {
  return (
    <ul className="flex flex-row content-center mt-2 lg:justify-end lg:mt-0">
      {socialLinks.map((socialLink: ISocialLink) => {
        const { id, url, name, icon } = socialLink;
        return (
          <li
            key={id}
            className="items-center w-6 h-auto m-2 transition duration-300 ease-in-out opacity-70 hover:opacity-100 "
          >
            <a href={url} className="self-center text-white ">
              <img src={icon.url} alt={name} className="" />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
