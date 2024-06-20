import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm p-2 bg-gray-400 rounded-md m-2">
      <img  
      className="w-8 h-8 "
      alt="user" src="https://static.vecteezy.com/system/resources/previews/030/750/807/non_2x/user-icon-in-trendy-outline-style-isolated-on-white-background-user-silhouette-symbol-for-your-website-design-logo-app-ui-illustration-eps10-free-vector.jpg" />

      <div className="px-3">
        <h1 className="font-bold">{name}</h1>
        <p >{text}</p>
      </div>
    </div>
  );
};

export default Comment;
