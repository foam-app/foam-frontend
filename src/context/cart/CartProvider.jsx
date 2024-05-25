// import { useReducer, createContext } from "react";
// import cartReducer from "./cartReducer";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, {
//     items: [],
//     discount: 0,
//     total: 0,
//   });
//   return (
//     <CartContext.Provider value={{ state, dispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartContext;

import React, { createContext, useContext, useReducer } from "react";
import reducer from "./cartReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartProvider;
