import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import Input from "../../components/forms/Input";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import GradientBtn from "../../components/global/GradientBtn";
import { useNavigate } from "react-router-dom";

import apple from "../../assets/google-svg.svg";
import google from "../../assets/apple.svg";

import axios from "../../api/url";
import { success, failure } from "../../classes/notify";

import loader from "../../assets/loader.gif";
import { Link } from "react-router-dom";
import { OTPContext } from "../../context/OTPContext";
import { useContext } from "react";
const RESET_URL = `/api/auth/resetPassword`;

export default function ChangePassword() {
  const { otp } = useContext(OTPContext);
  const history = useNavigate();

  const handleGoBack = () => {
    history(-1);
  };

  const [loading, setLoading] = useState(false);

  const [password, setPassword] = useState("");
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    // history("/signup-address");
    setLoading(true);

    e.preventDefault();

    const data = {
      password: password,
      otp: otp,
    };

    console.log(data);

    try {
      const response = await axios.post(RESET_URL, data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        withCredentials: true,
      });

      console.log(response.data);
      setLoading(false);
      const message = response.data.message;
      // history("/signup-address");
      success(message);
      history("/login");
    } catch (err) {
      setLoading(false);
      const message = err.response.data.error;
      failure(message);
    }
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState("password");

  const togglePassword = () => {
    if (isPasswordVisible === "password") {
      setIsPasswordVisible("text");
    } else if (isPasswordVisible === "text") {
      setIsPasswordVisible("password");
    }
  };
  return (
    <>
      <div className="mx-[3%]">
        <div
          className="header flex justify-between items-center mt-[20px] text-[15px]"
          onClick={handleGoBack}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
          {/* <p>step 1 of 2</p> */}
        </div>

        <div className="mt-[12%] flex flex-col h-[100vh]">
          <p className="text-[24px] font-medium">Create New Password</p>

          <div className="input-boxes">
            <div className="my-[4%]"></div>

            <div className="mr-[2px] flex justify-between items-center bg-[#E4E4E4] text-[14px] my-[3%] text-[#000000CC] rounded-[10px]">
              <Input
                type={isPasswordVisible}
                classname="bg-transparent w-[100%] py-[5%] pl-[10px]"
                placeholder="Create Password"
                ref={passwordRef}
                onchange={(e) => setPassword(e.target.value)}
              />

              <div
                className="flex justify-between items-center pt-[%] pr-[5%]"
                onClick={togglePassword}
              >
                <FontAwesomeIcon icon={faEyeSlash} className="" />
              </div>
            </div>
            <div className="my-[4%]"></div>

            <div className="mr-[2px] flex justify-between items-center bg-[#E4E4E4] text-[14px] my-[3%] text-[#000000CC] rounded-[10px]">
              <Input
                type={isPasswordVisible}
                classname="bg-transparent w-[100%] py-[5%] pl-[10px]"
                placeholder="Create Password"
                ref={passwordRef}
                onchange={(e) => setPassword(e.target.value)}
              />

              <div
                className="flex justify-between items-center pt-[%] pr-[5%]"
                onClick={togglePassword}
              >
                <FontAwesomeIcon icon={faEyeSlash} className="" />
              </div>
            </div>
          </div>

          <div className="my-auto">
            {loading ? (
              <div className="flex justify-center items-center h-[53px] text-[16px] rounded-[8px] text-center gradient-btn text-white w-[100%]">
                <img src={loader} alt="" className="w-[40px] h-[20px]" />
              </div>
            ) : (
              <div className="" onClick={handleSubmit}>
                <GradientBtn name="Save" />
              </div>
            )}

            <p className="text-center text-[#212828] text-[14px] my-3">
              Don't have an account? <Link to="/signup"></Link>
              <span className="text-[#00AABC]">Sign Up</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
