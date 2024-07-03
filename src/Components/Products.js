import { useEffect, useReducer } from "react";
import Product from "./Product";
import LoadingComponent from "./LoadingComponent";

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

export default function Products({ searchParam }) {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");

  const [{ products, loading, error }, dispatch] = useReducer(reducer, {
    products: [],
    loading: false,
    error: "",
  });

  useEffect(() => {
    const readProducts = async () => {
      let url = "https://6300a18859a8760a757d441c.mockapi.io/User";
      if (searchParam) {
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

    let timerId;
    if (searchParam) {
      timerId = setTimeout(readProducts, 1000);
    } else {
      readProducts();
    }

    return () => clearTimeout(timerId);
  }, [searchParam]);

  if (loading) {
    return <LoadingComponent />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="row">
      {products.map((p) => (
        <Product key={p.id} product={p} />
      ))}
    </div>
  );
}
