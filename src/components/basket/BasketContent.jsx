import React from "react";
import StoreItem from "../store/StoreItem";
import { useContext, useEffect, useState } from "react";

import axios from "../../api/url";
import { TokenContext } from "../../context/TokenProvider";
const GET_CART = `/api/user/basket/`;

import shirt from "../../../public/shirt.png";
import BasketItem from "./BasketItem";

export default function () {
  const { token } = useContext(TokenContext);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getBasket = async () => {
      try {
        const response = await axios.get(GET_CART, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        });
        setCart(response.data.basket.items);
      } catch (err) {
        console.log(err);
      }
    };

    getBasket();
  }, []);

  const totalCost = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.category.price * item.quantity;
    });
    return total;
  };

  const totalPayable = () => {
    return totalCost() + 1500;
  };

  return (
    <>
      <div className="">
        <div className="flex justify-between items-center mt-[8%]">
          {/* <p className="text-[18px] font-bold">Dry Cleaning</p> */}
          <p className="text-[18px] font-bold">{cart.length} Items</p>
        </div>
        {cart.map((item) => (
          <BasketItem
            key={item.id}
            name={item.category.name}
            image={shirt}
            price={item.category.price}
            quantity={item.quantity}
          />
        ))}
      </div>

      <div className="payments my-[6%]">
        <hr />
        <div className="my-[3.5%] flex justify-between items-center text-[20px]">
          <p className="">Total Amount</p>
          <p className="font-bold tracking-wider">N{totalCost()}</p>
        </div>
        <div className="my-[3.5%] flex justify-between items-center text-[20px]">
          <p className="">Delivery Charge</p>
          <p className="font-bold tracking-wider">N1,500</p>
        </div>
        <div className="my-[3.5%]  flex justify-between items-center text-[20px]">
          <p className="">Total Payable</p>
          <p className="font-bold tracking-wider">N {totalPayable()}</p>
        </div>
      </div>
    </>
  );
}
