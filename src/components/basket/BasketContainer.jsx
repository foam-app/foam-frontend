import React from "react";
import Header from "../global/Header";
import BottomNav from "../global/BottomNav";
import BasketContent from "./BasketContent";

export default function BasketContainer() {
  return (
    <div className="relative">
      <Header header="Basket" />

      <div className="p-[5%] basket">
        <BasketContent />
      </div>

      <BottomNav />
    </div>
  );
}
