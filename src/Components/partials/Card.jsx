import { Link } from "react-router-dom";

const Card = ({ data, title }) => {
  return (
    <div className="w-full flex flex-wrap">
      {data.map((card, index) => {
        return (
          <Link className="w-[25vh] mr-[5%] mb-[5%]" key={index}>
            <img
              className="h-[40vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover"
              src={`https://image.tmdb.org/t/p/original/${
                card.backdrop_path || card.profile_path || card.poster_path
              }`}
              alt=""
            />
            <h1 className="mt-3 font-semibold text-2xl text-zinc-300">
              {card.name ||
                card.title ||
                card.original_name ||
                card.original_title}
            </h1>
          </Link>
        );
      })}
    </div>
  );
};
export default Card;
