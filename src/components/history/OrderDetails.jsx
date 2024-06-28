import React from "react";
import Header from "../global/Header";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { useContext, useState, useEffect } from "react";
import { TokenContext } from "../../context/TokenProvider";

import { IDContext } from "../../context/IDProvider";

import { Skeleton } from "primereact/skeleton";

import BottomNav from "../global/BottomNav";

import axios from "../../api/url";
const GET_ORDERS = `/api/order/`;

export default function OrderDetails() {
  const { token } = useContext(TokenContext);
  const { ID } = useContext(IDContext);
  const [data, setData] = useState([]);
  const history = useNavigate();

  const [loading, setLoading] = useState(true);

  const handleGoBack = () => {
    history(-1);
  };

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await axios.get(GET_ORDERS, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        });

        const orders = response.data.orders;
        const filteredData = orders.filter((item) => item.id === ID);
        setData(filteredData);
        console.log(filteredData);
        setLoading(false);
      } catch (err) {
        console.log(err.response);
        setLoading(false);
      }
    };
    getOrders();
  }, [token]);

  const formatDate = (dateString) => {
    // Extract the date part from the date-time string
    const date = dateString.split("T")[0];
    const [year, month, day] = date.split("-"); // Split the date into year, month, and day

    // Array of month names
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Helper function to determine the correct suffix for the day
    const getDaySuffix = (day) => {
      if (day >= 11 && day <= 13) {
        return "th";
      }
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    // Convert the month number to a month name
    const monthName = monthNames[parseInt(month, 10) - 1];

    // Get the day with the correct suffix
    const dayNumber = parseInt(day, 10);
    const dayWithSuffix = dayNumber + getDaySuffix(dayNumber);

    // Return the formatted date string
    return `${dayWithSuffix} ${monthName} ${year}`;
  };

  const formatTime = (dateString) => {
    // Extract the time part from the date-time string
    const time = dateString.substring(11, 16);
    const [hour, minute] = time.split(":"); // Split the time into hour and minute

    // Convert the hour to a number
    let hourNumber = parseInt(hour, 10);
    const minuteNumber = parseInt(minute, 10);

    // Determine AM or PM suffix
    const suffix = hourNumber >= 12 ? "PM" : "AM";

    // Convert hour from 24-hour to 12-hour format
    if (hourNumber === 0) {
      hourNumber = 12; // Midnight case
    } else if (hourNumber > 12) {
      hourNumber -= 12;
    }

    hourNumber = hourNumber + 1;

    // Return the formatted time string
    return `${hourNumber}:${
      minuteNumber < 10 ? "0" : ""
    }${minuteNumber} ${suffix}`;
  };

  if (loading == true) {
    return (
      <>
        <Header header="Order Details" />
        <div className="p-[5%] mt-5">
          <Skeleton className="mb-2"></Skeleton>
          <Skeleton width="10rem" className="mb-2"></Skeleton>
          <Skeleton width="5rem" className="mb-2"></Skeleton>
          <Skeleton height="2rem" className="mb-2"></Skeleton>
          <Skeleton width="10rem" height="4rem"></Skeleton>
        </div>
      </>
    );
  }
  return (
    <div>
      <Header header="Order Details" />
      <div className="p-[5%] my-[3.5%]">
        <p className="text-[19px] font-medium mb-[2%]">
          Status: <span className={`${data[0].status}`}>{data[0]?.status}</span>
        </p>
        <div className="flex justify-between items-center text-[17px] font-medium">
          <div className="">
            <p>{`${formatDate(data[0]?.createdAt)}`}</p>
            <p>{formatTime(data[0]?.createdAt)}</p>
          </div>
          <p className="font-bold text-[18.5px]">N{data[0]?.totalPrice}</p>
        </div>

        <hr />

        <p className="mt-[4%] text-[18px] font-semibold">Items</p>
        {data[0].items.map((item) => (
          <div className="my-[6.5%] w-[100%] flex justify-between items-center">
            <div className="flex justify-between items-center">
              <div className="w-[99px] h-[92px] bg-[#C8FAFF] rounded-[10px] flex justify-center items-center"></div>

              <div className="text-left ml-5 text-[18px]">
                <p className=" capitalize">{item.category.name}</p>
                <p className="font-bold">N {item.category.price}</p>
              </div>
            </div>

            <button className="rounded-[180px] py-[10px] px-[18px] bg-[#001C1F] text-white">
              <p>{item.quantity}</p>
            </button>
          </div>
        ))}
        <hr />

        <p className="mt-[4%] text-[18px] font-semibold">Address</p>

        <div className="payments my-[6%]">
          <hr />
          <div className="my-[3.5%] flex justify-between items-center text-[18px]">
            <p className="">Total Amount</p>
            <p className="font-bold tracking-wider">N2,000</p>
          </div>
          <div className="my-[3.5%] flex justify-between items-center text-[18px]">
            <p className="">Delivery Charge</p>
            <p className="font-bold tracking-wider">N1,500</p>
          </div>
          <div className="my-[3.5%]  flex justify-between items-center text-[18px]">
            <p className="">Total Paid</p>
            <p className="font-bold tracking-wider">N5,000</p>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
