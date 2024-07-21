import { useEffect } from "react";
import Product from "./Product";
import LoadingComponent from "./LoadingComponent";
import { useDispatch, useSelector } from "react-redux";
import { readProducts } from "../features/product/productSlice";

export default function Products({ searchParam }) {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector((state) => state.product);

  useEffect(() => {
    let timerId;
    if (searchParam) {
      timerId = setTimeout(() => dispatch(readProducts(searchParam)), 1000);
    } else {
      dispatch(readProducts());
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
