"use client";
import React from "react";
import Link from "next/link";
import { cn } from "../../../lib/utils";
import { useActiveLink } from "@/hooks/use-active-link";

export type MenuItemProps = {
  title: string;
  url: string;
  subitems?: Omit<MenuItemProps, "subitems">[];
};

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { title, url, subitems } = props;
  const hasSubitems = subitems && subitems.length > 0;

  const checkActiveLink = useActiveLink();

  return (
    <li
      className={cn(["mil-has-children", checkActiveLink(url) && "mil-active"])}
    >
      {hasSubitems ? <a href="">{title}</a> : <Link href={url}>{title}</Link>}

      {subitems && (
        <ul>
          {subitems.map((subitem) => (
            <li key={subitem.title}>
              <Link href={subitem.url}>{subitem.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;
