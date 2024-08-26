import { useEffect, useState } from "react";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import axios from "../utils/axios";
import Header from "./partials/Header";
import HorizontalCards from "./partials/HorizontalCards";

const Home = () => {
  document.title = "SCSDB | Homepage";
  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null)

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
      const { data } = await axios.get(`/trending/all/day`);
      settrending(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  console.log(trending);
  useEffect(() => {
    !wallpaper && getHeaderWallpaper();
    !trending && getTrending()
  }, []);

  return wallpaper && trending ?(
    <>
      <Sidenav />
      <div className="w-4/5 h-full overflow-y-auto bg-zinc-900">
        <Topnav />
        <Header data={wallpaper} />
        <HorizontalCards data={trending}/>
      </div>
    </>
  ) : <h1>Loading...</h1>
};
export default Home;
