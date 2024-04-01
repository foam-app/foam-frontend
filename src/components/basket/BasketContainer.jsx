import React from "react";
import Header from "../global/Header";
import BottomNav from "../global/BottomNav";
import { useNavigate } from "react-router-dom";
import BasketContent from "./BasketContent";

export default function BasketContainer() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/pickup-address");
  };

  return (
    <div className="relative">
      <Header header="Basket" />

      <div className="p-[5%] basket">
        <BasketContent />
        <button
          className="w-[100%] rounded-[8px] py-[12px] px-[32px] bg-[#001C1F] text-white text-[18px] font-bold"
          onClick={handleNavigate}
        >
          <p>Proceed</p>
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
