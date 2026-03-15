import { useLoaderData } from "react-router";
import Banner from "./Components/Banner";
import Trending from "./Components/Trending";
import { Suspense } from "react";

function Home() {
  const apps = useLoaderData();
  console.log("Home loader data:", apps);
  return (
    <div className="min-h-screen">
      <Banner></Banner>
      <Suspense
        fallback={<span className="loading loading-ring loading-xl"></span>}
      >
        <Trending apps={apps}></Trending>
      </Suspense>
    </div>
  );
}

export default Home;
