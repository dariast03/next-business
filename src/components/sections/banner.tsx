import CONSTANTS from "@/data/CONSTANTS";
import React from "react";
import ExternalLink from "../ui/external-link";
import { openUrl } from "@/lib/open-url";

const Banner = () => {
  return (
    <section className="mil-banner mil-dark-bg" id="inicio">
      <div className="mi-invert-fix">
        <div className="mil-animation-frame">
          <div
            className="mil-animation mil-position-1 mil-scale"
            data-value-1={7}
            data-value-2="1.6"
          />
          <div
            className="mil-animation mil-position-2 mil-scale"
            data-value-1={4}
            data-value-2={1}
          />
          <div
            className="mil-animation mil-position-3 mil-scale"
            data-value-1="1.2"
            data-value-2=".1"
          />
        </div>
        <div className="mil-gradient" />
        <div className="container">
          <div className="mil-banner-content mil-up">
            {/*   <h1 className="mil-muted mil-mb-60">
            Rueda <span className="mil-thin">de Negocios</span>
            <br /> <span className="mil-thin">Tarija</span>
          </h1> */}
            <img
              src={`${CONSTANTS.BASE_URL}/img/logo-white.png`}
              //  className="logo"
              style={{
                width: "100%",
                maxWidth: 500,
                marginBottom: 0,
              }}
            />

            <div className="row">
              <div className="col-md-7 col-lg-5">
                {/*    <p className="mil-light-soft mil-mb-60">
                Un evento diseñado para fomentar conexiones significativas y
                potenciar el crecimiento empresarial. Únete a nosotros para
                explorar nuevas oportunidades y fortalecer tu red de
                contactos.
              </p> */}
                <ul className="mil-mb-60">
                  <li className="mil-light-soft">Más de 200 empresas</li>
                  <li className="mil-light-soft">
                    Concreta Alianzas Estratégicas
                  </li>
                  <li className="mil-light-soft">
                    Genera Contactos Nacionales e Internacionales
                  </li>
                </ul>
              </div>
            </div>
            <ExternalLink data-no-swup href={`${process.env.PLATFORM_URL}`}>
              <div className="mil-button mil-arrow-place mil-btn-space">
                <span>FORMULARIO DE INSCRIPCIÓN DIGITAL </span>
              </div>
            </ExternalLink>
            {/*           <a
            href="portfolio-1.html"
            className="mil-link mil-muted mil-arrow-place"
          >
            <span>View works</span>
          </a> */}
            {/*  <div className="mil-circle-text">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 300 300"
                enableBackground="new 0 0 300 300"
                xmlSpace="preserve"
                className="mil-ct-svg mil-rotate"
                data-value={360}
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                  />
                </defs>
                <circle cx={150} cy={100} r={75} fill="none" />
                <g>
                  <use xlinkHref="#circlePath" fill="none" />
                  <text style={{ letterSpacing: "6.5px" }}>
       
                  </text>
                </g>
              </svg>
              <a
                href="#descubre"
                className="mil-button mil-arrow-place mil-icon-button mil-arrow-down"
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
