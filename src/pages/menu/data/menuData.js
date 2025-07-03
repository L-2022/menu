import trout_thumb from '../images/menu/thumbnail/Kitfo.jpg';
import hawaii_thumb from '../images/menu/pizza/pizza (1).webp';
import margarita_thumb from '../images/menu/pizza/pizza (2).webp';
import pepperoni_thumb from '../images/menu/pizza/pizza (3).webp';
import pizza_chicken_thumb from '../images/menu/pizza/pizza (4).webp';
import boris_thumb from '../images/menu/pizza/pizza (5).webp';
import veggie_mushroom_thumb from '../images/menu/pizza/pizza (6).webp';
//Salads
import caesar_avocado_thumb from '../images/menu/salads/salad (1).webp';
import caesar_shrimp_thumb from '../images/menu/salads/salad (2).webp';
import scrambled_bacon_thumb from '../images/menu/salads/salad (3).webp';
import caesar_salmon_thumb from '../images/menu/salads/salad (4).webp';
import caesar_chicken_thumb from '../images/menu/salads/caesar_chicken_thumb.webp';
// Soups
import miso_soup_thumb from '../images/menu/salads/salad (1).webp';
import chicken_broth_thumb from '../images/menu/salads/salad (2).webp';
import mushroom_soup_thumb from '../images/menu/salads/salad (3).webp';



