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
  title: "Rueda Empresaria de Negocios 2024",
  description:
    "La Rueda Empresaria de Negocios 2024, organizada por la Universidad Privada Domingo Savio, ofrece una excelente oportunidad para ofertar y demandar productos y servicios, establecer acuerdos de cooperación y alianzas estratégicas, y explorar nuevas oportunidades de negocio en el marco de la Feria Internacional de Tarija.",
  keywords:
    "Rueda Empresaria de Negocios 2024, Universidad Privada Domingo Savio, Feria Internacional de Tarija, oportunidades de negocio, acuerdos de cooperación, alianzas estratégicas, capacitación, tendencias de mercado, innovación, networking",
  openGraph: {
    title: "Rueda Empresaria de Negocios 2024",
    description:
      "La Rueda Empresaria de Negocios 2024, organizada por la Universidad Privada Domingo Savio, ofrece una excelente oportunidad para ofertar y demandar productos y servicios, establecer acuerdos de cooperación y alianzas estratégicas, y explorar nuevas oportunidades de negocio en el marco de la Feria Internacional de Tarija.",
    url: "https://tarija.upds.edu.bo/rdn",
    siteName: "Rueda Empresaria de Negocios 2024",
    images: [
      {
        url: "https://tarija.upds.edu.bo/rdn/img/galeria/3.jpg",
        width: 1200,
        height: 630,
        alt: "Rueda Empresaria de Negocios 2024",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Rueda Empresaria de Negocios 2024 - Universidad Privada Domingo Savio",
    description:
      "La Rueda Empresaria de Negocios 2024, organizada por la Universidad Privada Domingo Savio, ofrece una excelente oportunidad para ofertar y demandar productos y servicios, establecer acuerdos de cooperación y alianzas estratégicas, y explorar nuevas oportunidades de negocio en el marco de la Feria Internacional de Tarija.",
    images: [
      {
        url: "https://tarija.upds.edu.bo/rdn/img/galeria/3.jpg", // Imagen representativa del evento
        width: 1200,
        height: 675,
        alt: "Rueda Empresaria de Negocios 2024 - Universidad Privada Domingo Savio",
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
      {/* <Business /> */}
      {/* empresas asociadas end */}

      {/* partners */}
      {/*       <Partners /> */}
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
