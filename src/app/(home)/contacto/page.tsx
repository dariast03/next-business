import ExternalLink from "@/components/ui/external-link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto - Rueda de Negocios ExpoSur 2024",
  description:
    "Póngase en contacto con nosotros para más información sobre la Rueda de Negocios ExpoSur 2024 organizada por la Universidad Privada Domingo Savio. Estamos aquí para ayudarle.",
  keywords:
    "contacto, Rueda de Negocios, ExpoSur 2024, Universidad Privada Domingo Savio, información de contacto, ayuda, soporte",
  openGraph: {
    title: "Contacto - Rueda de Negocios ExpoSur 2024",
    description:
      "Póngase en contacto con nosotros para más información sobre la Rueda de Negocios ExpoSur 2024 organizada por la Universidad Privada Domingo Savio.",
    url: "https://www.exposur2024.com/contacto",
    siteName: "ExpoSur 2024",
    images: [
      {
        url: "https://www.ruedadenegociosbolivia.com/wp-content/uploads/2016/06/DSC_0097.jpg",
        width: 1200,
        height: 630,
        alt: "Contacto - Rueda de Negocios ExpoSur 2024",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto - Rueda de Negocios ExpoSur 2024",
    description:
      "Póngase en contacto con nosotros para más información sobre la Rueda de Negocios ExpoSur 2024 organizada por la Universidad Privada Domingo Savio.",
    images: [
      {
        url: "https://www.ruedadenegociosbolivia.com/wp-content/uploads/2016/06/DSC_0097.jpg",
        width: 1200,
        height: 675,
        alt: "Contacto - Rueda de Negocios ExpoSur 2024",
      },
    ],
  },
};

const ContactPage = () => {
  return (
    <>
      <div className="mil-inner-banner mil-p-120-120">
        <div className="mil-banner-content mil-center mil-up">
          <div className="container">
            <ul className="mil-breadcrumbs mil-center mil-mb-60">
              <li>
                <a href="home.html">Inicio</a>
              </li>
              <li>
                <a href="contact.html">Contacto</a>
              </li>
            </ul>
            <h1 className="mil-mb-60">Información de Contacto</h1>
          </div>
        </div>
      </div>
      {/* banner end */}

      <div
        className="row row-cols-lg-2  w-full justify-content-center  contacto-block "
        style={{
          maxWidth: "1600px",
          margin: "auto",
        }}
      >
        <div className="mil-map-frame mil-up">
          <div className="mil-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.249681569067!2d-64.74439612550165!3d-21.537090280242495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x940647dfb7a7d803%3A0x9c955b696d54271a!2sUniversidad%20Privada%20Domingo%20Savio!5e0!3m2!1ses-419!2sbo!4v1725919970627!5m2!1ses-419!2sbo"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="contact-info">
          <h4 className="mil-center mil-mb-15">Punto de Información #1</h4>
          <p className="mil-p-0-30 mil-text-xl">
            Universidad Privada Domingo Savio Tarija-Bolivia
          </p>

          <div className="row g-2">
            <ExternalLink
              className="bg-light hvr-shutter-out-horizontal d-block p-3"
              href="tel:59169302080"
            >
              <div className="d-flex justify-content-start align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  style={{
                    marginRight: 8,
                  }}
                  viewBox="0 0 16 16"
                >
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                </svg>
                <span className="h5">Teléfono</span>
              </div>
              <span>+59169302080</span>
            </ExternalLink>

            <ExternalLink
              href="mailto:infoupds.tarija@upds.edu.bo"
              className="bg-light hvr-shutter-out-horizontal d-block p-3"
            >
              <div className="d-flex justify-content-start align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  style={{
                    marginRight: 8,
                  }}
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
                <span className="h5">Email</span>
              </div>
              <span>infoupds.tarija@upds.edu.bo</span>
            </ExternalLink>

            <div className="bg-light hvr-shutter-out-horizontal d-block p-3">
              <div className="d-flex justify-content-start align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  style={{
                    marginRight: 8,
                  }}
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
                <span className="h5">Dirección</span>
              </div>
              <span>
                B/ German Busch esquina Fabián Ruiz , Ciudad Tarija, Bolivia
              </span>
            </div>

            <ExternalLink
              style={{
                marginTop: 40,
              }}
              className="mil-center"
              href="https://api.whatsapp.com/send?phone=59169302080&text=%C2%A1Hola%21+%C2%BFC%C3%B3mo+podemos+ayudarte%3F"
            >
              <img
                src="https://th.bing.com/th/id/OIP.k61bPIFS4ui8yegsnCKuYAHaCd?w=604&h=201&rs=1&pid=ImgDetMain"
                alt=""
                style={{
                  width: 200,
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </ExternalLink>
          </div>
        </div>
      </div>

      <div
        className="row row-cols-lg-2 w-full justify-content-center  mil-p-0-120 contacto-block contacto-reverse"
        style={{
          maxWidth: "1600px",
          margin: "auto",
        }}
      >
        <div className="contact-info">
          <h4 className="mil-center mil-mb-15">Punto de Información #2</h4>
          <p className="mil-p-0-30 mil-text-xl">Oficinas Exposur</p>

          <div className="row g-2">
            {/*    <div className="bg-light hvr-shutter-out-horizontal d-block p-3">
              <div className="d-flex justify-content-start">
                <i className="fa-solid fa-phone h3 pe-2" />
                <span className="h5">Teléfono</span>
              </div>
              <span>(+591) 12345678</span>
            </div> */}

            <div className="bg-light hvr-shutter-out-horizontal d-block p-3">
              <div className="d-flex justify-content-start">
                <i className="fa-solid fa-map-marker-alt h3 pe-2" />
                <span className="h5">Dirección</span>
              </div>
              <span> Plaza Luis de Fuentes esq. 1 (Oficinas Exposur)</span>
            </div>
          </div>
        </div>

        <div className="mil-map-frame mil-up  mil-p-120-120">
          <div className="mil-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463.9147421514845!2d-64.73437525799496!3d-21.534420071297482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9406476a25657e35%3A0xc732557e8642d4bd!2sOficina%20Departamental%20de%20Turismo!5e0!3m2!1ses-419!2sbo!4v1725920423593!5m2!1ses-419!2sbo"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* map */}

      {/* map end */}
    </>
  );
};

export default ContactPage;
