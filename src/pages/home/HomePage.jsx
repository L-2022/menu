import React from 'react';
import { Link } from 'react-router-dom';
import styles from './homePage.module.css';
import {FaInstagram, FaTelegram, FaWhatsapp} from "react-icons/fa";

const HomePage = () => {

    const socialLinks = [
        {
            id: 'instagram',
            icon: <FaInstagram />,
            url: 'https://www.instagram.com/',
        },
        {
            id: 'whatsapp',
            icon: <FaWhatsapp />,
            url: 'https://www.whatsapp.com',
        },
        {
            id: 'telegram',
            icon: <FaTelegram />,
            url: 'https://t.me/TORassembly',
        },
    ];
    const menus = [
        {
            path: '/example-1',
            title: 'Digital Menu (Version 1)',
            description: 'A modern digital menu with categories, filters, and interactivity.',
            external: false,
        },
        {
            path: '/example-2',
            title: 'Simple Menu (Version 2)',
            description: 'A minimalist menu for quick browsing and ordering.',
            external: false,
        },
        {
            path: 'https://mamamanana.com.ua/en/kyiv',
            title: 'Mama Manana',
            description: 'Elegant digital menu from a Georgian cuisine restaurant.',
            external: true,
        },
        {
            path: 'https://expz.menu/2acd9ebe-d60b-4bc7-97bc-b1e50daaddee',
            title: 'Expz Menu',
            description: 'Modern web menu for food service businesses.',
            external: true,
        },
        {
            path: 'https://www.ragu.fi',
            title: 'Ragu Restaurant',
            description: 'Scandinavian fine dining digital menu.',
            external: true,
        },
        {
            path: 'https://vasylbiliak.github.io/portfolio/',
            title: 'Portfolio',
            description: 'See more of my work — websites, menus, and web apps.',
            external: true,
        }
    ];

    const contacts = [
        { href: 'https://t.me/WhiteVasya', label: 'Telegram' },
        { href: 'mailto:bilyak7vasya@gmail.com', label: 'bilyak7vasya@gmail.com' },
        { href: 'https://www.linkedin.com/in/vasyl-biliak-developer', label: 'LinkedIn' },
        { href: 'https://x.com/vasyl_biliak', label: 'X (Twitter)' },
        { href: 'https://www.facebook.com/profile.php?id=100010348604050', label: 'Facebook' },
    ];

    return (
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Choose a Menu Version</h1>

                <div className={styles.menuList}>
                    {menus.map((menu, index) => (
                            menu.external ? (
                                    <a
                                            key={index}
                                            href={menu.path}
                                            className={styles.menuCard}
                                            target="_blank"
                                            rel="noreferrer"
                                    >
                                        <h2 className={styles.menuTitle}>{menu.title}</h2>
                                        <p className={styles.menuDescription}>{menu.description}</p>
                                    </a>
                            ) : (
                                    <Link key={index} to={menu.path} className={styles.menuCard}>
                                        <h2 className={styles.menuTitle}>{menu.title}</h2>
                                        <p className={styles.menuDescription}>{menu.description}</p>
                                    </Link>
                            )
                    ))}
                </div>


                <div className={styles.presentation}>
                    <h2 className={styles.title}>Hello,</h2>
                    <p>
                        My name is Vasyl. I’m a web developer with 3 years of experience in creating fast, responsive websites.
                        Originally from Ukraine, I currently live and work in Toronto.
                    </p>
                    <p>
                        I specialize in developing custom online menus with QR codes for restaurants, cafes, and food service
                        businesses. These menus are mobile-optimized, easy to manage, and designed to enhance both customer experience
                        and business operations.
                    </p>

                    <h2 className={styles.title}>What is a QR Menu?</h2>
                    <p>
                        A QR menu is a digital version of your restaurant’s menu. Customers scan a QR code placed on tables or signage
                        using their phone camera — and the menu opens instantly in their browser.
                    </p>
                    <p>
                        If desired, I can also develop a mobile app version available on the App Store and Google Play.
                    </p>

                    <h2 className={styles.title}>Key Business Benefits</h2>
                    <ul>
                        <li>Faster Service — average order time is reduced by 30–50%</li>
                        <li>Cost Savings — 100% savings on printed menus and redesigns</li>
                        <li>Real-Time Updates — add, remove, or change menu items instantly</li>
                        <li>Always Accessible — no need to wait for a physical menu or share among a large group</li>
                        <li>Queue Optimization — staff can offer QR codes to waiting customers, reducing walkaways by 25–40%</li>
                        <li>Increased Orders — visual browsing increases appetite, boosting average check size by 20–30%</li>
                    </ul>

                    <h2 className={styles.title}>Additional Features</h2>
                    <ul>
                        <li>Promotional blocks such as “Dish of the Week”, “Combo Offers”, or “Featured Specials”</li>
                        <li>Multilingual menu support</li>
                        <li>Buttons for direct ordering, calls, or online payment</li>
                    </ul>

                    <h2 className={styles.title}>Perfect for</h2>
                    <ul>
                        <li>Restaurants and cafes</li>
                        <li>Food trucks and outdoor dining</li>
                        <li>Delivery services</li>
                        <li>Food court vendors</li>
                    </ul>
                    <p>
                        If you’re looking to implement a digital menu or update an outdated one, I’d be happy to help.
                        I’ll deliver a tailored, high-quality solution that aligns with your brand and workflow.
                    </p>
                </div>

                <footer className={styles.container}>
                    <div className={styles.columnsWrapper}>
                        <div className={styles.column}>
                            <p className={styles.text}>To contact me</p>
                            <ul className={styles.socialList}>
                                {socialLinks.map((link) => (
                                        <li key={link.id} className={styles.socialItem}>
                                            <a
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={styles.socialLink}
                                            >
                                                {link.icon}
                                            </a>
                                        </li>
                                ))}
                            </ul>
                            <ul className={styles.socialList}>
                                <li  className={styles.socialItem}>
                                </li>
                            </ul>
                        </div>
                        <p className={styles.text} >Best regards,<br />Vasyl</p>
                    </div>
                </footer>
            </div>
    );
};

export default HomePage;
