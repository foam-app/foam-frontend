import React from "react";
import ServiceBoxItem from "./ServiceBoxItem";

export default function ServiceBoxes() {
  const services = [
    {
      id: 1,
      image: "../../../src/assets/service1.png",
      title: "Washing and Folding",
      description: "Clothes, towels, lines etc",
    },
    {
      id: 2,
      image: "../../../src/assets/service2.png",
      title: "Washing and Ironing",
      description: "Clothes, towels, lines etc",
    },
    {
      id: 3,
      image: "../../../src/assets/service3.png",
      title: "Dry Cleaning",
      description: "Clothes, towels, lines etc",
    },
    {
      id: 4,
      image: "../../../src/assets/service1.png",
      title: "Stain Removal",
      description: "Clothes, towels, lines etc",
    },
    {
      id: 5,
      image: "../../../src/assets/service2.png",
      title: "Other Services",
      description: "Clothes, towels, lines etc",
    },
  ];
  return (
    <div>
      <div className="">
        <div className="">
          {services.map((item) => (
            <ServiceBoxItem
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
