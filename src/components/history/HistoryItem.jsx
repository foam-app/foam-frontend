import React from "react";
import Header from "../global/Header";
import ItemDetails from "./ItemDetails";
import BottomNav from "../global/BottomNav";

export default function HistoryItem() {
  const items = [
    { id: 1, date: "10th April 2024", time: "10:00 AM", status: "Pending" },
    { id: 2, date: "9th April 2024", time: "10:00 AM", status: "Declined" },
    { id: 3, date: "8th April 2024", time: "10:00 AM", status: "Complete" },
    { id: 4, date: "7 April 2024", time: "10:00 AM", status: "Complete" },
    { id: 1, date: "10th April 2024", time: "10:00 AM", status: "Pending" },
    { id: 2, date: "9th April 2024", time: "10:00 AM", status: "Declined" },
    { id: 3, date: "8th April 2024", time: "10:00 AM", status: "Complete" },
    { id: 4, date: "7 April 2024", time: "10:00 AM", status: "Complete" },
  ];
  return (
    <div className="relative">
      <Header header="History" />
      <div className="p-[5%] my-[3%]">
        {items.map((item) => (
          <ItemDetails
            key={item.id}
            date={item.date}
            time={item.time}
            status={item.status}
          />
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
