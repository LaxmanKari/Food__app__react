import { useSelector, useDispatch } from "react-redux";
import FoodItem from "../components/FoodItem";
//import { clearCart } from "../utils/cartSlice";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  //subscribing to my cart slice (portion of my redux store)
  const items = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1 className="font-bold text-xl">Cart items</h1>
      <button
        className="bg-green-200 p-5 m-5"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      <div className="flex">
        {items.map((item) => (
          <FoodItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;

{
  /* <div className="p-5 m-5 bg-green-300">
        {items.map((item) => (
          <li>
            <h1 className="bg-gray-50">{item}</h1>
          </li>
        ))}
      </div> */
}
