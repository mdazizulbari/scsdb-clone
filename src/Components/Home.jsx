import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";

const Home = () => {
  document.title = "SCSDB | Homepage";
  return (
    <>
      <Sidenav />
      <div className="w-4/5 h-full bg-zinc-900">
        <Topnav />
      </div>
    </>
  );
};
export default Home;
