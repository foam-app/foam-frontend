import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function BillingItem(props) {
  return (
    <div>
      <div className="flex flex-col h-[60vh] w-[100%] mt-7  rounded-[10px] bills">
        <div className={`rounded-t-[10px] text-center p-2 ${props.color}`}>
          <p className="text-[14px] font-[700] text-white">{props.package}</p>
        </div>

        <div className="text-[#212828] p-[5%]">
          <p className="font-[600] text-[14px]">{props.description}</p>
          <p className="text-[#21282899] font-[400] text-[13px] my-3">
            As low as*
          </p>
          <p className="font-[700] text-[24px]">{props.price}</p>
          <hr />
          <div className="my-3 text-[14px]">{props.list}</div>
          <div className="flex justify-center items-center mt-[18%]">
            <button className="text-[16px] font-[700] text-[#001C1F] bill-btn rounded-[8px]">
              Get Started{" "}
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
