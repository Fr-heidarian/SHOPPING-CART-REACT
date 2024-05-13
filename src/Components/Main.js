export default function Main({ products=[] }) {
  return (
    <div className="section">
      <h2>Products</h2>
      <div className="row">
        {products.map((p) => (
          <div>{p.name}</div>
        ))}
      </div>
    </div>
  );
}
