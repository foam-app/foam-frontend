import React from "react";
import Input from "../forms/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";

export default function Details() {
  return (
    <div>
      <div className="input-boxes text-[#000000CC] text-[13.5px]">
        <div className="flex justify-between items-center">
          <div className="">
            <p className="capitalize">first name</p>
            <Input
              classname="bg-transparent py-[10%] px-[10px]"
              placeholder="Jessica"
            />
          </div>
          {/* <div className=""></div> */}
          <div className="">
            <p className="capitalize">last name</p>
            <Input
              classname="bg-transparent py-[10%] px-[10px]"
              placeholder="Okem"
            />
          </div>
        </div>

        <p className="capitalize mt-[4px]">email</p>
        <Input
          classname="bg-transparent w-[100%] py-[5%] pl-[10px]"
          placeholder="jessica@example.com"
        />

        <p className="capitalize">phone number</p>
        <Input
          classname="bg-transparent w-[100%] py-[5%] pl-[5px]"
          placeholder="03000000000"
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
    </div>
  );
}
