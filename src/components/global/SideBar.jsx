import { faSignOut, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  const navs = [
    {
      id: 1,
      name: "Profile",
      image: "../../../src/assets/profile-nav.svg",
      link: "/profile",
    },
    {
      id: 2,
      name: "Services",
      image: "../../../src/assets/services.svg",
      link: "/services",
    },
    {
      id: 3,
      name: "Billing",
      image: "../../../src/assets/billing.svg",
      link: "/billing",
    },
    {
      id: 4,
      name: "Settings",
      image: "../../../src/assets/settings.svg",
      link: "/settings",
    },
    {
      id: 5,
      name: "Help",
      image: "../../../src/assets/help.svg",
      link: "/help",
    },
  ];
  return (
    <>
      <div className="">
        <div className="pt-[8%]">
          {navs.map((item) => (
            <Link to={item.link}>
              <div className="flex my-[10%]">
                <img src={item.image} alt="" className="w-[25px] h-[25px]" />
                <p className="text-[20px] ml-[5%]">{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
