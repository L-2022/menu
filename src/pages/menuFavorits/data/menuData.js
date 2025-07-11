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
import chicken_broth_thumb from '../images/menu/salads/salad (2).webp';
import mushroom_soup_thumb from '../images/menu/salads/salad (3).webp';

// Non-Alcoholic Beverages
import orange_fresh_thumb from '../images/menu/NonAlcoholicBeverages/orange_fresh_thumb.jpg';
import apple_fresh_thumb from '../images/menu/NonAlcoholicBeverages/apple_fresh_thumb.jpg';
import carrot_fresh_thumb from '../images/menu/NonAlcoholicBeverages/carrot_fresh_thumb.jpg';
import apple_carrot_fresh_thumb from '../images/menu/NonAlcoholicBeverages/apple_carrot_fresh_thumb.jpg';


// Sandwiches
import ham_sandwich_thumb from '../images/menu/Sandwiches/ham_sandwich_thumb.webp';
import turkey_sandwich_thumb from '../images/menu/Sandwiches/ham_sandwich_thumb.webp';

// Desserts

import panna_cotta_mango_thumb from '../images/menu/Desserts/panna_cotta_mango_thumb.webp';
import waffle_condensed_milk_thumb from '../images/menu/Desserts/panna_cotta_mango_thumb.webp';

//Main Dishes
import steak_dinner_thumb from '../images/menu/Main Dishes/steak_dinner_thumb.jpg';
import potatoes_meat_thumb from '../images/menu/Main Dishes/potatoes_meat_thumb.jpg';
import fish_steak_thumb from '../images/menu/Main Dishes/fish_steak_thumb.jpg';

// Starters/
import fancy_toast_thumb from '../images/menu/Starters/fancy_toast_thumb.jpg';

const topRateChefSpecial = 'chef’s special';
const topRateSpicyHit = 'spicy hit';
const topRateBestseller = 'bestseller';
const topRateVegetarian = 'vegetarian';
const topRatePremium = 'premium';

const colorAccent = '#EF4934';
const colorSuccess = '#417257';
const colorWarning = '#FFC107';
const colorGreen = '#4CAF50';
const colorPurple = '#6F42C1';



