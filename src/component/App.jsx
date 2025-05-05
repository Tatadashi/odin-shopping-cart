import style from "../style/App.module.css";
import { useState, useEffect } from "react";
import Navbar from "./routes/Navbar.jsx";
import Catalog from "./home/Catalog.jsx";

function App() {
  const [productList, setProductList] = useState([]);
  
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => { 
    try {
      if (sessionStorage.length === 0) {
        fetch("https://fakestoreapi.com/products")
          .then((response) => response.json())
          .then((data) => {
            sessionStorage.setItem("products", JSON.stringify(data));
            setProductList(data);
      })  
      } else {
        const data = JSON.parse(sessionStorage.getItem('products'));
        setProductList(data);
      }

    } catch (error) {
      console.error('Error fetching products', error);
    }
  };

  const [cart, setCart] = useState({});
  return (
    <div className={style.app}>
      <Navbar cart={cart} />
      <Catalog
        productList={productList}
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
}

export default App;
