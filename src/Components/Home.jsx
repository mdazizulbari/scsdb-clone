import Sidenav from "./partials/Sidenav";

const Home = () => {
  document.title = "SCSDB | Homepage";
  return (
    <>
      <Sidenav />
      <div className="w-4/5 h-full bg-zinc-300"></div>
    </>
  );
};
export default Home;
