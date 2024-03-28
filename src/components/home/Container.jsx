import React from "react";
import Button from "./Button";
import NavBar from "./NavBar";
import Slider from "./Slider";
import Services from "./Services";
import Products from "./Products";
import BottomNav from "../global/BottomNav";

export default function Container() {
  const slides = [
    {
      id: "1",
      image: "../../../src/assets/home-slider.png",
    },
    {
      id: "2",
      image: "../../../src/assets/home-slider.png",
    },
    {
      id: "3",
      image: "../../../src/assets/home-slider.png",
    },
  ];
  return (
    <>
      <div className="relative">
        <div className="p-[5%]">
          <NavBar />
          <br />
          <Button />

          <Slider slides={slides} />
          <Services />
          <Products />
        </div>
        <BottomNav />
      </div>
    </>
  );
}
