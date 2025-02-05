import { useTheme } from '@/context/theme-context';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        fixed top-6 right-6 p-2.5 rounded-full 
        transition-all duration-500 ease-in-out hover:scale-110
        ${theme === 'dark' 
          ? 'bg-white text-yellow-500 hover:bg-gray-100' 
          : 'bg-gray-900 text-white hover:bg-gray-800'
        }
      `}
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        {/* Sun Icon */}
        <div
          className={`
            absolute inset-0 transform transition-transform duration-500
            ${theme === 'dark' ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'}
          `}
        >
          <SunIcon className="w-5 h-5" />
        </div>
        
        {/* Moon Icon */}
        <div
          className={`
            absolute inset-0 transform transition-transform duration-500
            ${theme === 'dark' ? '-rotate-90 opacity-0' : 'rotate-0 opacity-100'}
          `}
        >
          <MoonIcon className="w-5 h-5" />
        </div>
      </div>
    </button>
  );
};