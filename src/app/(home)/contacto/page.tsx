import ExternalLink from "@/components/ui/external-link";
import Link from "next/link";
import React from "react";

const ContactPage = () => {
  return (
    <>
      {/* banner */}
      {/* banner */}
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
        className="row row-cols-2  w-full justify-content-center  mil-p-0-120"
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
          <p className="mil-p-0-30">
            Contáctanos a través de los siguientes canales:
          </p>

          <div className="row g-2">
            <div className="bg-light hvr-shutter-out-horizontal d-block p-3">
              <div className="d-flex justify-content-start">
                <i className="fa-solid fa-phone h3 pe-2" />
                <span className="h5">Teléfono</span>
              </div>
              <span>(+591) 69302080</span>
            </div>

            <div className="bg-light hvr-shutter-out-horizontal d-block p-3">
              <div className="d-flex justify-content-start">
                <i className="fa-solid fa-map-marker-alt h3 pe-2" />
                <span className="h5">Dirección</span>
              </div>
              <span>Barrio Germán Bush, Av. Los Sauces esq. Fabián Ruiz</span>
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
        className="row row-cols-2  w-full justify-content-center  mil-p-0-120"
        style={{
          maxWidth: "1600px",
          margin: "auto",
        }}
      >
        <div className="contact-info">
          <h4 className="mil-center mil-mb-15">Punto de Información #2</h4>
          <p className="mil-p-0-30">
            Contáctanos a través de los siguientes canales:
          </p>

          <div className="row g-2">
            <div className="bg-light hvr-shutter-out-horizontal d-block p-3">
              <div className="d-flex justify-content-start">
                <i className="fa-solid fa-phone h3 pe-2" />
                <span className="h5">Teléfono</span>
              </div>
              <span>(+591) 12345678</span>
            </div>

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
