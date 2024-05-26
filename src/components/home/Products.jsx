import React from "react";
import Title from "./Title";

import product1 from "../../../public/product1.webp";
import product2 from "../../../public/product2.webp";
import product3 from "../../../public/product3.webp";

export default function Products() {
  return (
    <>
      <div className="mt-[7%]">
        <Title title="Products on Sale" />

        <div className="products mt-[5%]">
          <img src={product2} alt="" className="rounded-[8px]" />
          <img src={product1} alt="" className="rounded-[8px]" />
          <img src={product3} alt="" className="rounded-[8px]" />
        </div>
      </div>
    </>
  );
}
