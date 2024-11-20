'use client'
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext'; // Named import 사용

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme}>
            {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>
    );
};

export default ThemeToggleButton;
