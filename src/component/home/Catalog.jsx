import style from "../../style/home/Catalog.module.css";
import { useState, useEffect } from "react";
import Item from "./Item.jsx";

export default function Catalog() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProductList(data));
  }, []);

  return (
    <div className={style.catalog}>
      {productList.map((product) => (
          <Item key={product.id} product={product} />
      ))}
    </div>
  );
}
