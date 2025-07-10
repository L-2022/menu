import React from 'react';
import styles from './aboutPage.module.css';
import { FaHamburger, FaFish, FaIceCream } from 'react-icons/fa';
import { FaCanadianMapleLeaf } from "react-icons/fa6";

const WrapperPage = () => {
    return (
            <section id="about" className={styles.wrapper__section}>
                <div className={styles.wrapper__text_center}>
                    <h2 className={styles.wrapper__title}>The Virtual Table</h2>
                        <p className={styles.wrapper__intro}>
                        Welcome to <strong>The Virtual Table</strong>, a proudly Canadian eatery that brings bold flavors, seasonal ingredients, and a digital-first dining experience together.
                        Born in Toronto in 2021, we specialize in handcrafted dishes — from fresh juices and gourmet pizzas to wholesome breakfasts and premium meats.
                    </p>
                </div>

                <div className={styles.wrapper__grid}>
                    <div className={styles.wrapper__card}>
                        <FaCanadianMapleLeaf className={styles.wrapper__icon} />
                        <h3 className={styles.wrapper__card_title}>Canadian Spirit</h3>
                        <p className={styles.wrapper__card_text}>
                            We embrace Canada's diversity with a menu inspired by local produce, classic dishes, and cultural fusion — from coast to plate.
                        </p>
                    </div>

                    <div className={styles.wrapper__card}>
                        <FaHamburger className={styles.wrapper__icon} />
                        <h3 className={styles.wrapper__card_title}>From Brunch to Dinner</h3>
                        <p className={styles.wrapper__card_text}>
                            Discover comforting breakfasts, hearty sandwiches, fresh salads, and hand-tossed pizzas — crafted with passion and precision.
                        </p>
                    </div>

                    <div className={styles.wrapper__card}>
                        <FaFish className={styles.wrapper__icon} />
                        <h3 className={styles.wrapper__card_title}>Fresh from the Grill</h3>
                        <p className={styles.wrapper__card_text}>
                            Enjoy flame-grilled meats, trout, and seafood — responsibly sourced and perfectly seasoned for every taste.
                        </p>
                    </div>

                    <div className={styles.wrapper__card}>
                        <FaIceCream className={styles.wrapper__icon} />
                        <h3 className={styles.wrapper__card_title}>Sweet Moments</h3>
                        <p className={styles.wrapper__card_text}>
                            End your meal with signature desserts — from panna cotta to waffles and fresh fruit — all made in-house daily.
                        </p>
                    </div>
                </div>
            </section>
    );
};

export default WrapperPage;
