import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from "react-icons/fa";
import styles from './themeSwitcher.module.css';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light' || savedTheme === 'dark') {
            setTheme(savedTheme);
            applyTheme(savedTheme);
        } else {
            const hour = new Date().getHours();
            const autoTheme = hour >= 6 && hour < 18 ? 'light' : 'dark';
            setTheme(autoTheme);
            applyTheme(autoTheme);
        }
    }, []);

    useEffect(() => {
        if (theme) {
            localStorage.setItem('theme', theme);
            applyTheme(theme);
        }
    }, [theme]);

    const applyTheme = (theme) => {
        document.documentElement.classList.remove('light-theme', 'dark-theme');
        document.documentElement.classList.add(`${theme}-theme`);
    };

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    if (!theme) return null;

    return (
            <button onClick={toggleTheme} className={styles.switcher__button}>
                {theme === 'light' ? (
                        <FaMoon stroke="#000" width={100} height={100} />
                ) : (
                        <FaSun stroke="#fff" width={40} height={40} />
                )}
            </button>
    );
};

export default ThemeSwitcher;
