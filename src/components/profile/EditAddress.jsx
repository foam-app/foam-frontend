import React, { useRef, useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

const EDIT_ADDRESS = `/api/user/address`;
import axios from "../../api/url";
import { useContext } from "react";
import { TokenContext } from "../../context/TokenProvider";
import { success, failure } from "../../classes/notify";

import loader from "../../assets/loader.gif";

export default function EditAddress() {
  const { token } = useContext(TokenContext);
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");

  const [loading, setLoading] = useState(false);

  const streetRef = useRef();
  const cityRef = useRef();

  const handleEditAddress = async () => {
    setLoading(true);
    try {
      const response = await axios.put(
        EDIT_ADDRESS,
        {
          street: street,
          city: city,
          postalCode: "500001",
          country: "Nigeria",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        }
      );

      success(response.data.message);
      setLoading(false);
    } catch (err) {
      failure(err.response.data.error || err.response.data.error.message);
      setLoading(false);
    }
  };
  return (
    <>
      <InputText
        id="text"
        aria-describedby="username-help"
        ref={streetRef}
        onChange={(e) => setStreet(e.target.value)}
        placeholder="Enter Street"
        className="flex bg-[#E4E4E4] text-[16px] my-[3%] text-[#000000CC] rounded-[10px] w-[100%]
          "
      />
      <InputText
        id="text"
        aria-describedby="username-help"
        ref={cityRef}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter City"
        className="flex bg-[#E4E4E4] text-[16px] my-[3%] text-[#000000CC] rounded-[10px] w-[100%]
          "
      />

      {loading ? (
        <div className="flex justify-center items-center h-[53px] text-[16px] rounded-[8px] text-center bg-[#001C1F] text-white w-[100%]">
          <img src={loader} alt="" className="w-[40px] h-[20px]" />
        </div>
      ) : (
        <Button
          label="Submit"
          className="w-[100%] bg-[#001C1F] outline-none"
          onClick={handleEditAddress}
        />
      )}
    </>
  );
}
