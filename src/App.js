import "./App.css";
import Header from "./Components/Header.js";
import Main from "./Components/Main.js";
import Basket from "./Components/Basket.js";

import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [searchParam, setSearchParam] = useState("");

  useEffect(() => {
    const readProducts = async () => {
      let url = "https://6300a18859a8760a757d441c.mockapi.io/User";
      if (url) {
        url += `?name=${searchParam}`;
      }
      try {
        const response = await fetch(url);
        if (response.status === 200) {
          const products = await response.json();
          setProducts(products);
        } else {
          setProducts([]);
        }
      } catch (e) {
        console.log(e);
      }
    };
    readProducts();
  }, [searchParam]);

  return (
    <>
      <Header />
      <div className="row">
        <Main products={products} onSearch={(param) => setSearchParam(param)} />
        <Basket />
      </div>
    </>
  );
}

export default App;
