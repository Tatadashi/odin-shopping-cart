import style from "../../style/cart/Order.module.css";
import { useContext } from "react";
import { Context } from "../routes/Context";

export default function Order({ productName }) {
  const { products, cartItems } = useContext(Context);
  const [productList] = products;
  const [cart, setCart] = cartItems;

  const remove = () => {
    const copy = { ...cart };
    if (copy[productName] === 0) {
      delete copy[productName];
    }
  };

  const increment = () => {
    const copy = { ...cart };

    copy[productName]++;
    if (copy[productName] > 9999) {
      copy[productName] = 9999;
    }
    setCart(copy);
  };

  const decrement = () => {
    const copy = { ...cart };
    copy[productName]--;

    if (copy[productName] < 0) {
      copy[productName] = 0;
    }
    setCart(copy);
  };

  const change = (e) => {
    const copy = { ...cart };

    let newValue = e.target.value;
    if (newValue > 9999) {
      newValue = 9999;
    } else if (newValue == 0) {
      newValue = 0;
    }

    copy[productName] = newValue;
    setCart(copy);
  };

  function getProduct() {
    let foundProduct;
    productList.forEach((item) => {
      if (item.title === productName) {
        foundProduct = item;
      }
    });
    return foundProduct;
  }
  const product = getProduct();

  const getTotal = () => {
    return (product.price * cart[productName]).toFixed(2);
  };
  return (
    <div className={style.order}>
      <div className={style.top}>
        <img src={product.image} alt={productName} />
        <h3>{productName}</h3>
      </div>
      <div className={style.details}>
        <button className={style.remove} onClick={remove}>Remove from Cart</button>
        <h3>${product.price.toFixed(2)}</h3>
        <div className={style.amount}>
          <button onClick={decrement}>-</button>
          <input
            className={style.input}
            type="number"
            onChange={(e) => change(e)}
            value={cart[productName]}
          ></input>
          <button onClick={increment}>+</button>
        </div>
        <h3>Total:</h3>
        <h3>${getTotal()}</h3>
      </div>
    </div>
  );
}
