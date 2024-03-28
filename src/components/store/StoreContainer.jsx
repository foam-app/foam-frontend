import React from "react";

import Header from "../global/Header";
import BottomNav from "../global/BottomNav";
import Categories from "./Categories";
import Button from "../home/Button";

export default function StoreContainer() {
  return (
    <div className="relative">
      <Header header="Add to Basket" />

      <div className="p-[5%] basket">
        <Categories />
        <button className="w-[100%] rounded-[8px] py-[12px] px-[32px] bg-[#001C1F] text-white text-[16px] font-bold">
          <p>Schedule Pickup</p>
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
