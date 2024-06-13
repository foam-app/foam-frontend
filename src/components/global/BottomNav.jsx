import homeActive from "../../assets/hActive.svg";
import historyActive from "../../assets/hiActive.svg";
import basketActive from "../../assets/bActive.svg";
import userActive from "../../assets/pActive.svg";

import home from "../../assets/home.svg";
import history from "../../assets/history.svg";
import basket from "../../assets/basket.svg";
import user from "../../assets/profile.svg";

import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function BottomNav() {
  const location = useLocation();

  const [homeBool, setHome] = useState();
  const [historyBool, setHistory] = useState();
  const [basketBool, setBasket] = useState();
  const [userBool, setUser] = useState();

  const currentPath = location.pathname;

  useEffect(() => {
    switch (currentPath) {
      case "/home":
        setHome(true);
        break;
      case "/history":
        setHistory(true);
        break;
      case "/basket":
        setBasket(true);
        break;
      case "/profile":
        setUser(true);
        break;
    }
  });
  return (
    <>
      <br />
      <br />
      <br />
      <div className="z-[1500] bottom-navigation gradient-btn rounded-t-[30px] rounded flex justify-between items-center py-[5%] px-[10%] w-[100%] fixed bottom-0 left-0 text-[13px] font-medium text-white">
        {homeBool ? (
          <Link to="/home">
            <div className="flex justify-center items-center">
              <img src={homeActive} alt="" className="w-[20px] h-[20px]" />
            </div>
            <p className="text-[#001C1F] text-center">Home</p>
          </Link>
        ) : (
          <Link to="/home">
            <div className="flex justify-center items-center">
              <img src={home} alt="" className="w-[20px] h-[20px]" />
            </div>
            <p className="text-center">Home</p>
          </Link>
        )}
        {historyBool ? (
          <Link to="/history">
            <div className="flex justify-center items-center">
              <img src={historyActive} alt="" className="w-[20px] h-[20px]" />
            </div>
            <p className="text-[#001C1F] text-center">Orders</p>
          </Link>
        ) : (
          <Link to="/history">
            <div className="flex justify-center items-center">
              <img src={history} alt="" className="w-[20px] h-[20px]" />
            </div>
            <p className="text-center">Orders</p>
          </Link>
        )}
        {basketBool ? (
          <Link to="/basket">
            <div className="flex justify-center items-center">
              <img src={basketActive} alt="" className="w-[20px] h-[20px]" />
            </div>
            <p className="text-[#001C1F] text-center">Basket</p>
          </Link>
        ) : (
          <Link to="/basket">
            <div className="flex justify-center items-center">
              <img src={basket} alt="" className="w-[20px] h-[20px]" />
            </div>
            <p className="text-center">Basket</p>
          </Link>
        )}
        {userBool ? (
          <Link to="/profile">
            <div className="flex justify-center items-center">
              <img src={userActive} alt="" className="w-[20px] h-[20px]" />
            </div>
            <p className="text-[#001C1F] text-center">Profile</p>
          </Link>
        ) : (
          <Link to="/profile">
            <div className="flex justify-center items-center">
              <img src={user} alt="" className="w-[20px] h-[20px]" />
            </div>
            <p className="text-center">Profile</p>
          </Link>
        )}
      </div>
    </>
  );
}