export const menuData = [
    {
        id: 105,
        category: 'Starters',
        items: [
            {
                id: 110,
                title: 'Fancy Toast',
                imgSrc: fancy_toast_thumb,
                price: '14',
                ingredients: 'Toasted sourdough, avocado spread, cherry tomatoes, poached egg, herbs',
                weight: '180 g',
                diameter: null,
                top__rate: topRateChefSpecial,
                color_top_rate: colorAccent,
                quantityOptions: '1 slice',
                nutrition: {
                    calories: '320 kcal',
                    protein: '10 g',
                    fat: '18 g',
                    carbs: '28 g',
                },
            },
        ],
    },
    {
        id: 101,
        category: 'Sandwiches',
        items: [
            {
                id: 101,
                title: 'Ham Sandwich',
                imgSrc: ham_sandwich_thumb,
                price: '13',
                ingredients: 'White bread, ham, cheese, lettuce, tomato, butter',
                weight: '220 g',
                diameter: null,
                quantityOptions: '1 sandwich',
                nutrition: {
                    calories: '420 kcal',
                    protein: '20 g',
                    fat: '18 g',
                    carbs: '40 g',
                },
            },
            {
                id: 102,
                title: 'Turkey Sandwich',
                imgSrc: turkey_sandwich_thumb,
                price: '6',
                ingredients: 'Whole grain bread, turkey breast, lettuce, tomato, mayonnaise, mustard',
                weight: '230 g',
                diameter: null,
                quantityOptions: '1 sandwich',
                nutrition: {
                    calories: '450 kcal',
                    protein: '25 g',
                    fat: '16 g',
                    carbs: '42 g',
                },
            },
        ]
    },
    {
        id: 102,
        category: 'Non-Alcoholic Beverages',
        items: [
            {
                id: 103,
                title: 'Orange Fresh Juice',
                imgSrc: orange_fresh_thumb,
                price: '4.50',
                ingredients: 'Freshly squeezed orange juice',
                weight: '250 ml',
                diameter: null,
                quantityOptions: '1 glass',
                nutrition: {
                    calories: '110 kcal',
                    protein: '2 g',
                    fat: '0.5 g',
                    carbs: '25 g',
                },
            },
            {
                id: 104,
                title: 'Apple Fresh Juice',
                imgSrc: apple_fresh_thumb,
                price: '4.00',
                ingredients: 'Freshly squeezed apple juice',
                weight: '250 ml',
                diameter: null,
                quantityOptions: '1 glass',
                nutrition: {
                    calories: '105 kcal',
                    protein: '0.5 g',
                    fat: '0.3 g',
                    carbs: '26 g',
                },
            },
            {
                id: 105,
                title: 'Carrot Fresh Juice',
                imgSrc: carrot_fresh_thumb,
                price: '4.00',
                ingredients: 'Freshly squeezed carrot juice',
                weight: '250 ml',
                diameter: null,
                quantityOptions: '1 glass',
                nutrition: {
                    calories: '95 kcal',
                    protein: '1.5 g',
                    fat: '0.2 g',
                    carbs: '22 g',
                },
            },
            {
                id: 106,
                title: 'Apple-Carrot Fresh Juice',
                imgSrc: apple_carrot_fresh_thumb,
                price: '5',
                ingredients: 'Blend of freshly squeezed apple and carrot juice',
                weight: '250 ml',
                diameter: null,
                quantityOptions: '1 glass',
                nutrition: {
                    calories: '100 kcal',
                    protein: '1.2 g',
                    fat: '0.3 g',
                    carbs: '24 g',
                },
            },
        ]
    },
    {
        id: 103,
        category: 'Desserts',
        items: [
            {
                id: 107,
                title: 'Panna Cotta with Mango Puree',
                imgSrc: panna_cotta_mango_thumb,
                price: '9',
                ingredients: 'Cream, sugar, gelatin, vanilla, mango puree',
                weight: '160 g',
                diameter: null,
                quantityOptions: '1 portion',
                nutrition: {
                    calories: '280 kcal',
                    protein: '3 g',
                    fat: '18 g',
                    carbs: '26 g',
                },
            },
            {
                id: 111,
                title: 'Waffle with Condensed Milk',
                imgSrc: waffle_condensed_milk_thumb,
                price: '7.5',
                ingredients: 'Crispy waffle topped with sweet condensed milk',
                weight: '160 g',
                diameter: null,
                quantityOptions: '1 piece',
                nutrition: {
                    calories: '380 kcal',
                    protein: '6 g',
                    fat: '15 g',
                    carbs: '55 g',
                },
            },
        ]
    },
    {
        id: 1,
        category: 'Main Dishes',
        items: [
            {
                id: 1,
                title: 'Trout over an open fire',
                imgSrc: trout_thumb,
                fullImgSrc: trout_thumb,
                price: '26',
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
                id: 3,
                title: 'Fresh pepperoni',
                imgSrc: pepperoni_thumb,
                fullImgSrc: pepperoni_thumb,
                price: '15',
                ingredients: 'Tomato sauce, mozzarella, spicy pepperoni, oregano',
                weight: '450 g',
                diameter: '30 cm',
                top__rate: topRatePremium,
                color_top_rate: colorWarning,
                quantityOptions: '1 pizza',
                nutrition: {
                    calories: '810 kcal',
                    protein: '30 g',
                    fat: '35 g',
                    carbs: '90 g',
                },
            },
            {
                id: 108,
                title: 'Steak Dinner',
                imgSrc: steak_dinner_thumb,
                price: '32',
                ingredients: 'Grilled beef steak, mashed potatoes, green beans, steak sauce',
                weight: '450 g',
                diameter: null,
                quantityOptions: '1 portion',
                nutrition: {
                    calories: '720 kcal',
                    protein: '48 g',
                    fat: '38 g',
                    carbs: '42 g',
                },
            },
            {
                id: 109,
                title: 'Potatoes with Meat',
                imgSrc: potatoes_meat_thumb,
                price: '18',
                ingredients: 'Roasted potatoes with stewed pork, onions, carrots, and herbs',
                weight: '400 g',
                diameter: null,
                quantityOptions: '1 portion',
                nutrition: {
                    calories: '610 kcal',
                    protein: '32 g',
                    fat: '28 g',
                    carbs: '50 g',
                },
            },
            {
                id: 112,
                title: 'Fish Steak',
                imgSrc: fish_steak_thumb,
                price: '24',
                ingredients: 'Grilled salmon steak, lemon butter sauce, steamed vegetables',
                weight: '380 g',
                diameter: null,
                quantityOptions: '1 portion',
                nutrition: {
                    calories: '540 kcal',
                    protein: '42 g',
                    fat: '30 g',
                    carbs: '18 g',
                },
            },
        ]
    },
    {
        id: 2,
        category: 'Pizza',
        items: [
            {
                id: 4,
                title: 'Hawaii',
                imgSrc: hawaii_thumb,
                fullImgSrc: hawaii_thumb,
                price: '25',
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
                id: 5,
                title: 'Margarita',
                imgSrc: margarita_thumb,
                fullImgSrc: margarita_thumb,
                price: '18',
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
                id: 6,
                title: 'Fresh pepperoni',
                imgSrc: pepperoni_thumb,
                fullImgSrc: pepperoni_thumb,
                price: '19',
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
                id: 7,
                title: 'Pizza Chicken',
                imgSrc: pizza_chicken_thumb,
                fullImgSrc: pizza_chicken_thumb,
                price: '19',
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
                id: 8,
                title: 'Pizza Boris Johnson We Love You',
                imgSrc: boris_thumb,
                fullImgSrc: boris_thumb,
                price: '20',
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
                id: 9,
                title: 'Pizza Vegetables and mushrooms',
                imgSrc: veggie_mushroom_thumb,
                fullImgSrc: veggie_mushroom_thumb,
                price: '16',
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
        id: 3,
        category: 'Salads',
        items: [
            {
                id: 15,
                title: 'Caesar salad with avocado',
                imgSrc: caesar_avocado_thumb,
                fullImgSrc: caesar_avocado_thumb,
                price: '14',
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
                top__rate: topRateVegetarian,
                color_top_rate: colorGreen,
                price: '15',
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
                price: '14',
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
                price: '18',
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
                top__rate: topRateVegetarian,
                color_top_rate: colorGreen,
                price: '16',
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
        id: 4,
        category: 'Soups',
        items: [
            {
                id: 20,
                title: 'Miso soup',
                imgSrc: mushroom_soup_thumb,
                price: '22',
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
                price: '10',
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
                price: '26',
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
    },



];

export const otherInfo = {
    currency: '$',
};

export const navBtn = [
    { id: 'menu', label: 'Menu' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
];
