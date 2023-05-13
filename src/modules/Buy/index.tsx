import React from "react";
import AboutShowcase from "@/components/sections/MainShowcase";
import Adds from "@/components/Adds";
import AboutSection from "@/components/sections/AboutSection";
import hero from "../../../public/media/hero3.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import MainFilter from "@/components/MainFilter/mainFilter";
import FilterSection from "@/components/sections/FilterSection";
function BuyPage() {
  return (
    <div>
      <AboutShowcase
        image={hero.src}
        p="
        We have a wide range of competitively priced used cars for sale that are available to buy or finance. In fact, you could save an average of over £600* when you buy a car at Cazoo. Choose delivery to your door or collection from a Cazoo Customer Centre near you."
      >
        Used cars for sale or on finance
      </AboutShowcase>
      <FilterSection />

      {/* <AboutSection /> */}
      <Adds style={{ padding: "150px 7%" }} />
    </div>
  );
}

export default BuyPage;
