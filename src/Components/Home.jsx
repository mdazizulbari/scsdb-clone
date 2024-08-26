import { useEffect, useState } from "react";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import axios from "../utils/axios";
import Header from "./partials/Header";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";

const Home = () => {
  document.title = "SCSDB | Homepage";
  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null)
  const [category, setCategory] = useState("all")

  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomdata =
        data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomdata);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      settrending(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  useEffect(() => {
    getTrending()
    !wallpaper && getHeaderWallpaper();
  }, [category]);

  return wallpaper && trending ?(
    <>
      <Sidenav />
      <div className="w-4/5 h-full overflow-y-auto bg-zinc-900">
        <Topnav />
        <Header data={wallpaper} />

      <div className="p-5 flex justify-between">
        <h1 className="text-3xl text-zinc-400 font-extrabold">Trending</h1>
        <Dropdown func={(e)=>setCategory(e.target.value)} title="Filter" options={["tv", "movie", "all"]} />
      </div>

        <HorizontalCards data={trending}/>
      </div>
    </>
  ) : <h1>Loading...</h1>
};
export default Home;
