import { useState } from "react";
import { logo } from "../../constants";
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
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
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
