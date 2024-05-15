import "./App.css";
import Header from "./Components/Header.js";
import Main from "./Components/Main.js";
import Basket from "./Components/Basket.js";
import data from "./data.js";
import { useState } from "react";

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const handleAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist) {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      );
      setCartItems(newCartItems);
    } else {
      const newCartItems = [...cartItems, { ...product, qty: 1 }];
      setCartItems(newCartItems);
    }
  };

  return (
    <>
      <Header
        cartItemsCount={cartItems.reduce((acc, item) => acc + item.qty, 0)}
      />
      <div className="row">
        <Main products={products} onAdd={handleAdd} />
        <Basket cartItems={cartItems} />
      </div>
    </>
  );
}

export default App;
