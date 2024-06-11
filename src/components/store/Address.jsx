import React from "react";
import Header from "../global/Header";
import BottomNav from "../global/BottomNav";
import AddressContainer from "./AddressContainer";
import { useNavigate } from "react-router-dom";

import { usePaystackPayment } from "react-paystack";

import axios from "../../api/url";
import { TokenContext } from "../../context/TokenProvider";
import { useContext } from "react";
const CREATE_ORDER = `/api/order/create`;

const config = {
  reference: new Date().getTime().toString(), //pass uuid as reference
  email: "user@example.com",
  amount: 6000,
  publicKey: "pk_test_c8dc32b8ae474a888a8fd4c6a9e612fef4c5efb7",
};

const onSuccess = (reference, token) => {
  // console.log(reference);

  const total = config.amount;
};

const createOrder = async (config, token) => {
  console.log(config, token);
  const order = {
    totalPrice: config.amount,
    paymentType: "ONLINE",
    paymentId: `${config.reference}`,
    paymentStatus: "SUCCEEDED",
  };

  try {
    const response = await axios.post(CREATE_ORDER, order, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      withCredentials: true,
    });
    console.log(response.data);
  } catch (err) {
    console.log(err.response);
  }
};
const onClose = () => {
  console.log("closed");
};

const PaystackHookExample = () => {
  const initializePayment = usePaystackPayment(config);
  const { token } = useContext(TokenContext);

  return (
    <div>
      <button
        className="w-[100%] rounded-[8px] py-[5%] px-[32px] bg-[#001C1F] text-white text-[16px] font-bold"
        onClick={() => {
          initializePayment({
            onSuccess: (token) => {
              createOrder(config, token);
            },
            onClose,
          });
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
        <PaystackHookExample />
      </div>

      <BottomNav />
    </div>
  );
}
