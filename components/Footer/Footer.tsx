import Socials from '@components/Socials'
import { SocialsProps } from '@customTypes/SocialsProps'
import { getNavItems } from 'lib/getNavItems'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

const Footer: FC<SocialsProps> = ({ socialLinks }) => {
  const router = useRouter()

  const navItems = getNavItems(router.asPath)

  return (
    <footer className="w-full pt-5 pb-15 bg-cloudBurst">
      {/* Socials */}
      <div className="mx-auto w-60">
        <Socials socialLinks={socialLinks} />
      </div>

      {/* Nav Items */}
      <div>
        <ul className="flex flex-row flex-wrap justify-center w-auto h-auto mt-5 font-semibold list-none font-Montserrat">
          {navItems.map(({ name, url, active }) => (
            <li className="my-1" key={`${name}`}>
              <a
                href={`${url}`}
                className={`p-2 transition duration-300 ease-in-out outline-none opacity-75 cursor focus:outline-none hover:text-darkTurquoise text-sm
                    ${active && 'text-darkTurquoise'}`}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="pb-4 mt-5 text-sm font-bold text-center text-white opacity-75 font-Montserrat ">
        Designed and built by{' '}
        <a
          href="https://www.linkedin.com/in/cormac-levins-a152a8109"
          target="_blank"
          className="cursor-pointer text-darkTurquoise"
        >
          Cormac Levins
        </a>
      </p>
    </footer>
  )
}

export default Footer
