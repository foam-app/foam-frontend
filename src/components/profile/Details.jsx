import React, { useState, useEffect, useContext } from "react";
import Input from "../forms/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

import userProfile from "../../assets/user.jfif";
import camera from "../../assets/camera.svg";
import { ProfileContext } from "../../context/ProfileContext";
import { TokenContext } from "../../context/TokenProvider";

import axios from "../../api/url";
import ChangePassword from "../profile/ChangePassword";
const GET_ADDRESS = `/api/user/address`;

export default function Details() {
  const { user } = useContext(ProfileContext);
  console.log(user);

  const { token } = useContext(TokenContext);

  const [address, setAddress] = useState("");

  useEffect(
    () => async () => {
      try {
        const response = await axios.get(GET_ADDRESS, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        });

        setAddress(response.data);
      } catch (err) {
        console.log(err);
      }
    },
    [token]
  );

  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <div>
      <div className="rounded-full relative my-[3%]">
        <img
          src={userProfile}
          alt=""
          className="w-[70px] h-[70px] rounded-full"
        />

        <div className="absolute bg-[#00AABC40] w-[69px] rounded-b-full flex justify-center items-center h-[30px] top-[57%]">
          <img src={camera} alt="" />
        </div>
      </div>
      <div className="input-boxes text-[#000000CC] text-[13.5px]">
        <div className="flex justify-between items-center w-[100%]">
          <div className="w-[49.5%]">
            <p className="capitalize">first name</p>
            <Input
              type="text"
              classname="bg-transparent py-[10%] px-[10px] capitalize"
              placeholder={`${user.firstName}`}
            />
          </div>
          {/* <div className=""></div> */}
          <div className="w-[49.5%]">
            <p className="capitalize">last name</p>
            <Input
              type="text"
              classname="bg-transparent py-[10%] px-[10px] capitalize"
              placeholder={`${user.lastName}`}
            />
          </div>
        </div>

        <p className="capitalize mt-[4px]">email</p>
        <Input
          classname="bg-transparent w-[100%] py-[5%] pl-[10px]"
          placeholder={`${user.email}`}
        />

        <p className="capitalize">phone number</p>
        <Input
          classname="bg-transparent w-[100%] py-[5%] pl-[5px]"
          placeholder={`${user.phone}`}
        />
        <div className="my-[4%]"></div>

        <div className="my-[4%]"></div>

        <p className="capitalize">Home (Address 1)</p>
        <Input
          classname="bg-transparent w-[100%] py-[5%] pl-[10px]"
          placeholder="3 Smith Ave Odili Rd"
        />
        <div className="my-[4%]"></div>

        <p className="capitalize">School (Address 2)</p>
        <Input
          classname="bg-transparent w-[100%] py-[5%] pl-[10px]"
          placeholder="Arena Uniport Choba"
        />

        <div className="my-[4%]"></div>
        <p className="capitalize">office (Address 2)</p>
        <Input
          classname="bg-transparent w-[100%] py-[5%] pl-[10px]"
          placeholder="Arena Uniport Choba"
        />
      </div>

      <div className="buttons mt-[10%]">
        <button
          className="rounded-[8px] w-[100%] py-[12px] px-[32px] bg-[#001C1F] text-white text-[16px] font-bold"
          onClick={handleOpenPopup}
        >
          <p>Change Password</p>
        </button>

        {showPopup && <ChangePassword />}

        <button className="rounded-[8px] w-[100%] mt-[3%] py-[12px] px-[32px] bg-[#001C1F] text-white text-[16px] font-bold">
          <p>Delete Account</p>
        </button>
      </div>
    </div>
  );
}
