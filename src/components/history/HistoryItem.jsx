import React from "react";
import Header from "../global/Header";
import ItemDetails from "./ItemDetails";
import BottomNav from "../global/BottomNav";
import { useState } from "react";
import Ongoing from "./Ongoing";
import Cancelled from "./Cancelled";
import Completed from "./Completed";

export default function HistoryItem() {
  const tabs = [
    {
      id: 1,
      label: "Ongoing",
      content: <Ongoing />,
    },
    {
      id: 2,
      label: "Completed",
      content: <Completed />,
    },
    {
      id: 3,
      label: "Cancelled",
      content: <Cancelled />,
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="relative">
      <Header header="History" />
      <div className="p-[5%] my-[3.5%]">
        <div className="w-[100%] bg-[#E4E4E4] p-[2.3%] rounded-[4px] flex justify-between items-center">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`cursor-pointer text-center  w-[32%] p-[1%] rounded-[5px]
                            ${
                              activeTab.id === tab.id
                                ? "bg-white text-[#00AABC] p-[0.5%]"
                                : "text-[#001C1F]"
                            }`}
              onClick={() => handleTabClick(tab)}
            >
              <p className="text-center"> {tab.label}</p>
            </div>
          ))}
        </div>
        {activeTab.content}
      </div>

      <BottomNav />
    </div>
  );
}
