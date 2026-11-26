import ravioli from '../assets/img/ravioli.png';
import lasagna from '../assets/img/lasagna.avif'
import lasagnaSheets from '../assets/img/lasagna.png';
import carTaglia from '../assets/img/carTagliatelle.png';
import carSpa from '../assets/img/carSpaghetti.png';
import carPenne from '../assets/img/carPenne.png'
import betTaglia from '../assets/img/betTagliatelle.png';
import betSpa from '../assets/img/betSpaghetti.png';
import betPenne from '../assets/img/betPenne.png';
import bwgTaglia from '../assets/img/bwgTagliatelle.png';
import bwgSpa from '../assets/img/bwgSpaghetti.png';
import bwgPenne from '../assets/img/bwgPenne.png';
import oatTaglia from '../assets/img/oatTagliatelle.png';
import oatSpa from '../assets/img/oatSpaghetti.png';
import oatPenne from '../assets/img/oatPenne.png';
import barSpa from '../assets/img/barleySpaghetti.png';
import barPenne from '../assets/img/barleyPenne.png';
import barTaglia from '../assets/img/barTagliatelle.png';
import pdsPappar from '../assets/img/pdsPappar.png';
import pPappar from '../assets/img/pPappar.png';
import pTaglia from '../assets/img/pTaglia.png';
import pdsTaglia from '../assets/img/pdsTagliatelle.png'

