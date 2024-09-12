"use client";
import Link from "next/link";

type Props = React.HtmlHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

const ExternalLink: React.FC<Props> = (props) => {
  return (
    <a
      {...props}
      rel="noreferrer"
      data-no-swup
      onClick={(e) => {
        e.preventDefault();
        window.open(props.href, "_blank");
      }}
      target="_blank"
    />
  );
};

export default ExternalLink;
