import React from "react";

const ComoParticiparPage = () => {
  return (
    <>
      <div className="mil-inner-banner">
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
                <a href="home.html">Inicio</a>
              </li>

              <li>
                <a href="how-to-participate.html">Cómo Participar</a>
              </li>
            </ul>
            <h1 className="mil-mb-60">
              <span className="mil-thin"> Cómo </span> Participar
              <span className="mil-thin"> en la </span> Rueda de Negocios
            </h1>
          </div>
        </div>
      </div>

      {/* project */}
      <section className="">
        <div className="container " id="project">
          <div className="mil-image-frame mil-horizontal mil-up">
            <img
              src="https://www.ruedadenegociosbolivia.com/wp-content/uploads/2016/06/DSC_0042.jpg"
              alt="image"
            />
            <a
              data-fancybox="gallery"
              data-no-swup=""
              href="img/works/1/1.jpg"
              className="mil-zoom-btn"
            >
              <img src="img/icons/zoom.svg" alt="zoom" />
            </a>
          </div>

          <div className="">
            <div className="row justify-content-between mil-p-90-120">
              <div className="col-lg-5">
                <h3 className="mil-up mil-mb-60">Metodologia para reuniones</h3>
              </div>
              <div className="col-lg-6">
                <p className="mil-up mil-mb-30">
                  A home surveillance camera that pays great attention to
                  security and user privacy, featuring two modes to provide
                  security while protecting personal privacy.The camera has an
                  open and closed mode, we define the product to have clear two
                  sides, expressing two working states and emotions.
                </p>
                <p className="mil-up">
                  Presents a simple and quiet state when not in use, delivering
                  a gentle and security.At the same time, the camera can adapt
                  to a variety of environments, providing elegant ways of wall
                  hanging and standing installation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* project end */}
    </>
  );
};

export default ComoParticiparPage;
