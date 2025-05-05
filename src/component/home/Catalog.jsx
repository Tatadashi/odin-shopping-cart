import style from "../../style/home/Catalog.module.css";
import Item from "./Item.jsx";

export default function Catalog({ productList, cart, setCart }) {
  return (
    <div className={style.catalog}>
      {productList && 
        productList.map((product) => (
          <Item key={product.id} product={product} cart={cart} setCart={setCart} />
      ))
      }
    </div>
  );
}
