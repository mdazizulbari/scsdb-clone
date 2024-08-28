import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { asyncloadtv, removeTv } from "../store/actions/tvAction";
import Loading from "./Loading";
import HorizontalCards from "./partials/HorizontalCards";

const TvDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.tv);

  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => {
      dispatch(removeTv());
    };
  }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-screen h-fit px-[10%] relative"
    >
      {/* Nav part 1 Navigation*/}
      <nav className="w-full h-[10vh] text-xl text-zinc-100 flex items-center gap-10">
        <Link
          className="ri-arrow-left-line hover:text-[#6556CD]"
          onClick={() => navigate(-1)}
        ></Link>
        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
        >
          imdb
        </a>
      </nav>

      {/* Nav part 2 Poster and details */}
      <div className="w-full flex">
        <img
          className="h-[50vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />

        <div className="content ml-[5%] text-white">
          <h1 className="font-black text-5xl ">
            {info.detail.title ||
              info.detail.original_title ||
              info.detail.original_name ||
              info.detail.name}
            <small className="font-bold text-2xl text-zinc-200">
              ({info.detail.first_air_date.split("-")[0]})
            </small>
          </h1>

          <div className="my-5 mr-3 flex items-center gap-x-3">
            <span className="w-[5vh] h-[5vh] flex items-center justify-center text-xl font-semibold rounded-full bg-yellow-600">
              {(info.detail.vote_average * 10).toFixed()}
              <sup>%</sup>
            </span>
            <h1 className="font-semibold text-2xl leading-6">
              User <br /> Score
            </h1>
            <h1>{info.detail.first_air_date}</h1>
            <h1>
              {info.detail.genres.map((genres) => genres.name).join(",")}{" "}
            </h1>
            <h1>{info.detail.runtime}min</h1>
          </div>

          <h1 className="font-bold italic text-xl text-zinc-200">
            {info.detail.tagline}
          </h1>
          <h1 className="mt-5 text-xl font-semibold">Overview</h1>
          <p>{info.detail.overview}</p>
          <h1 className="mt-5 text-xl font-semibold">Tv Translated in</h1>
          <p className="mb-10">{info.translations.join(", ")}</p>

          <Link
            className="px-5 py-4 rounded-lg bg-[#6556CD]"
            to={`${pathname}/trailer`}
          >
            <i className="ri-play-fill mr-3 text-xl"></i>
            Play Trailer
          </Link>
        </div>
      </div>

      {/* Nav part 3 avaiable on platforms */}
      <div className="w-4/5 mt-10 flex flex-col gap-y-5">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="text-white flex items-center gap-x-10">
            <h1>Avaiable on Platfroms</h1>
            {info.watchproviders.flatrate.map((watchprovider, index) => (
              <img
                key={index}
                title={watchprovider.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${watchprovider.logo_path}`}
              />
            ))}
          </div>
        )}
        {info.watchproviders && info.watchproviders.rent && (
          <div className="text-white flex items-center gap-x-10">
            <h1>Avaiable on Rent</h1>
            {info.watchproviders.rent.map((watchprovider, index) => (
              <img
                key={index}
                title={watchprovider.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${watchprovider.logo_path}`}
              />
            ))}
          </div>
        )}
        {info.watchproviders && info.watchproviders.buy && (
          <div className="text-white flex items-center gap-x-10">
            <h1>Avaiable to Buy</h1>
            {info.watchproviders.buy.map((watchprovider) => (
              <img
                title={watchprovider.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${watchprovider.logo_path}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Nav part 4 Seasons */}
      <h1 className="mt-5 text-3xl text-white font-semibold">Seasons</h1>
      <div className="w-full mb-5 p-5 flex overflow-y-hidden">
        {info.detail.seasons.length > 0 ? (
          info.detail.seasons.map((seasons, index) => (
            <div className="w-[15vh] mr-[8%]" key={index}>
              <img
                className="min-w-[14vw] h-[30vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover"
                src={`https://image.tmdb.org/t/p/original/${seasons.poster_path}`}
              />
              <h1 className="mt-3 font-semibold text-2xl text-zinc-300">
                {seasons.name}
              </h1>
            </div>
          ))
        ) : (
          <h1 className="mt-5 text-3xl text-center text-white font-black">
            Nothing to show
          </h1>
        )}
      </div>

      {/* Nav part 5 Recommendations and similar stuff */}
      <h1 className="mt-5 text-3xl text-white font-semibold">
        Recommendations
      </h1>
      <HorizontalCards
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};
export default TvDetails;
