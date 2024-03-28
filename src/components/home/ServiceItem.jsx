import React from "react";

export default function ServiceItem(props) {
  return (
    <>
      <div className="">
        <div className="flex justify-center items-center bg-[#C8FAFF] w-[70px] h-[70px] rounded-[10px]">
          <img src={props.image} alt="" />
        </div>
        <p className="text-[#212828CC] text-[14px] font-medium capitalize text-center my-[1%]">
          {props.text}
        </p>
      </div>
    </>
  );
}
