// src/components/categoryButtons/CategoryButtons.jsx
import React from 'react';
import styles from './categoryButtons.module.css';

const CategoryButtons = ({ categories, onCategoryClick }) => {
    return (
            <div className={styles.filters}>
                {categories.map((section) => (
                        <button
                                key={section.id}
                                className={styles.filter_button}
                                onClick={() => onCategoryClick(section.category)}
                        >
                            {section.category}
                        </button>
                ))}
            </div>
    );
};

export default CategoryButtons;
