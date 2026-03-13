import Packages from "@/components/Packages";
import BrightsMindSec from "../components/BrightsMindSec";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import ServicesSec from "../components/ServicesSec";
import ReviewSec from "@/components/ReviewSec";
import DiscussSec from "@/components/DiscussSec";
import FormSec from "@/components/FormSec";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BrightsMindSec />
      <Portfolio />
      <ServicesSec />
      <Packages />  
      <ReviewSec />
      <DiscussSec />
      <FormSec />
    </>
  );
}
