import {
  faChevronLeft,
  faEyeSlash,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GradientBtn from "../../components/global/GradientBtn";
import Input from "../../components/forms/Input";
import { Link, useNavigate } from "react-router-dom";

import apple from "../../assets/google-svg.svg";
import google from "../../assets/apple.svg";

import axios from "../../api/url";
import { TokenContext } from "../../context/TokenProvider";
import { success, failure } from "../../classes/notify";

import loader from "../../assets/loader.gif";
const LOGIN_URL = `/api/auth/login`;

import { InputText } from "primereact/inputtext";

import { Password } from "primereact/password";

export default function Login() {
  const { setToken, initToken } = useContext(TokenContext);
  const history = useNavigate();

  const handleGoBack = () => {
    history(-1);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passRef = useRef();

  const [loading, setLoading] = useState(false);

  const [isPasswordVisible, setIsPasswordVisible] = useState("password");

  const [toggleIcon, setToggleIcon] = useState(faEyeSlash);

  const togglePassword = () => {
    if (isPasswordVisible === "password") {
      setIsPasswordVisible("text");
      setToggleIcon(faEye);
    } else if (isPasswordVisible === "text") {
      setIsPasswordVisible("password");
      setToggleIcon(faEyeSlash);
    }
  };

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        }
      );

      console.log(response);
      setLoading(false);
      const token = response.data.token;
      initToken(token);
      setToken(token);

      const message = response.data.message;
      success(message);
      history("/home");
    } catch (error) {
      setLoading(false);
      const message = error.response.data.error;
      failure(message);
    }
  };

  return (
    <>
      <div className="mx-[3%] ">
        <div
          className="header flex justify-between items-center mt-[20px] text-[15px]"
          onClick={handleGoBack}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
          {/* <p>step 1 of 2</p> */}
        </div>

        <div className="mt-[5%]">
          <p className="text-[24px] font-medium">Log In</p>

          <div className="mt-[5%]">
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
                ref={passRef}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                feedback={false}
                toggleMask
                className="flex bg-[#E4E4E4] text-[16px] my-[3%] text-[#000000CC] rounded-[10px] w-[100%]"
              />
            </div>

            <div className="my-[4%]"></div>

            <p className="flex justify-end items-end text-[#00AABC] text-[14px]">
              <Link to="/reset-email">Forgot password?</Link>
            </p>
          </div>

          <div className="w-[100%] mt-[27%]">
            {loading ? (
              <div className="flex justify-center items-center h-[53px] text-[16px] rounded-[8px] text-center gradient-btn text-white w-[100%]">
                <img src={loader} alt="" className="w-[40px] h-[20px]" />
              </div>
            ) : (
              <div className="" onClick={handleSubmit}>
                <GradientBtn name="Log In" />
              </div>
            )}
            <p className="my-[3.5%] text-center uppercase">or</p>
            <div className="text-center register-input rounded-md">
              <img src={google} className=" side-bar-text inline mr-3" />
              <p className="inline">Continue with Google</p>
            </div>
            <div className="mt-[2.5%] text-center register-input rounded-md m">
              <img src={apple} className=" side-bar-text mr-3 inline" />
              <p className="inline">Continue with Apple</p>
            </div>
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
