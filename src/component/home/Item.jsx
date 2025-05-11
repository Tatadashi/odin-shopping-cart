import style from "../../style/home/Item.module.css";
import React from "react";
import { Context } from "../routes/Context";

export default function Item({ product }) {
  const { cartItems } = React.useContext(Context);
  const [cart, setCart] = cartItems;
  const addProduct = () => {
    const copy = { ...cart };
    if (product.title in cart) {
      copy[product.title]++;
    } else {
      copy[product.title] = 1;
    }
    setCart(copy);
  };

  return (
    <div className={style.product}>
      <img src={product.image} alt={product.title}></img>
      <div>
        <h3 role="productName">{product.title}</h3>
        <h2>${product.price.toFixed(2)}</h2>
        <button onClick={addProduct}>Add to Cart</button>
      </div>
    </div>
  );
}
