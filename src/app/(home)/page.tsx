import Header from "@/components/layout/header/header";
import Menu from "@/components/layout/menu/menu";
import About from "@/components/sections/about";
import Banner from "@/components/sections/banner";
import Blog from "@/components/sections/blog";
import Business from "@/components/sections/business";
import Footer from "@/components/sections/footer";
import HiddenElements from "@/components/sections/hidden-elements";
import Partners from "@/components/sections/partners";
import Prices from "@/components/sections/prices";
import Services from "@/components/sections/services";
import Teams from "@/components/sections/teams";
import CONSTANTS from "@/data/CONSTANTS";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* banner */}
      <Banner />
      {/* banner end */}

      {/* about */}
      <About />
      {/* about end */}

      {/* empresas asociadas */}
      <Business />
      {/* empresas asociadas end */}

      {/* partners */}
      <Partners />
      {/* partners end */}

      {/* services */}
      <Services />
      {/* services end */}

      {/* prices */}
      <Prices />
      {/* prices end */}

      {/* team */}
      <Teams />
      {/* team end */}

      {/* blog */}
      {/* <Blog /> */}
      {/* blog end */}

      {/* hidden elements */}
      <HiddenElements />
      {/* hidden elements end */}
    </>
  );
}
