import Banner from "@/components/sections/que-es-la-rueda/banner";
import React from "react";

const QueEsLaRuedaPage = () => {
  return (
    <>
      <Banner />

      {/* publication */}
      <section id="blog">
        <div className="container mil-p-120-90">
          <div className="row justify-content-center">
            <div className="col-lg-12">
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
            </div>

            <div className="col-lg-8">
              <h5 className="mil-up mil-mb-30" id="quienes-participan">
                ¿Quiénes participan?
              </h5>
              <p className="mil-text-xl mil-dark mil-up mil-mb-60">
                En la Rueda de Negocios participan empresarios, emprendedores,
                representantes de compañías nacionales e internacionales, y
                proveedores de servicios. Entre los participantes se encuentran
                productores y fabricantes, importadores y exportadores,
                proveedores, distribuidores, comercializadores, agentes
                comerciales, prestadores de servicios, e inversionistas. Durante
                el año 2023, la Rueda contó con la presencia de empresas y
                representantes de países como Argentina, Bolivia, Brasil, Chile,
                China, Colombia, Ecuador, Hong Kong, Japón, México, Panamá,
                Perú, Paraguay, Estados Unidos y Venezuela. Es una oportunidad
                única para conectar con nuevos socios, explorar mercados
                emergentes y establecer contactos estratégicos.
              </p>
              <div className="mil-image-frame mil-horizontal mil-up mil-mb-60">
                <img
                  src="https://www.ruedadenegociosbolivia.com/wp-content/uploads/2016/06/DSC_0243.jpg"
                  alt="Servicios de la Rueda"
                />
              </div>
              <h5 className="mil-up mil-mb-30" id="servicios-de-la-rueda">
                Servicios de la Rueda
              </h5>
              <p className="mil-up mil-mb-60">
                Los participantes de la Rueda de Negocios cuentan con una
                variedad de servicios diseñados para maximizar su experiencia y
                oportunidades de negocio. Entre estos servicios se incluyen una
                agenda de negocios personalizada para cada empresa,
                asesoramiento y apoyo continuo durante el evento, y un
                directorio digital de participantes. Los participantes también
                reciben acreditación para ingresar a Expocruz durante los días
                del encuentro (si no son expositores), promoción internacional
                de su empresa, acceso a un Business Center para participantes
                presenciales y servicios de apoyo empresarial para todos los
                asistentes. Además, se facilita el networking con representantes
                de empresas, instituciones y organizaciones nacionales e
                internacionales de su interés. Para la comodidad de los
                participantes presenciales, la Rueda ofrece transporte gratuito
                a la Feria Expocruz 2024, así como servicios de guardarropa y
                custodia, y servicios de cafetería y catering, estos últimos dos
                con un costo adicional.
              </p>
              <div className="mil-image-frame mil-horizontal mil-up mil-mb-60">
                <img
                  src="https://www.ruedadenegociosbolivia.com/wp-content/uploads/2016/06/DSC_0256.jpg"
                  alt="Resultados anteriores"
                />
              </div>
              <h5 className="mil-up mil-mb-30" id="resultados-anteriores">
                Resultados Anteriores
              </h5>
              <p className="mil-up mil-mb-60">
                En las ediciones anteriores de la Rueda de Negocios se han
                alcanzado resultados destacados, consolidando su importancia
                como un espacio de oportunidades comerciales y networking
                internacional. En 2021, participaron más de 650 empresas de 13
                países, con un total de 7,950 reuniones de negocios que
                generaron un monto de USD 98,5 millones. En 2022, el evento
                creció en participación, con más de 700 empresas de 20 países,
                alcanzando 8,790 reuniones y generando USD 105,2 millones en
                negocios. La versión de 2023 mantuvo la tendencia con más de 700
                empresas de 16 países, organizando 8,840 reuniones de negocios y
                logrando un monto total de USD 109,7 millones. Estos resultados
                demuestran el impacto positivo y el continuo crecimiento de la
                Rueda de Negocios como plataforma de intercambio comercial.
              </p>
            </div>

            {/* <div className="col-lg-8">
              <p className="mil-text-xl mil-dark mil-up mil-mb-60">
                Are you passionate about design and interested in pursuing a
                career as a graphic designer? Graphic design is a dynamic field
                that combines creativity, technical skills, and a keen eye for
                aesthetics. Whether you're a beginner or someone looking to
                enhance their skills, this article will guide you through 10
                simple steps to become a graphic designer.
              </p>

              <blockquote className="mil-up mil-mb-60">
                "Creativity is intelligence having fun." - Albert Einstein
              </blockquote>

              <h5 className="mil-up mil-mb-30">Understand the Field</h5>

              <p className="mil-up mil-mb-60">
                Start by gaining a comprehensive understanding of what graphic
                design entails. Research the different types of graphic design,
                such as branding, web design, print design, and illustration.
                Explore the work of successful graphic designers and analyze
                their portfolios to learn about various design styles and
                techniques.
              </p>

              <h5 className="mil-up mil-mb-30">Get a Design Education</h5>

              <p className="mil-up mil-mb-60">
                While formal education is not always a requirement, it can
                provide you with a solid foundation and enhance your credibility
                as a graphic designer. Consider pursuing a degree or diploma in
                graphic design or a related field. Look for reputable design
                schools or online courses that offer comprehensive programs to
                learn both theory and practical skills.
              </p>

              <h5 className="mil-up mil-mb-30">Build Your Portfolio</h5>

              <p className="mil-up mil-mb-60">
                Your portfolio is your calling card as a graphic designer.
                Compile a collection of your best design projects to showcase
                your abilities and style. Include a variety of work, such as
                logos, brochures, websites, or illustrations, to demonstrate
                your versatility. Constantly update your portfolio as you
                complete new projects or improve existing ones.
              </p>

              <h5 className="mil-up mil-mb-30">Gain Practical Experience</h5>

              <p className="mil-up mil-mb-60">
                To become a successful graphic designer, practical experience is
                crucial. Seek internships, freelance opportunities, or
                entry-level positions to gain hands-on experience in the field.
                This will allow you to apply your skills in real-world
                scenarios, understand client requirements, work with deadlines,
                and collaborate with others in a professional environment.
              </p>

              <div className="row">
                <div className="col-lg-6">
                  <div className="mil-image-frame mil-horizontal mil-up mil-mb-30">
                    <img src="img/blog/4.jpg" alt="Publication cover" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mil-image-frame mil-horizontal mil-up mil-mb-60">
                    <img src="img/blog/7.jpg" alt="Publication cover" />
                  </div>
                </div>
              </div>

              <p className="mil-up mil-mb-60">
                Remember that creativity is at the core of graphic design.
                Embrace your creativity, experiment with different ideas, and
                think outside the box to create unique and impactful designs.
                Don't be afraid to take risks and push the boundaries of
                traditional design. Steve Jobs once said:
              </p>

              <blockquote className="mil-up mil-mb-60">
                "Design is not just what it looks like and feels like. Design is
                how it works." So go ahead, unleash your creativity, and embark
                on your path to becoming a graphic designer!
              </blockquote>

              <p className="mil-up mil-mb-30">
                In addition to the aforementioned steps, other important aspects
                of becoming a graphic designer include networking with industry
                professionals, staying updated on design trends and
                technologies, and continuously learning and improving your
                skills.
              </p>

              <p className="mil-up mil-mb-30">
                Becoming a graphic designer is an exciting journey that requires
                dedication, hard work, and a genuine passion for design. By
                following these 10 simple steps, you'll be well on your way to
                establishing yourself as a skilled graphic designer and opening
                doors to a rewarding and fulfilling career.
              </p>
            </div> */}
          </div>
        </div>
      </section>
      {/* publication end */}
    </>
  );
};

export default QueEsLaRuedaPage;
