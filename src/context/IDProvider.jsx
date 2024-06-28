import { createContext, useState, useEffect } from "react";

export const IDContext = createContext({
  ID: "",
  setID: () => {},
});

export const IDProvider = ({ children }) => {
  const [ID, setID] = useState("");

  return (
    <IDContext.Provider value={{ ID, setID }}>{children}</IDContext.Provider>
  );
};
