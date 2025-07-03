import React from 'react';
import styles from './menuItem.module.css';

const Counter = ({ quantity, onIncrease, onDecrease }) => {
    if (quantity === 0) {
        return (
                <button onClick={onIncrease} className={styles.counter__add_button}>
                    Add
                </button>
        );
    }

    return (
            <div className={styles.menu__counter}>
                <button onClick={onDecrease} className={styles.counter__button}>-</button>
                <span className={styles.counter__value}>{quantity}</span>
                <button onClick={onIncrease} className={styles.counter__button}>+</button>
            </div>
    );
};


export default Counter;
