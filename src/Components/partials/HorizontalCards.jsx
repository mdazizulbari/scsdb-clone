import { Link } from "react-router-dom";
import noimage from "../../../public/imageNotFound.avif";

const HorizontalCards = ({ data = [] }) => {
  return (
    <div className="w-full h-fit mb-5 p-5 pb-1 flex overflow-y-hidden overflow-x-scroll">
      {data.length > 0 ? (
        data.map((d, i) => (
          <Link
            to={d && `/${d.media_type}/details/${d.id}`}
            className="min-w-64 mr-5 rounded-3xl transition-all ease-in duration-300 hover:bg-[#6556CD]"
            key={i}
          >
            <img
              className="w-64 h-36 object-cover rounded-3xl"
              src={
                d && (d.backdrop_path || d.profile_path || d.poster_path)
                  ? `https://image.tmdb.org/t/p/original/${
                      d.backdrop_path || d.profile_path || d.poster_path
                    }`
                  : noimage
              }
            />
            <div className="p-3 text-white overflow-y-scroll">
              <h1 className="mt-1 text-xl text-center font-semibold">
                {d &&
                  (d.name || d.title || d.original_name || d.original_title)}
              </h1>
              <p className="text-sm text-center h-fit">
                {d && d.overview.slice(0, 50)}...
                <span className="text-blue-400"> more</span>
              </p>
            </div>
          </Link>
        ))
      ) : (
        <h1 className="mt-5 text-3xl text-center text-white font-black">
          Nothing to show
        </h1>
      )}
    </div>
  );
};
export default HorizontalCards;
