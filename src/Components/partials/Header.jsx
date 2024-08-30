import { Link } from "react-router-dom";

const Header = ({ data = [] }) => {
  return (
    <div
      style={{
        background:
          data.backdrop_path || data.profile_path
            ? `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${
                data.backdrop_path || data.profile_path
              })`
            : "none",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-full h-[50vh] p-[5%] flex flex-col justify-end items-start rounded-3xl"
    >
      <h1 className="w-3/4 text-5xl text-white font-black drop-shadow-xl">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className="w-3/4 my-3 text-white drop-shadow-xl">
        {data.overview.slice(0, 200) || <h1>Please Refreash the page</h1>}...
        <Link className="text-blue-400 drop-shadow-xl hover:font-bold"> more</Link>
      </p>
      <div className="flex items-center gap-5">
      <p className="text-white">
        <i className="ri-megaphone-fill text-yellow-500 drop-shadow-xl"></i>{" "}
        {data.release_date || "No information"}
        <i className="ri-megaphone-fill text-yellow-500 ml-2 drop-shadow-xl"></i>{" "}
        {data.media_type.toUpperCase()}
      </p>
      <Link
        to={`/${data.media_type}/details/${data.id}/trailer`}
        className="px-4 py-2 my-2 text-white rounded-full transition-all ease-in  bg-[#6556CD] hover:bg-[#493ba5]"
      >
        Watch Trailler
      </Link></div>
    </div>
  );
};
export default Header;
