import { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../features/cart/cartSlice.js";
import { Link } from "react-router-dom";

export default function Header() {
  // const { getCartTotal } = useContext(CartContext);
  const { total, cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cartItems]);

  return (
    <div className="row section">
      <Link href="/">
        <h2>Simple Shopping Cart</h2>
      </Link>
      <div className="row center">
        <Link href="/cart">
          <FaShoppingCart className="icon-style" />
        </Link>
        {/* {getCartTotal() > 0 && <div className="badge">{getCartTotal()}</div>} */}
        {total > 0 && <div className="badge">{total}</div>}
        <Link href="/sign in">Sign In | </Link>
        <Link to="/create"> Create New Product</Link>
      </div>
    </div>
  );
}
