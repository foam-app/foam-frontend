import React, { useContext, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

import { TokenContext } from "../../context/TokenProvider";

import { motion } from "framer-motion";

import userimg from "../../assets/user.jfif";
import nav from "../../assets/side-icons.png";
import bell from "../../assets/bell.png";
import SideBar from "../global/SideBar";

import axios from "../../api/url";
import { ProfileContext } from "../../context/ProfileContext";
const GET_USER = `/api/user/profile`;

export default function NavBar() {
  const { token } = useContext(TokenContext);
  const [toggle, setToggle] = useState(false);

  const { setUser, user } = useContext(ProfileContext);

  const [name, setName] = useState("There");
  const [loaded, setLoaded] = useState(false);

  const handleSideBar = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(GET_USER, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        });
        const user = response.data.user;
        setName(user.firstName);
        setUser(user);
        setLoaded(true);
      } catch (err) {
        console.log(err.response);
      }
    };

    getUser();
  }, []);

  return (
    <>
      <div className="relative flex justify-between items-center my-[3.5%] p-[5%]">
        <div className="flex justify-center items-center">
          <img
            src={userimg}
            alt=""
            className="w-[50px] h-[50px] rounded-full"
          />
          <p className="text-[18px] ml-[10px] font-medium capitalize">
            Hey{loaded ? `, ${user.firstName}` : `there`}
          </p>
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
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.2 }}
            className="w-[100%] absolute top-[-15px] z-[1000]"
          >
            <div className="flex w-[100%] ">
              <div className="bg-white h-[100vh] w-[84%] z-[1000] flex flex-col ">
                <div className="">
                  <div className="pl-[5%] pt-[12%]">
                    <div className="flex justify-between items-center">
                      <p className="text-[24px] font-medium capitalize">{`Hey, ${name}`}</p>
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
                className="bg-[#00000048] w-[16%] top-0 h-[100vh] "
                onClick={handleSideBar}
              >
                <p></p>
              </div>
            </div>
          </motion.div>
        </>
      ) : null}
    </>
  );
}
