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
import logo from "./assests/food-ordering-app-logo-with-points-fork-shapes-center_666184-195.avif";
import HeaderComponent ,{Title}  from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";

const restranuntList=[{
    name:"Burger King",
    image: "https://assets.designhill.com/design-blog/wp-content/uploads/2023/07/21-today.png",
    cusines: ["Burger","American"],
    rating:"4.2"
},
    {name:"KFC",
    image: "https://inkbotdesign.com/wp-content/uploads/2024/08/kfc-new-logo-design-2018-1024x683.webp",
    cusines: ["Pizza","Italian"],
    rating:"4.5"
},
    {name:"PizzaHut",
    image: "https://inkbotdesign.com/wp-content/uploads/2024/08/kfc-new-logo-design-2018-1024x683.webp",
    cusines: ["Pizza","Italian"],
    rating:"4.7"
},
    {name:"Dominos",
    image: "https://inkbotdesign.com/wp-content/uploads/2024/08/kfc-new-logo-design-2018-1024x683.webp",
    cusines: ["Pizza","Italian"],
    rating:"4.5"
},
]
/**This restranunt card is hard coded but this content of the card will not always be same so we are going to make it dyanmic using jsx*/
const RestranuntCard=({
    name,
    cusines,
    image,
    rating,
}
)=>{
    return(
        <div className="card">
            <img src={image}></img>
            <h2>{name}</h2>
            <h3>{cusines.join(",")}</h3>
            <h4>{rating} stars</h4>
        </div>
    )
}

const AppLayout=()=>{
    return(
    <>
        <HeaderComponent/>
        <Body/>
        <Footer/>
    </>
    );
};
//we can also use normal function instead of arrow functions
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

 