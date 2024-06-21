import React from "react";
import { useSelector } from "react-redux";
// import store from "../utils/store";
import { Link } from "react-router-dom";
import SearchList from "./SearchList";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="w-48 h-svh  p-2 shadow-md  ">
      <ul className="py-10 px-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/results?search=Videos">Videos</Link>
        </li>
        <li>
          <Link to="/results?search=Shorts">Short</Link>
        </li>
        <li>
          <Link to="/results?search=Live">Live</Link>
        </li>
      </ul>
      <h1 className="font-bold ">Subscriptions</h1>
      <ul className="px-2 py-10">
        <li>
          <Link to="/results?search=Music">Music</Link>
        </li>
        <li>
          <Link to="/results?search=Sports">Sports</Link>
        </li>
        <li>
          <Link to="/results?search=Gaming">Gaming</Link>
        </li>
        <li>
          <Link to="/results?search=News">News</Link>
        </li>
      </ul>
     

    </div>
  );
};

export default SideBar;
