import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../features/cart/cartSlice";

export default function CartButtons({ item }) {
  // const { addToCart, removeFromCart } = useContext(CartContext);
  const dispatch = useDispatch();

  return (
    <div className="buttons-container">
      {/* <button className="remove" onClick={() => removeFromCart(item)}>
        -
      </button> */}
      <button
        className="remove width-item-m"
        onClick={() => dispatch(removeFromCart(item))}
      >
        -
      </button>
      <div>{item.qty}</div>
      {/* <button className="add" onClick={() => addToCart(item)}>
        +
      </button> */}
      <button
        className="add flex-width-m"
        onClick={() => dispatch(addToCart(item))}
      >
        +
      </button>
    </div>
  );
}
