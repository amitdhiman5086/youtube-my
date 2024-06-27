import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const ButtonList = () => {
  const list = [
    "Technology",
    "Sports",
    "Entertainment",
    "Travel",
    "Education",
    "Health",
    "Business",
    "Science",
    "Lifestyle",
    "Music",
    "Food",
    "Fashion",
    "Movies",
    "Art",
    "Photography",
    "Finance",
    "Politics",
    "History",
    "Environment",
    "Fitness",
  ];
  return (
    <div className="mx-[10%] w-[80vw] flex overflow-x-scroll ">
      {list.map((item, index) => (
        <Link key={index} to={"/results?search=" + item}>
          {" "}
          <Button name={item.toUpperCase()} />
        </Link>
      ))}
    </div>
  );
};

export default ButtonList;
