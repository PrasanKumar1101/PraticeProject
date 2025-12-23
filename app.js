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

const heading = React.createElement(
  "h1",
  { id: "title1", key: "h1" },
  "heading1"
);

const heading2 = React.createElement(
  "h2",
  { id: "title2", key: "h2" },
  "heading2"
);

const container = React.createElement(
  "div",
  { id: "container" },
  [heading, heading2]
);
 const HearderComp=()=>{
    return <h1>hello react</h1>;
 }
//without return
const HeaderComponent=()=>{(
    <div>
        <h1>HEllo react</h1>
        <h2>Hello fn arrow comp</h2>
    </div>
);
};
//with return

const title= ()=>( 
    <h1 id="titel" key="h2">hiee </h1>
);
const HeaderComponent2=()=>{
    return(
    <div>
        {title()}
        <h1>HEllo react</h1>
        <h2>Hello fn arrow comp</h2>
    </div>
);
};
//we can also use normal function instead of arrow functions
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent2/>);

 