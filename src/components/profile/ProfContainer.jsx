import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Header from "../global/Header";
import Details from "./Details";
import BottomNav from "../global/BottomNav";
useNavigate;

export default function ProfContainer() {
  return (
    <>
      <div className="relative">
        <Header header="Profile" />
        <div className="p-[5%]">
          <Details />
        </div>

        <BottomNav />
      </div>
    </>
  );
}
