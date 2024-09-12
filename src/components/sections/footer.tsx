import CONSTANTS from "@/data/CONSTANTS";
import React from "react";
import ExternalLink from "../ui/external-link";

const links = [
  {
    title: "Inicio",
    href: "#inicio",
  },
  {
    title: "Descubre",
    href: "#descubre",
  },
  {
    title: "Empresas",
    href: "#empresas",
  },
  {
    title: "Requisitos",
    href: "#requisitos",
  },
  {
    title: "Precios",
    href: "#precios",
  },
  {
    title: "Organizadores",
    href: "#organizadores",
  },
];

const Footer = () => {
  return (
    <footer className="mil-dark-bg">
      <div className="mi-invert-fix">
        <div className="container mil-p-120-60">
          <div className="row justify-content-between logo-footer">
            <div className="col-md-4 col-lg-4 mil-mb-30">
              <div className="mil-muted mil-logo mil-up mil-mb-30">
                Rueda de Negocios
              </div>

              <div className="logo-redes">
                <div>
                  <img src={`${CONSTANTS.BASE_URL}/img/logo-white-upds.png`} />
                </div>

                <div className="mil-mb-30">
                  <ul className="mil-social-icons mil-up">
                    <li>
                      <ExternalLink
                        href="https://www.facebook.com/universidadprivadadomingosaviotarija"
                        className="social-icon"
                      >
                        <i className="fab fa-facebook-f" />
                      </ExternalLink>
                    </li>

                    <li>
                      <ExternalLink
                        href="https://www.instagram.com/upds_tarija/"
                        className="social-icon"
                      >
                        <i className="fab fa-instagram" />
                      </ExternalLink>
                    </li>

                    <li>
                      <ExternalLink
                        href="https://www.tiktok.com/@upds_tarija"
                        className="social-icon"
                      >
                        <i className="fab fa-tiktok" />
                      </ExternalLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-7 col-lg-6">
              <div className="row justify-content-end">
                <div className="col-md-6 col-lg-7">
                  <nav className="mil-footer-menu mil-mb-60">
                    <ul>
                      {links.map((link) => (
                        <li className="mil-up" key={link.title}>
                          <a href={link.href}>{link.title}</a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>

                {/*      <div className="col-md-6 col-lg-5">
                  <ul className="mil-menu-list mil-up mil-mb-60">
                    <li>
                      <a href="" className="mil-light-soft">
                        Política de Privacidad
                      </a>
                    </li>
                    <li>
                      <a href="" className="mil-light-soft">
                        Términos y Condiciones
                      </a>
                    </li>
                    <li>
                      <a href="" className="mil-light-soft">
                        Política de Cookies
                      </a>
                    </li>
                    <li>
                      <a href="" className="mil-light-soft">
                        Carreras
                      </a>
                    </li>
                  </ul>
                </div> */}
                <div className="col-md-6 col-lg-5"></div>
              </div>
            </div>
          </div>

          <div className="row justify-content-between flex-sm-row-reverse">
            <div className="col-md-7 col-lg-6">
              <div className="row justify-content-between">
                <div className="col-md-6 col-lg-5 mil-mb-60">
                  <h6 className="mil-muted mil-up mil-mb-30">
                    Punto de Informacion #1
                  </h6>
                  <p className="mil-light-soft mil-up">
                    Universidad Privada Domingo Savio - Lobby{" "}
                    <span className="">
                      (Barrio Germán Bush, Av. Los Sauces esq. Fabián Ruiz)
                    </span>
                  </p>
                </div>
                <div className="col-md-6 col-lg-5 mil-mb-60">
                  <h6 className="mil-muted mil-up mil-mb-30">
                    Punto de Informacion #2
                  </h6>
                  <p className="mil-light-soft mil-up">
                    Plaza Luis de Fuentes esq. 1{" "}
                    <span className="">(Oficinas Exposur)</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="mil-vert-between">
                <p className="mil-light-soft mil-up">
                  © Copyright 2024 - Rueda de Negocios. Todos los derechos
                  reservados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
