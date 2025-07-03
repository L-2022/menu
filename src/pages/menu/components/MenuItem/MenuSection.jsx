import React from 'react';
import DishCard from './DishCard';
import styles from './menuItem.module.css';

const MenuSection = ({ section, openModal, changeQuantity, quantities, categoryRefs }) => (
        <div
                id={section.category}
                ref={(el) => (categoryRefs.current[section.category] = el)}
                className={styles.category_block}
        >
            <h2 className={styles.category_title}>{section.category}</h2>
            <div className={styles.menu__group}>
                {section.items.map((dish) => (
                        <DishCard
                                key={dish.id}
                                dish={dish}
                                openModal={openModal}
                                changeQuantity={changeQuantity}
                                quantity={quantities[dish.id] || 0}
                        />
                ))}
            </div>
        </div>
);

export default MenuSection;
