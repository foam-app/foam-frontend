import React from "react";
import Header from "../global/Header";
import BottomNav from "../global/BottomNav";
import AddressContainer from "./AddressContainer";
import { useNavigate } from "react-router-dom";

import { usePaystackPayment } from "react-paystack";

const config = {
  reference: new Date().getTime().toString(), //pass uuid as reference
  email: "user@example.com",
  amount: 6000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
  publicKey: "pk_test_c8dc32b8ae474a888a8fd4c6a9e612fef4c5efb7",
};

// you can call this function anything
const onSuccess = (reference) => {
  // Implementation for whatever you want to do with reference and after success call.
  // const values = { email, bought, date,  ,...reference}
  console.log(reference);
  // axios.post(values)
};

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log("closed");
};

const PaystackHookExample = () => {
  const initializePayment = usePaystackPayment(config);
  return (
    <div>
      <button
        className="w-[100%] rounded-[8px] py-[5%] px-[32px] bg-[#001C1F] text-white text-[16px] font-bold"
        onClick={() => {
          initializePayment({ onSuccess, onClose });
        }}
      >
        Make Payment
      </button>
    </div>
  );
};

export default function AddressInfo() {
  const navigate = useNavigate();
  const handleNavigatePayment = () => {
    navigate("/payment");
  };
  return (
    <div className="relative onboard">
      <Header header="Pickup Address" />
      <AddressContainer />
      <div className="px-[4%] my-auto">
        {/* <button
          className="w-[100%] rounded-[8px] py-[5%] px-[32px] bg-[#001C1F] text-white text-[16px] font-bold"
          onClick={handleNavigatePayment}
        >
          <p>Make Payment</p>
        </button> */}
        <PaystackHookExample />
      </div>

      <BottomNav />
    </div>
  );
}
