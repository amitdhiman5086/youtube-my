import React, { useEffect, useState } from "react";
import { YT_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const Videolist = () => {
  const [videos, setVideos] = useState([]);

  const getYoutubeData = async () => {
    const data = await fetch(YT_API);
    const json = await data.json();
    setVideos(json.items);
  };

  useEffect(() => {
    getYoutubeData();
  }, []);

  return Object.keys(videos).length === 0 ? null : (
    <div  className="flex flex-wrap px-12 justify-start">
      {videos.map((items) => (
        <Link to={"/watch?v="+items.id} key={items.id}><VideoCard  info={items} /></Link>
      ))}
    </div>
  );
};

export default Videolist;
