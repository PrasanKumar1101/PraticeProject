/**Parcel perform few operations for us
 * HMR-Hot module reload
 * File Watcher algorithm
 * BUNDLING
 * MINIFY
 * Claening our code
 * Dev abd production build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatable Hasing Algorithm
 * Zero Config
 * Tree Shaking-Removing unwanted code
 */
import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent, { Title } from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import RestranuntCard from "./RestrurantCard";

/**This restranunt card is hard coded but this content of the card will not always be same so we are going to make it dyanmic using jsx*/

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};
//we can also use normal function instead of arrow functions
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
