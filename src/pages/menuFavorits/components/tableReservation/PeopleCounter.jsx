import React from 'react';
import styles from './tableReservation.module.css';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const PeopleCounter = ({ value, onIncrease, onDecrease }) => {
    return (
            <div className={styles.menu__counter}>
                <button
                        onClick={onDecrease}
                        className={styles.counter__button}
                        disabled={value <= 1}
                >
                    <AiOutlineMinus />
                </button>
                <span className={styles.counter__value}>{value}</span>
                <button
                        onClick={onIncrease}
                        className={styles.counter__button}
                        disabled={value >= 20}
                >
                    <AiOutlinePlus />
                </button>
            </div>
    );
};

export default PeopleCounter;
