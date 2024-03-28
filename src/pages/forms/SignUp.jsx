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
const SIGNUP_URL = `/auth/register`;

export default function SignUp() {
  const history = useNavigate();

  const handleGoBack = () => {
    history(-1);
  };

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
  const passRef = useRef();

  const handleSubmit = async (e) => {
    history("/signup-address");
    e.preventDefault();

    const data = {
      firstName: firstName,
      lastName: lastName,
      middleName: "Middle",
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
      history("/signup-address");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="mx-[3%]">
        <div
          className="header flex justify-between items-center mt-[20px] text-[12px]"
          onClick={handleGoBack}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
          <p>step 1 of 2</p>
        </div>

        <div className="mt-[12%] flex flex-col h-[100vh]">
          <p className="text-[24px] font-medium">Let’s set up your account</p>

          <div className="input-boxes">
            <div className="flex justify-between items-center">
              <Input
                classname="bg-transparent py-[10%] px-[10px]"
                placeholder="First Name"
                ref={firstRef}
                onchange={(e) => setFirstName(e.target.value)}
              />
              {/* <div className=""></div> */}
              <Input
                classname="bg-transparent py-[10%] px-[10px]"
                placeholder="Last Name"
                ref={lastRef}
                onchange={(e) => setLastName(e.target.value)}
              />
            </div>

            <Input
              classname="bg-transparent w-[100%] py-[5%] pl-[5px]"
              placeholder="Phone Number"
              ref={phoneRef}
              onchange={(e) => setPhone(e.target.value)}
            />
            <div className="my-[4%]"></div>
            <Input
              classname="bg-transparent w-[100%] py-[5%] pl-[10px]"
              placeholder="Email Address"
              ref={emailRef}
              onchange={(e) => setEmail(e.target.value)}
            />
            <div className="my-[4%]"></div>
            <Input
              classname="bg-transparent w-[100%] py-[5%] pl-[10px]"
              placeholder="Create Password"
              icon={faEyeSlash}
              ref={passRef}
              onchange={(e) => setPassword(e.target.value)}
            />
            <div className="my-[4%]"></div>
            <Input
              classname="bg-transparent w-[100%] py-[5%] pl-[10px]"
              placeholder="Repeat Password"
              icon={faEyeSlash}
            />
          </div>

          <div className="my-auto">
            <div className="" onClick={handleSubmit}>
              <GradientBtn name="Next" />
            </div>
            <p className="my-[3.5%] text-center uppercase">or</p>
            <div className="text-center register-input rounded-md">
              <img src={google} className=" side-bar-text inline mr-3" />
              <p className="inline">Continue with Google</p>
            </div>
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
