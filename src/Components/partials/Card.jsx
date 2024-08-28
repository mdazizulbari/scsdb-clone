import { Link } from "react-router-dom";

const Card = ({ data, title }) => {
  console.log(data);
  return (
    <div className="w-full h-full px-[3%] flex flex-wrap bg-[#1F1E24]">
      {data.map((card, index) => {
        return (
          <Link
            to={`/${title}/details/${card.id}`}
            className="w-[25vh] mr-[5%] mb-[5%] relative"
            key={index}
          >
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
