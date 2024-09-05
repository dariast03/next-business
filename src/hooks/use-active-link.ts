import { usePathname } from "next/navigation";

export const useActiveLink = () => {
  const pathname = usePathname();

  const checkActiveLink = (nav: string) => {
    const pathArray = pathname.split("/").filter((item) => item !== "");

    if (nav === "/" && pathArray.length < 1) return true;

    return pathArray.includes(nav.replace(/^\//, ""));
  };

  return checkActiveLink;
};
