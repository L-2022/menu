import React, { useRef, useState } from 'react';
import { menuData } from '../../data/menuData';
import CategoryButtons from '../categoryButtons/CategoryButtons';
import DishCard from './DishCard';
import Cart from '../cart/Cart.jsx';
import styles from './menuItem.module.css';

const MenuItem = () => {
    const [quantities, setQuantities] = useState({});
    const categoryRefs = useRef({});

    const scrollToCategory = (category) => {
        const ref = categoryRefs.current[category];
        if (ref) {
            ref.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const changeQuantity = (id, delta) => {
        setQuantities((prev) => {
            const currentQty = prev[id] || 0;
            const newQty = currentQty + delta;

            return {
                ...prev,
                [id]: newQty > 0 ? newQty : 0,
            };
        });
    };

    return (
            <>
                <div className={styles.wrapper__text_center}>
                    <h2 className={styles.wrapper__title}>Menu</h2>
                </div>
                <CategoryButtons categories={menuData} onCategoryClick={scrollToCategory} />
                <div className={styles.menu}>
                    {menuData.map((section) => (
                            <div
                                    key={section.id}
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
                                                    quantity={quantities[dish.id] || 0}
                                                    changeQuantity={changeQuantity}
                                                    // openModal={openModal}
                                            />
                                    ))}
                                </div>
                            </div>
                    ))}
                </div>
            </>
    );
};

export default MenuItem;
