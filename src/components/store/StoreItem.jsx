import { faAdd, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function StoreItem(props) {
  const [quantity, setQuantity] = useState(0);

  const addQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  const minusQuantity = () => {
    if (quantity != 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
    } else {
      const newQuantity = 0;
      setQuantity(newQuantity);
    }
  };

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
          <button
            className="rounded-[180px] py-[10px] px-[16px] bg-[#001C1F] text-white"
            onClick={minusQuantity}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <p className="text-[18px] mx-[5%]">{quantity}</p>
          <button
            className="rounded-[180px] py-[10px] px-[16px] bg-[#001C1F] text-white"
            onClick={addQuantity}
          >
            <FontAwesomeIcon icon={faAdd} />
          </button>
        </div>
      </div>
    </div>
  );
}
