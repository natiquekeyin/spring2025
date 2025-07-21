import { CartContext } from "../context/Cart";
import { useContext } from "react";

const Items = ({ name, price }) => {
  const cart = useContext(CartContext);

  return (
    <div>
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <button
        onClick={() =>
          cart.setItems([...cart.items, { name: name, price: price }])
        }
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Items;
