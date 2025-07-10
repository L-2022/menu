import React from 'react';
import styles from './cartModal.module.css';
import DishCard from '../menuItem/DishCard';
import { useDispatch } from 'react-redux';
import {menuData} from '../../data/menuData.js';
import Swal from 'sweetalert2';

import { increaseQuantity, decreaseQuantity, clearCart } from '../../../../store/menu/cartSlice';
import {otherInfo} from "../../../menu/data/menuData.js";

const CartModal = ({ isOpen, onClose, quantities, menuData }) => {
    const dispatch = useDispatch();

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

    const changeQuantity = (id, delta) => {
        if (delta > 0) dispatch(increaseQuantity(id));
        else dispatch(decreaseQuantity(id));
    };

    const handleClearCart = () => {
        Swal.fire({
            title: 'Clear all items?',
            text: 'Are you sure you want to remove everything from the cart?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#aaa',
            confirmButtonText: 'Yes, clear it',
            cancelButtonText: 'Cancel',
            didOpen: () => {
                const swalContainer = document.querySelector('.swal2-container');
                if (swalContainer) swalContainer.style.zIndex = '300';
            }
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(clearCart());
                Swal.fire({
                    icon: 'success',
                    title: 'Cleared!',
                    text: 'Your cart has been emptied.',
                    timer: 500, // time view
                    timerProgressBar: true,
                    showConfirmButton: false,
                    didOpen: () => {
                        const swalContainer = document.querySelector('.swal2-container');
                        if (swalContainer) swalContainer.style.zIndex = '300';
                    }
                });
            }
        });
    };

    const totalPrice = selectedDishes.reduce((sum, dish) => sum + dish.price * dish.qty, 0);


    return (
            <div className={styles.overlay} onClick={onClose}>
                <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                    <div className={styles.header}>
                        <h1>Your Orders</h1>
                        <div className={styles.buttons}>
                            <button className={styles.clearBtn} onClick={handleClearCart}>Clear All</button>
                            <button className={styles.closeBtn} onClick={onClose}>Close</button>
                        </div>
                    </div>
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
                    <div className={styles.total}>
                        <span>Total:</span>
                        <span>{ otherInfo.currency }{" "}{totalPrice.toFixed(2)}</span>
                    </div>
                </div>


            </div>
    );
};

export default CartModal;
