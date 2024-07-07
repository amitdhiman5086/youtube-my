import React from "react";
import { timeAgo } from "../utils/helper";

const VideoCard = ({ info }) => {
  const viewCount = info?.statistics?.viewCount || 0; // Example view count
  //   console.log(info);
  const { snippet } = info;
  //   console.log(snippet);
  //   console.log(statistics);
  const { channelTitle, title, thumbnails, publishTime } = snippet;
  // console.log(parseInt(publishTime));
  const display =
    isNaN(parseInt(publishTime))
    ?parseInt(viewCount / 100000) + " lakhs views"
    : timeAgo(publishTime)
  return (
    <div className="p-2 m-2 w-60 h-80 shadow-md">
      <img className="rounded-md" alt={title} src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold px-2 max-h-32 overflow-hidden">{title}</li>
        <li>{channelTitle}</li>
        <li>{display}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
