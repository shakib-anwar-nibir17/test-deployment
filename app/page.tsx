"use client";
import HomeBar from "@/components/home/HomeBar";
import HomeHero from "@/components/home/HomeHero";

const Home = () => {
  console.log("Home page");
  return (
    <div className="bg-zinc-950 min-h-screen">
      <HomeBar />
      <HomeHero />
    </div>
  );
};

export default Home;
