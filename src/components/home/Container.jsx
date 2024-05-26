import React from "react";
import Button from "./Button";
import NavBar from "./NavBar";
import Slider from "./Slider";
import Services from "./Services";
import Products from "./Products";
import BottomNav from "../global/BottomNav";

import { usePreloadImages } from "../onboarding/Hero";

export default function Container() {
  const slides = [
    {
      id: "1",
      image: "/home-slider.png",
    },
    {
      id: "2",
      image: "/home-slider.png",
    },
    {
      id: "3",
      image: "/home-slider.png",
    },
  ];

  const imagesToPreload = ["/home-slider.png"];

  usePreloadImages(imagesToPreload);
  return (
    <>
      <div className="relative">
        <NavBar />
        <div className="p-[5%]">
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
