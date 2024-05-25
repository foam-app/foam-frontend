import React, { useReducer } from "react";

// Reducer function for shopping cart state
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case "APPLY_DISCOUNT":
      return {
        ...state,
        discount: action.payload,
      };
    case "CALCULATE_TOTAL":
      const total = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      return {
        ...state,
        total: total - (total * state.discount) / 100,
      };
    default:
      return state;
  }
};

// Initial state for shopping cart
const initialState = {
  items: [],
  discount: 0,
  total: 0,
};

const Cart = ({ products }) => {
  const [cartState, dispatch] = useReducer(reducer, initialState);

  const addItemToCart = (product) => {
    dispatch({ type: "ADD_ITEM", payload: { id: product.id, ...product } });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const applyDiscount = (discount) => {
    dispatch({ type: "APPLY_DISCOUNT", payload: discount });
  };

  const calculateTotal = () => {
    dispatch({ type: "CALCULATE_TOTAL" });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartState.items.length === 0 && <p>Your cart is empty.</p>}
      {cartState.items.map((item) => (
        <CartItem key={item.id} item={item} onQuantityChange={updateQuantity} />
      ))}
      <br />
      <DiscountInput onDiscountChange={applyDiscount} />
      <br />
      <button onClick={calculateTotal}>Calculate Total</button>
      <br />
      {cartState.total > 0 && <p>Total: ${cartState.total.toFixed(2)}</p>}
    </div>
  );
};

const CartItem = ({ item, onQuantityChange }) => {
  return (
    <div key={item.id}>
      <p>
        {item.name} (x{item.quantity}) - ${item.price * item.quantity}
      </p>
      <button onClick={() => onQuantityChange(item.id, item.quantity + 1)}>
        +
      </button>
      <button
        onClick={() =>
          Math.max(1, onQuantityChange(item.id, item.quantity - 1))
        }
      >
        -
      </button>
    </div>
  );
};

const DiscountInput = ({ onDiscountChange }) => {
  const handleDiscountChange = (event) => {
    const discount = parseFloat(event.target.value);
    onDiscountChange(discount);
  };

  return (
    <div>
      <label htmlFor="discount">Discount (%):</label>
      <input type="number" id="discount" onChange={handleDiscountChange} />
    </div>
  );
};

export default Cart;
