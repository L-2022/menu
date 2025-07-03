import React, { useState } from 'react';
import styles from './menuItem.module.css';
import Counter from './Counter';

const DishCard = ({ dish, quantity, changeQuantity, openModal, isInCart = false }) => {
    const [showNutrition, setShowNutrition] = useState(false);

    const toggleNutrition = (e) => {
        e.stopPropagation();
        setShowNutrition((prev) => !prev);
    };

    return (
            <div
                    className={styles.menu__card}
                    onClick={() => !isInCart && openModal(dish)}
            >
                {dish.top__rate && <div className={styles.item__rate}>{dish.top__rate}</div>}
                <img src={dish.imgSrc} alt={dish.title} className={styles.menu__image} />
                <h1 className={styles.menu__dish_name}>{dish.title}</h1>

                <div className={styles.menu__info}>
                    {dish.weight && <div><strong>Weight:</strong> {dish.weight}</div>}
                    {dish.ingredients && <div>{dish.ingredients}</div>}
                    {dish.count && <div><strong>Quantity:</strong> {dish.count}</div>}
                    {dish.size && <div><strong>Size:</strong> {dish.size}</div>}
                    <div className={styles.menu__price_counter}>
                        {dish.price && <div className={styles.menu__price}>{dish.price}</div>}
                        {/*<Counter*/}
                        {/*        quantity={quantity}*/}
                        {/*        onIncrease={(e) => {*/}
                        {/*            e.stopPropagation();*/}
                        {/*            changeQuantity(dish.id, 1);*/}
                        {/*        }}*/}
                        {/*        onDecrease={(e) => {*/}
                        {/*            e.stopPropagation();*/}
                        {/*            changeQuantity(dish.id, -1);*/}
                        {/*        }}*/}
                        {/*/>*/}
                        {dish.nutrition && !isInCart && (
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

                    {dish.nutrition && showNutrition && !isInCart && (
                            <div className={styles.menu__nutrition}>
                                <div className={styles.menu__nutrition_item}>
                                    <span>Calories:</span>
                                    <span>{dish.nutrition.calories}</span>
                                </div>
                                <div className={styles.menu__nutrition_item}>
                                    <span>Protein:</span>
                                    <span>{dish.nutrition.protein}</span>
                                </div>
                                <div className={styles.menu__nutrition_item}>
                                    <span>Fat:</span>
                                    <span>{dish.nutrition.fat}</span>
                                </div>
                                <div className={styles.menu__nutrition_item}>
                                    <span>Carbs:</span>
                                    <span>{dish.nutrition.carbs}</span>
                                </div>
                            </div>
                    )}
                </div>
            </div>
    );
};

export default DishCard;
