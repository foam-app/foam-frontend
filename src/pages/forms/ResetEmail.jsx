import { faChevronLeft, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GradientBtn from "../../components/global/GradientBtn";
import Input from "../../components/forms/Input";
import { Link, useNavigate } from "react-router-dom";

import loader from "../../assets/loader.gif";
import { useScroll } from "framer-motion";
import { useState } from "react";
import { useRef } from "react";
const SEND_EMAIL = `/api/auth/forgotPassword`;

import axios from "../../api/url";
export default function ResetEmail() {
  const [email, setEmail] = useState("");
  const emailRef = useRef();

  const [loading, setLoading] = useState(false);

  const history = useNavigate();

  const handleGoBack = () => {
    history(-1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        SEND_EMAIL,
        {
          email: email,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        }
      );

      setLoading(false);
      const message = response.data.message;
      history("/pin");
      success(message);
    } catch (err) {
      setLoading(false);
      const message = err.response.data.error;
      failure(message);
    }
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
          <p className="text-[24px] font-medium">Forgot Password</p>

          <div className="mt-[5%] input-boxes">
            <Input
              classname="bg-transparent w-[100%] py-[5%] pl-[5px]"
              placeholder="Email or Phone Number"
              ref={emailRef}
              onchange={(e) => setEmail(e.target.value)}
            />
            <div className="my-[4%]"></div>
            {/* <p className='flex justify-end items-end text-[#00AABC] text-[14px]'><Link to="/reset-email">Forgot password?</Link></p> */}
          </div>

          <div className=" w-[100%] my-auto">
            {loading ? (
              <div className="flex justify-center items-center h-[53px] text-[16px] rounded-[8px] text-center gradient-btn text-white w-[100%]">
                <img src={loader} alt="" className="w-[40px] h-[20px]" />
              </div>
            ) : (
              <div className="" onClick={handleSubmit}>
                <GradientBtn name="Verify" />
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
