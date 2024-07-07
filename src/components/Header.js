import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YT_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestios, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  // console.log(searchQuery);
  const dispatch = useDispatch();
  const togggleHandler = () => {
    dispatch(toggleMenu());
  };

  const getSuggestonData = async () => {
    const data = await fetch(YT_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    // console.log("Api Call");
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  useEffect(() => {
    // console.log(searchQuery)
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        // setSearchQuery(searchCache[searchQuery]);
        // console.log("From cache");
      } else {
        getSuggestonData();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

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
        <div>
          <input
            className="px-7 py-2 w-1/2 rounded-l-full border-2  "
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            // onFocusCapture={() => setShowSuggestions(false)}
          />
          <button
            className="p-2  bg-gray-600 rounded-r-full"
            onClick={() => {
              setShowSuggestions(false);
            }}
          >
            <Link to={"/results?search=" + searchQuery}>Search</Link>
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white ml-[345px]  w-[37rem] shadow-lg rounded-md border border-gray-100">
            <ul className="">
              {suggestios.map((s) => (
                <Link key={s} to={"/results?search=" + s}>
                  <li
                    className="text-start px-3 py-2 shadow-sm hover:bg-gray-100"
                    key={s}
                    onClick={() => {
                      setSearchQuery(s);
                      setShowSuggestions(false);
                    }}
                  >
                    🔍 {s}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
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
