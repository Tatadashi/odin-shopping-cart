import style from "../../style/cart/Order.module.css";
import { useContext } from "react";
import { Context } from "../routes/Context";

export default function Order({ productName }) {
  const { products, cartItems } = useContext(Context);
  const [productList] = products;
  const [cart] = cartItems;

  function getProduct() {
    let foundProduct;
    productList.forEach((item) => {
      if (item.title == productName) {
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
        <h3>${product.price.toFixed(2)}</h3>
        <div className={style.amount}>
          <button>-</button>
          <input
            className={style.input}
            type="number"
            value={cart[productName]}
          ></input>
          <button>+</button>
        </div>
        <h3>Total:</h3>
        <h3>${getTotal()}</h3>
      </div>
    </div>
  );
}
