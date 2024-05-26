import React from "react";

import Header from "../global/Header";
import BottomNav from "../global/BottomNav";

import serviceInfo from "../../../src/assets/service-info.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
useNavigate;

export default function ServiceInfo() {
  const navigate = useNavigate();

  const handleBasket = () => {
    navigate("/store");
  };

  return (
    <div>
      <div className="relative h-[100vh]">
        <Header header="Washing and Folding" />
        <div className="p-[5%] ">
          <img src={serviceInfo} alt="" className="mt-[7%]" />

          <div className="text-[#212828] mt-[7%]">
            <p className="text-[18px] text-black font-bold">About</p>

            <p className=" font-medium text-[14px]">
              The ultimate convenience for busy lifestyles. Let us handle your
              laundry, so you can focus on what matters most. Quality,
              efficiency, and convenience—all in one package.
            </p>
          </div>
          <div className="text-[#212828] mt-[7%]">
            <p className="text-[18px] text-black font-bold">Service Hours</p>
          </div>

          <div className="mt-[3%] flex text-[14px] font-medium">
            <FontAwesomeIcon icon={faClock} className="mt-[1%]" />
            <p className="text-center ml-[2%]">Mon - Sat | 8am - 6pm</p>
          </div>
        </div>

        <div className="px-[5%] my-auto">
          <button
            className="my-auto rounded-[8px] w-[100%] mt-[10%] mb-[5%] py-[12px] px-[32px] bg-[#001C1F] text-white text-[16px] font-bold"
            onClick={handleBasket}
          >
            <p>Schedule Pickup</p>
          </button>
        </div>

        <BottomNav />
      </div>
    </div>
  );
}
