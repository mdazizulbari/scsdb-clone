const HorizontalCards = ({ data }) => {
  return (
    <div className="w-full p-5">
      <div className="mb-5">
        <h1 className="text-3xl text-zinc-400 font-extrabold">Trending</h1>
      </div>

      <div className="w-full flex overflow-y-hidden">
        {data.map((d, i) => (
          <div className="min-w-[15%] mr-5 overflow-x-scroll'" key={i}>
            <img
              className="w-full h-3/5 object-cover"
              src={`https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.profile_path || d.poster_path
              }`}
              alt=""
            />
            <div className="h   -2/5 p-3 text-white">
              <h1 className="mt-1 text-xl font-semibold">
                {d.name || d.title || d.original_name || d.original_title}
              </h1>
              <p className="text-sm">
                {d.overview.slice(0, 50)}...
                <span className="text-zinc-500"> more</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HorizontalCards;
