import React from "react";
import { useNavigate } from "react-router-dom";

export default function Title(props) {
  const navigate = useNavigate();

  const handleNav = () => {
    navigate("/services");
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <p className="text-[#212828] text-[20px] font-bold">{props.title}</p>
        <p className="text-[#212828] text-[16px]" onClick={handleNav}>
          {props.more}
        </p>
      </div>
    </>
  );
}
