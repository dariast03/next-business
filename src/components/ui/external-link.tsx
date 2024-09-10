"use client";
import React from "react";

type Props = React.HtmlHTMLAttributes<HTMLDivElement> & {
  href: string;
};

const ExternalLink: React.FC<Props> = (props) => {
  return (
    <div
      {...props}
      onClick={(e) => {
        e.preventDefault();
        if (typeof window !== "undefined") {
          window.open(props.href as string, "_blank");
        }
      }}
    ></div>
  );
};

export default ExternalLink;
