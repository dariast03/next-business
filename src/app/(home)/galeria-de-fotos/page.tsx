import CONSTANTS from "@/data/CONSTANTS";
import React from "react";

const GaleriaDeFotosPage = () => {
  return (
    <>
      <>
        {/* banner */}
        <div className="mil-inner-banner mil-p-120-0">
          <div className="mil-banner-content mil-up">
            <div className="mil-animation-frame">
              <div
                className="mil-animation mil-position-4 mil-dark mil-scale"
                data-value-1={6}
                data-value-2="1.4"
              />
            </div>
            <div className="container">
              <ul className="mil-breadcrumbs mil-mb-60">
                <li>
                  <a href="home-1.html">Inicio</a>
                </li>
                <li>
                  <a href="portfolio-2.html">Galeria de Fotos</a>
                </li>
              </ul>
              <h1 className="mil-mb-60">Galeria de Fotos</h1>
            </div>
          </div>
        </div>
        {/* banner end */}
        {/* portfolio */}
        <section id="portfolio">
          <div className="container mil-portfolio mil-p-120-60">
            <div className="mil-lines-place" />
            <div className="mil-lines-place mil-lines-long" />
            <div className="row justify-content-between align-items-end">
              <div className="col-lg-6">
                <a
                  href="portfolio-1.html"
                  className="mil-portfolio-item mil-more mil-mb-60"
                >
                  <div className="mil-cover-frame mil-hori mil-up">
                    <div
                      className="mil-cover mil-scale"
                      data-value-1="1.2"
                      data-value-2={1}
                    >
                      <img
                        src={`${CONSTANTS.BASE_URL}/img/rueda/1.jpeg`}
                        alt="cover"
                      />
                    </div>
                  </div>
                  <div className="mil-descr">
                    <div className="mil-labels mil-up mil-mb-15">
                      {/*    <div className="mil-label mil-upper mil-accent">
                        Branding
                      </div> */}
                      <div className="mil-label mil-upper">may 24 2023</div>
                    </div>
                    {/* <h4 className="mil-up">Interior design studio</h4> */}
                  </div>
                </a>
              </div>
              <div className="col-lg-5">
                <a
                  href="project-2.html"
                  className="mil-portfolio-item mil-more mil-parallax mil-mb-60"
                  data-value-1={-30}
                  data-value-2={0}
                >
                  <div className="mil-cover-frame mil-hori mil-up">
                    <div className="mil-cover">
                      <img
                        src={`${CONSTANTS.BASE_URL}/img/rueda/2.jpeg`}
                        alt="cover"
                      />
                    </div>
                  </div>
                  <div className="mil-descr">
                    <div className="mil-labels mil-up mil-mb-15">
                      {/* <div className="mil-label mil-upper mil-accent">
                        Design
                      </div> */}
                      <div className="mil-label mil-upper">may 24 2023</div>
                    </div>
                    {/* <h4 className="mil-up">Home Security Camera</h4> */}
                  </div>
                </a>
              </div>
              <div className="col-lg-12">
                <a
                  href="project-3.html"
                  className="mil-portfolio-item mil-more mil-mb-60"
                >
                  <div className="mil-cover-frame mil-hori mil-up">
                    <div className="mil-cover">
                      <img
                        src={`${CONSTANTS.BASE_URL}/img/rueda/3.jpeg`}
                        alt="cover"
                      />
                    </div>
                  </div>
                  <div className="mil-descr">
                    <div className="mil-labels mil-up mil-mb-15">
                      {/*   <div className="mil-label mil-upper mil-accent">
                        Photography
                      </div> */}
                      <div className="mil-label mil-upper">may 24 2023</div>
                    </div>
                    {/* <h4 className="mil-up">Kemia Honest Skincare</h4> */}
                  </div>
                </a>
              </div>
              <div className="col-lg-5">
                <a
                  href="project-4.html"
                  className="mil-portfolio-item mil-more mil-parallax mil-mb-60"
                  data-value-1={-30}
                  data-value-2={0}
                >
                  <div className="mil-cover-frame mil-hori mil-up">
                    <div className="mil-cover">
                      <img
                        src={`${CONSTANTS.BASE_URL}/img/rueda/4.jpeg`}
                        alt="cover"
                      />
                    </div>
                  </div>
                  <div className="mil-descr">
                    <div className="mil-labels mil-up mil-mb-15">
                      <div className="mil-label mil-upper mil-accent">
                        Design
                      </div>
                      <div className="mil-label mil-upper">may 24 2023</div>
                    </div>
                    {/* <h4 className="mil-up">Cascade of Lava</h4> */}
                  </div>
                </a>
              </div>
              <div className="col-lg-6">
                <a
                  href="project-5.html"
                  className="mil-portfolio-item mil-more mil-mb-60"
                >
                  <div className="mil-cover-frame mil-hori mil-up">
                    <div className="mil-cover">
                      <img
                        src={`${CONSTANTS.BASE_URL}/img/rueda/3.jpeg`}
                        alt="cover"
                      />
                    </div>
                  </div>
                  <div className="mil-descr">
                    <div className="mil-labels mil-up mil-mb-15">
                      <div className="mil-label mil-upper mil-accent">
                        Design
                      </div>
                      <div className="mil-label mil-upper">may 24 2023</div>
                    </div>
                    {/* <h4 className="mil-up">Air Pro by Molekule</h4> */}
                  </div>
                </a>
              </div>
              <div className="col-lg-12">
                <a
                  href="project-6.html"
                  className="mil-portfolio-item mil-more mil-mb-60"
                >
                  <div className="mil-cover-frame mil-hori mil-up">
                    <div className="mil-cover">
                      <img
                        src={`${CONSTANTS.BASE_URL}/img/rueda/1.jpeg`}
                        alt="cover"
                      />
                    </div>
                  </div>
                  <div className="mil-descr">
                    <div className="mil-labels mil-up mil-mb-15">
                      <div className="mil-label mil-upper mil-accent">
                        Design
                      </div>
                      <div className="mil-label mil-upper">may 24 2023</div>
                    </div>
                    {/* <h4 className="mil-up">Tony's Chocolonely</h4> */}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* portfolio end */}
      </>
    </>
  );
};

export default GaleriaDeFotosPage;
