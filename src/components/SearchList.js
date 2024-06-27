import React, { useEffect, useState } from "react";

import { GOOGLE_API, YT_SEARCH_DATA_API } from "../utils/constants";
import { Link, useSearchParams } from "react-router-dom";
import VideoCard from "./VideoCard";
import Shimmer from "./Shimmer";
import ButtonList from "./ButtonList";

const SearchList = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [query] = useSearchParams();

  const getSearchResults = async () => {
    const data = await fetch(
      YT_SEARCH_DATA_API + query.get("search") + GOOGLE_API
    );
    const json = await data.json();
    // console.log(json.items);
    setSearchResult(json.items || []);
  };

  useEffect(() => {
    getSearchResults();
  }, [query]);

  return searchResult.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col">
      <ButtonList />
      <div className="flex flex-wrap px-12 justify-start">
        {searchResult.map((items) => (
          <Link to={"/watch?v=" + items?.id?.videoId} key={items.id}>
            <VideoCard info={items} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchList;
