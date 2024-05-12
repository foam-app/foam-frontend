import { createContext, useState, useEffect } from "react";

export const TokenContext = createContext({
  token: "",
  setToken: () => {},
});

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, [token]);

  const initToken = (token) => {
    localStorage.setItem("token", token);

    //rather than calling setToken straight in components you can use another function like the one above to perform the same task
  };

  return (
    <TokenContext.Provider value={{ token, setToken, initToken }}>
      {children}
    </TokenContext.Provider>
  );
};
