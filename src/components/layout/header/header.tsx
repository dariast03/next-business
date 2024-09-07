import CONSTANTS from "@/data/CONSTANTS";
import Link from "next/link";
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
            <a href="#top" className="mil-link mil-dark mil-arrow-place"></a>
          </div>
        </div>
      </div>

      <Link href={"/"}>
        <img src={`${CONSTANTS.BASE_URL}/img/logo.png`} className="logo" />
      </Link>
    </>
  );
};

export default Header;
