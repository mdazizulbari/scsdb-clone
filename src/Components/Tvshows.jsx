import { useEffect, useState } from "react";
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import Card from "./partials/Card";

const Tvshows = () => {
  document.title = "SCSDB | tv";
  const navigate = useNavigate();
  const [category, setCategory] = useState("airing_today");
  const [tv, setTv] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getTv = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);
      if (data.results.length > 0) {
        setTv((previousState) => [...previousState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const refreshHandler = () => {
    if (tv.length === 0) {
      getTv();
    } else {
      setPage(1);
      setTv([]);
      getTv();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);
  return tv.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="w-full px-[3%] flex items-center justify-between">
        <h1 className="w-1/5 text-2xl text-white font-semibold">
          <i
            className="ri-arrow-left-line hover:text-[#6556CD]"
            onClick={() => navigate(-1)}
          ></i>{" "}
          tv<small className="ml-2 text-sm text-zinc-500">({category})</small>
        </h1>

        <div className="w-4/5 flex items-center">
          <Topnav />
          <Dropdown
            title="Category"
            options={["popular","top_rated","upcomming","now_playing"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
        </div>
      </div>
      <InfiniteScroll
        dataLength={tv.length}
        next={getTv}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Card data={tv} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};
export default Tvshows;

