import { useContext } from "react";
import CartButtons from "./CartButtons";
import { CartContext } from "../CartContext";

export default function Product({ product}) {
  const { name, price, image } = product;
  const { addToCart, cartItems } = useContext(CartContext);
  const item = cartItems.find((cartItem) => cartItem.id === product.id);
  return (
    <div className="card">
      <img src={image} alt={name} className="small" />
      <h3>{name}</h3>
      <div>${price}</div>
      {item ? (
        <CartButtons item={item} />
      ) : (
        <button onClick={() => addToCart(product)}>Add To Cart</button>
      )}
    </div>
  );
}
