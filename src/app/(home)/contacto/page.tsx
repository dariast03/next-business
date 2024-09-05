import React from "react";

const ContactPage = () => {
  return (
    <>
      {/* banner */}
      <div className="mil-inner-banner mil-p-0-120">
        <div className="mil-banner-content mil-center mil-up">
          <div className="container">
            <ul className="mil-breadcrumbs mil-center mil-mb-60">
              <li>
                <a href="home-1.html">Homepage</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
            <h1 className="mil-mb-60">Get in touch!</h1>
            <a
              href="#contact"
              className="mil-link mil-dark mil-arrow-place mil-down-arrow"
            >
              <span>Send message</span>
            </a>
          </div>
        </div>
      </div>
      {/* banner end */}
      {/* map */}
      <div className="mil-map-frame mil-up">
        <div className="mil-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1396.5769090312324!2d-73.6519672!3d45.5673453!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91f8abc30e0ff%3A0xfc6d9cbb49022e9c!2sManoir%20Saint-Joseph!5e0!3m2!1sen!2sua!4v1685485811069!5m2!1sen!2sua"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      {/* map end */}
      {/* contact form */}
      <section id="contact">
        <div className="container mil-p-120-90">
          <h3 className="mil-center mil-up mil-mb-120">
            Lets <span className="mil-thin">Talk</span>
          </h3>
          <form className="row align-items-center">
            <div className="col-lg-6 mil-up">
              <input type="text" placeholder="What's your name" />
            </div>
            <div className="col-lg-6 mil-up">
              <input type="email" placeholder="Your Email" />
            </div>
            <div className="col-lg-12 mil-up">
              <textarea
                placeholder="Tell us about our project"
                defaultValue={""}
              />
            </div>
            <div className="col-lg-8">
              <p className="mil-up mil-mb-30">
                <span className="mil-accent">*</span> We promise not to disclose
                your personal information to third parties.
              </p>
            </div>
            <div className="col-lg-4">
              <div className="mil-adaptive-right mil-up mil-mb-30">
                <button type="submit" className="mil-button mil-arrow-place">
                  <span>Send message</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* contact form end */}
    </>
  );
};

export default ContactPage;
