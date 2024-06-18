import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const togggleHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid  grid-flow-col p-2 m-2 shadow-sm">
      <div className=" flex col-span-1">
        <img
          onClick={() => {
            togggleHandler();
          }}
          className="h-14 w-14  rounded-full cursor-pointer "
          alt="hamburgur"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/non_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        ></img>
        <img
          className="h-14"
          alt="youtube Logo"
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
        ></img>
      </div>
      <div className="col-span-10 items-center text-center ">
        <input
          className="p-2 w-1/2 rounded-l-full border-2  "
          type="text"
          placeholder="Search"
        />
        <button className="p-2  bg-gray-600 rounded-r-full">Search</button>
      </div>
      <div className="col-span-1 -mr-14]">
        <img
          className="h-14 "
          alt="user"
          src="https://static.vecteezy.com/system/resources/previews/030/750/807/non_2x/user-icon-in-trendy-outline-style-isolated-on-white-background-user-silhouette-symbol-for-your-website-design-logo-app-ui-illustration-eps10-free-vector.jpg"
        ></img>
      </div>
    </div>
  );
};

export default Header;
