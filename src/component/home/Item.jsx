import style from "../../style/home/Item.module.css";

export default function Item({ product, cart, setCart }) {
  const addProduct = () => {
    const copy = cart;
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
        <h3>{product.title}</h3>
        <h2>${product.price}</h2>
        <button onClick={addProduct}>Add to Cart</button>
      </div>
    </div>
  );
}
