import React, { useState } from "react";
import StoreCategories from "./StoreCategories";

export default function Categories() {
  const categories = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Tops",
    },
    {
      id: 3,
      name: "Bottoms",
    },
    {
      id: 4,
      name: "Mens Corporate",
    },
    {
      id: 5,
      name: "Full Body Wears",
    },
    {
      id: 6,
      name: "Bridal Wears",
    },
    {
      id: 7,
      name: "Beddings",
    },
    {
      id: 8,
      name: "Household",
    },
    {
      id: 9,
      name: "Footwears",
    },
    {
      id: 10,
      name: "Others",
    },
  ];

  const [activeTab, setActiveTab] = useState(categories[0]);

  const handleTabClick = (category) => {
    setActiveTab(category);
  };
  return (
    <div>
      <div className="prompt-banner mt-[10%]">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`text-[15px] mx-1 font-bold rounded-[150px] py-[6px] px-[16px] text-center w-[100%}] cursor-pointer ${
              activeTab.id === category.id
                ? "bg-[#00AABC] text-white "
                : "bg-[#E5F7F8] text-[#212828]"
            }`}
            onClick={() => handleTabClick(category)}
          >
            {category.name}
          </div>
        ))}
      </div>

      <div className="">
        <StoreCategories />
      </div>
    </div>
  );
}
