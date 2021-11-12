import { useState, useRef } from 'react';
import HamburgerMenu from 'components/shared/mobile-menu';
import useClickAway from 'hooks/click-away';

const HamburgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = 'h-0.5 w-5 my-0.5 rounded-full bg-gray-700 transition ease transform duration-300';

  const handleClick = () => {
    setIsOpen(false);
  };
  const wrapperRef = useRef(null);
  useClickAway(wrapperRef, handleClick);

  return (
    <div ref={wrapperRef}>
      <button
        className="flex flex-col h-8 w-8 rounded justify-center items-center group"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <div
          className={genericHamburgerLine}
        />
        <div
          className={genericHamburgerLine}
        />
        <div
          className={genericHamburgerLine}
        />
      </button>

      <div
        className={`
          fixed z-50 inset-y-0 left-0 w-9/12 px-3 py-4 bg-gray-100 dark:bg-gray-900
          overflow-auto lg:static  lg:inset-auto lg:translate-x-0 
          transform duration-500 ${
                    isOpen
                      ? 'translate-x-0 ease-out transition-medium'
                      : '-translate-x-full ease-in transition-medium'
                  }`}
      >
        <HamburgerMenu handleClick={handleClick} />
      </div>

    </div>
  );
};

export default HamburgerButton;
