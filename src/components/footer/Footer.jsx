import React from 'react';
import styles from './footer.module.css';
import { FaInstagram, FaWhatsapp, FaTelegram } from 'react-icons/fa';

const Footer = () => {
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

    return (
            <footer className={styles.container}>
                <div className={styles.columnsWrapper}>
                    <div className={styles.column}>
                        <p className={styles.text}>Follow us:</p>
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
                            <li className={styles.telItem}>
                                <a href="tel:+14378760001">+1 437 876-0001</a>
                                <a href="tel:+14378760001">+1 437 876-0001</a>
                            </li>
                            <li  className={styles.socialItem}>


                            </li>

                        </ul>
                    </div>
                    <div className={styles.column}>
                        <p className={styles.text}>We are here:</p>
                        <iframe
                                className={styles.map}
                                src="https://maps.google.com/maps?q=Toronto&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                allowFullScreen
                                loading="lazy"
                                title="Location Map"
                        />
                        {/*<p className={styles.address}>Toronto, Canada</p>*/}
                    </div>
                    <div className={styles.column}>
                        <p className={styles.text}>Working Hours:</p>
                        <ul className={styles.workingHours}>
                            <li>Mon–Fri: 10:00 – 20:00</li>
                            <li>Sat: 11:00 – 18:00</li>
                            <li>Sun: 10:00 – 18:00</li>
                        </ul>
                    </div>


                </div>

                <p className={styles.copyright}>
                    &copy; {new Date().getFullYear()} TOR Assembly. All rights reserved.
                </p>
            </footer>
    );
};

export default Footer;
