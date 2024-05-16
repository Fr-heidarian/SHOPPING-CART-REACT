export default function Basket({ cartItems, onAdd, onRemove }) {
  return (
    <div className="section">
      <h2>Cart Items</h2>
      {cartItems.length === 0 && <div>Cart is empty</div>}
      {cartItems.map((item) => (
        <div className="row center">
          <div>{item.name}</div>
          <div className="buttons-container">
            <button className="remove" onClick={() => onRemove(item)}>
              -
            </button>
            <div>{item.qty}</div>
            <button className="add" onClick={() => onAdd(item)}>
              +
            </button>
          </div>
          <div>
            {item.qty}*${item.price}
          </div>
        </div>
      ))}
    </div>
  );
}
