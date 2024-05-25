import React from "react";
import ItemDetails from "../history/ItemDetails";

export default function Completed() {
  const items = [
    { id: 1, date: "10th April 2024", time: "10:00 AM" },
    { id: 2, date: "9th April 2024", time: "10:00 AM" },
    { id: 3, date: "8th April 2024", time: "10:00 AM" },
    { id: 4, date: "7 April 2024", time: "10:00 AM" },
  ];
  return (
    <div>
      <div className="">
        {items.map((item) => (
          <ItemDetails key={item.id} date={item.date} time={item.time} />
        ))}
      </div>
    </div>
  );
}
