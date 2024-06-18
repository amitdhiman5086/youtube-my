import React from "react";
import { useSelector } from "react-redux";
import store from "../utils/store";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="w-48 h-svh  p-5  shadow-md">
      <ul className="p-2">
        <li><Link to="/">Home</Link></li>
        <li>Video</li>
        <li>Short</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>News</li>
      </ul>
      <h1 className="font-bold">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Movie</li>
        <li>Gaming</li>
        <li>Sport</li>
      </ul>
    </div>
  );
};

export default SideBar;
