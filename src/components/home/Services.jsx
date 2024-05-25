import React from "react";
import Title from "./Title";
import ServiceItem from "./ServiceItem";

export default function Services() {
  const services = [
    {
      id: 1,
      image: "/wash.svg",
      text: "Washing",
    },
    {
      id: 2,
      image: "/iron.svg",
      text: "Ironing",
    },
    {
      id: 3,
      image: "/clean.svg",
      text: "Dry Cleaning",
    },
    {
      id: 4,
      image: "/fold.svg",
      text: "Folding",
    },
  ];
  return (
    <>
      <div className="mt-[7%]">
        <Title title="Choose a Service" more="See All" />

        <div className="flex justify-between items-center mt-[5%]">
          {services.map((item) => (
            <ServiceItem key={item.id} image={item.image} text={item.text} />
          ))}
        </div>
      </div>
    </>
  );
}
