import React from "react";
import { Link } from "react-router-dom";

export default function Button() {
  return (
    <Link to="/services">
      <button className="rounded-[8px] py-[12px] px-[32px] bg-[#001C1F] text-white text-[16px] font-bold">
        <p>Schedule Pickup</p>
      </button>
    </Link>
  );
}
