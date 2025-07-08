import React from 'react';
import styles from './menuItem.module.css';

const NutritionInfo = ({ nutrition }) => {
    console.log('Nutrition Info:', nutrition);

    return (
            <div className={styles.menu__nutrition}>
                <div className={styles.menu__nutrition_item}>
                    <span>Calories:</span>
                    <span>{nutrition.calories}</span>
                </div>
                <div className={styles.menu__nutrition_item}>
                    <span>Protein:</span>
                    <span>{nutrition.protein}</span>
                </div>
                <div className={styles.menu__nutrition_item}>
                    <span>Fat:</span>
                    <span>{nutrition.fat}</span>
                </div>
                <div className={styles.menu__nutrition_item}>
                    <span>Carbs:</span>
                    <span>{nutrition.carbs}</span>
                </div>
            </div>
    );
};

export default NutritionInfo;
