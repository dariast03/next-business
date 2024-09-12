import About from "@/components/sections/about";
import Banner from "@/components/sections/banner";
import Business from "@/components/sections/business";
import HiddenElements from "@/components/sections/hidden-elements";
import Partners from "@/components/sections/partners";
import Prices from "@/components/sections/prices";
import Services from "@/components/sections/services";
import Teams from "@/components/sections/teams";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ExpoSur 2024 - Feria Internacional de Tarija",
  description:
    "Bienvenido a ExpoSur 2024, la Feria Internacional de Tarija, donde se reúnen empresas, emprendedores y visitantes para explorar oportunidades de negocio, innovación y cultura en el corazón de Bolivia.",
  keywords:
    "ExpoSur 2024, Feria Internacional de Tarija, eventos en Bolivia, oportunidades de negocio, networking, innovación, cultura, turismo en Tarija",
  openGraph: {
    title: "ExpoSur 2024 - Feria Internacional de Tarija",
    description:
      "Bienvenido a ExpoSur 2024, la Feria Internacional de Tarija, donde se reúnen empresas, emprendedores y visitantes para explorar oportunidades de negocio, innovación y cultura en el corazón de Bolivia.",
    url: "https://www.exposur2024.com/",
    siteName: "ExpoSur 2024",
    images: [
      {
        url: "https://www.ruedadenegociosbolivia.com/wp-content/uploads/2016/06/DSC_0097.jpg",
        width: 1200,
        height: 630,
        alt: "ExpoSur 2024 - Feria Internacional de Tarija",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ExpoSur 2024 - Feria Internacional de Tarija",
    description:
      "Bienvenido a ExpoSur 2024, la Feria Internacional de Tarija, donde se reúnen empresas, emprendedores y visitantes para explorar oportunidades de negocio, innovación y cultura en el corazón de Bolivia.",
    images: [
      {
        url: "https://www.ruedadenegociosbolivia.com/wp-content/uploads/2016/06/DSC_0097.jpg", // Imagen representativa de la ExpoSur 2024
        width: 1200,
        height: 675,
        alt: "ExpoSur 2024 - Feria Internacional de Tarija",
      },
    ],
  },
};

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
