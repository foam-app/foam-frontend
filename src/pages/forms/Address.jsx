import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState, useEffect } from "react";
import Input from "../../components/forms/Input";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import GradientBtn from "../../components/global/GradientBtn";
import { useNavigate } from "react-router-dom";

import axios from "../../api/url";
const EDIT_ADDRESS = `/api/user/address`;

export default function Address() {
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

    const data = {
      street: address,
      city: city,
      postalCode: "500001",
      country: "Nigeria",
    };

    try {
      const response = await axios.put(EDIT_ADDRESS, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        withCredentials: true,
      });

      console.log(response.data);
      // history("/pin");
      history("/home");
    } catch (err) {
      console.log(err.response.data);
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
              classname="bg-transparent w-[100%] py-[5%] pl-[5px]"
              placeholder="Address"
              ref={addressRef}
            />
            <div className="my-[4%]"></div>
            <Input
              classname="bg-transparent w-[100%] py-[5%] pl-[10px]"
              placeholder="City"
              ref={cityRef}
            />
            <div className="my-[4%]"></div>
            <Input
              classname="bg-transparent w-[100%] py-[5%] pl-[10px]"
              placeholder="Pick up and delivery instructions"
            />
          </div>

          <div className="my-auto w-[100%]" onClick={handleSubmit}>
            <GradientBtn name="Create account" />
          </div>
        </div>
      </div>
    </>
  );
}
