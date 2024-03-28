import React from "react";
import Title from "./Title";

import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";

export default function Products() {
  return (
    <>
      <div className="mt-[7%]">
        <Title title="Products on Sale" />

        <div className="products flex mt-[5%]">
          <img src={product1} alt="" className="mr-2" />
          <img src={product2} alt="" />
        </div>
      </div>
    </>
  );
}
