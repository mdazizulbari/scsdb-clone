import { useEffect, useState } from "react";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import axios from "../utils/axios";
import Header from "./partials/Header";

const Home = () => {
  document.title = "SCSDB | Homepage";
  const [wallpaper, setwallpaper] = useState(null);

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
  console.log(wallpaper);
  useEffect(() => {
    !wallpaper && getHeaderWallpaper();
  }, []);

  return wallpaper ?(
    <>
      <Sidenav />
      <div className="w-4/5 h-full bg-zinc-900">
        <Topnav />
        <Header data={wallpaper} />
      </div>
    </>
  ) : <h1>Loading...</h1>
};
export default Home;
