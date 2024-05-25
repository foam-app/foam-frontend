// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       return {
//         ...state,
//         items: [
//           ...state.items,
//           {
//             id: action.payload.id,
//             name: action.payload.name,
//             image: action.payload.image,
//             price: action.payload.price,
//             quantity: action.payload.quantity,
//           },
//         ],
//       };

//     case "REMOVE_FROM_CART":
//       return state.filter((item) => item.id !== action.payload.id);

//     case "UPDATE_CART":
//       return {
//         ...state,
//         items: state.items.map((item) =>
//           item.id === action.payload.id
//             ? { ...item, quantity: action.payload.quantity }
//             : item
//         ),
//       };

//     case "DISCOUNT":
//       return state.map((item) => {
//         if (item.id === action.payload.id) {
//           return {
//             ...item,
//             discount: action.payload.discount,
//           };
//         }
//         return item;
//       });

//     case "RESET":
//       return [];
//     default:
//       return state;
//   }
// };

// export default cartReducer;

import { useReducer } from "react";

const initialState = {
  items: [],
  total: 0,
  discount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "add_to_cart": {
      const itemInCart = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      return { ...state, total: calculateTotal(state.items) }; // Update total in new state
    }
    case "update_cart": {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
      return { ...state, total: calculateTotal(state.items) }; // Update total in new state
    }
    case "remove_from_cart": {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
        total: calculateTotal(state.items),
      };
    }
    case "clear": {
      return initialState;
    }
    case "checkout": {
      // Handle checkout logic (clear cart, potentially)
      return initialState;
    }
    case "discount": {
      return {
        ...state,
        discount: action.payload,
        total: calculateTotal(state.items, action.payload),
      }; // Update total and discount in new state
    }
    default:
      return state;
  }
};

const calculateTotal = (items, discount = 0) => {
  // Calculate total price based on item quantities and prices
  // Apply discount if provided
  return (
    items.reduce((acc, item) => acc + item.price * item.quantity, 0) *
    (1 - discount)
  );
};

export const actions = {
  add_to_cart: (item) => ({ type: "add_to_cart", payload: item }),
  update_cart: (id, quantity) => ({
    type: "update_cart",
    payload: { id, quantity },
  }),
  remove_from_cart: (id) => ({ type: "remove_from_cart", payload: id }),
  clear: () => ({ type: "clear" }),
  checkout: () => ({ type: "checkout" }),
  discount: (value) => ({ type: "discount", payload: value }),
};

export default cartReducer;
