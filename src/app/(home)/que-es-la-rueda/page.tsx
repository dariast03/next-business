import Banner from "@/components/sections/que-es-la-rueda/banner";
import React from "react";

const QueEsLaRuedaPage = () => {
  return (
    <>
      <Banner />

      {/* publication */}
      <section id="que-es-la-rueda">
        <div className=" mil-p-120-90">
          <div className="row justify-content-center">
            {/*  <div className="col-lg-12">
              <div className="mil-image-frame mil-horizontal mil-up">
                <img
                  src="https://www.ruedadenegociosbolivia.com/wp-content/uploads/2016/06/slider-3.jpg"
                  alt="Publication cover"
                  className="mil-scale"
                  data-value-1=".90"
                  data-value-2="1.15"
                />
              </div>
              <div className="mil-info mil-up mil-mb-90">
                <div>
                  Categoria: &nbsp;<span className="mil-dark">Business</span>
                </div>
                <div>
                  Fecha: &nbsp;<span className="mil-dark">Abril 2023</span>
                </div>
                <div>
                  Autor: &nbsp;<span className="mil-dark">Dante Arias</span>
                </div>
              </div>
            </div> */}

            <div className="col-lg-8">
              <div className="row justify-content-between mil-p-90-120">
                <div className="col-lg-4 d-flex justify-content-center align-items-center">
                  <h3 className="mil-up mil-mb-60 " id="quienes-participan">
                    ¿Quiénes participan?
                  </h3>
                </div>
                <div className="col-lg-8">
                  <p className="mil-text-xl mil-dark mil-up mil-mb-60">
                    En la Rueda de Negocios participan empresarios,
                    emprendedores, representantes de compañías nacionales e
                    internacionales, y proveedores de servicios. Entre los
                    participantes se encuentran productores y fabricantes,
                    importadores y exportadores, proveedores, distribuidores,
                    comercializadores, agentes comerciales, prestadores de
                    servicios, e inversionistas. Durante el año 2023, la Rueda
                    contó con la presencia de empresas y representantes de
                    países como Argentina, Bolivia, Brasil, Chile, China,
                    Colombia, Ecuador, Hong Kong, Japón, México, Panamá, Perú,
                    Paraguay, Estados Unidos y Venezuela. Es una oportunidad
                    única para conectar con nuevos socios, explorar mercados
                    emergentes y establecer contactos estratégicos.
                  </p>
                </div>
              </div>

              <div className="mil-image-frame mil-horizontal mil-up mil-mb-60">
                <img
                  src="https://www.ruedadenegociosbolivia.com/wp-content/uploads/2016/06/DSC_0243.jpg"
                  alt="Servicios de la Rueda"
                />
              </div>

              <div
                className="row justify-content-between mil-p-90-120"
                id="servicios-de-la-rueda"
              >
                <div className="col-lg-8">
                  <p className="mil-text-xl mil-dark mil-up mil-mb-60">
                    Los participantes de la Rueda de Negocios cuentan con una
                    variedad de servicios diseñados para maximizar su
                    experiencia y oportunidades de negocio. Entre estos
                    servicios se incluyen una agenda de negocios personalizada
                    para cada empresa, asesoramiento y apoyo continuo durante el
                    evento, y un directorio digital de participantes. Los
                    participantes también reciben acreditación para ingresar a
                    Expocruz durante los días del encuentro (si no son
                    expositores), promoción internacional de su empresa, acceso
                    a un Business Center para participantes presenciales y
                    servicios de apoyo empresarial para todos los asistentes.
                    Además, se facilita el networking con representantes de
                    empresas, instituciones y organizaciones nacionales e
                    internacionales de su interés. Para la comodidad de los
                    participantes presenciales, la Rueda ofrece transporte
                    gratuito a la Feria Expocruz 2024, así como servicios de
                    guardarropa y custodia, y servicios de cafetería y catering,
                    estos últimos dos con un costo adicional.
                  </p>
                </div>

                <div className="col-lg-4 d-flex justify-content-center align-items-center">
                  <h3 className="mil-up mil-mb-60 ">Servicios de la Rueda</h3>
                </div>
              </div>

              <div className="mil-image-frame mil-horizontal mil-up mil-mb-60">
                <img
                  src="https://www.ruedadenegociosbolivia.com/wp-content/uploads/2016/06/DSC_0243.jpg"
                  alt="Servicios de la Rueda"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* publication end */}
    </>
  );
};

export default QueEsLaRuedaPage;
