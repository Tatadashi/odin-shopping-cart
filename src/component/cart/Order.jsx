import style from "../../style/cart/Order.module.css";
import asset from "../../assets/basket-icon.svg";

export default function Order() {
  return (
    <div className={style.order}>
      <div className={style.top}>
        <img src={asset} alt="" />
        <h3>Product Name</h3>
      </div>
      <div className={style.details}>
        <div className={style.amount}>
          <button>-</button>
          <input className={style.input} type="number" value="9"></input>
          <button>+</button>
        </div>
        <h3>$50.00</h3>
      </div>
    </div>
  );
}
