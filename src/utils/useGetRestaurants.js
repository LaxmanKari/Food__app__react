import { useEffect, useState } from "react";

//if swiggy's live api changes, we can use this hardcoded data
import { demoData } from "../../demo";

const useGetRestaurants = (SWIGGY_API) => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();

    setAllRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  return allRestaurants;
};

export default useGetRestaurants;
