export default function Basket({ cartItems }) {
  return (
    <div className="section">
      <h2>Cart Items</h2>
      {cartItems.length === 0 && <div>Cart is empty</div>}
      {cartItems.map((item) => (
        <div className="row center">
          <div>{item.name}</div>
          <div>
            {item.qty}*${item.price}
          </div>
        </div>
      ))}
    </div>
  );
}
