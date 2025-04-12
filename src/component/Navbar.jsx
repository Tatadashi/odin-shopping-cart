import style from "../style/Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
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
        99+
      </div>
    </div>
  );
}
