import React from "react";
import Button from "./Button";
import NavBar from "./NavBar";
import Slider from "./Slider";
import Services from "./Services";
import Products from "./Products";
import BottomNav from "../global/BottomNav";

import { usePreloadImages } from "../onboarding/Hero";
import Subscriptions from "./Subscriptions";

export default function Container() {
  const slides = [
    {
      id: "1",
      image: "/home-slider.png",
      title: "Discount Deals",
      descriptionOne: "up to",
      descriptionTwo: "40% off",
      descriptionThree: "all laundry services available!",
    },
    {
      id: "2",
      image: "/service4.png",
      title: "Order Now",
      descriptionOne: "up to",
      descriptionTwo: "20% off",
      descriptionThree: "your first order!",
    },
    {
      id: "3",
      image: "/service5.png",
      title: "Referal Bonus",
      descriptionOne: "up to",
      descriptionTwo: "30% off",
      descriptionThree: "on all referals!",
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
          <Subscriptions />
        </div>
        <BottomNav />
      </div>
    </>
  );
}
