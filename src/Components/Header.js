import { useContext } from "react";
import { CartContext } from "../CartContext.js";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  const { getCartTotal } = useContext(CartContext);

  return (
    <div className="row section">
      <a href="#">Simple Shopping Cart</a>
      <div className="row center">
        <a href="#">
          <FaShoppingCart className="icon-style" />
        </a>
        {getCartTotal() > 0 && <div className="badge">{getCartTotal()}</div>}

        <a href="#">Sign In</a>
      </div>
    </div>
  );
}
