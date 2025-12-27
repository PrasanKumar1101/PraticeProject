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
import About from "./src/components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./src/components/Error";
import { Outlet } from "react-router-dom";
import Contact from "./src/components/Contact";
import ResturantMenu from "./src/components/ResturantMenu";
/**This restranunt card is hard coded but this content of the card will not always be same so we are going to make it dyanmic using jsx*/

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/ResturantMenu/:id",
        element: <ResturantMenu />,
      },
    ],
  },
]);
//we can also use normal function instead of arrow functions
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
