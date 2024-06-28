import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState, useEffect } from "react";
import Input from "../../components/forms/Input";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import GradientBtn from "../../components/global/GradientBtn";
import { useNavigate } from "react-router-dom";

import axios from "../../api/url";
import { useContext } from "react";
import { TokenContext } from "../../context/TokenProvider";
import { failure, success } from "../../classes/notify";
const EDIT_ADDRESS = `/api/user/address`;

export default function Address() {
  const { token } = useContext(TokenContext);
  const history = useNavigate();

  const handleGoBack = () => {
    history(-1);
  };

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  const addressRef = useRef();
  const cityRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(address);
    console.log(city);

    // const data = {};

    try {
      const response = await axios.put(
        EDIT_ADDRESS,
        {
          street: address,
          city: city,
          postalCode: "500001",
          country: "Nigeria",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        }
      );

      success(response.data.message);
      // history("/pin");
      history("/login");
    } catch (err) {
      failure(err.response.data.error.message || err.response.data.error);
      // console.log(err.response.data);
    }
  };

  return (
    <>
      <div className="mx-[3%] ">
        <div
          className="header flex justify-between items-center mt-[20px] text-[12px]"
          onClick={handleGoBack}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
          <p>step 1 of 2</p>
        </div>

        <div className="mt-[12%] flex flex-col h-[100vh]">
          <p className="text-[24px] font-medium">Pick up address</p>

          <div className="mt-[5%] input-boxes">
            <Input
              type="text"
              classname="bg-transparent w-[100%] py-[5%] pl-[5px]"
              placeholder="Address"
              ref={addressRef}
              onchange={(e) => setAddress(e.target.value)}
            />
            <div className="my-[4%]"></div>
            <Input
              type="text"
              classname="bg-transparent w-[100%] py-[5%] pl-[10px]"
              placeholder="City"
              ref={cityRef}
              onchange={(e) => setCity(e.target.value)}
            />
            <div className="my-[4%]"></div>
            {/* <Input
              classname="bg-transparent w-[100%] py-[5%] pl-[10px]"
              placeholder="Pick up and delivery instructions"
            /> */}
          </div>

          <div className="my-auto w-[100%]">
            <button
              className="h-[53px] text-[16px] rounded-[8px] text-center gradient-btn text-white w-[100%]"
              onClick={handleSubmit}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
