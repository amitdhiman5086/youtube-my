import React from "react";

const VideoCard = ({ info }) => {
//   console.log(info);
  const { snippet, statistics } = info;
//   console.log(snippet);
//   console.log(statistics);
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-60 h-80 shadow-md">
      <img 
      className="rounded-md"
      alt={title} src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold px-2 max-h-32 overflow-hidden">{title}</li>
        <li>{channelTitle}</li>
        <li>{parseInt(statistics.viewCount/1000)}K Views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
