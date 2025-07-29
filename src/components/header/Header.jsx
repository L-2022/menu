import React, { useState, useEffect, useRef } from 'react';
import ThemeSwitcher from '../themeSwitcher';
import styles from './Header.module.css';
import { menuData, navBtn } from '../../pages/menuFavorits/data/menuData.js';
import TableReservation from '../../pages/menuFavorits/components/tableReservation';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isReservationOpen, setIsReservationOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const prevScrollPosRef = useRef(window.scrollY);

    const categories = menuData.map(({ category }) => ({ id: category, label: category }));

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleResize = () => {
        if (window.innerWidth > 767) {
            setIsMenuOpen(false);
        }
    };

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        const prevScrollPos = prevScrollPosRef.current;

        if (currentScrollPos < 20) {
            setVisible(true);
        } else if (currentScrollPos > prevScrollPos) {
            setVisible(false); // скрол вниз
            setIsMenuOpen(false);
        } else {
            setVisible(true); // скрол вгору
        }

        prevScrollPosRef.current = currentScrollPos;
    };

    const handleAnyClick = (id) => {
        setIsMenuOpen(false);
        setTimeout(() => {
            const section = document.getElementById(id);
            if (window.scrollY > 1) {
                setVisible(false);
            } else {
                setVisible(true);
            }
            if (section) {
                const header = document.querySelector('header');
                const headerHeight = header ? header.offsetHeight : 0;
                const offsetTop = section.getBoundingClientRect().top + window.scrollY - headerHeight;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth',
                });
            }
        }, 250);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
            <>
                <header className={`${styles.header} ${!visible ? styles.header__hidden : ''}`}>
                    <div className={styles.container}>
                        <div className={styles.header__inner_left}>
                            <div className={styles.header__logo}>
                                <p className={styles.logo}>The Virtual Table</p>
                            </div>
                        </div>

                        <button className={styles.burger} onClick={toggleMenu} aria-label="Toggle menu">
                            {isMenuOpen ? '✕' : '☰'}
                        </button>

                        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
                            <div className={styles.menuGrid}>
                                {isMenuOpen && (
                                        <div className={styles.filtersColumn}>
                                            <ul className={styles.navList}>
                                                {categories.map(({ id, label }) => (
                                                        <li key={id}>
                                                            <button
                                                                    className={styles.filter_button}
                                                                    onClick={() => handleAnyClick(id)}
                                                            >
                                                                {label}
                                                            </button>
                                                        </li>
                                                ))}
                                            </ul>
                                        </div>
                                )}

                                <div className={styles.navColumn}>
                                    <ul className={styles.navList}>
                                        <li className={styles.wrapper__theme_switcher} onClick={() => setIsMenuOpen(false)}>
                                            <ThemeSwitcher />
                                        </li>

                                        {navBtn.map(({ id, label }) => (
                                                <li key={id}>
                                                    <button onClick={() => handleAnyClick(id)}>{label}</button>
                                                </li>
                                        ))}

                                        <li>
                                            <button
                                                    onClick={() => {
                                                        setIsMenuOpen(false);
                                                        setIsReservationOpen(true);
                                                    }}
                                            >
                                                Reserve
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>

                <TableReservation isOpen={isReservationOpen} onClose={() => setIsReservationOpen(false)} />
            </>
    );
};

export default Header;
