import {
  useEffect, RefObject,
} from 'react';

const useClickAway = (ref: RefObject<HTMLElement>, handleClick: () => void): void => {
  useEffect(() => {
    /**
       * Alert if clicked on outside of element
       */
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        handleClick();
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
};

export default useClickAway;
