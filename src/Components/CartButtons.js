import { useContext } from "react";
import { CartContext } from "../CartContext";

export default function CartButtons({item }) {
  const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className="buttons-container">
      <button className="remove" onClick={() => removeFromCart(item)}>
        -
      </button>
      <div>{item.qty}</div>
      <button className="add" onClick={() => addToCart(item)}>
        +
      </button>
    </div>
  );
}
