import React from "react";
import { useNavigate, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import Input from "../../components/forms/Input";
import GradientBtn from "../../components/global/GradientBtn";

import PinInput from "react-pin-input";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../../../@/components/ui/input-otp";
import { useState } from "react";
import { useRef } from "react";
import { OTPContext } from "../../context/OTPContext";
import { useContext } from "react";

import loader from "../../assets/loader.gif";

export default function Pin() {
  const { setOTP } = useContext(OTPContext);

  const history = useNavigate();
  const handleGoBack = () => {
    history(-1);
  };

  const slots = 4;

  const [pin, setPin] = useState("");
  const pinRef = useRef();

  const [loading, setLoading] = useState(false);

  const handlePinChange = (value) => {
    setPin(value); // Update the pin state with the new value
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setOTP(pin);
    history("/change-password");
  };
  return (
    <>
      <div className="mx-[3%] ">
        <div
          className="header flex justify-between items-center mt-[20px] text-[12px]"
          onClick={handleGoBack}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
          {/* <p>step 1 of 2</p> */}
        </div>

        <div className="mt-[12%] flex flex-col h-[100vh]">
          <p className="text-center text-[24px] font-medium">Verification</p>

          <p className=" text-[17px] my-[2%] text-center">
            Enter The 4 Digit Code Sent To example@gmail.com
          </p>

          <div className="mt-[5%] input-boxes">
            <div className="flex justify-center items-center">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <PinInput
                  length={4}
                  onChange={handlePinChange}
                  ref={pinRef}
                  type="numeric"
                  inputMode="number"
                  style={{ padding: "10px" }}
                  inputStyle={{
                    borderColor: "transparent",
                    borderWidth: "2px",
                    borderRadius: "10px",
                    backgroundColor: "#00AABC40",
                    color: "#212828",
                  }}
                  inputFocusStyle={{ borderColor: "#00AABC40" }}
                  onComplete={(value, index) => {}}
                  autoSelect={true}
                  regexCriteria={/^[0-9]$/}
                />
              </div>
            </div>
            {/* <div className="flex justify-center items-center">
              <input
                type="number"
                className="rounded-[10px] bg-[#00AABC40] h-[54px] w-[18%] mx-[1%] text-[#212828] text-center"
                placeholder="1"
              />
              <input
                type="number"
                className="rounded-[10px] bg-[#00AABC40] h-[54px] w-[18%] mx-[1%] text-[#212828] text-center"
                placeholder="2"
              />
              <input
                type="number"
                className="rounded-[10px] bg-[#00AABC40] h-[54px] w-[18%] mx-[1%] text-[#212828] text-center"
                placeholder="3"
              />
              <input
                type="number"
                className="rounded-[10px] bg-[#00AABC40] h-[54px] w-[18%] mx-[1%]text-[#212828] text-center"
                placeholder="4"
              />
            </div> */}

            <div className="text-center my-[3%] capitalize text-[#00AABC]">
              resend code
            </div>
          </div>

          <div className=" w-[100%] my-auto">
            {loading ? (
              <div className="flex justify-center items-center h-[53px] text-[16px] rounded-[8px] text-center gradient-btn text-white w-[100%]">
                <img src={loader} alt="" className="w-[40px] h-[20px]" />
              </div>
            ) : (
              <div className="" onClick={handleSubmit}>
                <GradientBtn name="Confirm" />
              </div>
            )}
            <p className="text-[#212828] text-center mt-3">
              Don’t Have An Account?{" "}
              <span className="text-[#00AABC]">
                <Link to="/signup">Sign Up</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