export const menuData = [
    {
        id: 1,
        category: 'Main Dishes',
        items: [
            {
                id: 1,
                title: 'Trout over an open fire',
                imgSrc: trout_thumb,
                fullImgSrc: trout_thumb,
                price: '385 ₴',
                ingredients: 'Fresh trout grilled over an open fire, seasoned with herbs and lemon butter',
                weight: '320 г',
                top__rate: 'chef’s special',
                quantityOptions: '1 portion',
                diameter: null,
                nutrition: {
                    calories: '480 ккал',
                    protein: '40 г',
                    fat: '28 г',
                    carbs: '4 г',
                },
            },
            {
                id: 20,
                title: 'Miso soup',
                imgSrc: miso_soup_thumb,
                fullImgSrc: miso_soup_thumb,
                price: '110 ₴',
                ingredients: 'Traditional Japanese broth with tofu, seaweed, and green onion',
                weight: '250 г',
                quantityOptions: '1 bowl',
                nutrition: {
                    calories: '90 ккал',
                    protein: '5 г',
                    fat: '3 г',
                    carbs: '10 г',
                },
            },
            {
                id: 10,
                title: 'Fresh pepperoni',
                imgSrc: pepperoni_thumb,
                fullImgSrc: pepperoni_thumb,
                price: '195 ₴',
                ingredients: 'Tomato sauce, mozzarella, spicy pepperoni, oregano',
                weight: '450 г',
                diameter: '30 cm',
                quantityOptions: '1 pizza',
                nutrition: {
                    calories: '810 ккал',
                    protein: '30 г',
                    fat: '35 г',
                    carbs: '90 г',
                },
            },
        ]
    },
    {
        id: 4,
        category: 'Pizza',
        items: [
            {
                id: 8,
                title: 'Hawaii',
                imgSrc: hawaii_thumb,
                fullImgSrc: hawaii_thumb,
                price: '185 ₴',
                ingredients: 'Tomato sauce, mozzarella, ham, pineapple',
                weight: '430 г',
                diameter: '30 cm',
                quantityOptions: '1 pizza',
                nutrition: {
                    calories: '720 ккал',
                    protein: '28 г',
                    fat: '25 г',
                    carbs: '88 г',
                },
            },
            {
                id: 9,
                title: 'Margarita',
                imgSrc: margarita_thumb,
                fullImgSrc: margarita_thumb,
                price: '165 ₴',
                ingredients: 'Tomato sauce, mozzarella, fresh basil',
                weight: '400 г',
                diameter: '30 cm',
                quantityOptions: '1 pizza',
                nutrition: {
                    calories: '680 ккал',
                    protein: '24 г',
                    fat: '22 г',
                    carbs: '84 г',
                },
            },
            {
                id: 10,
                title: 'Fresh pepperoni',
                imgSrc: pepperoni_thumb,
                fullImgSrc: pepperoni_thumb,
                price: '195 ₴',
                ingredients: 'Tomato sauce, mozzarella, spicy pepperoni, oregano',
                weight: '450 г',
                diameter: '30 cm',
                quantityOptions: '1 pizza',
                nutrition: {
                    calories: '810 ккал',
                    protein: '30 г',
                    fat: '35 г',
                    carbs: '90 г',
                },
            },
            {
                id: 11,
                title: 'Pizza Chicken',
                imgSrc: pizza_chicken_thumb,
                fullImgSrc: pizza_chicken_thumb,
                price: '190 ₴',
                ingredients: 'Cream sauce, mozzarella, grilled chicken, red onion',
                weight: '440 г',
                diameter: '30 cm',
                quantityOptions: '1 pizza',
                nutrition: {
                    calories: '790 ккал',
                    protein: '32 г',
                    fat: '30 г',
                    carbs: '85 г',
                },
            },
            {
                id: 12,
                title: 'Pizza Boris Johnson We Love You',
                imgSrc: boris_thumb,
                fullImgSrc: boris_thumb,
                price: '230 ₴',
                ingredients: 'Tomato sauce, mozzarella, bacon, sausage, spicy jalapeños, olives',
                weight: '460 г',
                diameter: '30 cm',
                quantityOptions: '1 pizza',
                top__rate: 'chef’s joke',
                nutrition: {
                    calories: '850 ккал',
                    protein: '35 г',
                    fat: '38 г',
                    carbs: '95 г',
                },
            },
            {
                id: 13,
                title: 'Pizza Vegetables and mushrooms',
                imgSrc: veggie_mushroom_thumb,
                fullImgSrc: veggie_mushroom_thumb,
                price: '175 ₴',
                ingredients: 'Tomato sauce, mozzarella, mushrooms, bell pepper, onion, zucchini',
                weight: '420 г',
                diameter: '30 cm',
                quantityOptions: '1 pizza',
                nutrition: {
                    calories: '700 ккал',
                    protein: '20 г',
                    fat: '22 г',
                    carbs: '90 г',
                },
            },
        ],
    },
    {
        id: 5,
        category: 'Salads',
        items: [
            {
                id: 15,
                title: 'Caesar salad with avocado',
                imgSrc: caesar_avocado_thumb,
                fullImgSrc: caesar_avocado_thumb,
                price: '175 ₴',
                ingredients: 'Romaine lettuce, avocado, Parmesan cheese, Caesar dressing, croutons',
                weight: '350 г',
                quantityOptions: '1 bowl',
                nutrition: {
                    calories: '460 ккал',
                    protein: '10 г',
                    fat: '30 г',
                    carbs: '28 г',
                },
            },
            {
                id: 16,
                title: 'Caesar salad with shrimp',
                imgSrc: caesar_shrimp_thumb,
                fullImgSrc: caesar_shrimp_thumb,
                price: '195 ₴',
                ingredients: 'Romaine lettuce, grilled shrimp, Parmesan, Caesar dressing, croutons',
                weight: '260 г',
                quantityOptions: '1 bowl',
                nutrition: {
                    calories: '410 ккал',
                    protein: '18 г',
                    fat: '24 г',
                    carbs: '20 г',
                },
            },
            {
                id: 17,
                title: 'Scrambled eggs with bacon',
                imgSrc: scrambled_bacon_thumb,
                fullImgSrc: scrambled_bacon_thumb,
                price: '145 ₴',
                ingredients: 'Fluffy scrambled eggs served with crispy bacon and fresh herbs',
                weight: '300 г',
                quantityOptions: '1 portion',
                nutrition: {
                    calories: '520 ккал',
                    protein: '22 г',
                    fat: '38 г',
                    carbs: '8 г',
                },
            },
            {
                id: 18,
                title: 'Caesar salad with salmon',
                imgSrc: caesar_salmon_thumb,
                fullImgSrc: caesar_salmon_thumb,
                price: '205 ₴',
                ingredients: 'Romaine lettuce, salted salmon, Parmesan, Caesar dressing, croutons',
                weight: '260 г',
                quantityOptions: '1 bowl',
                nutrition: {
                    calories: '420 ккал',
                    protein: '20 г',
                    fat: '26 г',
                    carbs: '18 г',
                },
            },
            {
                id: 19,
                title: 'Caesar salad with chicken',
                imgSrc: caesar_chicken_thumb,
                fullImgSrc: caesar_chicken_thumb,
                price: '175 ₴',
                ingredients: 'Fresh salad mix, grilled chicken, Parmesan, croutons, tomatoes, cucumbers',
                weight: '375 г',
                quantityOptions: '1 bowl',
                nutrition: {
                    calories: '480 ккал',
                    protein: '25 г',
                    fat: '28 г',
                    carbs: '22 г',
                },
            },
        ],
    },
    {
        id: 6,
        category: 'Soups',
        items: [
            {
                id: 20,
                title: 'Miso soup',
                imgSrc: miso_soup_thumb,
                fullImgSrc: miso_soup_thumb,
                price: '110 ₴',
                ingredients: 'Traditional Japanese broth with tofu, seaweed, and green onion',
                weight: '250 г',
                quantityOptions: '1 bowl',
                nutrition: {
                    calories: '90 ккал',
                    protein: '5 г',
                    fat: '3 г',
                    carbs: '10 г',
                },
            },
            {
                id: 21,
                title: 'Chicken broth',
                imgSrc: chicken_broth_thumb,
                fullImgSrc: chicken_broth_thumb,
                price: '120 ₴',
                ingredients: 'Clear chicken broth with pieces of chicken, carrot, and noodles',
                weight: '300 г',
                quantityOptions: '1 bowl',
                nutrition: {
                    calories: '150 ккал',
                    protein: '12 г',
                    fat: '6 г',
                    carbs: '8 г',
                },
            },
            {
                id: 22,
                title: 'Mushroom soup',
                imgSrc: mushroom_soup_thumb,
                fullImgSrc: mushroom_soup_thumb,
                price: '130 ₴',
                ingredients: 'Creamy soup with champignons, potatoes, and fresh herbs',
                weight: '300 г',
                quantityOptions: '1 bowl',
                nutrition: {
                    calories: '180 ккал',
                    protein: '6 г',
                    fat: '10 г',
                    carbs: '16 г',
                },
            },
        ],
    }


];


export const navBtn = [
    { id: 'menu', label: 'Menu' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
];
