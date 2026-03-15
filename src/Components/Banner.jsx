import { Link } from "react-router";
import playStore from "../assets/play-store.png";
import appStore from "../assets/app-store.png";
import bannerImage from "../assets/hero.png";

const Banner = () => {
  return (
    <div className="my-17.5 lg:my-35 ">
      <h1 className="text-black text-6xl font-bold text-center mb-4">
        We Build <br />
        <span className="text-accent">Productive </span>
        Apps
      </h1>
      <p className="text-center text-black px-5">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br />
        Our goal is to turn your ideas into digital experiences that truly make
        an impact.
      </p>
      <div className="flex gap-4 items-center justify-center mt-8">
        <Link className="btn btn-lg" to={""}>
          <img className="w-5" src={playStore} alt="" />
          Google Play
        </Link>
        <Link className="btn btn-lg" to={""}>
          <img className="w-5" src={appStore} alt="" /> App Store
        </Link>
      </div>
      <div className="flex justify-center">
        <img className="mt-8 px-5" src={bannerImage} alt="" />
      </div>
      <div className="bg-secondary-content p-10 md:p-20">
        <h2 className="text-5xl text-center font-semibold mb-10">
          Trusted by Millions, Built for You
        </h2>
        <div className="w-full rounded-2xl stats stats-vertical md:stats-horizontal ">
          <div className="stat text-center">
            <div className="stat-title">Total Downloads</div>
            <div className="stat-value">29.6M</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat text-center">
            <div className="stat-title">Total Reviews</div>
            <div className="stat-value">906K</div>
            <div className="stat-desc">46% more than last month</div>
          </div>

          <div className="stat text-center">
            <div className="stat-title">Active Apps</div>
            <div className="stat-value">132+</div>
            <div className="stat-desc">31 more will Launch</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
