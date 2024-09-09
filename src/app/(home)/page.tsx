import Header from "@/components/layout/header/header";
import Menu from "@/components/layout/menu/menu";
import About from "@/components/sections/about";
import Blog from "@/components/sections/blog";
import Business from "@/components/sections/business";
import Footer from "@/components/sections/footer";
import HiddenElements from "@/components/sections/hidden-elements";
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
              <a
                href="services.html"
                className="mil-button mil-arrow-place mil-btn-space"
              >
                <span>Inscríbase</span>
              </a>
              {/*           <a
                href="portfolio-1.html"
                className="mil-link mil-muted mil-arrow-place"
              >
                <span>View works</span>
              </a> */}
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
      <HiddenElements />
      {/* hidden elements end */}
    </>
  );
}
