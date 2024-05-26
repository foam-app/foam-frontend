import React, { useEffect } from "react";
import Slideshow from "./Slideshow";

import { motion } from "framer-motion";

import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export const usePreloadImages = (imageUrls) => {
  useEffect(() => {
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, [imageUrls]);
};

export default function Hero() {
  const slides = [
    {
      id: "1",
      image: "/onboard1.webp",
      text: "Experience convenience and freshness like never before.",
      class: "absolute top-[10%] left-[0px]",
      textStyle: "mt-[100%]",
    },
    {
      id: "2",
      image: "/onboard2.webp",
      text: "Simplify Your Life with Seamless Laundry Pickup and Delivery.",
      class: "absolute top-[50px] left-[95px] ",
      textStyle: "mt-[100%]",
    },

    {
      id: "3",
      image: "/onboard3.webp",
      text: "Eco-Friendly Cleaning that Cares  for Your Clothes and the Planet",
      class: "absolute top-[-90px] left-[125px]",
      textStyle: "mt-[100%]",
    },

    {
      id: "4",
      image: "/onboard4.webp",
      text: "Join Us and Transform the Way You Do Laundry!",
      class: "absolute top-[10%] left-[0px] mb-[115px]",
      textStyle: "mt-[100%]",
    },
  ];

  const imagesToPreload = [
    "/onboard1.webp",
    "/onboard2.webp",
    "/onboard3.webp",
    "/onboard4.webp",
  ];

  usePreloadImages(imagesToPreload);

  return (
    <>
      <div className="gradient-bg w-[100%] px-[2.5%] h-[100vh]">
        <div className="w-[100%] py-[5%] px-[2.5%]">
          <img src={logo} alt="" />
        </div>

        <Slideshow slides={slides} />
      </div>
    </>
  );
}
