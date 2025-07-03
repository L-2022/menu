import React from 'react';
import styles from './cartModal.module.css';

import DishCard from '../menuItem/DishCard';

const CartModal = ({ isOpen, onClose, quantities, menuData, changeQuantity }) => {
    if (!isOpen) return null;

    const selectedDishes = [];

    menuData.forEach((section) => {
        section.items.forEach((dish) => {
            const qty = quantities[dish.id];
            if (qty > 0) {
                selectedDishes.push({ ...dish, qty });
            }
        });
    });

    return (
            <div className={styles.overlay} onClick={onClose}>
                <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                    <h2>Your Cart</h2>
                    <div className={styles.menu__group}>
                        {selectedDishes.map((dish) => (
                                <DishCard
                                        key={dish.id}
                                        dish={dish}
                                        quantity={quantities[dish.id]}
                                        changeQuantity={changeQuantity}
                                        isInCart={true}
                                />

                        ))}
                    </div>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
    );
};

export default CartModal;
