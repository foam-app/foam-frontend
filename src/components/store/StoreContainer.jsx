import React from "react";

import Header from "../global/Header";
import BottomNav from "../global/BottomNav";
import Categories from "./Categories";
import Button from "../home/Button";
import { useNavigate } from "react-router-dom";

export default function StoreContainer() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/basket");
  };

  return (
    <div className="relative">
      <Header header="Add to Basket" />

      <div className="p-[5%] basket">
        <Categories />
        <button
          className="w-[100%] rounded-[8px] py-[12px] px-[32px] bg-[#001C1F] text-white text-[16px] font-bold"
          onClick={handleNavigate}
        >
          <p>Go To Basket</p>
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
