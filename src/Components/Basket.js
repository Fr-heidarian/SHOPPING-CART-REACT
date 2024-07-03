import { useContext } from "react";
import CartButtons from "./CartButtons";
import { CartContext } from "../CartContext";

export default function Basket() {
  const { cartItems} = useContext(CartContext);
  return (
    <div className="section section-area-right">
      <h2>Cart Items</h2>
      {cartItems.length === 0 && <div>Cart is empty</div>}
      {cartItems.map((item) => (
        <div className="row center">
          <div>{item.name}</div>
          <CartButtons item={item} />
          <div>
            {item.qty}*${item.price}
          </div>
        </div>
      ))}
    </div>
  );
}
