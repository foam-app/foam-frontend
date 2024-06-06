import React, { useContext, useState, useRef } from "react";
import Input from "../forms/Input";

import { TokenContext } from "../../context/TokenProvider";
import axios from "../../api/url";

const CHANGE_PASSWORD = `/api/user/password`;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

import { success, failure } from "../../classes/notify";
import loader from "../../assets/loader.gif";

import { useNavigate } from "react-router-dom";

export default function ChangePassword() {
  const history = useNavigate();

  const handleGoBack = () => {
    history(-1);
  };

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  //   const [confirmPassword, setConfirmPassword] = useState("");

  const oldRef = useRef();
  const newRef = useRef();
  //   const confirmRef = useRef();

  const { token } = useContext(TokenContext);

  const [isPasswordVisible, setIsPasswordVisible] = useState("password");

  const [loading, setLoading] = useState(false);

  const [showPopup, setShowPopup] = useState(true);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const togglePassword = () => {
    if (isPasswordVisible === "password") {
      setIsPasswordVisible("text");
    } else if (isPasswordVisible === "text") {
      setIsPasswordVisible("password");
    }
  };

  const handleChangePassword = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const response = await axios.put(
        CHANGE_PASSWORD,
        {
          oldPassword: oldPassword,
          newPassword: newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        }
      );
      setLoading(false);
      success(response.data.message);
      handleClosePopup();
    } catch (err) {
      setLoading(false);
      failure(err.response.data.error);
      handleClosePopup();
    }
  };
  return (
    <div>
      {showPopup && (
        <div className="custom-popup">
          <div className="popup-content">
            <div className="grid items-center">
              <div
                className="flex justify-end items-end"
                onClick={handleClosePopup}
              >
                <FontAwesomeIcon icon={faX} />
              </div>
            </div>

            <div className="bg-white">
              <p className="capitalize text-[19px] font-semibold text-center">
                Change Password
              </p>

              <div>
                <div className="mr-[2px] flex justify-between items-center bg-[#E4E4E4] text-[14px] my-[3%] text-[#000000CC] rounded-[10px]">
                  <Input
                    type={isPasswordVisible}
                    classname="bg-transparent w-[100%] py-[5%] pl-[10px]"
                    placeholder="Current Password"
                    ref={oldRef}
                    onchange={(e) => setOldPassword(e.target.value)}
                  />

                  <div
                    className="flex justify-between items-center pt-[%] pr-[5%]"
                    onClick={togglePassword}
                  >
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      className="text-[12px]"
                    />
                  </div>
                </div>

                <div className="my-[5%]"></div>

                <div className="mr-[2px] flex justify-between items-center bg-[#E4E4E4] text-[14px] my-[3%] text-[#000000CC] rounded-[10px]">
                  <Input
                    type={isPasswordVisible}
                    classname="bg-transparent w-[100%] py-[5%] pl-[10px]"
                    placeholder="New Password"
                    ref={newRef}
                    onchange={(e) => setNewPassword(e.target.value)}
                  />

                  <div
                    className="flex justify-between items-center pt-[%] pr-[5%]"
                    onClick={togglePassword}
                  >
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      className="text-[12px]"
                    />
                  </div>
                </div>

                <div className="my-[5%]"></div>

                <div className="mr-[2px] flex justify-between items-center bg-[#E4E4E4] text-[14px] my-[3%] text-[#000000CC] rounded-[10px]">
                  <Input
                    type={isPasswordVisible}
                    classname="bg-transparent w-[100%] py-[5%] pl-[10px]"
                    placeholder="Confirm Password"
                    ref={newRef}
                    onchange={(e) => setNewPassword(e.target.value)}
                  />

                  <div
                    className="flex justify-between items-center pt-[%] pr-[5%]"
                    onClick={togglePassword}
                  >
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      className="text-[12px]"
                    />
                  </div>
                </div>

                <div className="my-[6%]"></div>
                {loading ? (
                  <div className="flex justify-center items-center rounded-[8px] w-[100%] py-[12px] px-[32px] bg-[#001C1F] text-white text-[16px] font-bold">
                    <img src={loader} alt="" className="w-[40px] h-[20px]" />
                  </div>
                ) : (
                  <button
                    className="rounded-[8px] w-[100%] py-[12px] px-[32px] bg-[#001C1F] text-white text-[16px] font-bold"
                    onClick={handleChangePassword}
                  >
                    Save Password
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
