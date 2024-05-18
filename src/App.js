import "./App.css";
import Header from "./Components/Header.js";
import Main from "./Components/Main.js";
import Basket from "./Components/Basket.js";

import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchParam, setSearchParam] = useState("");

  useEffect(() => {
    const readProducts = async () => {
      let url = "https://6300a18859a8760a757d441c.mockapi.io/User";
      if (url) {
        url += `?name=${searchParam}`;
      }
      const response = await fetch(url);
      const products = await response.json();
      setProducts(products);
    };
    readProducts();
  }, [searchParam]);

  const handleAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist) {
      const newCartItems = cartItems.map((cartItem) =>
        cartItem.id === product.id ? { ...exist, qty: exist.qty + 1 } : cartItem
      );
      setCartItems(newCartItems);
    } else {
      const newCartItems = [...cartItems, { ...product, qty: 1 }];
      setCartItems(newCartItems);
    }
  };

  const handleRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter(
        (cartItem) => cartItem.id !== product.id
      );
      setCartItems(newCartItems);
    } else {
      const newCartItems = cartItems.map((cartItem) =>
        cartItem.id === product.id ? { ...exist, qty: exist.qty - 1 } : cartItem
      );
      setCartItems(newCartItems);
    }
  };

  return (
    <>
      <Header
        cartItemsCount={cartItems.reduce((acc, item) => acc + item.qty, 0)}
      />
      <div className="row">
        <Main
          products={products}
          cartItems={cartItems}
          onAdd={handleAdd}
          onRemove={handleRemove}
          onSearch={(param) => setSearchParam(param)}
        />
        <Basket
          cartItems={cartItems}
          onAdd={handleAdd}
          onRemove={handleRemove}
        />
      </div>
    </>
  );
}

export default App;
