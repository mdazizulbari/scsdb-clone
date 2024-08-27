import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import { useEffect, useState } from "react";
import axios from "../utils/axios";
import Card from "./partials/Card";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );
      if (data.results.length > 0) {
        settrending((previousState) => [...previousState, ...data.results]);
        setPage(page + 1);
      }
      else{
        setHasMore(false);
      }}
     catch (error) {
      console.log("Error: ", error);
    }
  };

  const refreshHandler = () => {
    if (trending.length === 0) {
      getTrending();
    } else {
      setPage(1);
      settrending([]);
      getTrending();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="w-full px-[3%] flex items-center justify-between">
        <h1 className="w-1/5 text-2xl text-white font-semibold">
          <i
            className="ri-arrow-left-line hover:text-[#6556CD]"
            onClick={() => navigate(-1)}
          ></i>{" "}
          Trending
        </h1>

        <div className="w-4/5 flex items-center">
          <Topnav />
          <Dropdown
            title="Category"
            options={["movie", "tv", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
          <Dropdown
            title="Duration"
            options={["day", "week"]}
            func={(e) => setduration(e.target.value)}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={trending.length}
        next={getTrending}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Card data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};
export default Trending;
