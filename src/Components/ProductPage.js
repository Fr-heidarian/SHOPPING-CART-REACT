import { useParams } from "react-router-dom";
import { useReadProductQuery } from "../features/product/productSlice-rtkQuery";
import LoadingComponent from "./LoadingComponent";

export default function ProductPage() {
  const { productId } = useParams();
  const { data: product, isLoading } = useReadProductQuery(productId);

  if (isLoading) {
    return <LoadingComponent />;
  }
  return <div>{product.name}</div>;
}
