import "@/assets/css/style.css";
import "@/assets/css/plugins/bootstrap-grid.css";
import "@/assets/css/plugins/font-awesome.min.css";
import "@/assets/css/plugins/swiper.min.css";
import "@/assets/css/plugins/fancybox.min.css";
import "@/assets/css/style.css";
import type { Metadata } from "next";
import ScrollTo from "./_scrollTo";

export const metadata: Metadata = {
  description:
    "La Rueda Empresarial de Negocios, organizada por la Universidad Privada Domingo Savio, es el evento ideal para establecer acuerdos, intercambiar información y desarrollar nuevos negocios en la Feria Exposición de Tarija – ExpoSur 2024.",
  keywords:
    "Rueda de Negocios, ExpoSur 2024, Universidad Privada Domingo Savio, eventos empresariales, cooperación empresarial, alianzas estratégicas, tendencias de mercado, capacitación empresarial",
  authors: [{ name: "Universidad Privada Domingo Savio" }],
  publisher: "Universidad Privada Domingo Savio",
  robots: "index, follow",
  icons: ["/rdn/favicon.ico"],
  openGraph: {
    title: "Rueda de Negocios - ExpoSur 2024",
    description:
      "La Rueda Empresarial de Negocios, organizada por la Universidad Privada Domingo Savio, es el evento ideal para establecer acuerdos, intercambiar información y desarrollar nuevos negocios en la Feria Exposición de Tarija – ExpoSur 2024.",
    url: "https://www.exposur2024.com/rueda-de-negocios",
    siteName: "ExpoSur 2024",
    images: [
      {
        url: "https://www.ruedadenegociosbolivia.com/wp-content/uploads/2016/06/DSC_0097.jpg",
        width: 1200,
        height: 630,
        alt: "Rueda de Negocios - ExpoSur 2024",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rueda de Negocios - ExpoSur 2024",
    description:
      "La Rueda Empresarial de Negocios, organizada por la Universidad Privada Domingo Savio, es el evento ideal para establecer acuerdos, intercambiar información y desarrollar nuevos negocios en la Feria Exposición de Tarija – ExpoSur 2024.",
    images: [
      {
        url: "https://www.ruedadenegociosbolivia.com/wp-content/uploads/2016/06/DSC_0097.jpg",
        width: 1200,
        height: 675,
        alt: "Rueda de Negocios - ExpoSur 2024",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ScrollTo>{children}</ScrollTo>
      </body>
    </html>
  );
}
