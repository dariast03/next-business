import React from "react";

const Blog = () => {
  return (
    <section>
      <div className="container mil-p-120-60">
        <div className="row align-items-center mil-mb-30">
          <div className="col-lg-6 mil-mb-30">
            <h3 className="mil-up">
              Últimos Eventos de la{" "}
              <span className="mil-thin">Rueda de Negocios</span>:
            </h3>
          </div>
          <div className="col-lg-6 mil-mb-30">
            <div className="mil-adaptivez-right mil-up">
              <a
                href="events.html"
                className="mil-link mil-dark mil-arrow-place"
              >
                <span>Ver todos</span>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <a href="event.html" className="mil-blog-card mil-mb-60">
              <div className="mil-cover-frame mil-up">
                <img src="img/blog/1.jpg" alt="event" />
              </div>
              <div className="mil-post-descr">
                <div className="mil-labels mil-up mil-mb-30">
                  <div className="mil-label mil-upper mil-accent">
                    NETWORKING
                  </div>
                  <div className="mil-label mil-upper">ago 15 2024</div>
                </div>
                <h4 className="mil-up mil-mb-30">
                  Conecta con los Líderes del Sector en el Evento Anual de
                  Negocios
                </h4>
                <p className="mil-post-text mil-up mil-mb-30">
                  Únete a nosotros en el evento anual de la rueda de negocios,
                  donde tendrás la oportunidad de conectar con líderes del
                  sector, explorar nuevas oportunidades y ampliar tu red de
                  contactos. Descubre cómo estos eventos pueden impulsar tu
                  negocio y abrir nuevas puertas para tu empresa.
                </p>
                <div className="mil-link mil-dark mil-arrow-place mil-up">
                  <span>Leer más</span>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-6">
            <a href="event.html" className="mil-blog-card mil-mb-60">
              <div className="mil-cover-frame mil-up">
                <img src="img/blog/2.jpg" alt="event" />
              </div>
              <div className="mil-post-descr">
                <div className="mil-labels mil-up mil-mb-30">
                  <div className="mil-label mil-upper mil-accent">
                    NETWORKING
                  </div>
                  <div className="mil-label mil-upper">ago 5 2024</div>
                </div>
                <h4 className="mil-up mil-mb-30">
                  Oportunidades y Tendencias en el Mercado Global de Negocios
                </h4>
                <p className="mil-post-text mil-up mil-mb-30">
                  Descubre las últimas tendencias y oportunidades en el mercado
                  global de negocios. Nuestro próximo evento de la rueda de
                  negocios reunirá a expertos y empresarios para discutir las
                  tendencias emergentes y cómo puedes aprovecharlas para tu
                  empresa.
                </p>
                <div className="mil-link mil-dark mil-arrow-place mil-up">
                  <span>Leer más</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
