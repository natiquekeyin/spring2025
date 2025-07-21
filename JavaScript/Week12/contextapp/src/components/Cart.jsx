import { useContext } from "react";
import { CartContext } from "../context/Cart";

const Cart = () => {
  const cart = useContext(CartContext);
  return (
    <div>
      <h1>Cart</h1>
      {cart &&
        cart.items.map(() => (
          <li>
            {item.name} - {item.price}
          </li>
        ))}
    </div>
  );
};
export default Cart;
