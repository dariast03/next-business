import React from "react";

const Header = () => {
  return (
    <>
      <div className="mil-frame">
        <div className="mil-frame-top">
          <div />
          <div className="mil-menu-btn">
            <span />
          </div>
        </div>
        <div className="mil-frame-bottom">
          <div className="mil-current-page" />
          <div className="mil-back-to-top">
            <a href="#top" className="mil-link mil-dark mil-arrow-place">
              <span>Back to top</span>
            </a>
          </div>
        </div>
      </div>

      <img src="/img/logo.png" className="logo" />
    </>
  );
};

export default Header;
