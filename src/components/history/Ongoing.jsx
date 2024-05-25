import React from "react";

export default function Ongoing() {
  return (
    <div className="flex items-center">
      <div className="bg-[#E5F7F8] w-[20px] h-[65vh] my-[5%] rounded-[90px]"></div>
      <div className="ml-[3.5%]">
        <div className="h-[10.8vh]">
          <p>Order Placed</p>
          <p>You have Successfully placed your order</p>
        </div>
        <div className="h-[10.8vh]">
          <p>Order Received</p>
          <p>We’ve got your laundry!</p>
        </div>
        <div className="h-[10.5vh]">
          <p>Order Picked Up</p>
          <p>On its way to a clean adventure!</p>
        </div>
        <div className="h-[10.5vh]">
          <p>Order Washing</p>
          <p>Getting squeaky clean!</p>
        </div>
        <div className="h-[10.8vh]">
          <p>Order Dried</p>
          <p>On its way to a clean adventure!</p>
        </div>
        <div className="h-[10vh]">
          <p>Order Delivered</p>
          <p>Back in your hands, fresh and clean</p>
        </div>
      </div>
    </div>
  );
}
