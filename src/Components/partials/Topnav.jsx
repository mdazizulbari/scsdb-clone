import axios from "../../utils/axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import imageNotFound from "../../../public/imageNotFound.avif";

const Topnav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  useEffect(() => {
    getSearches();
  }, [query]);

  return (
    <div className="w-1/2 h-[8vh] mx-auto px-5 relative flex items-center justify-between rounded-full hover:bg-[#6556CD]">
      <i className="ri-search-line text-3xl text-zinc-300 hover:text-white"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
        placeholder="Search Anything"
        className="w-3/4 p-5 mx-10 text-xl text-zinc-400 outline-none border-none bg-transparent focus:text-white"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="ri-close-line text-3xl text-zinc-300 right-0"
        ></i>
      )}

      <div className="w-full mt-5 max-h-[70vh] z-10 absolute -left-[.1%] top-full rounded-3xl bg-zinc-800 overflow-auto">
        {searches.map((search, index) => (
          <Link
          to={`/${search.media_type}/details/${search.id}`}
            key={index}
            className="w-full px-10 py-5 font-semibold flex justify-start items-center border-b-2 border-zinc-700 text-zinc-400 hover:text-white hover:bg-[#6556CD] duration-300"
          >
            <img
            className="w-[10vh] h-[10vh] mr-5 shadow-lg object-cover rounded-3xl"
              src={
                search.backdrop_path || search.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      search.backdrop_path || search.profile_path
                    }`
                  : imageNotFound
              }
              alt=""
            />
            <span className="text-2xl">
              {search.name || search.title || search.original_name || search.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Topnav;
