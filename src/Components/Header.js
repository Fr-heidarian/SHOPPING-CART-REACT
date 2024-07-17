import { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../features/cart/cartSlice.js";

export default function Header() {
  // const { getCartTotal } = useContext(CartContext);
  const { total, cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cartItems]);

  return (
    <div className="row section">
      <a href="#">
        <h2>Simple Shopping Cart</h2>
      </a>
      <div className="row center">
        <a href="#">
          <FaShoppingCart className="icon-style" />
        </a>
        {/* {getCartTotal() > 0 && <div className="badge">{getCartTotal()}</div>} */}
        <div className="badge">{total}</div>
        <a href="#">Sign In</a>
      </div>
    </div>
  );
}
