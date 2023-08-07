import RestaurentCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import filterData from "../utils/helper";
import useOnline from "../utils/useOnline";
import useGetRestaurants from "../utils/useGetRestaurants";
import { SWIGGY_API } from "../constants";
import UserContext from "../utils/UserContext";

const Body = () => {
  // state variable
  const [searchText, setSearchText] = useState();
  const allRestaurants = useGetRestaurants(SWIGGY_API);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    if (allRestaurants?.length > 0) {
      setFilteredRestaurants(allRestaurants);
    }
  }, [allRestaurants]);

  const userStatus = useOnline();

  if (!userStatus) {
    return <h1>Offline, Please check your network connection</h1>;
  }

  if (!allRestaurants) {
    return null;
  }

  if (allRestaurants.length > 0 && filteredRestaurants.length === 0) {
    return <h1 className="font-bold">No results found for {searchText}</h1>;
  }

  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-5 bg-pink-50 my-5 text-center">
        <input
          type="text"
          className="focus:bg-gray-100 rounded-lg pl-2 h-10"
          placeholder="Restaurant"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md "
          onClick={() => {
            //filter cards
            //update the state variable restaurants (state variable)
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        
      </div>
      {}
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
            >
              <RestaurentCard {...restaurant?.info} />{" "}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;

// 3 times rendering
//initial
//after all restaurants fetched
//then updating filtered resturant
