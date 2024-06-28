import React, { useState, useRef } from "react";
import Input from "../forms/Input";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

export default function AddressContainer() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("10:00AM");
  const [address, setAddress] = useState("");

  const dateRef = useRef();
  const timeRef = useRef();
  const addressRef = useRef();

  return (
    <div>
      <div className="p-[4%] mt-[10%]">
        {/* <Input
          classname="bg-transparent w-[100%] py-[5%] pl-[5px]"
          placeholder="Phone Number"
          ref={phoneRef}
          onchange={(e) => setPhone(e.target.value)}
        /> */}
        <p>Pickup/Delivery Address</p>
        <div className="mr-[2px] flex bg-[#E4E4E4] text-[14px] my-[3%] text-[#000000CC] rounded-[10px] w-[100%] py-[5%] px-[1.5%]">
          <select name="" id="" className="bg-[#E4E4E4] w-[100%] ">
            <option value="" className="w-[100%]">
              Home Address (1)
            </option>
            <option value="" className="w-[100%]">
              Delivery Address
            </option>
          </select>
        </div>

        <p className="mt-[5%]">Pickup Date</p>
        <input
          type="date"
          name=""
          id=""
          ref={dateRef}
          onChange={(e) => setDate(e.target.value)}
          className="w-[100%] py-[5%] bg-[#E4E4E4] text-[14px] rounded-[10px] px-[1.5%] my-[3%] text-[#000000CC] uppercase"
        />

        <p className="mt-[5%]">Pickup Time</p>
        <input
          type="time"
          name=""
          id=""
          ref={timeRef}
          onChange={(e) => setTime(e.target.value)}
          className="w-[100%] py-[5%] bg-[#E4E4E4] text-[14px] rounded-[10px] px-[1.5%] my-[3%] text-[#000000CC] uppercase"
          value={time}
        />
      </div>
    </div>
  );
}
