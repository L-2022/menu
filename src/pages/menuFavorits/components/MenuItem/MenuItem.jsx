import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { menuData } from '../../data/menuData';
import CategoryButtons from '../categoryButtons/CategoryButtons';
import DishCard from './DishCard';
import Cart from '../cart/Cart.jsx';
import styles from './menuItem.module.css';
import { increaseQuantity, decreaseQuantity } from '../../../../store/menu/cartSlice.jsx';

const MenuItem = () => {
    const quantities = useSelector((state) => state.cart.quantities);
    const dispatch = useDispatch();
    const [selectedDish, setSelectedDish] = useState(null);
    const categoryRefs = useRef({});

    const scrollToCategory = (category) => {
        const ref = categoryRefs.current[category];
        if (ref) {
            ref.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const changeQuantity = (id, delta) => {
        if (delta > 0) dispatch(increaseQuantity(id));
        else dispatch(decreaseQuantity(id));
    };

    const openModal = (dish) => {
        setSelectedDish(dish);
    };

    return (
            <>
                <div className={styles.wrapper__text_center}>
                    <h2 className={styles.wrapper__title}>Menu</h2>
                </div>

                <Cart quantities={quantities} menuData={menuData} />

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
                                                    openModal={() => openModal(dish)}
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
