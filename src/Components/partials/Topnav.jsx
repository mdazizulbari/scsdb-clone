import { useState } from "react";
import { Link } from "react-router-dom";

const Topnav = () => {
  const [query, setQuery] = useState("");
  console.log(query);

  return (
    <div className="w-full h-[10vh] ml-[15%] relative flex items-center justify-start">
      <i className="ri-search-line text-3xl text-zinc-400"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
        placeholder="Search Anything"
        className="w-1/2 p-5 mx-10 text-xl text-zinc-400 outline-none border-none bg-transparent"
      />
      {query.length > 0 && (
        <i onClick={()=> setQuery("")} className="ri-close-line text-3xl text-zinc-400"></i>
      )}

      <div className="w-1/2 max-h-[50vh] absolute top-[90%] bg-zinc-200 overflow-auto">
        {/* <Link className="w-full p-10 font-semibold flex justify-start items-center border-b-2 border-zinc-100 hover:text-black hover:bg-zinc-300 duration-300">
          <img src="" alt="" />
          <span>Hello</span>
        </Link> */}
      </div>
    </div>
  );
};
export default Topnav;
