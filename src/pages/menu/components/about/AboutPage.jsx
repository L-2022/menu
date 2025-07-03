import React from 'react';
import styles from './aboutPage.module.css';
import { FaHamburger, FaFish, FaIceCream } from 'react-icons/fa';
import { FaCanadianMapleLeaf } from "react-icons/fa6";

const WrapperPage = () => {
    return (
            <section id="about" className={styles.wrapper__section}>
                <div className={styles.wrapper__text_center}>
                    <h2 className={styles.wrapper__title}>The Virtual Table</h2>
                    <hr className={styles.wrapper__divider} />
                    <p className={styles.wrapper__intro}>
                        Welcome to <strong>The Virtual Table</strong>, a proudly Canadian restaurant celebrating local flavors and culinary traditions from coast to coast.
                        Founded in Toronto in 2021, our mission is to serve authentic dishes made from fresh, regional ingredients — all with a modern twist.
                    </p>
                </div>

                <div className={styles.wrapper__grid}>
                    <div className={styles.wrapper__card}>
                        <FaCanadianMapleLeaf className={styles.wrapper__icon} />
                        <h3 className={styles.wrapper__card_title}>True Canadian Cuisine</h3>
                        <p className={styles.wrapper__card_text}>
                            From classic poutine and butter tarts to bannock and tourtière — we serve a flavorful journey across Canada's provinces.
                        </p>
                    </div>

                    <div className={styles.wrapper__card}>
                        <FaHamburger className={styles.wrapper__icon} />
                        <h3 className={styles.wrapper__card_title}>Modern Comfort Foods</h3>
                        <p className={styles.wrapper__card_text}>
                            Our chefs reinvent North American classics like burgers, sandwiches, and smoked brisket — always fresh, always satisfying.
                        </p>
                    </div>

                    <div className={styles.wrapper__card}>
                        <FaFish className={styles.wrapper__icon} />
                        <h3 className={styles.wrapper__card_title}>Sea to Table</h3>
                        <p className={styles.wrapper__card_text}>
                            Enjoy Atlantic salmon, Nova Scotia lobster rolls, and West Coast fish tacos — responsibly sourced and cooked to perfection.
                        </p>
                    </div>

                    <div className={styles.wrapper__card}>
                        <FaIceCream className={styles.wrapper__icon} />
                        <h3 className={styles.wrapper__card_title}>Desserts & Ice Cream</h3>
                        <p className={styles.wrapper__card_text}>
                            Treat yourself to local maple ice cream, Nanaimo bars, and seasonal fruit desserts — handmade and unforgettable.
                        </p>
                    </div>
                </div>
            </section>
    );
};

export default WrapperPage;
