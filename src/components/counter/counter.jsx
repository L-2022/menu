import React from 'react';
import styles from './counter.module.css';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Counter = ({
                     quantity = 1,
                     onIncrease,
                     onDecrease,
                     showZeroButton = false,
                     min = 1,
                     max = 100,
                     zeroLabel = 'Add',
                 }) => {
    if (quantity <= 0 && showZeroButton) {
        return (
                <button onClick={onIncrease} className={styles.counter__add_button}>
                    {zeroLabel}
                </button>
        );
    }

    return (
            <div className={styles.menu__counter}>
                <button
                        type="button"
                        onClick={onDecrease}
                        className={styles.counter__button}
                        disabled={quantity <= min}
                >
                    <AiOutlineMinus />
                </button>
                <span className={styles.counter__value}>{quantity}</span>
                <button
                        type="button"
                        onClick={onIncrease}
                        className={styles.counter__button}
                        disabled={quantity >= max}
                >
                    <AiOutlinePlus />
                </button>
            </div>
    );
};

export default Counter;
