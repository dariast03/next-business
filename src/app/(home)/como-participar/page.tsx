import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cómo Participar - Rueda de Negocios ExpoSur 2024",
  description:
    "Descubre cómo participar en la Rueda de Negocios ExpoSur 2024 organizada por la Universidad Privada Domingo Savio. Conoce los requisitos, inscripción y beneficios de participar en este evento empresarial único en Tarija.",
  keywords:
    "Cómo participar, Rueda de Negocios, ExpoSur 2024, Universidad Privada Domingo Savio, inscripción, requisitos de participación, eventos empresariales, Tarija",
  openGraph: {
    title: "Cómo Participar - Rueda de Negocios ExpoSur 2024",
    description:
      "Descubre cómo participar en la Rueda de Negocios ExpoSur 2024 organizada por la Universidad Privada Domingo Savio. Conoce los requisitos, inscripción y beneficios de participar en este evento empresarial único en Tarija.",
    url: "https://www.exposur2024.com/como-participar",
    siteName: "ExpoSur 2024",
    images: [
      {
        url: "https://www.ruedadenegociosbolivia.com/wp-content/uploads/2016/06/DSC_0097.jpg", // Imagen representativa del evento
        width: 1200,
        height: 630,
        alt: "Cómo Participar - Rueda de Negocios ExpoSur 2024",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cómo Participar - Rueda de Negocios ExpoSur 2024",
    description:
      "Descubre cómo participar en la Rueda de Negocios ExpoSur 2024 organizada por la Universidad Privada Domingo Savio. Conoce los requisitos, inscripción y beneficios de participar en este evento empresarial único en Tarija.",
    images: [
      {
        url: "https://www.ruedadenegociosbolivia.com/wp-content/uploads/2016/06/DSC_0097.jpg",
        width: 1200,
        height: 675,
        alt: "Cómo Participar - Rueda de Negocios ExpoSur 2024",
      },
    ],
  },
};

const ComoParticiparPage = () => {
  return (
    <>
      <div className="mil-inner-banner mil-p-120-90">
        <div className="mil-banner-content mil-up">
          <div className="mil-animation-frame">
            <div
              className="mil-animation mil-position-4 mil-dark mil-scale"
              data-value-1={6}
              data-value-2="1.4"
            />
          </div>
          <div className="container">
            <ul className="mil-breadcrumbs mil-mb-60">
              <li>
                <a href="home.html">Inicio</a>
              </li>

              <li>
                <a href="how-to-participate.html">Cómo Participar</a>
              </li>
            </ul>
            <h1 className="mil-mb-60">
              <span className="mil-thin"> Cómo </span> Participar
              <span className="mil-thin"> en la </span> Rueda de Negocios
            </h1>
          </div>
        </div>
      </div>

      {/* project */}
      <section className="">
        <div className="container " id="project">
          <div className="mil-image-frame mil-horizontal mil-up">
            <img
              src="https://www.ruedadenegociosbolivia.com/wp-content/uploads/2016/06/DSC_0042.jpg"
              alt="image"
            />
            <a
              data-fancybox="gallery"
              data-no-swup=""
              href="img/works/1/1.jpg"
              className="mil-zoom-btn"
            >
              <img src="img/icons/zoom.svg" alt="zoom" />
            </a>
          </div>

          <div className="">
            <div className="r mil-p-90-120">
              <div className="">
                <h3 className="mil-up mil-mb-60 mil-center">
                  Metodologia para reuniones
                </h3>
              </div>
              <div className="">
                <p className="mil-up mil-mb-30 mil-text-xl mil-dark">
                  La agenda de reuniones estará disponible el 10 de octubre (Las
                  empresas que no hayan realizado el pago, no tendrán acceso a
                  esta información hasta efectuar el mismo). Una vez tenga en
                  sus manos la agenda de reuniones, tenga el cuidado de
                  revisarla y asistir puntualmente a cada una de sus reuniones
                  presenciales y/o virtuales, para aprovechar al máximo el
                  tiempo y no perjudicar a su contraparte. Es deber de las
                  empresas asistir a todas las reuniones programadas en su
                  agenda de negocios. El no presentarse a una reunión con una
                  contraparte, demuestra poca seriedad por parte de la empresa
                  solicitada o solicitante.
                </p>
                <p className="mil-up mil-mb-30 mil-text-xl mil-dark">
                  Asista puntualmente a TODAS sus reuniones de negocios. Respete
                  los 20 minutos que se asignan a cada reunión, con esto
                  aprovechará al máximo su tiempo y NO perjudicará a los
                  participantes de la siguiente reunión. Complete el formulario
                  de evaluación de reuniones de negocios al final del evento.
                </p>
                <p className="mil-up mil-text-xl mil-dark">
                  Es deber de las empresas asistir a todas las reuniones
                  programadas en su agenda de negocios. El no presentarse a una
                  reunión con una contraparte, demuestra poca seriedad por parte
                  de la empresa solicitada o solicitante.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* project end */}
    </>
  );
};

export default ComoParticiparPage;
