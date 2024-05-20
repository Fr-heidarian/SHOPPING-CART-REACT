import { useContext } from "react";
import { CartContext } from "../CartContext.js";

export default function Header() {
  const { getCartTotal } = useContext(CartContext);

  return (
    <div className="row section">
      <a href="#">Simple Shopping Cart</a>
      <div className="row center">
        <a href="#">Cart</a>
        {getCartTotal() > 0 && <div className="badge">{getCartTotal()}</div>}

        <a href="#">Sign In</a>
      </div>
    </div>
  );
}
