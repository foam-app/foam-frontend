import React from "react";
import { useNavigate } from "react-router-dom";
useNavigate;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {
  const history = useNavigate();

  const handleGoBack = () => {
    history(-1);
  };
  return (
    <div>
      <div
        className="header flex text-[20px] font-bold text-[#212828] shadow-md p-[5%]"
        onClick={handleGoBack}
      >
        <FontAwesomeIcon icon={faChevronLeft} className="mt-[1.5%]" />
        <p className="ml-[3%]">{props.header}</p>
      </div>
    </div>
  );
}
