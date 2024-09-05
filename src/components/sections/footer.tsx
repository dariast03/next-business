import React from "react";

const Footer = () => {
  return (
    <footer className="mil-dark-bg">
      <div className="mi-invert-fix">
        <div className="container mil-p-120-60">
          <div className="row justify-content-between">
            <div className="col-md-4 col-lg-4 mil-mb-60">
              <div className="mil-muted mil-logo mil-up mil-mb-30">
                Rueda de Negocios
              </div>

              <div className="mil-mb-30">
                <ul className="mil-social-icons mil-up">
                  <li>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      className="social-icon"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      className="social-icon"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      className="social-icon"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      className="social-icon"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-7 col-lg-6">
              <div className="row justify-content-end">
                <div className="col-md-6 col-lg-7">
                  <nav className="mil-footer-menu mil-mb-60">
                    <ul>
                      <li className="mil-up mil-active">
                        <a href="home.html">Inicio</a>
                      </li>
                      <li className="mil-up">
                        <a href="events.html">Eventos</a>
                      </li>
                      <li className="mil-up">
                        <a href="about.html">Sobre Nosotros</a>
                      </li>
                      <li className="mil-up">
                        <a href="contact.html">Contacto</a>
                      </li>
                      <li className="mil-up">
                        <a href="blog.html">Blog</a>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div className="col-md-6 col-lg-5">
                  <ul className="mil-menu-list mil-up mil-mb-60">
                    <li>
                      <a href="#." className="mil-light-soft">
                        Política de Privacidad
                      </a>
                    </li>
                    <li>
                      <a href="#." className="mil-light-soft">
                        Términos y Condiciones
                      </a>
                    </li>
                    <li>
                      <a href="#." className="mil-light-soft">
                        Política de Cookies
                      </a>
                    </li>
                    <li>
                      <a href="#." className="mil-light-soft">
                        Carreras
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-between flex-sm-row-reverse">
            <div className="col-md-7 col-lg-6">
              <div className="row justify-content-between">
                <div className="col-md-6 col-lg-5 mil-mb-60">
                  <h6 className="mil-muted mil-up mil-mb-30">
                    Oficina Principal
                  </h6>
                  <p className="mil-light-soft mil-up">
                    123 Avenida de los Negocios, Suite 100, Ciudad de México,
                    CDMX 10001{" "}
                    <span className="mil-no-wrap">+52 555 123 4567</span>
                  </p>
                </div>
                <div className="col-md-6 col-lg-5 mil-mb-60">
                  <h6 className="mil-muted mil-up mil-mb-30">
                    Oficina Europea
                  </h6>
                  <p className="mil-light-soft mil-up">
                    Calle del Mercado 45, Madrid, España 28001{" "}
                    <span className="mil-no-wrap">+34 912 345 678</span>
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
