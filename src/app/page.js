import Packages from "@/components/Packages";
import BrightsMindSec from "../components/BrightsMindSec";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import ServicesSec from "../components/ServicesSec";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BrightsMindSec />
      <Portfolio />
      <ServicesSec />
      <Packages />  
    </>
  );
}
