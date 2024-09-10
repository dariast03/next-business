import { links } from "@/data/links";
import MenuItem from "./menu-item";
import CONSTANTS from "@/data/CONSTANTS";

const Menu = () => {
  return (
    <div className="mil-menu-frame">
      {/* frame clone */}
      <div className="mil-frame-top">
        <a href="home-1.html" className="mil-logo">
          <img
            src={`${CONSTANTS.BASE_URL}/img/logo-white.png`}
            alt="logo"
            style={{
              width: 200,
            }}
          />
        </a>
        <div className="mil-menu-btn">
          <span />
        </div>
      </div>
      {/* frame clone end */}
      <div className="container">
        <div className="mil-menu-content">
          <div className="row">
            <div className="col-xl-5">
              <nav className="mil-main-menu" id="swupMenu">
                <ul>
                  {links.map((link) => (
                    <MenuItem key={link.title} {...link} />
                  ))}

                  {/*            <li className="mil-has-children mil-active">
                    <a href="#.">Homepage</a>
                    <ul>
                      <li>
                        <a href="home-1.html">Landing page</a>
                      </li>
                      <li>
                        <a href="home-2.html">Personal</a>
                      </li>
                      <li>
                        <a href="portfolio-3.html">Portfolio slider</a>
                      </li>
                    </ul>
                  </li>

                  <li className="mil-has-children">
                    <a href="#.">Services</a>
                    <ul>
                      <li>
                        <a href="services.html">Services List</a>
                      </li>
                      <li>
                        <a href="service.html">Single service</a>
                      </li>
                    </ul>
                  </li>

                  <li className="mil-has-children">
                    <a href="#.">Newsletter</a>
                    <ul>
                      <li>
                        <a href="blog.html">Blog List</a>
                      </li>
                      <li>
                        <a href="publication.html">Publication</a>
                      </li>
                    </ul>
                  </li>

                  <li className="mil-has-children">
                    <a href="#.">Other pages</a>
                    <ul>
                      <li>
                        <a href="team.html">Team</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                      <li>
                        <a href="404.html">404</a>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </nav>
            </div>
            {/*   <div className="col-xl-7">
              <div className="mil-menu-right-frame">
                <div className="mil-animation-in">
                  <div className="mil-animation-frame">
                    <div
                      className="mil-animation mil-position-1 mil-scale"
                      data-value-1={2}
                      data-value-2={2}
                    />
                  </div>
                </div>
                <div className="mil-menu-right">
                  <div className="row">
                    <div className="col-lg-8 mil-mb-60">
                      <h6 className="mil-muted mil-mb-30">Projects</h6>
                      <ul className="mil-menu-list">
                        <li>
                          <a href="project-1.html" className="mil-light-soft">
                            Interior design studio
                          </a>
                        </li>
                        <li>
                          <a href="project-2.html" className="mil-light-soft">
                            Home Security Camera
                          </a>
                        </li>
                        <li>
                          <a href="project-3.html" className="mil-light-soft">
                            Kemia Honest Skincare
                          </a>
                        </li>
                        <li>
                          <a href="project-4.html" className="mil-light-soft">
                            Cascade of Lava
                          </a>
                        </li>
                        <li>
                          <a href="project-5.html" className="mil-light-soft">
                            Air Pro by Molekule
                          </a>
                        </li>
                        <li>
                          <a href="project-6.html" className="mil-light-soft">
                            Tonys Chocolonely
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4 mil-mb-60">
                      <h6 className="mil-muted mil-mb-30">Useful links</h6>
                      <ul className="mil-menu-list">
                        <li>
                          <a href="#." className="mil-light-soft">
                            Privacy Policy
                          </a>
                        </li>
                        <li>
                          <a href="#." className="mil-light-soft">
                            Terms and conditions
                          </a>
                        </li>
                        <li>
                          <a href="#." className="mil-light-soft">
                            Cookie Policy
                          </a>
                        </li>
                        <li>
                          <a href="#." className="mil-light-soft">
                            Careers
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mil-divider mil-mb-60" />
                  <div className="row justify-content-between">
                    <div className="col-lg-4 mil-mb-60">
                      <h6 className="mil-muted mil-mb-30">Canada</h6>
                      <p className="mil-light-soft mil-up">
                        71 South Los Carneros Road, California{" "}
                        <span className="mil-no-wrap">+51 174 705 812</span>
                      </p>
                    </div>
                    <div className="col-lg-4 mil-mb-60">
                      <h6 className="mil-muted mil-mb-30">Germany</h6>
                      <p className="mil-light-soft">
                        Leehove 40, 2678 MC De Lier, Netherlands{" "}
                        <span className="mil-no-wrap">+31 174 705 811</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
