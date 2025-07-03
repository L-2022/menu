import React from 'react';
import styles from './categoryButtons.module.css';

const CategoryButtons = ({ categories }) => {
    const handleAnyClick = (id) => {
        setTimeout(() => {
            const section = document.getElementById(id);
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

    return (
            <div className={styles.filters}>
                {categories?.map(({ id, category }) => (
                        <button
                                key={id}
                                className={styles.filter_button}
                                onClick={() => handleAnyClick(category)}
                        >
                            {category}
                        </button>
                ))}
            </div>
    );
};

export default CategoryButtons;
