import { restranuntList } from "../../constants";
import RestranuntCard from "../../RestrurantCard";
import { useState } from "react";

function filterdata(searchtext, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.name.includes(searchtext)
  );
}
 
const Body = () => {
  const [searchtext, setsearchtext] = useState("");
  const [restaurants, setresraurants] = useState(restranuntList);
  return (
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
            const data = filterdata(searchtext, restaurants);
            setresraurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant, index) => (
          <RestranuntCard key={index} {...restaurant} />
        ))}
      </div>
    </>
  );
};

export default Body;
