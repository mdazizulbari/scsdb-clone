import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-1/5 h-full p-10 border-r-2 border-zinc-400">
      <h1 className="text-2xl text-white font-bold">
        <i className="ri-tv-fill mr-2 text-[#6556CD]"></i>
        <span className="text-2xl">SCSDB.</span>
      </h1>

      <nav className="text-xl text-zinc-400 flex flex-col gap-3">
        <h1 className="mt-10 mb-5 text-xl text-white font-semibold">
          New Feed
        </h1>
        <Link to="/trending" className="p-5 rounded-lg hover:bg-[#6556CD] hover:text-white duration-300">
          <i className="mr-2 ri-fire-fill"></i>
          Trending
        </Link>
        <Link className="p-5 rounded-lg hover:bg-[#6556CD] hover:text-white duration-300">
          <i className="mr-2 ri-bard-fill"></i>
          Popular
        </Link>
        <Link className="p-5 rounded-lg hover:bg-[#6556CD] hover:text-white duration-300">
          <i className="mr-2 ri-movie-2-fill"></i>
          Movies
        </Link>
        <Link className="p-5 rounded-lg hover:bg-[#6556CD] hover:text-white duration-300">
          <i className="mr-2 ri-tv-2-fill"></i>
          Tv Shows
        </Link>
        <Link className="p-5 rounded-lg hover:bg-[#6556CD] hover:text-white duration-300">
          <i className="mr-2 ri-team-fill"></i>
          People
        </Link>
      </nav>

      <hr className="h-0.5 border-none bg-zinc-400" />
      <nav className="text-xl text-zinc-400 flex flex-col gap-3">
        <h1 className="mt-10 mb-5 text-xl text-white font-semibold">
          Website Information
        </h1>
        <Link className="p-5 rounded-lg hover:bg-[#6556CD] hover:text-white duration-300">
          <i className="mr-2 ri-information-fill"></i>
          About
        </Link>
        <Link className="p-5 rounded-lg hover:bg-[#6556CD] hover:text-white duration-300">
          <i className="mr-2 ri-phone-fill"></i>
          Contact
        </Link>
      </nav>
    </div>
  );
};
export default Sidenav;
