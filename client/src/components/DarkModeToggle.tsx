import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={toggleTheme}
        className="p-3 bg-white dark:bg-darkslate rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
        aria-label="Toggle dark mode"
      >
        {theme === 'light' ? (
          <Sun className="w-5 h-5 text-yellow-500" />
        ) : (
          <Moon className="w-5 h-5 text-accent" />
        )}
      </button>
    </div>
  );
}
