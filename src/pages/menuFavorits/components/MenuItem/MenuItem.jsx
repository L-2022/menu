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

    const closeModal = () => {
        setSelectedDish(null);
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

                {selectedDish && (
                        <div className={styles.modalBackdrop} onClick={closeModal}>
                            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                                <h3>{selectedDish.title}</h3>
                                <img src={selectedDish.imgSrc} alt={selectedDish.title} style={{ maxWidth: '100%' }} />
                                <p>{selectedDish.ingredients}</p>
                                <p><strong>Price: </strong>{selectedDish.price}</p>
                                <div style={{ marginTop: '1rem' }}>
                                    <button onClick={() => changeQuantity(selectedDish.id, -1)}>-</button>
                                    <span style={{ margin: '0 1rem' }}>
                                {quantities[selectedDish.id] || 0}
                            </span>
                                    <button onClick={() => changeQuantity(selectedDish.id, 1)}>+</button>
                                </div>
                                <button onClick={closeModal} style={{ marginTop: '1rem' }}>Close</button>
                            </div>
                        </div>
                )}
            </>
    );
};

export default MenuItem;
