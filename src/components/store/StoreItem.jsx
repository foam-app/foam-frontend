import { faAdd, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useContext, useReducer } from "react";

import axios from "../../api/url";
import { TokenContext } from "../../context/TokenProvider";
const ADD_TO_CART = `/api/user/basket/`;

export default function StoreItem(props) {
  const quantity = { quantity: 1 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return { quantity: state.quantity + 1 };
      case "minus":
        if ({ quantity: state.quantity == 0 }) {
          return { quantity: state.quantity };
        } else {
          return { quantity: state.quantity - 1 };
        }
      default:
        return state;
    }
  };
  const [added, setAdded] = useState(true);
  const { token } = useContext(TokenContext);

  const addToCart = async (id) => {
    const categoryId = id;
    const number = state.quantity;

    const data = {
      categoryId: 2,
      quantity: 2,
    };

    setAdded(!added);
    try {
      const response = await axios.post(ADD_TO_CART, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        withCredentials: true,
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const [state, action] = useReducer(reducer, quantity);
  return (
    <div>
      <div className="my-[6.5%] w-[100%] flex justify-between items-center">
        <div className="flex justify-between items-center">
          <div className="w-[99px] h-[92px] bg-[#C8FAFF] rounded-[10px] flex justify-center items-center">
            <img src={props.image} alt="" className="w-[66px] h-[75px]" />
          </div>

          <div className="text-left ml-5 text-[18px]">
            <p>{props.name}</p>
            <p className="font-bold">{props.price}</p>
          </div>
        </div>

        <div className="text-[18px] flex justify-between items-center">
          {added ? (
            <button
              className="w-[100%] bg-[#001c1f] text-white rounded-[6px] py-[10px] px-[16px]"
              onClick={() => addToCart(props.id)}
            >
              Add
            </button>
          ) : (
            <>
              <button
                className="rounded-[180px] py-[10px] px-[16px] bg-[#001C1F] text-white"
                onClick={() => action({ type: "minus" })}
                // onClick={() => updateCart(props, "minus")}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <p className="text-[18px] mx-[5%]">{state.quantity}</p>
              <button
                className="rounded-[180px] py-[10px] px-[16px] bg-[#001C1F] text-white"
                onClick={() => action({ type: "add" })}
                // onClick={() => updateCart(props, "add")}
              >
                <FontAwesomeIcon icon={faAdd} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
