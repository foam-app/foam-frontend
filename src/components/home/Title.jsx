import React from "react";

export default function Title(props) {
  return (
    <>
      <div className="flex justify-between items-center">
        <p className="text-[#212828] text-[20px] font-bold">{props.title}</p>
        <p className="text-[#212828] text-[16px]">{props.more}</p>
      </div>
    </>
  );
}
