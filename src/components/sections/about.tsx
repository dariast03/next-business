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
                La Rueda Empresarial de Negocios, organizada por la Universidad
                Privada Domingo Savio, te permite ofertar y demandar productos y
                servicios, establecer diferentes tipos de acuerdos de
                cooperación y alianzas estratégicas.
              </p>
              <p className="mil-up mil-mb-30">
                Durante dos días de reuniones empresas provenientes de
                diferentes países y ciudades tienen la oportunidad de
                contactarse para desarrollar nuevos negocios, intercambiar
                información sobre las tendencias de productos y servicios, así
                como de mercados emergentes.
              </p>
              <p className="mil-up mil-mb-60">
                De igual manera, en el mismo se generan espacios de capacitación
                en temáticas como ser: tecnología, innovación, económicas,
                financiamiento, entre otras. Se desarrolla en el marco de la
                Feria Exposición de Tarija – Exposur 2024.
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
