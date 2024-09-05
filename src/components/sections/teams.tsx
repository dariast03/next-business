import React from "react";

const Teams = () => {
  return (
    <section>
      <div className="container mil-p-120-30">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5 col-xl-4">
            <div className="mil-mb-90">
              <h2 className="mil-up mil-mb-60">
                Conoce a <br />
                Nuestros Organizadores
              </h2>
              <p className="mil-up mil-mb-30">
                Somos un equipo de profesionales apasionados por promover el
                desarrollo económico y empresarial. Con una vasta experiencia en
                la organización de eventos de negocios, trabajamos juntos para
                crear un espacio dinámico para la conexión y el crecimiento.
              </p>
              <p className="mil-up mil-mb-60">
                Nuestro equipo está comprometido en hacer de esta Rueda de
                Negocios una experiencia inolvidable que genere oportunidades
                reales para todos los participantes.
              </p>
              <div className="mil-up">
                <a
                  href="team.html"
                  className="mil-button mil-arrow-place mil-mb-60"
                >
                  <span>Leer más</span>
                </a>
              </div>
              <h4 className="mil-up">
                <span className="mil-thin">Conectando</span> ideas <br />
                <span className="mil-thin">y generando</span> oportunidades.
              </h4>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mil-team-list">
              <div className="mil-lines-place" />
              <div className="row mil-mb-60">
                <div className="col-sm-6">
                  <div className="mil-team-card mil-up mil-mb-30">
                    <img src="img/faces/1.jpg" alt="Team member" />
                    <div className="mil-description">
                      <div className="mil-secrc-text">
                        <h5 className="mil-muted mil-mb-5">
                          <a href="home-2.html">María González</a>
                        </h5>
                        <p className="mil-link mil-light-soft mil-mb-10">
                          Directora de Eventos
                        </p>
                        <ul className="mil-social-icons mil-center">
                          <li>
                            <a
                              href="#."
                              target="_blank"
                              className="social-icon"
                            >
                              {" "}
                              <i className="fab fa-linkedin" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#."
                              target="_blank"
                              className="social-icon"
                            >
                              {" "}
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="mil-team-card mil-up mil-mb-30">
                    <img src="img/faces/3.jpg" alt="Team member" />
                    <div className="mil-description">
                      <div className="mil-secrc-text">
                        <h5 className="mil-muted mil-mb-5">
                          <a href="home-2.html">Carlos Ramírez</a>
                        </h5>
                        <p className="mil-link mil-light-soft mil-mb-10">
                          Coordinador de Negocios
                        </p>
                        <ul className="mil-social-icons mil-center">
                          <li>
                            <a
                              href="#."
                              target="_blank"
                              className="social-icon"
                            >
                              {" "}
                              <i className="fab fa-linkedin" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#."
                              target="_blank"
                              className="social-icon"
                            >
                              {" "}
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <p
                    className="mil-mobile-hidden mil-text-sm mil-mb-30"
                    style={{ height: 30 }}
                  >
                    <span className="mil-accent">*</span> Facilitadores de
                    nuestras sesiones de networking
                  </p>
                  <div className="mil-team-card mil-up mil-mb-30">
                    <img src="img/faces/2.jpg" alt="Team member" />
                    <div className="mil-description">
                      <div className="mil-secrc-text">
                        <h5 className="mil-muted mil-mb-5">
                          <a href="home-2.html">Andrea López</a>
                        </h5>
                        <p className="mil-link mil-light-soft mil-mb-10">
                          Experta en Mercados
                        </p>
                        <ul className="mil-social-icons mil-center">
                          <li>
                            <a
                              href="#."
                              target="_blank"
                              className="social-icon"
                            >
                              {" "}
                              <i className="fab fa-linkedin" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#."
                              target="_blank"
                              className="social-icon"
                            >
                              {" "}
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="mil-team-card mil-up mil-mb-30">
                    <img src="img/faces/4.jpg" alt="Team member" />
                    <div className="mil-description">
                      <div className="mil-secrc-text">
                        <h5 className="mil-muted mil-mb-5">
                          <a href="home-2.html">Fernando Silva</a>
                        </h5>
                        <p className="mil-link mil-light-soft mil-mb-10">
                          Analista Financiero
                        </p>
                        <ul className="mil-social-icons mil-center">
                          <li>
                            <a
                              href="#."
                              target="_blank"
                              className="social-icon"
                            >
                              {" "}
                              <i className="fab fa-linkedin" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#."
                              target="_blank"
                              className="social-icon"
                            >
                              {" "}
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
