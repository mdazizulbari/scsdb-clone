import loader from "../../public/404.gif";

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <img src={loader} className=" object-cover" alt="" />
    </div>
  );
};
export default NotFound;
