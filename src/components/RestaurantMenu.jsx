import { useParams } from "react-router-dom";
import { IMG_CON_URL } from "../constants";
import Shimmer from "../components/Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);
  //console.log(restaurant);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div className="p-5 m-5 shadow-lg">
        <h1 className="font-bold text-xl">{restaurant?.name}</h1>
        <h2>Restaurant id: {restaurant?.id}</h2>

        <img
          src={
            restaurant.cloudinaryImageId !== undefined
              ? IMG_CON_URL + restaurant.cloudinaryImageId
              : "https://tse2.mm.bing.net/th?id=OIP.dYliHU5Ndm9Es1_EBM5rVgHaEK&pid=Api&P=0&h=180"
          }
        />
        <h2>City: {restaurant?.city}</h2>
        <h2>Area name: {restaurant?.areaName}</h2>
        <h2>Rating: {restaurant?.avgRating}</h2>
      </div>

      <div className="p-5 m-5 bg-gray-800 shadow-lg">
        <h1 className="bg-purple-300 text-center">Menu</h1>
        {restaurant?.cuisines?.map((item) => (
          <li className="list-none pl-4 text-white" key={item.index}>
            {item}{" "}
            <button
              className="p-2 m-5 bg-green-200 text-black"
              onClick={() => addFoodItem(item)}
            >
              {" "}
              Add{" "}
            </button>{" "}
          </li>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
