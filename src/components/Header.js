import { useState } from "react";
import { logo } from "../../constants";
import { Link } from "react-router-dom";
export const Title = () => (
  <a href="/">
    <img className="logo" alt="logo" src={logo}></img>
  </a>
);
const HeaderComponent = () => {
  const [loggedIn, setloggedIn] = useState(true);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About us</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <li>Cart</li>
          {loggedIn ? (
            <button
              onClick={() => {
                setloggedIn(false);
              }}
            >
              Log In
            </button>
          ) : (
            <button
              onClick={() => {
                setloggedIn(true);
              }}
            >
              Log Out
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
