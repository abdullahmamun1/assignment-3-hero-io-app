import { useLoaderData } from "react-router";
import Banner from "./Components/Banner";
import Trending from "./Components/Trending";

function Home() {
  const apps = useLoaderData();
  return (
    <div className="min-h-screen">
      <Banner></Banner>
      <Trending apps={apps}></Trending>
    </div>
  );
}

export default Home;
