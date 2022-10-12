import Link from 'next/link';
import { getSiteMetaData } from 'lib/site-config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faInstagram, faGithub, faLinkedinIn, faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';
import HamburgerButton from 'components/shared/hamburger-menu';
import dynamic from 'next/dynamic';

const DarkModeButton = dynamic(() => import('./dark-mode-button'), {
  ssr: false,
});

function Header() {
  const siteConfig = getSiteMetaData();

  return (
    <div className="w-full mb-2 md:mb-6 bg-gray-100 dark:bg-gray-600 sticky -top-px z-50 border-b border-gray-300 dark:border-gray-800">
      <nav className="w-full md:max-w-5xl mx-auto grid grid-cols-7 py-3">
        <div className="md:hidden col-span-5">
          <HamburgerButton />
        </div>
        <div className="hidden md:block md:col-span-5">
          <ul className="md:flex">

            <li className="py-1 transition-all duration-400 transform cursor-pointer rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
              <Link href="/">
                <a className="px-4">Home</a>
              </Link>
            </li>

            <li className="py-1 transition-all duration-400 transform cursor-pointer rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
              <Link href="/article">
                <a className="px-4  tracking-widest leading-5">Article</a>
              </Link>
            </li>
            <li className="py-1 transition-all duration-400 transform cursor-pointer rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
              <Link href="/">
                <a className="px-4 tracking-widest leading-5">Work</a>
              </Link>
            </li>

          </ul>
        </div>
        <div className="col-span-2 pr-2 md:px-1 ">
          <div className="flex justify-end">
            <div className="">
              <DarkModeButton />
            </div>
          </div>

        </div>
        {/*
          <div className="hidden md:block md:relative w-full mx-auto col-span-2">
            <input
              className=" w-full border-none bg-green-300 pr-10 placeholder-gray-300 text-white h-10 px-5 rounded-lg text-sm focus:ring-0"
              type="search"
              name="search"
              placeholder="Search here..."
            />
            <button type="submit" className="absolute right-0 -top-2 mt-5 mr-4">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white" />
            </button>
          </div> */}

      </nav>
    </div>
  );
}

export default Header;
