import style from "../../style/home/Catalog.module.css";
import React, { useEffect } from "react";
import { Context } from "../routes/Context.jsx";
import Item from "./Item.jsx";

export default function Catalog() {
  const { products } = React.useContext(Context);
  const [productList, setProductList] = products;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (sessionStorage.length === 0) {
          fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
              sessionStorage.setItem("products", JSON.stringify(data));
              setProductList(data);
            });
        } else {
          const data = JSON.parse(sessionStorage.getItem("products"));
          setProductList(data);
        }
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };
    fetchProducts();
  }, [setProductList]);

  return (
    <div className={style.catalog}>
      {productList &&
        productList.map((product) => (
          <Item key={product.id} product={product} />
        ))}
    </div>
  );
}
