"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

type NavLinksProps = {
  containerStyles: string;
};

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

export const NavLinks = ({ containerStyles }: NavLinksProps) => {
  const pathname = usePathname();

  return (
    <ul className={containerStyles}>
      {links.map((link, index) => {
        //Determinando si el link actual hace match con el pathname actual
        const isActive = pathname === link.path;
        const chartLenght = link.name.length;
        const lineWidth = chartLenght > 5 ? "after:w-[120%]" : "after:w-[90%]";
        return (
          <Link
            href={link.path}
            key={index}
            className={`relative uppercase text-wite text-lg ${
              isActive &&
              `after:content-[""] after:block after:absolute after:left-0 after:top-1/2 ${lineWidth} after:h-[4px] after:bg-accent after:-translate-y-1/2 after:z-0`
            }`}
          >
            <span className="relative z-10">{link.name}</span>
          </Link>
        );
      })}
    </ul>
  );
};
