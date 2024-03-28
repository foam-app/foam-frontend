import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

import user from "../../assets/user.jfif";
import nav from "../../assets/side-icons.png";
import bell from "../../assets/bell.png";

export default function NavBar() {
  return (
    <>
      <div className="flex justify-between items-center my-[3.5%]">
        <div className="flex justify-center items-center">
          <img src={user} alt="" className="w-[50px] h-[50px] rounded-full" />
          <p className="text-[18px] ml-[10px] font-medium">Hey, Jessica</p>
        </div>
        <div className="flex text-[21px] font-light">
          <FontAwesomeIcon icon={faBell} className="mx-[1.5%]" />
          <p className="mx-[5px]"></p>
          <FontAwesomeIcon icon={faBars} className="mx-[1.5%]" />

          {/* <img src={bell} alt="" />
          <img src={nav} alt="" /> */}
        </div>
      </div>
    </>
  );
}
