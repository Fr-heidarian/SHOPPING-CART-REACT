import "./App.css";
import Header from "./Components/Header.js";
import Main from "./Components/Main.js";
import Basket from "./Components/Basket.js";

import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchParam, setSearchParam] = useState("");

  useEffect(() => {
    const readProducts = async () => {
      let url = "https://6300a18859a8760a757d441c.mockapi.io/User";
      if (url) {
        url += `?name=${searchParam}`;
      }
      try {
        setLoading(true);
        const response = await fetch(url);
        if (response.status === 200) {
          const products = await response.json();
          setProducts(products);
        } else {
          setProducts([]);
          setError(`Server responsed with error code ${response.status}`);
        }
      } catch (e) {
        console.log(e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    readProducts();
  }, [searchParam]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

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
