import style from "../../style/Item.module.css";

export default function Item({ product }) {
  return (
    <div className={style.product}>
        <img src={product.image} alt={product.title}></img>
      <div>
        <h3>{product.title}</h3>
        <h2>${product.price}</h2>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
