import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import store from "../utils/store";
import { generateRandomName, randomString } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState();
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.message);
  useEffect(() => {
    const interval = setInterval(() => {
      //   console.log("Api call");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: randomString(26) + "!",
        })
      );
    }, 500);

    return () => clearInterval(interval);
  });

  return (
    <>
      <div>
        <div className="ml-2 p-2 border border-black h-[600px] bg-slate-50 rounded-md overflow-scroll flex flex-col-reverse">
          {chatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border  flex justify-center border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Amit Dhiman",
              message: liveMessage,
            })
          );
          setLiveMessage("")
        }}
      >
        <input
          className="p-2 border border-black w-96"
          value={liveMessage}
          type="text"
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-3 py-1 mx-4 bg-green-500">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
