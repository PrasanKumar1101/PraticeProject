import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { addItem } from "../../utils/cartSlice";
import { useDispatch } from "react-redux";
function ResturantMenu() {
  //this is how we read dynamic URL using prarams
  const { id } = useParams();
  const [resturantInfo, setresturantInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  const IMG_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";
  // console.log({ id });
  useEffect(() => {
    getRestaurantMent();
  }, []);

  //Action taking place when add item button is clicke on the ui
  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  async function getRestaurantMent() {
    const res = await fetch(
      `https://foodfire.onrender.com/api/menu?lat=12.9351929&lng=77.62448069999999&restaurantId=${id}`
    );
    const json = await res.json();
    const infoCard = json?.data?.cards?.find((card) => card?.card?.card?.info);
    // console.log(json.data);

    setresturantInfo(infoCard?.card?.card?.info);

    const menuCard = json?.data?.cards?.find((card) => card?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    const itemsMap = new Map();

    menuCard?.forEach((c) => {
      c?.card?.card?.itemCards?.forEach((item) => {
        itemsMap.set(item.card.info.id, item.card.info);
      });
    });

    setMenuItems([...itemsMap.values()]);
    // console.log(json.data);
  }
  if (!resturantInfo)
    return (
      <h2>
        <Shimmer />
      </h2>
    );
  return (
    <div className="restaurant-menu">
      {/* Restaurant Info */}
      <div className="restaurant-header">
        <img
          className="restaurant-image"
          src={IMG_CDN_URL + resturantInfo.cloudinaryImageId}
          alt={resturantInfo.name}
        />

        <div className="restaurant-details">
          <h1 className="restaurant-name">{resturantInfo?.name}</h1>
          <p className="restaurant-area">{resturantInfo?.areaName}</p>
          <p className="restaurant-rating">⭐ {resturantInfo.avgRating}</p>
        </div>
      </div>

      {/* Menu Section */}
      <div className="menu-section">
        <h2 className="menu-title">Menu</h2>

        <ul className="menu-list">
          {menuItems.map((item) => (
            <li key={item.id} className="menu-item">
              <div className="menu-item-info">
                <div>
                  {/* add item button handle by store redux toolkit */}
                  <button
                    className="addItem-btn"
                    onClick={() => addFoodItem(item)}
                  >
                    Add Iteam
                  </button>
                </div>
                <h4 className="menu-item-name">{item.name}</h4>
                <p className="menu-item-price">
                  ₹{(item.price || item.defaultPrice) / 100}
                </p>
                <p className="menu-item-desc">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ResturantMenu;
