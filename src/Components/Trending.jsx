import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import { useEffect, useState } from "react";
import axios from "../utils/axios";
import Card from "./partials/Card";
import Loading from "./partials/Loading";

const Trending = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState(null);

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}`);
      settrending(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  useEffect(() => {
    getTrending();
  }, [category, duration]);

  return trending ? (
    <div className="w-screen h-screen px-[3%] overflow-hidden overflow-y-auto">
      <div className="w-full flex items-center justify-between">
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
      <Card data={trending} title={category} />
    </div>
  ) : (
    <Loading />
  );
};
export default Trending;
