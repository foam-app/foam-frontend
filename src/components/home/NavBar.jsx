import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

import user from "../../assets/user.jfif";
import nav from "../../assets/side-icons.png";
import bell from "../../assets/bell.png";
import SideBar from "../global/SideBar";

export default function NavBar() {
  const [toggle, setToggle] = useState(false);

  const handleSideBar = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="relative flex justify-between items-center my-[3.5%] p-[5%]">
        <div className="flex justify-center items-center">
          <img src={user} alt="" className="w-[50px] h-[50px] rounded-full" />
          <p className="text-[18px] ml-[10px] font-medium">Hey, Jessica</p>
        </div>
        <div className="flex text-[21px] font-light">
          {/* <FontAwesomeIcon icon={faBell} className="mx-[1.5%]" /> */}
          <img src={bell} alt="" />
          <p className="mx-[5px]"></p>
          {/* <FontAwesomeIcon icon={faBars} className="mx-[1.5%]" /> */}
          <img src={nav} alt="" onClick={handleSideBar} />

          {/* <img src={bell} alt="" />
          <img src={nav} alt="" /> */}
        </div>
      </div>
      {toggle ? (
        <>
          <div className="flex absolute w-[100%] top-[-15px]">
            <div className="bg-white w-[84%] h-[100%] z-[1000] onboard">
              <div className="">
                <div className="pl-[5%] pt-[12%]">
                  <div className="flex justify-between items-center">
                    <p className="text-[24px] font-medium">Hello Jessica</p>
                    <FontAwesomeIcon
                      icon={faX}
                      className="w-[20px] h-[20px] pr-[5%]"
                      onClick={handleSideBar}
                    />
                  </div>
                  <SideBar />
                </div>
              </div>

              <div className="my-auto">
                <button className="ml-[5%] rounded-[8px] py-[12px] px-[32px] bg-[#001C1F] text-white text-[16px] font-bold w-[90%]">
                  <p>
                    Log Out{" "}
                    <FontAwesomeIcon icon={faSignOut} className="ml-3" />
                  </p>
                </button>
              </div>
            </div>

            <div
              className="bg-[#00000048] w-[16%] top-0 z-[1000]"
              onClick={handleSideBar}
            >
              <p></p>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
