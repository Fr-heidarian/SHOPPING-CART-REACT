import CartButtons from "./CartButtons.js";

export default function product({ product, onAdd, onRemove, item }) {
  const { name, price, image } = product;

  return (
    <>
      <div className="card">
        <img src={image} alt={name} className="small" />
        <h3>{name}</h3>
        <div>${price}</div>
        {item ? (
          <CartButtons onAdd={onAdd} onRemove={onRemove} item={item} />
        ) : (
          <button
            onClick={() => {
              onAdd(product);
            }}
          >
            Add To Cart
          </button>
        )}
      </div>
    </>
  );
}
