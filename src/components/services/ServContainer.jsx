import React from "react";
import ServiceBoxes from "./ServiceBoxes";

import Header from "../global/Header";
import BottomNav from "../global/BottomNav";

export default function ServContainer() {
  return (
    <div>
      <div className="relative">
        <Header header="All Services" />
        <div className="p-[5%]">
          <ServiceBoxes />
        </div>

        <BottomNav />
      </div>
    </div>
  );
}
