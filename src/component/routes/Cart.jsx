import style from "../../style/routes/Cart.module.css";
import React from "react";
import Navbar from "./Navbar.jsx";
import Order from "../cart/Order.jsx";
import Subtotal from "../cart/Subtotal.jsx";
import { Context } from "./Context.jsx";

export default function Cart() {
  const { cartItems } = React.useContext(Context);
  const [cart] = cartItems;
  return (
    <div>
      <Navbar />
      <div className={style.content}>
        <ul className={style.orderList}>
          {Object.keys(cart).map((item, index) => (
            <li role="order" key={index}>
              <Order productName={item} />
            </li>
          ))}
        </ul>
        <Subtotal />
      </div>
    </div>
  );
}
