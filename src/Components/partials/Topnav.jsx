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
    <div className="w-3/4 h-[10vh] mx-auto relative flex items-center">
      <i className="ri-search-line text-3xl text-zinc-400"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
        placeholder="Search Anything"
        className="w-1/2 p-5 mx-10 text-xl text-zinc-400 outline-none border-none bg-transparent"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="ri-close-line text-3xl text-zinc-400 right-0"
        ></i>
      )}

      <div className="w-1/2 max-h-[50vh] z-10 absolute top-full left-[5%] bg-zinc-200 overflow-auto">
        {searches.map((search, index) => (
          <Link
          to={`/${search.media_type}/details/${search.id}`}
            key={index}
            className="w-full p-10 font-semibold flex justify-start items-center border-b-2 border-zinc-100 hover:text-black hover:bg-zinc-300 duration-300"
          >
            <img
            className="w-[10vh] h-[10vh] mr-5 shadow-lg object-cover"
              src={
                search.backdrop_path || search.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      search.backdrop_path || search.profile_path
                    }`
                  : imageNotFound
              }
              alt=""
            />
            <span>
              {search.name || search.title || search.original_name || search.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Topnav;
