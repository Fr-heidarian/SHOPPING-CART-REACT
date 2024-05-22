import { useReducer, useState, useEffect } from "react";
import Product from "./Product.js";
import LoadingComponent from "./LoadingComponent.js";

const ACTIONS = {
  FETCH_REQUEST: "fetch_request",
  FETCH_SUCCESS: "fetch_success",
  FETCH_FAIL: "fetch_fail",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_REQUEST:
      return { ...state, loading: true };
    case ACTIONS.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        products: action.payload ?? [],
      };
    case ACTIONS.FETCH_FAIL:
      return { ...state, loading: false, error: action.payload, products: [] };
    default:
      return state;
  }
};

export default function Main() {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");

  const [{ products, loading, error }, dispatch] = useReducer(reducer, {
    products: [],
    loading: false,
    error: "",
  });
  const [searchParam, setSearchParam] = useState("");

  useEffect(() => {
    const readProducts = async () => {
      let url = "https://6300a18859a8760a757d441c.mockapi.io/User";
      if (url) {
        url += `?name=${searchParam}`;
      }
      try {
        // setLoading(true);
        dispatch({ type: ACTIONS.FETCH_REQUEST });
        const response = await fetch(url);
        if (response.status === 200) {
          const products = await response.json();
          // setProducts(products);
          dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: products });
        } else {
          // setProducts([]);
          // setError(`Server responsed with error code ${response.status}`);
          dispatch({
            type: ACTIONS.FETCH_FAIL,
            payload: `Server responsed with error code ${response.status}`,
          });
        }
      } catch (e) {
        console.log(e);
        // setError(e.message);
        dispatch({ type: ACTIONS.FETCH_FAIL, payload: e.message });
      }
      //  finally {
      //   setLoading(false);
      // }
    };
    readProducts();
  }, [searchParam]);

  if (loading) {
    return (
      <>
        <product />
        <LoadingComponent />
      </>
    );
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="section">
      <h2>Products</h2>
      <div>
        <input
          type="text"
          placeholder="Search here..."
          className="search-input"
          onChange={(e) => {
            setSearchParam(e.target.value);
          }}
        />
      </div>
      <div className="row">
        {products.map((p) => (
          <Product key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
