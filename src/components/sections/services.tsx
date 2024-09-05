import React from "react";

const Services = () => {
  return (
    <section className="mil-dark-bg">
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
                  Conecta, Colabora y Crea Oportunidades <br /> en Nuestra Rueda
                  de Negocios.
                </span>
              </div>
            </div>
            <div className="mil-complex-text justify-content-center mil-up mil-mb-15">
              <span className="mil-text-image">
                <img src="img/photo/2.jpg" alt="evento" />
              </span>
              <h2 className="mil-h1 mil-muted mil-center">
                Innovación y <span className="mil-thin">Oportunidades</span>
              </h2>
            </div>
            <div className="mil-complex-text justify-content-center mil-up">
              <h2 className="mil-h1 mil-muted mil-center">
                Para Tu <span className="mil-thin">Empresa.</span>
              </h2>
              <a
                href="services.html"
                className="mil-services-button mil-button mil-arrow-place"
              >
                <span>Descubre más</span>
              </a>
            </div>
          </div>
          <div className="row mil-services-grid m-0">
            <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
              <a href="service.html" className="mil-service-card-sm mil-up">
                <h5 className="mil-muted mil-mb-30">
                  Networking <br />
                  Estratégico
                </h5>
                <p className="mil-light-soft mil-mb-30">
                  Facilita conexiones directas entre proveedores, compradores y
                  socios potenciales.
                </p>
                <div className="mil-button mil-icon-button-sm mil-arrow-place" />
              </a>
            </div>
            <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
              <a href="service.html" className="mil-service-card-sm mil-up">
                <h5 className="mil-muted mil-mb-30">
                  Talleres de <br />
                  Capacitación
                </h5>
                <p className="mil-light-soft mil-mb-30">
                  Participa en talleres enfocados en innovación, marketing y
                  estrategias de crecimiento.
                </p>
                <div className="mil-button mil-icon-button-sm mil-arrow-place" />
              </a>
            </div>
            <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
              <a href="service.html" className="mil-service-card-sm mil-up">
                <h5 className="mil-muted mil-mb-30">
                  Charlas con <br />
                  Expertos
                </h5>
                <p className="mil-light-soft mil-mb-30">
                  Aprende de líderes del sector sobre tendencias y oportunidades
                  del mercado.
                </p>
                <div className="mil-button mil-icon-button-sm mil-arrow-place" />
              </a>
            </div>
            <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
              <a href="service.html" className="mil-service-card-sm mil-up">
                <h5 className="mil-muted mil-mb-30">
                  Consultoría <br />
                  Personalizada
                </h5>
                <p className="mil-light-soft mil-mb-30">
                  Recibe asesoramiento para potenciar tu negocio y abrir nuevas
                  oportunidades de mercado.
                </p>
                <div className="mil-button mil-icon-button-sm mil-arrow-place" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
