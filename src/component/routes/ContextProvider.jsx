import { useState } from "react";
import { Context } from "./Context.jsx";

export const ContextProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [cart, setCart] = useState({});

  return (
    <Context.Provider
      value={{
        products: [productList, setProductList],
        cartItems: [cart, setCart],
      }}
    >
      {children}
    </Context.Provider>
  );
};
