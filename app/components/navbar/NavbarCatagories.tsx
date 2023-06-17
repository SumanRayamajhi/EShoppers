import Link from "next/link";
import React from "react";
import { links } from "./Nav-links";

interface NavCatagoriesProps {
  open: boolean;
  onClickMenuButton: () => void;
}

const NavbarCatagories: React.FC<NavCatagoriesProps> = ({
  open,
  onClickMenuButton,
}) => {
  return (
    <ul
      className={`md:flex md:items-center md:pb-0 absolute md:static bg-teal-600 md:z-auto z-[-1] left-0 wifull md:w-auto md:pl-0 pl-9 transition-all duration-400 ease-in ${
        open ? "top-12 p-5" : "top-[-490px]"
      }`}
    >
      {links.map((link) => (
        <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
          <Link
            href={link.to}
            className="text-teal-100 hover:bg-teal-400 px-1 duration-300 rounded-md"
            onClick={onClickMenuButton}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarCatagories;
