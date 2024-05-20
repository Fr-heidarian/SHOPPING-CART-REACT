import Product from "./Product.js";

export default function Main({ products, onSearch }) {
  return (
    <div className="section">
      <h2>Products</h2>
      <div>
        <input
          type="text"
          placeholder="Search here..."
          className="search-input"
          onChange={(e) => {
            onSearch(e.target.value);
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
