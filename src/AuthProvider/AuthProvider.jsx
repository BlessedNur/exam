import React, { createContext, useEffect, useState } from "react";
export const formContext = createContext();

export default function AuthProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [currentUser, setCurrentUser] = useState(localStorage.getItem("user")||"")
  const [selectProduct, setSelectProduct] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <formContext.Provider
      value={[
        products,
        currentUser,
        setCurrentUser,
        selectProduct,
        setSelectProduct,
      ]}
    >
      {children}
    </formContext.Provider>
  );
}
