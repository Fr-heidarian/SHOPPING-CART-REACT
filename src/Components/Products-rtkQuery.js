import { useReadProductsQuery } from "../features/product/productSlice-rtkQuery";
import LoadingComponent from "./LoadingComponent";
import Product from "./Product";

export default function Products({ searchParam }) {
  const { data: products, isLoading } = useReadProductsQuery(searchParam);

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <div className="row">
      {products.map((p) => (
        <Product key={p.id} product={p} />
      ))}
    </div>
  );
}
