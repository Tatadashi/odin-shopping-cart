import style from "../style/catalog.module.css";
import { useState, useEffect } from "react";
import Item from "./item.jsx";

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
