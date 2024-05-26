import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Input(props) {
  return (
    <div className="flex bg-[#E4E4E4] text-[16px] my-[3%] text-[#000000CC] rounded-[10px]">
      <input
        type={props.type}
        className={props.classname}
        placeholder={props.placeholder}
        ref={props.ref}
        onChange={props.onchange}
      />

      <FontAwesomeIcon icon={props.icon} className="pt-[6%] pr-[5%]" />
    </div>
  );
}
