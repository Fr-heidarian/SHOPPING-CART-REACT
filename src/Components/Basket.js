export default function Basket({cartItems}) {

  return (
    <div className="section">
      <h2>Cart Items</h2>
      <div>Cart is empty</div>
      {cartItems.map((item)=>(<div>{item.name}</div>))}
    </div>
  );
}

