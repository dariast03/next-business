import React from "react";

const Business = () => {
  return (
    <section className="mil-soft-bg" id="empresas">
      <div
        className="container mil-p-120-120"
        style={{
          paddingBottom: 50,
        }}
      >
        <div className="row">
          <div className="col-lg-10">
            <span className="mil-suptitle mil-suptitle-right mil-suptitle-dark mil-up">
              Estamos orgullosos de asociarnos con líderes en la industria{" "}
              <br />
              para construir un ecosistema de colaboración y éxito compartido.
            </span>
          </div>
        </div>

        <h2 className="mil-center mil-up mil-mb-60">
          Conoce a Nuestras <span className="mil-thin">Empresas Asociadas</span>
        </h2>
      </div>
    </section>
  );
};

export default Business;
