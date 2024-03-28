import React from "react";
import { Link } from "react-router-dom";

export default function GradientBtn(props) {
  return (
    <>
      <Link to={props.link}>
        <button className="h-[53px] text-[16px] rounded-[8px] text-center gradient-btn text-white w-[100%]">
          {props.name}{" "}
        </button>
      </Link>
    </>
  );
}
