import { createContext, useState, useEffect } from "react";

export const OTPContext = createContext({
  otp: "",
  setOTP: () => {},
});

export const OTPProvider = ({ children }) => {
  const [otp, setOTP] = useState("");

  return (
    <OTPContext.Provider value={{ otp, setOTP }}>
      {children}
    </OTPContext.Provider>
  );
};
