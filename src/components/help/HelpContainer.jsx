import React from "react";
import BottomNav from "../global/BottomNav";
import Header from "../global/Header";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

import { faMessage, faEnvelope } from "@fortawesome/free-regular-svg-icons";
export default function HelpContainer() {
  const contact = [
    {
      id: 1,
      name: "SMS",
      link: "/",
      icon: faMessage,
      details: "+23400000000",
    },
    {
      id: 2,
      name: "Email",
      link: "/",
      icon: faEnvelope,
      details: "foam@example.com",
    },
    {
      id: 3,
      name: "Call",
      link: "/",
      icon: faPhone,
      details: "+23400000000",
    },
  ];

  const links = [
    {
      id: 1,
      name: "FAQ ",
      link: "/",
    },
    {
      id: 2,
      name: "Terms & Conditions",
      link: "/",
    },
    {
      id: 3,
      name: "Privacy Policy",
      link: "/",
    },
  ];
  return (
    <div>
      <div className="relative">
        <Header header="Help" />
        <div className="p-[5%] my-[3.5%]">
          <p className="text-[18px] font-[500] text-[#000000] my-[2%]">
            Contact Foam
          </p>
          <div className="">
            {contact.map((item) => {
              return (
                <div
                  className="flex justify-between items-center my-[4%] bg-[#E4E4E4] p-[4%] rounded-[10px]"
                  key={item.id}
                >
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="text-[#000000CC]"
                    />
                    <p className="ml-3 text-[14px] font-[500] text-[#000000CC]">
                      {item.name}
                    </p>
                  </div>
                  <p className="text-[14px] font-[500] text-[#000000CC]">
                    {item.details}
                  </p>
                </div>
              );
            })}
          </div>
          <p className="text-[18px] font-[500] text-[#000000] my-[5%]">
            Useful Links
          </p>

          {links.map((item) => {
            return (
              <div
                className=" my-[4%] bg-[#E4E4E4] p-[4%] rounded-[10px]"
                key={item.id}
              >
                <Link
                  to={item.link}
                  className="flex justify-between items-center"
                >
                  <p className="ml-3 text-[14px] font-[500] text-[#000000CC]">
                    {item.name}
                  </p>

                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="text-[#000000CC]"
                  />
                </Link>
              </div>
            );
          })}
        </div>
        <BottomNav />
      </div>
    </div>
  );
}
