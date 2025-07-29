import styles from './HamburgerButton.module.css';

const Hamburger = ({ isOpen, toggle }) => (
        <button id="hamburger-button" className={styles.hamburger} onClick={toggle} aria-label="Toggle menu">
            <div id="burger-bar1" className={`${styles.burger_bar} ${isOpen ? styles.hamburger_animation1 : ''}`} />
            <div id="burger-bar2" className={`${styles.burger_bar} ${isOpen ? styles.hamburger_animation2 : ''}`} />
            <div id="burger-bar3" className={`${styles.burger_bar} ${isOpen ? styles.hamburger_animation3 : ''}`} />
        </button>
);

export default Hamburger;
