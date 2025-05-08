import style from "../../style/routes/Navbar.module.css";
import React from "react";
import { Context } from "./Context.jsx";
import { Link } from "react-router-dom";
export default function Navbar() {
  const { cartItems } = React.useContext(Context);
  const [cart] = cartItems;
  const cartDisplay = () => {
    if (Object.keys(cart).length === 0) {
      return "0";
    } else {
      const sum = Object.values(cart).reduce((a, b) => a + b, 0);
      if (sum > 99) {
        return "99+";
      } else {
        return String(sum);
      }
    }
  };
  return (
    <div className={style.bar}>
      {/**do not want double tab index (button already serves as it) */}
      <Link to="/" tabIndex="-1">
        <button className={style.title}>Odin Shop</button>
      </Link>
      <Link to="/cart" tabIndex="-1">
        <button className={style.cart} title="Shopping Cart Button"></button>
      </Link>
      <div className={style.item} title="Items in Cart">
        {cartDisplay()}
      </div>
    </div>
  );
}
