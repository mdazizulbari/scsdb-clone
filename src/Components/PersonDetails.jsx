import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { asyncloadperson, removePerson } from "../store/actions/personAction";
import Loading from "./Loading";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";

const PersonDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.person);
  const [category, setCategory] = useState("movie");

  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removePerson());
    };
  }, [id]);
  return info ? (
    <div className="w-full h-fit px-12 pb-10 flex flex-col bg-[#1F1E24]">
      {/* Nav part 1 Navigation*/}
      <nav className="w-full h-[10vh] text-xl text-zinc-100 flex items-center gap-10">
        <Link
          className="ri-arrow-left-line hover:text-[#6556CD]"
          onClick={() => navigate(-1)}
        ></Link>
      </nav>

      <div className="w-full flex">
        {/* Nav part 2 Poster and details */}
        <div className="w-1/5">
          <img
            className="h-[35vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover rounded-3xl"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
          />
          <hr className="h-0.5 mt-10 mb-5 border-none bg-zinc-500" />

          {/* social links */}
          <div className="text-2xl text-white flex gap-x-5">
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
            >
              <i className="ri-earth-fill transition-all ease-in  hover:text-[#6556CD]"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.facebook.com/${info.externalid.facebook_id}`}
            >
              <i className="ri-facebook-circle-fill transition-all ease-in  hover:text-[#6556CD]"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
            >
              <i className="ri-instagram-fill transition-all ease-in  hover:text-[#6556CD]"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.twitter.com/${info.externalid.twitter_id}`}
            >
              <i className="ri-twitter-x-fill transition-all ease-in hover:text-[#6556CD]"></i>
            </a>
          </div>

          {/* personal information */}
          <h1 className="my-5 text-2xl text-zinc-400 font-semibold">
            Person Info
          </h1>
          <h1 className="text-xl text-zinc-400 font-semibold">Known For</h1>
          <h1 className="text-zinc-400">{info.detail.known_for_department}</h1>
          <h1 className="mt-3 text-xl text-zinc-400 font-semibold">Gender</h1>
          <h1 className="text-zinc-400">
            {info.detail.gender === 2 ? "Male" : "Female"}
          </h1>
          <h1 className="mt-3 text-xl text-zinc-400 font-semibold">Birthday</h1>
          <h1 className="text-zinc-400">{info.detail.birthday}</h1>
          <h1 className="mt-3 text-xl text-zinc-400 font-semibold">Deathday</h1>
          <h1 className="text-zinc-400">
            {info.detail.deathhday ? info.detail.deathhday : "Still Alive"}
          </h1>
          <h1 className="mt-3 text-xl text-zinc-400 font-semibold">
            Place Of Birth
          </h1>
          <h1 className="text-zinc-400">{info.detail.place_of_birth}</h1>
          <h1 className="mt-3 text-xl text-zinc-400 font-semibold">
            Also Known As
          </h1>
          <h1 className="text-zinc-400">
            {info.detail.also_known_as.join(", ")}
          </h1>
        </div>

        {/* Nav part 3 right details and information */}
        <div className="w-4/5 ml-[5%]">
          <h1 className="my-5 text-6xl text-zinc-400 font-black">
            {info.detail.name}
          </h1>
          <h1 className="text-xl text-zinc-400 font-semibold">Biography</h1>
          <p className="mt-3 text-zinc-400">{info.detail.biography}</p>
          <h1 className="text-zinc-400">{info.detail.known_for_department}</h1>
          <h1 className="mt-5 text-lg text-zinc-400 font-semibold">
            Known For
          </h1>
          <HorizontalCards data={info.combinedCredits.cast} />

          <div className="w-full flex justify-between">
            <h1 className="mt-5 text-lg text-zinc-400 font-semibold">Acting</h1>
            <Dropdown
              title="category"
              options={["tv", "movie"]}
              func={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="list-disc w-full h-[50vh] mt-5 p-5 overflow-x-hidden overflow-y-auto text-zinc-400 shadow-xl shadow-[rgba(255,255,255,.3)] border-2 border-zinc-700">
            {info[category + "Credits"].cast.map((c, index) => (
              <li key={index} className="p-5 rounded cursor-pointer duration-300 hover:text-white hover:bg-[#19191d]">
                <Link
                  to={`/${category}/details/${c.id}`}
                  className="text-lg font-semibold"
                >
                  <span>
                    {" "}
                    {c.name || c.original_name || c.title || c.original_title}
                  </span>
                  <span className="block">{c.character && `Character Name: ${c.character}`}</span>
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};
export default PersonDetails;
