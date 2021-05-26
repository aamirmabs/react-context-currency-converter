import React from "react";
import { useCurrency } from "../contexts/CurrencyContext";

const productsDB = [
  {
    id: 1,
    title: "Shirt",
    price: 35.99,
  },
  {
    id: 2,
    title: "Scarf",
    price: 9.99,
  },
  {
    id: 3,
    title: "Pant",
    price: 49.99,
  },
  {
    id: 4,
    title: "Skirt",
    price: 29.99,
  },
  {
    id: 5,
    title: "Jacket",
    price: 79.99,
  },
];

const Products = () => {
  const { currency } = useCurrency();
  return (
    <div>
      <h2>Products</h2>
      {productsDB.map((product) => {
        const { id, title, price } = product;
        return (
          <div key={id + Math.random()}>
            <h3>{title}</h3>
            <h4>
              {currency.symbol} {(price * currency.multiplier).toFixed(2)}
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
