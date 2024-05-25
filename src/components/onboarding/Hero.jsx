import React from "react";
import Slideshow from "./Slideshow";

import { motion } from "framer-motion";

import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Hero() {
  const slides = [
    {
      id: "1",
      image: "/onboard1.png",
      text: "Experience convenience and freshness like never before.",
      class: "absolute top-[10%] left-[0px] scale-[1.4] ",
      textStyle: "mt-[100%]",
    },
    {
      id: "2",
      image: "/onboard2.png",
      text: "Simplify Your Life with Seamless Laundry Pickup and Delivery.",
      class: "scale-[1.4] absolute top-[10%] left-[90px]",
      textStyle: "mt-[100%]",
    },

    {
      id: "3",
      image: "/onboard3.png",
      text: "Eco-Friendly Cleaning that Cares  for Your Clothes and the Planet",
      class: "scale-[1.25] absolute top-[-120px] left-[80px]",
      textStyle: "mt-[100%]",
    },

    {
      id: "4",
      image: "/onboard4.png",
      text: "Join Us and Transform the Way You Do Laundry!",
      class: "absolute top-[10%] left-[0px] scale-[1.4] mb-[115px]",
      textStyle: "mt-[100%]",
    },
  ];

  return (
    <>
      <div className="gradient-bg  w-[100%] px-[2.5%]">
        <div className="w-[100%] py-[5%] px-[2.5%]">
          <img src={logo} alt="" />
        </div>

        <Slideshow slides={slides} />
      </div>
    </>
  );
}
