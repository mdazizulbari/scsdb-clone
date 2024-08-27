import loader from "../../public/loader.webp";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <img src={loader} className=" object-cover" alt="" />
    </div>
  );
};
export default Loading;
