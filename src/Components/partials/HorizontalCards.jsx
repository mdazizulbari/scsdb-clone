import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const HorizontalCards = ({ data }) => {
  return (
    <div className="w-full mb-5 p-5 flex overflow-y-hidden">
      {data.map((d, i) => (
        <Link to={`/${d.media_type}/details/${d.id}`} className="min-w-[15%] mr-5 overflow-x-scroll'" key={i}>
          <img
            className="w-full h-3/5 object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              d.backdrop_path || d.profile_path || d.poster_path
            }`}
            alt=""
          />
          <div className="h-2/5 p-3 text-white">
            <h1 className="mt-1 text-xl font-semibold">
              {d.name || d.title || d.original_name || d.original_title}
            </h1>
            <p className="text-sm">
              {d.overview.slice(0, 50)}...
              <span className="text-zinc-500"> more</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default HorizontalCards;
