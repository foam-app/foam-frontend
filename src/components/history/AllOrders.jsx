import React from "react";
import ItemDetails from "../history/ItemDetails";

import { useContext, useState, useEffect } from "react";
import { TokenContext } from "../../context/TokenProvider";

import axios from "../../api/url";
const GET_ORDERS = `/api/order/`;
export default function AllOrders() {
  const { token } = useContext(TokenContext);
  const [data, setData] = useState([]);

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
        setData(response.data.orders);
      } catch (err) {
        console.log(err.response);
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

    // Return the formatted time string
    return `${hourNumber}:${
      minuteNumber < 10 ? "0" : ""
    }${minuteNumber} ${suffix}`;
  };

  return (
    <div>
      <div className="">
        {data.map((item) => (
          <ItemDetails
            key={item.id}
            date={formatDate(item.createdAt)}
            time={formatTime(item.createdAt)}
          />
        ))}
      </div>
    </div>
  );
}
