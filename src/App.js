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
    setCartItems((items) => {
      return [...items, product];
    });
  };

  return (
    <>
      <Header />
      <div className="row">
        <Main products={products} onAdd={handleAdd} />
        <Basket cartItems={cartItems} />
      </div>
    </>
  );
}

export default App;
