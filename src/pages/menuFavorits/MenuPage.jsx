import React from 'react';
import AboutPage from './components/about';
import MenuList from './components/MenuList';
import ContactUs from "./components/contactUs/index.js";
import ContactInfo from "./components/contactInfo";
import SelectedService from "./components/selectedService/index.js";
import styles from './menu.module.css';

const menuPageEx1 = () => {

    return (
            <div className={styles.wrapper}>
                <section id="menu" className={styles.services}>
                    <MenuList/>
                </section>
                <section id="about" className={styles.about}>
                    <AboutPage />
                </section>
                <section id="contact" className={styles.contact_us}>
                    <ContactUs />
                </section>
                {/*<section id="contact" className={styles.contact_info}>*/}
                {/*    <ContactInfo />*/}
                {/*</section>*/}
                <section id="selected" className={styles.selected_services}>
                    <SelectedService />
                </section>
            </div>
    );
};

export default menuPageEx1;
