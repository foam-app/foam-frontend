import React from "react";
import { Link } from "react-router-dom";

export default function ItemDetails(props) {
  return (
    <div>
      <div className="p-[5%]">
        <div className="flex justify-between items-center">
          <div className="">
            <p className="text-[18px] font-medium">{props.date}</p>
            <p className="text-[14px] font-medium">{props.time}</p>
          </div>
          <Link to="">
            <div className="text-[#00AABC]">
              <p>Order Details</p>
            </div>
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
}
