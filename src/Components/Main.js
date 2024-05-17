import Product from "./Product.js";

export default function Main({ products, onAdd, onRemove, cartItems }) {
  return (
    <div className="section">
      <h2>Products</h2>
      <div className="row">
        {products.map((p) => (
          <Product
            key={p.id}
            product={p}
            onAdd={onAdd}
            onRemove={onRemove}
            item={cartItems.find((cartItem) => cartItem.id === p.id)}
          />
        ))}
      </div>
    </div>
  );
}
