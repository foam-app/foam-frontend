import React from "react";
import nodata from "../../../public/no-data.svg";
export default function NoData() {
  return (
    <div>
      <div className="mt-[10%] w-full h-full flex justify-center items-center">
        <div className="">
          <img src={nodata} alt="" className="w-[300px] h-[300px]" />
          <p className="text-[18px] font-bold text-center uppercase">
            no items in cart
          </p>
        </div>
      </div>
    </div>
  );
}
