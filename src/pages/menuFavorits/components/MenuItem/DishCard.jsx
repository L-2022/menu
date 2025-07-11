import React, { useState, useEffect } from 'react';
import styles from './menuItem.module.css';
import Counter from './Counter';
import {menuData, otherInfo} from "../../data/menuData.js";


const DishCard = ({ dish, quantity, changeQuantity, openModal, isInCart = false }) => {
    const [showNutrition, setShowNutrition] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleNutrition = (e) => {
        e.stopPropagation();
        setShowNutrition((prev) => !prev);
    };

    return (
            <div
                    className={styles.menu__card}
                    onClick={() => !isInCart && openModal(dish)}
            >
                {dish.top__rate && (
                        <div
                                className={styles.item__rate}
                                style={{ backgroundColor: dish.color_top_rate  }}
                        >
                            {dish.top__rate}
                        </div>
                )}

                <img src={dish.imgSrc} alt={dish.title} className={styles.menu__image} />
                <h1 className={styles.menu__dish_name}>{dish.title}</h1>

                <div className={styles.menu__info}>
                    <div className={styles.menu__price_counter}>
                        {dish.weight && <div className={styles.dish__weight}><strong>Weight:</strong> {dish.weight} </div>}
                        {dish.nutrition && !isInCart && !isDesktop && (
                                <div className={styles.menu__nutrition_wrapper}>
                                    <button
                                            className={styles.menu__nutrition_button}
                                            onClick={toggleNutrition}
                                    >
                                        Nutrition
                                    </button>
                                </div>
                        )}
                    </div>
                    {dish.ingredients && <div className={styles.dish__ingredients}>{dish.ingredients}</div>}
                    {dish.count && <div className={styles.dish__count}><strong>Quantity:</strong> {dish.count}</div>}
                    {dish.size && <div className={styles.dish__size}><strong>Size:</strong> {dish.size}</div>}
                    <div className={styles.menu__price_counter}>
                        {dish.price && (
                                <div className={styles.menu__price}>
                                    {dish.price} {otherInfo.currency}
                                </div>
                        )}
                        <Counter
                                quantity={quantity}
                                onIncrease={(e) => {
                                    e.stopPropagation();
                                    changeQuantity(dish.id, 1);
                                }}
                                onDecrease={(e) => {
                                    e.stopPropagation();
                                    changeQuantity(dish.id, -1);
                                }}
                        />
                    </div>

                    {/*{dish.nutrition && showNutrition && !isInCart && (*/}
                    {dish.nutrition && (!isInCart && (showNutrition || isDesktop)) && (
                            <div className={styles.menu__nutrition}>
                                <div className={styles.menu__nutrition_item}>
                                    <span>Calories: {dish.nutrition.calories}</span>
                                </div>
                                <div className={styles.menu__nutrition_item}>
                                    <span>Protein: {dish.nutrition.protein}</span>
                                </div>
                                <div className={styles.menu__nutrition_item}>
                                    <span>Fat: {dish.nutrition.fat}</span>
                                </div>
                                <div className={styles.menu__nutrition_item}>
                                    <span>Carbs: {dish.nutrition.carbs}</span>
                                </div>
                            </div>
                    )}

                </div>
            </div>
    );
};

export default DishCard;
