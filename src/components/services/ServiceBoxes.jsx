import React from "react";
import ServiceBoxItem from "./ServiceBoxItem";

import axios from "../../api/url";
import { useState, useEffect } from "react";
import { failure, success } from "../../classes/notify";
const GET_SERVICES = `api/services/`;

export default function ServiceBoxes() {
  const services = [
    {
      id: 1,
      image: "../../../src/assets/service1.png",
      title: "Washing and Folding",
      description: "Clothes, towels, lines etc",
    },
    {
      id: 2,
      image: "../../../src/assets/service2.png",
      title: "Washing and Ironing",
      description: "Clothes, towels, lines etc",
    },
    {
      id: 3,
      image: "../../../src/assets/service3.png",
      title: "Dry Cleaning",
      description: "Clothes, towels, lines etc",
    },
    {
      id: 4,
      image: "../../../src/assets/service4.png",
      title: "Stain Removal",
      description: "Clothes, towels, lines etc",
    },
    {
      id: 5,
      image: "../../../src/assets/service5.png",
      title: "Other Services",
      description: "Clothes, towels, lines etc",
    },
  ];

  const [data, setData] = useState([]);
  useEffect(() => {
    const getServices = async () => {
      try {
        const response = await axios.get(GET_SERVICES, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        });
        setData(response.data.services);
        // success(`${response.data.message}`);
      } catch (err) {
        // failure(`${err.response.data.error}`);
      }
    };

    // getServices();
  });
  return (
    <div>
      <div className="">
        <div className="">
          {services.map((item) => (
            <ServiceBoxItem
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
