import { createContext, useState, useEffect } from "react";

export const ProfileContext = createContext({
  user: {},
  setUser: () => {},
});

export const ProfileProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <ProfileContext.Provider value={{ user, setUser }}>
      {children}
    </ProfileContext.Provider>
  );
};
