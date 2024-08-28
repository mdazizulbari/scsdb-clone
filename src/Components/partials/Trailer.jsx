import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound from "../NotFound";

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);
  console.log(ytvideo);

  return (
    <div className="w-screen h-screen flex items-center justify-center absolute top-0 left-0 z-10 bg-[rgba(0,0,0,.8)]">
      <Link
        className="ri-close-fill text-3xl text-white absolute top-[5%] right-[3%] hover:text-[#6556CD]"
        onClick={() => navigate(-1)}
      ></Link>
      {ytvideo ? (
        <ReactPlayer
          height={800}
          width={1500}
          url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
        />
      ) : (
        <NotFound />
      )}
    </div>
  );
};
export default Trailer;
