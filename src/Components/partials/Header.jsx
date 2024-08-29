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
      className="w-full h-[50vh] p-[5%] flex flex-col justify-end items-start"
    >
      <h1 className="w-3/4 text-5xl text-white font-black">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className="w-3/4 my-3 text-white">
        {data.overview.slice(0, 200)}...
        <Link className="text-blue-400"> more</Link>
      </p>
      <p className="text-white">
        <i className="ri-megaphone-fill text-yellow-500"></i>{" "}
        {data.release_date || "No information"}
        <i className="ri-megaphone-fill text-yellow-500 ml-2"></i>{" "}
        {data.media_type.toUpperCase()}
      </p>
      <Link
        to={`/${data.media_type}/details/${data.id}/trailer`}
        className="px-4 py-2 my-2 text-white rounded bg-[#6556CD]"
      >
        Watch Trailler
      </Link>
    </div>
  );
};
export default Header;
