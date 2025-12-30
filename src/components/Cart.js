import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispath = useDispatch();

  const handleclearCart = () => {
    dispath(clearCart());
  };
  return (
    <div>
      <h1>Cart-Items- {cartItem.length}</h1>
      <button onClick={() => handleclearCart()}>Clear Cart</button>
      {/* <RestranuntCard items={cartItem[0]} /> */}
    </div>
  );
};

export default Cart;
