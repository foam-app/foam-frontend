import React from "react";
import Title from "./Title";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Subscriptions() {
  const billings = [
    {
      id: 1,
      name: "Monthly Plan",
      price: "NGN 57,500",
      description: "Monthly membership",
      color: " bg-[#001C1F]",
    },
    {
      id: 2,
      name: "Bi-Weekly Plan",
      price: "NGN 24,500",
      description: "Bi-Weekly membership",
      color: " bg-[#21CAAD]",
    },
    {
      id: 3,
      name: "Annual Plan",
      price: "NGN 152, 900",
      description: "Yearly membership",
      color: "bg-[#FFE554]",
    },
  ];
  return (
    <>
      <div className="mt-[7%]">
        <Title title="Plans" />

        <div className="mt-[%]">
          <p className="text-[14px] text-[#21282899]">
            Get access to the more streamlined services with our plans
          </p>
          <div className="plans px-1.5 pb-1.5">
            {billings.map((billing) => (
              <div>
                <div className="w-[200px] mt-4 rounded-[10px]  plan">
                  <div
                    className={`rounded-t-[10px] text-center p-2 ${billing.color}`}
                  >
                    <p className="text-[15px] font-[700] text-white">
                      {billing.name}
                    </p>
                  </div>

                  <div className="text-[#212828] p-[5%]">
                    <p className="font-[600] text-[14px] w-[100px]">
                      {billing.description}
                    </p>
                    <p className="text-[#21282899] font-[400] text-[13px] my-1.5">
                      As low as*
                    </p>
                    <p className="font-[700] text-[22px]">{billing.price}</p>
                    <div className="flex justify-center items-center">
                      <Link to="/billing">
                        <button className="text-[16px] font-[600] text-[#001C1F] bill-btn rounded-[8px] mt-2">
                          View Plan{" "}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="ml-2"
                          />
                        </button>
                      </Link>
                    </div>{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
