import Product from "./Product.js";

export default function Main({ products ,onAdd }) {
  return (
    <div className="section">
      <h2>Products</h2>
      <div className="row">
        {products.map((p) => (
          <Product key={p.id} product={p} onAdd={onAdd}/>
        ))}
      </div>
    </div>
  );
}
