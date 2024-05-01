"use client";
import HomeBar from "@/components/home/HomeBar";
import HomeFooter from "@/components/home/HomeFooter";
import HomeHero from "@/components/home/HomeHero";

const Home = () => {
  return (
    <div className="bg-zinc-950 min-h-screen">
      <HomeBar />
      <HomeHero />
      <HomeFooter />
    </div>
  );
};

export default Home;
