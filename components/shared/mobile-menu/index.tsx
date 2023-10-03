import { HTMLAttributes } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faNewspaper,
  faVideo,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';

interface Props extends HTMLAttributes<HTMLElement> {
  handleClick: () => void;
}
function HamburgerMenu({ handleClick }: Props) {
  return <>

    <div className="-mx-3 pl-3 pr-1 pb-2 flex items-center justify-between border-b border-blue-900">
      Anjar
      <button
        onClick={handleClick}
        className="text-gray-700 lg:hidden"
        type="button"
      >
        <svg fill="none" viewBox="0 0 24 24" className="h-6 w-6">
          <path
            d="M6 18L18 6M6 6L18 18"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            stroke="currentColor"
          />
        </svg>
      </button>
    </div>

    <nav className="mt-3">
      <Link href="/">

        <div className="grid grid-cols-5 py-3 border-b border-blue-900">
          <div className="col-span-1 w-6 h-6">
            <FontAwesomeIcon icon={faHouse} size="lg" />
          </div>
          <div className="col-span-3">
            Beranda
          </div>
        </div>

      </Link>

      <Link href="/article">

        <div className="grid grid-cols-5 py-3 border-b border-blue-900">
          <div className="col-span-1 w-6 h-6">
            <FontAwesomeIcon icon={faNewspaper} size="lg" />
          </div>
          <div className="col-span-3">
            Article
          </div>
        </div>

      </Link>

      <Link href="/video">

        <div className="grid grid-cols-5 py-3 border-b border-blue-900">
          <div className="col-span-1 w-6 h-6">
            <FontAwesomeIcon icon={faVideo} size="lg" />
          </div>
          <div className="col-span-3">
            Video
          </div>
        </div>

      </Link>

      <Link href="/portfolio">

        <div className="grid grid-cols-5 py-3 border-b border-blue-900">
          <div className="col-span-1 w-6 h-6">
            <FontAwesomeIcon icon={faBriefcase} size="lg" />
          </div>
          <div className="col-span-3">
            Work
          </div>
        </div>

      </Link>
    </nav>
  </>;
}

export default HamburgerMenu;
