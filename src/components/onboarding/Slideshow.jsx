import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function Slideshow({ slides }) {
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
      <motion.div>
        <div className="">
          <div className="onboard">
            <div className="flex justify-center items-center relative mb-[49.5%]">
              {/* <motion.div
                key={slides[currentSlide].id}
                initial={{
                  //opacity: 0.3,
                  x: 100,
                }}
                animate={{
                  //opacity: 1,
                  x: 0,
                }}
                exit={{
                  //opacity: 0,
                  x: -300,
                }}
                transition={{ duration: 0.2 }}
                onAnimationComplete={() => setIsTransitioning(false)}
                mb-[49.5%]
              >
                <img
                  src={slides[currentSlide].image}
                  alt=""
                  className={slides[currentSlide].class}
                />
              </motion.div> */}
              <div className={slides[currentSlide].class}>
                <motion.div
                  key={slides[currentSlide].id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.7 }}
                  onAnimationComplete={() => setIsTransitioning(false)}
                >
                  <div className="">
                    <img
                      src={slides[currentSlide].image}
                      alt=""
                      className={`${
                        slides[currentSlide].id == 2 ||
                        slides[currentSlide].id == 3
                          ? "scale-[1.8]"
                          : "scale-[1.4]"
                      }`}
                      // className={slides[currentSlide].class}
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="my-auto">
              <div className="flex justify-center items-center mt-[9%] mb-[2%]">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`mx-1 w-[8px] h-[8px] rounded-full ${
                      index === currentSlide ? "bg-[#001C1F]" : "bg-[#C8FAFF]"
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
              <p className="text-[24px] font-medium text-center">
                {slides[currentSlide].text}
              </p>
              <p className="text-center text-[18px] text-[#212828] py-[4%]">
                Schedule your pickup today
              </p>
              <Link to="/signup" className="flex justify-center items-center">
                <button className="w-[98%] font-bold rounded-[8px] py-[5%]  text-[17px] text-white bg-[#001C1F]">
                  Sign me up!
                </button>
              </Link>
              <p className="text-center text-[15px] text-[#212828] py-[3%]">
                <Link to="/login">Log in with your exisiting account</Link>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
