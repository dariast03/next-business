import Header from "@/components/layout/header/header";
import Menu from "@/components/layout/menu/menu";
import About from "@/components/sections/about";
import Blog from "@/components/sections/blog";
import Business from "@/components/sections/business";
import Footer from "@/components/sections/footer";
import Partners from "@/components/sections/partners";
import Services from "@/components/sections/services";
import Teams from "@/components/sections/teams";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* banner */}
      <section className="mil-banner mil-dark-bg">
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
              <h1 className="mil-muted mil-mb-60">
                Rueda <span className="mil-thin">de Negocios</span>
                <br /> <span className="mil-thin">Tarija</span>
              </h1>
              <div className="row">
                <div className="col-md-7 col-lg-5">
                  <p className="mil-light-soft mil-mb-60">
                    Un evento diseñado para fomentar conexiones significativas y
                    potenciar el crecimiento empresarial. Únete a nosotros para
                    explorar nuevas oportunidades y fortalecer tu red de
                    contactos.
                  </p>
                </div>
              </div>
              <a
                href="services.html"
                className="mil-button mil-arrow-place mil-btn-space"
              >
                <span>Inscríbase</span>
              </a>
              <a
                href="portfolio-1.html"
                className="mil-link mil-muted mil-arrow-place"
              >
                <span>View works</span>
              </a>
              <div className="mil-circle-text">
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
                      {/* circle text */}
                    </text>
                  </g>
                </svg>
                <a
                  href="#about"
                  className="mil-button mil-arrow-place mil-icon-button mil-arrow-down"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* banner end */}

      {/* about */}
      <About />
      {/* about end */}

      {/* empresas asociadas */}
      <Business />
      {/* empresas asociadas end */}

      {/* partners */}
      <Partners />
      {/* partners end */}

      {/* services */}
      <Services />
      {/* services end */}

      {/* team */}
      <Teams />
      {/* team end */}

      <>
        {/* banner 
        <div className="mil-inner-banner">
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
                  <a href="home-1.html">Homepage</a>
                </li>
                <li>
                  <a href="services.html">Services</a>
                </li>
                <li>
                  <a href="service.html">Service</a>
                </li>
              </ul>
              <h1 className="mil-mb-60">
                Website <span className="mil-thin">Design</span>
                <br /> and <span className="mil-thin">Development</span>
              </h1>
              <a
                href="#service"
                className="mil-link mil-dark mil-arrow-place mil-down-arrow"
              >
                <span>About service</span>
              </a>
            </div>
          </div>
        </div>
        banner end */}

        {/* prices */}
        <section className="mil-dark-bg">
          <div className="mi-invert-fix">
            <div className="container mil-p-120-120">
              <div className="mil-center">
                <h2 className="mil-muted mil-up mil-mb-30">
                  Paquetes
                  <span className="mil-thin"> para la </span> <br />
                  Rueda de Negocios
                </h2>
                <p className="mil-light-soft mil-up mil-mb-120">
                  Elige el paquete que mejor se adapte a tus necesidades y forma
                  parte de la rueda de negocios más importante de la región.
                </p>
              </div>
              <a
                href="contact.html"
                className="mil-price-card mil-choose mil-accent-cursor mil-up"
              >
                <div className="row align-items-center">
                  <div className="col-lg-2">
                    <div className="mil-price-number mil-mb-30">
                      <span className="mil-muted mil-thin">Bs.</span>
                      <span className="mil-accent">100</span>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <h5 className="mil-muted mil-mb-30">Exposur 2024</h5>
                  </div>
                  <div className="col-lg-4">
                    <p className="mil-light-soft mil-mb-30">
                      Acceso general a la rueda de negocios, participación en
                      actividades y conferencias.
                    </p>
                  </div>
                  <div className="col-lg-2">
                    <div className="mil-adaptive-right mil-mb-30">
                      <div className="mil-button mil-icon-button-sm mil-arrow-place" />
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="contact.html"
                className="mil-price-card mil-choose mil-accent-cursor mil-up"
              >
                <div className="row align-items-center">
                  <div className="col-lg-2">
                    <div className="mil-price-number mil-mb-30">
                      <span className="mil-muted mil-thin">Bs.</span>
                      <span className="mil-accent">200</span>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <h5 className="mil-muted mil-mb-30">Business</h5>
                  </div>
                  <div className="col-lg-4">
                    <p className="mil-light-soft mil-mb-30">
                      Incluye todos los beneficios del paquete Exposur 2024,
                      además de acceso a reuniones exclusivas.
                    </p>
                  </div>
                  <div className="col-lg-2">
                    <div className="mil-adaptive-right mil-mb-30">
                      <div className="mil-button mil-icon-button-sm mil-arrow-place" />
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="contact.html"
                className="mil-price-card mil-choose mil-accent-cursor mil-up mil-mb-60"
              >
                <div className="row align-items-center">
                  <div className="col-lg-2">
                    <div className="mil-price-number mil-mb-30">
                      <span className="mil-muted mil-thin">Bs.</span>
                      <span className="mil-accent">400</span>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <h5 className="mil-muted mil-mb-30">Stand</h5>
                  </div>
                  <div className="col-lg-4">
                    <p className="mil-light-soft mil-mb-30">
                      Incluye todos los beneficios del paquete Business, además
                      de un stand exclusivo para exhibir tu empresa.
                    </p>
                  </div>
                  <div className="col-lg-2">
                    <div className="mil-adaptive-right mil-mb-360">
                      <div className="mil-button mil-icon-button-sm mil-arrow-place" />
                    </div>
                  </div>
                </div>
              </a>

              <div className="mil-center">
                <a href="contact.html" className="mil-button mil-arrow-place">
                  <span>Contáctanos para más detalles</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* prices end */}

        {/* Preguntas Frecuentes */}
        <section id="faq">
          <div className="container mil-p-120-90">
            <div className="row justify-content-between">
              <h3
                className="mil-center mil-up mil-mb-120"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                  opacity: 1,
                }}
              >
                Preguntas Frecuentes
              </h3>

              <div className="">
                {/* Grupo de Acordeón */}
                <div className="mil-accordion-group mil-up">
                  <div className="mil-accordion-menu">
                    <p className="mil-accordion-head">
                      ¿Qué es la Rueda de Negocios?
                    </p>
                    <div className="mil-symbol mil-h3">
                      <div className="mil-plus">+</div>
                      <div className="mil-minus">-</div>
                    </div>
                  </div>
                  <div className="mil-accordion-content">
                    <p className="mil-mb-30">
                      La Rueda de Negocios es un evento que reúne a empresas de
                      diversos sectores para fomentar contactos comerciales,
                      generar oportunidades de negocio y establecer alianzas
                      estratégicas. Durante el evento, los participantes pueden
                      agendar reuniones con potenciales clientes o socios.
                    </p>
                  </div>
                </div>

                {/* Grupo de Acordeón */}
                <div className="mil-accordion-group mil-up">
                  <div className="mil-accordion-menu">
                    <p className="mil-accordion-head">
                      ¿Cómo puedo participar en la Rueda de Negocios?
                    </p>
                    <div className="mil-symbol mil-h3">
                      <div className="mil-plus">+</div>
                      <div className="mil-minus">-</div>
                    </div>
                  </div>
                  <div className="mil-accordion-content">
                    <p className="mil-mb-30">
                      Puedes participar inscribiéndote a través de nuestro sitio
                      web. Completa el formulario de inscripción y selecciona el
                      paquete que mejor se adapte a tus necesidades. Una vez
                      inscrito, podrás acceder a la plataforma para agendar
                      reuniones con otros participantes.
                    </p>
                  </div>
                </div>

                {/* Grupo de Acordeón */}
                <div className="mil-accordion-group mil-up">
                  <div className="mil-accordion-menu">
                    <p className="mil-accordion-head">
                      ¿Qué tipo de empresas pueden participar?
                    </p>
                    <div className="mil-symbol mil-h3">
                      <div className="mil-plus">+</div>
                      <div className="mil-minus">-</div>
                    </div>
                  </div>
                  <div className="mil-accordion-content">
                    <p className="mil-mb-30">
                      Todas las empresas, desde startups hasta grandes
                      corporaciones, son bienvenidas a participar. No importa el
                      sector, siempre y cuando busquen oportunidades de negocio
                      y expansión. La diversidad de participantes permite un
                      intercambio enriquecedor.
                    </p>
                  </div>
                </div>

                {/* Grupo de Acordeón */}
                <div className="mil-accordion-group mil-up">
                  <div className="mil-accordion-menu">
                    <p className="mil-accordion-head">
                      ¿Cuál es el objetivo de las reuniones programadas?
                    </p>
                    <div className="mil-symbol mil-h3">
                      <div className="mil-plus">+</div>
                      <div className="mil-minus">-</div>
                    </div>
                  </div>
                  <div className="mil-accordion-content">
                    <p className="mil-mb-30">
                      Las reuniones programadas buscan conectar a empresarios
                      con intereses comunes, facilitar el diálogo y concretar
                      acuerdos comerciales. Cada reunión tiene una duración de
                      30 minutos, permitiendo a las partes discutir proyectos,
                      servicios o productos específicos.
                    </p>
                  </div>
                </div>

                {/* Grupo de Acordeón */}
                <div className="mil-accordion-group mil-up">
                  <div className="mil-accordion-menu">
                    <p className="mil-accordion-head">
                      ¿Qué beneficios ofrece participar en la Rueda de Negocios?
                    </p>
                    <div className="mil-symbol mil-h3">
                      <div className="mil-plus">+</div>
                      <div className="mil-minus">-</div>
                    </div>
                  </div>
                  <div className="mil-accordion-content">
                    <p className="mil-mb-30">
                      Participar en la Rueda de Negocios te permite acceder a
                      nuevos mercados, conocer potenciales socios comerciales,
                      fortalecer tu red de contactos y explorar nuevas
                      oportunidades de negocio en un ambiente dinámico y
                      profesional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Fin Preguntas Frecuentes */}
      </>

      {/* blog */}
      {/* <Blog /> */}
      {/* blog end */}

      {/* footer */}
      <Footer />
      {/* footer end */}

      {/* hidden elements */}
      <div className="mil-hidden-elements">
        <div className="mil-dodecahedron">
          <div className="mil-pentagon">
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
          <div className="mil-pentagon">
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
          <div className="mil-pentagon">
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
          <div className="mil-pentagon">
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
          <div className="mil-pentagon">
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
          <div className="mil-pentagon">
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
          <div className="mil-pentagon">
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
          <div className="mil-pentagon">
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
          <div className="mil-pentagon">
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
          <div className="mil-pentagon">
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
          <div className="mil-pentagon">
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
          <div className="mil-pentagon">
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="mil-arrow"
        >
          <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z" />
        </svg>
        <svg
          width={250}
          viewBox="0 0 300 1404"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mil-lines"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 892L1 941H299V892C299 809.71 232.29 743 150 743C67.7096 743 1 809.71 1 892ZM0 942H300V892C300 809.157 232.843 742 150 742C67.1573 742 0 809.157 0 892L0 942Z"
            className="mil-move"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M299 146V97L1 97V146C1 228.29 67.7096 295 150 295C232.29 295 299 228.29 299 146ZM300 96L0 96V146C0 228.843 67.1573 296 150 296C232.843 296 300 228.843 300 146V96Z"
            className="mil-move"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M299 1H1V1403H299V1ZM0 0V1404H300V0H0Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M150 -4.37115e-08L150 1404L149 1404L149 0L150 -4.37115e-08Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M150 1324C232.29 1324 299 1257.29 299 1175C299 1092.71 232.29 1026 150 1026C67.7096 1026 1 1092.71 1 1175C1 1257.29 67.7096 1324 150 1324ZM150 1325C232.843 1325 300 1257.84 300 1175C300 1092.16 232.843 1025 150 1025C67.1573 1025 0 1092.16 0 1175C0 1257.84 67.1573 1325 150 1325Z"
            className="mil-move"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M300 1175H0V1174H300V1175Z"
            className="mil-move"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M150 678C232.29 678 299 611.29 299 529C299 446.71 232.29 380 150 380C67.7096 380 1 446.71 1 529C1 611.29 67.7096 678 150 678ZM150 679C232.843 679 300 611.843 300 529C300 446.157 232.843 379 150 379C67.1573 379 0 446.157 0 529C0 611.843 67.1573 679 150 679Z"
            className="mil-move"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M299 380H1V678H299V380ZM0 379V679H300V379H0Z"
            className="mil-move"
          />
        </svg>
      </div>
      {/* hidden elements end */}
    </>
  );
}
