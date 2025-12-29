import { useEffect, useState } from "react";
import { DATA_URL } from "../constants";

const useResturants = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  async function fetchRestaurants() {
    const res = await fetch(DATA_URL);
    const json = await res.json();

    const restaurants = json?.data?.cards?.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setAllRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  }

  return {
    allRestaurants,
    setAllRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
  };
};

export default useResturants;
