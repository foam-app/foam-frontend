import React from "react";

export default function ItemDetails(props) {
  return (
    <div>
      <div className="p-[5%]">
        <div className="flex justify-between items-center">
          <div className="">
            <p className="text-[18px] font-medium">{props.date}</p>
            <p className="text-[14px] font-medium">{props.time}</p>
          </div>
          <div className={props.status}>
            <p>{props.status}</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
