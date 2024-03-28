import React from "react";
import { useNavigate } from "react-router-dom";

export default function ServiceBoxItem(props) {
  const navigate = useNavigate();

  const handleNav = () => {
    navigate("/service-info");
  };

  return (
    <div onClick={handleNav}>
      <div className="my-[5%]">
        <img
          src={props.image}
          alt=""
          className="w-[100%] h-[100%] rounded-[10px];"
        />

        <p className="text-[#000000] text-[20px] font-medium capitalize mt-1.5 ">
          {props.title}
        </p>
        <p className="text-[#5E5E5E] text-[14px] font-medium">
          {props.description}
        </p>
      </div>
    </div>
  );
}
