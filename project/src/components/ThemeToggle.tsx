import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { cn } from '../lib/utils';

export const ThemeToggle = () => {
    const [isLightMode, setIsLightMode] = useState(true);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'light') {
            document.documentElement.classList.add('light');
            setIsLightMode(true);
        } else {
            document.documentElement.classList.remove('light');
            setIsLightMode(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isLightMode) {
            document.documentElement.classList.remove('light');
            localStorage.setItem('theme', 'dark');
            setIsLightMode(false);
        } else {
            document.documentElement.classList.add('light');
            localStorage.setItem('theme', 'light');
            setIsLightMode(true);

        }
    };


    return (
        <button
        onClick={toggleTheme}
        className={cn(
            'fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300',
            'focus:outline-hidden'
        )}
        >
            {isLightMode ? (
                <Moon className="w-6 h-6 text-blue-900" />
            ) : (
                <Sun className="w-6 h-6 text-yellow-400" />
            )}
        </button>
    )
}