export const PRODUCTS = [
  {

    image: lasagna,

  },
  {
    
    image: lasagnaSheets,

  },
  {
   
    image: carTaglia,

  },
  {
 
    image: carSpa,

  },
  {
 
    image: carPenne,

  },
  {
   
    image: betTaglia,
  },
  {
 
    image: betSpa,
  },
  {

    image: betPenne,

  },
  {

    image: bwgTaglia,

  },
  {

    image: bwgSpa,

  },
  {
    image: bwgPenne,

  },
  {

    image: oatTaglia,

  },
  {
    id: 'oat-spaghetti',
    slug: 'oat-spaghetti',
    name: 'Oat Spaghetti',
    category: 'whole-grain',
    ingredient: 'oat',
    pastaType: 'spaghetti',
    packSize: '500 g',
    price: 824,
    unit: 'pack',
    description: 'Creamy oat-based spaghetti with a smooth texture and mild flavor.',
    cookingTime: '7-9 min',
    suggestedDishes: ["Creamy Alfredo", "Pesto", "Butter and sage"],
    image: oatSpa,
    bestSeller: true,
    featured: false,
  },
  {
    id: 'oat-penne',
    slug: 'oat-penne',
    name: 'Oat Penne',
    category: 'whole-grain',
    ingredient: 'oat',
    pastaType: 'penne',
    packSize: '500 g',
    price: 824,
    unit: 'pack',
    description: 'Creamy oat-based penne with a smooth texture and mild flavor.',
    cookingTime: '7-9 min',
    suggestedDishes: ['Creamy Alfredo', 'Pesto', 'Butter and sage'],
    image: oatPenne,
    bestSeller: false,
    featured: false,
  },
  {
    id: 'durum-tagliatelle',
    slug: 'pure-durum-semolina-tagliatelle',
    name: 'Pure Durum Semolina Tagliatelle',
    category: 'premium',
    ingredient: 'durum-semolina',
    pastaType: 'tagliatelle',
    packSize: '500 g',
    price: 1024,
    unit: 'pack',
    description: 'Our finest pasta made from 100% premium durum wheat semolina.',
    cookingTime: '7-9 min',
    suggestedDishes: ["Classic Bolognese", "Traditional ragu", "Truffle and parmesan"],
    image: pdsTaglia,
    bestSeller: false,
    featured: true,
  },
  {
    id: 'durum-pappardelle',
    slug: 'pure-durum-semolina-pappardelle',
    name: 'Pure Durum Semolina Pappardelle',
    category: 'premium',
    ingredient: 'durum-semolina',
    pastaType: 'pappardelle',
    packSize: '500 g',
    price: 1024,
    unit: 'pack',
    description: 'Our finest pasta made from 100% premium durum wheat semolina.',
    cookingTime: '7-9 min',
    suggestedDishes: ['Classic Bolognese', 'Traditional ragu', 'Truffle and parmesan'],
    image: pdsPappar,
    bestSeller: false,
    featured: false,
  },
  {
    id: 'gourmet-ravioli',
    slug: 'gourmet-ravioli',
    name: 'Gourmet Ravioli',
    category: 'filled',
    ingredient: 'assorted',
    pastaType: 'ravioli',
    shapes: ['Cheese', 'Spinach', 'Meat filling'],
    packSize: '250 g',
    price: 480,
    unit: 'pack',
    description: 'Handcrafted ravioli filled with your choice of premium cheese, fresh spinach, or savory meat. Delicate pasta pillows of perfection.',
    cookingTime: '4-6 min',
    suggestedDishes: ["Brown butter and sage", "Marinara", "Creamy parmesan"],
    image: ravioli,
    bestSeller: false,
    featured: false,
  },
  {
    id: 'ricotta-filled-pasta',
    slug: 'ricotta-filled-pasta',
    name: 'Ricotta Filled Pasta',
    category: 'filled',
    ingredient: 'ricotta',
    pastaType: 'ravioli',
    shapes: ['Ricotta cheese filling'],
    packSize: '250 g',
    price: 650,
    unit: 'pack',
    description: 'Delicate pasta filled with creamy ricotta cheese and a hint of nutmeg. A classic Italian delicacy ready in minutes.',
    cookingTime: '4-6 min',
    suggestedDishes: ["Tomato basil sauce", "Pesto Genovese", "Simple olive oil"],
    image: pPappar,
    bestSeller: false,
    featured: false,
  },
  {
    id: 'premium-barley-tagliatelle',
    slug: 'premium-barley-tagliatelle',
    name: 'Premium Barley Tagliatelle',
    category: 'premium',
    ingredient: 'barley',
    pastaType: 'tagliatelle',
    packSize: '500 g',
    price: 924,
    unit: 'pack',
    description: 'Premium barley tagliatelle crafted from nutritious barley flour, offering a rich nutty flavor and broad ribbons ideal for hearty sauces.',
    cookingTime: '8-10 min',
    suggestedDishes: ["Wild boar ragu", "Rich meat sauces", "Creamy mushroom sauce"],
    image: pTaglia,
    bestSeller: false,
    featured: false,
  },
  {
    id: 'premium-barley-pappardelle',
    slug: 'premium-barley-pappardelle',
    name: 'Premium Barley Pappardelle',
    category: 'premium',
    ingredient: 'barley',
    pastaType: 'pappardelle',
    packSize: '500 g',
    price: 924,
    unit: 'pack',
    description: 'Premium barley pappardelle made with wholesome barley flour, featuring extra-wide ribbons that pair beautifully with rich and slow-cooked sauces.',
    cookingTime: '8-10 min',
    suggestedDishes: ['Wild boar ragu', 'Rich meat sauces', 'Creamy mushroom sauce'],
    image: pPappar,
    bestSeller: false,
    featured: false,
  },
  {
    id: 'barley-tagliatelle',
    slug: 'barley-tagliatelle',
    name: 'Barley Tagliatelle',
    category: 'whole-grain',
    ingredient: 'barley',
    pastaType: 'tagliatelle',
    packSize: '500 g',
    price: 824,
    unit: 'pack',
    description: 'Ancient grain barley tagliatelle with a nutty, robust flavor and excellent nutritional profile. Perfect for rich sauces and hearty dishes.',
    cookingTime: '8-10 min',
    suggestedDishes: ['Mushroom sauces', 'Hearty stews', 'Grain bowls'],
    image: barTaglia,
    bestSeller: false,
    featured: false,
  },
  {
    id: 'barley-spaghetti',
    slug: 'barley-spaghetti',
    name: 'Barley Spaghetti',
    category: 'whole-grain',
    ingredient: 'barley',
    pastaType: 'spaghetti',
    packSize: '500 g',
    price: 824,
    unit: 'pack',
    description: 'Ancient grain barley spaghetti with a nutty, robust flavor and excellent nutritional profile. A wholesome alternative to traditional pasta.',
    cookingTime: '8-10 min',
    suggestedDishes: ["Mushroom sauces", "Hearty stews", "Grain bowls"],
    image: barSpa,
    bestSeller: false,
    featured: false,
  },
  {
    id: 'barley-penne',
    slug: 'barley-penne',
    name: 'Barley Penne',
    category: 'whole-grain',
    ingredient: 'barley',
    pastaType: 'penne',
    packSize: '500 g',
    price: 824,
    unit: 'pack',
    description: 'Ancient grain barley penne with a nutty, robust flavor and excellent nutritional profile. Ideal for thick sauces and baked pasta dishes.',
    cookingTime: '8-10 min',
    suggestedDishes: ['Mushroom sauces', 'Hearty stews', 'Grain bowls'],
    image: barPenne,
    bestSeller: false,
    featured: false,
  },
];