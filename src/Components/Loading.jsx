import loader from "../../public/loader.webp";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <img src={loader} className=" object-cover" alt="" />
      <h1 className="text-5xl text-white font-bold leading-relaxed">Wait some <br /> seconds Please <br /> Your page is <br /> Loading...</h1>
    </div>
  );
};
export default Loading;
