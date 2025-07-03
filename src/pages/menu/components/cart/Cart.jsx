import React, { useState } from 'react';
import styles from './cart.module.css';
import CartModal from '../cartModal/CartModal.jsx';

const Cart = ({ quantities, menuData }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    let totalQuantity = 0;
    let totalPrice = 0;

    menuData.forEach((section) => {
        section.items.forEach((dish) => {
            const qty = quantities[dish.id] || 0;
            totalQuantity += qty;
            if (dish.price && typeof dish.price === 'string') {
                const numericPrice = parseFloat(dish.price.replace(/[^\d.]/g, ''));
                totalPrice += numericPrice * qty;
            }
        });
    });

    if (totalQuantity === 0) return null;

    return (
            <>
                <div className={styles.cart} onClick={() => setIsModalOpen(true)}>
                    <span>{totalPrice.toFixed(2)} $&nbsp;|&nbsp;{totalQuantity}</span>
                </div>
                <CartModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        quantities={quantities}
                        menuData={menuData}
                />
            </>
    );
};

export default Cart;
