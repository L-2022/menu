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


export const otherInfo = {
    currency: '$',
};

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
                price: '385',
                currency: '$',
                ingredients: 'Fresh trout grilled over an open fire, seasoned with herbs and lemon butter',
                weight: '320 g',
                top__rate: 'chef’s special',
                quantityOptions: '1 portion',
                diameter: null,
                nutrition: {
                    calories: '480 kcal',
                    protein: '40 g',
                    fat: '28 g',
                    carbs: '4 g',
                },
            },
            {
                id: 20,
                title: 'Miso soup',
                imgSrc: miso_soup_thumb,
                fullImgSrc: miso_soup_thumb,
                price: '110',
                currency: '$',
                ingredients: 'Traditional Japanese broth with tofu, seaweed, and green onion',
                weight: '250 g',
                quantityOptions: '1 bowl',
                nutrition: {
                    calories: '90 kcal',
                    protein: '5 g',
                    fat: '3 g',
                    carbs: '10 g',
                },
            },
            {
                id: 10,
                title: 'Fresh pepperoni',
                imgSrc: pepperoni_thumb,
                fullImgSrc: pepperoni_thumb,
                price: '195',
                currency: '$',
                ingredients: 'Tomato sauce, mozzarella, spicy pepperoni, oregano',
                weight: '450 g',
                diameter: '30 cm',
                quantityOptions: '1 pizza',
                nutrition: {
                    calories: '810 kcal',
                    protein: '30 g',
                    fat: '35 g',
                    carbs: '90 g',
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
                price: '185',
                currency: '$',
                ingredients: 'Tomato sauce, mozzarella, ham, pineapple',
                weight: '430 g',
                diameter: '30 cm',
                quantityOptions: '1 pizza',
                nutrition: {
                    calories: '720 kcal',
                    protein: '28 g',
                    fat: '25 g',
                    carbs: '88 g',
                },
            },
            {
                id: 9,
                title: 'Margarita',
                imgSrc: margarita_thumb,
                fullImgSrc: margarita_thumb,
                price: '165',
                currency: '$',
                ingredients: 'Tomato sauce, mozzarella, fresh basil',
                weight: '400 g',
                diameter: '30 cm',
                quantityOptions: '1 pizza',
                nutrition: {
                    calories: '680 kcal',
                    protein: '24 g',
                    fat: '22 g',
                    carbs: '84 g',
                },
            },
            {
                id: 10,
                title: 'Fresh pepperoni',
                imgSrc: pepperoni_thumb,
                fullImgSrc: pepperoni_thumb,
                price: '195',
                currency: '$',
                ingredients: 'Tomato sauce, mozzarella, spicy pepperoni, oregano',
                weight: '450 g',
                diameter: '30 cm',
                quantityOptions: '1 pizza',
                nutrition: {
                    calories: '810 kcal',
                    protein: '30 g',
                    fat: '35 g',
                    carbs: '90 g',
                },
            },
            {
                id: 11,
                title: 'Pizza Chicken',
                imgSrc: pizza_chicken_thumb,
                fullImgSrc: pizza_chicken_thumb,
                price: '190',
                currency: '$',
                ingredients: 'Cream sauce, mozzarella, grilled chicken, red onion',
                weight: '440 g',
                diameter: '30 cm',
                quantityOptions: '1 pizza',
                nutrition: {
                    calories: '790 kcal',
                    protein: '32 g',
                    fat: '30 g',
                    carbs: '85 g',
                },
            },
            {
                id: 12,
                title: 'Pizza Boris Johnson We Love You',
                imgSrc: boris_thumb,
                fullImgSrc: boris_thumb,
                price: '230',
                currency: '$',
                ingredients: 'Tomato sauce, mozzarella, bacon, sausage, spicy jalapeños, olives',
                weight: '460 g',
                diameter: '30 cm',
                quantityOptions: '1 pizza',
                top__rate: 'chef’s joke',
                nutrition: {
                    calories: '850 kcal',
                    protein: '35 g',
                    fat: '38 g',
                    carbs: '95 g',
                },
            },
            {
                id: 13,
                title: 'Pizza Vegetables and mushrooms',
                imgSrc: veggie_mushroom_thumb,
                fullImgSrc: veggie_mushroom_thumb,
                price: '175',
                currency: '$',
                ingredients: 'Tomato sauce, mozzarella, mushrooms, bell pepper, onion, zucchini',
                weight: '420 g',
                diameter: '30 cm',
                quantityOptions: '1 pizza',
                nutrition: {
                    calories: '700 kcal',
                    protein: '20 g',
                    fat: '22 g',
                    carbs: '90 g',
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
                price: '175',
                currency: '$',
                ingredients: 'Romaine lettuce, avocado, Parmesan cheese, Caesar dressing, croutons',
                weight: '350 g',
                quantityOptions: '1 bowl',
                nutrition: {
                    calories: '460 kcal',
                    protein: '10 g',
                    fat: '30 g',
                    carbs: '28 g',
                },
            },
            {
                id: 16,
                title: 'Caesar salad with shrimp',
                imgSrc: caesar_shrimp_thumb,
                fullImgSrc: caesar_shrimp_thumb,
                price: '195',
                currency: '$',
                ingredients: 'Romaine lettuce, grilled shrimp, Parmesan, Caesar dressing, croutons',
                weight: '260 g',
                quantityOptions: '1 bowl',
                nutrition: {
                    calories: '410 kcal',
                    protein: '18 g',
                    fat: '24 g',
                    carbs: '20 g',
                },
            },
            {
                id: 17,
                title: 'Scrambled eggs with bacon',
                imgSrc: scrambled_bacon_thumb,
                fullImgSrc: scrambled_bacon_thumb,
                price: '145',
                currency: '$',
                ingredients: 'Fluffy scrambled eggs served with crispy bacon and fresh herbs',
                weight: '300 g',
                quantityOptions: '1 portion',
                nutrition: {
                    calories: '520 kcal',
                    protein: '22 g',
                    fat: '38 g',
                    carbs: '8 g',
                },
            },
            {
                id: 18,
                title: 'Caesar salad with salmon',
                imgSrc: caesar_salmon_thumb,
                fullImgSrc: caesar_salmon_thumb,
                price: '205',
                currency: '$',
                ingredients: 'Romaine lettuce, salted salmon, Parmesan, Caesar dressing, croutons',
                weight: '260 g',
                quantityOptions: '1 bowl',
                nutrition: {
                    calories: '420 kcal',
                    protein: '20 g',
                    fat: '26 g',
                    carbs: '18 g',
                },
            },
            {
                id: 19,
                title: 'Caesar salad with chicken',
                imgSrc: caesar_chicken_thumb,
                fullImgSrc: caesar_chicken_thumb,
                price: '175',
                currency: '$',
                ingredients: 'Fresh salad mix, grilled chicken, Parmesan, croutons, tomatoes, cucumbers',
                weight: '375 g',
                quantityOptions: '1 bowl',
                nutrition: {
                    calories: '480 kcal',
                    protein: '25 g',
                    fat: '28 g',
                    carbs: '22 g',
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
                price: '110',
                currency: '$',
                ingredients: 'Traditional Japanese broth with tofu, seaweed, and green onion',
                weight: '250 g',
                quantityOptions: '1 bowl',
                nutrition: {
                    calories: '90 kcal',
                    protein: '5 g',
                    fat: '3 g',
                    carbs: '10 g',
                },
            },
            {
                id: 21,
                title: 'Chicken broth',
                imgSrc: chicken_broth_thumb,
                fullImgSrc: chicken_broth_thumb,
                price: '120',
                currency: '$',
                ingredients: 'Clear chicken broth with pieces of chicken, carrot, and noodles',
                weight: '300 g',
                quantityOptions: '1 bowl',
                nutrition: {
                    calories: '150 kcal',
                    protein: '12 g',
                    fat: '6 g',
                    carbs: '8 g',
                },
            },
            {
                id: 22,
                title: 'Mushroom soup',
                imgSrc: mushroom_soup_thumb,
                fullImgSrc: mushroom_soup_thumb,
                price: '130',
                currency: '$',
                ingredients: 'Creamy soup with champignons, potatoes, and fresh herbs',
                weight: '300 g',
                quantityOptions: '1 bowl',
                nutrition: {
                    calories: '180 kcal',
                    protein: '6 g',
                    fat: '10 g',
                    carbs: '16 g',
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
