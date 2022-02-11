import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMoon, faSun,
} from '@fortawesome/free-solid-svg-icons';
import { useTheme } from 'next-themes';

function DarkModeButton() {
  const { theme, setTheme } = useTheme();
  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button type="button" className="px-2 border rounded-lg border-gray-300 dark:border-gray-500" onClick={handleClick}>
      {theme === 'dark'
        ? <FontAwesomeIcon icon={faSun} size="1x" />
        : <FontAwesomeIcon icon={faMoon} size="1x" className="text-gray-700" />}
    </button>
  );
}

export default DarkModeButton;
