import React, { FunctionComponent } from 'react'
import Logo from '@logos/logo.svg'
import MenuIcon from '@icons/menu.svg'
import { useRouter } from 'next/router'
import Socials from '@components/Socials'
import { SocialsProps } from '@customTypes/SocialsProps'
import { getNavItems, isNavSolid } from 'lib/getNavItems'

/* ToDo
 * Fix animation on mobile screens.
 * Fix Loading Link colors
 * Abstract Props to type folder
 */
const Navbar: FunctionComponent<SocialsProps> = ({ socialLinks }) => {
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false)

  const router = useRouter()

  const navItems = getNavItems(router.asPath)

  // const hasSolidNav = isNavSolid(router.asPath)
  console.log(isNavSolid(router.asPath))
  return (
    <header
      className={` z-10 flex flex-row  justify-between overflow-hidden w-full transition-all duration-500 ease-out text-white lg:justify-between 
      ${mobileNavOpen ? ' h-72 bg-cloudBurst relative ' : ' h-14 absolute'}
      ${isNavSolid(router.asPath) ? 'bg-cloudBurst relative' : 'absolute'}  `}
    >
      <div className="flex flex-col justify-start lg:items-center lg:w-full lg:justify-between lg:flex-row">
        {/* Logo */}
        <div className="p-2 w-44">
          <a href="/">
            <Logo />
          </a>
        </div>

        {/* Nav Items */}
        <div>
          <ul className="flex flex-col h-auto mt-4 font-bold list-none justify-evenly lg:flex-row lg:mt-0 font-Montserrat">
            {navItems.map(({ name, url, active }) => (
              <li className="my-1" key={`${name}`}>
                <a
                  href={`${url}`}
                  className={`p-2 transition duration-300 ease-in-out outline-none cursor focus:outline-none hover:text-darkTurquoise 
                    ${active && 'text-darkTurquoise'} 
                    ${!mobileNavOpen && ''} `}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div className="pr-2 w-44">
          <Socials socialLinks={socialLinks} />
        </div>
      </div>

      {/* Mobile Menu Btn */}
      <div>
        <button
          className={` outline-none focus:outline-none transition-all duration-500 ease-out cursor-auto  ${
            mobileNavOpen ? ' transform -rotate-90 ' : ''
          }   w-8 h-8 mx-4 mt-3 lg:hidden`}
          type="button"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          <MenuIcon />
        </button>
      </div>
    </header>
  )
}

export default Navbar
