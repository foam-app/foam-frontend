import React, { useState, useEffect } from "react";
import GradientBtn from "../global/GradientBtn";

import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Slider({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    let timer;
    if (!isTransitioning) {
      timer = setTimeout(() => {
        setIsTransitioning(true); // Start transition
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000); // Change slide every 3 seconds
    }

    return () => clearTimeout(timer);
  }, [currentSlide, slides.length, isTransitioning]);

  return (
    <>
      <div className="mt-[7%]">
        <div className="slider-images">
          <div className="relative">
            <motion.div
              // key={slides[currentSlide].id}
              // initial={{
              //   //opacity: 0.3,
              //   x: 100,
              // }}
              // animate={{
              //   //opacity: 1,
              //   x: 0,
              // }}
              // exit={{
              //   //opacity: 0,
              //   x: -300,
              // }}
              transition={{ duration: 0.5 }}
              onAnimationComplete={() => setIsTransitioning(false)}
            >
              <img
                src={slides[currentSlide].image}
                alt=""
                className="rounded-[8px] w-[100%] h-[100%]"
              />
              <div className="bg-[#00AABC40] py-[2%] rounded-[8px] absolute top-0 w-[100%] h-[100%] px-[3%] text-white">
                <p className="pt-[5%] text-[19px] font-bold">Discount Deals</p>
                <div className="flex justify-center items-center">
                  <p className="text-[17px]">
                    up to <span className="text-[24px] font-bold">40% off</span>{" "}
                    all laundry services available!
                  </p>
                  <Link to="/home" className="pt-[3%]">
                    <button className="text-[16px] rounded-[8px] text-center gradient-btn text-white py-[8px] px-[16px]">
                      Claim
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-[5%] mb-[2%]">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`mx-1 w-[8px] h-[8px] rounded-full ${
                index === currentSlide ? "bg-[#00AABC]" : "bg-[#C8FAFF]"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
