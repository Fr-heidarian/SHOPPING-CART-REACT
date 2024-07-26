import Product from "./Product";

export default function Products({ searchParam }) {
  return (
    <div className="row">
      {products.map((p) => (
        <Product key={p.id} product={p} />
      ))}
    </div>
  );
}
