import { openModal } from "../features/modal/modalSlice";
import CartButtons from "./CartButtons";
import { useDispatch, useSelector } from "react-redux";

export default function Basket() {
  // const { cartItems} = useContext(CartContext);
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <div className="section section-area-right">
      <h2>Cart Items</h2>
      {cartItems.length === 0 && <div>Cart is empty</div>}
      {cartItems.map((item) => (
        <div className="row center">
          <div className="width-item-xl">{item.name}</div>
          <CartButtons item={item} />
          <div className="width-item-m">
            {item.qty}*${item.price}
          </div>
        </div>
      ))}
      <button
        className="button-modal"
        onClick={() => {
          dispatch(openModal());
        }}
      >
        Clear Cart
      </button>
    </div>
  );
}
