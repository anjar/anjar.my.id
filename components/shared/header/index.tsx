import Link from 'next/link';
import { getSiteMetaData } from 'lib/site-config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faInstagram, faGithub, faLinkedinIn, faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';
import HamburgerButton from 'components/shared/hamburger-menu';
import dynamic from 'next/dynamic';

const DarkModeButton = dynamic(() => import('./dark-mode-button' /* webpackChunkName: "dark-mode-button" */), {
  ssr: false,
});

const Header = () => {
  const siteConfig = getSiteMetaData();

  return (
    <>
      <div className="w-full mb-2 md:mb-6 bg-gray-100 dark:bg-gray-600 sticky -top-px z-50 border-b border-gray-300 dark:border-gray-800">
        <nav className="w-full md:max-w-screen-lg mx-auto grid grid-cols-7 py-3">
          <div className="md:hidden col-span-5">
            <HamburgerButton />
          </div>
          <div className="hidden md:block md:col-span-5">
            <ul className="md:flex">

              <li className="px-4 py-1 transition-all duration-400 transform cursor-pointer rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
                <Link href="/">
                  <a className="">Home</a>
                </Link>
              </li>

              <li className="px-4 py-1 transition-all duration-400 transform cursor-pointer rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
                <Link href="/article">
                  <a className="tracking-widest leading-5">Article</a>
                </Link>
              </li>
              <li className="px-4 py-1 transition-all duration-400 transform cursor-pointer rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
                <Link href="/">
                  <a className="tracking-widest leading-5">Work</a>
                </Link>
              </li>

            </ul>
          </div>
          <div className="col-span-2 pr-2 md:px-1 ">

            <div className="flex justify-end md:justify-between">
              <div className="hidden md:grid md:grid-cols-5 gap-2">
                {siteConfig?.social?.facebook
                  && (
                  <a href={`https://www.facebook.com/${siteConfig?.social?.facebook}`} target="_blank" rel="nofollow noreferrer">
                    <FontAwesomeIcon icon={faFacebookSquare} fontSize="1.5rem" className="hover:text-gray-500 dark:hover:text-gray-800" />
                  </a>
                  )}

                {siteConfig?.social?.twitter
                  && (
                  <a href={`https://www.twitter.com/${siteConfig?.social?.twitter}`} target="_blank" rel="nofollow noreferrer">
                    <FontAwesomeIcon icon={faTwitter} fontSize="1.5rem" className="hover:text-gray-500 dark:hover:text-gray-800" />
                  </a>
                  )}

                {siteConfig?.social?.instagram
                  && (
                  <a href={`https://www.instagram.com/${siteConfig?.social?.instagram}`} target="_blank" rel="nofollow noreferrer">
                    <FontAwesomeIcon icon={faInstagram} fontSize="1.5rem" className="hover:text-gray-500 dark:hover:text-gray-800" />
                  </a>
                  )}

                {siteConfig?.social?.linkedin
                  && (
                  <a href={`https://www.linkedin.com/in/${siteConfig?.social?.linkedin}`} target="_blank" rel="nofollow noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} fontSize="1.5rem" className="hover:text-gray-500 dark:hover:text-gray-800" />
                  </a>
                  )}

                {siteConfig?.social?.github
                  && (
                  <a href={`https://www.github.com/${siteConfig?.social?.github}`} target="_blank" rel="nofollow noreferrer">
                    <FontAwesomeIcon icon={faGithub} fontSize="1.5rem" className="hover:text-gray-500 dark:hover:text-gray-800" />
                  </a>
                  )}
              </div>
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

    </>
  );
};

export default Header;
