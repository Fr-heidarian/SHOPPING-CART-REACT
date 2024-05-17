import CartButtons from "./CartButtons";

export default function Basket({ cartItems, onAdd, onRemove }) {
  return (
    <div className="section">
      <h2>Cart Items</h2>
      {cartItems.length === 0 && <div>Cart is empty</div>}
      {cartItems.map((item) => (
        <div className="row center">
          <div>{item.name}</div>
          <CartButtons onAdd={onAdd} onRemove={onRemove} item={item} />
          <div>
            {item.qty}*${item.price}
          </div>
        </div>
      ))}
    </div>
  );
}
