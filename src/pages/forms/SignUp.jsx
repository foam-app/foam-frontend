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

import { Password } from "primereact/password";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";

import loader from "../../assets/loader.gif";
import YourComponent from "./GoogleLogin";
const SIGNUP_URL = `/api/auth/register`;

export default function SignUp() {
  const history = useNavigate();

  const handleGoBack = () => {
    history(-1);
  };

  const [loading, setLoading] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const firstRef = useRef();
  const lastRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();

  const header = <div className="font-bold mb-3"></div>;
  const footer = (
    <>
      <Divider />
      {/* <p className="mt-2">Suggestions</p> */}
      <ul className="pl-2 ml-2 mt-0 line-height-3">
        <li>At least one lowercase</li>
        <li>At least one uppercase</li>
        <li>Minimum 8 characters</li>
      </ul>
    </>
  );

  const handleSubmit = async (e) => {
    // history("/signup-address");
    setLoading(true);

    e.preventDefault();

    const data = {
      firstName: firstName,
      lastName: lastName,
      middleName: "",
      email: email,
      phone: phone,
      password: password,
    };

    console.log(data);

    try {
      const response = await axios.post(SIGNUP_URL, data, {
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
      history("/signup-address");
    } catch (err) {
      setLoading(false);

      failure(err.response.data?.error || err.response.data?.error?.message);
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
          <p>step 1 of 2</p>
        </div>

        <div className="mt-[5%]">
          <p className="text-[24px] font-medium">Let’s set up your account</p>

          <div className="input-boxes w-[100%]">
            <div className="flex justify-between items-center w-[100%]">
              <InputText
                id="email"
                aria-describedby="username-help"
                className="flex bg-[#E4E4E4] text-[16px] my-[3%] text-[#000000CC] rounded-[10px] w-[49.5%]
                font-[DM Sans]"
                value={firstName}
                ref={firstRef}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="FirstName"
              />
              <InputText
                id="email"
                aria-describedby="username-help"
                className="flex bg-[#E4E4E4] text-[16px] my-[3%] text-[#000000CC] rounded-[10px] w-[49.5%]
                font-[DM Sans]"
                value={lastName}
                ref={lastRef}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="LastName"
              />
            </div>

            <InputText
              keyfilter="int"
              placeholder="Enter Phone Number"
              onChange={(e) => setPhone(e.target.value)}
              ref={phoneRef}
              value={phone}
              className="flex bg-[#E4E4E4] text-[16px] my-[3%] text-[#000000CC] rounded-[10px] w-[100%]
                font-[DM Sans]"
            />

            <div className="my-[4%]"></div>
            <div className="">
              <InputText
                id="email"
                aria-describedby="username-help"
                className="flex bg-[#E4E4E4] text-[16px] my-[3%] text-[#000000CC] rounded-[10px] w-[100%]
                font-[DM Sans]"
                value={email}
                ref={emailRef}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
              />
            </div>

            <div className="w-[100%]">
              <Password
                value={password}
                ref={passwordRef}
                onChange={(e) => setPassword(e.target.value)}
                header={header}
                footer={footer}
                placeholder="Create Password"
                toggleMask
                className="flex bg-[#E4E4E4] text-[16px] my-[3%] text-[#000000CC] rounded-[10px] w-[100%]"
              />
            </div>

            {/* <div className="mr-[2px] flex justify-between items-center bg-[#E4E4E4] text-[14px] my-[3%] text-[#000000CC] rounded-[10px]">
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
            </div> */}

            {/* <div className="my-[4%]"></div>
            <div className="mr-[2px] flex bg-[#E4E4E4] text-[14px] my-[3%] text-[#000000CC] rounded-[10px]">
              <input
                id="password"
                aria-label="Password"
                className="bg-transparent w-[100%] py-[5%] pl-[10px]"
                placeholder="Create Password"
                ref={passRef}
                onchange={(e) => setPassword(e.target.value)}
                type={isPasswordVisible ? "text" : "password"}
              />

              <div
                className="flex justify-center items-center pt-[%] pr-[5%]"
                aria-label={
                  isPasswordVisible ? "Hide password" : "Show password"
                }
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                <FontAwesomeIcon icon={faEyeSlash} className="" />
              </div>
            </div>
            <div className="my-[4%]"></div>
            <div className="mr-[2px] flex bg-[#E4E4E4] text-[14px] my-[3%] text-[#000000CC] rounded-[10px]">
              <input
                className="bg-transparent w-[100%] py-[5%] pl-[10px]"
                placeholder="Repeat Password"
                // ref={passRef}
                // onchange={(e) => setPassword(e.target.value)}
                type={isPasswordVisible ? "text" : "password"}
              />

              <div
                className="flex justify-center items-center pt-[%] pr-[5%]"
                aria-label={
                  isPasswordVisible ? "Hide password" : "Show password"
                }
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                <FontAwesomeIcon icon={faEyeSlash} className="" />
              </div>
            </div> */}
          </div>

          <div className="my-auto">
            {loading ? (
              <div className="flex justify-center items-center h-[53px] text-[16px] rounded-[8px] text-center gradient-btn text-white w-[100%]">
                <img src={loader} alt="" className="w-[40px] h-[20px]" />
              </div>
            ) : (
              <div className="" onClick={handleSubmit}>
                <GradientBtn name="Next" />
              </div>
            )}

            <p className="my-[3.5%] text-center uppercase">or</p>
            <YourComponent />
            <div className="mt-[2.5%] text-center register-input rounded-md m">
              <img src={apple} className=" side-bar-text mr-3 inline" />
              <p className="inline">Continue with Apple</p>
            </div>
            <p className="text-center text-[#212828] text-[14px] my-3">
              By clicking next you agree to our{" "}
              <span className="text-[#00AABC]">
                Terms and Conditions <span className="text-[#212828]">and</span>{" "}
                Privacy Policy{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
