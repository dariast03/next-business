import React from "react";

const Services = () => {
  return (
    <section className="mil-dark-bg" id="requisitos">
      <div className="mi-invert-fix">
        <div className="mil-animation-frame">
          <div
            className="mil-animation mil-position-1 mil-scale"
            data-value-1="2.4"
            data-value-2="1.4"
            style={{ top: 300, right: "-100px" }}
          />
          <div
            className="mil-animation mil-position-2 mil-scale"
            data-value-1={2}
            data-value-2={1}
            style={{ left: 150 }}
          />
        </div>
        <div className="container mil-p-120-0">
          <div className="mil-mb-120">
            <div className="row">
              <div className="col-lg-10">
                <span className="mil-suptitle mil-light-soft mil-suptitle-right mil-up">
                  Cumple con los Requisitos <br /> para Inscribirte en la Rueda
                  de Negocios.
                </span>
              </div>
            </div>
            <div className="mil-complex-text justify-content-center mil-up mil-mb-15">
              <span className="mil-text-image">
                <img
                  src="https://www.captio.net/hubfs/blog-files/eventos.jpg"
                  alt="evento"
                />
              </span>
              <h2 className="mil-h1 mil-muted mil-center">
                Requisitos <span className="mil-thin"> de </span> Inscripción
              </h2>
            </div>
            <div className="mil-complex-text justify-content-center mil-up">
              <h2 className="mil-h1 mil-muted mil-center">
                <span className="mil-thin"> Para Tu </span>Participación.
              </h2>
              {/*  <a
                href="requisitos.html"
                className="mil-services-button mil-button mil-arrow-place"
              >
                <span>Descubre más</span>
              </a> */}
            </div>
          </div>
          <div className="row mil-services-grid m-0">
            <div className="col-md-6 col-lg-4 mil-services-grid-item p-0">
              <div className="mil-service-card-sm mil-up">
                <h5 className="mil-muted mil-mb-30">
                  Persona Natural y/o <br />
                  Jurídica
                </h5>
                <p className="mil-light-soft mil-mb-30">
                  Abierto a individuos y entidades legales.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mil-services-grid-item p-0">
              <div className="mil-service-card-sm mil-up">
                <h5 className="mil-muted mil-mb-30">
                  Tipos de Empresas <br />
                  Aceptadas
                </h5>
                <p className="mil-light-soft mil-mb-30">
                  Incluye Unipersonales, Sociedades Anónimas, Sociedades de
                  Responsabilidad Limitada, Asociaciones, Cooperativas, y
                  Particulares interesados en comercializar o proveerse de
                  productos y servicios.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mil-services-grid-item p-0">
              <div className="mil-service-card-sm mil-up">
                <h5 className="mil-muted mil-mb-30">
                  Identificación <br />
                  Requerida
                </h5>
                <p className="mil-light-soft mil-mb-30">
                  Cédula de Identidad, DNI u otro documento de identificación,
                  según el país.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
