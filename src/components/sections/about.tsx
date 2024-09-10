import React from "react";

const About = () => {
  return (
    <section id="descubre">
      <div className="container mil-p-120-30">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6 col-xl-5">
            <div className="mil-mb-90">
              <h2 className="mil-up mil-mb-60">
                Descubre la <br />
                <span className="mil-thin">Rueda de Negocios</span>
              </h2>
              <p className="mil-up mil-mb-30">
                La <strong>Rueda de Negocios</strong> es un evento interactivo
                que reúne a empresarios, emprendedores y profesionales de
                diversos sectores para crear alianzas estratégicas, explorar
                oportunidades comerciales y fomentar la colaboración. Un espacio
                donde las ideas se transforman en acuerdos y conexiones
                valiosas.
              </p>
              <p className="mil-up mil-mb-60">
                Nuestro enfoque es facilitar encuentros directos entre
                proveedores, compradores y socios potenciales. A través de
                charlas, talleres y sesiones de networking, ofrecemos un
                ambiente ideal para el crecimiento empresarial, la innovación y
                el intercambio de conocimientos.
              </p>
              {/* <div className="mil-about-quote">
                <div className="mil-avatar mil-up">
                  <img src="img/faces/customers/2.jpg" alt="Evento" />
                </div>
                <h6 className="mil-quote mil-up">
                  Conectando <span className="mil-thin">Oportunidades:</span>{" "}
                  Impulsando el{" "}
                  <span className="mil-thin">Crecimiento Empresarial</span>
                </h6>
              </div> */}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="mil-about-photo mil-mb-90">
              <div className="mil-lines-place" />
              <div
                className="mil-up mil-img-frame"
                style={{ paddingBottom: "160%" }}
              >
                <img
                  src="https://www.ruedadenegociosbolivia.com/wp-content/uploads/2016/06/DSC_0090-1.jpg"
                  alt="Rueda de Negocios"
                  className="mil-scale"
                  data-value-1={1}
                  data-value-2="1.2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
