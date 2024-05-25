import React from "react";
import StoreItem from "./StoreItem";
import { useContext } from "react";

export default function StoreCategories() {
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
    {
      id: 5,
      name: "Singlet",
      image: "../../../src/assets/singlet.png",
      price: "N500",
    },
  ];

  return (
    <div>
      <div className="">
        {items.map((item) => (
          <StoreItem
            key={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}
