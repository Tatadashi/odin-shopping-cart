import style from '../../style/routes/Cart.module.css';
import React from 'react';
import Navbar from "./Navbar.jsx";
import Order from '../cart/Order.jsx';
import Subtotal from '../cart/Subtotal.jsx';

export default function Cart() {
    return (
      <div>
        <Navbar />
        <div className={style.content}>
          {/** orderlist need gap btwn orders*/}
          <Order />
          <Subtotal />
        </div>
      </div>
    );
}