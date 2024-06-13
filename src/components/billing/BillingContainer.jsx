import React from "react";
import Header from "../global/Header";
import BottomNav from "../global/BottomNav";
import BillingItem from "./BillingItem";

export default function BillingContainer() {
  const billings = [
    {
      id: 1,
      name: "Most Popular Plan",
      price: "NGN 57,500",
      description: "Our Most convenient plan. Enjoy next-day rush",
      color: " bg-[#001C1F]",
      list: [
        "Priced by the bag, as low as N5,000/bag",
        "If it fits in the bag, we’ll clean it",
        "Always free pickup and delivery",
        "Waived service fee on all orders",
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: "NGN 24,500",
      description: "Our Most convenient plan. Enjoy next-day rush",
      color: " bg-[#21CAAD]",
      list: [
        "Priced by the bag, as low as N5,000/bag",
        "If it fits in the bag, we’ll clean it",
        "Always free pickup and delivery",
        "Waived service fee on all orders",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: "NGN 152, 900",
      description: "Our Most convenient plan. Enjoy next-day rush",
      color: "bg-[#FFE554]",
      list: [
        "Priced by the bag, as low as N5,000/bag",
        "If it fits in the bag, we’ll clean it",
        "Always free pickup and delivery",
        "Waived service fee on all orders",
      ],
    },
  ];

  return (
    <div className="relative">
      <Header header="Plans & Subscriptions" />
      <div className="p-[5%] my-[3.5%]">
        <p className="text-[#001C1F] text-[20px] font-bold">Select a Plan</p>

        {billings.map((billing) => (
          <BillingItem
            key={billing.id}
            color={billing.color}
            package={billing.name}
            description={billing.description}
            price={billing.price}
            list={billing.list.map((item) => (
              <li className="my-1">{item}</li>
            ))}
          />
        ))}
      </div>
      <BottomNav />
    </div>
  );
}
