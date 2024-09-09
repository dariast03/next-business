import CONSTANTS from "@/data/CONSTANTS";
import { partners } from "@/data/partners";
import { cn } from "@/lib/utils";
import React from "react";

const Partners = () => {
  return (
    <div className="mil-soft-bg">
      <div className="container mil-p-0-120">
        <div className="swiper-container mil-infinite-show mil-up">
          <div className="swiper-wrapper">
            {partners.map((partner, index) => (
              <div className="swiper-slide" key={partner}>
                <div
                  className={cn([
                    "mil-partner-frame",
                    index % 2 === 0 && "mil-traslate-t",
                  ])}
                  style={{ width: 150 }}
                >
                  <img
                    src={`${CONSTANTS.BASE_URL}/img/partners/${partner}`}
                    alt="logo"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
