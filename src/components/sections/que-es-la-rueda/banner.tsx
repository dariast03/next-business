import React from "react";

const Banner = () => {
  return (
    <>
      <div className="mil-inner-banner">
        <div className="mil-banner-content mil-center mil-up">
          <div className="container">
            <ul className="mil-breadcrumbs mil-center mil-mb-60">
              <li>
                <a href="home-1.html">Inicio</a>
              </li>
              <li>
                <a href="que-es-la-rueda.html">Qué es la Rueda</a>
              </li>
            </ul>
            <h2>
              <span className="mil-thin"> Conoce la </span> Rueda de Negocios
              <br />
              <span className="mil-thin"> y sus </span>Beneficios
            </h2>
          </div>
        </div>
      </div>

      {/*       <div className="mil-inner-banner">
        <div className="mil-animation-frame">
          <div
            className="mil-animation mil-position-4 mil-dark mil-scale"
            data-value-1={6}
            data-value-2="1.4"
          />
        </div>
        <div className="mil-banner-content mil-up">
          <div className="container">
            <ul className="mil-breadcrumbs mil-mb-60">
              <li>
                <a href="home-1.html">Inicio</a>
              </li>
              <li>
                <a href="que-es-la-rueda.html">Qué es la Rueda</a>
              </li>
            </ul>
            <h1 className="mil-mb-60">
              <span className="mil-thin"> Conoce la </span> Rueda de Negocios
              <br />
              <span className="mil-thin"> y sus </span>Beneficios
            </h1>
            <a
              href="#service"
              className="mil-link mil-dark mil-arrow-place mil-down-arrow"
            >
              <span>Más sobre la Rueda</span>
            </a>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Banner;
