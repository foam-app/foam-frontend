import React from "react";
import StoreItem from "../store/StoreItem";

export default function () {
  const items = [
    {
      id: 1,
      name: "Shirt",
      image: "../../../src/assets/shirt.png",
      price: "N500",
    },
    {
      id: 2,
      name: "T-Shirt",
      image: "../../../src/assets/tshirt.png",
      price: "N500",
    },
  ];

  const items2 = [
    {
      id: 3,
      name: "Polo",
      image: "../../../src/assets/polo.png",
      price: "N500",
    },
    {
      id: 4,
      name: "Female Tops",
      image: "../../../src/assets/female-tops.png",
      price: "N500",
    },
  ];
  return (
    <>
      <div className="">
        <div className="flex justify-between items-center mt-[5%]">
          <p className="text-[18px] font-bold">Washing and Folding</p>
          <p>6 items</p>
        </div>
        {items.map((item) => (
          <StoreItem
            key={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
      <div className="">
        <div className="flex justify-between items-center mt-[8%]">
          <p className="text-[18px] font-bold">Dry Cleaning</p>
          <p>6 items</p>
        </div>
        {items2.map((item) => (
          <StoreItem
            key={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>

      <div className="payments my-[6%]">
        <hr />
        <div className="my-[3.5%] flex justify-between items-center text-[20px]">
          <p className="">Total Amount</p>
          <p className="font-bold">N6,000</p>
        </div>
        <div className="my-[3.5%] flex justify-between items-center text-[20px]">
          <p className="">Delivery Charge</p>
          <p className="font-bold">N1,500</p>
        </div>
        <div className="my-[3.5%]  flex justify-between items-center text-[20px]">
          <p className="">Total Payable</p>
          <p className="font-bold">N7,500</p>
        </div>
      </div>
    </>
  );
}
