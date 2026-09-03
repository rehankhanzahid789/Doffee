import creamBruleeLatte from "../assets/products/cream-brulee-latte.jpg";
import honeyAlmondLatte from "../assets/products/honey-almond-latte.jpg";
import parisianOrangeMocha from "../assets/products/parisian-orange-mocha.jpg";
import pistachioCreamLatte from "../assets/products/pistachio-cream-latte.jpg";
import classicButterCroissant from "../assets/products/classic-butter-croissant.jpg";
import almondCreamCroissant from "../assets/products/almond-cream-croissant.jpg";
import chocolateHazelnutCroissant from "../assets/products/chocolate-hazelnut-croissant.jpg";
import chickenTikkaSandwich from "../assets/products/chicken-tikka-sandwich.jpg";
import chickenClubSandwich from "../assets/products/chicken-club-sandwich.jpg";
import veggieDelightSandwich from "../assets/products/veggie-delight-sandwich.jpg";
import cookiesAndCreamDonut from "../assets/products/cookies-and-cream-donut.png";
import saltedCaramelPretzelDonut from "../assets/products/salted-caramel-pretzel-donut.png";
import berryCheesecakeDonut from "../assets/products/berry-cheesecake-donut.png";

export const menu = {
  signatureCoffee: [
    {
      id: "creme-brulee-latte",
      name: "Crème Brûlée Latte",
      price: 650,
      description: "Espresso + Vanilla Custard + Caramelized",
      image: creamBruleeLatte,
    },
    {
      id: "orange-cream-cold-brew",
      name: "Orange Cream Cold Brew",
      price: 680,
      description: "Cold Brew + Orange Vanilla Cream",
      image: parisianOrangeMocha,
    },
    {
      id: "honey-almond-latte",
      name: "Honey Almond Latte",
      price: 620,
      description: "Espresso + Honey + Almond",
      image: honeyAlmondLatte,
    },
    {
      id: "pistachio-cream-latte",
      name: "Pistachio Cream Latte",
      price: 680,
      description: "Espresso + Pistachio + Creamy Milk",
      image: pistachioCreamLatte,
    },
  ],
  signatureDonuts: [
    {
      id: "cookies-and-cream",
      name: "Cookies & Cream",
      price: 420,
      description: "Vanilla glaze, crushed cookie crumble, cookie halves",
      image: cookiesAndCreamDonut,
    },
    {
      id: "salted-caramel-pretzel",
      name: "Salted Caramel Pretzel",
      price: 440,
      description: "Caramel glaze, pretzel pieces, flaked sea salt",
      image: saltedCaramelPretzelDonut,
    },
    {
      id: "berry-cheesecake",
      name: "Berry Cheesecake",
      price: 450,
      description: "Cheesecake glaze, mixed berry compote, graham crumble",
      image: berryCheesecakeDonut,
    },
  ],
  croissants: [
    {
      id: "classic-butter",
      name: "Classic Butter",
      price: 340,
      description: "Flaky, golden and Perfectly buttery",
      image: classicButterCroissant,
    },
    {
      id: "almond-cream",
      name: "Almond Cream",
      price: 390,
      description: "Almond cream topped with toasted almond",
      image: almondCreamCroissant,
    },
    {
      id: "chocolate-hazelnut",
      name: "Chocolate Hazelnut",
      price: 390,
      description: "Filled with rich chocolate hazelnut spread",
      image: chocolateHazelnutCroissant,
    },
  ],
  sandwiches: [
    {
      id: "chicken-tikka",
      name: "Chicken Tikka",
      price: 600,
      description: "Grilled chicken tikka, mint mayo, lettuce, cucumber",
      image: chickenTikkaSandwich,
    },
    {
      id: "chicken-club",
      name: "Chicken Club",
      price: 520,
      description: "Grilled chicken, lettuce, tomato, egg",
      image: chickenClubSandwich,
    },
    {
      id: "veggie-delight",
      name: "Veggie Delight",
      price: 500,
      description: "Hummus, roasted veggies, lettuce, cucumber, sundried tomato",
      image: veggieDelightSandwich,
    },
  ],
};

export const menuSections = [
  { key: "signatureCoffee", title: "Signature Coffee" },
  { key: "signatureDonuts", title: "Signature Donuts" },
  { key: "croissants", title: "Croissants" },
  { key: "sandwiches", title: "Sandwiches" },
];

export function formatPrice(amount) {
  return `Rs ${amount.toLocaleString("en-PK")}`;
}
