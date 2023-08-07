import { IMG_CON_URL } from "../constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const RestaurentCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  // //destructure data received from restaurant
  // const {name, cuisines, cloudinaryImageId, lastMileTravelString} = restaurant.data;
  //imported this context for testing purpose
  const {user} = useContext(UserContext); 

  return (
    <div className="w-56 p-5 m-2 shadow-lg bg-pink-50 ">
      <img src={IMG_CON_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString}</h4>
    </div>
  );
};

export default RestaurentCard;
