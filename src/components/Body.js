import { restranuntList } from "../../constants";
import RestranuntCard from "../../RestrurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterdata(searchtext, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase()?.includes(searchtext.toLowerCase())
  );
}

const Body = () => {
  const [Allrestaurants, setAllrestaurants] = useState([]);
  const [searchtext, setsearchtext] = useState("");
  const [Filteredrestaurants, setFilteredsetresraurants] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);
  async function getRestaurants() {
    const data = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurantData = json?.data?.cards?.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setAllrestaurants(restaurantData);
    setFilteredsetresraurants(restaurantData);
  }
  //Conditional Rendering-Cond is applied with the return statement
  //if restraunt is  empty=> shimmer ui
  //if restraunt has data=?actual data ui

  return Allrestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchtext}
          onChange={(e) => {
            setsearchtext(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const data = filterdata(searchtext, Allrestaurants);
            setFilteredsetresraurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {Filteredrestaurants.length === 0 ? (
          <h1>No results found</h1>
        ) : (
          Filteredrestaurants?.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={`/ResturantMenu/${restaurant.info.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <RestranuntCard {...restaurant.info} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Body;
