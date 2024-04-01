import { faSignOut, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function SideBar() {
  const navs = [
    { id: 1, name: "Profile", image: "../../../src/assets/profile-nav.svg" },
    { id: 2, name: "Services", image: "../../../src/assets/services.svg" },
    { id: 3, name: "Billing", image: "../../../src/assets/billing.svg" },
    { id: 4, name: "Settings", image: "../../../src/assets/settings.svg" },
    { id: 5, name: "Help", image: "../../../src/assets/help.svg" },
  ];
  return (
    <>
      <div className="">
        <div className="pt-[8%]">
          {navs.map((item) => (
            <div className="flex my-[10%]">
              <img src={item.image} alt="" className="w-[25px] h-[25px]" />
              <p className="text-[20px] ml-[5%]">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
