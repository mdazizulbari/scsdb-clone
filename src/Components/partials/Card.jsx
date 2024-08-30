import { Link } from "react-router-dom";
import noimage from "../../../public/imageNotFound.avif";

const Card = ({ data, title }) => {
  return (
    <div className="w-full h-full flex justify-center flex-wrap bg-[#1F1E24]">
      {data.map((card, index) => {
        return (
          <Link
            to={`/${title || card.media_type}/details/${card.id}`}
            className="w-[25vh] mr-8 mb-10 relative rounded-3xl hover:bg-[#6556CD]"
            key={index}
          >
            <img
              className="h-[40vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover rounded-3xl"
              src={
                card.poster_path || card.backdrop_path ||  card.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      card.poster_path ||
                      card.profile_path ||
                      card.backdrop_path 
                    }`
                  : noimage
              }
            />
            <h1 className="mt-3 font-semibold text-2xl text-center text-zinc-300">
              {card.name ||
                card.title ||
                card.original_name ||
                card.original_title}
            </h1>
            {card.vote_average && (
              <div className="w-[5vh] h-[5vh] flex items-center justify-center text-xl text-white font-semibold absolute right-[-10%] bottom-[25%] rounded-full bg-yellow-600">
                {(card.vote_average * 10).toFixed()}
                <sup>%</sup>
              </div>
            )}
          </Link>
        );
      })}
    </div>
  );
};
export default Card;
