import style from '../../style/cart/Subtotal.module.css'
import { useContext } from 'react';
import { Context } from '../routes/Context.jsx';

export default function Subtotal() {
  const { products, cartItems } = useContext(Context);
    const [productList] = products;
    const [cart] = cartItems;

    function getProduct(productName) {
      let foundProduct;
      productList.forEach((item) => {
        if (item.title === productName) {
          foundProduct = item;
        }
      });
      return foundProduct;
    }

    function getSubtotal() {
        let subtotal = 0;
        Object.keys(cart).map((name) => {
            subtotal += getProduct(name).price * cart[name];
        });
        return subtotal.toFixed(2);
  };
  
  function getTax(total) {
    return (total * 0.105).toFixed(2) 
  }

    function getTotal() {
        let total = getSubtotal();
        total *= 1.105;
        total += 10;
        return total.toFixed(2);
    }
    return (
      <div className={style.cart}>
        <h2>Shipping: $10.00</h2>
        <h2>Subtotal: ${getSubtotal()}</h2>
        <h2>Tax: ${getTax(getSubtotal())} </h2>
        <h2>Total: ${getTotal()}</h2>
        <button>Checkout</button>
      </div>
    );
}