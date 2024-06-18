import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "all",
    "gaming",
    "news",
    "holi",
    "all",
    "gaming",
    "news",
    "holi",
    "all",
    "gaming",
  
  ];
  return (
    <div className="flex overflow-x-scroll">
      {list.map((item, index) => (
        <Button name={item.toUpperCase()} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
