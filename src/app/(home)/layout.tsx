import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/layout/header/header";
import Menu from "@/components/layout/menu/menu";
import CONSTANTS from "@/data/CONSTANTS";
import Footer from "@/components/sections/footer";
import Xd from "@/components/xd";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* wrapper */}
      <div className="mil-wrapper" id="top">
        {/* cursor */}
        {/*  <div className="mil-ball">
          <span className="mil-icon-1">
            <svg viewBox="0 0 128 128">
              <path d="M106.1,41.9c-1.2-1.2-3.1-1.2-4.2,0c-1.2,1.2-1.2,3.1,0,4.2L116.8,61H11.2l14.9-14.9c1.2-1.2,1.2-3.1,0-4.2	c-1.2-1.2-3.1-1.2-4.2,0l-20,20c-1.2,1.2-1.2,3.1,0,4.2l20,20c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9c1.2-1.2,1.2-3.1,0-4.2	L11.2,67h105.5l-14.9,14.9c-1.2,1.2-1.2,3.1,0,4.2c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9l20-20c1.2-1.2,1.2-3.1,0-4.2L106.1,41.9	z" />
            </svg>
          </span>
          <div className="mil-more-text">More</div>
          <div className="mil-choose-text">Escoger</div>
        </div> */}
        {/* cursor end */}

        {/* preloader */}
        {/* <div className="mil-preloader">
          <div className="mil-preloader-animation">
            <div className="mil-pos-abs mil-animation-1">
              <p className="mil-h3 mil-muted mil-thin">Bienvenido</p>
              <p className="mil-h3 mil-muted">a</p>
              <p className="mil-h3 mil-muted mil-thin">la</p>
            </div>
            <div className="mil-pos-abs mil-animation-2">
              <div className="mil-reveal-frame">
                <p className="mil-reveal-box"></p>
                <p className="mil-h3 mil-muted mil-thin">
                  Rueda de Negocios - ExpoSur 2024
                </p>
              </div>
            </div>
          </div>
        </div> */}
        {/* preloader end */}
        {/* scrollbar progress */}
        <div className="mil-progress-track">
          <div className="mil-progress" />
        </div>
        {/* scrollbar progress end */}
        {/* menu */}

        <Menu />

        {/* menu */}
        {/* curtain */}
        <div className="mil-curtain" />
        {/* curtain end */}
        {/* frame */}
        <Header />
        {/* frame end */}
        {/* content */}
        <div className="mil-content">
          <div id="swupMain" className="mil-main-transition">
            {children}
          </div>
        </div>
        {/* content */}
      </div>
      {/* wrapper end */}

      {/* footer */}
      <Footer />
      {/* footer end */}

      <Script src={`${CONSTANTS.BASE_URL}/js/plugins/jquery.min.js`} />
      <Script src={`${CONSTANTS.BASE_URL}/js/plugins/swup.min.js`} />
      <Script src={`${CONSTANTS.BASE_URL}/js/plugins/swiper.min.js`} />
      <Script src={`${CONSTANTS.BASE_URL}/js/plugins/fancybox.min.js`} />
      <Script src={`${CONSTANTS.BASE_URL}/js/plugins/gsap.min.js`} />
      <Script src={`${CONSTANTS.BASE_URL}/js/plugins/smooth-scroll.js`} />
      <Script src={`${CONSTANTS.BASE_URL}/js/plugins/ScrollTrigger.min.js`} />
      <Script src={`${CONSTANTS.BASE_URL}/js/plugins/ScrollTo.min.js`} />
      <Script src={`${CONSTANTS.BASE_URL}/js/main.js`} />
    </>
  );
}
