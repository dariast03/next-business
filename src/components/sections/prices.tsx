import React from "react";
import ExternalLink from "../ui/external-link";

const prices = [
  {
    id: 1,
    title: "Empresas Participantes EXPOSUR",
    price: 100,
    description:
      "Acceso general a la rueda de negocios, participación en actividades y conferencias.",
    slug: "empresas",
  },
  {
    id: 2,
    title: "Público en General",
    price: 200,
    slug: "publico-general",
    description:
      "Incluye todos los beneficios del paquete Exposur 2024, además de acceso a reuniones exclusivas.",
  },
  {
    id: 3,
    title: "Empresa con stand Rueda de Negocios",
    price: 400,
    description:
      "Incluye todos los beneficios del paquete Business, además de un stand exclusivo para exhibir tu empresa.",
    slug: "empresa-stand",
  },
];

const Prices = () => {
  return (
    <section className="mil-soft-bg" id="precios">
      <div className="">
        <div className="container mil-p-120-120">
          <div className="mil-center">
            <h2 className="mil-up mil-mb-30">
              Paquetes
              <span className="mil-thin"> para la </span> <br />
              Rueda de Negocios
            </h2>
            <p className="mil-up mil-mb-15">
              Elige el paquete que mejor se adapte a tus necesidades y forma
              parte de la rueda de negocios más importante de la región.
            </p>
          </div>

          <div
            className="mil-mb-30"
            style={{
              marginInline: "auto",
              width: "100%",
              maxWidth: 800,
            }}
          >
            {prices.map((price) => (
              <ExternalLink
                key={price.id}
                href={`${process.env.NEXT_PUBLIC_PLATFORM_URL}/select-plan/${price.slug}`}
                className="mil-price-card mil-choose mil-accent-cursor mil-up"
              >
                <div className="row align-items-center justify-content-center">
                  <div className="col-lg-2">
                    <div className="mil-price-number mil-mb-30">
                      <span className="mil-thin">Bs.</span>
                      <span className="mil-accent-primary">{price.price}</span>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <h5 className="mil-mb-30 mil-center">{price.title}</h5>
                  </div>
                  {/*     <div className="col-lg-4">
                  <p className="mil-mb-30">{price.description}</p>
                </div> */}
                  <div className="col-lg-2">
                    <div className="mil-adaptive-right mil-mb-30">
                      <div className="mil-button mil-button-primary mil-icon-button-sm mil-arrow-place" />
                    </div>
                  </div>
                </div>
              </ExternalLink>
            ))}
          </div>

          <h5 className="mil-mb-15 mil-center">Cada paquete incluye:</h5>

          <div
            className="mil-mb-60"
            style={{
              display: "grid",
              placeItems: "center",
              textAlign: "left",
            }}
          >
            <ul>
              <li>Credencial para acceso al evento</li>
              <li>Material para el evento</li>
              <li>
                Capacitación gratuita (sobre cómo participar en ruedas) antes de
                iniciado el evento
              </li>
              <li>Refrigerio por la mañana y tarde</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
